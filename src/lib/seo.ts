import type { Metadata } from "next";
import { pages, site } from "@/lib/data";

export interface PageSeo {
  title: string;
  description: string;
  keywords: string[];
  path: string;
}

export function buildPageMetadata({ title, description, keywords, path }: PageSeo): Metadata {
  const canonical = `${site.baseUrl}${path === "/" ? "/" : `${path}/`}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      type: "website",
      images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-default.svg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function breadcrumbSchema(path: string, name: string) {
  const items =
    path === "/"
      ? [{ name: "Home", url: `${site.baseUrl}/` }]
      : [
          { name: "Home", url: `${site.baseUrl}/` },
          { name, url: `${site.baseUrl}${path}/` },
        ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function videoGameSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: site.gameName,
    alternateName: site.abbreviation,
    description:
      "Build A Ring Farm is a Roblox farming simulator where players plant seeds, sell harvests, use ring multipliers, chase mutations, and upgrade their farm.",
    url: `https://www.roblox.com/games/${site.robloxGameId}/`,
    applicationCategory: "Game",
    genre: site.genre,
    gamePlatform: "Roblox",
    author: {
      "@type": "Organization",
      name: site.developer,
    },
  };
}

export function jsonLd(data: object | object[]) {
  return JSON.stringify(data).replaceAll("<", "\\u003c");
}

export function sitemapEntries() {
  return pages.map((page) => ({
    url: `${site.baseUrl}${page.path === "/" ? "/" : `${page.path}/`}`,
    lastModified: new Date("2026-06-06"),
    changeFrequency: page.path.includes("codes") ? "daily" : "weekly",
    priority: page.priority,
  }));
}

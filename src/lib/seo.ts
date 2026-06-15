import { pages, site } from "@/lib/data";

export interface PageSeo {
  title: string;
  description: string;
  keywords: string[];
  path: string;
}

export interface PageMetaTags {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    type: "website";
    images: { url: string; width: number; height: number; alt: string }[];
  };
  twitter: {
    card: "summary_large_image";
    title: string;
    description: string;
    images: string[];
  };
  robots: {
    index: boolean;
    follow: boolean;
    googleBot: {
      index: boolean;
      follow: boolean;
      "max-image-preview": "large";
      "max-snippet": number;
    };
  };
}

export function buildPageMetadata({ title, description, keywords, path }: PageSeo): PageMetaTags {
  const canonical = `${site.baseUrl}${path === "/" ? "/" : `${path}/`}`;

  return {
    title,
    description,
    keywords,
    canonical,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      type: "website",
      images: [{ url: `${site.baseUrl}/images/og-default.jpg`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${site.baseUrl}/images/og-default.jpg`],
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

export function ogMetaTags(meta: PageMetaTags) {
  const ogImage = meta.openGraph.images[0]!;
  return [
    { property: "og:title", content: meta.openGraph.title },
    { property: "og:description", content: meta.openGraph.description },
    { property: "og:url", content: meta.openGraph.url },
    { property: "og:site_name", content: meta.openGraph.siteName },
    { property: "og:type", content: meta.openGraph.type },
    { property: "og:image", content: ogImage.url },
    { property: "og:image:width", content: String(ogImage.width) },
    { property: "og:image:height", content: String(ogImage.height) },
    { name: "twitter:card", content: meta.twitter.card },
    { name: "twitter:title", content: meta.twitter.title },
    { name: "twitter:description", content: meta.twitter.description },
    { name: "twitter:image", content: meta.twitter.images[0]! },
  ];
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
    url: `https://www.roblox.com/games/${site.robloxGameId}`,
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

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.baseUrl,
    description:
      "Build A Ring Farm resource hub — profit calculator, working codes, seed tier list, pets, mutations, and Update 4 guides.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${site.baseUrl}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function sitemapEntries() {
  return pages.map((page) => ({
    url: `${site.baseUrl}${page.path}`,
    lastModified: new Date("2026-06-06"),
    changeFrequency: page.path.includes("codes") ? "daily" : "weekly",
    priority: page.priority,
  }));
}

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
  const canonical = `${site.baseUrl}${path}`;

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
      images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-default.jpg"],
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
      "Bridger: WESTERN is a Roblox western action RPG built around gunfights, horses, Stands, vampire threats, factions, Tarot cards, and open-world PvP survival.",
    url: `https://www.roblox.com/games/${site.robloxGameId}/bridger-WESTERN`,
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
    url: `${site.baseUrl}${page.path}`,
    lastModified: new Date("2026-06-06"),
    changeFrequency: page.path.includes("codes") ? "daily" : "weekly",
    priority: page.priority,
  }));
}

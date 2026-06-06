import type { MetadataRoute } from "next";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://barfguides.pages.dev/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 1 },
    { url: "https://barfguides.pages.dev/profit-calculator/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.95 },
    { url: "https://barfguides.pages.dev/codes/", lastModified: "2026-06-06", changeFrequency: "daily", priority: 0.9 },
    { url: "https://barfguides.pages.dev/tier-list/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.9 },
    { url: "https://barfguides.pages.dev/update-4-patch-notes/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.9 },
    { url: "https://barfguides.pages.dev/beginner-guide/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.85 },
    { url: "https://barfguides.pages.dev/pets-tier-list/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.8 },
    { url: "https://barfguides.pages.dev/mutations-tier-list/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.8 },
    { url: "https://barfguides.pages.dev/transcendent-seeds-guide/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.75 },
    { url: "https://barfguides.pages.dev/money-guide/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.8 },
    { url: "https://barfguides.pages.dev/compost-machine-guide/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.75 },
    { url: "https://barfguides.pages.dev/contracts-guide/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.75 },
    { url: "https://barfguides.pages.dev/seeds-database/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.85 },
    { url: "https://barfguides.pages.dev/events-guide/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.78 },
    { url: "https://barfguides.pages.dev/faq/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.7 },
    { url: "https://barfguides.pages.dev/about/", lastModified: "2026-06-06", changeFrequency: "monthly", priority: 0.4 },
    { url: "https://barfguides.pages.dev/privacy-policy/", lastModified: "2026-06-06", changeFrequency: "monthly", priority: 0.2 },
  ];
}

import type { MetadataRoute } from "next";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://buildaringfarmguides.com/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 1 },
    { url: "https://buildaringfarmguides.com/profit-calculator/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.95 },
    { url: "https://buildaringfarmguides.com/codes/", lastModified: "2026-06-06", changeFrequency: "daily", priority: 0.9 },
    { url: "https://buildaringfarmguides.com/tier-list/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.9 },
    { url: "https://buildaringfarmguides.com/update-4-patch-notes/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.9 },
    { url: "https://buildaringfarmguides.com/beginner-guide/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.85 },
    { url: "https://buildaringfarmguides.com/pets-tier-list/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.8 },
    { url: "https://buildaringfarmguides.com/mutations-tier-list/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.8 },
    { url: "https://buildaringfarmguides.com/transcendent-seeds-guide/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.75 },
    { url: "https://buildaringfarmguides.com/money-guide/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.8 },
    { url: "https://buildaringfarmguides.com/compost-machine-guide/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.75 },
    { url: "https://buildaringfarmguides.com/contracts-guide/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.75 },
    { url: "https://buildaringfarmguides.com/seeds-database/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.85 },
    { url: "https://buildaringfarmguides.com/events-guide/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.78 },
    { url: "https://buildaringfarmguides.com/faq/", lastModified: "2026-06-06", changeFrequency: "weekly", priority: 0.7 },
    { url: "https://buildaringfarmguides.com/about/", lastModified: "2026-06-06", changeFrequency: "monthly", priority: 0.4 },
    { url: "https://buildaringfarmguides.com/privacy-policy/", lastModified: "2026-06-06", changeFrequency: "monthly", priority: 0.2 },
  ];
}

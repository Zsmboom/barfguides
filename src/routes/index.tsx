import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/app/page";
import { pageSeo } from "@/lib/page-seo";
import { buildPageMetadata, ogMetaTags } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.home);
    return {
      meta: [
        { title: meta.title },
        { name: "description", content: meta.description },
        { name: "keywords", content: meta.keywords.join(", ") },
        ...ogMetaTags(meta),
        { name: "robots", content: "index, follow" },
      ],
      links: [{ rel: "canonical", href: meta.canonical }],
    };
  },
  component: HomePage,
});

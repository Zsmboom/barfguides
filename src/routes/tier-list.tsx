import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pageSeo } from "@/lib/page-seo";
import { buildPageMetadata, ogMetaTags } from "@/lib/seo";

const TierListPage = lazy(() =>
  import("@/app/tier-list/page").then((m) => ({ default: m.default })),
);

export const Route = createFileRoute("/tier-list")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.tierList);
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
  component: TierListPage,
});

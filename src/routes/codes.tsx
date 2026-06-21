import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pageSeo } from "@/lib/page-seo";
import { buildPageMetadata } from "@/lib/seo";

const CodesPage = lazy(() =>
  import("@/app/codes/page").then((m) => ({ default: m.default })),
);

export const Route = createFileRoute("/codes")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.codes);
    return {
      meta: [
        { title: meta.title },
        { name: "description", content: meta.description },
        { name: "keywords", content: meta.keywords.join(", ") },
        { property: "og:title", content: meta.openGraph.title },
        { property: "og:description", content: meta.openGraph.description },
        { property: "og:url", content: meta.openGraph.url },
        { property: "og:site_name", content: meta.openGraph.siteName },
        { property: "og:type", content: meta.openGraph.type },
        { property: "og:image", content: meta.openGraph.images[0]!.url },
        { name: "twitter:card", content: meta.twitter.card },
        { name: "twitter:title", content: meta.twitter.title },
        { name: "twitter:description", content: meta.twitter.description },
        { name: "twitter:image", content: meta.twitter.images[0]! },
        { name: "robots", content: "index, follow" },
      ],
      links: [{ rel: "canonical", href: meta.canonical }],
    };
  },
  component: CodesPage,
});

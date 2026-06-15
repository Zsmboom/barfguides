import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pageSeo } from "@/lib/page-seo";
import { buildPageMetadata, ogMetaTags } from "@/lib/seo";

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
        ...ogMetaTags(meta),
        { name: "robots", content: "index, follow" },
      ],
      links: [{ rel: "canonical", href: meta.canonical }],
    };
  },
  component: CodesPage,
});

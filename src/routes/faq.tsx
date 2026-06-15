import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pageSeo } from "@/lib/page-seo";
import { buildPageMetadata, ogMetaTags } from "@/lib/seo";

const FaqPage = lazy(() =>
  import("@/app/faq/page").then((m) => ({ default: m.default })),
);

export const Route = createFileRoute("/faq")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.faq);
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
  component: FaqPage,
});

import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pageSeo } from "@/lib/page-seo";
import { buildPageMetadata, ogMetaTags } from "@/lib/seo";

const ContractsGuidePage = lazy(() =>
  import("@/app/contracts-guide/page").then((m) => ({ default: m.default })),
);

export const Route = createFileRoute("/contracts-guide")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.contracts);
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
  component: ContractsGuidePage,
});

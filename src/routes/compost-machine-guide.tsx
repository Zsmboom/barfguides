import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pageSeo } from "@/lib/page-seo";
import { buildPageMetadata, ogMetaTags } from "@/lib/seo";

const CompostMachineGuidePage = lazy(() =>
  import("@/app/compost-machine-guide/page").then((m) => ({ default: m.default })),
);

export const Route = createFileRoute("/compost-machine-guide")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.compost);
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
  component: CompostMachineGuidePage,
});

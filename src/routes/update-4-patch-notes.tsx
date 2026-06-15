import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { pageSeo } from "@/lib/page-seo";
import { buildPageMetadata, ogMetaTags } from "@/lib/seo";

const Update4PatchNotesPage = lazy(() =>
  import("@/app/update-4-patch-notes/page").then((m) => ({ default: m.default })),
);

export const Route = createFileRoute("/update-4-patch-notes")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.update4);
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
  component: Update4PatchNotesPage,
});

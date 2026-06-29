import { ArticlePage } from "@/components/ArticlePage";
import { articles } from "@/lib/bridger-content";

export default function Update4PatchNotesPage() {
  return <ArticlePage article={articles.progression} path="/update-4-patch-notes" label="Update Log" />;
}

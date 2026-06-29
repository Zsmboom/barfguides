import { ArticlePage } from "@/components/ArticlePage";
import { articles } from "@/lib/bridger-content";

export default function BeginnerGuidePage() {
  return <ArticlePage article={articles.beginner} path="/beginner-guide" label="Beginner Guide" />;
}

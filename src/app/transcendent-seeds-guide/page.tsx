import { ArticlePage } from "@/components/ArticlePage";
import { articles } from "@/lib/bridger-content";

export default function TranscendentSeedsGuidePage() {
  return <ArticlePage article={articles.progression} path="/transcendent-seeds-guide" label="Horse Guide" />;
}

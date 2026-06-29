import { ArticlePage } from "@/components/ArticlePage";
import { articles } from "@/lib/bridger-content";

export default function ContractsGuidePage() {
  return <ArticlePage article={articles.codes} path="/contracts-guide" label="Trading Guide" />;
}

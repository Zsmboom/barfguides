import { ArticlePage } from "@/components/ArticlePage";
import { articles } from "@/lib/bridger-content";

export default function MoneyGuidePage() {
  return <ArticlePage article={articles.progression} path="/money-guide" label="Moola Guide" />;
}

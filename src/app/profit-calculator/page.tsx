import { ArticlePage } from "@/components/ArticlePage";
import { articles } from "@/lib/bridger-content";

export default function ProfitCalculatorPage() {
  return <ArticlePage article={articles.progression} path="/profit-calculator" label="Progression Guide" />;
}

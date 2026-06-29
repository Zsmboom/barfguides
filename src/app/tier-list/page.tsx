import { ArticlePage } from "@/components/ArticlePage";
import { articles } from "@/lib/bridger-content";

export default function TierListPage() {
  return <ArticlePage article={articles.stands} path="/tier-list" label="Stand Tier List" />;
}

import { ArticlePage } from "@/components/ArticlePage";
import { articles } from "@/lib/bridger-content";

export default function PetsTierListPage() {
  return <ArticlePage article={articles.codes} path="/pets-tier-list" label="Cards Guide" />;
}

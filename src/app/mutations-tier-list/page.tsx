import { ArticlePage } from "@/components/ArticlePage";
import { articles } from "@/lib/bridger-content";

export default function MutationsTierListPage() {
  return <ArticlePage article={articles.stands} path="/mutations-tier-list" label="All Stands Guide" />;
}

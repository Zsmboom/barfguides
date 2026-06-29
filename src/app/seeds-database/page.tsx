import { ArticlePage } from "@/components/ArticlePage";
import { articles } from "@/lib/bridger-content";

export default function SeedsDatabasePage() {
  return <ArticlePage article={articles.weapons} path="/seeds-database" label="Gun Tier List" />;
}

import { ArticlePage } from "@/components/ArticlePage";
import { articles } from "@/lib/bridger-content";

export default function CodesPage() {
  return <ArticlePage article={articles.codes} path="/codes" label="Codes Guide" />;
}

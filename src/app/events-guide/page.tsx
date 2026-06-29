import { ArticlePage } from "@/components/ArticlePage";
import { articles } from "@/lib/bridger-content";

export default function EventsGuidePage() {
  return <ArticlePage article={articles.progression} path="/events-guide" label="Events Guide" />;
}

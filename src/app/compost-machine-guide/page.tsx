import { ArticlePage } from "@/components/ArticlePage";
import { articles } from "@/lib/bridger-content";

export default function CompostMachineGuidePage() {
  return <ArticlePage article={articles.weapons} path="/compost-machine-guide" label="Weapons Guide" />;
}

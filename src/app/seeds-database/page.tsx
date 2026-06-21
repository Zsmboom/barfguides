import { DataDisclaimer } from "@/components/DataDisclaimer";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { SeedsTable } from "@/components/Tables";
import { pageSeo } from "@/lib/page-seo";
import { breadcrumbSchema } from "@/lib/seo";
import { sortedSeedsByProfit } from "@/lib/data";


export function SeedsDatabasePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <JsonLd data={[breadcrumbSchema("/seeds-database", "Seeds Database")]} />
      <Section eyebrow="DATABASE" level={1} title="Build A Ring Farm Seeds Database">
        <p className="text-slate-400">All 115 seeds sorted by Outer Ring profit per minute. Use the tier list to plan your next seed purchase.</p>
      </Section>
      <Section title="All Seeds (Ranked by Outer Ring Profit)">
        <SeedsTable seeds={sortedSeedsByProfit()} />
      </Section>
      <DataDisclaimer dataType="seed prices and stats" />
    </main>
  );
}

export default SeedsDatabasePage;

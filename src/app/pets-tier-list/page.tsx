import { JsonLd } from "@/components/JsonLd";
import { PetTable } from "@/components/Tables";
import { InfoCard, Section } from "@/components/Section";
import { DataDisclaimer } from "@/components/DataDisclaimer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { byTier, pets } from "@/lib/data";
import { pageSeo } from "@/lib/page-seo";
import { breadcrumbSchema } from "@/lib/seo";


export function PetsTierListPage() {
  const grouped = byTier(pets);
  const tiers = ["S", "A", "B", "C", "D"] as const;

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <JsonLd data={[breadcrumbSchema("/pets-tier-list", "Pets Tier List")]} />
      <Breadcrumbs segments={[{label: "Home", href: "/"}, {label: "Pets Tier List", href: "/pets-tier-list"}]} />
      <Section eyebrow="TIER LIST" level={1} title="Build A Ring Farm Pets Tier List">
        <p className="text-slate-400">
          Every pet in Build A Ring Farm ranked from S-Tier (must-have) to D-Tier (skip). Choose the right pet for your playstyle and progression stage.
        </p>
      </Section>
      {tiers.map((tier) => {
        const items = grouped[tier];
        if (items.length === 0) return null;
        return (
          <Section key={tier} title={`${tier} Tier Pets`}>
            <PetTable pets={items} />
          </Section>
        );
      })}
      <Section title="How to Get Pets">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InfoCard title="Gamepass Purchase">
            Some pets can be purchased directly from the in-game shop using in-game currency.
          </InfoCard>
          <InfoCard title="Events & Drops">
            Limited pets are sometimes available through special events and Update drops.
          </InfoCard>
          <InfoCard title="Plant Contracts">
            Update 4 introduced Plant Contracts which can reward pet items.
          </InfoCard>
          <InfoCard title="Trading">
            Players can trade pets with each other in-game.
          </InfoCard>
        </div>
      </Section>
      <DataDisclaimer dataType="pet rankings and bonuses" />
    </main>
  );
}

export default PetsTierListPage;

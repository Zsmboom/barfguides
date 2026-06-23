import { JsonLd } from "@/components/JsonLd";
import { MutationTable } from "@/components/Tables";
import { InfoCard, Section } from "@/components/Section";
import { DataDisclaimer } from "@/components/DataDisclaimer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { mutations } from "@/lib/data";
import { pageSeo } from "@/lib/page-seo";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/seo";


const faq = [
  { question: "What is the best mutation in Build A Ring Farm?", answer: "Carnival (9.5x) is the highest multiplier, followed by Starfall (8x) and Admin (7x). For early game, Wet (1.5x) and Autumn (2x) are most accessible." },
  { question: "How do I get mutations in Build A Ring Farm?", answer: "Mutations are triggered by specific events like watering (Wet), seasonal sprays (Autumn), or special in-game events (Radioactive, Alien, Starfall). Update 4 added Fire, Bubblegum, Admin, and Starfall mutations." },
  { question: "Which mutation should I use with expensive seeds?", answer: "High-value seeds like Dragonfruit, Void Fruit, and Aethercoil benefit most from Carnival (9.5x), Starfall (8x), or Admin (7x) mutations." },
];

export function MutationsTierListPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <JsonLd data={[breadcrumbSchema("/mutations-tier-list", "Mutations Tier List"), faqSchema(faq)]} />
      <Breadcrumbs segments={[{label: "Home", href: "/"}, {label: "Mutations Tier List", href: "/mutations-tier-list"}]} />
      <Section eyebrow="MUTATIONS" level={1} title="Build A Ring Farm Mutations Tier List">
        <p className="text-slate-400">All 15 mutations ranked by multiplier value. Update 4 added Fire, Bubblegum, Admin, and Starfall — the highest multipliers in the game.</p>
      </Section>

      <Section title="All Mutations Ranked by Multiplier">
        <MutationTable mutations={[...mutations].sort((a, b) => b.multiplier - a.multiplier)} />
      </Section>

      <Section title="Frequently Asked Questions">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {faq.map((item, i) => (
            <InfoCard key={i} title={item.question}>
              <p>{item.answer}</p>
            </InfoCard>
          ))}
        </div>
      </Section>
      <DataDisclaimer dataType="mutation multipliers" />
    </main>
  );
}

export default MutationsTierListPage;

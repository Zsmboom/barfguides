import { DataDisclaimer } from "@/components/DataDisclaimer";
import { JsonLd } from "@/components/JsonLd";
import { InfoCard, Section } from "@/components/Section";
import { MiniSeedCard } from "@/components/Tables";
import { pageSeo } from "@/lib/page-seo";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/seo";
import { seeds } from "@/lib/data";


const faq = [
  { question: "How do I get Transcendent seeds in Build A Ring Farm?", answer: "Transcendent seeds are obtained through high-level seed rolling. You need high seed luck stat, good pets (especially Harvest Drone), and Outer Ring unlocked. Keep rolling seeds at higher levels to increase your chances." },
  { question: "What is the cheapest Transcendent seed?", answer: "Moonflower ($380K) is the most affordable Transcendent seed. It's the recommended entry point for players moving from Secret+ seeds to Transcendent." },
  { question: "What is the best Transcendent seed?", answer: "Divine Golden Apple ($1.2M) offers the highest profit among Transcendent seeds at $22.8M/hour with Outer Ring, making it ideal for leaderboard pushing." },
];

export function TranscendentSeedsGuidePage() {
  const transcendent = seeds.filter(s => s.rarity === "Transcended" || s.rarity === "Divine" || s.rarity === "Exotic" || s.rarity === "Secret+");
  
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <JsonLd data={[breadcrumbSchema("/transcendent-seeds-guide", "Transcendent Seeds Guide"), faqSchema(faq)]} />
      
      <Section eyebrow="GUIDE" level={1} title="How to Get Transcendent Seeds in Build A Ring Farm">
        <p className="text-slate-400">Transcendent seeds are the highest-tier seeds in Build A Ring Farm. This guide covers how to obtain them, seed luck mechanics, and the best strategies for farming them.</p>
      </Section>

      <Section title="What Are Transcendent Seeds?">
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard title="Seed Tiers">
            Seeds go from Common → Uncommon → Rare → Epic → Legendary → Secret → Secret+ → Transcended → Divine → Exotic. Each tier is progressively harder to obtain.
          </InfoCard>
          <InfoCard title="Seed Luck Stat">
            Your seed luck stat increases as you level up and invest in upgrades. Higher luck = better seeds from rolling.
          </InfoCard>
          <InfoCard title="Best Pets for Seeds">
            Harvest Drone (auto-harvest) and Rain Cloud (auto-water) are essential for maintaining a high-rolling seed operation.
          </InfoCard>
          <InfoCard title="Outer Ring Required">
            Transcendent seeds shine in the Outer Ring (19x multiplier). Unlock it first before investing heavily in Transcendent seed farming.
          </InfoCard>
        </div>
      </Section>

      <Section title="Transcendent+ Seeds Overview">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {transcendent.map(seed => (
            <MiniSeedCard key={seed.id} seed={seed} />
          ))}
        </div>
      </Section>

      <Section title="Frequently Asked Questions">
        <div className="grid gap-4 md:grid-cols-2">
          {faq.map((item, i) => (
            <InfoCard key={i} title={item.question}>
              <p>{item.answer}</p>
            </InfoCard>
          ))}
        </div>
      </Section>
      <DataDisclaimer dataType="seed luck mechanics" />
    </main>
  );
}

export default TranscendentSeedsGuidePage;

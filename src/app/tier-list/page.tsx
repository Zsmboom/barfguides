import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { InfoCard, Section } from "@/components/Section";
import { MutationTable, PetTable, SeedsTable } from "@/components/Tables";
import { DataDisclaimer } from "@/components/DataDisclaimer";
import { byTier, mutations, pets, seeds } from "@/lib/data";
import { pageSeo } from "@/lib/page-seo";
import { breadcrumbSchema, faqSchema, buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";
export const metadata: Metadata = buildPageMetadata(pageSeo.tierList);

const faq = [
  {
    question: "What makes a seed S-Tier in Build A Ring Farm?",
    answer: "S-Tier seeds combine high sell value, strong profit per minute, late-game ring scaling, and useful mutation or automation scenarios.",
  },
  {
    question: "Are pets included in this tier list?",
    answer: "Yes. This tier list includes seed rankings, pet rankings, and mutation rankings so players can compare the whole farm setup.",
  },
];

export default function TierListPage() {
  const tiers = byTier(seeds);
  const mutationRankings = [...mutations].sort((a, b) => b.multiplier - a.multiplier);

  return (
    <>
      <JsonLd data={[breadcrumbSchema(pageSeo.tierList.path, "Tier List"), faqSchema(faq)]} />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Seeds, pets, and mutations</p>
        <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">Build A Ring Farm Tier List</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          All 35 seeds ranked from S to D using price, sell value, growth time, profit potential, and practical game stage.
          Pets and mutations are included below for full setup planning.
        </p>
      </section>

      <Section title="Seeds Tier List">
        <div className="grid gap-4">
          {(["S", "A", "B", "C", "D"] as const).map((tier) => (
            <div key={tier} className="rounded-lg border border-white/10 bg-slate-900/70 p-4">
              <h2 className="text-xl font-black text-emerald-300">{tier}-Tier Seeds</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {tiers[tier].map((seed) => (
                  <span key={seed.id} className="rounded-md bg-white/[0.06] px-3 py-2 text-sm font-semibold text-slate-200">
                    {seed.name} <span className="text-slate-500">({seed.priceLabel})</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <SeedsTable seeds={seeds} />
        </div>
      </Section>

      <Section title="Pets Tier List">
        <PetTable pets={pets} />
        <p className="mt-4 text-sm text-slate-400">
          Want a deeper pet breakdown? Read the <Link href="/pets-tier-list" className="font-bold text-emerald-300">pets tier list</Link>.
        </p>
      </Section>

      <Section title="Mutations Tier List">
        <MutationTable mutations={mutationRankings} />
        <p className="mt-4 text-sm text-slate-400">
          For triggers and Update 4 mutation notes, open the <Link href="/mutations-tier-list" className="font-bold text-emerald-300">mutations tier list</Link>.
        </p>
      </Section>

      <Section title="How to Use This Ranking">
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard title="Early game">Use D/C seeds only long enough to unlock more plots, codes, and your first better seed bracket.</InfoCard>
          <InfoCard title="Mid game">B/A seeds become efficient once Middle Ring and basic automation reduce downtime.</InfoCard>
          <InfoCard title="Endgame">S-Tier seeds scale best with Outer Ring, high-value mutations, pets, and sprinkler investment.</InfoCard>
        </div>
      </Section>
      <DataDisclaimer dataType="seed rankings" />
    </>
  );
}

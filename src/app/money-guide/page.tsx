import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { InfoCard, Section } from "@/components/Section";
import { pageSeo } from "@/lib/page-seo";
import { breadcrumbSchema, faqSchema, buildPageMetadata } from "@/lib/seo";
import { activeCodes, rings, seeds } from "@/lib/data";

export const dynamic = "force-static";
export const metadata: Metadata = buildPageMetadata(pageSeo.money);

const faq = [
  { question: "What is the fastest way to make money in Build A Ring Farm?", answer: "Early game: Redeem all 8 codes (especially PLANTRUSH and 250KUSERS for time skips), then plant Carrot on every plot. Mid game: Unlock Middle Ring (13x) and plant Citrus or Banana. Late game: Outer Ring (19x) with Dragonfruit or Void Orchid, stacking the highest mutation multiplier available during events." },
  { question: "Should I use the Compost Machine for money?", answer: "Yes, once you have excess low-tier seeds. Compost Carrot, Beetroot, and Pumpkin stacks to earn event rewards and fertilizer packs. But do not compost high-value seeds — their harvest value always beats the compost reward." },
  { question: "What ring is best for making money?", answer: "Outer Ring (19x) is the best, but it costs the most to unlock. Progress from Base Ring (7x) to Middle Ring (13x) first, then save for Outer Ring before buying expensive Transcended seeds." },
  { question: "How much can I earn per hour with the best setup?", answer: "With Outer Ring (19x), a Starfall mutation (8x), and a full plot of Void Orchid ($10M each), a single harvest can reach $152M in under 4 minutes — roughly $2.28B/hour theoretical max. Realistic late-game setups earn $50-100M/hour." },
  { question: "Should I buy pets for money making?", answer: "Harvest Drone (S-Tier) and Rain Cloud (S-Tier) pay for themselves within hours by eliminating manual harvest loss and maintaining Wet mutation uptime. Skip lower-tier pets unless you have spare funds." },
];

const topProfitSeeds = seeds
  .sort((a, b) => (b.sellPrice / b.growthTime) - (a.sellPrice / a.growthTime))
  .slice(0, 8);

const ringProfitTips = [
  { ring: "Base Ring (7x)", tip: "Unlock at $100. With Carrot ($4 sell), each harvest earns $28 instead of $4. Payback: 3 harvests." },
  { ring: "Middle Ring (13x)", tip: "Unlock at ~$1,000. With Banana ($4.4K sell), each harvest earns $57.2K. Payback: 2-3 harvests with a full plot." },
  { ring: "Outer Ring (19x)", tip: "Unlock at ~$50,000+. With Void Orchid ($10M sell), each harvest earns $190M. Absolute requirement for endgame." },
];

const strategies = [
  {
    title: "Strategy 1: Speed Farming (Early Game)",
    steps: [
      "Redeem all 8 active codes first — PLANTRUSH and 250KUSERS give time skips that skip the first few minutes of waiting.",
      "Plant Carrot on every available plot. At $3 each with a 10-second growth cycle, this is the fastest cash-to-time ratio in the game.",
      "Reinvest every $3 profit into a new plot, not a better seed. Plot count > seed quality until you have 8+ slots.",
      "At $100, buy Base Ring (7x). Your profit per harvest jumps from $4 to $28 per Carrot.",
    ],
  },
  {
    title: "Strategy 2: Ring Stacking (Mid Game)",
    steps: [
      "Once you have Base Ring and 12+ plots, save $1,000 for Middle Ring (13x).",
      "Switch to Blueberry ($80 sell), Cabbage ($140), and Grape ($200) for consistent income.",
      "Use the THANKYOU code's Autumn Spray on your highest-value seeds for a 2x mutation stack.",
      "Save for Banana ($2.5K buy, $4.4K sell) — your first seed where a single Middle Ring harvest pays $57.2K.",
    ],
  },
  {
    title: "Strategy 3: Mutation Timing (Mid to Late Game)",
    steps: [
      "Mutations multiply your harvest value. Wet (1.5x) is the easiest to maintain — pair with Rain Cloud pet for consistent uptime.",
      "Autumn (2x) and Fire (4.5x) are mid-tier mutations worth pursuing during events.",
      "Starfall (8x) and Admin (7x) are Update 4 event-exclusive. Save your highest-value seeds for these windows.",
      "Do not harvest during mutation downtime on expensive seeds. Wait for the next event spray or mutation trigger.",
    ],
  },
  {
    title: "Strategy 4: Endgame Scaling ($100K+)",
    steps: [
      "Outer Ring (19x) is non-negotiable. Save $50K+ for it before buying any Transcended or Divine seeds.",
      "Dragonfruit ($350K buy, $650K sell) is the entry point. With Outer Ring, a single harvest earns $12.35M.",
      "Void Orchid ($5M buy, $10M sell) is the current top profit seed. With Outer Ring + Starfall, one harvest = $152M.",
      "Harvest Drone automates the entire process. Once you have it, you scale from millions to billions per hour.",
    ],
  },
];

export default function MoneyGuidePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <JsonLd data={[breadcrumbSchema("/money-guide", "Money Guide"), faqSchema(faq)]} />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Updated June 2026</p>
        <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">Build A Ring Farm Best Money Methods</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Four strategies covering every stage of the game — from redeeming your first code to
          earning $100M+ per hour with endgame seeds, Outer Ring, and event mutations.
        </p>
      </section>

      <Section eyebrow="Profit by ring" title="How Ring Multipliers Drive Earnings">
        <div className="grid gap-4 md:grid-cols-3">
          {ringProfitTips.map((item) => (
            <div key={item.ring} className="rounded-lg border border-white/10 bg-slate-900/50 p-5">
              <h3 className="text-lg font-black text-emerald-300">{item.ring}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.tip}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="4 strategies" title="Money-Making Strategies">
        <div className="grid gap-6">
          {strategies.map((s) => (
            <div key={s.title} className="rounded-lg border border-white/10 bg-slate-900/50 p-6">
              <h2 className="text-xl font-black text-emerald-300">{s.title}</h2>
              <ol className="mt-4 grid gap-3">
                {s.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-black text-emerald-300">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Profit ranking" title="Top 8 Seeds by Profit Per Minute (Outer Ring, no mutation)">
        <div className="overflow-x-auto rounded-lg border border-white/10">
          <table className="min-w-full divide-y divide-white/10 text-sm">
            <thead className="bg-white/[0.04] text-left text-slate-300">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Seed</th>
                <th className="px-4 py-3">Rarity</th>
                <th className="px-4 py-3">Buy</th>
                <th className="px-4 py-3">Sell (19x)</th>
                <th className="px-4 py-3">Growth</th>
                <th className="px-4 py-3">Profit/Min</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {topProfitSeeds.map((seed, i) => {
                const sell19x = seed.sellPrice * 19;
                const profitPerMin = ((sell19x - seed.price) * 60) / seed.growthTime;
                return (
                  <tr key={seed.id} className="text-slate-300">
                    <td className="px-4 py-3 font-bold text-white">{i + 1}</td>
                    <td className="px-4 py-3 font-bold text-white">{seed.name}</td>
                    <td className="px-4 py-3">{seed.rarity}</td>
                    <td className="px-4 py-3 text-amber-300">{seed.priceLabel}</td>
                    <td className="px-4 py-3 text-amber-300">${(sell19x).toLocaleString()}</td>
                    <td className="px-4 py-3">{seed.growthTime}s</td>
                    <td className="px-4 py-3 font-bold text-emerald-300">
                      ${Math.round(profitPerMin).toLocaleString()}/min
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-400">
          Use the <Link href="/profit-calculator" className="font-bold text-emerald-300">profit calculator</Link> to factor in mutations, pets, saw level, and sprinklers for your exact setup.
          Full seed database at <Link href="/seeds-database" className="font-bold text-emerald-300">seeds database</Link>.
        </p>
      </Section>

      <Section eyebrow="Update 4" title="Compost Machine for Extra Income">
        <div className="rounded-lg border border-amber-400/20 bg-amber-950/15 p-6">
          <p className="leading-7 text-slate-300">
            The Compost Machine converts excess seeds into fertilizer, event tickets, and resource packs.
            Compost your cheapest seeds (Carrot, Beetroot, Pumpkin) once you have a steady supply —
            the rewards from the Compost Machine event track can include mutation sprays, seed packs,
            and exclusive items that directly boost your income. See the full <Link href="/compost-machine-guide" className="font-bold text-emerald-300">Compost Machine guide</Link>.
          </p>
        </div>
      </Section>

      <Section eyebrow="Avoid these" title="Common Money-Wasting Mistakes">
        <div className="grid gap-3 md:grid-cols-2">
          {[
            "Buying expensive seeds before Middle Ring — the profit per minute is lower than stacking Common plots.",
            "Hoarding cash instead of buying plots or rings — idle money earns nothing.",
            "Harvesting during non-mutation periods on high-value seeds — wait for Wet or better.",
            "Skipping code redemptions — 8 active codes give time skips, seed packs, and sprays for free.",
            "Composting high-tier seeds — the harvest value always exceeds the compost reward.",
            "Ignoring pet automation past mid game — manual harvest becomes a bottleneck at scale.",
          ].map((tip) => (
            <div key={tip} className="rounded-lg border border-red-400/15 bg-red-950/10 p-4 text-sm leading-6 text-slate-300">
              {tip}
            </div>
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
    </main>
  );
}

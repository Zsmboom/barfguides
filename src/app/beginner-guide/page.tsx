import type { Metadata } from "next";
import Link from "next/link";
import { DataDisclaimer } from "@/components/DataDisclaimer";
import { JsonLd } from "@/components/JsonLd";
import { InfoCard, Section } from "@/components/Section";
import { activeCodes, rings, seeds } from "@/lib/data";
import { pageSeo } from "@/lib/page-seo";
import { breadcrumbSchema, faqSchema, buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";
export const metadata: Metadata = buildPageMetadata(pageSeo.beginner);

const faq = [
  {
    question: "What should beginners do first in Build A Ring Farm?",
    answer: "Redeem all 8 active codes (PLANTRUSH, 250KUSERS, UPDATE2, THANKYOU, BARF:3, 2KLIKES, UPDATE1, 100KVISITS), plant cheap fast seeds (Carrot, Beetroot, Pumpkin), reinvest profits into more plots, and only then move into better seed tiers. Skip the rare mutation chase until you have at least the Base Ring.",
  },
  {
    question: "When should I unlock the Middle Ring?",
    answer: "Middle Ring is the 13x profit multiplier that separates mid game from early game. Unlock it as soon as you have at least $1,000 saved. The extra 6x on top of Base Ring pays back the unlock cost in a single harvest cycle of any Epic or Legendary seed.",
  },
  {
    question: "How do I earn money fastest as a new player?",
    answer: "Plant Carrot first because it recoups its $3 cost in a single 10-second harvest. Once you have 8 to 12 plots, swap to Watermelon or Blueberry. Reinvest every profit into more plots until you can afford Middle Ring, then push Citrus and Banana as your core money makers.",
  },
  {
    question: "Should I bother with the Compost Machine early?",
    answer: "Not on day one. The Compost Machine is more efficient when you have a steady supply of low-tier seeds to spare. Once you reach mid game and you are sitting on stacks of Carrot, Beetroot, and Pumpkin, start composting the excess for fertilizer and event rewards.",
  },
  {
    question: "When should I focus on pets?",
    answer: "Pets become valuable once you have enough plots that manual harvest is slow or error-prone. Harvest Drone and Rain Cloud are the two to prioritize. Skip pet investment entirely during the first hour - the ROI is negative compared to planting more seeds.",
  },
];

const stages = [
  {
    title: "Stage 1: First Hour ($0 to $100)",
    body: "Redeem all 8 active codes first, especially PLANTRUSH, 250KUSERS, and 100KVISITS for the time skips. Plant Carrot on every available plot - the $3 buy cost pays back in a single 10 second harvest. After every 5 to 10 harvests, spend profits on one more plot before upgrading seed tier. The fastest exit out of stage 1 is plot count, not seed swaps.",
  },
  {
    title: "Stage 2: $100 to $1,000",
    body: "Once you can afford Watermelon, switch half your plots and keep Carrot on the other half. Use the calculator to confirm that Watermelon's profit per minute is higher than Carrot's at your current ring. Buy Base Ring (7x) the moment you hit $100, then keep stacking plots until you have at least 12 active plots before moving into mid-tier seeds.",
  },
  {
    title: "Stage 3: $1,000 to $10,000",
    body: "Save $1,000+ for Middle Ring (13x), then plant Blueberry, Cabbage, Grape, and Peach in the new ring. This is the first time the calculator shows clear advantage over grinding Common and Uncommon seeds. Reinvest into more plots within the new ring. Use the THANKYOU Autumn Spray on your highest-value seeds for a 2x boost.",
  },
  {
    title: "Stage 4: $10,000 to $100,000",
    body: "Move into Epic and Legendary seeds. Sunflower and Citrus are the strongest Epic options, while Banana and Mushroom are the Legendary staples. By this point you should be running two pet slots - Rain Cloud for watering uptime and Market Dog or Sprinkler Bot for harvest consistency. Save for Outer Ring rather than chasing Divine seeds.",
  },
  {
    title: "Stage 5: Endgame ($100,000+)",
    body: "Outer Ring (19x) is mandatory for any Transcended, Divine, or Exotic seed to be profitable. Save for it first, then push Dragonfruit, Aurora Lotus, and Void Orchid. Add Harvest Drone for full automation, and start timing your harvest spikes around Starfall or Admin events. This is the path to the top 100 of the leaderboard.",
  },
];

const upgradeOrder = [
  ["Plots", "Each new plot adds full seed value to every harvest. Cheapest single upgrade in the game and the right move 90% of the time."],
  ["Base Ring", "7x multiplier on every harvest. Costs $100 and pays for itself within a single 20 second cycle of any mid-tier seed."],
  ["Middle Ring", "13x multiplier. Unlocks the real mid-game economy and makes every Epic and Legendary seed profitable."],
  ["Better Seeds", "Only swap seed tier when the calculator shows that the next tier is faster profit per minute than another plot purchase."],
  ["Pets", "Rain Cloud and Harvest Drone give the highest ROI. Skip pets until mid game unless you have spare Robux to spend."],
  ["Outer Ring", "19x multiplier. Required for any Transcended, Divine, or Exotic seed. The single biggest late-game unlock."],
];

const pitfalls = [
  "Buying expensive seeds before Middle Ring - the profit per minute is worse than just stacking more Common plots.",
  "Ignoring event timing - planting during a Starfall or Admin window compounds the 8x or 7x mutation on top of your ring.",
  "Composting your best profit seeds - the calculator usually shows that planting a high-tier seed is worth more than the compost reward.",
  "Selling right before a mutation lands - always wait for the next event spray cycle before harvesting top seeds.",
  "Hoarding instead of expanding - cash sitting in your inventory does nothing, plots and rings are the long-term multiplier.",
];

export default function BeginnerGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(pageSeo.beginner.path, "Beginner Guide"),
          faqSchema(faq),
        ]}
      />
      {/* Hero banner */}
      <div className="mx-auto max-w-7xl px-4 pt-6">
        <div className="overflow-hidden rounded-xl border border-white/10">
          <img
            src="/images/game-screenshot.jpg"
            alt="Build A Ring Farm beginner gameplay — rings and crops"
            className="h-48 w-full object-cover md:h-64"
            loading="eager"
          />
        </div>
      </div>
      <section className="mx-auto max-w-7xl px-4 py-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Start here</p>
        <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">
          Build A Ring Farm Beginner Guide
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          This guide gives new players a clean route from your first $3 carrot harvest to endgame
          farming with Transcended and Exotic seeds. Every step tells you what to buy, what to
          skip, and what to plant so you do not waste money on upgrades that do not improve your
          harvest uptime.
        </p>
      </section>

      <Section title="5-Stage Progression Route">
        <div className="grid gap-4">
          {stages.map((stage) => (
            <div
              key={stage.title}
              className="rounded-lg border border-white/10 bg-slate-900/50 p-5"
            >
              <h2 className="text-xl font-black text-emerald-300">{stage.title}</h2>
              <p className="mt-2 leading-7 text-slate-300">{stage.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="First 10 Minutes: Step by Step">
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard title="Step 1: Redeem codes">
            Open the codes panel and paste 250KUSERS, PLANTRUSH, UPDATE2, THANKYOU, BARF:3, 2KLIKES, UPDATE1, and 100KVISITS. The time skips and Tropical Seed Packs immediately help your first hour. {activeCodes.length} active codes are available in June 2026 -{" "}
            <Link href="/codes" className="font-bold text-emerald-300">see the codes page</Link>.
          </InfoCard>
          <InfoCard title="Step 2: Plant Carrot on every plot">
            Carrot is $3 and recoups in one 10 second harvest. Plant it on every available plot and let the cycle run for at least 5 minutes before doing anything else.
          </InfoCard>
          <InfoCard title="Step 3: Buy plots, not seeds">
            Reinvest every carrot profit into a new plot. The plot cost is small compared to the lifetime profit it adds.
          </InfoCard>
          <InfoCard title="Step 4: Save for Base Ring">
            Hit $100 and unlock the Base Ring (7x). This is the moment your profit per minute visibly jumps. After that, save for Middle Ring.
          </InfoCard>
        </div>
      </Section>

      <Section title="First Upgrade Priority">
        <div className="grid gap-4 md:grid-cols-3">
          {upgradeOrder.map(([title, body]) => (
            <InfoCard key={title} title={title}>{body}</InfoCard>
          ))}
        </div>
      </Section>

      <Section title="Common Beginner Pitfalls">
        <ul className="grid gap-3 text-slate-300 md:grid-cols-2">
          {pitfalls.map((item, i) => (
            <li
              key={i}
              className="rounded-lg border border-amber-400/20 bg-amber-950/15 p-4 text-sm leading-6"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Ring System Explained">
        <div className="grid gap-4 md:grid-cols-3">
          {rings.map((ring) => (
            <InfoCard key={ring.id} title={`${ring.name} - ${ring.multiplier}x`}>
              {ring.description}. Use it in the profit calculator to see how fast the same seed setup scales. The 19x Outer Ring is required for any Transcended, Divine, or Exotic seed to be profitable.
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Offline progress" title="Your Farm Grows While You Are Away">
        <div className="rounded-lg border border-emerald-400/20 bg-emerald-950/15 p-6">
          <p className="leading-7 text-slate-300">
            Build A Ring Farm has offline earnings: your farm continues producing cash even when you close the game.
            Every plot upgrade, ring unlock, and seed purchase keeps working in the background. This makes early-game
            plot expansion especially valuable — each new plot earns money 24/7, even when you are not actively playing.
            Plan your upgrades with offline earning potential in mind.
          </p>
        </div>
      </Section>

      <Section title="Best Early Seeds (Ranked)">
        <div className="overflow-x-auto rounded-lg border border-white/10">
          <table className="min-w-full divide-y divide-white/10 text-sm">
            <thead className="bg-white/[0.04] text-left text-slate-300">
              <tr>
                <th className="px-4 py-3">Seed</th>
                <th className="px-4 py-3">Rarity</th>
                <th className="px-4 py-3">Buy</th>
                <th className="px-4 py-3">Sell</th>
                <th className="px-4 py-3">Growth</th>
                <th className="px-4 py-3">When to use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {seeds
                .filter((s) => s.tier === "D" || s.tier === "C" || s.tier === "B")
                .slice(0, 10)
                .map((seed) => (
                  <tr key={seed.id} className="text-slate-300">
                    <td className="px-4 py-3 font-bold text-white">{seed.name}</td>
                    <td className="px-4 py-3">{seed.rarity}</td>
                    <td className="px-4 py-3 text-amber-300">{seed.priceLabel}</td>
                    <td className="px-4 py-3 text-amber-300">${seed.sellPrice.toLocaleString()}</td>
                    <td className="px-4 py-3">{seed.growthTime}s</td>
                    <td className="px-4 py-3">{seed.scenario}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-400">
          For the full S to D ranking, see the{" "}
          <Link href="/tier-list" className="font-bold text-emerald-300">tier list</Link> or the{" "}
          <Link href="/seeds-database" className="font-bold text-emerald-300">seeds database</Link>.
        </p>
      </Section>

      <Section title="Mutation and Pet Basics">
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard title="Mutations">
            Mutations multiply harvest value. Beginners should focus on the 1.5x Wet mutation and the 2x Autumn mutation (the THANKYOU code gives a free Autumn Spray). The strongest mutations like Starfall and Admin are Update 4 event rewards and are too rare to rely on until mid game.
          </InfoCard>
          <InfoCard title="Pets">
            Pets help with automation, watering, growth, and harvest consistency. Harvest Drone and Rain Cloud are the two S-Tier pets and should be your first pet goals once you have at least Middle Ring unlocked. The full pet ranking is on the{" "}
            <Link href="/pets-tier-list" className="font-bold text-emerald-300">pets tier list</Link>.
          </InfoCard>
        </div>
      </Section>

      <Section title="Frequently Asked Questions">
        <div className="grid gap-4 md:grid-cols-2">
          {faq.map((item) => (
            <InfoCard key={item.question} title={item.question}>
              <p>{item.answer}</p>
            </InfoCard>
          ))}
        </div>
      </Section>
      <DataDisclaimer dataType="beginner strategies" />
    </>
  );
}

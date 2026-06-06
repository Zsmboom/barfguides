import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { InfoCard, Section } from "@/components/Section";
import { pageSeo } from "@/lib/page-seo";
import { DataDisclaimer } from "@/components/DataDisclaimer";
import { breadcrumbSchema, faqSchema, buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";
export const metadata: Metadata = buildPageMetadata(pageSeo.faq);

const categories = [
  {
    title: "Game basics",
    items: [
      {
        question: "What is Build A Ring Farm?",
        answer: "Build A Ring Farm is a Roblox farming simulator by Gamecreates where players plant seeds, harvest crops, upgrade rings, collect pets, and compete on leaderboards. The game features 35 seed types, 14 mutations, 8 pets, and a Base/Middle/Outer ring system that multiplies harvest value up to 19x.",
      },
      {
        question: "What is the game ID and developer?",
        answer: "Build A Ring Farm is published on Roblox under the game ID 107646426076756 and developed by Gamecreates. It is playable on PC, mobile, and console clients of Roblox.",
      },
      {
        question: "What are rings?",
        answer: "Rings are circular farm zones that multiply the value of every harvest produced inside them. Base Ring is 7x, Middle Ring is 13x, and Outer Ring is 19x. Unlocking higher rings is the single biggest profit jump in the game.",
      },
      {
        question: "How many seeds are in the game?",
        answer: "The current dataset covers 35 seeds spread across 10 rarity tiers: Common, Uncommon, Rare, Epic, Legendary, Secret, Secret+, Transcended, Divine, and Exotic. Update 4 expanded the upper end with the Transcended, Divine, and Exotic tiers.",
      },
    ],
  },
  {
    title: "Codes and rewards",
    items: [
      {
        question: "How many BARF codes are active in June 2026?",
        answer: "Eight codes are currently active: 250KUSERS, PLANTRUSH, UPDATE2, THANKYOU, BARF:3, 2KLIKES, UPDATE1, and 100KVISITS. Rewards include time skips, seed packs, sprays, fertilizer, and a Plant Rush Boss Box.",
      },
      {
        question: "Which code should I claim first?",
        answer: "Claim PLANTRUSH, 250KUSERS, and 100KVISITS first. PLANTRUSH gives a Plant Rush Boss Box, 250KUSERS gives a 3-minute time skip, and 100KVISITS gives a 5-minute time skip. These reduce the most painful early-game wait times.",
      },
      {
        question: "How do I redeem codes in Build A Ring Farm?",
        answer: "Launch the game, wait for the farm UI to fully load, open the codes or rewards panel, and paste the code exactly as written. BARF:3 includes a colon and must be entered in the same format. Visit the codes page for the full step-by-step.",
      },
    ],
  },
  {
    title: "Profit, rings, and seeds",
    items: [
      {
        question: "How does the profit calculator work?",
        answer: "The calculator multiplies each seed's sell value by your ring multiplier, mutation multiplier, saw level, pet bonus, sprinkler level, and plant count. It then divides the net harvest value by the growth time to estimate profit per minute and ROI in harvests.",
      },
      {
        question: "Which ring gives the best ROI?",
        answer: "Outer Ring at 19x is the strongest end-state, but the best ROI depends on your seed tier. Base Ring is the right call for D/C seeds in the early game, Middle Ring (13x) covers Epic and Legendary, and Outer Ring (19x) is required to make Transcended, Divine, and Exotic seeds profitable.",
      },
      {
        question: "What is the most profitable seed in the game?",
        answer: "Void Orchid ($5M seed, $10M sell, 220s growth) currently tops the Outer Ring profit per minute ranking. Ethereal Bloom, Starlight Fern, Celestial Cactus, and Divine Golden Apple round out the top 5. The exact order is shown on the seeds database page.",
      },
      {
        question: "What is the best early-game seed?",
        answer: "Carrot ($3 buy, $4 sell, 10s growth) is the best starter because it has the fastest cycle time, so you recoup the purchase in a single harvest. Beetroot and Pumpkin are the next two upgrades. Skip more expensive Uncommon seeds until you have several plots unlocked.",
      },
    ],
  },
  {
    title: "Mutations and events",
    items: [
      {
        question: "What is the best mutation in Build A Ring Farm?",
        answer: "Starfall (8x) is the top mutation, followed by Admin (7x) and Honeycomb (6.5x). Both Starfall and Admin are Update 4 additions. For accessible early-game multipliers, use Wet (1.5x) and Autumn (2x) from the THANKYOU code.",
      },
      {
        question: "How do I trigger mutations?",
        answer: "Mutations are triggered by in-game events. Wet comes from watering, Autumn from the Autumn Spray, Frozen from freeze events, Void from void events, Radioactive from special environments, Alien from alien invasions, and Honeycomb from hive events. Update 4 added Fire, Bubblegum, Admin, and Starfall.",
      },
      {
        question: "What is the strongest event?",
        answer: "The Starfall event is the strongest because it applies the 8x Starfall mutation. The next best are Admin (7x), Honeycomb (6.5x), Bubblegum (5.5x), and Rainbow (5x). See the events guide for the full breakdown.",
      },
    ],
  },
  {
    title: "Pets and automation",
    items: [
      {
        question: "What is the best pet in Build A Ring Farm?",
        answer: "Harvest Drone (S-Tier) is the strongest pet for endgame players because it automates harvesting and reduces manual loss. Rain Cloud (S-Tier) is the best support pet because it auto-waters and can trigger the Wet mutation. Both are worth investing in once you reach mid game.",
      },
      {
        question: "Do pets trigger mutations?",
        answer: "Pets do not directly apply mutations, but the Rain Cloud pet keeps crops watered which is the trigger for the 1.5x Wet mutation. Pets also free you up to chase rare event triggers without losing uptime on your farm.",
      },
      {
        question: "How many pets are in the game?",
        answer: "There are 8 pets in the current dataset, ranked from S-Tier to D-Tier. They are: Harvest Drone, Rain Cloud, Seed Planter, Sprinkler Bot, Fertilizer Cat, Market Dog, Basic Helper, and Slow Snail.",
      },
    ],
  },
  {
    title: "Update 4 and endgame",
    items: [
      {
        question: "What is new in Update 4?",
        answer: "Update 4 added the Compost Machine, Plant Contracts, Farm Skins, Friend O Tron, new pets, 24 new seeds including Transcended and Divine tiers, and 4 new mutations: Fire (4.5x), Bubblegum (5.5x), Admin (7x), and Starfall (8x). The full breakdown is on the Update 4 patch notes page.",
      },
      {
        question: "What is the Compost Machine?",
        answer: "The Compost Machine is an Update 4 feature that turns spare seeds into fertilizer and other resources. Composting low-tier seeds gives basic fertilizer, while composting Epic or Legendary seeds gives top-tier fertilizer. Never compost your highest-profit seeds - always compare the compost reward against the planting profit in the calculator.",
      },
      {
        question: "What are Plant Contracts?",
        answer: "Plant Contracts are quest-style objectives added in Update 4. They require you to plant specific seeds or hit harvest milestones for rewards such as sprays, seed packs, and pet items. Stockpile a variety of seeds so you can complete contracts when they rotate.",
      },
      {
        question: "How do I get Transcendent seeds?",
        answer: "Transcendent seeds drop from high-level seed rolling once your seed luck stat and Outer Ring are unlocked. Pair Harvest Drone and Rain Cloud for the smoothest rolling operation. Moonflower ($380K) is the cheapest entry point and Divine Golden Apple ($1.2M) is the highest-profit Transcendent seed.",
      },
    ],
  },
  {
    title: "About this site",
    items: [
      {
        question: "Is BARF Guides official?",
        answer: "No. BARF Guides is an independent English fan resource. We are not affiliated with Roblox Corporation or Gamecreates. All game data is based on community research, in-game observation, and the public game page.",
      },
      {
        question: "Is the profit calculator free?",
        answer: "Yes, the profit calculator is completely free. No login, no account, and no Robux required. The full feature set is available on every page.",
      },
      {
        question: "How often is the data updated?",
        answer: "Codes are updated whenever new ones are announced. Seed, ring, pet, and mutation data is reviewed every major update. The current dataset is aligned with Update 4 as of June 2026.",
      },
    ],
  },
];

const allFaq = categories.flatMap((c) => c.items);

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[breadcrumbSchema(pageSeo.faq.path, "FAQ"), faqSchema(allFaq)]}
      />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
          Build A Ring Farm questions answered
        </p>
        <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">
          Build A Ring Farm FAQ
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          The most common Build A Ring Farm questions, organized by topic. Use the categories below
          to jump to the answer you need, or run the profit calculator, codes list, and tier list for
          live tools that complement this FAQ.
        </p>
      </section>

      {categories.map((cat) => (
        <Section key={cat.title} title={cat.title}>
          <div className="grid gap-4 md:grid-cols-2">
            {cat.items.map((item) => (
              <InfoCard key={item.question} title={item.question}>
                <p>{item.answer}</p>
              </InfoCard>
            ))}
          </div>
        </Section>
      ))}

      <Section title="Quick Links">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <InfoCard title="Profit Calculator">
            Estimate profit per minute and ROI for any seed setup.
            <Link href="/profit-calculator" className="mt-3 block font-bold text-emerald-300">Open calculator</Link>
          </InfoCard>
          <InfoCard title="Active Codes">
            Copy the 8 active June 2026 codes and claim your free rewards.
            <Link href="/codes" className="mt-3 block font-bold text-emerald-300">View codes</Link>
          </InfoCard>
          <InfoCard title="Tier List">
            See the full S to D seed ranking plus pets and mutations.
            <Link href="/tier-list" className="mt-3 block font-bold text-emerald-300">Open rankings</Link>
          </InfoCard>
          <InfoCard title="Events Guide">
            Plan alien invasions, Plant Rush bosses, and Starfall windows.
            <Link href="/events-guide" className="mt-3 block font-bold text-emerald-300">Read events guide</Link>
          </InfoCard>
        </div>
      </Section>
      <DataDisclaimer dataType="FAQ answers" />
    </>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import type { Code, Ring, Mutation, Pet } from "@/lib/data";
import { CopyButton } from "@/components/CopyButton";
import { InfoCard, Section, StatCard } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { activeCodes, mutations, pets, seeds, rings, site } from "@/lib/data";
import { pageSeo } from "@/lib/page-seo";
import { breadcrumbSchema, faqSchema, buildPageMetadata, videoGameSchema } from "@/lib/seo";
export const dynamic = "force-static";
export const metadata: Metadata = buildPageMetadata(pageSeo.home);

const faq = [
  {
    question: "What is Build A Ring Farm?",
    answer: "Build A Ring Farm is a Roblox farming simulator where players plant seeds, upgrade rings, collect pets, and compete on leaderboards. Developed by Gamecreates (game ID 107646426076756), the game has attracted millions of visits since launch and receives regular content updates.",
  },
  {
    question: "What is the best tool on this site?",
    answer: "The profit calculator is the main differentiator because it estimates profit per minute, ROI, harvest value, ring multipliers, mutations, pets, and sprinkler bonuses. The codes page and tier list complement it for full planning.",
  },
  {
    question: "How many active codes are available?",
    answer: "There are 8 active codes in June 2026: 250KUSERS, PLANTRUSH, UPDATE2, THANKYOU, BARF:3, 2KLIKES, UPDATE1, and 100KVISITS. Visit the codes page to copy them and see what each reward does.",
  },
  {
    question: "Is BARF Guides an official website?",
    answer: "No, BARF Guides is an independent fan resource. We are not affiliated with Gamecreates or Roblox. All game data is based on community research and in-game observation.",
  },
];

const RARITY_ORDER = [
  "Common",
  "Uncommon",
  "Rare",
  "Epic",
  "Legendary",
  "Secret",
  "Secret+",
  "Transcended",
  "Divine",
  "Exotic",
];
const rarityCounts = RARITY_ORDER.map((r) => ({
  rarity: r,
  count: seeds.filter((s) => s.rarity === r).length,
}));

export default function HomePage() {
  const latestCodes = activeCodes.slice(0, 3);
  const topEndgame = seeds.filter((s) => s.tier === "S").slice(0, 5);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema("/", "Home"),
          faqSchema(faq),
          videoGameSchema(),
        ]}
      />
      {/* Hero section */}
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
            Build A Ring Farm tools
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
            BARF Guides for smarter farms, faster cash, and better seed choices.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Plan your Build A Ring Farm route with a profit calculator, working codes, seed rankings, pet advice,
            mutation data, and Update 4 guides built around the game data in this project.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/profit-calculator"
              className="rounded-md bg-emerald-500 px-5 py-3 font-black text-slate-950 hover:bg-emerald-400"
            >
              Open Profit Calculator
            </Link>
            <Link
              href="/codes"
              className="rounded-md border border-white/15 px-5 py-3 font-black text-white hover:bg-white/8"
            >
              Claim Codes
            </Link>
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-slate-900/72 p-5">
          <h2 className="text-xl font-black text-white">Latest Codes</h2>
          <div className="mt-4 grid gap-3">
            {latestCodes.map((code: Code) => (
              <div
                key={code.code}
                className="flex items-center justify-between gap-3 rounded-md bg-slate-950/70 p-3"
              >
                <div>
                  <div className="font-black text-amber-300">{code.code}</div>
                  <div className="text-sm text-slate-400">{code.reward}</div>
                </div>
                <CopyButton value={code.code} />
              </div>
            ))}
          </div>
          <Link
            href="/codes"
            className="mt-4 block text-sm font-bold text-emerald-300 hover:text-emerald-200"
          >
            See all 8 active codes -&gt;
          </Link>
        </div>
      </section>

      {/* Game overview */}
      <Section eyebrow="About the game" title="What Is Build A Ring Farm?">
        <div className="rounded-lg border border-white/10 bg-slate-900/50 p-6">
          <p className="leading-7 text-slate-300">
            Build A Ring Farm is a Roblox farming simulator published by Gamecreates under game ID 107646426076756. You plant and harvest crops inside progressively larger rings, with the Base Ring giving a 7x multiplier, Middle Ring 13x, and Outer Ring 19x. Your farm earns cash even while you are offline, so every upgrade keeps paying out between play sessions. The current dataset tracks 35 seeds across 10 rarity tiers, 14 mutations that boost harvest value by up to 8x, 8 pets for automation, and a global leaderboard system. Update 4 added the Compost Machine, Plant Contracts, Farm Skins, Friend O Tron, 24 new plants, and four new mutations (Fire, Bubblegum, Admin, and Starfall). The game is regularly covered by major Roblox creators including Foltyn, MeEnyu, and CoralBlox2.
          </p>
        </div>
      </Section>

      {/* Stats */}
      <Section title="Quick Stats">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Seeds tracked" value={`${seeds.length}+`} />
          <StatCard label="Mutations ranked" value={`${mutations.length}`} />
          <StatCard label="Pets listed" value={`${pets.length}`} />
          <StatCard label="Active codes" value={activeCodes.length.toString()} />
          <StatCard label="Game version" value={site.update} />
          <StatCard label="Rarity tiers" value="10" />
          <StatCard label="Ring multipliers" value="7x - 19x" />
          <StatCard label="Seed price range" value="$3 - $5M" />
        </div>
      </Section>

      {/* Seed rarity breakdown */}
      <Section title="Seed Rarity Distribution">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {rarityCounts.map((item) => (
            <div
              key={item.rarity}
              className="rounded-lg border border-white/10 bg-slate-900/50 p-4 text-center"
            >
              <div className="text-sm font-bold text-slate-400">{item.rarity}</div>
              <div className="mt-1 text-2xl font-black text-white">{item.count}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Quick start guide */}
      <Section eyebrow="New player?" title="Getting Started in 4 Steps">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <InfoCard title="1. Redeem codes">
            Start with free rewards from active codes. Every new player should redeem PLANTRUSH, 250KUSERS, and 100KVISITS first.
            <Link href="/codes" className="mt-3 block font-bold text-emerald-300">View all codes</Link>
          </InfoCard>
          <InfoCard title="2. Plant efficient seeds">
            Carrot, Beetroot, and Pumpkin are your fastest early earners. Reinvest profits into more plots before chasing expensive seeds.
            <Link href="/beginner-guide" className="mt-3 block font-bold text-emerald-300">Read beginner guide</Link>
          </InfoCard>
          <InfoCard title="3. Use the calculator">
            Compare seeds by profit per minute and ROI. Factor in ring multiplier, mutation bonus, saw level, and pet bonus.
            <Link href="/profit-calculator" className="mt-3 block font-bold text-emerald-300">Open calculator</Link>
          </InfoCard>
          <InfoCard title="4. Explore tier lists">
            See which seeds, pets, and mutations perform best at each stage of the game. Rankings are updated for Update 4.
            <Link href="/tier-list" className="mt-3 block font-bold text-emerald-300">View rankings</Link>
          </InfoCard>
        </div>
      </Section>

      {/* Offline earnings note */}
      <Section eyebrow="Pro tip" title="Your Farm Earns Offline">
        <div className="rounded-lg border border-emerald-400/20 bg-emerald-950/15 p-6">
          <p className="leading-7 text-slate-300">
            Build A Ring Farm continues earning cash even when you are not logged in. Every upgrade you buy — more plots,
            better rings, higher-tier seeds — keeps generating income between sessions. This means early investments in
            plot expansion and ring upgrades pay off even while you are away. Prioritize upgrades that increase
            passive earning potential over one-time boosts.
          </p>
        </div>
      </Section>

      {/* Featured tools */}
      <Section eyebrow="Featured tools" title="Start With the Highest-Value Pages">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <InfoCard title="Profit Calculator">
            Compare seed setups by profit per minute, total harvest value, and ROI.
            <Link href="/profit-calculator" className="mt-3 block font-bold text-emerald-300">Calculate earnings</Link>
          </InfoCard>
          <InfoCard title="Codes">
            Copy all {activeCodes.length} active June 2026 codes and see which rewards matter first.
            <Link href="/codes" className="mt-3 block font-bold text-emerald-300">View codes</Link>
          </InfoCard>
          <InfoCard title="Tier List">
            See all seeds from S to D, plus pets and mutations in one hub.
            <Link href="/tier-list" className="mt-3 block font-bold text-emerald-300">Open rankings</Link>
          </InfoCard>
          <InfoCard title="Events Guide">
            Plan alien invasions, Plant Rush boss waves, and Starfall event timing for the highest harvest spikes.
            <Link href="/events-guide" className="mt-3 block font-bold text-emerald-300">Read events guide</Link>
          </InfoCard>
        </div>
      </Section>

      {/* Top guides */}
      <Section eyebrow="Popular guides" title="Deep Dives for Every Play Style">
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard title="Money-Making Guide">
            Optimized routes from broke to millions. Covers seed rotation, ring upgrades, and Compost Machine strategy for Update 4.
            <Link href="/money-guide" className="mt-3 block font-bold text-emerald-300">Read money guide</Link>
          </InfoCard>
          <InfoCard title="Transcendent Seeds">
            How to unlock and profit from Transcended, Divine, and Exotic seeds. Luck mechanics and farming strategies explained.
            <Link href="/transcendent-seeds-guide" className="mt-3 block font-bold text-emerald-300">Learn more</Link>
          </InfoCard>
          <InfoCard title="Compost Machine">
            Full breakdown of how the Update 4 Compost Machine works, what to compost, and what rewards to expect.
            <Link href="/compost-machine-guide" className="mt-3 block font-bold text-emerald-300">Compost guide</Link>
          </InfoCard>
        </div>
      </Section>

      {/* Endgame seeds spotlight */}
      <Section eyebrow="Endgame push" title="Top 5 S-Tier Seeds (Outer Ring)">
        <div className="overflow-x-auto rounded-lg border border-white/10">
          <table className="min-w-full divide-y divide-white/10 text-sm">
            <thead className="bg-white/[0.04] text-left text-slate-300">
              <tr>
                <th className="px-4 py-3">Seed</th>
                <th className="px-4 py-3">Rarity</th>
                <th className="px-4 py-3">Buy</th>
                <th className="px-4 py-3">Sell</th>
                <th className="px-4 py-3">Use case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {topEndgame.map((seed) => (
                <tr key={seed.id} className="text-slate-300">
                  <td className="px-4 py-3 font-bold text-white">{seed.name}</td>
                  <td className="px-4 py-3">{seed.rarity}</td>
                  <td className="px-4 py-3 text-amber-300">{seed.priceLabel}</td>
                  <td className="px-4 py-3 text-amber-300">${seed.sellPrice.toLocaleString()}</td>
                  <td className="px-4 py-3">{seed.scenario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-400">
          Full ranking of all 35 seeds on the <Link href="/seeds-database" className="font-bold text-emerald-300">seeds database</Link>.
        </p>
      </Section>

      {/* Update alert - June 6 update */}
      <Section eyebrow="Alert" title="New Update Coming June 6">
        <div className="rounded-lg border border-amber-400/25 bg-amber-950/22 p-6">
          <div className="flex items-start gap-4">
            <span className="text-2xl">📢</span>
            <div>
              <h2 className="text-xl font-black text-white">NEXT UPDATE + ADMIN ABUSE — June 6, 2026</h2>
              <p className="mt-2 max-w-3xl text-slate-300">
                The Roblox events page shows a new update scheduled for June 6. Titled "ADMIN ABUSE," this update
                may introduce new Admin-themed content, events, codes, or mutations. Check the codes page regularly
                for new codes and bookmark the events guide for the latest event strategies.
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <Link href="/codes" className="inline-block rounded-md bg-amber-500 px-4 py-2 font-black text-slate-950">
                  Check codes
                </Link>
                <Link href="/events-guide" className="inline-block rounded-md border border-white/15 px-4 py-2 font-black text-white">
                  Events guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Update 4 */}
      <Section eyebrow="News" title="Update 4 Coverage">
        <div className="rounded-lg border border-emerald-400/25 bg-emerald-950/22 p-6">
          <h2 className="text-2xl font-black text-white">Build A Ring Farm Update 4 Patch Notes</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            The biggest new systems are Compost Machine, Plant Contracts, Farm Skins, Friend O Tron, new pets, 24 new plants,
            and Update 4 mutations including Fire (4.5x), Bubblegum (5.5x), Admin (7x), and Starfall (8x).
            Read the full breakdown, then plan your next money route and event timing with the calculator.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/update-4-patch-notes" className="inline-block rounded-md bg-emerald-500 px-4 py-2 font-black text-slate-950">
              Read the full breakdown
            </Link>
            <Link href="/compost-machine-guide" className="inline-block rounded-md border border-white/15 px-4 py-2 font-black text-white hover:bg-white/8">
              Compost Machine Guide
            </Link>
            <Link href="/contracts-guide" className="inline-block rounded-md border border-white/15 px-4 py-2 font-black text-white hover:bg-white/8">
              Plant Contracts Guide
            </Link>
          </div>
        </div>
      </Section>

      {/* Community / creators */}
      <Section eyebrow="Community" title="Build A Ring Farm on YouTube">
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard title="Foltyn - 930K subscribers">
            "ROBLOX BUILD A RING FARM.." - 930K views in 9 days. Foltyn explores ring upgrades, seed mutations, and leaderboard pushing. Look for his Update 4 reactions for context on the new mutations and Compost Machine timing.
          </InfoCard>
          <InfoCard title="MeEnyu - Verified creator">
            "I Became the #1 Player in Build a Ring Farm" - 220K views in 3 days. MeEnyu demonstrates endgame seed strategies, mutation stacking, and Outer Ring optimization for the top of the leaderboard.
          </InfoCard>
          <InfoCard title="CoralBlox2 - Verified creator">
            "Starting Over as NOOB with OP SECRET" - 14K views in 1 day. Covers beginner progression and event waves, with focus on the new Update 4 events and boss fights.
          </InfoCard>
        </div>
        <p className="mt-4 text-sm text-slate-400">
          See all questions answered in the <Link href="/faq" className="font-bold text-emerald-300">FAQ hub</Link> or jump straight to the <Link href="/events-guide" className="font-bold text-emerald-300">events guide</Link>.
        </p>
      </Section>

      {/* FAQ */}
      <Section title="Frequently Asked Questions">
        <div className="grid gap-4 md:grid-cols-2">
          {faq.map((item) => (
            <InfoCard key={item.question} title={item.question}>{item.answer}</InfoCard>
          ))}
        </div>
        <div className="mt-6 text-sm text-slate-400">
          Need more answers? Visit the full <Link href="/faq" className="font-bold text-emerald-300">Build A Ring Farm FAQ</Link> page.
        </div>
      </Section>
    </>
  );
}

import { Link } from "@tanstack/react-router";
import { JsonLd } from "@/components/JsonLd";
import { InfoCard, Section, StatCard } from "@/components/Section";
import { featuredGuides, gameOverview, latestTopics } from "@/lib/bridger-content";
import { breadcrumbSchema, faqSchema, videoGameSchema } from "@/lib/seo";

const faq = [
  {
    question: "What is Bridger: WESTERN?",
    answer:
      "Bridger: WESTERN is a Roblox western action RPG by BRIDGER INC. It combines gunfights, horses, Stands, vampire threats, faction conflict, Tarot cards, and open-world PvP.",
  },
  {
    question: "What should a new player do first?",
    answer:
      "Learn the controls, start fishing for Moola and XP, buy a better horse, then move into cards, weapons, and Stand progression once your economy is stable.",
  },
  {
    question: "How do you get Stands in Bridger Western?",
    answer:
      "The main routes are Corpse Part events marked by a golden beam and rare Arrow Shards from fishing. Corpse Parts are faster but draw server-wide PvP pressure.",
  },
  {
    question: "Is this site official?",
    answer:
      "No. This is an independent fan guide adapted from the local Bridger Western content vault and is not affiliated with Roblox or BRIDGER INC.",
  },
];

export function HomePage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema("/", "Home"), faqSchema(faq), videoGameSchema()]} />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-14 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
            Roblox western action RPG
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Bridger: WESTERN Wiki - Stands, Guns & Beginner Guide
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Survive the frontier with practical Bridger Western guides for controls, fishing, Moola, horses,
            Tarot cards, weapons, Stands, Corpse Parts, events, and Update 1.5 progression.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/beginner-guide"
              className="rounded-md bg-emerald-500 px-5 py-3 font-black text-slate-950 hover:bg-emerald-400 min-h-[44px]"
            >
              Start Beginner Guide
            </Link>
            <Link
              to="/tier-list"
              className="rounded-md border border-white/15 px-5 py-3 font-black text-white hover:bg-white/8 min-h-[44px]"
            >
              View Stand Tier List
            </Link>
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-slate-900/80 p-6">
          <div className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Game profile</div>
          <div className="mt-3 text-3xl font-black text-white">{gameOverview.name}</div>
          <p className="mt-3 leading-7 text-slate-300">{gameOverview.genre}</p>
          <dl className="mt-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-slate-500">Developer</dt>
              <dd className="font-bold text-white">{gameOverview.developer}</dd>
            </div>
            <div>
              <dt className="text-slate-500">Version</dt>
              <dd className="font-bold text-white">{gameOverview.update}</dd>
            </div>
          </dl>
          <a
            href={gameOverview.robloxUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-md bg-emerald-500 px-4 py-2 font-black text-slate-950 hover:bg-emerald-400 min-h-[44px]"
          >
            Play on Roblox
          </a>
        </div>
      </section>

      <Section title="Content Coverage">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gameOverview.stats.map((stat) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Recommended route" title="What to Learn First">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <InfoCard title="1. Controls and fishing">
            Learn horse controls, reload timing, Ocular PRO, and the fishing loop before jumping into open PvP.
          </InfoCard>
          <InfoCard title="2. Moola and mobility">
            Use fishing money for bait, ammo, Tonics, and a better horse. Mobility makes every event route easier.
          </InfoCard>
          <InfoCard title="3. Cards and weapons">
            Visit the Witch for Tarot cards, then build around weapons like Whitney Dragoon, Winchester, Scofield, or Tommy Gun.
          </InfoCard>
          <InfoCard title="4. Stands and events">
            Chase Corpse Parts or rare Arrow Shards once your loadout can survive the server-wide pressure.
          </InfoCard>
        </div>
      </Section>

      <Section eyebrow="Guide hubs" title="Popular Bridger Western Guides">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {featuredGuides.map((guide) => (
            <InfoCard key={guide.title} title={guide.title}>
              {guide.description}
              <Link to={guide.href} className="mt-3 block font-bold text-emerald-300 min-h-[44px]">
                Open guide
              </Link>
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Latest topics" title="Topics From the Source Vault">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {latestTopics.map((topic) => (
            <div key={topic} className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm font-bold text-slate-200">
              {topic}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Frequently Asked Questions">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {faq.map((item) => (
            <InfoCard key={item.question} title={item.question}>
              <p>{item.answer}</p>
            </InfoCard>
          ))}
        </div>
      </Section>
    </>
  );
}

export default HomePage;

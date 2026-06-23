import { JsonLd } from "@/components/JsonLd";
import { Link } from "@tanstack/react-router";
import { InfoCard, Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageSeo } from "@/lib/page-seo";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import { DataDisclaimer } from "@/components/DataDisclaimer";


const faq = [
  { question: "What are Plant Contracts in Build A Ring Farm?", answer: "Plant Contracts are daily and weekly quests introduced in Update 4. Each contract requires you to plant specific seeds, reach harvest milestones, or achieve mutation-related goals in exchange for rewards including seed packs, mutation sprays, exclusive items, and pet-related rewards." },
  { question: "How do I access Plant Contracts?", answer: "Open the Contracts menu from the in-game UI panel (usually located next to the Compost Machine or in the main farm interface). Available contracts rotate on a daily and weekly schedule." },
  { question: "What are the best contract rewards?", answer: "Prioritize contracts that reward pet items (especially Harvest Drone or Rain Cloud upgrades), mutation sprays, and rare seed packs. Skip cosmetic-only contracts unless you have excess capacity." },
  { question: "Should I keep seeds specifically for contracts?", answer: "Yes. Maintain a buffer of at least 5-10 of each Common and Uncommon seed type so you can accept any contract without disrupting your main income farm." },
  { question: "Do contracts expire if I don't complete them?", answer: "Daily contracts expire after 24 hours. Weekly contracts expire after 7 days. Completed contracts are replaced with new ones after their refresh timer." },
];

const contractTypes = [
  { name: "Daily Harvest Contracts", duration: "24 hours", difficulty: "Easy", rewards: "Fertilizer, basic seed packs, small cash", tip: "Accept every daily contract — the time investment is minimal and rewards accumulate." },
  { name: "Weekly Master Contracts", duration: "7 days", difficulty: "Medium-Hard", rewards: "Mutation sprays, rare seed packs, pet items", tip: "Plan your farm around weekly contracts. Check requirements before choosing which seeds to plant." },
  { name: "Event Contracts", duration: "Event-limited", difficulty: "Hard", rewards: "Exclusive cosmetics, premium sprays, rare pets", tip: "These run alongside game events (Starfall, Admin weeks). Prioritize event contracts over base game activities." },
];

const strategySteps = [
  { title: "1. Keep a Diverse Seed Inventory", body: "Maintain a buffer of every seed tier from Common through Legendary. This lets you accept any contract immediately instead of waiting for the right seed to grow." },
  { title: "2. Stack Contracts with Events", body: "Event contracts (Starfall, Admin, Fire weeks) run alongside the regular rotation. Complete both simultaneously by planning your farm around their overlapping requirements." },
  { title: "3. Use Compost Rewards for Contract Fuel", body: "The Compost Machine generates event tickets and seed packs that directly feed into contract requirements. Run the Compost Machine continuously to maintain contract material." },
  { title: "4. Prioritize Mutation Spray Contracts", body: "Mutation sprays (Autumn, Wet, Fire) are the most versatile contract rewards. They help complete future mutation-related contracts while also boosting your income." },
  { title: "5. Track Expiry Timers", body: "Accept contracts as soon as they refresh. The 24-hour daily cycle means missing one day costs you 1/7th of your weekly contract income." },
];

export function ContractsGuidePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <JsonLd data={[breadcrumbSchema(pageSeo.contracts.path, "Plant Contracts Guide"), faqSchema(faq)]} />
      <Breadcrumbs segments={[{label: "Home", href: "/"}, {label: "Plant Contracts Guide", href: "/contracts-guide"}]} />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Update 4 Feature</p>
        <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">Plant Contracts Guide</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Plant Contracts are quest-like objectives in Update 4. This guide covers every contract type,
          the best rewards to target, and how to integrate contracts into your daily farm routine
          without disrupting your income.
        </p>
      </section>

      <Section eyebrow="Contract types" title="Three Contract Categories">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {contractTypes.map((c) => (
            <div key={c.name} className="rounded-lg border border-white/10 bg-slate-900/50 p-5">
              <h3 className="text-lg font-black text-emerald-300">{c.name}</h3>
              <div className="mt-2 grid gap-1 text-xs text-slate-400">
                <span>{c.duration} | {c.difficulty}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                <strong className="text-amber-300">Rewards:</strong> {c.rewards}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                <strong className="text-amber-300">Tip:</strong> {c.tip}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Strategy" title="5 Steps to Master Plant Contracts">
        <div className="grid gap-4">
          {strategySteps.map((s) => (
            <div key={s.title} className="rounded-lg border border-white/10 bg-slate-900/50 p-5">
              <h2 className="text-lg font-black text-emerald-300">{s.title}</h2>
              <p className="mt-2 leading-7 text-slate-300">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Reward priority" title="Contract Reward Tier List">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <InfoCard title="S-Tier Rewards">
            Pet items (Harvest Drone upgrade, Rain Cloud upgrade). These directly improve your automation and long-term income. Drop everything for pet contract rewards.
          </InfoCard>
          <InfoCard title="A-Tier Rewards">
            Mutation sprays (Autumn, Fire, Wet). These boost harvest value and help complete future mutation contracts. Always worth pursuing.
          </InfoCard>
          <InfoCard title="B-Tier Rewards">
            Rare seed packs, fertilizer, event tickets. Useful for maintaining your farm but not worth disrupting your main income strategy.
          </InfoCard>
        </div>
      </Section>

      <Section eyebrow="Integration" title="Contracts + Compost Machine + Profit Calculator">
        <div className="rounded-lg border border-amber-400/20 bg-amber-950/15 p-6">
          <p className="leading-7 text-slate-300">
            The three Update 4 systems work together. Run the <Link to="/compost-machine-guide" className="font-bold text-emerald-300 min-h-[44px]">Compost Machine</Link> to generate event tickets and seed packs.
            Use those resources to complete Plant Contracts faster. Use the <Link to="/profit-calculator" className="font-bold text-emerald-300 min-h-[44px]">profit calculator</Link> to check
            whether completing a contract is worth more than your standard harvest routine.
          </p>
        </div>
      </Section>

      <Section title="Frequently Asked Questions">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {faq.map((item) => (
            <InfoCard key={item.question} title={item.question}>{item.answer}</InfoCard>
          ))}
        </div>
      </Section>
      <DataDisclaimer dataType="contract rewards and strategies" />
    </main>
  );
}

export default ContractsGuidePage;

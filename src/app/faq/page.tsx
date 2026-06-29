import { Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InfoCard, Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";

const categories = [
  {
    title: "Game Basics",
    items: [
      {
        question: "What is Bridger: WESTERN?",
        answer:
          "Bridger: WESTERN is a Roblox western action RPG by BRIDGER INC. It combines gunfights, horses, Stands, vampires, faction conflict, Tarot cards, fishing, and open-world PvP.",
      },
      {
        question: "What should beginners do first?",
        answer:
          "Learn the controls, fish for Moola and XP, buy a better horse, then move into cards, weapons, and Stand progression once your route is stable.",
      },
      {
        question: "Which faction should I choose?",
        answer:
          "The source guides generally recommend Outlaw for faster early exploration and convenient routes. Inlaw can be safer but may place you farther from high-value activity.",
      },
    ],
  },
  {
    title: "Progression",
    items: [
      {
        question: "How do I earn Moola safely?",
        answer:
          "Fishing is the safest early method. Buy a rod and bait, sell fish and chests, then spend the money on ammo, Tonics, a horse upgrade, and Tarot card rolls.",
      },
      {
        question: "How do I increase Tier?",
        answer:
          "Earn XP from fishing, world events, and PvP. Tier 3 is the major goal because it supports a full three-card build and stronger combat readiness.",
      },
      {
        question: "Does age matter?",
        answer:
          "Deaths can increase character age and create cosmetic changes. The source guides recommend Dog's Bane herbs to keep age under control.",
      },
    ],
  },
  {
    title: "Stands and Events",
    items: [
      {
        question: "How do I get a Stand?",
        answer:
          "Use Corpse Parts during golden beam events or fish for rare Arrow Shards. Corpse Parts are faster but attract server-wide PvP pressure.",
      },
      {
        question: "What does 'It appears once again' mean?",
        answer:
          "It signals a Corpse Part style event. Look for the golden beam, reach it quickly, and be ready to fight other players for the item.",
      },
      {
        question: "What are the best Stands?",
        answer:
          "The source tier list highlights D4C, The World, Star Platinum, and White Snake as top-tier picks, with Tuba Bells, Tusk, and Modulu close behind.",
      },
    ],
  },
  {
    title: "Weapons and Cards",
    items: [
      {
        question: "What is the best gun?",
        answer:
          "Whitney Dragoon has the best raw damage, while Winchester Repeater is the strongest all-around rifle. Scofield, Colt, and Tommy Gun are strong alternatives.",
      },
      {
        question: "Where do cards come from?",
        answer:
          "Cards come from the Witch's Hut in the swamp. A reading costs Moola, rerolls cost extra, and higher tiers let you equip more card slots.",
      },
      {
        question: "Which accessories matter?",
        answer:
          "Cowboy Hat, Lasso, Poncho, ammo packs, and Tonics are repeatedly emphasized because survivability and utility decide many fights.",
      },
    ],
  },
];

const allFaq = categories.flatMap((category) => category.items);

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema("/faq", "FAQ"), faqSchema(allFaq)]} />
      <Breadcrumbs segments={[{ label: "Home", href: "/" }, { label: "FAQ", href: "/faq" }]} />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
          Bridger Western questions answered
        </p>
        <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">Bridger Western FAQ</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Common answers for codes, fishing, Moola, Stands, Corpse Parts, horses, cards, weapons, and early progression.
        </p>
      </section>

      {categories.map((category) => (
        <Section key={category.title} title={category.title}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {category.items.map((item) => (
              <InfoCard key={item.question} title={item.question}>
                <p>{item.answer}</p>
              </InfoCard>
            ))}
          </div>
        </Section>
      ))}

      <Section title="Quick Links">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <InfoCard title="Beginner Guide">
            Controls, fishing, horse upgrades, cards, and first Stand route.
            <Link to="/beginner-guide" className="mt-3 block font-bold text-emerald-300 min-h-[44px]">Start here</Link>
          </InfoCard>
          <InfoCard title="Codes Guide">
            Redeeming, reward types, and starter spending priorities.
            <Link to="/codes" className="mt-3 block font-bold text-emerald-300 min-h-[44px]">View codes</Link>
          </InfoCard>
          <InfoCard title="Stand Tier List">
            D4C, The World, Star Platinum, Tusk, Tuba Bells, and more.
            <Link to="/tier-list" className="mt-3 block font-bold text-emerald-300 min-h-[44px]">Open rankings</Link>
          </InfoCard>
          <InfoCard title="Gun Tier List">
            Whitney Dragoon, Winchester, Scofield, Colt, Tommy Gun, and loadouts.
            <Link to="/seeds-database" className="mt-3 block font-bold text-emerald-300 min-h-[44px]">Compare guns</Link>
          </InfoCard>
        </div>
      </Section>
    </>
  );
}

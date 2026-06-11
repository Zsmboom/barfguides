import { JsonLd } from "@/components/JsonLd";
import { InfoCard, Section } from "@/components/Section";
import { activeCodes, mutations, pets, seeds } from "@/lib/data";
import { pageSeo } from "@/lib/page-seo";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";


const faq = [
  {
    question: "What did Build A Ring Farm Update 4 add?",
    answer:
      "Update 4 coverage includes Compost Machine, Plant Contracts, Farm Skins, Friend O Tron, 24 new plants, pets, and new mutations such as Fire, Bubblegum, Admin, and Starfall.",
  },
  {
    question: "Which Update 4 mutation has the highest multiplier?",
    answer: "Starfall is listed as the top Update 4 mutation in the current data with an 8x multiplier.",
  },
];

export function Update4PatchNotesPage() {
  const updateMutations = mutations.filter((mutation) => mutation.isUpdate4);
  const highSeeds = [...seeds.slice(11)].sort((a, b) => b.price - a.price);
  const updateCodes = activeCodes.filter((code) => ["PLANTRUSH", "250KUSERS"].includes(code.code));

  return (
    <>
      <JsonLd data={[breadcrumbSchema(pageSeo.update4.path, "Update 4 Patch Notes"), faqSchema(faq)]} />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">June 2026 content gap</p>
        <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">Build A Ring Farm Update 4 Patch Notes</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Update 4 expands BARF with new progression systems, pets, mutations, codes, and a much deeper seed economy.
          Use this page as a practical breakdown of what changed and what to prioritize first.
        </p>
      </section>

      <Section title="New Features">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InfoCard title="Compost Machine">Turns spare crop value into progression rewards. Prioritize low-efficiency leftovers instead of sacrificing your best earning seeds.</InfoCard>
          <InfoCard title="Plant Contracts">Quest-style objectives that reward deliberate planting routes instead of pure highest-price farming.</InfoCard>
          <InfoCard title="Farm Skins">Cosmetic progression for players who want a more personalized farm layout while pushing earnings.</InfoCard>
          <InfoCard title="Friend O Tron">Social progression feature that rewards playing alongside friends and coordinating farm activity.</InfoCard>
        </div>
      </Section>

      <Section title="New Seeds: 24 New Plants Added">
        <p className="mb-5 max-w-3xl text-slate-300">
          The current data set tracks 35 total seeds, with the upper 24 entries forming the expanded mid-game, Secret,
          Transcended, Divine, and Exotic economy that Update 4 players care about most.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {highSeeds.map((seed) => (
            <div key={seed.id} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <div className="font-black text-white">{seed.name}</div>
              <div className="mt-1 text-sm text-slate-400">{seed.rarity} • {seed.priceLabel} • {seed.scenario}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="New Mutations">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {updateMutations.map((mutation) => (
            <InfoCard key={mutation.id} title={`${mutation.name} (${mutation.multiplier}x)`}>
              {mutation.trigger}. {mutation.effect}.
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section title="New Pets System">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pets.map((pet) => (
            <InfoCard key={pet.id} title={`${pet.name} - ${pet.tier}`}>
              {pet.bonus}. {pet.recommendation}
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section title="Bug Fixes and Balance Changes">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <InfoCard title="Economy balance">Higher seed brackets make ring and mutation optimization more important than raw purchase price.</InfoCard>
          <InfoCard title="Automation value">Pets reduce missed harvest time, which directly improves practical profit per minute.</InfoCard>
          <InfoCard title="Quest routing">Plant Contracts make it useful to keep some mid-tier seeds available instead of only chasing top rarity.</InfoCard>
        </div>
      </Section>

      <Section title="New Active Codes From This Update">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {updateCodes.map((code) => (
            <InfoCard key={code.code} title={code.code}>
              {code.reward}. {code.note}
            </InfoCard>
          ))}
        </div>
      </Section>
    </>
  );
}


export default Update4PatchNotesPage;

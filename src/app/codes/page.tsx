import { CopyButton } from "@/components/CopyButton";
import { JsonLd } from "@/components/JsonLd";
import { InfoCard, Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { activeCodes, expiredCodes } from "@/lib/data";
import { pageSeo } from "@/lib/page-seo";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";

const faq = [
  {
    question: "How many Build A Ring Farm codes are working in June 2026?",
    answer: "This page lists 11 active codes: BZZBZZ, CARNIVAL, UPDATE5, 250KUSERS, PLANTRUSH, UPDATE2, THANKYOU, BARF:3, 2KLIKES, UPDATE1, and 100KVISITS.",
  },
  {
    question: "Which code should new players redeem first?",
    answer: "Redeem BZZBZZ first for 50 Honey Tokens (Update 7 bee system), then CARNIVAL for 100 Carnival Pass Tickets, and UPDATE5 for a Super Pet Treat. PLANTRUSH, 250KUSERS, and 100KVISITS are also great for skip rewards.",
  },
];

export function CodesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(pageSeo.codes.path, "Codes"), faqSchema(faq)]} />
      <Breadcrumbs segments={[{label: "Home", href: "/"}, {label: "Codes", href: "/codes"}]} />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Updated June 2026</p>
        <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">Build A Ring Farm Codes</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Copy every active BARF code and redeem the newest rewards instantly. All codes below are marked active in the site data.
        </p>
      </section>
      <Section title="Active Codes">
        <div className="overflow-x-auto rounded-lg border border-white/10">
          <table className="min-w-full divide-y divide-white/10 text-sm">
            <thead className="bg-white/[0.04] text-left text-slate-300">
              <tr>
                <th className="px-4 py-3">Code</th>
                <th className="px-4 py-3">Reward</th>
                <th className="px-4 py-3">Added</th>
                <th className="px-4 py-3">Note</th>
                <th className="px-4 py-3">Copy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {activeCodes.map((code) => (
                <tr key={code.code} className="text-slate-300">
                  <td className="px-4 py-3 font-black text-amber-300">{code.code}</td>
                  <td className="px-4 py-3">{code.reward}</td>
                  <td className="px-4 py-3">{code.dateAdded}</td>
                  <td className="px-4 py-3">{code.note}</td>
                  <td className="px-4 py-3"><CopyButton value={code.code} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <Section title="How to Redeem Build A Ring Farm Codes">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <InfoCard title="1. Open the game">Launch Build A Ring Farm on Roblox and wait until your farm interface fully loads.</InfoCard>
          <InfoCard title="2. Find the codes menu">Open the in-game codes or rewards panel, then paste one code exactly as written.</InfoCard>
          <InfoCard title="3. Claim and repeat">Submit the code, collect the reward, and repeat for the rest of the active code list.</InfoCard>
        </div>
      </Section>
      <Section title="Expired Codes">
        <p className="text-slate-300">{expiredCodes.length === 0 ? "No expired codes are listed in the current dataset." : expiredCodes.map((code) => code.code).join(", ")}</p>
      </Section>
    </>
  );
}

export default CodesPage;

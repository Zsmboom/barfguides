import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ProfitCalculator } from "@/components/ProfitCalculator";
import { InfoCard, Section } from "@/components/Section";
import { pageSeo } from "@/lib/page-seo";
import { breadcrumbSchema, faqSchema, buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";
export const metadata: Metadata = buildPageMetadata(pageSeo.calculator);

const faq = [
  {
    question: "How does the Build A Ring Farm profit calculator work?",
    answer:
      "It multiplies each seed's sell value by ring, mutation, saw level, pet, sprinkler, and plant count inputs, then divides net harvest value by growth time to estimate profit per minute.",
  },
  {
    question: "Which ring should I select?",
    answer: "Use Base Ring for early game, Middle Ring after your first major expansion, and Outer Ring for endgame profit comparisons.",
  },
  {
    question: "What does ROI mean here?",
    answer: "ROI shows how many harvests it takes to recoup the seed purchase cost for the selected plant count and multipliers.",
  },
];

export default function ProfitCalculatorPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(pageSeo.calculator.path, "Profit Calculator"), faqSchema(faq)]} />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Seed earnings and ROI</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">
          Build A Ring Farm Profit Calculator
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Calculate profit per minute for any seed setup using ring multiplier, mutation, saw level, pet bonus,
          sprinkler level, and plant count. Use comparison mode to test two seeds under the same farm conditions.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-4">
        <ProfitCalculator />
      </section>
      <Section title="Calculator FAQ">
        <div className="grid gap-4 md:grid-cols-3">
          {faq.map((item) => (
            <InfoCard key={item.question} title={item.question}>{item.answer}</InfoCard>
          ))}
        </div>
      </Section>
    </>
  );
}

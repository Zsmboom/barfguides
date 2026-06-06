import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { pageSeo } from "@/lib/page-seo";
import { breadcrumbSchema, videoGameSchema, buildPageMetadata, jsonLd } from "@/lib/seo";

export const dynamic = "force-static";
export const metadata: Metadata = buildPageMetadata(pageSeo.about);

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <JsonLd data={[breadcrumbSchema("/about", "About"), videoGameSchema()]} />
      <Section eyebrow="ABOUT" title="About BARF Guides">
        <div className="max-w-3xl space-y-6 text-slate-300">
          <p>BARF Guides is an independent fan-made resource for Build A Ring Farm on Roblox. We provide tools, calculators, and strategy guides to help players maximize their farm efficiency.</p>
          <p>Our profit calculator is the only tool on the web that calculates profit per minute and ROI for Build A Ring Farm seed setups.</p>
          <p><strong>Not affiliated with Roblox Corporation or Gamecreates.</strong> This is a fan project created by the community, for the community.</p>
          <p>Game: <a href="https://www.roblox.com/games/107646426076756/Build-A-Ring-Farm" className="text-emerald-400 hover:underline">Build A Ring Farm on Roblox</a></p>
          <p>Developer: Gamecreates</p>
        </div>
      </Section>
    </main>
  );
}

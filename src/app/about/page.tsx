import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageSeo } from "@/lib/page-seo";
import { breadcrumbSchema, videoGameSchema } from "@/lib/seo";

export function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema("/about", "About"), videoGameSchema()]} />
      <Breadcrumbs segments={[{label: "Home", href: "/"}, {label: "About", href: "/about"}]} />
      <div className="mx-auto max-w-7xl px-4 pt-10">
        <div className="overflow-hidden rounded-xl border border-white/10">
          <img
            src="/images/game-screenshot.jpg"
            alt="Build A Ring Farm on Roblox"
            className="h-40 w-full object-cover md:h-56"
            loading="eager"
          />
        </div>
      </div>
      <main className="mx-auto max-w-7xl px-4 py-10">
        <Section eyebrow="ABOUT" level={1} title="About BARF Guides">
        <div className="max-w-3xl space-y-6 text-slate-300">
          <p>BARF Guides is an independent fan-made resource for Build A Ring Farm on Roblox, hosted at <strong>www.buildaringfarmguides.com</strong>. We provide tools, calculators, and strategy guides to help players maximize their farm efficiency.</p>
          <p>Our profit calculator is the only tool on the web that calculates profit per minute and ROI for Build A Ring Farm seed setups.</p>
          <p><strong>Not affiliated with Roblox Corporation or Gamecreates.</strong> This is a fan project created by the community, for the community.</p>
          <p>Game: <a href="https://www.roblox.com/games/107646426076756/Build-A-Ring-Farm" className="text-emerald-400 hover:underline min-h-[44px]">Build A Ring Farm on Roblox</a></p>
          <p>Developer: Gamecreates</p>
        </div>
      </Section>
      </main>
    </>
  );
}

export default AboutPage;

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { gameOverview } from "@/lib/bridger-content";
import { breadcrumbSchema, videoGameSchema } from "@/lib/seo";

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema("/about", "About"), videoGameSchema()]} />
      <Breadcrumbs segments={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />
      <main className="mx-auto max-w-7xl px-4 py-10">
        <Section eyebrow="About" level={1} title="About Bridger Western Wiki">
          <div className="max-w-3xl space-y-6 text-slate-300">
            <p>
              Bridger Western Wiki is an independent fan resource for {gameOverview.name} on Roblox. It adapts
              the local Bridger Western markdown vault into focused pages for beginners, codes, Stands, weapons,
              horses, cards, progression, and events.
            </p>
            <p>
              The source directory contains 502 markdown files across Guides, Stands, Weapons, and Progression.
              This site turns the highest-value topics into readable web pages while preserving the existing route
              structure of the project.
            </p>
            <p>
              <strong>Not affiliated with Roblox Corporation or BRIDGER INC.</strong> Verify major balance changes
              in-game because Roblox experiences can update quickly.
            </p>
            <p>
              Game:{" "}
              <a href={gameOverview.robloxUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline min-h-[44px]">
                Bridger: WESTERN on Roblox
              </a>
            </p>
            <p>Developer: {gameOverview.developer}</p>
          </div>
        </Section>
      </main>
    </>
  );
}

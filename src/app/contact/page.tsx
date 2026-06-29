import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema } from "@/lib/seo";

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema("/contact", "Contact")]} />
      <Breadcrumbs segments={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />
      <main className="mx-auto max-w-7xl px-4 py-10">
        <Section eyebrow="Contact" level={1} title="Contact Bridger Western Wiki">
          <div className="max-w-3xl space-y-6 text-slate-300">
            <p>
              Found outdated Bridger Western info, a broken route, or a topic from the source vault that should become
              a dedicated page? Send a correction through the project issue tracker.
            </p>
            <div className="rounded-lg border border-white/10 bg-slate-900/70 p-6">
              <h2 className="font-black text-white">Corrections and requests</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Include the page URL, the in-game evidence if available, and which source topic should be updated.
              </p>
              <a
                href="https://github.com/Zsmboom/barfguides/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-bold text-emerald-400 hover:text-emerald-300 hover:underline min-h-[44px]"
              >
                Open project issues
              </a>
            </div>
            <p className="text-sm text-slate-500">
              Independent fan guide. Not affiliated with Roblox Corporation or BRIDGER INC.
            </p>
          </div>
        </Section>
      </main>
    </>
  );
}

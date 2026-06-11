import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { pageSeo } from "@/lib/page-seo";
import { breadcrumbSchema } from "@/lib/seo";

export function ContactPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema("/contact", "Contact")]} />
      <main className="mx-auto max-w-7xl px-4 py-10">
        <Section eyebrow="CONTACT" level={1} title="Contact Us">
          <div className="max-w-3xl space-y-6 text-slate-300">
            <p>
              Have a question, found a bug, or want to suggest a new feature for Build A Ring Farm tools?
              We'd love to hear from you.
            </p>

            <div className="rounded-lg border border-white/10 bg-slate-900/70 p-6 space-y-5">
              <div>
                <h2 className="font-black text-white">🐛 Report Bugs</h2>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  If something isn't working right — wrong calculation, broken link, outdated info —
                  open an issue on GitHub:
                </p>
                <a
                  href="https://github.com/Zsmboom/barfguides/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-emerald-400 hover:text-emerald-300 hover:underline"
                >
                  github.com/Zsmboom/barfguides/issues →
                </a>
              </div>

              <div>
                <h2 className="font-black text-white">💡 Feature Requests</h2>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Got an idea for a new tool, calculator, or guide? Let us know on GitHub or reach out.
                </p>
              </div>

              <div>
                <h2 className="font-black text-white">📧 Email</h2>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  For other inquiries, you can reach us at:
                </p>
                <p className="mt-1 text-sm text-emerald-400">support@buildaringfarmguides.com</p>
              </div>
            </div>

            <p className="text-sm text-slate-500">
              buildaringfarmguides.com — Independent fan tools for Build A Ring Farm.
              Not affiliated with Roblox Corporation or Gamecreates.
            </p>
          </div>
        </Section>
      </main>
    </>
  );
}

export default ContactPage;

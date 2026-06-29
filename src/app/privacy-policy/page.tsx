import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema } from "@/lib/seo";

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <JsonLd data={[breadcrumbSchema("/privacy-policy", "Privacy Policy")]} />
      <Breadcrumbs segments={[{ label: "Home", href: "/" }, { label: "Privacy Policy", href: "/privacy-policy" }]} />
      <Section eyebrow="Privacy" level={1} title="Privacy Policy">
        <div className="max-w-3xl space-y-4 text-sm text-slate-300">
          <h2 className="text-lg font-bold text-white">Information We Collect</h2>
          <p>Bridger Western Wiki does not intentionally collect personal information. Hosting providers may collect standard server logs for security and reliability.</p>

          <h2 className="text-lg font-bold text-white">Cookies</h2>
          <p>This site may use essential functionality cookies. It does not require an account to read guides.</p>

          <h2 className="text-lg font-bold text-white">Third-Party Links</h2>
          <p>Pages may link to Roblox, the source wiki, GitHub, or community resources. Those sites have their own privacy practices.</p>

          <h2 className="text-lg font-bold text-white">Children's Privacy</h2>
          <p>This fan guide is not directed at collecting data from children under 13, and we do not knowingly collect personal information from children.</p>

          <h2 className="text-lg font-bold text-white">Changes</h2>
          <p>Policy changes will be posted on this page.</p>
        </div>
      </Section>
    </main>
  );
}

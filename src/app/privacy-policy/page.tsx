import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageSeo } from "@/lib/page-seo";
import { breadcrumbSchema } from "@/lib/seo";

export function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <JsonLd data={[breadcrumbSchema("/privacy-policy", "Privacy Policy")]} />
      <Breadcrumbs segments={[{label: "Home", href: "/"}, {label: "Privacy Policy", href: "/privacy-policy"}]} />
      <Section eyebrow="PRIVACY" level={1} title="Privacy Policy">
        <div className="max-w-3xl space-y-4 text-sm text-slate-300">
          <h2 className="text-lg font-bold text-white">Information We Collect</h2>
          <p>BARF Guides does not collect personal information. We use Cloudflare Pages for hosting, which may collect standard server logs (IP address, browser type, pages visited) for analytics and security purposes.</p>

          <h2 className="text-lg font-bold text-white">Cookies</h2>
          <p>This site may use essential cookies for functionality. We do not use tracking cookies or third-party analytics that collect personal data.</p>

          <h2 className="text-lg font-bold text-white">Third-Party Links</h2>
          <p>Our site contains links to Roblox and other third-party websites. We are not responsible for their privacy practices.</p>

          <h2 className="text-lg font-bold text-white">Children's Privacy</h2>
          <p>Our services are not directed to children under 13. We do not knowingly collect personal information from children.</p>

          <h2 className="text-lg font-bold text-white">Changes</h2>
          <p>This policy may be updated. Changes will be posted on this page.</p>

          <h2 className="text-lg font-bold text-white">Contact</h2>
          <p>For questions about this policy, contact us through the game's official Discord server.</p>
        </div>
      </Section>
    </main>
  );
}

export default PrivacyPolicyPage;

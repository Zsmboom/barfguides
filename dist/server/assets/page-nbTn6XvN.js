import { jsxs, jsx } from "react/jsx-runtime";
import { J as JsonLd, S as Section } from "./JsonLd-BnxbqAWn.js";
import { b as breadcrumbSchema } from "./router-BBbJzgjh.js";
import "@tanstack/react-router";
function PrivacyPolicyPage() {
  return /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-7xl px-4 py-10", children: [
    /* @__PURE__ */ jsx(JsonLd, { data: [breadcrumbSchema("/privacy-policy", "Privacy Policy")] }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "PRIVACY", level: 1, title: "Privacy Policy", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl space-y-4 text-sm text-slate-300", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-white", children: "Information We Collect" }),
      /* @__PURE__ */ jsx("p", { children: "BARF Guides does not collect personal information. We use Cloudflare Pages for hosting, which may collect standard server logs (IP address, browser type, pages visited) for analytics and security purposes." }),
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-white", children: "Cookies" }),
      /* @__PURE__ */ jsx("p", { children: "This site may use essential cookies for functionality. We do not use tracking cookies or third-party analytics that collect personal data." }),
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-white", children: "Third-Party Links" }),
      /* @__PURE__ */ jsx("p", { children: "Our site contains links to Roblox and other third-party websites. We are not responsible for their privacy practices." }),
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-white", children: "Children's Privacy" }),
      /* @__PURE__ */ jsx("p", { children: "Our services are not directed to children under 13. We do not knowingly collect personal information from children." }),
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-white", children: "Changes" }),
      /* @__PURE__ */ jsx("p", { children: "This policy may be updated. Changes will be posted on this page." }),
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-white", children: "Contact" }),
      /* @__PURE__ */ jsx("p", { children: "For questions about this policy, contact us through the game's official Discord server." })
    ] }) })
  ] });
}
export {
  PrivacyPolicyPage,
  PrivacyPolicyPage as default
};

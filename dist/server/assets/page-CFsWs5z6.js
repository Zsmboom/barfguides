import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { J as JsonLd, S as Section } from "./JsonLd-BnxbqAWn.js";
import { b as breadcrumbSchema } from "./router-BBbJzgjh.js";
import "@tanstack/react-router";
function ContactPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(JsonLd, { data: [breadcrumbSchema("/contact", "Contact")] }),
    /* @__PURE__ */ jsx("main", { className: "mx-auto max-w-7xl px-4 py-10", children: /* @__PURE__ */ jsx(Section, { eyebrow: "CONTACT", level: 1, title: "Contact Us", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl space-y-6 text-slate-300", children: [
      /* @__PURE__ */ jsx("p", { children: "Have a question, found a bug, or want to suggest a new feature for Build A Ring Farm tools? We'd love to hear from you." }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-white/10 bg-slate-900/70 p-6 space-y-5", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-black text-white", children: "🐛 Report Bugs" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm leading-6 text-slate-400", children: "If something isn't working right — wrong calculation, broken link, outdated info — open an issue on GitHub:" }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://github.com/Zsmboom/barfguides/issues",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "mt-2 inline-block text-sm text-emerald-400 hover:text-emerald-300 hover:underline",
              children: "github.com/Zsmboom/barfguides/issues →"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-black text-white", children: "💡 Feature Requests" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm leading-6 text-slate-400", children: "Got an idea for a new tool, calculator, or guide? Let us know on GitHub or reach out." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-black text-white", children: "📧 Email" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm leading-6 text-slate-400", children: "For other inquiries, you can reach us at:" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-emerald-400", children: "support@buildaringfarmguides.com" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: "buildaringfarmguides.com — Independent fan tools for Build A Ring Farm. Not affiliated with Roblox Corporation or Gamecreates." })
    ] }) }) })
  ] });
}
export {
  ContactPage,
  ContactPage as default
};

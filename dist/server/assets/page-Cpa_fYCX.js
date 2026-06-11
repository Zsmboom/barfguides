import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { C as CopyButton } from "./CopyButton-CNztm4jS.js";
import { J as JsonLd, S as Section, I as InfoCard } from "./JsonLd-BnxbqAWn.js";
import { b as breadcrumbSchema, d as pageSeo, f as faqSchema, a as activeCodes, k as expiredCodes } from "./router-BBbJzgjh.js";
import "react";
import "@tanstack/react-router";
const faq = [
  {
    question: "How many Build A Ring Farm codes are working in June 2026?",
    answer: "This page lists 8 active codes: 250KUSERS, PLANTRUSH, UPDATE2, THANKYOU, BARF:3, 2KLIKES, UPDATE1, and 100KVISITS."
  },
  {
    question: "Which code should new players redeem first?",
    answer: "Redeem PLANTRUSH, 250KUSERS, and 100KVISITS early because skip and box rewards help reduce waiting during the first farm upgrades."
  }
];
function CodesPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(JsonLd, { data: [breadcrumbSchema(pageSeo.codes.path, "Codes"), faqSchema(faq)] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-12", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-300", children: "Updated June 2026" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 text-4xl font-black text-white md:text-5xl", children: "Build A Ring Farm Codes" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-3xl text-lg leading-8 text-slate-300", children: "Copy every active BARF code and redeem the newest rewards instantly. All codes below are marked active in the site data." })
    ] }),
    /* @__PURE__ */ jsx(Section, { title: "Active Codes", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto rounded-lg border border-white/10", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full divide-y divide-white/10 text-sm", children: [
      /* @__PURE__ */ jsx("thead", { className: "bg-white/[0.04] text-left text-slate-300", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Code" }),
        /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Reward" }),
        /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Added" }),
        /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Note" }),
        /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Copy" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-white/10", children: activeCodes.map((code) => /* @__PURE__ */ jsxs("tr", { className: "text-slate-300", children: [
        /* @__PURE__ */ jsx("td", { className: "px-4 py-3 font-black text-amber-300", children: code.code }),
        /* @__PURE__ */ jsx("td", { className: "px-4 py-3", children: code.reward }),
        /* @__PURE__ */ jsx("td", { className: "px-4 py-3", children: code.dateAdded }),
        /* @__PURE__ */ jsx("td", { className: "px-4 py-3", children: code.note }),
        /* @__PURE__ */ jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsx(CopyButton, { value: code.code }) })
      ] }, code.code)) })
    ] }) }) }),
    /* @__PURE__ */ jsx(Section, { title: "How to Redeem Build A Ring Farm Codes", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
      /* @__PURE__ */ jsx(InfoCard, { title: "1. Open the game", children: "Launch Build A Ring Farm on Roblox and wait until your farm interface fully loads." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "2. Find the codes menu", children: "Open the in-game codes or rewards panel, then paste one code exactly as written." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "3. Claim and repeat", children: "Submit the code, collect the reward, and repeat for the rest of the active code list." })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { title: "Expired Codes", children: /* @__PURE__ */ jsx("p", { className: "text-slate-300", children: expiredCodes.length === 0 ? "No expired codes are listed in the current dataset." : expiredCodes.map((code) => code.code).join(", ") }) })
  ] });
}
export {
  CodesPage,
  CodesPage as default
};

import { jsxs, jsx } from "react/jsx-runtime";
import { J as JsonLd, S as Section, I as InfoCard } from "./JsonLd-BnxbqAWn.js";
import { a as MutationTable } from "./Tables-D_dPf5mc.js";
import { D as DataDisclaimer } from "./DataDisclaimer-CKp4-lRN.js";
import { b as breadcrumbSchema, f as faqSchema, m as mutations } from "./router-BBbJzgjh.js";
import "@tanstack/react-router";
const faq = [
  { question: "What is the best mutation in Build A Ring Farm?", answer: "Starfall (8x) is the highest multiplier, followed by Admin (7x) and Honeycomb (6.5x). For early game, Wet (1.5x) and Autumn (2x) are most accessible." },
  { question: "How do I get mutations in Build A Ring Farm?", answer: "Mutations are triggered by specific events like watering (Wet), seasonal sprays (Autumn), or special in-game events (Radioactive, Alien, Starfall). Update 4 added Fire, Bubblegum, Admin, and Starfall mutations." },
  { question: "Which mutation should I use with expensive seeds?", answer: "High-value seeds like Dragonfruit, Void Orchid, and Divine Golden Apple benefit most from Starfall (8x), Admin (7x), or Honeycomb (6.5x) mutations." }
];
function MutationsTierListPage() {
  return /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-7xl px-4 py-10", children: [
    /* @__PURE__ */ jsx(JsonLd, { data: [breadcrumbSchema("/mutations-tier-list", "Mutations Tier List"), faqSchema(faq)] }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "MUTATIONS", level: 1, title: "Build A Ring Farm Mutations Tier List", children: /* @__PURE__ */ jsx("p", { className: "text-slate-400", children: "All 14 mutations ranked by multiplier value. Update 4 added Fire, Bubblegum, Admin, and Starfall — the highest multipliers in the game." }) }),
    /* @__PURE__ */ jsx(Section, { title: "All Mutations Ranked by Multiplier", children: /* @__PURE__ */ jsx(MutationTable, { mutations: [...mutations].sort((a, b) => b.multiplier - a.multiplier) }) }),
    /* @__PURE__ */ jsx(Section, { title: "Frequently Asked Questions", children: /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2", children: faq.map((item, i) => /* @__PURE__ */ jsx(InfoCard, { title: item.question, children: /* @__PURE__ */ jsx("p", { children: item.answer }) }, i)) }) }),
    /* @__PURE__ */ jsx(DataDisclaimer, { dataType: "mutation multipliers" })
  ] });
}
export {
  MutationsTierListPage,
  MutationsTierListPage as default
};

import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { J as JsonLd, S as Section, I as InfoCard } from "./JsonLd-BnxbqAWn.js";
import { m as mutations, a as activeCodes, b as breadcrumbSchema, f as faqSchema, p as pets, s as seeds, d as pageSeo } from "./router-BBbJzgjh.js";
import "@tanstack/react-router";
const faq = [
  {
    question: "What did Build A Ring Farm Update 4 add?",
    answer: "Update 4 coverage includes Compost Machine, Plant Contracts, Farm Skins, Friend O Tron, 24 new plants, pets, and new mutations such as Fire, Bubblegum, Admin, and Starfall."
  },
  {
    question: "Which Update 4 mutation has the highest multiplier?",
    answer: "Starfall is listed as the top Update 4 mutation in the current data with an 8x multiplier."
  }
];
function Update4PatchNotesPage() {
  const updateMutations = mutations.filter((mutation) => mutation.isUpdate4);
  const highSeeds = seeds.slice(11);
  const updateCodes = activeCodes.filter((code) => ["PLANTRUSH", "250KUSERS"].includes(code.code));
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(JsonLd, { data: [breadcrumbSchema(pageSeo.update4.path, "Update 4 Patch Notes"), faqSchema(faq)] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-12", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-300", children: "June 2026 content gap" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 text-4xl font-black text-white md:text-5xl", children: "Build A Ring Farm Update 4 Patch Notes" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-3xl text-lg leading-8 text-slate-300", children: "Update 4 expands BARF with new progression systems, pets, mutations, codes, and a much deeper seed economy. Use this page as a practical breakdown of what changed and what to prioritize first." })
    ] }),
    /* @__PURE__ */ jsx(Section, { title: "New Features", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsx(InfoCard, { title: "Compost Machine", children: "Turns spare crop value into progression rewards. Prioritize low-efficiency leftovers instead of sacrificing your best earning seeds." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Plant Contracts", children: "Quest-style objectives that reward deliberate planting routes instead of pure highest-price farming." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Farm Skins", children: "Cosmetic progression for players who want a more personalized farm layout while pushing earnings." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Friend O Tron", children: "Social progression feature that rewards playing alongside friends and coordinating farm activity." })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { title: "New Seeds: 24 New Plants Added", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-5 max-w-3xl text-slate-300", children: "The current data set tracks 35 total seeds, with the upper 24 entries forming the expanded mid-game, Secret, Transcended, Divine, and Exotic economy that Update 4 players care about most." }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: highSeeds.map((seed) => /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-white/10 bg-white/[0.04] p-4", children: [
        /* @__PURE__ */ jsx("div", { className: "font-black text-white", children: seed.name }),
        /* @__PURE__ */ jsxs("div", { className: "mt-1 text-sm text-slate-400", children: [
          seed.rarity,
          " • ",
          seed.priceLabel,
          " • ",
          seed.scenario
        ] })
      ] }, seed.id)) })
    ] }),
    /* @__PURE__ */ jsx(Section, { title: "New Mutations", children: /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-4", children: updateMutations.map((mutation) => /* @__PURE__ */ jsxs(InfoCard, { title: `${mutation.name} (${mutation.multiplier}x)`, children: [
      mutation.trigger,
      ". ",
      mutation.effect,
      "."
    ] }, mutation.id)) }) }),
    /* @__PURE__ */ jsx(Section, { title: "New Pets System", children: /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: pets.map((pet) => /* @__PURE__ */ jsxs(InfoCard, { title: `${pet.name} - ${pet.tier}`, children: [
      pet.bonus,
      ". ",
      pet.recommendation
    ] }, pet.id)) }) }),
    /* @__PURE__ */ jsx(Section, { title: "Bug Fixes and Balance Changes", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
      /* @__PURE__ */ jsx(InfoCard, { title: "Economy balance", children: "Higher seed brackets make ring and mutation optimization more important than raw purchase price." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Automation value", children: "Pets reduce missed harvest time, which directly improves practical profit per minute." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Quest routing", children: "Plant Contracts make it useful to keep some mid-tier seeds available instead of only chasing top rarity." })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { title: "New Active Codes From This Update", children: /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2", children: updateCodes.map((code) => /* @__PURE__ */ jsxs(InfoCard, { title: code.code, children: [
      code.reward,
      ". ",
      code.note
    ] }, code.code)) }) })
  ] });
}
export {
  Update4PatchNotesPage,
  Update4PatchNotesPage as default
};

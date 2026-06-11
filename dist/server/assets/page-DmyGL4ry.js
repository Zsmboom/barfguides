import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { J as JsonLd, S as Section, I as InfoCard } from "./JsonLd-BnxbqAWn.js";
import { S as SeedsTable, P as PetTable, a as MutationTable } from "./Tables-D_dPf5mc.js";
import { D as DataDisclaimer } from "./DataDisclaimer-CKp4-lRN.js";
import { e as byTier, m as mutations, b as breadcrumbSchema, d as pageSeo, f as faqSchema, s as seeds, p as pets } from "./router-BBbJzgjh.js";
const faq = [
  {
    question: "What makes a seed S-Tier in Build A Ring Farm?",
    answer: "S-Tier seeds combine high sell value, strong profit per minute, late-game ring scaling, and useful mutation or automation scenarios."
  },
  {
    question: "Are pets included in this tier list?",
    answer: "Yes. This tier list includes seed rankings, pet rankings, and mutation rankings so players can compare the whole farm setup."
  }
];
function TierListPage() {
  const tiers = byTier(seeds);
  const mutationRankings = [...mutations].sort((a, b) => b.multiplier - a.multiplier);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(JsonLd, { data: [breadcrumbSchema(pageSeo.tierList.path, "Tier List"), faqSchema(faq)] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-12", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-300", children: "Seeds, pets, and mutations" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 text-4xl font-black text-white md:text-5xl", children: "Build A Ring Farm Tier List" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-3xl text-lg leading-8 text-slate-300", children: "All 35 seeds ranked from S to D using price, sell value, growth time, profit potential, and practical game stage. Pets and mutations are included below for full setup planning." })
    ] }),
    /* @__PURE__ */ jsxs(Section, { title: "Seeds Tier List", children: [
      /* @__PURE__ */ jsx("div", { className: "grid gap-4", children: ["S", "A", "B", "C", "D"].map((tier) => /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-white/10 bg-slate-900/70 p-4", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-xl font-black text-emerald-300", children: [
          tier,
          "-Tier Seeds"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: tiers[tier].map((seed) => /* @__PURE__ */ jsxs("span", { className: "rounded-md bg-white/[0.06] px-3 py-2 text-sm font-semibold text-slate-200", children: [
          seed.name,
          " ",
          /* @__PURE__ */ jsxs("span", { className: "text-slate-500", children: [
            "(",
            seed.priceLabel,
            ")"
          ] })
        ] }, seed.id)) })
      ] }, tier)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(SeedsTable, { seeds }) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { title: "Pets Tier List", children: [
      /* @__PURE__ */ jsx(PetTable, { pets }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm text-slate-400", children: [
        "Want a deeper pet breakdown? Read the ",
        /* @__PURE__ */ jsx(Link, { to: "/pets-tier-list", className: "font-bold text-emerald-300", children: "pets tier list" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { title: "Mutations Tier List", children: [
      /* @__PURE__ */ jsx(MutationTable, { mutations: mutationRankings }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm text-slate-400", children: [
        "For triggers and Update 4 mutation notes, open the ",
        /* @__PURE__ */ jsx(Link, { to: "/mutations-tier-list", className: "font-bold text-emerald-300", children: "mutations tier list" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsx(Section, { title: "How to Use This Ranking", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
      /* @__PURE__ */ jsx(InfoCard, { title: "Early game", children: "Use D/C seeds only long enough to unlock more plots, codes, and your first better seed bracket." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Mid game", children: "B/A seeds become efficient once Middle Ring and basic automation reduce downtime." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Endgame", children: "S-Tier seeds scale best with Outer Ring, high-value mutations, pets, and sprinkler investment." })
    ] }) }),
    /* @__PURE__ */ jsx(DataDisclaimer, { dataType: "seed rankings" })
  ] });
}
export {
  TierListPage,
  TierListPage as default
};

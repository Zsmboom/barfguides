import { jsxs, jsx } from "react/jsx-runtime";
import { J as JsonLd, S as Section, I as InfoCard } from "./JsonLd-BnxbqAWn.js";
import { P as PetTable } from "./Tables-D_dPf5mc.js";
import { D as DataDisclaimer } from "./DataDisclaimer-CKp4-lRN.js";
import { e as byTier, p as pets, b as breadcrumbSchema } from "./router-BBbJzgjh.js";
import "@tanstack/react-router";
function PetsTierListPage() {
  const grouped = byTier(pets);
  const tiers = ["S", "A", "B", "C", "D"];
  return /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-7xl px-4 py-10", children: [
    /* @__PURE__ */ jsx(JsonLd, { data: [breadcrumbSchema("/pets-tier-list", "Pets Tier List")] }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "TIER LIST", level: 1, title: "Build A Ring Farm Pets Tier List", children: /* @__PURE__ */ jsx("p", { className: "text-slate-400", children: "Every pet in Build A Ring Farm ranked from S-Tier (must-have) to D-Tier (skip). Choose the right pet for your playstyle and progression stage." }) }),
    tiers.map((tier) => {
      const items = grouped[tier];
      if (items.length === 0) return null;
      return /* @__PURE__ */ jsx(Section, { title: `${tier} Tier Pets`, children: /* @__PURE__ */ jsx(PetTable, { pets: items }) }, tier);
    }),
    /* @__PURE__ */ jsx(Section, { title: "How to Get Pets", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsx(InfoCard, { title: "Gamepass Purchase", children: "Some pets can be purchased directly from the in-game shop using in-game currency." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Events & Drops", children: "Limited pets are sometimes available through special events and Update drops." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Plant Contracts", children: "Update 4 introduced Plant Contracts which can reward pet items." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Trading", children: "Players can trade pets with each other in-game." })
    ] }) }),
    /* @__PURE__ */ jsx(DataDisclaimer, { dataType: "pet rankings and bonuses" })
  ] });
}
export {
  PetsTierListPage,
  PetsTierListPage as default
};

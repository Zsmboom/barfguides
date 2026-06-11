import { jsxs, jsx } from "react/jsx-runtime";
import { D as DataDisclaimer } from "./DataDisclaimer-CKp4-lRN.js";
import { J as JsonLd, S as Section } from "./JsonLd-BnxbqAWn.js";
import { S as SeedsTable } from "./Tables-D_dPf5mc.js";
import { b as breadcrumbSchema, g as sortedSeedsByProfit } from "./router-BBbJzgjh.js";
import "@tanstack/react-router";
function SeedsDatabasePage() {
  return /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-7xl px-4 py-10", children: [
    /* @__PURE__ */ jsx(JsonLd, { data: [breadcrumbSchema("/seeds-database", "Seeds Database")] }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "DATABASE", level: 1, title: "Build A Ring Farm Seeds Database", children: /* @__PURE__ */ jsx("p", { className: "text-slate-400", children: "All 35 seeds sorted by Outer Ring profit per minute. Use the tier list to plan your next seed purchase." }) }),
    /* @__PURE__ */ jsx(Section, { title: "All Seeds (Ranked by Outer Ring Profit)", children: /* @__PURE__ */ jsx(SeedsTable, { seeds: sortedSeedsByProfit() }) }),
    /* @__PURE__ */ jsx(DataDisclaimer, { dataType: "seed prices and stats" })
  ] });
}
export {
  SeedsDatabasePage,
  SeedsDatabasePage as default
};

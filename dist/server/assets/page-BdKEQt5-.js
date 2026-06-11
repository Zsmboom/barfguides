import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { J as JsonLd, S as Section, I as InfoCard } from "./JsonLd-BnxbqAWn.js";
import { useState, useMemo } from "react";
import { C as CopyButton } from "./CopyButton-CNztm4jS.js";
import { s as seeds, r as rings, m as mutations, h as formatMoney, b as breadcrumbSchema, d as pageSeo, f as faqSchema } from "./router-BBbJzgjh.js";
import { D as DataDisclaimer } from "./DataDisclaimer-CKp4-lRN.js";
import "@tanstack/react-router";
function getSeed(id) {
  return seeds.find((seed) => seed.id === id) ?? seeds[0];
}
function getRing(id) {
  return rings.find((ring) => ring.id === id) ?? rings[0];
}
function getMutation(id) {
  return mutations.find((mutation) => mutation.id === id) ?? mutations[0];
}
function ProfitCalculator() {
  const [seedId, setSeedId] = useState(seeds[0].id);
  const [compareSeedId, setCompareSeedId] = useState(seeds[seeds.length - 1].id);
  const [ringId, setRingId] = useState(rings[0].id);
  const [mutationId, setMutationId] = useState(mutations[0].id);
  const [sawLevel, setSawLevel] = useState(1);
  const [petBonus, setPetBonus] = useState(0);
  const [sprinklerLevel, setSprinklerLevel] = useState(0);
  const [plantCount, setPlantCount] = useState(12);
  const [compare, setCompare] = useState(false);
  const selected = getSeed(seedId);
  const comparison = getSeed(compareSeedId);
  const ring = getRing(ringId);
  const mutation = getMutation(mutationId);
  const sawMultiplier = 1 + (sawLevel - 1) * 0.01;
  const petMultiplier = 1 + petBonus / 100;
  const sprinklerMultiplier = 1 + sprinklerLevel * 0.02;
  const totalMultiplier = ring.multiplier * mutation.multiplier * sawMultiplier * petMultiplier * sprinklerMultiplier;
  function result(seed = selected) {
    const valuePerPlant = seed.sellPrice * totalMultiplier;
    const totalHarvest = valuePerPlant * plantCount;
    const totalCost = seed.price * plantCount;
    const netHarvest = totalHarvest - totalCost;
    const perMinute = netHarvest * 60 / seed.growthTime;
    const roiHarvests = totalCost > 0 && netHarvest > 0 ? totalCost / netHarvest : Infinity;
    return { valuePerPlant, totalHarvest, netHarvest, perMinute, roiHarvests };
  }
  const primary = useMemo(() => result(selected), [selected, totalMultiplier, plantCount]);
  const secondary = useMemo(() => result(comparison), [comparison, totalMultiplier, plantCount]);
  const copyValue = `${selected.name} setup: ${ring.name}, ${mutation.name}, ${plantCount} plants, ${formatMoney(primary.perMinute)}/min, ${formatMoney(primary.totalHarvest)} per harvest, ROI ${primary.roiHarvests.toFixed(2)} harvests.`;
  return /* @__PURE__ */ jsxs("div", { className: "grid gap-6 lg:grid-cols-[1fr_0.95fr]", children: [
    /* @__PURE__ */ jsxs("section", { className: "rounded-lg border border-white/10 bg-slate-900/72 p-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("label", { className: "grid gap-2 text-sm font-semibold text-slate-200", children: [
          "Seed",
          /* @__PURE__ */ jsx("select", { value: seedId, onChange: (event) => setSeedId(event.target.value), className: "rounded-md border border-white/10 bg-slate-950 px-3 py-2", children: seeds.map((seed) => /* @__PURE__ */ jsxs("option", { value: seed.id, children: [
            seed.name,
            " - ",
            seed.rarity
          ] }, seed.id)) })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "grid gap-2 text-sm font-semibold text-slate-200", children: [
          "Ring",
          /* @__PURE__ */ jsx("select", { value: ringId, onChange: (event) => setRingId(event.target.value), className: "rounded-md border border-white/10 bg-slate-950 px-3 py-2", children: rings.map((item) => /* @__PURE__ */ jsxs("option", { value: item.id, children: [
            item.name,
            " (",
            item.multiplier,
            "x)"
          ] }, item.id)) })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "grid gap-2 text-sm font-semibold text-slate-200", children: [
          "Mutation",
          /* @__PURE__ */ jsx("select", { value: mutationId, onChange: (event) => setMutationId(event.target.value), className: "rounded-md border border-white/10 bg-slate-950 px-3 py-2", children: mutations.map((item) => /* @__PURE__ */ jsxs("option", { value: item.id, children: [
            item.name,
            " (",
            item.multiplier,
            "x)"
          ] }, item.id)) })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "grid gap-2 text-sm font-semibold text-slate-200", children: [
          "Plant Count",
          /* @__PURE__ */ jsx("input", { min: "1", type: "number", value: plantCount, onChange: (event) => setPlantCount(Number(event.target.value)), className: "rounded-md border border-white/10 bg-slate-950 px-3 py-2" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "grid gap-2 text-sm font-semibold text-slate-200 sm:col-span-2", children: [
          "Saw Level: ",
          sawLevel,
          /* @__PURE__ */ jsx("input", { min: "1", max: "100", type: "range", value: sawLevel, onChange: (event) => setSawLevel(Number(event.target.value)) })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "grid gap-2 text-sm font-semibold text-slate-200", children: [
          "Pet Bonus %",
          /* @__PURE__ */ jsx("input", { min: "0", type: "number", value: petBonus, onChange: (event) => setPetBonus(Number(event.target.value)), className: "rounded-md border border-white/10 bg-slate-950 px-3 py-2" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "grid gap-2 text-sm font-semibold text-slate-200", children: [
          "Sprinkler Level",
          /* @__PURE__ */ jsx("input", { min: "0", type: "number", value: sprinklerLevel, onChange: (event) => setSprinklerLevel(Number(event.target.value)), className: "rounded-md border border-white/10 bg-slate-950 px-3 py-2" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 text-sm text-slate-300", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: compare, onChange: (event) => setCompare(event.target.checked) }),
          "Compare seeds side by side"
        ] }),
        compare ? /* @__PURE__ */ jsx("select", { value: compareSeedId, onChange: (event) => setCompareSeedId(event.target.value), className: "rounded-md border border-white/10 bg-slate-950 px-3 py-2 text-sm", children: seeds.map((seed) => /* @__PURE__ */ jsx("option", { value: seed.id, children: seed.name }, seed.id)) }) : null
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "rounded-lg border border-emerald-400/30 bg-emerald-950/25 p-5", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-black text-white", children: "Real-Time Earnings" }),
      /* @__PURE__ */ jsx(ResultPanel, { name: selected.name, result: primary }),
      compare ? /* @__PURE__ */ jsx(ResultPanel, { name: comparison.name, result: secondary, compact: true }) : null,
      /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsx(CopyButton, { value: copyValue, label: "Copy results" }) })
    ] })
  ] });
}
function ResultPanel({
  name,
  result,
  compact = false
}) {
  return /* @__PURE__ */ jsxs("div", { className: compact ? "mt-5 border-t border-white/10 pt-5" : "mt-5", children: [
    /* @__PURE__ */ jsx("h3", { className: "font-black text-emerald-100", children: name }),
    /* @__PURE__ */ jsxs("div", { className: "mt-3 grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsx(Metric, { label: "Profit Per Minute", value: formatMoney(result.perMinute), accent: "profit" }),
      /* @__PURE__ */ jsx(Metric, { label: "ROI", value: `${result.roiHarvests.toFixed(2)} harvests` }),
      /* @__PURE__ */ jsx(Metric, { label: "Total Value per Harvest", value: formatMoney(result.totalHarvest), accent: "money" }),
      /* @__PURE__ */ jsx(Metric, { label: "Net Profit per Harvest", value: formatMoney(result.netHarvest), accent: "profit" })
    ] })
  ] });
}
function Metric({ label, value, accent }) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-white/10 bg-slate-950/60 p-4", children: [
    /* @__PURE__ */ jsx("div", { className: `text-xl font-black ${accent === "profit" ? "text-emerald-300" : accent === "money" ? "text-amber-300" : "text-white"}`, children: value }),
    /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs uppercase tracking-[0.16em] text-slate-500", children: label })
  ] });
}
const faq = [
  {
    question: "How does the Build A Ring Farm profit calculator work?",
    answer: "It multiplies each seed's sell value by ring, mutation, saw level, pet, sprinkler, and plant count inputs, then divides net harvest value by growth time to estimate profit per minute."
  },
  {
    question: "Which ring should I select?",
    answer: "Use Base Ring for early game, Middle Ring after your first major expansion, and Outer Ring for endgame profit comparisons."
  },
  {
    question: "What does ROI mean here?",
    answer: "ROI shows how many harvests it takes to recoup the seed purchase cost for the selected plant count and multipliers."
  }
];
function ProfitCalculatorPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(JsonLd, { data: [breadcrumbSchema(pageSeo.calculator.path, "Profit Calculator"), faqSchema(faq)] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-12", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-300", children: "Seed earnings and ROI" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 text-4xl font-black tracking-tight text-white md:text-5xl", children: "Build A Ring Farm Profit Calculator" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-3xl text-lg leading-8 text-slate-300", children: "Calculate profit per minute for any seed setup using ring multiplier, mutation, saw level, pet bonus, sprinkler level, and plant count. Use comparison mode to test two seeds under the same farm conditions." })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsx(ProfitCalculator, {}) }),
    /* @__PURE__ */ jsx(Section, { title: "Calculator FAQ", children: /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-3", children: faq.map((item) => /* @__PURE__ */ jsx(InfoCard, { title: item.question, children: item.answer }, item.question)) }) }),
    /* @__PURE__ */ jsx(DataDisclaimer, { dataType: "profit calculations and seed metrics" })
  ] });
}
export {
  ProfitCalculatorPage,
  ProfitCalculatorPage as default
};

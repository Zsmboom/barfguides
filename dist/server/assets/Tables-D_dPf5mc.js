import { jsxs, jsx } from "react/jsx-runtime";
import { h as formatMoney, n as netProfitPerHarvest, i as profitPerMinute } from "./router-BBbJzgjh.js";
function SeedsTable({ seeds }) {
  return /* @__PURE__ */ jsx("div", { className: "overflow-x-auto rounded-lg border border-white/10", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full divide-y divide-white/10 text-sm", children: [
    /* @__PURE__ */ jsx("thead", { className: "bg-white/[0.04] text-left text-slate-300", children: /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Seed" }),
      /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Tier" }),
      /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Rarity" }),
      /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Price" }),
      /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Sell" }),
      /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Growth" }),
      /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Outer Profit/min" }),
      /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Best Use" })
    ] }) }),
    /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-white/10", children: seeds.map((seed) => /* @__PURE__ */ jsxs("tr", { className: "text-slate-300", children: [
      /* @__PURE__ */ jsx("td", { className: "px-4 py-3 font-bold text-white", children: seed.name }),
      /* @__PURE__ */ jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsx("span", { className: "rounded bg-emerald-400/15 px-2 py-1 font-bold text-emerald-200", children: seed.tier }) }),
      /* @__PURE__ */ jsx("td", { className: "px-4 py-3", children: seed.rarity }),
      /* @__PURE__ */ jsx("td", { className: "px-4 py-3 text-amber-300", children: seed.priceLabel }),
      /* @__PURE__ */ jsx("td", { className: "px-4 py-3 text-amber-300", children: formatMoney(seed.sellPrice) }),
      /* @__PURE__ */ jsxs("td", { className: "px-4 py-3", children: [
        seed.growthTime,
        "s"
      ] }),
      /* @__PURE__ */ jsx("td", { className: "px-4 py-3 font-bold text-emerald-300", children: formatMoney(profitPerMinute(seed, 19)) }),
      /* @__PURE__ */ jsx("td", { className: "px-4 py-3", children: seed.scenario })
    ] }, seed.id)) })
  ] }) });
}
function PetTable({ pets }) {
  return /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2", children: pets.map((pet) => /* @__PURE__ */ jsxs("article", { className: "rounded-lg border border-white/10 bg-white/[0.04] p-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-black text-white", children: pet.name }),
      /* @__PURE__ */ jsx("span", { className: "rounded bg-emerald-400/15 px-2 py-1 text-sm font-bold text-emerald-200", children: pet.tier })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm font-semibold text-amber-200", children: pet.bonus }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-slate-400", children: pet.role }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-6 text-slate-300", children: pet.recommendation })
  ] }, pet.id)) });
}
function MutationTable({ mutations }) {
  return /* @__PURE__ */ jsx("div", { className: "overflow-x-auto rounded-lg border border-white/10", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full divide-y divide-white/10 text-sm", children: [
    /* @__PURE__ */ jsx("thead", { className: "bg-white/[0.04] text-left text-slate-300", children: /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Mutation" }),
      /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Multiplier" }),
      /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Trigger" }),
      /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Effect" })
    ] }) }),
    /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-white/10", children: mutations.map((mutation) => /* @__PURE__ */ jsxs("tr", { className: "text-slate-300", children: [
      /* @__PURE__ */ jsxs("td", { className: "px-4 py-3 font-bold text-white", children: [
        mutation.name,
        mutation.isUpdate4 ? /* @__PURE__ */ jsx("span", { className: "ml-2 rounded bg-amber-400/15 px-2 py-1 text-xs text-amber-200", children: "Update 4" }) : null
      ] }),
      /* @__PURE__ */ jsxs("td", { className: "px-4 py-3 font-black text-emerald-300", children: [
        mutation.multiplier,
        "x"
      ] }),
      /* @__PURE__ */ jsx("td", { className: "px-4 py-3", children: mutation.trigger }),
      /* @__PURE__ */ jsx("td", { className: "px-4 py-3", children: mutation.effect })
    ] }, mutation.id)) })
  ] }) });
}
function MiniSeedCard({ seed }) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-white/10 bg-white/[0.04] p-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-black text-white", children: seed.name }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: seed.rarity })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "rounded bg-emerald-400/15 px-2 py-1 text-sm font-bold text-emerald-200", children: seed.tier })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-3 grid grid-cols-2 gap-2 text-sm", children: [
      /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Net/harvest" }),
      /* @__PURE__ */ jsx("span", { className: "text-right font-bold text-amber-300", children: formatMoney(netProfitPerHarvest(seed, 19)) }),
      /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Profit/min" }),
      /* @__PURE__ */ jsx("span", { className: "text-right font-bold text-emerald-300", children: formatMoney(profitPerMinute(seed, 19)) })
    ] })
  ] });
}
export {
  MiniSeedCard as M,
  PetTable as P,
  SeedsTable as S,
  MutationTable as a
};

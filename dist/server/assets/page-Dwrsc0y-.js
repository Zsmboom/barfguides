import { jsxs, jsx } from "react/jsx-runtime";
import { D as DataDisclaimer } from "./DataDisclaimer-CKp4-lRN.js";
import { J as JsonLd, S as Section, I as InfoCard } from "./JsonLd-BnxbqAWn.js";
import { M as MiniSeedCard } from "./Tables-D_dPf5mc.js";
import { s as seeds, b as breadcrumbSchema, f as faqSchema } from "./router-BBbJzgjh.js";
import "@tanstack/react-router";
const faq = [
  { question: "How do I get Transcendent seeds in Build A Ring Farm?", answer: "Transcendent seeds are obtained through high-level seed rolling. You need high seed luck stat, good pets (especially Harvest Drone), and Outer Ring unlocked. Keep rolling seeds at higher levels to increase your chances." },
  { question: "What is the cheapest Transcendent seed?", answer: "Moonflower ($380K) is the most affordable Transcendent seed. It's the recommended entry point for players moving from Secret+ seeds to Transcendent." },
  { question: "What is the best Transcendent seed?", answer: "Divine Golden Apple ($1.2M) offers the highest profit among Transcendent seeds at $22.8M/hour with Outer Ring, making it ideal for leaderboard pushing." }
];
function TranscendentSeedsGuidePage() {
  const transcendent = seeds.filter((s) => s.rarity === "Transcended" || s.rarity === "Divine" || s.rarity === "Exotic" || s.rarity === "Secret+");
  return /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-7xl px-4 py-10", children: [
    /* @__PURE__ */ jsx(JsonLd, { data: [breadcrumbSchema("/transcendent-seeds-guide", "Transcendent Seeds Guide"), faqSchema(faq)] }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "GUIDE", level: 1, title: "How to Get Transcendent Seeds in Build A Ring Farm", children: /* @__PURE__ */ jsx("p", { className: "text-slate-400", children: "Transcendent seeds are the highest-tier seeds in Build A Ring Farm. This guide covers how to obtain them, seed luck mechanics, and the best strategies for farming them." }) }),
    /* @__PURE__ */ jsx(Section, { title: "What Are Transcendent Seeds?", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsx(InfoCard, { title: "Seed Tiers", children: "Seeds go from Common → Uncommon → Rare → Epic → Legendary → Secret → Secret+ → Transcended → Divine → Exotic. Each tier is progressively harder to obtain." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Seed Luck Stat", children: "Your seed luck stat increases as you level up and invest in upgrades. Higher luck = better seeds from rolling." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Best Pets for Seeds", children: "Harvest Drone (auto-harvest) and Rain Cloud (auto-water) are essential for maintaining a high-rolling seed operation." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Outer Ring Required", children: "Transcendent seeds shine in the Outer Ring (19x multiplier). Unlock it first before investing heavily in Transcendent seed farming." })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { title: "Transcendent+ Seeds Overview", children: /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: transcendent.map((seed) => /* @__PURE__ */ jsx(MiniSeedCard, { seed }, seed.id)) }) }),
    /* @__PURE__ */ jsx(Section, { title: "Frequently Asked Questions", children: /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2", children: faq.map((item, i) => /* @__PURE__ */ jsx(InfoCard, { title: item.question, children: /* @__PURE__ */ jsx("p", { children: item.answer }) }, i)) }) }),
    /* @__PURE__ */ jsx(DataDisclaimer, { dataType: "seed luck mechanics" })
  ] });
}
export {
  TranscendentSeedsGuidePage,
  TranscendentSeedsGuidePage as default
};

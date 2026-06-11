import { jsxs, jsx } from "react/jsx-runtime";
import { J as JsonLd, S as Section, I as InfoCard } from "./JsonLd-BnxbqAWn.js";
import { Link } from "@tanstack/react-router";
import { b as breadcrumbSchema, d as pageSeo, f as faqSchema } from "./router-BBbJzgjh.js";
import { D as DataDisclaimer } from "./DataDisclaimer-CKp4-lRN.js";
const faq = [
  {
    question: "How do I unlock the Compost Machine in Build A Ring Farm?",
    answer: "The Compost Machine unlocks after reaching a certain farm level or completing the introduction quest chain in Update 4. It appears as a dedicated structure next to your farm plots. Check the in-game quest panel for the exact unlock requirement."
  },
  {
    question: "What seeds should I compost?",
    answer: "Compost your cheapest seeds — Carrot, Beetroot, Pumpkin, Wheat, Melon, and Onion. These are abundant and their harvest value is low enough that the compost rewards (fertilizer, event tickets, mutation sprays) often exceed the lost harvest value."
  },
  {
    question: "Should I compost high-value seeds?",
    answer: "No. High-value seeds (Legendary, Secret, Transcended, Divine, Exotic) should always be planted and harvested. Their sell price with any ring multiplier far exceeds the compost reward. Only compost seeds where the sell price is under $50."
  },
  {
    question: "Can I get exclusive items from composting?",
    answer: "Yes. The Compost Machine has an event track that rewards mutation sprays, seed packs, fertilizer, and exclusive cosmetic items as you compost more seeds. Check the event tab in the Compost Machine UI for current rewards."
  }
];
const compostTips = [
  { tier: "S-Tier to Compost", seeds: "Carrot, Beetroot, Pumpkin", reason: "Cheapest seeds in the game ($3-$8). The compost reward value exceeds the lost harvest. Compost every excess stack." },
  { tier: "A-Tier to Compost", seeds: "Wheat, Melon, Onion, Watermelon", reason: "Good mid-value compost candidates. Compost only when you have a surplus beyond your active plot count." },
  { tier: "Skip Composting", seeds: "Blueberry and above", reason: "Every seed from Rare tier upward earns more when harvested, especially with ring multipliers. Never compost these." }
];
const compostSteps = [
  { title: "Step 1: Unlock the Machine", body: "Progress through the Update 4 introduction quest chain until the Compost Machine appears next to your farm plots. The exact level requirement varies by account progression." },
  { title: "Step 2: Load Low-Tier Seeds", body: "Drag or select seeds from your inventory to load into the Compost Machine. Start with Carrot, Beetroot, and Pumpkin — seeds you accumulate in large quantities." },
  { title: "Step 3: Start the Compost Cycle", body: "Each compost cycle takes a set amount of real time (approximately 5-15 minutes depending on machine upgrades). The machine processes the loaded seeds into compost." },
  { title: "Step 4: Collect Rewards", body: "Compost rewards include fertilizer (speeds up future plant growth), event tickets, mutation sprays, seed packs, and exclusive cosmetic items. Higher-tier compost fills the event track faster." },
  { title: "Step 5: Upgrade the Machine", body: "Invest compost rewards into machine upgrades to increase capacity, reduce cycle time, and unlock higher-tier compost recipes. Fully upgraded machines can process multiple stacks simultaneously." }
];
function CompostMachineGuidePage() {
  return /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-7xl px-4 py-10", children: [
    /* @__PURE__ */ jsx(JsonLd, { data: [breadcrumbSchema(pageSeo.compost.path, "Compost Machine Guide"), faqSchema(faq)] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-12", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-300", children: "Update 4 Feature" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 text-4xl font-black text-white md:text-5xl", children: "Compost Machine Guide" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-3xl text-lg leading-8 text-slate-300", children: "The Compost Machine turns excess seeds into valuable resources. This guide covers how to unlock it, what to compost, what rewards to expect, and how to avoid wasting high-value seeds." })
    ] }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "How it works", title: "Compost Machine Step by Step", children: /* @__PURE__ */ jsx("div", { className: "grid gap-4", children: compostSteps.map((step) => /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-white/10 bg-slate-900/50 p-5", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-black text-emerald-300", children: step.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 leading-7 text-slate-300", children: step.body })
    ] }, step.title)) }) }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "Decision guide", title: "What to Compost vs. What to Keep", children: /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-3", children: compostTips.map((t) => /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-white/10 bg-slate-900/50 p-5", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-black text-emerald-300", children: t.tier }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm font-bold text-slate-400", children: t.seeds }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-6 text-slate-300", children: t.reason })
    ] }, t.tier)) }) }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "Rewards", title: "Compost Machine Rewards", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsx(InfoCard, { title: "Fertilizer", children: "Speeds up plant growth for a set duration. Stack fertilizer with mutation multipliers for the highest profit-per-minute windows." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Event Tickets", children: "Progress the Compost Machine event track, which unlocks exclusive rewards including cosmetic items, mutation sprays, and rare seed packs." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Mutation Sprays", children: "The event track can reward limited-use mutation sprays (Autumn, Wet, Fire) that apply specific mutations to your crops on demand." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Seed Packs", children: "Random seed packs containing seeds from Common to Rare tiers. Useful for filling plot gaps without spending cash." })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "Integration", title: "Compost Machine + Profit Calculator", children: /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-amber-400/20 bg-amber-950/15 p-6", children: /* @__PURE__ */ jsxs("p", { className: "leading-7 text-slate-300", children: [
      "Use the ",
      /* @__PURE__ */ jsx(Link, { to: "/profit-calculator", className: "font-bold text-emerald-300", children: "profit calculator" }),
      " to check whether a seed is better harvested or composted. As a rule of thumb: if the seed sells for under $50 with no ring multiplier, compost it. Everything else should be harvested. See the ",
      /* @__PURE__ */ jsx(Link, { to: "/money-guide", className: "font-bold text-emerald-300", children: "money guide" }),
      " for full income strategies."
    ] }) }) }),
    /* @__PURE__ */ jsx(Section, { title: "Frequently Asked Questions", children: /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2", children: faq.map((item) => /* @__PURE__ */ jsx(InfoCard, { title: item.question, children: item.answer }, item.question)) }) }),
    /* @__PURE__ */ jsx(DataDisclaimer, { dataType: "compost strategies" })
  ] });
}
export {
  CompostMachineGuidePage,
  CompostMachineGuidePage as default
};

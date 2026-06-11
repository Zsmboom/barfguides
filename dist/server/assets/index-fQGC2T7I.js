import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { J as JsonLd, S as Section, a as StatCard, I as InfoCard } from "./JsonLd-BnxbqAWn.js";
import { s as seeds, b as breadcrumbSchema, f as faqSchema, v as videoGameSchema, m as mutations, p as pets, a as activeCodes, c as site } from "./router-BBbJzgjh.js";
const faq = [
  {
    question: "What is Build A Ring Farm?",
    answer: "Build A Ring Farm is a Roblox farming simulator where players plant seeds, upgrade rings, collect pets, and compete on leaderboards. Developed by Gamecreates (game ID 107646426076756), the game has attracted millions of visits since launch and receives regular content updates."
  },
  {
    question: "What is the best tool on this site?",
    answer: "The profit calculator is the main differentiator because it estimates profit per minute, ROI, harvest value, ring multipliers, mutations, pets, and sprinkler bonuses. The codes page and tier list complement it for full planning."
  },
  {
    question: "How many active codes are available?",
    answer: "There are 8 active codes in June 2026: 250KUSERS, PLANTRUSH, UPDATE2, THANKYOU, BARF:3, 2KLIKES, UPDATE1, and 100KVISITS. Visit the codes page to copy them and see what each reward does."
  },
  {
    question: "Is BARF Guides an official website?",
    answer: "No, BARF Guides is an independent fan resource. We are not affiliated with Gamecreates or Roblox. All game data is based on community research and in-game observation."
  }
];
const RARITY_ORDER = [
  "Common",
  "Uncommon",
  "Rare",
  "Epic",
  "Legendary",
  "Secret",
  "Secret+",
  "Transcended",
  "Divine",
  "Exotic"
];
const rarityCounts = RARITY_ORDER.map((r) => ({
  rarity: r,
  count: seeds.filter((s) => s.rarity === r).length
}));
function HomePage() {
  const topEndgame = seeds.filter((s) => s.tier === "S").slice(0, 5);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      JsonLd,
      {
        data: [
          breadcrumbSchema("/", "Home"),
          faqSchema(faq),
          videoGameSchema()
        ]
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto grid max-w-7xl gap-8 px-4 py-14 lg:grid-cols-[1fr_1fr] lg:items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-300", children: "Build A Ring Farm tools" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-4 text-4xl font-black tracking-tight text-white md:text-6xl", children: "BARF Guides for smarter farms, faster cash, and better seed choices." }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl text-lg leading-8 text-slate-300", children: "Plan your Build A Ring Farm route with a profit calculator, working codes, seed rankings, pet advice, mutation data, and Update 4 guides built around the game data in this project." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-7 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/profit-calculator",
              className: "rounded-md bg-emerald-500 px-5 py-3 font-black text-slate-950 hover:bg-emerald-400",
              children: "Open Profit Calculator"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/codes",
              className: "rounded-md border border-white/15 px-5 py-3 font-black text-white hover:bg-white/8",
              children: "Claim Codes"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "overflow-hidden rounded-xl border border-white/10 bg-slate-900/80", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/game-screenshot.jpg",
            alt: "Build A Ring Farm gameplay screenshot — rings, crops, and farm progression in Roblox",
            className: "w-full object-cover",
            loading: "eager"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2 p-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("img", { src: "/images/game-icon.png", alt: "Build A Ring Farm icon", className: "size-8 rounded" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-white", children: "Build A Ring Farm" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: "Gamecreates" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.roblox.com/games/107646426076756/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "rounded-md bg-emerald-500 px-3 py-1.5 text-xs font-bold text-slate-950 hover:bg-emerald-400",
              children: "Play on Roblox"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-10", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-2 text-sm font-bold uppercase tracking-[0.18em] text-emerald-300", children: "About the game" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 grid gap-6 md:grid-cols-[1fr_1fr]", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-white/10 bg-slate-900/50 p-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-white", children: "What Is Build A Ring Farm?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 leading-7 text-slate-300", children: "Build A Ring Farm is a Roblox farming simulator published by Gamecreates under game ID 107646426076756. You plant and harvest crops inside progressively larger rings, with the Base Ring giving a 7x multiplier, Middle Ring 13x, and Outer Ring 19x. Your farm earns cash even while you are offline, so every upgrade keeps paying out between play sessions. The current dataset tracks 35 seeds across 10 rarity tiers, 14 mutations that boost harvest value by up to 8x, 8 pets for automation, and a global leaderboard system." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-lg border border-white/10 bg-slate-900/50", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/game-screenshot.jpg",
            alt: "Build A Ring Farm rings and farm layout",
            className: "w-full object-cover",
            loading: "lazy"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 rounded-lg border border-emerald-400/20 bg-emerald-950/15 p-4", children: /* @__PURE__ */ jsx("p", { className: "leading-7 text-slate-300", children: "Update 4 added the Compost Machine, Plant Contracts, Farm Skins, Friend O Tron, 24 new plants, and four new mutations (Fire, Bubblegum, Admin, and Starfall). The game is regularly covered by major Roblox creators including Foltyn, MeEnyu, and CoralBlox2." }) })
    ] }),
    /* @__PURE__ */ jsx(Section, { title: "Quick Stats", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsx(StatCard, { label: "Seeds tracked", value: `${seeds.length}+` }),
      /* @__PURE__ */ jsx(StatCard, { label: "Mutations ranked", value: `${mutations.length}` }),
      /* @__PURE__ */ jsx(StatCard, { label: "Pets listed", value: `${pets.length}` }),
      /* @__PURE__ */ jsx(StatCard, { label: "Active codes", value: activeCodes.length.toString() }),
      /* @__PURE__ */ jsx(StatCard, { label: "Game version", value: site.update }),
      /* @__PURE__ */ jsx(StatCard, { label: "Rarity tiers", value: "10" }),
      /* @__PURE__ */ jsx(StatCard, { label: "Ring multipliers", value: "7x - 19x" }),
      /* @__PURE__ */ jsx(StatCard, { label: "Seed price range", value: "$3 - $5M" })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { title: "Seed Rarity Distribution", children: /* @__PURE__ */ jsx("div", { className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-5", children: rarityCounts.map((item) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "rounded-lg border border-white/10 bg-slate-900/50 p-4 text-center",
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-slate-400", children: item.rarity }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 text-2xl font-black text-white", children: item.count })
        ]
      },
      item.rarity
    )) }) }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "New player?", title: "Getting Started in 4 Steps", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs(InfoCard, { title: "1. Redeem codes", children: [
        "Start with free rewards from active codes. Every new player should redeem PLANTRUSH, 250KUSERS, and 100KVISITS first.",
        /* @__PURE__ */ jsx(Link, { to: "/codes", className: "mt-3 block font-bold text-emerald-300", children: "View all codes" })
      ] }),
      /* @__PURE__ */ jsxs(InfoCard, { title: "2. Plant efficient seeds", children: [
        "Carrot, Beetroot, and Pumpkin are your fastest early earners. Reinvest profits into more plots before chasing expensive seeds.",
        /* @__PURE__ */ jsx(Link, { to: "/beginner-guide", className: "mt-3 block font-bold text-emerald-300", children: "Read beginner guide" })
      ] }),
      /* @__PURE__ */ jsxs(InfoCard, { title: "3. Use the calculator", children: [
        "Compare seeds by profit per minute and ROI. Factor in ring multiplier, mutation bonus, saw level, and pet bonus.",
        /* @__PURE__ */ jsx(Link, { to: "/profit-calculator", className: "mt-3 block font-bold text-emerald-300", children: "Open calculator" })
      ] }),
      /* @__PURE__ */ jsxs(InfoCard, { title: "4. Explore tier lists", children: [
        "See which seeds, pets, and mutations perform best at each stage of the game. Rankings are updated for Update 4.",
        /* @__PURE__ */ jsx(Link, { to: "/tier-list", className: "mt-3 block font-bold text-emerald-300", children: "View rankings" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "Pro tip", title: "Your Farm Earns Offline", children: /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-emerald-400/20 bg-emerald-950/15 p-6", children: /* @__PURE__ */ jsx("p", { className: "leading-7 text-slate-300", children: "Build A Ring Farm continues earning cash even when you are not logged in. Every upgrade you buy — more plots, better rings, higher-tier seeds — keeps generating income between sessions. This means early investments in plot expansion and ring upgrades pay off even while you are away. Prioritize upgrades that increase passive earning potential over one-time boosts." }) }) }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "Featured tools", title: "Start With the Highest-Value Pages", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs(InfoCard, { title: "Profit Calculator", children: [
        "Compare seed setups by profit per minute, total harvest value, and ROI.",
        /* @__PURE__ */ jsx(Link, { to: "/profit-calculator", className: "mt-3 block font-bold text-emerald-300", children: "Calculate earnings" })
      ] }),
      /* @__PURE__ */ jsxs(InfoCard, { title: "Codes", children: [
        "Copy all ",
        activeCodes.length,
        " active June 2026 codes and see which rewards matter first.",
        /* @__PURE__ */ jsx(Link, { to: "/codes", className: "mt-3 block font-bold text-emerald-300", children: "View codes" })
      ] }),
      /* @__PURE__ */ jsxs(InfoCard, { title: "Tier List", children: [
        "See all seeds from S to D, plus pets and mutations in one hub.",
        /* @__PURE__ */ jsx(Link, { to: "/tier-list", className: "mt-3 block font-bold text-emerald-300", children: "Open rankings" })
      ] }),
      /* @__PURE__ */ jsxs(InfoCard, { title: "Events Guide", children: [
        "Plan alien invasions, Plant Rush boss waves, and Starfall event timing for the highest harvest spikes.",
        /* @__PURE__ */ jsx(Link, { to: "/events-guide", className: "mt-3 block font-bold text-emerald-300", children: "Read events guide" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "Popular guides", title: "Deep Dives for Every Play Style", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxs(InfoCard, { title: "Money-Making Guide", children: [
        "Optimized routes from broke to millions. Covers seed rotation, ring upgrades, and Compost Machine strategy for Update 4.",
        /* @__PURE__ */ jsx(Link, { to: "/money-guide", className: "mt-3 block font-bold text-emerald-300", children: "Read money guide" })
      ] }),
      /* @__PURE__ */ jsxs(InfoCard, { title: "Transcendent Seeds", children: [
        "How to unlock and profit from Transcended, Divine, and Exotic seeds. Luck mechanics and farming strategies explained.",
        /* @__PURE__ */ jsx(Link, { to: "/transcendent-seeds-guide", className: "mt-3 block font-bold text-emerald-300", children: "Learn more" })
      ] }),
      /* @__PURE__ */ jsxs(InfoCard, { title: "Compost Machine", children: [
        "Full breakdown of how the Update 4 Compost Machine works, what to compost, and what rewards to expect.",
        /* @__PURE__ */ jsx(Link, { to: "/compost-machine-guide", className: "mt-3 block font-bold text-emerald-300", children: "Compost guide" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { eyebrow: "Endgame push", title: "Top 5 S-Tier Seeds (Outer Ring)", children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto rounded-lg border border-white/10", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full divide-y divide-white/10 text-sm", children: [
        /* @__PURE__ */ jsx("thead", { className: "bg-white/[0.04] text-left text-slate-300", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Seed" }),
          /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Rarity" }),
          /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Buy" }),
          /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Sell" }),
          /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Use case" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-white/10", children: topEndgame.map((seed) => /* @__PURE__ */ jsxs("tr", { className: "text-slate-300", children: [
          /* @__PURE__ */ jsx("td", { className: "px-4 py-3 font-bold text-white", children: seed.name }),
          /* @__PURE__ */ jsx("td", { className: "px-4 py-3", children: seed.rarity }),
          /* @__PURE__ */ jsx("td", { className: "px-4 py-3 text-amber-300", children: seed.priceLabel }),
          /* @__PURE__ */ jsxs("td", { className: "px-4 py-3 text-amber-300", children: [
            "$",
            seed.sellPrice.toLocaleString()
          ] }),
          /* @__PURE__ */ jsx("td", { className: "px-4 py-3", children: seed.scenario })
        ] }, seed.id)) })
      ] }) }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm text-slate-400", children: [
        "Full ranking of all 35 seeds on the ",
        /* @__PURE__ */ jsx(Link, { to: "/seeds-database", className: "font-bold text-emerald-300", children: "seeds database" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "Alert", title: "New Update Coming June 6", children: /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-amber-400/25 bg-amber-950/22 p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "📢" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-black text-white", children: "NEXT UPDATE + ADMIN ABUSE — June 6, 2026" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-3xl text-slate-300", children: 'The Roblox events page shows a new update scheduled for June 6. Titled "ADMIN ABUSE," this update may introduce new Admin-themed content, events, codes, or mutations. Check the codes page regularly for new codes and bookmark the events guide for the latest event strategies.' }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsx(Link, { to: "/codes", className: "inline-block rounded-md bg-amber-500 px-4 py-2 font-black text-slate-950", children: "Check codes" }),
          /* @__PURE__ */ jsx(Link, { to: "/events-guide", className: "inline-block rounded-md border border-white/15 px-4 py-2 font-black text-white", children: "Events guide" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "News", title: "Update 4 Coverage", children: /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-emerald-400/25 bg-emerald-950/22 p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-white", children: "Build A Ring Farm Update 4 Patch Notes" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-3xl text-slate-300", children: "The biggest new systems are Compost Machine, Plant Contracts, Farm Skins, Friend O Tron, new pets, 24 new plants, and Update 4 mutations including Fire (4.5x), Bubblegum (5.5x), Admin (7x), and Starfall (8x). Read the full breakdown, then plan your next money route and event timing with the calculator." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsx(Link, { to: "/update-4-patch-notes", className: "inline-block rounded-md bg-emerald-500 px-4 py-2 font-black text-slate-950", children: "Read the full breakdown" }),
        /* @__PURE__ */ jsx(Link, { to: "/compost-machine-guide", className: "inline-block rounded-md border border-white/15 px-4 py-2 font-black text-white hover:bg-white/8", children: "Compost Machine Guide" }),
        /* @__PURE__ */ jsx(Link, { to: "/contracts-guide", className: "inline-block rounded-md border border-white/15 px-4 py-2 font-black text-white hover:bg-white/8", children: "Plant Contracts Guide" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { eyebrow: "Community", title: "Build A Ring Farm on YouTube", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
        /* @__PURE__ */ jsx(InfoCard, { title: "Foltyn - 930K subscribers", children: '"ROBLOX BUILD A RING FARM.." - 930K views in 9 days. Foltyn explores ring upgrades, seed mutations, and leaderboard pushing. Look for his Update 4 reactions for context on the new mutations and Compost Machine timing.' }),
        /* @__PURE__ */ jsx(InfoCard, { title: "MeEnyu - Verified creator", children: '"I Became the #1 Player in Build a Ring Farm" - 220K views in 3 days. MeEnyu demonstrates endgame seed strategies, mutation stacking, and Outer Ring optimization for the top of the leaderboard.' }),
        /* @__PURE__ */ jsx(InfoCard, { title: "CoralBlox2 - Verified creator", children: '"Starting Over as NOOB with OP SECRET" - 14K views in 1 day. Covers beginner progression and event waves, with focus on the new Update 4 events and boss fights.' })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm text-slate-400", children: [
        "See all questions answered in the ",
        /* @__PURE__ */ jsx(Link, { to: "/faq", className: "font-bold text-emerald-300", children: "FAQ hub" }),
        " or jump straight to the ",
        /* @__PURE__ */ jsx(Link, { to: "/events-guide", className: "font-bold text-emerald-300", children: "events guide" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { title: "Frequently Asked Questions", children: [
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2", children: faq.map((item) => /* @__PURE__ */ jsx(InfoCard, { title: item.question, children: item.answer }, item.question)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 text-sm text-slate-400", children: [
        "Need more answers? Visit the full ",
        /* @__PURE__ */ jsx(Link, { to: "/faq", className: "font-bold text-emerald-300", children: "Build A Ring Farm FAQ" }),
        " page."
      ] })
    ] })
  ] });
}
const SplitComponent = HomePage;
export {
  SplitComponent as component
};

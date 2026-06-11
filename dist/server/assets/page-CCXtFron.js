import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { D as DataDisclaimer } from "./DataDisclaimer-CKp4-lRN.js";
import { J as JsonLd, S as Section, I as InfoCard } from "./JsonLd-BnxbqAWn.js";
import { b as breadcrumbSchema, d as pageSeo, f as faqSchema, a as activeCodes, r as rings, s as seeds } from "./router-BBbJzgjh.js";
const faq = [
  {
    question: "What should beginners do first in Build A Ring Farm?",
    answer: "Redeem all 8 active codes (PLANTRUSH, 250KUSERS, UPDATE2, THANKYOU, BARF:3, 2KLIKES, UPDATE1, 100KVISITS), plant cheap fast seeds (Carrot, Beetroot, Pumpkin), reinvest profits into more plots, and only then move into better seed tiers. Skip the rare mutation chase until you have at least the Base Ring."
  },
  {
    question: "When should I unlock the Middle Ring?",
    answer: "Middle Ring is the 13x profit multiplier that separates mid game from early game. Unlock it as soon as you have at least $1,000 saved. The extra 6x on top of Base Ring pays back the unlock cost in a single harvest cycle of any Epic or Legendary seed."
  },
  {
    question: "How do I earn money fastest as a new player?",
    answer: "Plant Carrot first because it recoups its $3 cost in a single 10-second harvest. Once you have 8 to 12 plots, swap to Watermelon or Blueberry. Reinvest every profit into more plots until you can afford Middle Ring, then push Citrus and Banana as your core money makers."
  },
  {
    question: "Should I bother with the Compost Machine early?",
    answer: "Not on day one. The Compost Machine is more efficient when you have a steady supply of low-tier seeds to spare. Once you reach mid game and you are sitting on stacks of Carrot, Beetroot, and Pumpkin, start composting the excess for fertilizer and event rewards."
  },
  {
    question: "When should I focus on pets?",
    answer: "Pets become valuable once you have enough plots that manual harvest is slow or error-prone. Harvest Drone and Rain Cloud are the two to prioritize. Skip pet investment entirely during the first hour - the ROI is negative compared to planting more seeds."
  }
];
const stages = [
  {
    title: "Stage 1: First Hour ($0 to $100)",
    body: "Redeem all 8 active codes first, especially PLANTRUSH, 250KUSERS, and 100KVISITS for the time skips. Plant Carrot on every available plot - the $3 buy cost pays back in a single 10 second harvest. After every 5 to 10 harvests, spend profits on one more plot before upgrading seed tier. The fastest exit out of stage 1 is plot count, not seed swaps."
  },
  {
    title: "Stage 2: $100 to $1,000",
    body: "Once you can afford Watermelon, switch half your plots and keep Carrot on the other half. Use the calculator to confirm that Watermelon's profit per minute is higher than Carrot's at your current ring. Buy Base Ring (7x) the moment you hit $100, then keep stacking plots until you have at least 12 active plots before moving into mid-tier seeds."
  },
  {
    title: "Stage 3: $1,000 to $10,000",
    body: "Save $1,000+ for Middle Ring (13x), then plant Blueberry, Cabbage, Grape, and Peach in the new ring. This is the first time the calculator shows clear advantage over grinding Common and Uncommon seeds. Reinvest into more plots within the new ring. Use the THANKYOU Autumn Spray on your highest-value seeds for a 2x boost."
  },
  {
    title: "Stage 4: $10,000 to $100,000",
    body: "Move into Epic and Legendary seeds. Sunflower and Citrus are the strongest Epic options, while Banana and Mushroom are the Legendary staples. By this point you should be running two pet slots - Rain Cloud for watering uptime and Market Dog or Sprinkler Bot for harvest consistency. Save for Outer Ring rather than chasing Divine seeds."
  },
  {
    title: "Stage 5: Endgame ($100,000+)",
    body: "Outer Ring (19x) is mandatory for any Transcended, Divine, or Exotic seed to be profitable. Save for it first, then push Dragonfruit, Aurora Lotus, and Void Orchid. Add Harvest Drone for full automation, and start timing your harvest spikes around Starfall or Admin events. This is the path to the top 100 of the leaderboard."
  }
];
const upgradeOrder = [
  ["Plots", "Each new plot adds full seed value to every harvest. Cheapest single upgrade in the game and the right move 90% of the time."],
  ["Base Ring", "7x multiplier on every harvest. Costs $100 and pays for itself within a single 20 second cycle of any mid-tier seed."],
  ["Middle Ring", "13x multiplier. Unlocks the real mid-game economy and makes every Epic and Legendary seed profitable."],
  ["Better Seeds", "Only swap seed tier when the calculator shows that the next tier is faster profit per minute than another plot purchase."],
  ["Pets", "Rain Cloud and Harvest Drone give the highest ROI. Skip pets until mid game unless you have spare Robux to spend."],
  ["Outer Ring", "19x multiplier. Required for any Transcended, Divine, or Exotic seed. The single biggest late-game unlock."]
];
const pitfalls = [
  "Buying expensive seeds before Middle Ring - the profit per minute is worse than just stacking more Common plots.",
  "Ignoring event timing - planting during a Starfall or Admin window compounds the 8x or 7x mutation on top of your ring.",
  "Composting your best profit seeds - the calculator usually shows that planting a high-tier seed is worth more than the compost reward.",
  "Selling right before a mutation lands - always wait for the next event spray cycle before harvesting top seeds.",
  "Hoarding instead of expanding - cash sitting in your inventory does nothing, plots and rings are the long-term multiplier."
];
function BeginnerGuidePage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      JsonLd,
      {
        data: [
          breadcrumbSchema(pageSeo.beginner.path, "Beginner Guide"),
          faqSchema(faq)
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 pt-6", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-xl border border-white/10", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "/images/game-screenshot.jpg",
        alt: "Build A Ring Farm beginner gameplay — rings and crops",
        className: "h-48 w-full object-cover md:h-64",
        loading: "eager"
      }
    ) }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-12", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-300", children: "Start here" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 text-4xl font-black text-white md:text-5xl", children: "Build A Ring Farm Beginner Guide" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-3xl text-lg leading-8 text-slate-300", children: "This guide gives new players a clean route from your first $3 carrot harvest to endgame farming with Transcended and Exotic seeds. Every step tells you what to buy, what to skip, and what to plant so you do not waste money on upgrades that do not improve your harvest uptime." })
    ] }),
    /* @__PURE__ */ jsx(Section, { title: "5-Stage Progression Route", children: /* @__PURE__ */ jsx("div", { className: "grid gap-4", children: stages.map((stage) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "rounded-lg border border-white/10 bg-slate-900/50 p-5",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-black text-emerald-300", children: stage.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 leading-7 text-slate-300", children: stage.body })
        ]
      },
      stage.title
    )) }) }),
    /* @__PURE__ */ jsx(Section, { title: "First 10 Minutes: Step by Step", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs(InfoCard, { title: "Step 1: Redeem codes", children: [
        "Open the codes panel and paste 250KUSERS, PLANTRUSH, UPDATE2, THANKYOU, BARF:3, 2KLIKES, UPDATE1, and 100KVISITS. The time skips and Tropical Seed Packs immediately help your first hour. ",
        activeCodes.length,
        " active codes are available in June 2026 -",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/codes", className: "font-bold text-emerald-300", children: "see the codes page" }),
        "."
      ] }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Step 2: Plant Carrot on every plot", children: "Carrot is $3 and recoups in one 10 second harvest. Plant it on every available plot and let the cycle run for at least 5 minutes before doing anything else." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Step 3: Buy plots, not seeds", children: "Reinvest every carrot profit into a new plot. The plot cost is small compared to the lifetime profit it adds." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Step 4: Save for Base Ring", children: "Hit $100 and unlock the Base Ring (7x). This is the moment your profit per minute visibly jumps. After that, save for Middle Ring." })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { title: "First Upgrade Priority", children: /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-3", children: upgradeOrder.map(([title, body]) => /* @__PURE__ */ jsx(InfoCard, { title, children: body }, title)) }) }),
    /* @__PURE__ */ jsx(Section, { title: "Common Beginner Pitfalls", children: /* @__PURE__ */ jsx("ul", { className: "grid gap-3 text-slate-300 md:grid-cols-2", children: pitfalls.map((item, i) => /* @__PURE__ */ jsx(
      "li",
      {
        className: "rounded-lg border border-amber-400/20 bg-amber-950/15 p-4 text-sm leading-6",
        children: item
      },
      i
    )) }) }),
    /* @__PURE__ */ jsx(Section, { title: "Ring System Explained", children: /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-3", children: rings.map((ring) => /* @__PURE__ */ jsxs(InfoCard, { title: `${ring.name} - ${ring.multiplier}x`, children: [
      ring.description,
      ". Use it in the profit calculator to see how fast the same seed setup scales. The 19x Outer Ring is required for any Transcended, Divine, or Exotic seed to be profitable."
    ] }, ring.id)) }) }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "Offline progress", title: "Your Farm Grows While You Are Away", children: /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-emerald-400/20 bg-emerald-950/15 p-6", children: /* @__PURE__ */ jsx("p", { className: "leading-7 text-slate-300", children: "Build A Ring Farm has offline earnings: your farm continues producing cash even when you close the game. Every plot upgrade, ring unlock, and seed purchase keeps working in the background. This makes early-game plot expansion especially valuable — each new plot earns money 24/7, even when you are not actively playing. Plan your upgrades with offline earning potential in mind." }) }) }),
    /* @__PURE__ */ jsxs(Section, { title: "Best Early Seeds (Ranked)", children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto rounded-lg border border-white/10", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full divide-y divide-white/10 text-sm", children: [
        /* @__PURE__ */ jsx("thead", { className: "bg-white/[0.04] text-left text-slate-300", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Seed" }),
          /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Rarity" }),
          /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Buy" }),
          /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Sell" }),
          /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "Growth" }),
          /* @__PURE__ */ jsx("th", { className: "px-4 py-3", children: "When to use" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-white/10", children: seeds.filter((s) => s.tier === "D" || s.tier === "C" || s.tier === "B").slice(0, 10).map((seed) => /* @__PURE__ */ jsxs("tr", { className: "text-slate-300", children: [
          /* @__PURE__ */ jsx("td", { className: "px-4 py-3 font-bold text-white", children: seed.name }),
          /* @__PURE__ */ jsx("td", { className: "px-4 py-3", children: seed.rarity }),
          /* @__PURE__ */ jsx("td", { className: "px-4 py-3 text-amber-300", children: seed.priceLabel }),
          /* @__PURE__ */ jsxs("td", { className: "px-4 py-3 text-amber-300", children: [
            "$",
            seed.sellPrice.toLocaleString()
          ] }),
          /* @__PURE__ */ jsxs("td", { className: "px-4 py-3", children: [
            seed.growthTime,
            "s"
          ] }),
          /* @__PURE__ */ jsx("td", { className: "px-4 py-3", children: seed.scenario })
        ] }, seed.id)) })
      ] }) }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm text-slate-400", children: [
        "For the full S to D ranking, see the",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/tier-list", className: "font-bold text-emerald-300", children: "tier list" }),
        " or the",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/seeds-database", className: "font-bold text-emerald-300", children: "seeds database" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsx(Section, { title: "Mutation and Pet Basics", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsx(InfoCard, { title: "Mutations", children: "Mutations multiply harvest value. Beginners should focus on the 1.5x Wet mutation and the 2x Autumn mutation (the THANKYOU code gives a free Autumn Spray). The strongest mutations like Starfall and Admin are Update 4 event rewards and are too rare to rely on until mid game." }),
      /* @__PURE__ */ jsxs(InfoCard, { title: "Pets", children: [
        "Pets help with automation, watering, growth, and harvest consistency. Harvest Drone and Rain Cloud are the two S-Tier pets and should be your first pet goals once you have at least Middle Ring unlocked. The full pet ranking is on the",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/pets-tier-list", className: "font-bold text-emerald-300", children: "pets tier list" }),
        "."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { title: "Frequently Asked Questions", children: /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2", children: faq.map((item) => /* @__PURE__ */ jsx(InfoCard, { title: item.question, children: /* @__PURE__ */ jsx("p", { children: item.answer }) }, item.question)) }) }),
    /* @__PURE__ */ jsx(DataDisclaimer, { dataType: "beginner strategies" })
  ] });
}
export {
  BeginnerGuidePage,
  BeginnerGuidePage as default
};

import { jsx, jsxs } from "react/jsx-runtime";
import { Link, createRootRoute, HeadContent, Outlet, Scripts, createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
const appCss = "/assets/globals-Af8ZNTU_.css";
const nav = [
  { href: "/profit-calculator", label: "Calculator" },
  { href: "/codes", label: "Codes" },
  { href: "/tier-list", label: "Tier List" },
  { href: "/update-4-patch-notes", label: "Patch Notes" },
  { href: "/beginner-guide", label: "Beginner Guide" }
];
function Header() {
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 border-b border-white/10 bg-slate-950/88 backdrop-blur", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 text-base font-black tracking-tight text-white", children: [
      /* @__PURE__ */ jsx("img", { src: "/images/game-icon.png", alt: "", className: "size-8 rounded-md" }),
      /* @__PURE__ */ jsx("span", { children: "BARF Guides" })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "flex max-w-[68vw] items-center gap-1 overflow-x-auto text-sm", children: nav.map((item) => /* @__PURE__ */ jsx(
      Link,
      {
        to: item.href,
        className: "whitespace-nowrap rounded-md px-3 py-2 font-semibold text-slate-300 transition hover:bg-white/8 hover:text-white",
        children: item.label
      },
      item.href
    )) })
  ] }) });
}
const codes = [{ "code": "250KUSERS", "reward": "3 Minute Time Skip", "status": "active", "dateAdded": "2026-06-01", "note": "Great for skipping early wait times" }, { "code": "PLANTRUSH", "reward": "1x Plant Rush Boss Box", "status": "active", "dateAdded": "2026-06-03", "note": "Update 4 — claim this first" }, { "code": "UPDATE2", "reward": "x1 Tropical Seed Pack", "status": "active", "dateAdded": "2026-05-25", "note": "Great for mid-game seed variety" }, { "code": "THANKYOU", "reward": "x1 Autumn Spray", "status": "active", "dateAdded": "2026-05-20", "note": "For Autumn mutation route" }, { "code": "BARF:3", "reward": "x1 Acid Spray", "status": "active", "dateAdded": "2026-05-15", "note": "Spray reward for mutations" }, { "code": "2KLIKES", "reward": "x1 Tropical Seed Pack", "status": "active", "dateAdded": "2026-05-10", "note": "Must-claim for new accounts" }, { "code": "UPDATE1", "reward": "x3 Strong Fertilizer", "status": "active", "dateAdded": "2026-05-05", "note": "Speeds up early growth" }, { "code": "100KVISITS", "reward": "5 Minute Time Skip", "status": "active", "dateAdded": "2026-04-28", "note": "Saves early-game waiting" }];
const expiredCodes$1 = [];
const codesJson = {
  codes,
  expiredCodes: expiredCodes$1
};
const rings$1 = [{ "id": "base", "name": "Base Ring", "multiplier": 7, "description": "Starting ring, 7x profit multiplier" }, { "id": "middle", "name": "Middle Ring", "multiplier": 13, "description": "Unlockable mid-game ring, 13x profit multiplier" }, { "id": "outer", "name": "Outer Ring", "multiplier": 19, "description": "Endgame ring, 19x profit multiplier" }];
const mutations$1 = [{ "id": "none", "name": "None", "multiplier": 1, "trigger": "Default state", "effect": "No extra multiplier" }, { "id": "wet", "name": "Wet", "multiplier": 1.5, "trigger": "Watering / rain", "effect": "1.5x harvest value" }, { "id": "frozen", "name": "Frozen", "multiplier": 1.75, "trigger": "Freeze events", "effect": "1.75x harvest value" }, { "id": "autumn", "name": "Autumn", "multiplier": 2, "trigger": "Autumn Spray or seasonal events", "effect": "2x harvest value" }, { "id": "void", "name": "Void", "multiplier": 2.25, "trigger": "Void events or sprays", "effect": "2.25x harvest value" }, { "id": "radioactive", "name": "Radioactive", "multiplier": 3, "trigger": "Special environments", "effect": "3x harvest value" }, { "id": "alien", "name": "Alien", "multiplier": 3.25, "trigger": "Alien invasion events", "effect": "3.25x harvest value" }, { "id": "farm", "name": "Farm", "multiplier": 4, "trigger": "Farm-themed events", "effect": "4x harvest value" }, { "id": "rainbow", "name": "Rainbow", "multiplier": 5, "trigger": "High-tier random mutation", "effect": "5x harvest value" }, { "id": "honeycomb", "name": "Honeycomb", "multiplier": 6.5, "trigger": "Hive events or high-tier triggers", "effect": "6.5x harvest value" }, { "id": "admin", "name": "Admin", "multiplier": 7, "trigger": "Update 4 special events", "effect": "7x high-end event mutation", "isUpdate4": true }, { "id": "fire", "name": "Fire", "multiplier": 4.5, "trigger": "Update 4 fire events", "effect": "4.5x high-value crop burst", "isUpdate4": true }, { "id": "bubblegum", "name": "Bubblegum", "multiplier": 5.5, "trigger": "Update 4 bubblegum events", "effect": "5.5x mid-high mutation", "isUpdate4": true }, { "id": "starfall", "name": "Starfall", "multiplier": 8, "trigger": "Update 4 starfall events", "effect": "8x top-tier pursuit mutation", "isUpdate4": true }];
const pets$1 = [{ "id": "harvest-drone", "name": "Harvest Drone", "tier": "S", "bonus": "Auto-harvest + high frequency", "role": "Endgame automation", "recommendation": "Priority for leaderboard push. Reduces manual harvest loss." }, { "id": "rain-cloud", "name": "Rain Cloud", "tier": "S", "bonus": "Auto-watering + Wet trigger", "role": "Mutation support", "recommendation": "Valuable at all stages. Increases earnings stability." }, { "id": "seed-planter", "name": "Seed Planter", "tier": "A", "bonus": "Auto-planting", "role": "Expansion efficiency", "recommendation": "Mid-game value increases as plots expand." }, { "id": "sprinkler-bot", "name": "Sprinkler Bot", "tier": "A", "bonus": "Improved watering coverage", "role": "Income stability", "recommendation": "Pairs well with high-value seeds and Wet/Frozen routes." }, { "id": "fertilizer-cat", "name": "Fertilizer Cat", "tier": "B", "bonus": "Faster growth rate", "role": "Early-mid transition", "recommendation": "Use when resources are limited. Replace later." }, { "id": "market-dog", "name": "Market Dog", "tier": "B", "bonus": "Optimized sale timing", "role": "Manual profit", "recommendation": "Good for pre-automation players." }, { "id": "basic-helper", "name": "Basic Helper", "tier": "C", "bonus": "Minor operation assist", "role": "Newbie phase", "recommendation": "Only use when no better pet is available." }, { "id": "slow-snail", "name": "Slow Snail", "tier": "D", "bonus": "Low-frequency assist", "role": "Collectible", "recommendation": "Low priority. Don't invest resources." }, { "id": "capybara", "name": "Capybara", "tier": "A", "bonus": "Boosts seed luck for rare seed rolls", "role": "Seed luck enhancement", "recommendation": "Valuable mid-game pet for players hunting Transcended seeds. Pairs with seed rolling strategies." }];
const gameDataJson = {
  rings: rings$1,
  mutations: mutations$1,
  pets: pets$1
};
const seeds$1 = [{ "id": "carrot", "name": "Carrot", "rarity": "Common", "price": 3, "priceLabel": "$3", "sellPrice": 4, "growthTime": 10, "tier": "D", "scenario": "Quick early profit" }, { "id": "beetroot", "name": "Beetroot", "rarity": "Common", "price": 5, "priceLabel": "$5", "sellPrice": 7, "growthTime": 12, "tier": "D", "scenario": "Early game transition" }, { "id": "pumpkin", "name": "Pumpkin", "rarity": "Common", "price": 8, "priceLabel": "$8", "sellPrice": 12, "growthTime": 15, "tier": "D", "scenario": "Stable early income" }, { "id": "wheat", "name": "Wheat", "rarity": "Uncommon", "price": 12, "priceLabel": "$12", "sellPrice": 18, "growthTime": 15, "tier": "C", "scenario": "First expansion round" }, { "id": "melon", "name": "Melon", "rarity": "Uncommon", "price": 18, "priceLabel": "$18", "sellPrice": 28, "growthTime": 20, "tier": "C", "scenario": "Base ring farming" }, { "id": "onion", "name": "Onion", "rarity": "Uncommon", "price": 20, "priceLabel": "$20", "sellPrice": 32, "growthTime": 22, "tier": "C", "scenario": "Pre-plot expansion" }, { "id": "watermelon", "name": "Watermelon", "rarity": "Uncommon", "price": 30, "priceLabel": "$30", "sellPrice": 48, "growthTime": 25, "tier": "C", "scenario": "Push to $100" }, { "id": "blueberry", "name": "Blueberry", "rarity": "Rare", "price": 50, "priceLabel": "$50", "sellPrice": 80, "growthTime": 28, "tier": "B", "scenario": "Mid base ring" }, { "id": "cabbage", "name": "Cabbage", "rarity": "Rare", "price": 85, "priceLabel": "$85", "sellPrice": 140, "growthTime": 32, "tier": "B", "scenario": "$100-$1000 phase" }, { "id": "grape", "name": "Grape", "rarity": "Rare", "price": 120, "priceLabel": "$120", "sellPrice": 200, "growthTime": 35, "tier": "B", "scenario": "Saving for Middle Ring" }, { "id": "peach", "name": "Peach", "rarity": "Rare", "price": 180, "priceLabel": "$180", "sellPrice": 300, "growthTime": 38, "tier": "B", "scenario": "Efficient base ring" }, { "id": "corn", "name": "Corn", "rarity": "Epic", "price": 250, "priceLabel": "$250", "sellPrice": 420, "growthTime": 40, "tier": "B", "scenario": "Middle Ring entry" }, { "id": "plum", "name": "Plum", "rarity": "Epic", "price": 300, "priceLabel": "$300", "sellPrice": 510, "growthTime": 42, "tier": "B", "scenario": "Steady middle ring profit" }, { "id": "sunflower", "name": "Sunflower", "rarity": "Epic", "price": 550, "priceLabel": "$550", "sellPrice": 950, "growthTime": 48, "tier": "B", "scenario": "Push to $1000" }, { "id": "citrus", "name": "Citrus", "rarity": "Epic", "price": 700, "priceLabel": "$700", "sellPrice": 1200, "growthTime": 50, "tier": "B", "scenario": "Mid-game core" }, { "id": "spring-onion", "name": "Spring Onion", "rarity": "Legendary", "price": 1200, "priceLabel": "$1.2K", "sellPrice": 2100, "growthTime": 55, "tier": "A", "scenario": "Legendary entry point" }, { "id": "mango", "name": "Mango", "rarity": "Legendary", "price": 1600, "priceLabel": "$1.6K", "sellPrice": 2800, "growthTime": 58, "tier": "A", "scenario": "Mid-game mainstay" }, { "id": "mushroom", "name": "Mushroom", "rarity": "Legendary", "price": 2e3, "priceLabel": "$2K", "sellPrice": 3500, "growthTime": 60, "tier": "A", "scenario": "Mutation farming" }, { "id": "banana", "name": "Banana", "rarity": "Legendary", "price": 2500, "priceLabel": "$2.5K", "sellPrice": 4400, "growthTime": 62, "tier": "A", "scenario": "$1000-$10000 core" }, { "id": "strawberry", "name": "Strawberry", "rarity": "Secret", "price": 6e3, "priceLabel": "$6K", "sellPrice": 11e3, "growthTime": 70, "tier": "A", "scenario": "Secret seed starter" }, { "id": "starfruit", "name": "Starfruit", "rarity": "Secret", "price": 13e3, "priceLabel": "$13K", "sellPrice": 24e3, "growthTime": 75, "tier": "A", "scenario": "Mid-late push" }, { "id": "apple", "name": "Apple", "rarity": "Secret", "price": 2e4, "priceLabel": "$20K", "sellPrice": 37e3, "growthTime": 80, "tier": "A", "scenario": "Outer ring prep" }, { "id": "dragonfruit", "name": "Dragonfruit", "rarity": "Secret+", "price": 35e4, "priceLabel": "$350K", "sellPrice": 65e4, "growthTime": 120, "tier": "S", "scenario": "Outer ring burst" }, { "id": "moonflower", "name": "Moonflower", "rarity": "Transcended", "price": 38e4, "priceLabel": "$380K", "sellPrice": 7e5, "growthTime": 130, "tier": "S", "scenario": "Transcended entry" }, { "id": "blazing-pepper", "name": "Blazing Pepper", "rarity": "Transcended", "price": 45e4, "priceLabel": "$450K", "sellPrice": 85e4, "growthTime": 135, "tier": "S", "scenario": "Fire mutation synergy" }, { "id": "spectral-herb", "name": "Spectral Herb", "rarity": "Transcended", "price": 5e5, "priceLabel": "$500K", "sellPrice": 95e4, "growthTime": 140, "tier": "S", "scenario": "Stable late-game" }, { "id": "garden-golem", "name": "Garden Golem", "rarity": "Transcended", "price": 565e3, "priceLabel": "$565K", "sellPrice": 11e5, "growthTime": 145, "tier": "S", "scenario": "Pet automation era" }, { "id": "heart-of-corruption", "name": "Heart of Corruption", "rarity": "Transcended", "price": 575e3, "priceLabel": "$575K", "sellPrice": 115e4, "growthTime": 150, "tier": "S", "scenario": "Void/Radioactive combos" }, { "id": "arcane-root", "name": "Arcane Root", "rarity": "Transcended", "price": 62e4, "priceLabel": "$620K", "sellPrice": 125e4, "growthTime": 155, "tier": "S", "scenario": "High-tier mutation profit" }, { "id": "aurora-lotus", "name": "Aurora Lotus", "rarity": "Transcended", "price": 75e4, "priceLabel": "$750K", "sellPrice": 15e5, "growthTime": 160, "tier": "S", "scenario": "Outer ring leaderboard" }, { "id": "divine-golden-apple", "name": "Divine Golden Apple", "rarity": "Transcended", "price": 12e5, "priceLabel": "$1.2M", "sellPrice": 24e5, "growthTime": 170, "tier": "S", "scenario": "Top transcendent profit" }, { "id": "celestial-cactus", "name": "Celestial Cactus", "rarity": "Divine", "price": 18e5, "priceLabel": "$1.8M", "sellPrice": 36e5, "growthTime": 180, "tier": "S", "scenario": "Late-game transition" }, { "id": "ethereal-bloom", "name": "Ethereal Bloom", "rarity": "Divine", "price": 2e6, "priceLabel": "$2M", "sellPrice": 4e6, "growthTime": 185, "tier": "S", "scenario": "Divine seed core" }, { "id": "starlight-fern", "name": "Starlight Fern", "rarity": "Exotic", "price": 35e5, "priceLabel": "$3.5M", "sellPrice": 7e6, "growthTime": 200, "tier": "S", "scenario": "Exotic leaderboard push" }, { "id": "void-orchid", "name": "Void Orchid", "rarity": "Exotic", "price": 5e6, "priceLabel": "$5M", "sellPrice": 1e7, "growthTime": 220, "tier": "S", "scenario": "Current top profit target" }];
const seedsJson = {
  seeds: seeds$1
};
const seedsData = seedsJson;
const gameData = gameDataJson;
const codeData = codesJson;
const site = {
  name: "BARF Guides",
  gameName: "Build A Ring Farm",
  abbreviation: "BARF",
  baseUrl: "https://buildaringfarmguides.com",
  robloxGameId: "107646426076756",
  developer: "Gamecreates",
  genre: "Simulator / Farming",
  update: "Update 4"
};
const seeds = seedsData.seeds;
const rings = gameData.rings;
const mutations = gameData.mutations;
const pets = gameData.pets;
const activeCodes = codeData.codes.filter((code) => code.status === "active");
const expiredCodes = codeData.expiredCodes;
function formatMoney(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value >= 100 ? 0 : 2
  }).format(value);
}
function profitPerMinute(seed, ringMultiplier = 7, mutationMultiplier = 1) {
  return seed.sellPrice * ringMultiplier * mutationMultiplier * 60 / seed.growthTime;
}
function netProfitPerHarvest(seed, ringMultiplier = 7, mutationMultiplier = 1) {
  return seed.sellPrice * ringMultiplier * mutationMultiplier - seed.price;
}
function sortedSeedsByProfit() {
  return [...seeds].sort((a, b) => profitPerMinute(b, 19, 1) - profitPerMinute(a, 19, 1));
}
function byTier(items) {
  return {
    S: items.filter((item) => item.tier === "S"),
    A: items.filter((item) => item.tier === "A"),
    B: items.filter((item) => item.tier === "B"),
    C: items.filter((item) => item.tier === "C"),
    D: items.filter((item) => item.tier === "D")
  };
}
const pages = [
  { path: "/", label: "Home", priority: 1 },
  { path: "/profit-calculator", label: "Profit Calculator", priority: 0.95 },
  { path: "/codes", label: "Codes", priority: 0.9 },
  { path: "/tier-list", label: "Tier List", priority: 0.9 },
  { path: "/update-4-patch-notes", label: "Patch Notes", priority: 0.9 },
  { path: "/beginner-guide", label: "Beginner Guide", priority: 0.85 },
  { path: "/pets-tier-list", label: "Pets Tier List", priority: 0.8 },
  { path: "/mutations-tier-list", label: "Mutations Tier List", priority: 0.8 },
  { path: "/transcendent-seeds-guide", label: "Transcendent Seeds", priority: 0.75 },
  { path: "/money-guide", label: "Money Guide", priority: 0.8 },
  { path: "/compost-machine-guide", label: "Compost Machine", priority: 0.75 },
  { path: "/contracts-guide", label: "Plant Contracts", priority: 0.75 },
  { path: "/seeds-database", label: "Seeds Database", priority: 0.85 },
  { path: "/about", label: "About", priority: 0.4 },
  { path: "/privacy-policy", label: "Privacy Policy", priority: 0.2 },
  { path: "/events-guide", label: "Events Guide", priority: 0.78 },
  { path: "/faq", label: "FAQ", priority: 0.7 },
  { path: "/contact", label: "Contact", priority: 0.3 }
];
function Footer() {
  const major = pages.filter(
    (page) => ["/profit-calculator", "/codes", "/tier-list", "/seeds-database", "/about", "/faq", "/events-guide", "/contact", "/privacy-policy"].includes(page.path)
  );
  return /* @__PURE__ */ jsxs("footer", { className: "mt-20 border-t border-white/10 bg-slate-950", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-[1.2fr_1fr]", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-lg font-black text-white", children: "BARF Guides" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-2xl text-sm leading-6 text-slate-400", children: "Independent fan tools for Build A Ring Farm. Not affiliated with Roblox Corporation or Gamecreates. Use the calculators and rankings as planning aids and verify live game changes in-game." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 text-sm text-slate-500", children: [
          /* @__PURE__ */ jsx("div", { className: "font-semibold text-slate-400 mb-1", children: "Official sources & community thanks" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              "🎮",
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://www.roblox.com/games/107646426076756/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-emerald-300 hover:text-emerald-200",
                  children: "Roblox Game Page"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              "📺 Community data from",
              " ",
              /* @__PURE__ */ jsx("a", { href: "https://www.youtube.com/@Foltyn", target: "_blank", rel: "noopener noreferrer", className: "text-emerald-300 hover:text-emerald-200", children: "Foltyn" }),
              " · ",
              /* @__PURE__ */ jsx("a", { href: "https://www.youtube.com/@MeEnyu", target: "_blank", rel: "noopener noreferrer", className: "text-emerald-300 hover:text-emerald-200", children: "MeEnyu" }),
              " · ",
              /* @__PURE__ */ jsx("a", { href: "https://www.youtube.com/@CoralBlox2", target: "_blank", rel: "noopener noreferrer", className: "text-emerald-300 hover:text-emerald-200", children: "CoralBlox2" }),
              " · ",
              /* @__PURE__ */ jsx("a", { href: "https://beebom.com/?s=build+a+ring+farm", target: "_blank", rel: "noopener noreferrer", className: "text-emerald-300 hover:text-emerald-200", children: "Beebom" })
            ] }),
            /* @__PURE__ */ jsx("li", { className: "text-xs text-slate-600", children: "Seed/pet/mutation data are community-estimated and may not reflect exact in-game values. Updated June 2026." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2 text-sm", children: major.map((page) => /* @__PURE__ */ jsx(Link, { to: page.path, className: "text-slate-300 hover:text-emerald-200", children: page.label }, page.path)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-white/5 px-4 py-3 text-center text-xs text-slate-600", children: "www.buildaringfarmguides.com — Independent fan tools. Not affiliated with Roblox Corp or Gamecreates." })
  ] });
}
const Route$i = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss }
    ],
    scripts: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-ML9ZCCR4X7",
        async: true
      },
      {
        children: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ML9ZCCR4X7');`
      }
    ]
  }),
  component: RootComponent
});
function RootComponent() {
  return /* @__PURE__ */ jsxs("div", { className: "font-sans", id: "root", children: [
    /* @__PURE__ */ jsx(HeadContent, {}),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(Scripts, {})
  ] });
}
const pageSeo = {
  home: {
    path: "/",
    title: "BARF Guides - Build A Ring Farm Tools, Calculators & Guides",
    description: "Complete Build A Ring Farm resource hub. Profit calculator, working codes, seed tier list, pets ranking, Update 4 patch notes, and expert guides.",
    keywords: ["build a ring farm", "barf", "build a ring farm guide", "build a ring farm calculator"]
  },
  calculator: {
    path: "/profit-calculator",
    title: "Build A Ring Farm Profit Calculator - Seed Earnings & ROI",
    description: "Calculate exact profit per minute for any Build A Ring Farm seed setup. Includes ring multiplier, mutation, saw level, pet bonus, and sprinkler.",
    keywords: [
      "build a ring farm profit calculator",
      "build a ring farm calculator",
      "build a ring farm earnings calculator"
    ]
  },
  codes: {
    path: "/codes",
    title: "Build A Ring Farm Codes (June 2026) - 8 Working Codes",
    description: "Active Build A Ring Farm codes: 250KUSERS, PLANTRUSH, UPDATE2, THANKYOU, BARF:3, 2KLIKES, UPDATE1, 100KVISITS. Copy and redeem instantly. Updated June 2026.",
    keywords: ["barf codes", "build a ring farm codes 2026", "build a ring farm redeem codes"]
  },
  tierList: {
    path: "/tier-list",
    title: "Build A Ring Farm Tier List - Best Seeds Ranked (S-Tier to D-Tier)",
    description: "All 35 seeds ranked S to D by profit, growth time, and endgame viability. Includes pets and mutations tier lists for Build A Ring Farm.",
    keywords: ["build a ring farm tier list", "build a ring farm seeds tier list", "best seeds build a ring farm"]
  },
  update4: {
    path: "/update-4-patch-notes",
    title: "Build A Ring Farm Update 4 Patch Notes - What's New (June 2026)",
    description: "Full Build A Ring Farm Update 4 patch notes. Compost Machine, Plant Contracts, Farm Skins, Friend O Tron, new seeds and mutations explained.",
    keywords: ["build a ring farm update 4", "build a ring farm update 4 patch notes", "build a ring farm patch notes"]
  },
  beginner: {
    path: "/beginner-guide",
    title: "Build A Ring Farm Beginner Guide - How to Play & Make Money",
    description: "New to Build A Ring Farm? Complete beginner guide covering how to play, best early seeds, ring system, first upgrades, and fastest money methods.",
    keywords: ["build a ring farm beginner guide", "how to play build a ring farm", "build a ring farm guide"]
  },
  pets: {
    path: "/pets-tier-list",
    title: "Build A Ring Farm Pets Tier List - Best Pets Ranked (S to D)",
    description: "Complete pets tier list for Build A Ring Farm. We rank Harvest Drone, Rain Cloud, and all 8 pets from S-Tier (best) to D-Tier (skip).",
    keywords: ["build a ring farm pets tier list", "best pets build a ring farm", "build a ring farm pets"]
  },
  mutations: {
    path: "/mutations-tier-list",
    title: "Build A Ring Farm Mutations Tier List - All 14 Mutations Ranked",
    description: "Every mutation in Build A Ring Farm ranked by multiplier value. From Wet (1.5x) to Starfall (8x) - plus Update 4's Fire, Bubblegum, Admin, and Starfall.",
    keywords: ["build a ring farm mutations tier list", "build a ring farm mutations"]
  },
  transcendent: {
    path: "/transcendent-seeds-guide",
    title: "How to Get Transcendent Seeds in Build A Ring Farm - Best Method",
    description: "Complete guide to getting Transcendent seeds in Build A Ring Farm. Seed luck mechanics, best pets for rare seeds, and farming strategies.",
    keywords: ["build a ring farm transcendent seeds", "how to get transcendent seeds build a ring farm"]
  },
  money: {
    path: "/money-guide",
    title: "Build A Ring Farm Best Money Method - Make Cash Fast (2026)",
    description: "Updated for Update 4! Best money-making methods in Build A Ring Farm. Compost Machine strategy, ring optimization, pet combos, and seed profit rankings.",
    keywords: ["build a ring farm money guide", "build a ring farm make money fast", "build a ring farm best money method"]
  },
  compost: {
    path: "/compost-machine-guide",
    title: "Compost Machine Guide - How to Unlock & Best Compost Strategy",
    description: "Complete Compost Machine guide for Build A Ring Farm Update 4. How to unlock, compost tiers, best seeds to compost, and reward breakdown.",
    keywords: ["build a ring farm compost machine", "build a ring farm compost guide"]
  },
  contracts: {
    path: "/contracts-guide",
    title: "Plant Contracts Guide - Quests, Rewards & Best Strategy",
    description: "Complete Plant Contracts guide for Build A Ring Farm Update 4. How contracts work, best rewards, and optimal completion strategy.",
    keywords: ["build a ring farm contracts", "build a ring farm plant contracts"]
  },
  seeds: {
    path: "/seeds-database",
    title: "Build A Ring Farm Seeds Database - All 35 Seeds, Prices & Profit",
    description: "Browse all 35 Build A Ring Farm seeds by rarity, price, sell value, growth time, tier, and estimated profit per minute. Updated for Update 4.",
    keywords: ["build a ring farm seeds", "build a ring farm seed database", "build a ring farm all seeds"]
  },
  about: {
    path: "/about",
    title: "About BARF Guides - Build A Ring Farm Fan Tools",
    description: "BARF Guides is an independent fan resource for Build A Ring Farm tools, profit calculator, tier lists, codes, and strategy guides on Roblox.",
    keywords: ["barf guides", "build a ring farm fan site"]
  },
  privacy: {
    path: "/privacy-policy",
    title: "Privacy Policy - BARF Guides",
    description: "Privacy policy for BARF Guides, the independent Build A Ring Farm fan tools and guides website hosted on Cloudflare Pages.",
    keywords: ["barf guides privacy policy"]
  },
  events: {
    path: "/events-guide",
    title: "Build A Ring Farm Events Guide - Invasions, Bosses & Starfall",
    description: "Complete Build A Ring Farm events guide. Alien invasions, Plant Rush bosses, void storms, and Starfall cosmic event. Best seeds and pets for events.",
    keywords: [
      "build a ring farm events",
      "build a ring farm alien invasion",
      "build a ring farm plant rush",
      "build a ring farm starfall"
    ]
  },
  faq: {
    path: "/faq",
    title: "Build A Ring Farm FAQ - Codes, Seeds, Rings, Pets, Events & More",
    description: "Most common Build A Ring Farm questions. Game basics, codes, profit tips, ring strategy, mutations, pets, Update 4, and Transcendent seeds.",
    keywords: [
      "build a ring farm faq",
      "build a ring farm questions",
      "build a ring farm help"
    ]
  },
  contact: {
    path: "/contact",
    title: "Contact Us - BARF Guides",
    description: "Get in touch with BARF Guides. Report issues, suggest features, or ask questions about Build A Ring Farm tools and guides.",
    keywords: ["barf guides contact", "build a ring farm contact", "barf guides support"]
  }
};
function buildPageMetadata({ title, description, keywords, path }) {
  const canonical = `${site.baseUrl}${path === "/" ? "/" : `${path}/`}`;
  return {
    title,
    description,
    keywords,
    canonical,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      type: "website",
      images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: title }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-default.jpg"]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    }
  };
}
function breadcrumbSchema(path, name) {
  const items = path === "/" ? [{ name: "Home", url: `${site.baseUrl}/` }] : [
    { name: "Home", url: `${site.baseUrl}/` },
    { name, url: `${site.baseUrl}${path}/` }
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}
function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}
function videoGameSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: site.gameName,
    alternateName: site.abbreviation,
    description: "Build A Ring Farm is a Roblox farming simulator where players plant seeds, sell harvests, use ring multipliers, chase mutations, and upgrade their farm.",
    url: `https://www.roblox.com/games/${site.robloxGameId}/`,
    applicationCategory: "Game",
    genre: site.genre,
    gamePlatform: "Roblox",
    author: {
      "@type": "Organization",
      name: site.developer
    }
  };
}
function jsonLd(data) {
  return JSON.stringify(data).replaceAll("<", "\\u003c");
}
const $$splitComponentImporter$h = () => import("./update-4-patch-notes-CgY1vA9F.js");
const Route$h = createFileRoute("/update-4-patch-notes")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.update4);
    return {
      meta: [{
        title: meta.title
      }, {
        name: "description",
        content: meta.description
      }, {
        name: "keywords",
        content: meta.keywords.join(", ")
      }, {
        property: "og:title",
        content: meta.openGraph.title
      }, {
        property: "og:description",
        content: meta.openGraph.description
      }, {
        property: "og:url",
        content: meta.openGraph.url
      }, {
        property: "og:site_name",
        content: meta.openGraph.siteName
      }, {
        property: "og:type",
        content: meta.openGraph.type
      }, {
        property: "og:image",
        content: meta.openGraph.images[0].url
      }, {
        name: "twitter:card",
        content: meta.twitter.card
      }, {
        name: "twitter:title",
        content: meta.twitter.title
      }, {
        name: "twitter:description",
        content: meta.twitter.description
      }, {
        name: "twitter:image",
        content: meta.twitter.images[0]
      }, {
        name: "robots",
        content: "index, follow"
      }],
      links: [{
        rel: "canonical",
        href: meta.canonical
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./transcendent-seeds-guide-C4nIa12w.js");
const Route$g = createFileRoute("/transcendent-seeds-guide")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.transcendent);
    return {
      meta: [{
        title: meta.title
      }, {
        name: "description",
        content: meta.description
      }, {
        name: "keywords",
        content: meta.keywords.join(", ")
      }, {
        property: "og:title",
        content: meta.openGraph.title
      }, {
        property: "og:description",
        content: meta.openGraph.description
      }, {
        property: "og:url",
        content: meta.openGraph.url
      }, {
        property: "og:site_name",
        content: meta.openGraph.siteName
      }, {
        property: "og:type",
        content: meta.openGraph.type
      }, {
        property: "og:image",
        content: meta.openGraph.images[0].url
      }, {
        name: "twitter:card",
        content: meta.twitter.card
      }, {
        name: "twitter:title",
        content: meta.twitter.title
      }, {
        name: "twitter:description",
        content: meta.twitter.description
      }, {
        name: "twitter:image",
        content: meta.twitter.images[0]
      }, {
        name: "robots",
        content: "index, follow"
      }],
      links: [{
        rel: "canonical",
        href: meta.canonical
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./tier-list-ggBmAcJh.js");
const Route$f = createFileRoute("/tier-list")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.tierList);
    return {
      meta: [{
        title: meta.title
      }, {
        name: "description",
        content: meta.description
      }, {
        name: "keywords",
        content: meta.keywords.join(", ")
      }, {
        property: "og:title",
        content: meta.openGraph.title
      }, {
        property: "og:description",
        content: meta.openGraph.description
      }, {
        property: "og:url",
        content: meta.openGraph.url
      }, {
        property: "og:site_name",
        content: meta.openGraph.siteName
      }, {
        property: "og:type",
        content: meta.openGraph.type
      }, {
        property: "og:image",
        content: meta.openGraph.images[0].url
      }, {
        name: "twitter:card",
        content: meta.twitter.card
      }, {
        name: "twitter:title",
        content: meta.twitter.title
      }, {
        name: "twitter:description",
        content: meta.twitter.description
      }, {
        name: "twitter:image",
        content: meta.twitter.images[0]
      }, {
        name: "robots",
        content: "index, follow"
      }],
      links: [{
        rel: "canonical",
        href: meta.canonical
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./seeds-database-BTes44Jn.js");
const Route$e = createFileRoute("/seeds-database")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.seeds);
    return {
      meta: [{
        title: meta.title
      }, {
        name: "description",
        content: meta.description
      }, {
        name: "keywords",
        content: meta.keywords.join(", ")
      }, {
        property: "og:title",
        content: meta.openGraph.title
      }, {
        property: "og:description",
        content: meta.openGraph.description
      }, {
        property: "og:url",
        content: meta.openGraph.url
      }, {
        property: "og:site_name",
        content: meta.openGraph.siteName
      }, {
        property: "og:type",
        content: meta.openGraph.type
      }, {
        property: "og:image",
        content: meta.openGraph.images[0].url
      }, {
        name: "twitter:card",
        content: meta.twitter.card
      }, {
        name: "twitter:title",
        content: meta.twitter.title
      }, {
        name: "twitter:description",
        content: meta.twitter.description
      }, {
        name: "twitter:image",
        content: meta.twitter.images[0]
      }, {
        name: "robots",
        content: "index, follow"
      }],
      links: [{
        rel: "canonical",
        href: meta.canonical
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./profit-calculator-siH2kWQt.js");
const Route$d = createFileRoute("/profit-calculator")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.calculator);
    return {
      meta: [{
        title: meta.title
      }, {
        name: "description",
        content: meta.description
      }, {
        name: "keywords",
        content: meta.keywords.join(", ")
      }, {
        property: "og:title",
        content: meta.openGraph.title
      }, {
        property: "og:description",
        content: meta.openGraph.description
      }, {
        property: "og:url",
        content: meta.openGraph.url
      }, {
        property: "og:site_name",
        content: meta.openGraph.siteName
      }, {
        property: "og:type",
        content: meta.openGraph.type
      }, {
        property: "og:image",
        content: meta.openGraph.images[0].url
      }, {
        name: "twitter:card",
        content: meta.twitter.card
      }, {
        name: "twitter:title",
        content: meta.twitter.title
      }, {
        name: "twitter:description",
        content: meta.twitter.description
      }, {
        name: "twitter:image",
        content: meta.twitter.images[0]
      }, {
        name: "robots",
        content: "index, follow"
      }],
      links: [{
        rel: "canonical",
        href: meta.canonical
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./privacy-policy-2j5OwdnD.js");
const Route$c = createFileRoute("/privacy-policy")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.privacy);
    return {
      meta: [{
        title: meta.title
      }, {
        name: "description",
        content: meta.description
      }, {
        name: "keywords",
        content: meta.keywords.join(", ")
      }, {
        property: "og:title",
        content: meta.openGraph.title
      }, {
        property: "og:description",
        content: meta.openGraph.description
      }, {
        property: "og:url",
        content: meta.openGraph.url
      }, {
        property: "og:site_name",
        content: meta.openGraph.siteName
      }, {
        property: "og:type",
        content: meta.openGraph.type
      }, {
        property: "og:image",
        content: meta.openGraph.images[0].url
      }, {
        name: "twitter:card",
        content: meta.twitter.card
      }, {
        name: "twitter:title",
        content: meta.twitter.title
      }, {
        name: "twitter:description",
        content: meta.twitter.description
      }, {
        name: "twitter:image",
        content: meta.twitter.images[0]
      }, {
        name: "robots",
        content: "index, follow"
      }],
      links: [{
        rel: "canonical",
        href: meta.canonical
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./pets-tier-list-tgn59ue3.js");
const Route$b = createFileRoute("/pets-tier-list")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.pets);
    return {
      meta: [{
        title: meta.title
      }, {
        name: "description",
        content: meta.description
      }, {
        name: "keywords",
        content: meta.keywords.join(", ")
      }, {
        property: "og:title",
        content: meta.openGraph.title
      }, {
        property: "og:description",
        content: meta.openGraph.description
      }, {
        property: "og:url",
        content: meta.openGraph.url
      }, {
        property: "og:site_name",
        content: meta.openGraph.siteName
      }, {
        property: "og:type",
        content: meta.openGraph.type
      }, {
        property: "og:image",
        content: meta.openGraph.images[0].url
      }, {
        name: "twitter:card",
        content: meta.twitter.card
      }, {
        name: "twitter:title",
        content: meta.twitter.title
      }, {
        name: "twitter:description",
        content: meta.twitter.description
      }, {
        name: "twitter:image",
        content: meta.twitter.images[0]
      }, {
        name: "robots",
        content: "index, follow"
      }],
      links: [{
        rel: "canonical",
        href: meta.canonical
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./mutations-tier-list-Bv5uxn24.js");
const Route$a = createFileRoute("/mutations-tier-list")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.mutations);
    return {
      meta: [{
        title: meta.title
      }, {
        name: "description",
        content: meta.description
      }, {
        name: "keywords",
        content: meta.keywords.join(", ")
      }, {
        property: "og:title",
        content: meta.openGraph.title
      }, {
        property: "og:description",
        content: meta.openGraph.description
      }, {
        property: "og:url",
        content: meta.openGraph.url
      }, {
        property: "og:site_name",
        content: meta.openGraph.siteName
      }, {
        property: "og:type",
        content: meta.openGraph.type
      }, {
        property: "og:image",
        content: meta.openGraph.images[0].url
      }, {
        name: "twitter:card",
        content: meta.twitter.card
      }, {
        name: "twitter:title",
        content: meta.twitter.title
      }, {
        name: "twitter:description",
        content: meta.twitter.description
      }, {
        name: "twitter:image",
        content: meta.twitter.images[0]
      }, {
        name: "robots",
        content: "index, follow"
      }],
      links: [{
        rel: "canonical",
        href: meta.canonical
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./money-guide-CXY8L8vp.js");
const Route$9 = createFileRoute("/money-guide")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.money);
    return {
      meta: [{
        title: meta.title
      }, {
        name: "description",
        content: meta.description
      }, {
        name: "keywords",
        content: meta.keywords.join(", ")
      }, {
        property: "og:title",
        content: meta.openGraph.title
      }, {
        property: "og:description",
        content: meta.openGraph.description
      }, {
        property: "og:url",
        content: meta.openGraph.url
      }, {
        property: "og:site_name",
        content: meta.openGraph.siteName
      }, {
        property: "og:type",
        content: meta.openGraph.type
      }, {
        property: "og:image",
        content: meta.openGraph.images[0].url
      }, {
        name: "twitter:card",
        content: meta.twitter.card
      }, {
        name: "twitter:title",
        content: meta.twitter.title
      }, {
        name: "twitter:description",
        content: meta.twitter.description
      }, {
        name: "twitter:image",
        content: meta.twitter.images[0]
      }, {
        name: "robots",
        content: "index, follow"
      }],
      links: [{
        rel: "canonical",
        href: meta.canonical
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./faq-DYRyly63.js");
const Route$8 = createFileRoute("/faq")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.faq);
    return {
      meta: [{
        title: meta.title
      }, {
        name: "description",
        content: meta.description
      }, {
        name: "keywords",
        content: meta.keywords.join(", ")
      }, {
        property: "og:title",
        content: meta.openGraph.title
      }, {
        property: "og:description",
        content: meta.openGraph.description
      }, {
        property: "og:url",
        content: meta.openGraph.url
      }, {
        property: "og:site_name",
        content: meta.openGraph.siteName
      }, {
        property: "og:type",
        content: meta.openGraph.type
      }, {
        property: "og:image",
        content: meta.openGraph.images[0].url
      }, {
        name: "twitter:card",
        content: meta.twitter.card
      }, {
        name: "twitter:title",
        content: meta.twitter.title
      }, {
        name: "twitter:description",
        content: meta.twitter.description
      }, {
        name: "twitter:image",
        content: meta.twitter.images[0]
      }, {
        name: "robots",
        content: "index, follow"
      }],
      links: [{
        rel: "canonical",
        href: meta.canonical
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./events-guide-coHlvOXV.js");
const Route$7 = createFileRoute("/events-guide")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.events);
    return {
      meta: [{
        title: meta.title
      }, {
        name: "description",
        content: meta.description
      }, {
        name: "keywords",
        content: meta.keywords.join(", ")
      }, {
        property: "og:title",
        content: meta.openGraph.title
      }, {
        property: "og:description",
        content: meta.openGraph.description
      }, {
        property: "og:url",
        content: meta.openGraph.url
      }, {
        property: "og:site_name",
        content: meta.openGraph.siteName
      }, {
        property: "og:type",
        content: meta.openGraph.type
      }, {
        property: "og:image",
        content: meta.openGraph.images[0].url
      }, {
        name: "twitter:card",
        content: meta.twitter.card
      }, {
        name: "twitter:title",
        content: meta.twitter.title
      }, {
        name: "twitter:description",
        content: meta.twitter.description
      }, {
        name: "twitter:image",
        content: meta.twitter.images[0]
      }, {
        name: "robots",
        content: "index, follow"
      }],
      links: [{
        rel: "canonical",
        href: meta.canonical
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./contracts-guide-BDmNiWUz.js");
const Route$6 = createFileRoute("/contracts-guide")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.contracts);
    return {
      meta: [{
        title: meta.title
      }, {
        name: "description",
        content: meta.description
      }, {
        name: "keywords",
        content: meta.keywords.join(", ")
      }, {
        property: "og:title",
        content: meta.openGraph.title
      }, {
        property: "og:description",
        content: meta.openGraph.description
      }, {
        property: "og:url",
        content: meta.openGraph.url
      }, {
        property: "og:site_name",
        content: meta.openGraph.siteName
      }, {
        property: "og:type",
        content: meta.openGraph.type
      }, {
        property: "og:image",
        content: meta.openGraph.images[0].url
      }, {
        name: "twitter:card",
        content: meta.twitter.card
      }, {
        name: "twitter:title",
        content: meta.twitter.title
      }, {
        name: "twitter:description",
        content: meta.twitter.description
      }, {
        name: "twitter:image",
        content: meta.twitter.images[0]
      }, {
        name: "robots",
        content: "index, follow"
      }],
      links: [{
        rel: "canonical",
        href: meta.canonical
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./contact--dxcuAnM.js");
const Route$5 = createFileRoute("/contact")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.contact);
    return {
      meta: [{
        title: meta.title
      }, {
        name: "description",
        content: meta.description
      }, {
        name: "keywords",
        content: meta.keywords.join(", ")
      }, {
        property: "og:title",
        content: meta.openGraph.title
      }, {
        property: "og:description",
        content: meta.openGraph.description
      }, {
        property: "og:url",
        content: meta.openGraph.url
      }, {
        property: "og:site_name",
        content: meta.openGraph.siteName
      }, {
        property: "og:type",
        content: meta.openGraph.type
      }, {
        property: "og:image",
        content: meta.openGraph.images[0].url
      }, {
        name: "twitter:card",
        content: meta.twitter.card
      }, {
        name: "twitter:title",
        content: meta.twitter.title
      }, {
        name: "twitter:description",
        content: meta.twitter.description
      }, {
        name: "twitter:image",
        content: meta.twitter.images[0]
      }, {
        name: "robots",
        content: "index, follow"
      }],
      links: [{
        rel: "canonical",
        href: meta.canonical
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./compost-machine-guide-D42EMWv5.js");
const Route$4 = createFileRoute("/compost-machine-guide")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.compost);
    return {
      meta: [{
        title: meta.title
      }, {
        name: "description",
        content: meta.description
      }, {
        name: "keywords",
        content: meta.keywords.join(", ")
      }, {
        property: "og:title",
        content: meta.openGraph.title
      }, {
        property: "og:description",
        content: meta.openGraph.description
      }, {
        property: "og:url",
        content: meta.openGraph.url
      }, {
        property: "og:site_name",
        content: meta.openGraph.siteName
      }, {
        property: "og:type",
        content: meta.openGraph.type
      }, {
        property: "og:image",
        content: meta.openGraph.images[0].url
      }, {
        name: "twitter:card",
        content: meta.twitter.card
      }, {
        name: "twitter:title",
        content: meta.twitter.title
      }, {
        name: "twitter:description",
        content: meta.twitter.description
      }, {
        name: "twitter:image",
        content: meta.twitter.images[0]
      }, {
        name: "robots",
        content: "index, follow"
      }],
      links: [{
        rel: "canonical",
        href: meta.canonical
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./codes-CUfdZVif.js");
const Route$3 = createFileRoute("/codes")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.codes);
    return {
      meta: [{
        title: meta.title
      }, {
        name: "description",
        content: meta.description
      }, {
        name: "keywords",
        content: meta.keywords.join(", ")
      }, {
        property: "og:title",
        content: meta.openGraph.title
      }, {
        property: "og:description",
        content: meta.openGraph.description
      }, {
        property: "og:url",
        content: meta.openGraph.url
      }, {
        property: "og:site_name",
        content: meta.openGraph.siteName
      }, {
        property: "og:type",
        content: meta.openGraph.type
      }, {
        property: "og:image",
        content: meta.openGraph.images[0].url
      }, {
        name: "twitter:card",
        content: meta.twitter.card
      }, {
        name: "twitter:title",
        content: meta.twitter.title
      }, {
        name: "twitter:description",
        content: meta.twitter.description
      }, {
        name: "twitter:image",
        content: meta.twitter.images[0]
      }, {
        name: "robots",
        content: "index, follow"
      }],
      links: [{
        rel: "canonical",
        href: meta.canonical
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./beginner-guide-BW3KItAH.js");
const Route$2 = createFileRoute("/beginner-guide")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.beginner);
    return {
      meta: [{
        title: meta.title
      }, {
        name: "description",
        content: meta.description
      }, {
        name: "keywords",
        content: meta.keywords.join(", ")
      }, {
        property: "og:title",
        content: meta.openGraph.title
      }, {
        property: "og:description",
        content: meta.openGraph.description
      }, {
        property: "og:url",
        content: meta.openGraph.url
      }, {
        property: "og:site_name",
        content: meta.openGraph.siteName
      }, {
        property: "og:type",
        content: meta.openGraph.type
      }, {
        property: "og:image",
        content: meta.openGraph.images[0].url
      }, {
        name: "twitter:card",
        content: meta.twitter.card
      }, {
        name: "twitter:title",
        content: meta.twitter.title
      }, {
        name: "twitter:description",
        content: meta.twitter.description
      }, {
        name: "twitter:image",
        content: meta.twitter.images[0]
      }, {
        name: "robots",
        content: "index, follow"
      }],
      links: [{
        rel: "canonical",
        href: meta.canonical
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-Bj1a46LS.js");
const Route$1 = createFileRoute("/about")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.about);
    return {
      meta: [{
        title: meta.title
      }, {
        name: "description",
        content: meta.description
      }, {
        name: "keywords",
        content: meta.keywords.join(", ")
      }, {
        property: "og:title",
        content: meta.openGraph.title
      }, {
        property: "og:description",
        content: meta.openGraph.description
      }, {
        property: "og:url",
        content: meta.openGraph.url
      }, {
        property: "og:site_name",
        content: meta.openGraph.siteName
      }, {
        property: "og:type",
        content: meta.openGraph.type
      }, {
        property: "og:image",
        content: meta.openGraph.images[0].url
      }, {
        name: "twitter:card",
        content: meta.twitter.card
      }, {
        name: "twitter:title",
        content: meta.twitter.title
      }, {
        name: "twitter:description",
        content: meta.twitter.description
      }, {
        name: "twitter:image",
        content: meta.twitter.images[0]
      }, {
        name: "robots",
        content: "index, follow"
      }],
      links: [{
        rel: "canonical",
        href: meta.canonical
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-fQGC2T7I.js");
const Route = createFileRoute("/")({
  head: () => {
    const meta = buildPageMetadata(pageSeo.home);
    return {
      meta: [{
        title: meta.title
      }, {
        name: "description",
        content: meta.description
      }, {
        name: "keywords",
        content: meta.keywords.join(", ")
      }, {
        property: "og:title",
        content: meta.openGraph.title
      }, {
        property: "og:description",
        content: meta.openGraph.description
      }, {
        property: "og:url",
        content: meta.openGraph.url
      }, {
        property: "og:site_name",
        content: meta.openGraph.siteName
      }, {
        property: "og:type",
        content: meta.openGraph.type
      }, {
        property: "og:image",
        content: meta.openGraph.images[0].url
      }, {
        name: "twitter:card",
        content: meta.twitter.card
      }, {
        name: "twitter:title",
        content: meta.twitter.title
      }, {
        name: "twitter:description",
        content: meta.twitter.description
      }, {
        name: "twitter:image",
        content: meta.twitter.images[0]
      }, {
        name: "robots",
        content: "index, follow"
      }],
      links: [{
        rel: "canonical",
        href: meta.canonical
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const Update4PatchNotesRoute = Route$h.update({
  id: "/update-4-patch-notes",
  path: "/update-4-patch-notes",
  getParentRoute: () => Route$i
});
const TranscendentSeedsGuideRoute = Route$g.update({
  id: "/transcendent-seeds-guide",
  path: "/transcendent-seeds-guide",
  getParentRoute: () => Route$i
});
const TierListRoute = Route$f.update({
  id: "/tier-list",
  path: "/tier-list",
  getParentRoute: () => Route$i
});
const SeedsDatabaseRoute = Route$e.update({
  id: "/seeds-database",
  path: "/seeds-database",
  getParentRoute: () => Route$i
});
const ProfitCalculatorRoute = Route$d.update({
  id: "/profit-calculator",
  path: "/profit-calculator",
  getParentRoute: () => Route$i
});
const PrivacyPolicyRoute = Route$c.update({
  id: "/privacy-policy",
  path: "/privacy-policy",
  getParentRoute: () => Route$i
});
const PetsTierListRoute = Route$b.update({
  id: "/pets-tier-list",
  path: "/pets-tier-list",
  getParentRoute: () => Route$i
});
const MutationsTierListRoute = Route$a.update({
  id: "/mutations-tier-list",
  path: "/mutations-tier-list",
  getParentRoute: () => Route$i
});
const MoneyGuideRoute = Route$9.update({
  id: "/money-guide",
  path: "/money-guide",
  getParentRoute: () => Route$i
});
const FaqRoute = Route$8.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$i
});
const EventsGuideRoute = Route$7.update({
  id: "/events-guide",
  path: "/events-guide",
  getParentRoute: () => Route$i
});
const ContractsGuideRoute = Route$6.update({
  id: "/contracts-guide",
  path: "/contracts-guide",
  getParentRoute: () => Route$i
});
const ContactRoute = Route$5.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$i
});
const CompostMachineGuideRoute = Route$4.update({
  id: "/compost-machine-guide",
  path: "/compost-machine-guide",
  getParentRoute: () => Route$i
});
const CodesRoute = Route$3.update({
  id: "/codes",
  path: "/codes",
  getParentRoute: () => Route$i
});
const BeginnerGuideRoute = Route$2.update({
  id: "/beginner-guide",
  path: "/beginner-guide",
  getParentRoute: () => Route$i
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$i
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$i
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BeginnerGuideRoute,
  CodesRoute,
  CompostMachineGuideRoute,
  ContactRoute,
  ContractsGuideRoute,
  EventsGuideRoute,
  FaqRoute,
  MoneyGuideRoute,
  MutationsTierListRoute,
  PetsTierListRoute,
  PrivacyPolicyRoute,
  ProfitCalculatorRoute,
  SeedsDatabaseRoute,
  TierListRoute,
  TranscendentSeedsGuideRoute,
  Update4PatchNotesRoute
};
Route$i._addFileChildren(rootRouteChildren)._addFileTypes();
function createRouter() {
  return createRouter();
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  activeCodes as a,
  breadcrumbSchema as b,
  site as c,
  pageSeo as d,
  byTier as e,
  faqSchema as f,
  sortedSeedsByProfit as g,
  formatMoney as h,
  profitPerMinute as i,
  jsonLd as j,
  expiredCodes as k,
  router as l,
  mutations as m,
  netProfitPerHarvest as n,
  pets as p,
  rings as r,
  seeds as s,
  videoGameSchema as v
};

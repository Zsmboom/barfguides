import type { PageSeo } from "@/lib/seo";

export const pageSeo = {
  home: {
    path: "/",
    title: "Build A Ring Farm Guide — Tools, Calculator, Codes & Tier Lists",
    description:
      "Complete Build A Ring Farm resource hub. Profit calculator, working codes, seed tier list, pets ranking, Update 4 patch notes, and expert guides.",
    keywords: ["build a ring farm", "barf", "build a ring farm guide", "build a ring farm calculator"],
  },
  calculator: {
    path: "/profit-calculator",
    title: "Build A Ring Farm Profit Calculator - Seed Earnings & ROI",
    description:
      "Calculate exact profit per minute for any Build A Ring Farm seed setup. Includes ring multiplier, mutation, saw level, pet bonus, and sprinkler.",
    keywords: [
      "build a ring farm profit calculator",
      "build a ring farm calculator",
      "build a ring farm earnings calculator",
    ],
  },
  codes: {
    path: "/codes",
    title: "Build A Ring Farm Codes (June 2026) - 8 Working Codes",
    description:
      "Active Build A Ring Farm codes: 250KUSERS, PLANTRUSH, UPDATE2, THANKYOU, BARF:3, 2KLIKES, UPDATE1, 100KVISITS. Copy and redeem instantly. Updated June 2026.",
    keywords: ["barf codes", "build a ring farm codes 2026", "build a ring farm redeem codes"],
  },
  tierList: {
    path: "/tier-list",
    title: "Build A Ring Farm Tier List - Best Seeds Ranked (S-Tier to D-Tier)",
    description:
      "All 35 seeds ranked S to D by profit, growth time, and endgame viability. Includes pets and mutations tier lists for Build A Ring Farm.",
    keywords: ["build a ring farm tier list", "build a ring farm seeds tier list", "best seeds build a ring farm"],
  },
  update4: {
    path: "/update-4-patch-notes",
    title: "Build A Ring Farm Update 4 Patch Notes - What's New (June 2026)",
    description:
      "Full Build A Ring Farm Update 4 patch notes. Compost Machine, Plant Contracts, Farm Skins, Friend O Tron, new seeds and mutations explained.",
    keywords: ["build a ring farm update 4", "build a ring farm update 4 patch notes", "build a ring farm patch notes"],
  },
  beginner: {
    path: "/beginner-guide",
    title: "Build A Ring Farm Beginner Guide - How to Play & Make Money",
    description:
      "New to Build A Ring Farm? Complete beginner guide covering how to play, best early seeds, ring system, first upgrades, and fastest money methods.",
    keywords: ["build a ring farm beginner guide", "how to play build a ring farm", "build a ring farm guide"],
  },
  pets: {
    path: "/pets-tier-list",
    title: "Build A Ring Farm Pets Tier List - Best Pets Ranked (S to D)",
    description:
      "Complete pets tier list for Build A Ring Farm. We rank Harvest Drone, Rain Cloud, and all 8 pets from S-Tier (best) to D-Tier (skip).",
    keywords: ["build a ring farm pets tier list", "best pets build a ring farm", "build a ring farm pets"],
  },
  mutations: {
    path: "/mutations-tier-list",
    title: "Build A Ring Farm Mutations Tier List - All 14 Mutations Ranked",
    description:
      "Every mutation in Build A Ring Farm ranked by multiplier value. From Wet (1.5x) to Starfall (8x) - plus Update 4's Fire, Bubblegum, Admin, and Starfall.",
    keywords: ["build a ring farm mutations tier list", "build a ring farm mutations"],
  },
  transcendent: {
    path: "/transcendent-seeds-guide",
    title: "How to Get Transcendent Seeds in Build A Ring Farm - Best Method",
    description:
      "Complete guide to getting Transcendent seeds in Build A Ring Farm. Seed luck mechanics, best pets for rare seeds, and farming strategies.",
    keywords: ["build a ring farm transcendent seeds", "how to get transcendent seeds build a ring farm"],
  },
  money: {
    path: "/money-guide",
    title: "Build A Ring Farm Best Money Method - Make Cash Fast (2026)",
    description:
      "Updated for Update 4! Best money-making methods in Build A Ring Farm. Compost Machine strategy, ring optimization, pet combos, and seed profit rankings.",
    keywords: ["build a ring farm money guide", "build a ring farm make money fast", "build a ring farm best money method"],
  },
  compost: {
    path: "/compost-machine-guide",
    title: "Compost Machine Guide - How to Unlock & Best Compost Strategy",
    description:
      "Complete Compost Machine guide for Build A Ring Farm Update 4. How to unlock, compost tiers, best seeds to compost, and reward breakdown.",
    keywords: ["build a ring farm compost machine", "build a ring farm compost guide"],
  },
  contracts: {
    path: "/contracts-guide",
    title: "Plant Contracts Guide - Quests, Rewards & Best Strategy",
    description:
      "Complete Plant Contracts guide for Build A Ring Farm Update 4. How contracts work, best rewards, and optimal completion strategy.",
    keywords: ["build a ring farm contracts", "build a ring farm plant contracts"],
  },
  seeds: {
    path: "/seeds-database",
    title: "Build A Ring Farm Seeds Database - All 35 Seeds, Prices & Profit",
    description:
      "Browse all 35 Build A Ring Farm seeds by rarity, price, sell value, growth time, tier, and estimated profit per minute. Updated for Update 4.",
    keywords: ["build a ring farm seeds", "build a ring farm seed database", "build a ring farm all seeds"],
  },
  about: {
    path: "/about",
    title: "About BARF Guides - Build A Ring Farm Fan Tools",
    description: "BARF Guides is an independent fan resource for Build A Ring Farm tools, profit calculator, tier lists, codes, and strategy guides on Roblox.",
    keywords: ["barf guides", "build a ring farm fan site"],
  },
  privacy: {
    path: "/privacy-policy",
    title: "Privacy Policy - BARF Guides",
    description: "Privacy policy for BARF Guides, the independent Build A Ring Farm fan tools and guides website hosted on Cloudflare Pages.",
    keywords: ["barf guides privacy policy"],
  },

  events: {
    path: "/events-guide",
    title: "Build A Ring Farm Events Guide - Invasions, Bosses & Starfall",
    description:
      "Complete Build A Ring Farm events guide. Alien invasions, Plant Rush bosses, void storms, and Starfall cosmic event. Best seeds and pets for events.",
    keywords: [
      "build a ring farm events",
      "build a ring farm alien invasion",
      "build a ring farm plant rush",
      "build a ring farm starfall",
    ],
  },
  faq: {
    path: "/faq",
    title: "Build A Ring Farm FAQ - Codes, Seeds, Rings, Pets, Events & More",
    description:
      "Most common Build A Ring Farm questions. Game basics, codes, profit tips, ring strategy, mutations, pets, Update 4, and Transcendent seeds.",
    keywords: [
      "build a ring farm faq",
      "build a ring farm questions",
      "build a ring farm help",
    ],
  },
  contact: {
    path: "/contact",
    title: "Contact Us - BARF Guides",
    description: "Get in touch with BARF Guides. Report issues, suggest features, or ask questions about Build A Ring Farm tools and guides.",
    keywords: ["barf guides contact", "build a ring farm contact", "barf guides support"],
  },
} satisfies Record<string, PageSeo>;

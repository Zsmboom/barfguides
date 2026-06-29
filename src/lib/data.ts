import codesJson from "@/data/codes.json";
import gameDataJson from "@/data/game-data.json";
import seedsJson from "@/data/seeds.json";

export type Tier = "S" | "A" | "B" | "C" | "D";

export interface Seed {
  id: string;
  name: string;
  rarity: string;
  price: number;
  priceLabel: string;
  sellPrice: number;
  growthTime: number;
  tier: Tier;
  scenario: string;
}

export interface Ring {
  id: string;
  name: string;
  multiplier: number;
  description: string;
}

export interface Mutation {
  id: string;
  name: string;
  multiplier: number;
  trigger: string;
  effect: string;
  isUpdate4?: boolean;
}

export interface Pet {
  id: string;
  name: string;
  tier: Tier;
  bonus: string;
  role: string;
  recommendation: string;
}

export interface Code {
  code: string;
  reward: string;
  status: "active" | "expired";
  dateAdded: string;
  note: string;
}

const seedsData = seedsJson as unknown as { seeds: Seed[] };
const gameData = gameDataJson as unknown as {
  rings: Ring[];
  mutations: Mutation[];
  pets: Pet[];
};
const codeData = codesJson as unknown as { codes: Code[]; expiredCodes: Code[] };

export const site = {
  name: "Bridger Western Wiki",
  gameName: "Bridger: WESTERN",
  abbreviation: "Bridger Western",
  baseUrl: "https://buildaringfarmguides.com",
  robloxGameId: "99449877692519",
  developer: "BRIDGER INC",
  genre: "Western Action RPG / Stands / PvP",
  update: "Update 1.5",
};

export const seeds = seedsData.seeds;
export const rings = gameData.rings;
export const mutations = gameData.mutations;
export const pets = gameData.pets;
export const activeCodes = codeData.codes.filter((code) => code.status === "active");
export const expiredCodes = codeData.expiredCodes;

export function formatMoney(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value >= 100 ? 0 : 2,
  }).format(value);
}

export function profitPerMinute(seed: Seed, ringMultiplier = 7, mutationMultiplier = 1): number {
  return (seed.sellPrice * ringMultiplier * mutationMultiplier * 60) / seed.growthTime;
}

export function netProfitPerHarvest(seed: Seed, ringMultiplier = 7, mutationMultiplier = 1): number {
  return seed.sellPrice * ringMultiplier * mutationMultiplier - seed.price;
}

export function sortedSeedsByProfit(): Seed[] {
  return [...seeds].sort((a, b) => profitPerMinute(b, 19, 1) - profitPerMinute(a, 19, 1));
}

export function byTier<T extends { tier: Tier }>(items: T[]): Record<Tier, T[]> {
  return {
    S: items.filter((item) => item.tier === "S"),
    A: items.filter((item) => item.tier === "A"),
    B: items.filter((item) => item.tier === "B"),
    C: items.filter((item) => item.tier === "C"),
    D: items.filter((item) => item.tier === "D"),
  };
}

export const pages = [
  { path: "/", label: "Home", priority: 1 },
  { path: "/profit-calculator", label: "Progression Guide", priority: 0.95 },
  { path: "/codes", label: "Codes", priority: 0.9 },
  { path: "/tier-list", label: "Stand Tier List", priority: 0.9 },
  { path: "/update-4-patch-notes", label: "Update Log", priority: 0.9 },
  { path: "/beginner-guide", label: "Beginner Guide", priority: 0.85 },
  { path: "/pets-tier-list", label: "Cards Guide", priority: 0.8 },
  { path: "/mutations-tier-list", label: "All Stands", priority: 0.8 },
  { path: "/transcendent-seeds-guide", label: "Horse Guide", priority: 0.75 },
  { path: "/money-guide", label: "Moola Guide", priority: 0.8 },
  { path: "/compost-machine-guide", label: "Weapons Guide", priority: 0.75 },
  { path: "/contracts-guide", label: "Trading Guide", priority: 0.75 },
  { path: "/seeds-database", label: "Gun Tier List", priority: 0.85 },
  { path: "/about", label: "About", priority: 0.4 },
  { path: "/privacy-policy", label: "Privacy Policy", priority: 0.2 },
  { path: "/events-guide", label: "Events Guide", priority: 0.78 },
  { path: "/faq", label: "FAQ", priority: 0.7 },
  { path: "/contact", label: "Contact", priority: 0.3 },
];

export type ContentItem = {
  title: string;
  description: string;
  href: string;
  category: "Guides" | "Stands" | "Weapons" | "Progression";
};

export type TableRow = Record<string, string>;

export type ArticleContent = {
  eyebrow: string;
  title: string;
  description: string;
  source: string;
  intro: string[];
  sections: { title: string; body: string }[];
  table?: { columns: string[]; rows: TableRow[] };
  tips: string[];
  faq: { question: string; answer: string }[];
};

export const gameOverview = {
  name: "Bridger: WESTERN",
  developer: "BRIDGER INC",
  robloxUrl: "https://www.roblox.com/games/99449877692519/bridger-WESTERN",
  wikiUrl: "https://www.bridgerwestern.wiki",
  update: "Update 1.5",
  genre: "Roblox western action RPG with Stands, vampires, factions, horses, cards, and PvP gunfights",
  stats: [
    { label: "Source articles", value: "502" },
    { label: "Guides", value: "283" },
    { label: "Stands", value: "110" },
    { label: "Weapons", value: "70" },
    { label: "Progression pages", value: "39" },
    { label: "Current version", value: "Update 1.5" },
    { label: "Max tier", value: "Tier 3" },
    { label: "Stand shard chance", value: "0.5%" },
  ],
};

export const featuredGuides: ContentItem[] = [
  {
    title: "Beginner Guide",
    description: "Controls, first spawn, fishing, horses, cards, weapons, age management, and first Stand route.",
    href: "/beginner-guide",
    category: "Guides",
  },
  {
    title: "Progression Guide",
    description: "Tier path, XP, Moola, horse upgrades, Tarot cards, Corpse Parts, and core gear milestones.",
    href: "/money-guide",
    category: "Progression",
  },
  {
    title: "Stand Tier List",
    description: "Best Stands ranked for PvP and survival, including D4C, The World, Star Platinum, Tusk, and Tuba Bells.",
    href: "/tier-list",
    category: "Stands",
  },
  {
    title: "Gun Tier List",
    description: "Whitney Dragoon, Winchester Repeater, Scofield, Colt, Tommy Gun, Mare's Leg, Malcolm 70, and more.",
    href: "/seeds-database",
    category: "Weapons",
  },
  {
    title: "Codes Guide",
    description: "Where to find active codes, how to redeem them, and which rewards matter most for new characters.",
    href: "/codes",
    category: "Guides",
  },
  {
    title: "Cards Guide",
    description: "Tarot slots, Witch rerolls, High Noon, Evil Eye, Desperado, True Cowboy, and build planning.",
    href: "/pets-tier-list",
    category: "Guides",
  },
  {
    title: "Horse Guide",
    description: "Starter mule, mid-tier mounts, legendary horses, Ridgeby rerolls, water sprinting, and travel routes.",
    href: "/transcendent-seeds-guide",
    category: "Progression",
  },
  {
    title: "Update Log",
    description: "Update 1.5 coverage, new Stands, Spin, vampires, silver weapons, and meta shifts.",
    href: "/update-4-patch-notes",
    category: "Guides",
  },
];

export const latestTopics = [
  "It Appears Once Again event route",
  "How to trade in Bridger Western",
  "Rokaka farming and planting",
  "Reservoir Root and Spin unlocks",
  "How to get Vampire",
  "What bait does in fishing",
  "How to trade Stands",
  "Saints Corpse farming",
  "Steel Ball and Spin technique",
  "Ringo's Cabin secrets",
  "Gyro spawn routes",
  "Fastest horse guide",
  "How to get Stand Arrows",
  "Star Platinum The World route",
  "Hawkeye Herb and tea guide",
  "True Man NPC guide",
];

export const articles: Record<string, ArticleContent> = {
  beginner: {
    eyebrow: "Start here",
    title: "Bridger Western Beginner Guide",
    description: "A practical first-session route for controls, fishing, horses, cards, weapons, and your first Stand.",
    source: "Guides/bridger-western-beginner-guide.md",
    intro: [
      "Bridger: WESTERN drops new players into a JoJo-inspired frontier where gunfights, horses, cards, Stands, vampires, and faction conflict all matter. The safest first route is not random PvP. Learn the controls, earn Moola through fishing, buy mobility, and then chase your first major power spike.",
      "The source content recommends Red Corner for new Outlaw players because it is close to fishing docks and early economy routes. Once you can move, heal, reload, and earn consistently, the rest of the game opens up quickly.",
    ],
    sections: [
      { title: "Master the basic controls", body: "Use H to summon your horse, N to mount or dismount, Shift to sprint, X for Ocular PRO, M for stats, F for horse kick or emergency stop, C for fists, and R to reload. If a duel runs out of bullets, switching to fists can finish a wounded opponent." },
      { title: "Start with fishing", body: "Fishing is the safest early money and XP loop. Buy a rod and bait, watch for bubbles, sell Bass, Cod, Snappers, and chests, then reinvest in gear. Arrow Shards are extremely rare but can grant a Stand without fighting over a Corpse Part." },
      { title: "Upgrade your horse early", body: "The starter mule is slow. Save roughly 1,000 to 1,500 Moola for a better horse in Ridgeby County. A fast horse shortens every route, improves event access, and helps you escape bounty hunters." },
      { title: "Use cards after the money loop works", body: "The Witch's Hut in the swamp unlocks Tarot-style cards. A first reading costs 150 Moola, rerolls cost 50, and higher tiers let you equip more cards. Roll after your economy is stable." },
      { title: "Chase Stands with a plan", body: "Corpse Parts spawn with a golden beam and create server-wide PvP pressure. Holding one can grant a Stand on pulse, but the server will fight for it. Fishing for Arrow Shards is slower but safer." },
    ],
    table: {
      columns: ["Key", "Action", "Use"],
      rows: [
        { Key: "H", Action: "Summon Horse", Use: "Calls your horse after cooldown" },
        { Key: "N", Action: "Mount/Dismount", Use: "Enter or leave horseback travel" },
        { Key: "Shift", Action: "Sprint", Use: "Run or gallop while stamina lasts" },
        { Key: "X", Action: "Ocular PRO", Use: "Highlights players and improves combat handling" },
        { Key: "M", Action: "Stats Menu", Use: "Check tier, age, faction, and horse stats" },
        { Key: "C", Action: "Fists", Use: "Melee fallback when ammo runs dry" },
      ],
    },
    tips: [
      "Outlaw is generally the easier early path for free exploration.",
      "Do not spend your first Moola on style items before a rod, bait, ammo, and healing.",
      "Carry Tonics before leaving safe routes.",
      "Use Dog's Bane herbs to manage age if deaths stack up.",
    ],
    faq: [
      { question: "What is the fastest beginner XP method?", answer: "Fishing is the safest and most consistent early XP and Moola route. PvP can be faster, but it is much riskier for new characters." },
      { question: "How do I reset a bad Stand?", answer: "Use the appropriate rare reset plant through the Witch or wipe the character. Wiping resets far more than the Stand, so it should be a last resort." },
      { question: "Where are good early guns?", answer: "Ridgeby County and the Outlaw Hideout have the most useful early weapon shops. Prioritize ammo and healing alongside the gun." },
    ],
  },
  codes: {
    eyebrow: "Rewards",
    title: "Bridger Western Codes Guide",
    description: "How codes work, where to redeem them, and how to turn reward Moola into real progression.",
    source: "Guides/bridger-western-codes.md",
    intro: [
      "The source guide frames Bridger Western codes as occasional patch, milestone, or event rewards. Rewards may include Moola boosts, reshuffles, cosmetics, or starter resources, but codes can expire quickly and are case-sensitive.",
      "For the current live list, check the Roblox game description and official community channels first, then redeem before planning your first purchases.",
    ],
    sections: [
      { title: "How to redeem", body: "Launch Bridger Western, open the main menu with M, find the Settings or Social tab, locate the code box, paste the code exactly, and confirm the reward." },
      { title: "Best use of code rewards", body: "Spend early Moola on a fishing rod, bait, ammo, healing, and eventually a better horse. Avoid burning code rewards on rerolls before your first money loop is stable." },
      { title: "What codes usually give", body: "Common reward categories include Moola boosts, talent reshuffles, cosmetics such as ponchos or hats, and occasional milestone bonuses." },
    ],
    table: {
      columns: ["Status", "Reward Type", "Typical Value"],
      rows: [
        { Status: "Active", "Reward Type": "Moola Boost", "Typical Value": "500 to 1,500 Moola" },
        { Status: "Active", "Reward Type": "Talent Reset", "Typical Value": "One reshuffle or reroll" },
        { Status: "Active", "Reward Type": "Cosmetic", "Typical Value": "Poncho, hat, or event item" },
        { Status: "Expired", "Reward Type": "Beta/Milestone", "Typical Value": "Often unavailable after event windows" },
      ],
    },
    tips: [
      "Codes are usually case-sensitive.",
      "Remove extra spaces before submitting.",
      "Redeem on a stable connection so reward popups do not get missed.",
      "Use Roblox description and official community posts for fresh code checks.",
    ],
    faq: [
      { question: "Where do new codes appear first?", answer: "Usually in the Roblox game description, official Discord, or update posts from the developer." },
      { question: "What should I buy with Moola codes?", answer: "Rod, bait, healing, ammo, and a horse upgrade give the best early-game return." },
      { question: "Why did a code fail?", answer: "It may be expired, typed with the wrong case, copied with spaces, or limited to a specific event window." },
    ],
  },
  progression: {
    eyebrow: "Progression",
    title: "Bridger Western Progression Guide",
    description: "Move from first spawn to Tier 3 with Moola, horses, cards, weapons, and Stand access working together.",
    source: "Progression/bridger-western-prestige-guide.md",
    intro: [
      "Progression in Bridger Western is not only a level number. Your real power comes from combining Tier unlocks, a reliable Moola route, a fast horse, Tarot cards, strong weapons, healing, and eventually a Stand.",
      "The source prestige guide centers on reaching Tier 3, because Tier 3 unlocks the strongest card setup and gives your build enough room to specialize.",
    ],
    sections: [
      { title: "Choose a practical faction route", body: "Outlaw starts are often more convenient for quick progression and high-traffic farming routes. Inlaw starts are safer but can place you farther from the action." },
      { title: "Build a fishing economy", body: "Fishing gives money, XP, treasure chests, and rare Arrow Fragment chances. It is the stable base that funds horses, cards, guns, ammo, and healing." },
      { title: "Push toward Tier 3", body: "Tier 1 starts your build, Tier 2 improves stamina and card access, and Tier 3 gives the full three-card setup plus stronger combat capacity." },
      { title: "Add Ocular PRO discipline", body: "The X-key mode highlights enemies, improves accuracy, and helps reload timing. Cards like Evil Eye and High Noon can turn it into a core gunslinger tool." },
      { title: "Round out your loadout", body: "Cowboy Hat, Tonics, ammo packs, rifles, shotguns, and utility items matter. The best Stand still loses if you enter a fight unprepared." },
    ],
    table: {
      columns: ["Tier", "Primary Benefit", "Build Impact"],
      rows: [
        { Tier: "Tier 1", "Primary Benefit": "Basic weapon setup", "Build Impact": "Start economy and survival loop" },
        { Tier: "Tier 2", "Primary Benefit": "Improved stamina and card growth", "Build Impact": "Better travel and first specialization" },
        { Tier: "Tier 3", "Primary Benefit": "Three-card build and stronger combat", "Build Impact": "Real PvP and event readiness" },
      ],
    },
    tips: [
      "Do not chase server-wide Corpse Parts without mobility and healing.",
      "A Cowboy Hat can decide sniper duels by reducing headshot risk.",
      "Reroll Tarot cards only when you can afford failed rolls.",
      "A fast horse makes world events realistic instead of wishful thinking.",
    ],
    faq: [
      { question: "How do I increase Tier?", answer: "Earn XP through fishing, events, and combat. Fishing is the safest repeatable method." },
      { question: "What happens if I die while holding a Corpse Part?", answer: "You drop it, and another player can take over the fusion attempt." },
      { question: "Can I change Tarot cards?", answer: "Yes, return to the Witch and pay for another reading or rerolls." },
    ],
  },
  stands: {
    eyebrow: "Stands",
    title: "Bridger Western Stand Tier List",
    description: "A practical ranking of top Stands for duels, group fights, farming pressure, and survivability.",
    source: "Stands/bridger-western-stand-tier-list.md",
    intro: [
      "Stands are one of Bridger Western's biggest power spikes. The source tier list ranks Stands by damage, utility, ease of use, PvP value, and whether they can survive the horseback-heavy meta.",
      "Top picks win because they control tempo: time stop, clones, dimension hopping, ability sealing, auto-tracking, or reliable ranged pressure.",
    ],
    sections: [
      { title: "S-tier Stands", body: "D4C, The World, Star Platinum, and White Snake sit at the top because they can control fights, punish groups, or erase an opponent's ability window." },
      { title: "A-tier Stands", body: "Tuba Bells, Tusk, and Modulu are strong because they pressure moving targets, disrupt positioning, and stay useful while mounted." },
      { title: "B-tier Stands", body: "King Crimson, Killer Queen, Purple Haze, and Crazy Diamond can work, but they are more setup-dependent or easier to punish in open terrain." },
    ],
    table: {
      columns: ["Tier", "Stand", "Strength", "Verdict"],
      rows: [
        { Tier: "S", Stand: "D4C", Strength: "Clones and dimension hopping", Verdict: "Best solo and outnumbered option" },
        { Tier: "S", Stand: "The World / Star Platinum", Strength: "Time stop", Verdict: "Elite crowd control and burst" },
        { Tier: "S", Stand: "White Snake", Strength: "Ability sealing", Verdict: "Extremely rare and oppressive" },
        { Tier: "A", Stand: "Tuba Bells", Strength: "Auto-tracking", Verdict: "Excellent horseback pressure" },
        { Tier: "A", Stand: "Tusk", Strength: "Ranged projectiles", Verdict: "Strong scaling and pressure" },
        { Tier: "B", Stand: "Killer Queen", Strength: "Explosive traps", Verdict: "Good defense, situational offense" },
      ],
    },
    tips: [
      "A top Stand still needs ammo, healing, cards, and mobility.",
      "Auto-tracking tools are valuable because players fight from horseback.",
      "D4C is strong for solo players because clones simulate number advantage.",
      "Time-stop Stands reward clean burst follow-up.",
    ],
    faq: [
      { question: "What is the best Stand overall?", answer: "D4C is often treated as the best solo option, while The World and Star Platinum dominate with time-stop burst." },
      { question: "Can White Snake be obtained normally?", answer: "The source content describes White Snake as mostly admin-gated or extremely rare in early 2026." },
      { question: "Why is Tuba Bells high tier?", answer: "It solves the hardest part of the meta: hitting fast moving horseback targets." },
    ],
  },
  weapons: {
    eyebrow: "Weapons",
    title: "Bridger Western Gun Tier List",
    description: "Best guns and weapon roles for PvP, horseback fights, utility, and late-game preparation.",
    source: "Weapons/bridger-western-gun-tier-list.md",
    intro: [
      "The current weapon meta favors high burst, reliable mid-range aim, and utility that works from horseback. The source tier list highlights Whitney Dragoon and Winchester Repeater as the two benchmark weapons.",
      "Your gun choice should match your cards, Stand, movement habits, and tolerance for reload risk.",
    ],
    sections: [
      { title: "S-tier weapons", body: "Whitney Dragoon has the raw damage to end fights quickly, while Winchester Repeater is the best all-around rifle for precision and mounted fights." },
      { title: "A-tier weapons", body: "Scofield, Colt, and Tommy Gun offer strong alternatives: stable follow-up shots, ricochet tricks, or short-range fire rate." },
      { title: "Situational tools", body: "Mare's Leg, Malcolm 70, Shotgun, Saber, Dynamite, Lasso, and Silver ammo each have uses, but they need the right matchup or setup." },
      { title: "Cards and accessories", body: "Veteran, Time Heals All Wounds, Desperado, Evil Eye, High Noon, Cowboy Hat, Lasso, and Poncho can matter as much as the gun itself." },
    ],
    table: {
      columns: ["Tier", "Weapon", "Role", "Verdict"],
      rows: [
        { Tier: "S", Weapon: "Whitney Dragoon", Role: "High damage revolver", Verdict: "Top raw damage with reload/recoil risk" },
        { Tier: "S", Weapon: "Winchester Repeater", Role: "All-around rifle", Verdict: "Best range reliability" },
        { Tier: "A", Weapon: "Scofield", Role: "Balanced revolver", Verdict: "Stable, strong follow-up shots" },
        { Tier: "A", Weapon: "Colt", Role: "Utility revolver", Verdict: "Ricochet angles create pressure" },
        { Tier: "A", Weapon: "Tommy Gun", Role: "Close quarters", Verdict: "High fire rate in tight spaces" },
        { Tier: "B", Weapon: "Mare's Leg", Role: "Secondary rifle", Verdict: "Useful but often outclassed" },
        { Tier: "C", Weapon: "Taurus", Role: "Starter gun", Verdict: "Replace when possible" },
      ],
    },
    tips: [
      "Pair slow reload weapons with cards that improve sustain or ammo awareness.",
      "Cowboy Hat is more than fashion; it can affect headshot survivability.",
      "Tommy Gun is strongest in tight towns and alleys.",
      "Begin banking silver tools if vampire updates reshape the meta.",
    ],
    faq: [
      { question: "What is the best gun?", answer: "Whitney Dragoon wins raw damage, while Winchester Repeater is the best general-purpose rifle." },
      { question: "Is Shotgun worth it?", answer: "The source ranks Shotgun low due to unreliable accuracy compared with Tommy Gun or strong revolvers." },
      { question: "How do I get Mare's Leg?", answer: "The source mentions an NPC route and a 1,500 Silver unresting cost, but many players still prefer Winchester." },
    ],
  },
};

export const pageArticleMap: Record<string, keyof typeof articles> = {
  "/beginner-guide": "beginner",
  "/codes": "codes",
  "/money-guide": "progression",
  "/tier-list": "stands",
  "/seeds-database": "weapons",
  "/profit-calculator": "progression",
  "/pets-tier-list": "codes",
  "/mutations-tier-list": "stands",
  "/transcendent-seeds-guide": "progression",
  "/compost-machine-guide": "weapons",
  "/contracts-guide": "codes",
  "/events-guide": "progression",
  "/update-4-patch-notes": "progression",
};

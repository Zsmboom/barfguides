import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { J as JsonLd, S as Section, I as InfoCard } from "./JsonLd-BnxbqAWn.js";
import { b as breadcrumbSchema, d as pageSeo, f as faqSchema, s as seeds, p as pets, m as mutations } from "./router-BBbJzgjh.js";
import { D as DataDisclaimer } from "./DataDisclaimer-CKp4-lRN.js";
import "@tanstack/react-router";
const faq = [
  {
    question: "What is the strongest event in Build A Ring Farm?",
    answer: "The Starfall event, introduced in Update 4, is currently the strongest because it triggers the 8x Starfall mutation. It is a rare cosmic event that only appears under specific in-game conditions and pairs best with Transcended, Divine, and Exotic seeds."
  },
  {
    question: "How do alien invasion events work?",
    answer: "Alien invasion events spawn waves of alien mobs across the farm. Defeating them applies the Alien mutation to nearby crops, which multiplies harvest value by 3.25x. Pairing the Alien event with high-value seeds such as Dragonfruit, Aurora Lotus, or Void Orchid produces the largest single-harvest spikes."
  },
  {
    question: "Do bosses drop mutation sprays?",
    answer: "Yes. The Plant Rush boss introduced with the PLANTRUSH code drops a Plant Rush Boss Box that contains sprays and seed packs. Update 4 boss events also have a chance to drop the new Fire, Bubblegum, and Admin sprays, which apply the corresponding 4.5x, 5.5x, and 7x mutations."
  },
  {
    question: "Should I chase rare events as a new player?",
    answer: "No. New players should focus on stable event triggers such as Wet, Autumn, and Radioactive. Save event-based rare mutations for mid and late game once you can afford to wait through long cooldowns and have at least Outer Ring unlocked."
  }
];
const eventMuts = mutations.filter((m) => m.multiplier >= 3);
function EventsGuidePage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      JsonLd,
      {
        data: [breadcrumbSchema(pageSeo.events.path, "Events Guide"), faqSchema(faq)]
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-12", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-300", children: "Update 4 events coverage" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 text-4xl font-black text-white md:text-5xl", children: "Build A Ring Farm Events Guide" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-3xl text-lg leading-8 text-slate-300", children: "Every event in Build A Ring Farm explained: alien invasions, Plant Rush boss waves, void storms, radioactive pulses, hive outbreaks, fire bursts, and the new Starfall cosmic event from Update 4. Use this guide to plan which events to chase, which mutations they apply, and which seeds to plant for the highest possible harvest spike." })
    ] }),
    /* @__PURE__ */ jsx(Section, { title: "Why Events Matter", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
      /* @__PURE__ */ jsx(InfoCard, { title: "Highest multipliers in the game", children: "Event-driven mutations top the leaderboard. Starfall is 8x, Admin is 7x, Honeycomb is 6.5x, and Bubblegum is 5.5x. Stacking one of these on top of a 19x Outer Ring produces the largest single-harvest numbers in Build A Ring Farm." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Free sprays and boxes", children: "Event rewards include mutation sprays, time skips, seed packs, and Plant Rush Boss Boxes from the PLANTRUSH code. They accelerate progression without spending Robux." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Leaderboard timing", children: "Most players push leaderboard attempts during a Starfall or Admin event because the multiplier compounds with ring, pet, and sprinkler bonuses. Coordinating your farm around event timing is the single biggest profit optimization." })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { title: "Standard Events (Always Available)", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsx(InfoCard, { title: "Wet (1.5x)", children: "Triggered by watering your crops or by rain. The most accessible mutation in the game. Pairs naturally with the Sprinkler Bot pet and any seed in the early to mid range." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Frozen (1.75x)", children: "Triggered during freeze weather events. Crops affected by Frozen sell for 1.75x and stack with other event triggers during long cold waves." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Autumn (2x)", children: "Triggered by the Autumn Spray from the THANKYOU code or by seasonal autumn events. A clean 2x multiplier that is great for mid-game Legendary seeds such as Banana and Mushroom." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Void (2.25x)", children: "Triggered during void events. Drops are rarer than Autumn but the multiplier is strong. Pairs well with Heart of Corruption and other Void-themed seeds." })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { title: "Update 4 Event Mutations", children: /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2", children: eventMuts.map((mut) => /* @__PURE__ */ jsxs(InfoCard, { title: `${mut.name} (${mut.multiplier}x)`, children: [
      /* @__PURE__ */ jsx("span", { className: "block text-amber-200", children: mut.trigger }),
      /* @__PURE__ */ jsx("span", { className: "mt-2 block text-slate-300", children: mut.effect })
    ] }, mut.id)) }) }),
    /* @__PURE__ */ jsx(Section, { title: "Boss Events", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsx(InfoCard, { title: "Plant Rush Boss", children: "The Plant Rush boss is tied to the PLANTRUSH code and to recurring boss waves. Defeating the boss grants a Plant Rush Boss Box with sprays, seed packs, and rare event items. Coordinate your server to clear the boss fast and share rewards with friends for the Friend O Tron bonus." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Hive Boss (Honeycomb)", children: "Hive events trigger the 6.5x Honeycomb mutation. The hive boss is the toughest standard event. Bring an S-Tier seed such as Aurora Lotus or Celestial Cactus to maximize the per-harvest payoff if you manage to apply Honeycomb." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Update 4 Cosmic Bosses", children: "Update 4 added cosmic-tier bosses that can apply Fire, Bubblegum, Admin, and Starfall mutations. These bosses are rare, so save your best seeds for when they spawn instead of burning them on standard waves." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Boss Reward Tip", children: "Always check the in-game shop and event panel before redeeming. Boss boxes are stackable, so timing a redeem with a sale or limited spray is a small but real profit." })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { title: "Event Rotation and Timing Tips", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
      /* @__PURE__ */ jsx(InfoCard, { title: "Stack sprays during cooldown", children: "When an event is about to end, spray your highest value seeds to lock the mutation in for the next harvest cycle. The mutation lasts until harvest, not until the event ends." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Plan pet assignments", children: "Pets do not affect mutation triggers, but Harvest Drone and Rain Cloud keep the farm running while you wait for an event window. Set your pet loadout before an event starts to avoid downtime." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Use the calculator", children: "Open the profit calculator with your top seed, the event mutation you are chasing, and Outer Ring enabled. The result tells you whether the event is worth waiting for compared to farming the next-best mutation." })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { title: "Best Seeds For Event Farming", children: [
      /* @__PURE__ */ jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: seeds.filter((s) => s.tier === "S" || s.tier === "A").slice(0, 12).map((seed) => /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-white/10 bg-white/[0.04] p-4", children: [
        /* @__PURE__ */ jsx("div", { className: "font-black text-white", children: seed.name }),
        /* @__PURE__ */ jsxs("div", { className: "mt-1 text-sm text-slate-400", children: [
          seed.rarity,
          " - ",
          seed.priceLabel,
          " - ",
          seed.scenario
        ] })
      ] }, seed.id)) }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-slate-400", children: "See the full list on the seeds database or jump to the mutations tier list." })
    ] }),
    /* @__PURE__ */ jsx(Section, { title: "Best Pets For Event Windows", children: /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2", children: pets.filter((p) => p.tier === "S" || p.tier === "A").map((pet) => /* @__PURE__ */ jsxs(InfoCard, { title: `${pet.name} - ${pet.tier}`, children: [
      /* @__PURE__ */ jsx("span", { className: "block text-amber-200", children: pet.bonus }),
      /* @__PURE__ */ jsx("span", { className: "mt-2 block text-slate-300", children: pet.role }),
      /* @__PURE__ */ jsx("span", { className: "mt-2 block text-slate-400", children: pet.recommendation })
    ] }, pet.id)) }) }),
    /* @__PURE__ */ jsx(Section, { title: "Event Strategy By Game Stage", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
      /* @__PURE__ */ jsx(InfoCard, { title: "Early game", children: "Focus on Wet and Autumn. They are reliable, you can trigger them yourself with water and the THANKYOU Autumn Spray, and they compound with the Base Ring 7x multiplier." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Mid game", children: "Move into Radioactive, Alien, and Honeycomb events. By mid game you have Middle Ring (13x) and your first Legendary or Secret seeds, so the 3x to 6.5x event multipliers start to feel meaningful." }),
      /* @__PURE__ */ jsx(InfoCard, { title: "Endgame", children: "Chase Fire, Bubblegum, Admin, and Starfall. Pair them with Transcended, Divine, and Exotic seeds, Outer Ring 19x, and Harvest Drone automation. This is the only way to break the leaderboard top 100." })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { title: "Frequently Asked Questions", children: /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2", children: faq.map((item) => /* @__PURE__ */ jsx(InfoCard, { title: item.question, children: /* @__PURE__ */ jsx("p", { children: item.answer }) }, item.question)) }) }),
    /* @__PURE__ */ jsx(DataDisclaimer, { dataType: "event mechanics" })
  ] });
}
export {
  EventsGuidePage,
  EventsGuidePage as default
};

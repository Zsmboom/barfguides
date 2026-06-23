import { JsonLd } from "@/components/JsonLd";
import { InfoCard, Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { mutations, pets, seeds } from "@/lib/data";
import { pageSeo } from "@/lib/page-seo";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import { DataDisclaimer } from "@/components/DataDisclaimer";


const faq = [
  {
    question: "What is the strongest event in Build A Ring Farm?",
    answer:
      "The Starfall event, introduced in Update 4, is currently the strongest because it triggers the 8x Starfall mutation. It is a rare cosmic event that only appears under specific in-game conditions and pairs best with Transcended, Divine, and Exotic seeds.",
  },
  {
    question: "How do alien invasion events work?",
    answer:
      "Alien invasion events spawn waves of alien mobs across the farm. Defeating them applies the Alien mutation to nearby crops, which multiplies harvest value by 3.25x. Pairing the Alien event with high-value seeds such as Dragonfruit, Aurora Lotus, or Void Fruit produces the largest single-harvest spikes.",
  },
  {
    question: "Do bosses drop mutation sprays?",
    answer:
      "Yes. The Plant Rush boss introduced with the PLANTRUSH code drops a Plant Rush Boss Box that contains sprays and seed packs. Update 4 boss events also have a chance to drop the new Fire, Bubblegum, and Admin sprays, which apply the corresponding 4.5x, 5.5x, and 7x mutations.",
  },
  {
    question: "Should I chase rare events as a new player?",
    answer:
      "No. New players should focus on stable event triggers such as Wet, Autumn, and Radioactive. Save event-based rare mutations for mid and late game once you can afford to wait through long cooldowns and have at least Outer Ring unlocked.",
  },
  {
    question: "What is Admin Abuse Week and how do I prepare?",
    answer:
      "Admin Abuse Week is a limited Update 6 event that triggers the 7x Admin mutation at high spawn rates. Prepare by: (1) saving your best seeds — Void Fruit, Aethercoil, and Celestial seeds — for the event window; (2) enabling Outer Ring 19x; (3) stacking Harvest Drone and Starfall Griffin pets; (4) redeeming code BZZBZZ for 50 Honey Tokens before the bee event rotates out. The Admin mutation is the second-highest in the game and compounds aggressively with ring and pet multipliers.",
  },
  {
    question: "How does the Summer Plant Fuse Machine work?",
    answer:
      "The Summer Plant Fuse Machine consumes 4 seeds of the same rarity tier and has a chance to output a seed from the next tier up. Each successful fuse permanently adds +5% to your farm earnings — these stack and persist after the event. Use Lucky Clover seeds adjacent to the machine for +10% fusion success rate, and save Eternal seeds for your highest-rarity fuse attempts to guarantee success on Secret+ tier seeds.",
  },
];

const eventMuts = mutations.filter((m) => m.multiplier >= 3);

export function EventsGuidePage() {
  return (
    <>
      <JsonLd
        data={[breadcrumbSchema(pageSeo.events.path, "Events Guide"), faqSchema(faq)]}
      />
      <Breadcrumbs segments={[{label: "Home", href: "/"}, {label: "Events Guide", href: "/events-guide"}]} />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
          Update 4 + Update 6 + Update 7 events coverage
        </p>
        <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">
          Build A Ring Farm Events Guide
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Every event in Build A Ring Farm explained: alien invasions, Plant Rush boss waves, void
          storms, radioactive pulses, hive outbreaks, fire bursts, the Starfall cosmic
          event from Update 4, the Queen Bee event from Update 7, and the Admin Abuse Week from Update 6. Use this guide to plan which events to chase, which mutations they
          apply, and which seeds to plant for the highest possible harvest spike.
        </p>
      </section>

      <Section title="Why Events Matter">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <InfoCard title="Highest multipliers in the game">
            Event-driven mutations top the leaderboard. Starfall is 8x, Admin is 7x, Honeycomb is 6.5x, and Bubblegum is 5.5x. Stacking one of these on top of a 19x Outer Ring produces the largest single-harvest numbers in Build A Ring Farm.
          </InfoCard>
          <InfoCard title="Free sprays and boxes">
            Event rewards include mutation sprays, time skips, seed packs, and Plant Rush Boss Boxes from the PLANTRUSH code. They accelerate progression without spending Robux.
          </InfoCard>
          <InfoCard title="Leaderboard timing">
            Most players push leaderboard attempts during a Starfall or Admin event because the multiplier compounds with ring, pet, and sprinkler bonuses. Coordinating your farm around event timing is the single biggest profit optimization.
          </InfoCard>
        </div>
      </Section>

      <Section title="Standard Events (Always Available)">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InfoCard title="Wet (1.5x)">
            Triggered by watering your crops or by rain. The most accessible mutation in the game. Pairs naturally with the Sprinkler Bot pet and any seed in the early to mid range.
          </InfoCard>
          <InfoCard title="Frozen (1.75x)">
            Triggered during freeze weather events. Crops affected by Frozen sell for 1.75x and stack with other event triggers during long cold waves.
          </InfoCard>
          <InfoCard title="Autumn (2x)">
            Triggered by the Autumn Spray from the THANKYOU code or by seasonal autumn events. A clean 2x multiplier that is great for mid-game Legendary seeds such as Banana and Mushroom.
          </InfoCard>
          <InfoCard title="Void (2.25x)">
            Triggered during void events. Drops are rarer than Autumn but the multiplier is strong. Pairs well with Heart of Corruption and other Void-themed seeds.
          </InfoCard>
        </div>
      </Section>

      <Section title="Update 4 Event Mutations">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {eventMuts.map((mut) => (
            <InfoCard key={mut.id} title={`${mut.name} (${mut.multiplier}x)`}>
              <span className="block text-amber-200">{mut.trigger}</span>
              <span className="mt-2 block text-slate-300">{mut.effect}</span>
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section title="🐝 Update 7 — Queen Bee Event (Bee System)">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InfoCard title="How to Start">
            The Queen Bee Event covers the map with a honeycomb dome for 5 minutes. Start by talking to the <strong>Beekeeper NPC</strong> near your farm for a free <strong>Worker Bee</strong>. Place the bee in your <strong>Hive</strong> — the bee immediately begins flying out to collect <strong>Nectar</strong> from your crops. When its Nectar bar fills, it returns to the Hive and converts it into <strong>Honey</strong>, the event currency. The cycle repeats automatically.
          </InfoCard>
          <InfoCard title="Nectar → Honey Cycle">
            Each bee has its own independent Nectar bar. Flying over any crop adds Nectar; once full, the bee returns home and deposits it as Honey, then immediately flies out again. The cycle is fully automatic and runs while you farm. Keep your Hive full of bees and your farm planted with crops at all times to maximize throughput.
          </InfoCard>
          <InfoCard title="Duplicate Bees — Upgrade or Sell">
            When you roll a bee you already own, you have two choices:
            <ul className="mt-2 space-y-1 text-sm text-slate-300">
              <li>• <strong>Upgrade</strong> the existing bee — makes it stronger, faster Nectar collection, shorter cycle time. <em>Recommended.</em></li>
              <li>• <strong>Sell</strong> the duplicate for a small amount of Honey — only use this when you need quick Honey to roll or buy a specific item.</li>
            </ul>
            Upgrading always gives better long-term returns than selling.
          </InfoCard>
          <InfoCard title="Hive Optimization Tips">
            <ul className="mt-2 space-y-1 text-sm text-slate-300">
              <li>• <strong>Keep the Hive full:</strong> Bees in your inventory do not produce Honey — every slot must be filled.</li>
              <li>• <strong>Plant your whole farm:</strong> More crops means bees encounter Nectar sources faster on every flight path.</li>
              <li>• <strong>Buy Hive Upgrades early:</strong> They increase capacity, production speed, and Honey yield — the single biggest lever for long-term output.</li>
              <li>• <strong>Visit the Bee Merchant often:</strong> Permanent bees and exclusive items sell out; check the shop daily.</li>
            </ul>
          </InfoCard>
          <InfoCard title="Honey Pot Rewards">
            Collect 5 Honeycombs from the map to craft 1 Honey Token. Spend Tokens at the Honey Pot:
            <ul className="mt-2 space-y-1 text-sm text-slate-300">
              <li>• 2-min Time Skip — 58%</li>
              <li>• Honeysuckle Seed (Epic, $500) — 37%</li>
              <li>• 15-min Time Skip — 4.8%</li>
              <li>• Queen Bee Fertilizer (Honeycomb 6.5x) — 0.15%</li>
              <li>• Queen's Blossom Seed (Transcended, $550K) — 0.1%</li>
            </ul>
          </InfoCard>
          <InfoCard title="Bee Rolling Station & Merchant">
            Use <strong>Honey</strong> at the <strong>Bee Rolling Station</strong> to pull random new bees. At the <strong>Bee Merchant</strong> (center of map) spend Honey on permanent bees, Hive upgrades, and special items — permanent bees <em>persist after the event ends</em>, making them the highest-value long-term reward from Update 7. The Bee Merchant's stock rotates, so check back frequently during the event window .
          </InfoCard>
        </div>
      </Section>

      <Section title="Boss Events">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InfoCard title="Plant Rush Boss">
            The Plant Rush boss is tied to the PLANTRUSH code and to recurring boss waves. Defeating the boss grants a Plant Rush Boss Box with sprays, seed packs, and rare event items. Coordinate your server to clear the boss fast and share rewards with friends for the Friend O Tron bonus.
          </InfoCard>
          <InfoCard title="Hive Boss (Honeycomb)">
            Hive events trigger the 6.5x Honeycomb mutation. The hive boss is the toughest standard event. Bring an S-Tier seed such as Aurora Lotus or Aethercoil to maximize the per-harvest payoff if you manage to apply Honeycomb.
          </InfoCard>
          <InfoCard title="Update 4 Cosmic Bosses">
            Update 4 added cosmic-tier bosses that can apply Fire, Bubblegum, Admin, and Starfall mutations. These bosses are rare, so save your best seeds for when they spawn instead of burning them on standard waves.
          </InfoCard>
          <InfoCard title="Boss Reward Tip">
            Always check the in-game shop and event panel before redeeming. Boss boxes are stackable, so timing a redeem with a sale or limited spray is a small but real profit.
          </InfoCard>
        </div>
      </Section>

      <Section title="Event Rotation and Timing Tips">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <InfoCard title="Stack sprays during cooldown">
            When an event is about to end, spray your highest value seeds to lock the mutation in for the next harvest cycle. The mutation lasts until harvest, not until the event ends.
          </InfoCard>
          <InfoCard title="Plan pet assignments">
            Pets do not affect mutation triggers, but Harvest Drone and Rain Cloud keep the farm running while you wait for an event window. Set your pet loadout before an event starts to avoid downtime.
          </InfoCard>
          <InfoCard title="Use the calculator">
            Open the profit calculator with your top seed, the event mutation you are chasing, and Outer Ring enabled. The result tells you whether the event is worth waiting for compared to farming the next-best mutation.
          </InfoCard>
        </div>
      </Section>

      <Section title="Best Seeds For Event Farming">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[...seeds]
            .filter((s) => s.tier === "S" || s.tier === "A")
            .sort((a, b) => b.price - a.price)
            .slice(0, 12)
            .map((seed) => (
              <div key={seed.id} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <div className="font-black text-white">{seed.name}</div>
                <div className="mt-1 text-sm text-slate-400">
                  {seed.rarity} - {seed.priceLabel} - {seed.scenario}
                </div>
              </div>
            ))}
        </div>
        <p className="mt-4 text-sm text-slate-400">
          See the full list on the seeds database or jump to the mutations tier list.
        </p>
      </Section>

      <Section title="Best Pets For Event Windows">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {pets
            .filter((p) => p.tier === "S" || p.tier === "A")
            .map((pet) => (
              <InfoCard key={pet.id} title={`${pet.name} - ${pet.tier}`}>
                <span className="block text-amber-200">{pet.bonus}</span>
                <span className="mt-2 block text-slate-300">{pet.role}</span>
                <span className="mt-2 block text-slate-400">{pet.recommendation}</span>
              </InfoCard>
            ))}
        </div>
      </Section>

      <Section title="⚡ Update 6 — Admin Abuse Week">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InfoCard title="How Admin Abuse Week Works">
            Admin Abuse is a limited-time weekly event. During this window, a special Admin Abuse event triggers across all servers, applying the <strong>7x Admin mutation</strong> to crops. The event has a higher spawn rate than standard cosmic events and lasts for extended windows, making it ideal for leaderboard pushes.
          </InfoCard>
          <InfoCard title="Admin Mutation (7x)">
            The Admin mutation applies a <strong>7x harvest multiplier</strong> — the second-highest in the game behind Carnival at 9.5x. It is a special-tier mutation that stacks with ring multipliers (7x → 13x → 19x base) and pet bonuses. Pair with Transcended or Divine seeds for maximum profit spikes.
          </InfoCard>
          <InfoCard title="Exclusive Seed Pool">
            Admin Abuse week introduces a rotating exclusive seed pool available only during the event window. These seeds have boosted drop rates from standard farming activities. Check the in-game shop daily for limited seed packs tied to the event.
          </InfoCard>
          <InfoCard title="Admin Abuse Strategy">
            Time your best seeds (Void Fruit, Aethercoil, Titan Arum) for the Admin Abuse event window. Enable Outer Ring 19x, stack with Harvest Drone automation, and use the 7x mutation for the largest single-harvest numbers of the week. This is a <strong>one-week-only leaderboard opportunity</strong>.
          </InfoCard>
        </div>
      </Section>

      <Section title="☀️ Summer Plant Fuse Machine">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InfoCard title="Fuse Mechanics">
            The Summer Plant Fuse Machine takes <strong>4 seeds of the same rarity tier</strong> and fuses them together, producing a single higher-tier seed. The fusion has a chance to produce seeds from the next rarity tier up — for example, 4 Legendary seeds may yield a Secret seed. This is the primary way to bridge into Secret and Transcended tiers without spending Robux.
          </InfoCard>
          <InfoCard title="Permanent Farm Earnings Bonus">
            Each successful fuse permanently increases your farm earnings by <strong>+5%</strong>. These bonuses stack additively, so multiple fusions can compound significantly. The bonus applies across all rings and persists after the Summer event ends — making the Fuse Machine the most impactful long-term investment of Update 7.
          </InfoCard>
          <InfoCard title="Jackpot Rolling System">
            The Jackpot roller has a chance to upgrade any seed used in a fusion to its next-tier variant. The base Jackpot chance is low (~1–2%), but it increases with the number of consecutive failed rolls. After 20–30 failed fuses, the Jackpot probability becomes significant enough to warrant using your rarest seeds.
          </InfoCard>
          <InfoCard title="Lucky Clover + Eternal Seeds">
            Lucky Clover seeds add +10% to all fusion success rates when planted adjacent to the Fuse Machine. Eternal seeds are a special consumable that guarantees one fuse success — save these for your highest-rarity seed attempts. Stack Lucky Clover passive with Eternal fuses for best results on Secret+ tier seeds.
          </InfoCard>
        </div>
      </Section>

      <Section title="🎰 Carnival Rolling Systems">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InfoCard title="Carnival Mutation (9.5x)">
            The Carnival spray applies the <strong>9.5x Carnival mutation</strong> — the highest multiplier mutation in the game. It is obtained exclusively from the Gear Shop during the Carnival event window. The mutation lasts until the next harvest and stacks with all other bonuses. This is the ultimate event target for leaderboard chasers.
          </InfoCard>
          <InfoCard title="Carnival Pass Tickets">
            Use code <strong>CARNIVAL</strong> for 100 Carnival Pass Tickets. These tickets are used in the Carnival event machine for crate pulls and exclusive rewards. The tickets do not expire and carry over between Carnival event rotations.
          </InfoCard>
          <InfoCard title="Prize Wheel & Lucky Clover">
            The Prize Wheel drops Lucky Clover seeds which passively boost fusion and spray success rates. Rotate prize wheel spins daily to accumulate clovers before major fusion sessions.
          </InfoCard>
          <InfoCard title="Event Calendar Tip">
            Admin Abuse Week overlaps with the final days of the Queen Bee Update 7 event. Players with remaining Honey Tokens should prioritize spending them before the event rotation changes, as the Bee System rewards are expected to shift in Update 8.
          </InfoCard>
        </div>
      </Section>

      <Section title="Event Strategy By Game Stage">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <InfoCard title="Early game">
            Focus on Wet and Autumn. They are reliable, you can trigger them yourself with water and the THANKYOU Autumn Spray, and they compound with the Base Ring 7x multiplier.
          </InfoCard>
          <InfoCard title="Mid game">
            Move into Radioactive, Alien, and Honeycomb events. By mid game you have Middle Ring (13x) and your first Legendary or Secret seeds, so the 3x to 6.5x event multipliers start to feel meaningful.
          </InfoCard>
          <InfoCard title="Endgame">
            Chase Fire, Bubblegum, Admin, and Starfall. Pair them with Transcended, Divine, and Exotic seeds, Outer Ring 19x, and Harvest Drone automation. This is the only way to break the leaderboard top 100.
          </InfoCard>
        </div>
      </Section>

      <Section title="Frequently Asked Questions">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {faq.map((item) => (
            <InfoCard key={item.question} title={item.question}>
              <p>{item.answer}</p>
            </InfoCard>
          ))}
        </div>
      </Section>
      <DataDisclaimer dataType="event mechanics" />
    </>
  );
}

export default EventsGuidePage;

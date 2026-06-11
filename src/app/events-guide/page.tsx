import { JsonLd } from "@/components/JsonLd";
import { InfoCard, Section } from "@/components/Section";
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
      "Alien invasion events spawn waves of alien mobs across the farm. Defeating them applies the Alien mutation to nearby crops, which multiplies harvest value by 3.25x. Pairing the Alien event with high-value seeds such as Dragonfruit, Aurora Lotus, or Void Orchid produces the largest single-harvest spikes.",
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
];

const eventMuts = mutations.filter((m) => m.multiplier >= 3);

export function EventsGuidePage() {
  return (
    <>
      <JsonLd
        data={[breadcrumbSchema(pageSeo.events.path, "Events Guide"), faqSchema(faq)]}
      />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
          Update 4 events coverage
        </p>
        <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">
          Build A Ring Farm Events Guide
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Every event in Build A Ring Farm explained: alien invasions, Plant Rush boss waves, void
          storms, radioactive pulses, hive outbreaks, fire bursts, and the new Starfall cosmic
          event from Update 4. Use this guide to plan which events to chase, which mutations they
          apply, and which seeds to plant for the highest possible harvest spike.
        </p>
      </section>

      <Section title="Why Events Matter">
        <div className="grid gap-4 md:grid-cols-3">
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
        <div className="grid gap-4 md:grid-cols-2">
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
        <div className="grid gap-4 md:grid-cols-2">
          {eventMuts.map((mut) => (
            <InfoCard key={mut.id} title={`${mut.name} (${mut.multiplier}x)`}>
              <span className="block text-amber-200">{mut.trigger}</span>
              <span className="mt-2 block text-slate-300">{mut.effect}</span>
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section title="Boss Events">
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard title="Plant Rush Boss">
            The Plant Rush boss is tied to the PLANTRUSH code and to recurring boss waves. Defeating the boss grants a Plant Rush Boss Box with sprays, seed packs, and rare event items. Coordinate your server to clear the boss fast and share rewards with friends for the Friend O Tron bonus.
          </InfoCard>
          <InfoCard title="Hive Boss (Honeycomb)">
            Hive events trigger the 6.5x Honeycomb mutation. The hive boss is the toughest standard event. Bring an S-Tier seed such as Aurora Lotus or Celestial Cactus to maximize the per-harvest payoff if you manage to apply Honeycomb.
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
        <div className="grid gap-4 md:grid-cols-3">
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
        <div className="grid gap-4 md:grid-cols-2">
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

      <Section title="Event Strategy By Game Stage">
        <div className="grid gap-4 md:grid-cols-3">
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
        <div className="grid gap-4 md:grid-cols-2">
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

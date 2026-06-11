import { formatMoney, netProfitPerHarvest, profitPerMinute, type Mutation, type Pet, type Seed } from "@/lib/data";

export function SeedsTable({ seeds }: { seeds: Seed[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/10">
      <table className="min-w-full divide-y divide-white/10 text-sm">
        <thead className="bg-white/[0.04] text-left text-slate-300">
          <tr>
            <th className="px-4 py-3">Seed</th>
            <th className="px-4 py-3">Tier</th>
            <th className="px-4 py-3">Rarity</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Sell</th>
            <th className="px-4 py-3">Growth</th>
            <th className="px-4 py-3">Outer Profit/min</th>
            <th className="px-4 py-3">Best Use</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {seeds.map((seed) => (
            <tr key={seed.id} className="text-slate-300">
              <td className="px-4 py-3 font-bold text-white">{seed.name}</td>
              <td className="px-4 py-3">
                <span className="rounded bg-emerald-400/15 px-2 py-1 font-bold text-emerald-200">{seed.tier}</span>
              </td>
              <td className="px-4 py-3">{seed.rarity}</td>
              <td className="px-4 py-3 text-amber-300">{seed.priceLabel}</td>
              <td className="px-4 py-3 text-amber-300">{formatMoney(seed.sellPrice)}</td>
              <td className="px-4 py-3">{seed.growthTime}s</td>
              <td className="px-4 py-3 font-bold text-emerald-300">{formatMoney(profitPerMinute(seed, 19))}</td>
              <td className="px-4 py-3">{seed.scenario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PetTable({ pets }: { pets: Pet[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {pets.map((pet) => (
        <article key={pet.id} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-black text-white">{pet.name}</h3>
            <span className="rounded bg-emerald-400/15 px-2 py-1 text-sm font-bold text-emerald-200">{pet.tier}</span>
          </div>
          <p className="mt-2 text-sm font-semibold text-amber-200">{pet.bonus}</p>
          <p className="mt-2 text-sm text-slate-400">{pet.role}</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">{pet.recommendation}</p>
        </article>
      ))}
    </div>
  );
}

export function MutationTable({ mutations }: { mutations: Mutation[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/10">
      <table className="min-w-full divide-y divide-white/10 text-sm">
        <thead className="bg-white/[0.04] text-left text-slate-300">
          <tr>
            <th className="px-4 py-3">Mutation</th>
            <th className="px-4 py-3">Multiplier</th>
            <th className="px-4 py-3">Trigger</th>
            <th className="px-4 py-3">Effect</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {mutations.map((mutation) => (
            <tr key={mutation.id} className="text-slate-300">
              <td className="px-4 py-3 font-bold text-white">
                {mutation.name}
                {mutation.isUpdate4 ? <span className="ml-2 rounded bg-amber-400/15 px-2 py-1 text-xs text-amber-200">Update 4</span> : null}
              </td>
              <td className="px-4 py-3 font-black text-emerald-300">{mutation.multiplier}x</td>
              <td className="px-4 py-3">{mutation.trigger}</td>
              <td className="px-4 py-3">{mutation.effect}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function MiniSeedCard({ seed }: { seed: Seed }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="font-black text-white">{seed.name}</div>
          <div className="text-sm text-slate-400">{seed.rarity}</div>
        </div>
        <span className="rounded bg-emerald-400/15 px-2 py-1 text-sm font-bold text-emerald-200">{seed.tier}</span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
        <span className="text-slate-400">Net/harvest</span>
        <span className="text-right font-bold text-amber-300">{formatMoney(netProfitPerHarvest(seed, 19))}</span>
        <span className="text-slate-400">Profit/min</span>
        <span className="text-right font-bold text-emerald-300">{formatMoney(profitPerMinute(seed, 19))}</span>
      </div>
    </div>
  );
}

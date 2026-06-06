"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/CopyButton";
import { formatMoney, mutations, rings, seeds } from "@/lib/data";

function getSeed(id: string) {
  return seeds.find((seed) => seed.id === id) ?? seeds[0];
}

function getRing(id: string) {
  return rings.find((ring) => ring.id === id) ?? rings[0];
}

function getMutation(id: string) {
  return mutations.find((mutation) => mutation.id === id) ?? mutations[0];
}

export function ProfitCalculator() {
  const [seedId, setSeedId] = useState(seeds[0].id);
  const [compareSeedId, setCompareSeedId] = useState(seeds[seeds.length - 1].id);
  const [ringId, setRingId] = useState(rings[0].id);
  const [mutationId, setMutationId] = useState(mutations[0].id);
  const [sawLevel, setSawLevel] = useState(1);
  const [petBonus, setPetBonus] = useState(0);
  const [sprinklerLevel, setSprinklerLevel] = useState(0);
  const [plantCount, setPlantCount] = useState(12);
  const [compare, setCompare] = useState(false);

  const selected = getSeed(seedId);
  const comparison = getSeed(compareSeedId);
  const ring = getRing(ringId);
  const mutation = getMutation(mutationId);
  const sawMultiplier = 1 + (sawLevel - 1) * 0.01;
  const petMultiplier = 1 + petBonus / 100;
  const sprinklerMultiplier = 1 + sprinklerLevel * 0.02;
  const totalMultiplier = ring.multiplier * mutation.multiplier * sawMultiplier * petMultiplier * sprinklerMultiplier;

  function result(seed = selected) {
    const valuePerPlant = seed.sellPrice * totalMultiplier;
    const totalHarvest = valuePerPlant * plantCount;
    const totalCost = seed.price * plantCount;
    const netHarvest = totalHarvest - totalCost;
    const perMinute = (netHarvest * 60) / seed.growthTime;
    const roiHarvests = totalCost > 0 && netHarvest > 0 ? totalCost / netHarvest : Infinity;

    return { valuePerPlant, totalHarvest, netHarvest, perMinute, roiHarvests };
  }

  const primary = useMemo(() => result(selected), [selected, totalMultiplier, plantCount]);
  const secondary = useMemo(() => result(comparison), [comparison, totalMultiplier, plantCount]);
  const copyValue = `${selected.name} setup: ${ring.name}, ${mutation.name}, ${plantCount} plants, ${formatMoney(primary.perMinute)}/min, ${formatMoney(primary.totalHarvest)} per harvest, ROI ${primary.roiHarvests.toFixed(2)} harvests.`;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
      <section className="rounded-lg border border-white/10 bg-slate-900/72 p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Seed
            <select value={seedId} onChange={(event) => setSeedId(event.target.value)} className="rounded-md border border-white/10 bg-slate-950 px-3 py-2">
              {seeds.map((seed) => (
                <option key={seed.id} value={seed.id}>
                  {seed.name} - {seed.rarity}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Ring
            <select value={ringId} onChange={(event) => setRingId(event.target.value)} className="rounded-md border border-white/10 bg-slate-950 px-3 py-2">
              {rings.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} ({item.multiplier}x)
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Mutation
            <select value={mutationId} onChange={(event) => setMutationId(event.target.value)} className="rounded-md border border-white/10 bg-slate-950 px-3 py-2">
              {mutations.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} ({item.multiplier}x)
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Plant Count
            <input min="1" type="number" value={plantCount} onChange={(event) => setPlantCount(Number(event.target.value))} className="rounded-md border border-white/10 bg-slate-950 px-3 py-2" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-200 sm:col-span-2">
            Saw Level: {sawLevel}
            <input min="1" max="100" type="range" value={sawLevel} onChange={(event) => setSawLevel(Number(event.target.value))} />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Pet Bonus %
            <input min="0" type="number" value={petBonus} onChange={(event) => setPetBonus(Number(event.target.value))} className="rounded-md border border-white/10 bg-slate-950 px-3 py-2" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Sprinkler Level
            <input min="0" type="number" value={sprinklerLevel} onChange={(event) => setSprinklerLevel(Number(event.target.value))} className="rounded-md border border-white/10 bg-slate-950 px-3 py-2" />
          </label>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input type="checkbox" checked={compare} onChange={(event) => setCompare(event.target.checked)} />
            Compare seeds side by side
          </label>
          {compare ? (
            <select value={compareSeedId} onChange={(event) => setCompareSeedId(event.target.value)} className="rounded-md border border-white/10 bg-slate-950 px-3 py-2 text-sm">
              {seeds.map((seed) => (
                <option key={seed.id} value={seed.id}>
                  {seed.name}
                </option>
              ))}
            </select>
          ) : null}
        </div>
      </section>

      <section className="rounded-lg border border-emerald-400/30 bg-emerald-950/25 p-5">
        <h2 className="text-xl font-black text-white">Real-Time Earnings</h2>
        <ResultPanel name={selected.name} result={primary} />
        {compare ? <ResultPanel name={comparison.name} result={secondary} compact /> : null}
        <div className="mt-5">
          <CopyButton value={copyValue} label="Copy results" />
        </div>
      </section>
    </div>
  );
}

function ResultPanel({
  name,
  result,
  compact = false,
}: {
  name: string;
  result: { valuePerPlant: number; totalHarvest: number; netHarvest: number; perMinute: number; roiHarvests: number };
  compact?: boolean;
}) {
  return (
    <div className={compact ? "mt-5 border-t border-white/10 pt-5" : "mt-5"}>
      <h3 className="font-black text-emerald-100">{name}</h3>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Metric label="Profit Per Minute" value={formatMoney(result.perMinute)} accent="profit" />
        <Metric label="ROI" value={`${result.roiHarvests.toFixed(2)} harvests`} />
        <Metric label="Total Value per Harvest" value={formatMoney(result.totalHarvest)} accent="money" />
        <Metric label="Net Profit per Harvest" value={formatMoney(result.netHarvest)} accent="profit" />
      </div>
    </div>
  );
}

function Metric({ label, value, accent }: { label: string; value: string; accent?: "profit" | "money" }) {
  return (
    <div className="rounded-md border border-white/10 bg-slate-950/60 p-4">
      <div className={`text-xl font-black ${accent === "profit" ? "text-emerald-300" : accent === "money" ? "text-amber-300" : "text-white"}`}>
        {value}
      </div>
      <div className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">{label}</div>
    </div>
  );
}

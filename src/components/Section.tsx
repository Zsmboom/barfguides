import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  children,
  level,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  level?: 1 | 2;
}) {
  const Heading = level === 1 ? "h1" : "h2";
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      {eyebrow ? <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">{eyebrow}</p> : null}
      <Heading className="text-2xl font-black text-white md:text-3xl">{title}</Heading>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
      <div className="text-2xl font-black text-amber-300">{value}</div>
      <div className="mt-1 text-sm text-slate-400">{label}</div>
    </div>
  );
}

export function InfoCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="rounded-lg border border-white/10 bg-slate-900/70 p-5">
      <h3 className="text-lg font-black text-white">{title}</h3>
      <div className="mt-3 text-sm leading-6 text-slate-300">{children}</div>
    </article>
  );
}

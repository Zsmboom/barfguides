import Link from "next/link";
import { pages } from "@/lib/data";

export function Footer() {
  const major = pages.filter((page) =>
    ["/profit-calculator", "/codes", "/tier-list", "/seeds-database", "/about", "/privacy-policy"].includes(page.path),
  );

  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="text-lg font-black text-white">BARF Guides</div>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Independent English fan tools for Build A Ring Farm. Not affiliated with Roblox Corporation or Gamecreates.
            Use the calculators and rankings as planning aids and verify live game changes in-game.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {major.map((page) => (
            <Link key={page.path} href={page.path} className="text-slate-300 hover:text-emerald-200">
              {page.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

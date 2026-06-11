import { Link } from "@tanstack/react-router";
import { pages } from "@/lib/data";

export function Footer() {
  const major = pages.filter((page) =>
    ["/profit-calculator", "/codes", "/tier-list", "/seeds-database", "/about", "/faq", "/events-guide", "/contact", "/privacy-policy"].includes(page.path),
  );

  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid grid-cols-1 max-w-7xl gap-8 px-4 py-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="text-lg font-black text-white">BARF Guides</div>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Independent fan tools for Build A Ring Farm. Not affiliated with Roblox Corporation or Gamecreates.
            Use the calculators and rankings as planning aids and verify live game changes in-game.
          </p>
          <div className="mt-4 text-sm text-slate-500">
            <div className="font-semibold text-slate-400 mb-1">Official sources &amp; community thanks</div>
            <ul className="space-y-1">
              <li>
                🎮{" "}
                <a
                  href="https://www.roblox.com/games/107646426076756/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-200 min-h-[44px]"
                >
                  Roblox Game Page
                </a>
              </li>
              <li>
                📺 Community data from{" "}
                <a href="https://www.youtube.com/@Foltyn" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-200 min-h-[44px]">Foltyn</a>
                {" · "}
                <a href="https://www.youtube.com/@MeEnyu" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-200 min-h-[44px]">MeEnyu</a>
                {" · "}
                <a href="https://www.youtube.com/@CoralBlox2" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-200 min-h-[44px]">CoralBlox2</a>
                {" · "}
                <a href="https://beebom.com/?s=build+a+ring+farm" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-200 min-h-[44px]">Beebom</a>
              </li>
              <li className="text-xs text-slate-600">
                Seed/pet/mutation data are community-estimated and may not reflect exact in-game values. Updated June 2026.
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {major.map((page) => (
            <Link key={page.path} to={page.path} className="text-slate-300 hover:text-emerald-200 min-h-[44px]">
              {page.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-white/5 px-4 py-3 text-center text-xs text-slate-600">
        www.buildaringfarmguides.com — Independent fan tools. Not affiliated with Roblox Corp or Gamecreates.
      </div>
    </footer>
  );
}

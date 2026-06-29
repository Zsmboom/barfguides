import { Link } from "@tanstack/react-router";
import { pages } from "@/lib/data";

export function Footer() {
  const major = pages.filter((page) =>
    ["/beginner-guide", "/codes", "/tier-list", "/seeds-database", "/money-guide", "/events-guide", "/about", "/faq", "/contact", "/privacy-policy"].includes(page.path),
  );

  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid grid-cols-1 max-w-7xl gap-8 px-4 py-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="text-lg font-black text-white">Bridger Western Wiki</div>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Independent fan guide for Bridger: WESTERN on Roblox. Not affiliated with Roblox Corporation or BRIDGER INC.
            Use these guides as planning aids and verify live balance changes in-game.
          </p>
          <div className="mt-4 text-sm text-slate-500">
            <div className="font-semibold text-slate-400 mb-1">Official sources &amp; community thanks</div>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://www.roblox.com/games/99449877692519/bridger-WESTERN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-200 min-h-[44px]"
                >
                  Roblox Game Page
                </a>
              </li>
              <li>
                <a href="https://www.bridgerwestern.wiki" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-200 min-h-[44px]">
                  Source wiki
                </a>
              </li>
              <li className="text-xs text-slate-600">
                Source content was extracted from the local Bridger Western vault dated April 22, 2026.
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
        Bridger Western Wiki — Independent fan guide. Not affiliated with Roblox Corp or BRIDGER INC.
      </div>
    </footer>
  );
}

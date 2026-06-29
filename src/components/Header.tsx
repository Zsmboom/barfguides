import { Link } from "@tanstack/react-router";

const nav = [
  { href: "/beginner-guide", label: "Beginner" },
  { href: "/codes", label: "Codes" },
  { href: "/tier-list", label: "Stands" },
  { href: "/seeds-database", label: "Weapons" },
  { href: "/money-guide", label: "Progression" },
  { href: "/events-guide", label: "Events" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/88 backdrop-blur relative">
      {/* MOBILE ADAPTED */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link
          to="/"
          className="flex items-center gap-2 text-base font-black tracking-tight text-white min-h-[44px]"
        >
          <img src="/images/game-icon.png" alt="" width="32" height="32" className="size-8 rounded-md" />
          <span>Bridger Western</span>
        </Link>

        <nav className="hidden md:flex max-w-[68vw] items-center gap-1 overflow-x-auto text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="whitespace-nowrap rounded-md px-3 py-2 font-semibold text-slate-300 transition hover:bg-white/8 hover:text-white min-h-[44px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="group md:hidden">
          <summary
            aria-label="Toggle navigation menu"
            className="inline-flex min-h-[44px] min-w-[44px] cursor-pointer list-none items-center justify-center rounded-md p-2 text-white transition hover:bg-white/8 [&::-webkit-details-marker]:hidden"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 group-open:hidden" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18" />
              <path d="M3 12h18" />
              <path d="M3 18h18" />
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="hidden size-6 group-open:block" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </summary>

          <nav className="absolute left-0 right-0 top-full z-50 border-t border-white/10 bg-slate-950 px-4 py-3 text-sm shadow-xl">
            <ul className="mx-auto flex max-w-7xl flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="block rounded-md px-3 py-2 font-semibold text-slate-200 transition hover:bg-white/8 hover:text-white min-h-[44px]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}

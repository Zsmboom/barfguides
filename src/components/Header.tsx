import { useState } from "react";
import { Link } from "@tanstack/react-router";

const nav = [
  { href: "/profit-calculator", label: "Calculator" },
  { href: "/codes", label: "Codes" },
  { href: "/tier-list", label: "Tier List" },
  { href: "/update-4-patch-notes", label: "Patch Notes" },
  { href: "/beginner-guide", label: "Beginner Guide" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/88 backdrop-blur">
      {/* MOBILE ADAPTED */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link
          to="/"
          className="flex items-center gap-2 text-base font-black tracking-tight text-white min-h-[44px]"
          onClick={close}
        >
          <img src="/images/game-icon.png" alt="" className="size-8 rounded-md" />
          <span>BARF Guides</span>
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

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md p-2 text-white transition hover:bg-white/8"
        >
          {open ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18" />
              <path d="M3 12h18" />
              <path d="M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <nav className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={close}
                  className="block rounded-md px-3 py-2 font-semibold text-slate-200 transition hover:bg-white/8 hover:text-white min-h-[44px]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

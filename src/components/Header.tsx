import Link from "next/link";

const nav = [
  { href: "/profit-calculator", label: "Calculator" },
  { href: "/codes", label: "Codes" },
  { href: "/tier-list", label: "Tier List" },
  { href: "/update-4-patch-notes", label: "Patch Notes" },
  { href: "/beginner-guide", label: "Beginner Guide" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/88 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-base font-black tracking-tight text-white">
          <span className="grid size-8 place-items-center rounded-md border border-emerald-400/40 bg-emerald-400/15 text-xs text-emerald-200">
            BR
          </span>
          <span>BARF Guides</span>
        </Link>
        <nav className="flex max-w-[68vw] items-center gap-1 overflow-x-auto text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-md px-3 py-2 font-semibold text-slate-300 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

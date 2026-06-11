# Migrate barfguides from Next.js App Router to TanStack Start

## Current Project Structure

```
barfguides/  (Next.js App Router, static export, Tailwind CSS v4)
├── package.json         — Next.js 16, React 19, Tailwind CSS v4, TypeScript
├── next.config.mjs      — output: "export", trailingSlash: true, images unoptimized
├── postcss.config.mjs   — @tailwindcss/postcss
├── tsconfig.json        — @/* → ./src/*, jsx: react-jsx
├── src/
│   ├── app/
│   │   ├── layout.tsx           — RootLayout with Header + main + Footer + GA4
│   │   ├── page.tsx             — Home page (big page with hero, stats, guides, FAQ)
│   │   ├── sitemap.ts           — Next.js sitemap route (force-static)
│   │   ├── globals.css          — Tailwind CSS v4 + custom styles
│   │   └── [route]/page.tsx     — 16 route pages (all force-static + metadata export)
│   ├── components/
│   │   ├── Header.tsx           — Sticky header with nav links (uses next/link)
│   │   ├── Footer.tsx           — Footer with nav links (uses next/link)
│   │   ├── Section.tsx          — Section, StatCard, InfoCard components
│   │   ├── CopyButton.tsx       — Clipboard copy button
│   │   ├── ProfitCalculator.tsx — Interactive profit calculator (heavy component)
│   │   ├── Tables.tsx           — Data table components
│   │   ├── DataDisclaimer.tsx   — Disclaimer banner
│   │   └── JsonLd.tsx           — JSON-LD structured data injector
│   ├── lib/
│   │   ├── data.ts              — Data helpers, types (Seed, Ring, Mutation, Pet, Code)
│   │   ├── seo.ts               — SEO metadata builder, JSON-LD helpers
│   │   └── page-seo.ts          — Per-page SEO config (17 entries)
│   └── data/
│       ├── codes.json           — Active/expired codes
│       ├── game-data.json       — Rings, mutations, pets
│       └── seeds.json           — 35 seeds
└── public/
    ├── images/                  — Game screenshots, icons, OG images
    ├── favicon.svg
    ├── robots.txt
    └── ...                      — Other static assets
```

## Migration Requirements

### 1. Replace Build Tool & Dependencies

**Remove:**
- next, eslint-config-next, next-env.d.ts
- postcss.config.mjs (Tailwind v4 works natively with Vite)
- next.config.mjs

**Install:**
```json
{
  "dependencies": {
    "@tanstack/react-router": "^1.114.0",
    "@tanstack/react-start": "^0.1.0",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "vinxi": "^0.5.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4",
    "tailwindcss": "^4",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "typescript": "^5",
    "vite": "^6"
  }
}
```

### 2. Replace Routing System

**FROM:** Next.js App Router (file-based, `src/app/[route]/page.tsx`)
**TO:** TanStack Router (code-based route tree)

Create `src/routes/__root.tsx` as the root layout with:
- `<Outlet />` for child routes
- `<Scripts />` for client JS injection
- `<Meta />` for head meta
- Header and Footer components wrapping Outlet
- Google Analytics script injection (same as current layout.tsx)

Create individual route files:
- `src/routes/index.tsx` — Home page (from src/app/page.tsx)
- `src/routes/profit-calculator.tsx` — from src/app/profit-calculator/page.tsx
- `src/routes/codes.tsx` — from src/app/codes/page.tsx
- `src/routes/tier-list.tsx` — from src/app/tier-list/page.tsx
- `src/routes/update-4-patch-notes.tsx` — from src/app/update-4-patch-notes/page.tsx
- `src/routes/beginner-guide.tsx` — from src/app/beginner-guide/page.tsx
- `src/routes/pets-tier-list.tsx` — from src/app/pets-tier-list/page.tsx
- `src/routes/mutations-tier-list.tsx` — from src/app/mutations-tier-list/page.tsx
- `src/routes/transcendent-seeds-guide.tsx` — from src/app/transcendent-seeds-guide/page.tsx
- `src/routes/money-guide.tsx` — from src/app/money-guide/page.tsx
- `src/routes/compost-machine-guide.tsx` — from src/app/compost-machine-guide/page.tsx
- `src/routes/contracts-guide.tsx` — from src/app/contracts-guide/page.tsx
- `src/routes/seeds-database.tsx` — from src/app/seeds-database/page.tsx
- `src/routes/events-guide.tsx` — from src/app/events-guide/page.tsx
- `src/routes/faq.tsx` — from src/app/faq/page.tsx
- `src/routes/about.tsx` — from src/app/about/page.tsx
- `src/routes/privacy-policy.tsx` — from src/app/privacy-policy/page.tsx
- `src/routes/contact.tsx` — from src/app/contact/page.tsx

Each route file should:
- Import the corresponding page component from the old src/app/ directory
- Re-export it as the route component
- Use `@tanstack/react-router`'s `createFileRoute` or `createLazyFileRoute`

### 3. Replace All next/link Imports

In ALL files (Header.tsx, Footer.tsx, all page.tsx files):
- Replace `import Link from "next/link"` with `import { Link } from "@tanstack/react-router"`
- TanStack Router's Link uses `to` instead of `href` prop

### 4. Handle SEO Metadata

The current site uses Next.js `export const metadata: Metadata = ...`.
TanStack Start handles SEO differently:
- Use `<Meta />` in the root layout
- Each route can export a route-level `meta` configuration
- For now, keep the SEO text data from `src/lib/page-seo.ts` and `src/lib/seo.ts` but remove the `Metadata` type import from "next"
- Convert the metadata helpers to plain functions that return meta tag objects

The `seo.ts` file needs:
- Remove `import type { Metadata } from "next"`
- Change `buildPageMetadata()` to return a plain object with title, description, etc.
- Keep `breadcrumbSchema`, `faqSchema`, `videoGameSchema`, `jsonLd` unchanged
- These are pure data functions - no framework dependency

### 5. Update globals.css

The CSS file uses `@import "tailwindcss"` which works fine with Vite.
Remove any Next.js-specific styles if present.

### 6. Create App Configuration

Create `app.config.ts` (root level) with TanStack Start configuration:
```ts
import { defineConfig } from "@tanstack/react-start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    preset: "cloudflare-pages",
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: { "@": "/src" },
    },
  },
  tsr: {
    appDirectory: "src",
  },
});
```

### 7. Handle Sitemap

Replace `src/app/sitemap.ts` with a TanStack-ready sitemap.
Use `@tanstack/react-start`'s sitemap support or generate a static `public/sitemap.xml` file.

### 8. Update package.json Scripts

```json
{
  "scripts": {
    "dev": "vinxi dev",
    "build": "vinxi build",
    "start": "vinxi start",
    "deploy": "vinxi build && wrangler pages deploy .output/public",
    "lint": "eslint ."
  }
}
```

### 9. Remove Next.js-specific Files

- Delete `next-env.d.ts`
- Delete `next.config.mjs`
- Delete `postcss.config.mjs`
- Remove `eslint-config-next` from devDependencies

### 10. Update tsconfig.json

Remove the `next` plugin from compilerOptions.plugins.
Update the `include` array to remove Next.js type references.

### 11. Keep ALL Page Content Exactly the Same

Do NOT change:
- Any component JSX/styling
- Data files (codes.json, game-data.json, seeds.json)
- Data logic in lib/data.ts
- JSON-LD structured data
- Public assets (images, favicon, robots.txt)
- Tailwind CSS classes

### 12. Handle static prerendering

All routes are static. After migration, the build should produce static HTML files.
TanStack Start's `static-prerendering` mode should be used.

### IMPORTANT

- Keep the same visual output pixel-perfect
- All 17 routes must work
- All internal links must work
- Google Analytics tracking must remain
- JSON-LD structured data must be preserved
- Footer links from `pages` data must work
- The Header navigation must work

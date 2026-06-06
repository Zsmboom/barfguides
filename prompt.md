你是一个专业的 Roblox 游戏 SEO 网站构建专家。请加载 roblox-site-architect skill，并严格按照其完整流程为 "Build A Ring Farm" 构建一个英文工具站。

## 项目信息
- 项目路径: /Users/shiminzhang/Projects/barfguides
- 技术栈: Next.js 16 + TypeScript + Tailwind CSS v4 (App Router)
- 部署方式: static export (output: export)
- 项目域名: barfguides (Cloudflare Pages)
- 语言: 全英文

## 配置模板参考
复制 ~/Projects/barfguides 目录下已有的配置文件：
- package.json (已有)
- next.config.mjs (已有)
- tsconfig.json (已有)
- postcss.config.mjs (已有)
- src/data/seeds.json (已有 — 35种种子数据)
- src/data/game-data.json (已有 — rings, mutations, pets数据)
- src/data/codes.json (已有 — 8个兑换码)

## 需要构建的完整页面清单

### PHASE 1: 核心工具页 (Highest SEO Priority)

#### 1. Homepage (/) 
Title: "BARF Guides — Build A Ring Farm Tools, Calculators & Guides"
Description: "Complete Build A Ring Farm resource hub. Profit calculator, working codes, seed tier list, pets ranking, Update 4 patch notes, and expert guides."
Keywords: build a ring farm, barf, build a ring farm guide, build a ring farm calculator
- Hero section with game logo text and value proposition
- Featured tools: Profit Calculator, Codes, Tier List, Patch Notes
- "Latest Codes" widget showing 3 active codes with copy button
- Quick stats: 35+ Seeds, 14 Mutations, 8 Pets, Update 4
- News section linking to update-4-patch-notes
- Internal links to all major pages

#### 2. /profit-calculator (⭐⭐⭐ — Biggest Differentiator)
Title: "Build A Ring Farm Profit Calculator — Seed Earnings & ROI"
Description: "Calculate exact profit per minute for any Build A Ring Farm seed setup. Includes ring multiplier, mutation bonus, saw level, pet bonus, and sprinkler. Compare seeds side by side."
Keywords: build a ring farm profit calculator, build a ring farm calculator, build a ring farm earnings calculator
**THIS IS THE KEY DIFFERENTIATOR — no competitor has profit/min or ROI**
必须是 'use client' 组件，包含：
- Seed selector dropdown (35种种子)
- Ring selector: Base (7x), Middle (13x), Outer (19x)
- Mutation selector: all 14 mutations
- Saw Level slider (1-100)
- Pet Bonus input (%)
- Sprinkler Level input
- Plant Count input
- Real-time output: Profit Per Minute, ROI (harvests to recoup cost), Total Value per Harvest
- Seed comparison mode (side-by-side)
- Copy results button
- FAQ section with FAQ Schema

#### 3. /codes
Title: "Build A Ring Farm Codes (June 2026) — 8 Working Codes"
Description: "Active Build A Ring Farm codes: 250KUSERS, PLANTRUSH, UPDATE2, THANKYOU, BARF:3, 2KLIKES, UPDATE1, 100KVISITS. Copy and redeem instantly. Updated June 2026."
Keywords: barf codes, build a ring farm codes 2026, build a ring farm redeem codes
- Active codes table with CopyButtons
- How to redeem guide
- Expired codes section
- FAQ Schema

#### 4. /tier-list
Title: "Build A Ring Farm Tier List — Best Seeds Ranked (S-Tier to D-Tier)"
Description: "Complete seed tier list for Build A Ring Farm. All 35 seeds ranked S to D by profit per minute, growth time, and endgame viability. Includes pets and mutations tier lists."
Keywords: build a ring farm tier list, build a ring farm seeds tier list, best seeds build a ring farm
- Tab interface切换: Seeds / Pets / Mutations
- Seeds tab: Visual S/A/B/C/D ranking table with price, profit data, scenario
- Pets tab: S/A/B/C/D with pet bonuses and recommendations
- Mutations tab: Ranked by multiplier with trigger conditions

#### 5. /update-4-patch-notes (⭐⭐⭐ — Zero competition page)
Title: "Build A Ring Farm Update 4 Patch Notes — What's New (June 2026)"
Description: "Complete Build A Ring Farm Update 4 patch notes. New features: Compost Machine, Plant Contracts, Farm Skins, Friend O Tron, new seeds, new mutations. Full breakdown."
Keywords: build a ring farm update 4, build a ring farm update 4 patch notes, build a ring farm patch notes
**THIS IS A CONTENT GAP — NO competitor has this page**
- New Features section: Compost Machine, Plant Contracts, Farm Skins, Friend O Tron
- New Seeds section: 24 new plants added
- New Mutations: Admin, Fire, Bubblegum, Starfall
- New Pets: Pet system introduced
- Bug fixes and balance changes
- New active codes from this update
- FAQ Schema

#### 6. /beginner-guide
Title: "Build A Ring Farm Beginner Guide — How to Play & Make Money Fast (June 2026)"
Description: "New to Build A Ring Farm? Start here. Complete beginner guide covering how to play, best early seeds, ring system explained, first upgrades, and fastest money methods."
Keywords: build a ring farm beginner guide, how to play build a ring farm, build a ring farm guide
- 4-stage guide: Early ($0-$100) → Mid ($100-$1000) → Late ($1000-$10000) → Endgame
- How to redeem codes with screenshots
- First upgrades priority
- Ring system explained
- Mutation basics
- Pet system overview

### PHASE 2: Deep Guide Pages

#### 7. /pets-tier-list
Title: "Build A Ring Farm Pets Tier List — Best Pets Ranked (S to D)"
Description: "Complete pets tier list for Build A Ring Farm. We rank Harvest Drone, Rain Cloud, and all 8 pets from S-Tier (best) to D-Tier (skip)."
Keywords: build a ring farm pets tier list, best pets build a ring farm, build a ring farm pets

#### 8. /mutations-tier-list
Title: "Build A Ring Farm Mutations Tier List — All 14 Mutations Ranked"
Description: "Every mutation in Build A Ring Farm ranked by multiplier value. From Wet (1.5x) to Starfall (8x) — plus Update 4's Fire, Bubblegum, Admin, and Starfall."
Keywords: build a ring farm mutations tier list, build a ring farm mutations

#### 9. /transcendent-seeds-guide
Title: "How to Get Transcendent Seeds in Build A Ring Farm — Best Method"
Description: "Complete guide to getting Transcendent seeds in Build A Ring Farm. Seed luck mechanics, best pets for rare seeds, farming strategies, and all Transcendent seed prices."
Keywords: build a ring farm transcendent seeds, how to get transcendent seeds build a ring farm

#### 10. /money-guide
Title: "Build A Ring Farm Best Money Method — How to Make Cash Fast (June 2026)"
Description: "Updated for Update 4! Best money-making methods in Build A Ring Farm. Compost Machine strategy, ring optimization, pet combos, and seed profit rankings."
Keywords: build a ring farm money guide, build a ring farm make money fast, build a ring farm best money method

#### 11. /compost-machine-guide
Title: "Compost Machine Guide — How to Unlock & Best Compost Strategy"
Description: "Complete Compost Machine guide for Build A Ring Farm Update 4. How to unlock, compost tiers, best seeds to compost, and reward breakdown."
Keywords: build a ring farm compost machine, build a ring farm compost guide

#### 12. /contracts-guide
Title: "Plant Contracts Guide — Quests, Rewards & Best Strategy"
Description: "Complete Plant Contracts guide for Build A Ring Farm Update 4. How contracts work, best rewards, and optimal completion strategy."
Keywords: build a ring farm contracts, build a ring farm plant contracts

### PHASE 3: Supporting Pages

#### 13. /seeds-database
All 35 seeds in a searchable/filterable table with rarity, price, sell price, growth time, profit/min

#### 14. /about
About this fan site

#### 15. /privacy-policy
Standard privacy policy

## SEO Requirements
- Every page must have unique: title, meta description, canonical URL
- FAQ Schema (JSON-LD) on: homepage, profit-calculator, codes, tier-list, update-4-patch-notes, beginner-guide
- BreadcrumbList Schema on every page
- VideoGame Schema on homepage and about page
- Proper <h1>/<h2>/<h3> hierarchy
- Internal links between related pages

## Design Requirements
- Dark theme (dark blue/emerald gaming aesthetic)
- Green (#10b981) as accent color for profit values and active elements
- Amber (#f59e0b) for currency/money display
- Responsive design (mobile-first)
- Header navigation with: Calculator, Codes, Tier List, Patch Notes, Beginner Guide
- Footer with About, Privacy Policy links
- Favicon with game-themed SVG

## Technical Requirements
- CopyButton must be separate 'use client' component
- ProfitCalculator page must be 'use client'
- Other pages are Server Components with metadata export
- sitemap.ts with export const dynamic = 'force-static'
- robots.txt
- Use `as unknown as` for JSON imports to avoid TS strict errors
- `@import "tailwindcss"` syntax for Tailwind v4

## Important Notes
- All content in English
- Use accurate game data from the JSON files
- No emoji as favicon — create an SVG favicon
- Game abbreviation: BARF (from BARF:3 code)
- Site name: "BARF Guides"
- No generic placeholder content — real useful content

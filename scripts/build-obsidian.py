#!/usr/bin/env python3
"""Generate complete BARF Obsidian structure matching GAG2 format."""

import json, os, textwrap

OBS = os.path.expanduser("~/wiki/roblox/build-a-ring-farm")

def load_json(name):
    with open(f"{OBS}/data/{name}") as f:
        return json.load(f)

seeds_data = load_json("seeds.json")
game_data = load_json("game-data.json")
codes_data = load_json("codes.json")

seeds = seeds_data["seeds"]
mutations = game_data["mutations"]
pets = game_data["pets"]

def slug(name):
    return name.lower().replace("'","").replace(" ","-").replace("'","").replace(",","").replace(".","")

def fmt_income(v):
    if v >= 1000000: return f"{v/1000000:.2f}M"
    if v >= 1000: return f"{v/1000:.1f}K"
    return str(v)

def fmt_grow(v):
    return f"{v}s" if v else "Unknown"

def fmt_price(v):
    if v == 0: return "—"
    if v >= 1000000000000000000: return f"{v/1000000000000000000:.1f}Qi"
    if v >= 1000000000000000: return f"{v/1000000000000000:.1f}Qd"
    if v >= 1000000000000: return f"{v/1000000000000:.2f}T"
    if v >= 1000000000: return f"{v/1000000000:.2f}B"
    if v >= 1000000: return f"{v/1000000:.1f}M"
    if v >= 1000: return f"{v/1000:.1f}K"
    return str(v)

def dedent(s):
    return textwrap.dedent(s).strip()

# ====== CREATE seeds/ DIRECTORY ======
print("Creating seeds/ directory with 115 pages...")
os.makedirs(f"{OBS}/seeds", exist_ok=True)

for s in seeds:
    sid = s["id"]
    seed_slug = slug(s["name"])
    page = dedent(f"""
    # {s["name"]}
    
    > {s["rarity"]}-tier seed in Build A Ring Farm
    
    ## Basic Info
    
    | Property | Value |
    |:---------|:-----:|
    | **Rarity** | {s["rarity"]} |
    | **Tier** | {s["tier"]} |
    | **Base Income** | {fmt_income(s["sellPrice"])} |
    | **Grow Time** | {fmt_grow(s["growthTime"])} |
    | **Seed Cost** | {fmt_price(s["price"])} |
    
    ## Description
    
    {s["scenario"]}
    
    ## Strategy
    
    - **Best ring placement:** {'Outer' if s['tier'] in ['S','A'] else 'Middle' if s['tier'] in ['B'] else 'Inner'} Ring
    - **Recommended for:** {'Endgame' if s['tier'] == 'S' else 'Mid-game' if s['tier'] in ['A','B'] else 'Early-game'}
    """)
    with open(f"{OBS}/seeds/{seed_slug}.md", "w") as f:
        f.write(page + "\n")

print(f"  ✅ Created {len(seeds)} seed pages")

# ====== CREATE ROOT OVERVIEW PAGES ======
print("Creating root overview pages...")

# index.md
with open(f"{OBS}/index.md", "w") as f:
    f.write(dedent(f"""
    # Build A Ring Farm — Game Guide
    
    > Complete data collection for **Build A Ring Farm** (Roblox Game ID: 107646426076756)
    > Developer: Gamecreates
    
    ## Overview
    
    - **Seeds:** {len(seeds)} crops across 11 rarities (Common → Celestial)
    - **Pets:** {len(pets)} pets with unique abilities
    - **Mutations:** {len(mutations)} confirmed mutation multipliers
    - **Active Codes:** {len(codes_data['codes'])} active redemption codes
    - **Last Updated:** 2026-06-21 (v2.0)
    
    ## Quick Links
    
    - [All Seeds](seeds.md)
    - [All Pets](pets.md)
    - [Mutations Guide](mutations.md)
    - [Active Codes](codes.md)
    - [Getting Started Guide](getting-started.md)
    - [Seed Database Index](seeds/)
    
    ## Data Sources
    
    See [data-sources.md](data-sources.md) for full list.
    """) + "\n")

# seeds.md
with open(f"{OBS}/seeds.md", "w") as f:
    content = "# All Seeds\n\nComplete list of all 115 seeds by rarity.\n\n## Seed Index\n\n"
    for s in seeds:
        content += f"- [{s['name']}](seeds/{slug(s['name'])}.md) — {s['rarity']}, {fmt_income(s['sellPrice'])}\n"
    f.write(content + "\n")

# codes.md
with open(f"{OBS}/codes.md", "w") as f:
    content = "# Active Codes\n\n"
    content += "| Code | Reward | Added |\n|:----:|:------|:----:|\n"
    for c in codes_data["codes"]:
        content += f"| `{c['code']}` | {c['reward']} | {c['dateAdded']} |\n"
    f.write(content + "\n")

# mutations.md
with open(f"{OBS}/mutations.md", "w") as f:
    content = "# Mutations Guide\n\n## Confirmed Multipliers\n\n"
    content += "| Mutation | Multiplier | Trigger |\n|:--------:|:----------:|:-------|\n"
    for m in sorted(mutations, key=lambda x: -x["multiplier"]):
        content += f"| {m['name']} | ×{m['multiplier']} | {m['trigger']} |\n"
    f.write(content + "\n")

# pets.md
with open(f"{OBS}/pets.md", "w") as f:
    content = "# All Pets\n\n"
    tiers = {"S": [], "A": [], "B": [], "C": [], "D": []}
    for p in pets:
        tiers.get(p.get("tier","C"), []).append(p)
    
    for tier_name in ["S", "A", "B", "C", "D"]:
        tier_pets = tiers.get(tier_name, [])
        if not tier_pets: continue
        content += f"## {tier_name} Tier\n\n"
        content += "| Pet | Bonus | Role |\n|:---:|:-----|:---:|\n"
        for p in tier_pets:
            content += f"| {p['name']} | {p['bonus']} | {p.get('role','')} |\n"
    f.write(content + "\n")

# getting-started.md
with open(f"{OBS}/getting-started.md", "w") as f:
    f.write(dedent("""
    # Getting Started Guide
    
    ## Progression Path
    
    1. **Early Game ($0 - $100K)**
       - Start with Common seeds: Carrot → Beetroot → Pumpkin
       - Save for Uncommon: Wheat → Melon → Watermelon
       - First goal: Unlock Inner Ring
    
    2. **Mid Game ($100K - $10M)**
       - Move to Rare/Epic seeds: Grape → Corn → Plum
       - Invest in Sprinklers
       - Unlock Middle Ring
    
    3. **Late Game ($10M - $1B)**
       - Legendary seeds: Spring Onion → Mango → Banana
       - Get mutation-capable pets
       - Unlock Outer Ring
    
    4. **Endgame ($1B+)**
       - Transcended/Exotic/Celestial seeds
       - Stack mutations for massive harvests
       - Leaderboard push during events
    """) + "\n")

# data-sources.md
with open(f"{OBS}/data-sources.md", "w") as f:
    f.write(dedent("""
    # Data Sources
    
    | # | Source | Type | URL |
    |:-:|:-------|:----|:----|
    | 1 | Roblox Store | store_page | https://www.roblox.com/games/107646426076756/ |
    | 2 | Bloxron | media | https://bloxron.com/build-a-ring-farm/seeds |
    | 3 | Pro Game Guides | media | https://progameguides.com/roblox/all-build-a-ring-farm-seeds/ |
    | 4 | PCGamesN | media | https://www.pcgamesn.com/roblox/build-a-ring-farm/seeds |
    | 5 | Beebom | media | https://beebom.com/build-a-ring-farm-codes/ |
    | 6 | AllThingsHow | media | https://allthings.how/build-a-ring-farm-codes/ |
    | 7 | TechWiser | media | https://techwiser.com/roblox-build-a-ring-farm-codes/ |
    | 8 | Sportskeeda | media | https://www.sportskeeda.com/roblox/ |
    | 9 | rocodes.gg | media | https://rocodes.gg/codes/build-a-ring-farm |
    | 10 | Rolimon's | stats | https://www.rolimons.com/game/107646426076756 |
    | 11 | YouTube: Foltyn | youtube | https://www.youtube.com/@Foltyn |
    | 12 | YouTube: MeEnyu | youtube | https://www.youtube.com/@MeEnyu |
    | 13 | YouTube: CoralBlox2 | youtube | https://www.youtube.com/@CoralBlox2 |
    | 14 | Roblox API | api | https://games.roblox.com/v1/games |
    """) + "\n")

# README.md
with open(f"{OBS}/README.md", "w") as f:
    f.write(dedent(f"""
    # Build A Ring Farm — Obsidian Data Vault
    
    > Roblox Game ID: 107646426076756
    > Website: https://buildaringfarmguides.com
    
    ## Structure
    
    - `data/` — JSON data files (seeds.json, codes.json, game-data.json, data-version.md)
    - `seeds/` — Individual seed pages ({len(seeds)} total)
    - `pages/` — Curated content pages
    - `mechanics/` — Game mechanics guides
    - `sources/` — Data source tracking
    - `verification/` — Data verification logs
    """) + "\n")

print("  ✅ Created root overview pages")

# ====== CREATE MECHANICS DOCS ======
print("Creating mechanics/ docs...")
os.makedirs(f"{OBS}/mechanics", exist_ok=True)

# mechanics/mutations.md
with open(f"{OBS}/mechanics/mutations.md", "w") as f:
    content = f"# Mutation System\n\n**{len(mutations)} confirmed mutations**\n\nMutations in BARF **can stack** (multiplicatively). Starfall is the only mutation that can stack with others.\n\n"
    content += "| Mutation | Multiplier | Rarity | Trigger |\n|:--------:|:----------:|:------:|:-------|\n"
    for m in sorted(mutations, key=lambda x: -x["multiplier"]):
        content += f"| {m['name']} | ×{m['multiplier']} | {m.get('rarity','?')} | {m['trigger']} |\n"
    content += "\n## Strategy\n\n- Early: Focus on Rain/Wet (1.35x) and Autumn (2x) from THANKYOU code\n- Mid: Farm Frozen (1.75x) and Radioactive (3x) during weather events\n- Late: Chase Carnival (9.5x), Starfall (8x), and Admin (7x) during events\n- Endgame: Stack Starfall with another mutation for maximum multiplier\n"
    f.write(content)

# mechanics/pets.md
with open(f"{OBS}/mechanics/pets.md", "w") as f:
    content = f"# Pet System\n\n**{len(pets)} pets available**\n\nPets spawn from eggs and provide passive bonuses.\n\n"
    content += "| Tier | Pet | Bonus |\n|:---:|:---:|:----|\n"
    for p in sorted(pets, key=lambda x: x.get("tier","Z")):
        content += f"| {p.get('tier','?')} | {p['name']} | {p['bonus']} |\n"
    f.write(content + "\n## Egg Sources\n\n- Common Egg: $25M (Capybara, Golden Retriever)\n- Rare Egg: $25B\n- Epic Egg: $10T-$25T (includes Hydra 0.315%)\n- Legendary Egg: $100T (Rhino, Red Panda)\n- Dinosaur Egg: 199R (T-Rex 0.5%)\n")

# mechanics/rings.md
with open(f"{OBS}/mechanics/rings.md", "w") as f:
    f.write(dedent("""
    # Ring System
    
    Rings multiply your harvest value. Each ring tier has a higher multiplier.
    
    | Ring | Approx Multiplier | Unlock Cost |
    |:----:|:----------------:|:-----------:|
    | Inner | 1x - 3x | Starter |
    | Middle | 3x - 7x | Mid-game |
    | Outer | 7x - 19x | Late-game |
    
    ## Strategy
    
    - Place high-value, long-grow seeds on Outer for max multiplier
    - Fast seeds (Common/Uncommon) go on Inner for quick turnover
    - Stack ring multiplier × mutation × pet bonus for max harvest
    """) + "\n")

# mechanics/compost-machine.md
with open(f"{OBS}/mechanics/compost-machine.md", "w") as f:
    f.write(dedent("""
    # Compost Machine
    
    The Compost Machine converts excess seeds into compost, which can be used to:
    - Improve crop growth speed
    - Increase mutation chances
    - Produce specific seed outputs (Compost Hydra, Garden Devourer, Muck Monarch)
    
    ## Efficiency Tips
    
    - Focus compost on high-value seeds for best returns
    - Compost quality scales with seed rarity
    """) + "\n")

# mechanics/events.md
with open(f"{OBS}/mechanics/events.md", "w") as f:
    f.write(dedent("""
    # Events Guide
    
    ## Standard Events (Always Available)
    
    | Event | Mutation | Multiplier |
    |:-----|:---------:|:---------:|
    | Rain | Wet | 1.35x |
    | Blizzard | Frozen | 1.75x |
    | Harvest | Autumn | 2x |
    | Black Hole | Void | 2.25x |
    | Nuclear | Radioactive | 3x |
    
    ## Rare Events
    
    | Event | Mutation | Multiplier | Notes |
    |:-----|:---------:|:---------:|:------|
    | UFO | Alien | 3.25x | Update 4 |
    | Trucker | Farm | 4x | — |
    | Galaxy | Rainbow | 5x | 1% chance |
    | Admin Abuse | Admin | 7x | Update 6, June 20-27 |
    | Cosmic | Starfall | 8x | Starfall Griffin pet |
    | Queen Bee | Honeycomb | 6.5x | Update 7 |
    
    ## Active Events
    
    **Update 7 + Admin Abuse Week (June 20-27, 2026)**
    - Bee System active: Beekeeper NPC, Honey economy, Bee Rolling
    - Admin Abuse: Special seed pool, exclusive mutation
    - Summer Plant Fuse Machine: 4 seeds → fuse for +5% farm earnings
    """) + "\n")

print("  ✅ Created mechanics docs")

# ====== CREATE pages/ ADDITIONS ======
print("Creating missing pages/ entries...")
os.makedirs(f"{OBS}/pages", exist_ok=True)

# pages/events-guide.md
with open(f"{OBS}/pages/events-guide.md", "w") as f:
    f.write(open(f"{OBS}/mechanics/events.md").read())

# pages/seeds-database.md
with open(f"{OBS}/pages/seeds-database.md", "w") as f:
    f.write(open(f"{OBS}/seeds.md").read() + "\n\n*See [seeds/](../seeds/) for individual seed pages.*\n")

print("  ✅ Created pages/ additions")

# ====== FINAL COUNT ======
total = 0
for root, dirs, files in os.walk(OBS):
    total += len(files)
print(f"\n📊 Total files in BARF Obsidian: {total}")

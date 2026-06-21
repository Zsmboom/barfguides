#!/usr/bin/env python3
"""Convert Bloxron raw seed data to website format and update seeds.json"""
import json, re, os

PROJ = os.path.expanduser("~/Projects/barfguides")

# Load existing seeds
with open(f"{PROJ}/src/data/seeds.json") as f:
    existing = json.load(f)

# Load Bloxron raw data
with open(f"{PROJ}/scripts/bloxron-raw-115.json") as f:
    blox = json.load(f)

def parse_num(v):
    """Parse number string like '1.20K', '5M', etc"""
    if isinstance(v, (int, float)):
        return int(v)
    if not isinstance(v, str):
        return 0
    v = v.strip()
    if v.lower() in ("unknown", "unavailable", ""):
        return 0
    v = v.replace(",", "")
    m = re.match(r'^([\d.]+)\s*(K|M|B|T|Qd|Qi)?$', v)
    if not m:
        try:
            return int(float(v))
        except:
            return 0
    num, suffix = float(m.group(1)), (m.group(2) or "")
    mult = {"K":1000, "M":1000000, "B":1000000000, "T":1000000000000, 
            "Qd":1000000000000000, "Qi":1000000000000000000}
    return int(num * mult.get(suffix, 1))

def parse_grow_time(s):
    """Extract seconds from '3s', '3.5s'"""
    if not isinstance(s, str) or s.lower() == "unknown":
        return 0
    m = re.search(r'([\d.]+)\s*s', s)
    return int(float(m.group(1))) if m else 0

def make_id(name):
    return name.lower().replace("'", "").replace(" ", "-").replace("’", "")

def format_price(v):
    if v == 0: return "$0"
    if v >= 1000000000000000000: return f"${v/1000000000000000000:.2f}Qi"
    if v >= 1000000000000000: return f"${v/1000000000000000:.2f}Qd"
    if v >= 1000000000000: return f"${v/1000000000000:.2f}T"
    if v >= 1000000000: return f"${v/1000000000:.2f}B"
    if v >= 1000000: return f"${v/1000000:.2f}M"
    if v >= 1000: return f"${v/1000:.1f}K"
    return f"${v}"

def assign_tier(seed):
    """Assign S/A/B/C/D tier based on rarity and base income"""
    r = seed.get("rarity","")
    income = parse_num(seed.get("baseIncome", 0))
    if isinstance(seed.get("baseIncome"), str) and seed["baseIncome"] == "Unknown":
        # Check price vs typical values for that rarity
        price = parse_num(seed.get("seedCost", 0))
        if price >= 1000000000000000: return "S"
        if price >= 1000000000: return "A"
        if price >= 100000: return "B"
        return "C"
    
    rarity_tiers = {
        "Celestial": "S", "Transcended": "S", "Exotic": "S",
        "Divine": "S", "Prismatic": "A", "Secret": "A",
        "Legendary": "B", "Epic": "B", "Rare": "C",
        "Uncommon": "C", "Common": "D"
    }
    return rarity_tiers.get(r, "C")

def make_scenario(seed):
    name = seed.get("name","")
    rarity = seed.get("rarity","")
    source = seed.get("source","")
    income = parse_num(seed.get("baseIncome", 0))
    
    scenarios = {
        "Rolling": "Roller pull — check seed shop for price",
        "Seed Collector": "Unlock via Seed Collector progression",
        "Friend-o-Tron": "Friend-o-Tron exclusive seed",
        "Bee Event": "Update 7 Bee Event — 37% from Honey Pot",
        "Alien Event": "Alien Invasion event reward",
        "Admin Weather": "Admin Abuse weather event seed",
        "Composter": "Composter output seed",
        "Seed Packs": "Seed Pack / Crate drop",
        "Corrupted Seed Pack": "Corrupted Seed Pack exclusive",
        "Summer Fuse Machine": "Update 6 Summer Fuse Machine exclusive",
        "Carnival Seed Pack": "Carnival event seed pack drop",
        "Carnival Event": "Carnival event reward",
        "Carnival Pass / Crate": "Carnival Pass or Crate drop",
        "Queen Bee Event": "Update 7 Queen Bee event — 0.1% from Honey Pot",
        "Plant Boss Box": "Plant Rush Boss Box drop",
        "Plant Rush Event": "Plant Rush event reward",
        "Pirate Puddle Bundle": "Robux Pirate Puddle Bundle",
        "Gummy Kingdom Bundle": "Robux Gummy Kingdom Bundle",
        "Disco Bundle": "Robux Disco Bundle",
        "Blackhole Event": "Black Hole cosmic event reward",
        "Trucker Event": "Trucker event reward",
        "Rain Weather": "Rain weather event exclusive",
        "Contracts": "Contract mission reward",
        "Robux Shop": "Robux Shop purchase",
        "Machine / Trucker": "Trucker Machine reward",
    }
    if source in scenarios:
        return scenarios[source]
    return f"{rarity}-tier {source.lower()} seed"

# Build merged list
existing_names = {s["name"] for s in existing["seeds"]}
new_seeds = []

for s in blox:
    name = s["name"]
    blox_income = parse_num(s.get("baseIncome", 0))
    blox_price = parse_num(s.get("seedCost", 0))
    gt = parse_grow_time(s.get("growTime",""))
    sid = make_id(name)
    
    entry = {
        "id": sid,
        "name": name,
        "rarity": s["rarity"],
        "price": blox_price,
        "priceLabel": format_price(blox_price) if blox_price > 0 else "—",
        "sellPrice": blox_income if blox_income > 0 else 1,
        "growthTime": gt if gt > 0 else 30,
        "tier": assign_tier(s),
        "scenario": make_scenario(s)
    }
    
    if name in existing_names:
        # Update existing entry with Bloxron accurate data
        for i, e in enumerate(existing["seeds"]):
            if e["name"] == name:
                existing["seeds"][i] = entry
                break
    else:
        new_seeds.append(entry)

# Add new seeds
existing["seeds"].extend(new_seeds)

# Sort by rarity then price
rarity_order = {
    "Common":0,"Uncommon":1,"Rare":2,"Epic":3,"Legendary":4,
    "Secret":5,"Prismatic":6,"Divine":7,"Exotic":8,"Transcended":9,
    "Celestial":10,"Eternal":11
}
existing["seeds"].sort(key=lambda s: (rarity_order.get(s["rarity"],99), s["sellPrice"]))

print(f"Old count: {39 + len(new_seeds)} (existing: 39, from bloxron: {len(blox)})")
print(f"Existing names kept: {len(existing_names)}")
print(f"New seeds added: {len(new_seeds)}")
print(f"Total: {len(existing['seeds'])}")

with open(f"{PROJ}/src/data/seeds.json", "w") as f:
    json.dump(existing, f, indent=2, ensure_ascii=False)

print("✅ seeds.json updated!")

#!/usr/bin/env python3
"""Replace seeds.json with clean 115 Bloxron seeds only"""
import json, re, os

PROJ = os.path.expanduser("~/Projects/barfguides")

with open(f"{PROJ}/scripts/bloxron-raw-115.json") as f:
    blox = json.load(f)

def parse_num(v):
    if isinstance(v, (int, float)):
        return int(v)
    if not isinstance(v, str):
        return 0
    v = v.strip().replace(",", "")
    if v.lower() in ("unknown", "unavailable", ""):
        return 0
    m = re.match(r'^([\d.]+)\s*(K|M|B|T|Qd)?$', v)
    if not m:
        try: return int(float(v))
        except: return 0
    num, suffix = float(m.group(1)), (m.group(2) or "")
    mult = {"K":1000,"M":1000000,"B":1000000000,"T":1000000000000,"Qd":1000000000000000}
    return int(num * mult.get(suffix, 1))

def parse_grow(s):
    if not isinstance(s, str) or s.lower() == "unknown":
        return 0
    m = re.search(r'([\d.]+)\s*s', s)
    return int(float(m.group(1))) if m else 0

def make_id(name):
    return name.lower().replace("'","").replace(" ","-").replace("'","").replace(",","").replace(".","")

def fmt_price(v):
    if v == 0: return "$0"
    if v >= 1000000000000000000: return f"${v/1000000000000000000:.1f}Qi"
    if v >= 1000000000000000: return f"${v/1000000000000000:.1f}Qd"
    if v >= 1000000000000: return f"${v/1000000000000:.2f}T"
    if v >= 1000000000: return f"${v/1000000000:.2f}B"
    if v >= 1000000: return f"${v/1000000:.1f}M"
    if v >= 1000: return f"${v/1000:.1f}K"
    return f"${v}"

rarity_tiers = {
    "Celestial":"S","Transcended":"S","Exotic":"S",
    "Divine":"S","Prismatic":"A","Secret":"A",
    "Legendary":"B","Epic":"B","Rare":"C",
    "Uncommon":"C","Common":"D"
}

scenarios = {
    "Rolling":"Roller pull — best for its tier",
    "Seed Collector":"Unlock via Seed Collector",
    "Friend-o-Tron":"Friend-o-Tron exclusive",
    "Bee Event":"Update 7 Bee Event — 37% from Honey Pot",
    "Alien Event":"Alien Invasion event reward",
    "Admin Weather":"Admin Abuse weather event",
    "Composter":"Composter output seed",
    "Seed Packs":"Crate / Seed Pack drop",
    "Corrupted Seed Pack":"Corrupted Seed Pack exclusive",
    "Summer Fuse Machine":"Update 6 Fuse Machine exclusive",
    "Carnival Seed Pack":"Carnival seed pack drop",
    "Carnival Event":"Carnival event reward",
    "Carnival Pass / Crate":"Carnival Pass drop",
    "Queen Bee Event":"Update 7 Queen Bee — 0.1% from Honey Pot",
    "Plant Boss Box":"Plant Rush Boss Box drop",
    "Plant Rush Event":"Plant Rush event reward",
    "Pirate Puddle Bundle":"Robux Pirate Puddle Bundle",
    "Gummy Kingdom Bundle":"Robux Gummy Kingdom Bundle",
    "Disco Bundle":"Robux Disco Bundle",
    "Blackhole Event":"Black Hole cosmic event",
    "Trucker Event":"Trucker event reward",
    "Rain Weather":"Rain weather exclusive",
    "Contracts":"Contract mission reward",
    "Robux Shop":"Robux Shop",
    "Machine / Trucker":"Trucker Machine reward",
}

seeds = []
for s in blox:
    income = parse_num(s.get("baseIncome", 0))
    price = parse_num(s.get("seedCost", 0))
    gt = parse_grow(s.get("growTime",""))
    source = s.get("source","")
    
    seeds.append({
        "id": make_id(s["name"]),
        "name": s["name"],
        "rarity": s["rarity"],
        "price": price,
        "priceLabel": fmt_price(price) if price > 0 else "—",
        "sellPrice": income if income > 0 else 1,
        "growthTime": gt if gt > 0 else 30,
        "tier": rarity_tiers.get(s["rarity"], "C"),
        "scenario": scenarios.get(source, f"{s['rarity']}-tier {source.lower()} seed")
    })

result = {"seeds": seeds}
with open(f"{PROJ}/src/data/seeds.json", "w") as f:
    json.dump(result, f, indent=2, ensure_ascii=False)

print(f"✅ Replaced seeds.json: {len(seeds)} seeds (Bloxron source)")
print(f"Rarities: {sorted(set(s['rarity'] for s in seeds))}")

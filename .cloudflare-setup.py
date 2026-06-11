#!/usr/bin/env python3
"""Remove Pages custom domains and add them to Worker."""
import os, json, urllib.request, urllib.error

token = os.environ.get("CLOUDFLARE_API_TOKEN", "")
if not token or len(token) < 20:
    print("ERROR: CLOUDFLARE_API_TOKEN not set or too short")
    exit(1)

ACCOUNT = "247eec2779f66eda54cc3fa6cf692fb8"
HEADERS = {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}

def api(method, path, data=None):
    url = f"https://api.cloudflare.com/client/v4{path}"
    body = json.dumps(data).encode() if data else None
    req = urllib.request.Request(url, data=body, method=method, headers=HEADERS)
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read())
    except urllib.error.HTTPError as e:
        body = e.read().decode()
        print(f"  HTTP {e.code}: {body[:200]}")
        return json.loads(body) if body else {}

# 1. Verify token
print("=== Verifying token ===")
verify = api("GET", "/user/tokens/verify")
if verify.get("success"):
    print(f"  Token OK: {verify['result'].get('id', '')}")
else:
    print(f"  Token issue: {verify.get('errors', [])}")

# 2. Get zone
print("\n=== Getting zone ===")
zones = api("GET", "/zones?name=buildaringfarmguides.com")
if zones.get("success") and zones["result"]:
    zone_id = zones["result"][0]["id"]
    print(f"  Zone: {zone_id}")
else:
    print(f"  Failed: {zones.get('errors', zones)}")
    exit(1)

# 3. Remove Pages custom domains
print("\n=== Removing Pages custom domains ===")
pages_domains = api("GET", f"/accounts/{ACCOUNT}/pages/projects/barfguides/domains")
if pages_domains.get("success"):
    for dom in pages_domains["result"]:
        name = dom["name"]
        print(f"  Deleting Pages domain: {name} (id={dom['id']})")
        result = api("DELETE", f"/accounts/{ACCOUNT}/pages/projects/barfguides/domains/{dom['id']}")
        if result.get("success"):
            print(f"    ✓ Deleted {name}")
        else:
            # Try by name in URL
            print(f"    API id-based delete failed, trying by name...")
            result2 = api("DELETE", f"/accounts/{ACCOUNT}/pages/projects/barfguides/domains/{name}")
            if result2.get("success"):
                print(f"    ✓ Deleted {name}")
            else:
                print(f"    ✗ Failed: {result2.get('errors', [])}")

# 4. Add to Worker
print("\n=== Adding domains to Worker ===")
WORKER = "barfguides"
for hostname in ["buildaringfarmguides.com", "www.buildaringfarmguides.com"]:
    print(f"  Adding Worker domain: {hostname}")
    body = {"hostname": hostname, "service": WORKER, "zone_id": zone_id}
    result = api("POST", f"/accounts/{ACCOUNT}/workers/domains", body)
    if result.get("success"):
        print(f"    ✓ {hostname} added")
    else:
        print(f"    ✗ Failed: {result.get('errors', [])}")
        # Try route approach
        print(f"    Trying route...")
        route_body = {"pattern": hostname, "script": WORKER, "zone_id": zone_id}
        route_result = api("POST", f"/zones/{zone_id}/workers/routes", route_body)
        if route_result.get("success"):
            print(f"    ✓ {hostname} route added")
        else:
            print(f"    ✗ Route failed: {route_result.get('errors', [])}")

print("\n=== Done ===")

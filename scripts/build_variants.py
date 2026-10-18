#!/usr/bin/env python3
"""Generate one landing page per profile (data.html, dotnet.html, devops.html) from index.html.
Each page gets its own title, description and preview image, so a link shared by email,
LinkedIn or chat shows a card tailored to that role. Run it after editing index.html or data.js:
    python3 scripts/build_variants.py
Requires Python 3 and Node (Node is only used to read data.js)."""
import json, re, subprocess, pathlib, html
root = pathlib.Path(__file__).resolve().parent.parent
site = (root / "site.url").read_text().strip() if (root / "site.url").exists() else "__SITE_URL__"
lens = json.loads(subprocess.check_output(["node", "-e",
    "const fs=require('fs');eval(fs.readFileSync('assets/js/data.js','utf8')+';console.log(JSON.stringify(LENS))')"],
    cwd=root, text=True))
src = (root / "index.html").read_text(encoding="utf-8")
# index.html is the source of truth; make sure we start from the root-page values
def meta(s, attr, val, content):
    pat = rf'(<meta {attr}="{re.escape(val)}" content=")[^"]*(")'
    new, n = re.subn(pat, lambda m: m.group(1) + html.escape(content, quote=True) + m.group(2), s, count=1)
    if not n: raise SystemExit(f"meta {val} not found in index.html")
    return new
for key, L in lens.items():
    role = L["role"]; slug = L["slug"]; page = L["page"]
    title = f"Wael Halila — {role} · Tunis"
    desc = L["pitch"] + " Based in Tunis."
    url = f"{site}/{page}"; img = f"{site}/assets/img/og-{slug}.jpg"
    s = src
    s = re.sub(r"<title>.*?</title>", lambda m: f"<title>{html.escape(title, quote=False)}</title>", s, count=1, flags=re.S)
    s = meta(s, "name", "description", desc)
    s = meta(s, "property", "og:title", f"Wael Halila — {role}")
    s = meta(s, "property", "og:description", desc)
    s = meta(s, "property", "og:url", url)
    s = meta(s, "property", "og:image", img)
    s = meta(s, "property", "og:image:alt", f"Wael Halila, {role}")
    s = meta(s, "name", "twitter:title", f"Wael Halila — {role}")
    s = meta(s, "name", "twitter:description", desc)
    s = meta(s, "name", "twitter:image", img)
    s = meta(s, "name", "wh-lens", slug)
    s = re.sub(r'(<link rel="canonical" href=")[^"]*(")', lambda m: m.group(1) + url + m.group(2), s, count=1)
    (root / page).write_text(s, encoding="utf-8")
    print("wrote", page)

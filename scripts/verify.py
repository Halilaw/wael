#!/usr/bin/env python3
"""Quality gate: every local reference exists, JavaScript parses, and the strict CSP is respected
(no inline scripts, styles or event handlers). Used by CI; run it locally with: python3 scripts/verify.py"""
import re, subprocess, pathlib, struct, sys
root = pathlib.Path(__file__).resolve().parent.parent
site = (root / "site.url").read_text().strip() if (root / "site.url").exists() else "__SITE_URL__"
bad = []; checked = 0
def local(ref):
    ref = ref.strip().split(" ")[0]
    if not ref or ref.startswith(("#", "mailto:", "tel:", "data:", "javascript:")): return None
    if ref.startswith(site): ref = ref[len(site):]
    if ref.startswith("__SITE_URL__"): ref = ref[len("__SITE_URL__"):]
    if re.match(r"^[a-z]+://", ref): return None
    return ref.split("#")[0].split("?")[0].lstrip("/") or "index.html"
REQUIRED = ["index.html","data.html","dotnet.html","devops.html","sw.js","manifest.webmanifest",
  "assets/css/app.css","assets/js/boot.js","assets/js/data.js","assets/js/qr.js","assets/js/app.js",
  "assets/fonts/display-800.woff","assets/fonts/inter-400.woff","assets/fonts/inter-600.woff",
  "assets/img/hero-600.webp","assets/img/hero-600.avif","assets/img/og-image.jpg",
  "assets/cv/Wael_Halila_CV_Data_Engineer.pdf","assets/cv/Wael_Halila_CV_Software_Engineer.pdf","assets/cv/Wael_Halila_CV_DevOps_Engineer.pdf"]
missing = [f for f in REQUIRED if not (root / f).exists()]
if missing:
    print("FAIL: these files are missing from the repository:")
    print("\n".join("  - " + m for m in missing))
    print("\nThe upload was incomplete. Folders such as assets/ are often skipped by the GitHub web uploader.")
    print("Fix: upload with git (see README, 'Put it online'), GitHub Desktop, or upload the folder contents one folder at a time.")
    sys.exit(1)
pages = [p for p in ("index.html", "data.html", "dotnet.html", "devops.html") if (root / p).exists()]
for p in pages:
    s = (root / p).read_text(encoding="utf-8")
    refs = re.findall(r'(?:href|src)="([^"]+)"', s) + re.findall(r'content="([^"]*assets/[^"]+)"', s)
    for srcset in re.findall(r'(?:srcset|imagesrcset)="([^"]+)"', s): refs += [x.strip().split(" ")[0] for x in srcset.split(",")]
    for r in refs:
        t = local(r)
        if t and not (root / t).exists(): bad.append(f"{p}: missing {t}")
        checked += 1
    if re.search(r"<script(?![^>]*\bsrc=)(?![^>]*ld\+json)[^>]*>", s): bad.append(f"{p}: inline <script> (blocked by CSP)")
    if re.search(r"\sstyle=\"", s) or "<style" in s: bad.append(f"{p}: inline style (blocked by CSP)")
    if re.search(r"\son[a-z]+=\"", s): bad.append(f"{p}: inline event handler (blocked by CSP)")
    if "Content-Security-Policy" not in s: bad.append(f"{p}: CSP meta missing")
css = (root / "assets/css/app.css").read_text(encoding="utf-8")
for u in re.findall(r"url\(([^)]+)\)", css):
    u = u.strip("\"'")
    if not u.startswith("data:") and not (root / "assets/css" / u).resolve().exists(): bad.append(f"app.css: missing {u}")
for j in (root / "assets/js").glob("*.js"):
    r = subprocess.run(["node", "--check", str(j)], capture_output=True, text=True)
    if r.returncode: bad.append(f"{j.name}: {r.stderr.strip()[:200]}")
for im in root.glob("assets/img/og-*.jpg"):
    b = im.read_bytes(); i = 2; w = h = 0
    while i < len(b):
        if b[i] != 0xFF: break
        m = b[i + 1]
        if m in (0xC0, 0xC2): h, w = struct.unpack(">HH", b[i + 5:i + 9]); break
        i += 2 + struct.unpack(">H", b[i + 2:i + 4])[0]
    if (w, h) != (1200, 630): bad.append(f"{im.name}: {w}x{h}, expected 1200x630")
    if len(b) > 300_000: bad.append(f"{im.name}: {len(b)//1024} KB, keep under 300 KB for email clients")
print(f"{len(pages)} pages, {checked} references checked")
if bad: print("\n".join("FAIL " + x for x in bad)); sys.exit(1)
print("OK: references, JavaScript syntax and CSP rules all pass")

# Wael Halila — Portfolio

Live: https://halilaw.github.io/wael/ · Profile pages: `data.html`, `dotnet.html`, `devops.html` (share the one that matches the recruiter).

## Deploy (GitHub Pages)
1. Extract this zip over your repo folder (keep your own `.github/`, `LICENSE`, `.gitignore`; delete old files that are no longer listed).
2. `python scripts/make_pages.py` (optional: already run for this zip) regenerates the lens pages, sitemap, service-worker version and checksums.
3. Commit and push. On iPhone, clear Safari website data once (or open in a private tab) so the old cache isn't served.

## Layout
`index.html` is the template. `assets/css`, `assets/js` (`app.js` = content + UI, `fx.js` = GSAP / Three.js / Lenis effects), `assets/img` (avatar layers, icons, social image), `assets/cv`. `sw.js` = offline cache, `netlify.toml` / `vercel.json` / `_headers` = security headers, `404.html`.

## Avatar
`assets/img/av-body.webp` + `av-head.webp` are layers cut from your 3D avatar (head layer ends at the collar). The head follows the pointer, nods while the greeting plays, the eyes blink and a mouth overlay animates. No real photo is included.

## Phones
Horizontal overflow is clipped and horizontal panning is disabled (`touch-action: pan-y`), blur effects and heavy animations are off on touch devices, the 3D background renders at 1x and pauses while you scroll, and smooth-scroll, cursor, dock and the sideways project gallery are desktop-only. `prefers-reduced-motion` disables animation. Without internet the CDN effects (GSAP, Three.js, Lenis) are skipped and the page still works.

## Security
Strict CSP (scripts only from this site, cdnjs.cloudflare.com and cdn.jsdelivr.net), no cookies/analytics. Optionally add SRI hashes to the four CDN tags (https://www.srihash.org). `sha256sum -c SHA256SUMS.txt` verifies files.

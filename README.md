# Wael Halila · Portfolio 2026

Live: **https://halilaw.github.io/wael/** · Repo: https://github.com/Halilaw/wael

A static site (HTML, CSS, JavaScript). No framework, no build step, no trackers, no cookies, no third-party requests.
The hero is a scroll scene: as you scroll, the profile badge switches **Data → .NET → DevOps**, the whole page re-tints to that profile's colour, the hologram avatar re-scans, and the terminal retypes.

## Put it online (about 5 minutes)

Your repo already has an older version of the site with a different layout. Replace it completely so old files do not mix with the new ones.

**With git (recommended):**
```bash
unzip wael-halila-portfolio-2026.zip          # creates a folder named wael
git clone https://github.com/Halilaw/wael.git repo && cd repo
git rm -r -q .                                 # remove the old files (keeps history)
cp -R ../wael/. .                              # copy the new site, including hidden files
git add -A && git commit -m "Portfolio 2026" && git push
```

**Without git:** on github.com open the repo, delete the old files and folders (`style.css`, `fx.css`, `fx.js`, `script.js`, `index.html`, `img/`, `cv/`, `.htaccess`, `SHA256SUMS.txt`, old `_headers`, `robots.txt`), then **Add file → Upload files** and drag in everything from the unzipped `wael` folder, including the `assets`, `scripts`, `.github` and `.well-known` folders.

Then: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `(root)` → Save.**
Wait about a minute and open https://halilaw.github.io/wael/ (press Ctrl+F5 once to skip old cached files).

Prefer GitHub Actions? Set Source to **GitHub Actions** and add a repository variable `USE_ACTIONS` = `true` (Settings → Secrets and variables → Actions → Variables). The workflow always runs the quality checks; it deploys only when that variable is set.

## Links to send

Each profile has its own page and its own preview card (title, description and image) when pasted into email, LinkedIn, Slack, WhatsApp, Teams or iMessage:

| Send this to | Link |
|---|---|
| Anyone (scroll scene) | https://halilaw.github.io/wael/ |
| Data / BI recruiters | https://halilaw.github.io/wael/data.html |
| .NET / backend recruiters | https://halilaw.github.io/wael/dotnet.html |
| DevOps / platform recruiters | https://halilaw.github.io/wael/devops.html |

Profile pages open already set to that profile. The scroll scene is off there, because the visitor came for one role.
The **Share this portfolio** panel on the page builds these links, a QR code (put it on your printed CV), a ready-made email and a native share sheet, and offers a **Save contact** card (.vcf).

**Check a preview** before a big send: paste the link into the LinkedIn Post Inspector, opengraph.xyz or the Facebook Sharing Debugger. Platforms cache previews for days; to force a refresh, add `?v=2` to the link.
In email, the link becomes a clickable link in every client. Rich preview cards appear in chat and social apps and in some mail apps. Attach the matching CV PDF when it matters.

## Edit your content

- Text, skills, projects, certifications, contact details: **`assets/js/data.js`** (plain JavaScript lists, save and refresh).
- CV files: replace the PDFs in `assets/cv/` and keep the file names.
- Photos: `assets/img/` (`hero-*` is the cut-out avatar, `id-*` the badge photo).
- Hide your phone number: in `data.js` set `tel:[]`.
- After changing `data.js` or `index.html`, run `python3 scripts/build_variants.py` so the three profile pages stay in sync (CI checks this).
- After any change to files, edit `VERSION` in `sw.js` so returning visitors get the new files.

**Different address or custom domain** (Settings → Pages → Custom domain, then add a `CNAME` file with the domain):
```bash
sh scripts/configure-url.sh https://your-domain.tld
python3 scripts/build_variants.py
sh scripts/checksums.sh
```

## What is inside

| Feature | Notes |
|---|---|
| Boot sequence | A 1-second start-up screen on the first visit of each session (tap or press a key to skip; off with reduced motion and on profile links) |
| Scroll cue and section HUD | A "Scroll down to explore" pill that counts your profile steps, a side rail of section dots on desktop, and a live section and scroll-percentage readout |
| Scroll-driven profile switch | Pinned hero scene; the badge in the nav rolls between profiles; click a profile or the badge to jump |
| Command menu | `Ctrl+K` / `Cmd+K`: jump to sections, switch profile, download a CV, copy link, toggle theme, or ask a question (local search over the page) |
| Hologram avatar | AVIF with WebP fallback in 3 sizes, 3D tilt, scan sweep, glitch on profile change, "Hear intro" voice |
| Engineer ID card | Flip and tilt; changes with the profile |
| Skills table, radar, AI pipeline | Interactive, filtered by profile |
| Dark and light themes | Dark by default, remembered per visitor |
| Offline | Service worker caches the site after the first visit |
| Accessibility | Keyboard focus, skip link, `prefers-reduced-motion` turns off the scene, tilt, scan and background |
| Print | `Ctrl+P` gives a clean one-page-style printout |

## Devices and browsers

- **Layout**: tested from 320 px to 1920 px wide with no sideways scroll, including a small phone (iPhone SE size), common Android sizes, tablet, laptop and large monitor.
- **iPhone and iPad (Safari)**: safe-area insets for the notch and home bar, `svh` units with fallbacks, `-webkit-` prefixes, no blur or blend effects inside the 3D avatar (a known Safari problem), 16 px+ form text so Safari never zooms in, and a "Swipe up" cue instead of "Scroll". Add to Home Screen works with the included icons.
- **Android (Chrome, Samsung Internet)**: installable, maskable icon, lighter background animation on touch devices, respects Data Saver.
- **Mac and Windows**: the command menu shows `⌘ K` on Mac and `Ctrl K` elsewhere. Chrome, Edge, Firefox and Safari are supported.
- I could only run Chromium when building this, so please open the live site once on your iPhone and in Safari or Firefox and tell me if anything looks off.

## Security and privacy

- **Strict Content Security Policy** (meta tag): no inline scripts or styles, nothing loaded from other websites, no forms posting anywhere, no plugins. `scripts/verify.py` fails the build if inline code sneaks in.
- **No third-party requests**: fonts (Inter, subset) are hosted with the site. No analytics, cookies or trackers. The only thing stored in the browser is the theme choice.
- **Email address** is assembled by script, so it is not in the page source. This stops simple scrapers, not determined ones. The phone number is public by design; remove it as described above.
- **security.txt** in `.well-known/` and **SHA256SUMS.txt** (check with `sha256sum -c SHA256SUMS.txt`).
- **Limit of GitHub Pages**: it cannot send custom HTTP headers, so `frame-ancestors` / `X-Frame-Options` (anti-embedding) are not enforced there. For the full header set host on Cloudflare Pages or Netlify, which read the included `_headers` file. In Settings → Pages, keep **Enforce HTTPS** ticked.

## Project layout

```
index.html                 main page (scroll scene)
data.html dotnet.html devops.html   one page per profile, generated
assets/css/app.css         design system (one accent colour per profile)
assets/js/data.js          ALL your content
assets/js/app.js           behaviour   boot.js: theme before first paint   qr.js: QR codes
assets/fonts/ img/ cv/     fonts, images (AVIF/WebP, social previews), CV PDFs
assets/Wael_Halila.vcf     contact card
sw.js manifest.webmanifest offline + installable
404.html robots.txt sitemap.xml site.url .well-known/security.txt
scripts/                   build_variants.py, configure-url.sh, verify.py, checksums.sh
.github/workflows/pages.yml   quality checks (+ optional deploy)
_headers netlify.toml vercel.json   other free hosts
```

## Troubleshooting

- **The "Verify" check fails with "files are missing"** (or `FileNotFoundError: assets/css/app.css`): the `assets/` folder did not reach GitHub. The web uploader often skips folders. Use the git commands above, or GitHub Desktop, or upload each folder (`assets/css`, `assets/js`, `assets/fonts`, `assets/img`, `assets/cv`) separately. The check lists exactly which files are missing.

- **Blank page or 404**: Settings → Pages must show the branch `main` and folder `/ (root)`. File names are case-sensitive.
- **Old version still showing**: hard refresh (Ctrl+F5); bump `VERSION` in `sw.js`.
- **Preview card is wrong in LinkedIn or WhatsApp**: re-scrape with the inspector tools above, or add `?v=2`.
- **A browser looks plain**: the design uses modern CSS (`color-mix`, `@property`, view transitions). Current Chrome, Edge, Safari and Firefox are supported; older ones fall back to simpler styling.
- **Run it locally**: `python3 -m http.server 8000` in this folder, then open http://localhost:8000 (the service worker only runs on http/https).

## Licence

Code: MIT. Photos, CVs and written content: all rights reserved. Fonts: Inter, SIL Open Font License 1.1.

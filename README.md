# Wael Halila — Portfolio (GSAP · Three.js · Lenis edition)

Static site, no build step. Effects load from pinned CDN versions and degrade gracefully (offline = still a complete portfolio).

## Avatar
The hero character is an inline SVG (`index.html`, class `avatar-svg`): it blinks, follows the pointer, and talks with the greeting. The ID card shows the same avatar, with a button to switch to your photo (`img/id.webp`). To change hair, glasses or suit colors, edit the gradient stops and fills inside the SVG.

| Layer | Used for |
|---|---|
| GSAP 3.12.5 + ScrollTrigger | preloader, text reveals, scroll choreography, pinned horizontal gallery, dock magnification, magnetic buttons, cursor |
| Three.js r152 | interactive 3D core (Spline-style) + particle galaxy; pulses while the avatar talks |
| Lenis 1.3.17 | smooth scrolling synced with ScrollTrigger |
| Vanilla JS/CSS | spotlight cards, border beams, orbit chips, dot grid, meteors, lamp, sliding tab indicators, scramble text, local "Ask AI" retrieval |

Effect ideas are re-implemented from patterns popularised by React Bits, Magic UI, Aceternity UI, 21st.dev, Framer, Codrops and Spline demos; no third-party component code is copied. A real Spline scene needs your own exported scene URL and a CSP update.

## Publish
Netlify Drop (applies `_headers`), Cloudflare Pages, Apache (`.htaccess`) or GitHub Pages (meta CSP only).

## Edit
Content: top of `script.js`. Effects: `fx.js` / `fx.css`. CVs: `cv/`.

## Security
Strict CSP (scripts only from this site, cdnjs.cloudflare.com and cdn.jsdelivr.net), no cookies/analytics/network calls, `rel="noopener noreferrer"` on external links, assistant output via textContent. Optionally add SRI hashes to the four CDN tags (https://www.srihash.org). Verify with `sha256sum -c SHA256SUMS.txt`.

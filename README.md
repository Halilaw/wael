<div align="center">

# ⚡ WAEL HALILA · PORTFOLIO

### *A futuristic, self-contained portfolio built with GSAP · Three.js · Lenis*

[![Static](https://img.shields.io/badge/build-none-00e5a0?style=flat-square&logo=vercel&logoColor=white)](#)
[![GSAP](https://img.shields.io/badge/GSAP-3.12.5-88CE02?style=flat-square&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Three.js](https://img.shields.io/badge/Three.js-r152-000000?style=flat-square&logo=three.js&logoColor=white)](https://threejs.org/)
[![Lenis](https://img.shields.io/badge/Lenis-1.3.17-5a67e0?style=flat-square)](https://github.com/studio-freight/lenis)
[![CSP](https://img.shields.io/badge/CSP-strict-ff4d4d?style=flat-square)](#-security)
[![No tracking](https://img.shields.io/badge/tracking-zero-00e5a0?style=flat-square)](#-security)

**A static, zero-build, zero-network portfolio — engineered to feel alive.**

`preloader` · `3D core` · `particle galaxy` · `liquid smooth scroll` · `magnetic cursor` · `local AI search` · `animated SVG avatar`

</div>

---

## 🧭 What this is

A single-page portfolio for **Wael Halila** — Data · .NET · DevOps · AI Engineer (Tunis) — built as a **pure static site**: no bundler, no framework, no backend, no analytics, no cookies.

Every visual effect is **re-implemented from scratch in vanilla JS/CSS**, inspired by the best of the modern web (React Bits, Magic UI, Aceternity, 21st.dev, Framer, Codrops, Spline demos) — **no third-party component code is copied**.

> **Offline-first guarantee** — if every CDN fails, the page still renders as a complete, readable, fully navigable portfolio. Effects degrade gracefully; content never does.

---

## ✨ Feature highlights

<table>
<tr>
<td width="50%" valign="top">

### 🎭 The Avatar
An **inline SVG** (`#avatar`, class `.avatar-svg`) that:

- 👁️ **Blink** — random intervals, 120 ms
- 🖱️ **Follows the pointer** — head rotation + eye tracking
- 🗣️ **Talks** with the greeting — pulsing `.talk` class
- 🪪 Clones into the **ID card** (`#idp`) with a **photo switch** (`img/id.webp`)
- 🎨 **Fully restyleable** — edit gradient stops & fills inside the SVG

</td>
<td width="50%" valign="top">

### 🤖 Local "Ask AI"
A **retrieval assistant** over this page's own content:

- 🔍 TF-IDF token search across a built-in knowledge base
- 📚 Answers grounded in *your* portfolio (skills, projects, certs)
- 🔗 Deep-links to the relevant section
- 🛡️ **Zero network** — no API keys, no calls, no leaks
- ⌨️ `Ctrl/⌘ + K` to summon anywhere

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🧊 3D & Motion
- Three.js **wireframe core** + orbiting rings + particle galaxy
- **Reacts to the avatar** — pulses when it talks
- **Scroll-aware** — the scene recedes as you explore
- **Theme-reactive** — recolors live on light/dark toggle

</td>
<td width="50%" valign="top">

### 🖱️ Interaction layer
- **Magnetic cursor** ring + gold dot (Codrops style)
- **Magnified dock** (macOS-like) with section tracking
- **Spotlight cards** + animated **border beams**
- **Sliding tab indicators** (Framer-style layout)
- **Scramble text** on lens switch
- Click sparks · orbit chips · meteors · lamp

</td>
</tr>
</table>

---

## 🛠️ Stack

| Layer | Version | Powers |
|:--|:--|:--|
| **GSAP + ScrollTrigger** | `3.12.5` | preloader, text reveals, scroll choreography, pinned horizontal gallery, dock magnification, magnetic buttons, cursor |
| **Three.js** | `r152` | interactive 3D core (Spline-style) + particle galaxy |
| **Lenis** | `1.3.17` | smooth scrolling, synced with ScrollTrigger |
| **Vanilla JS / CSS** | — | spotlight cards, border beams, orbit chips, dot grid, meteors, lamp, sliding tabs, scramble text, local AI search |
| **SVG** | inline | hero avatar + ID card clone |
| **Web APIs** | — | `IntersectionObserver`, `SpeechSynthesis`, `dialog`, `localStorage`, `matchMedia` |

> 📦 **No build step.** Pinned CDN versions, SRI-ready, CSP-compliant.
> 🧩 **Effect ideas** are re-implemented from patterns popularised by *React Bits, Magic UI, Aceternity UI, 21st.dev, Framer, Codrops, Spline demos* — no third-party component code is copied.
> 🎨 A real Spline scene requires your own exported scene URL **and** a CSP update.

---

## 🚀 Quick start

```bash
# 1. Clone
git clone https://github.com/Halilaw/wael.github.io.git
cd wael.github.io

# 2. Serve (any static server works)
npx serve .
# or
python3 -m http.server 8000
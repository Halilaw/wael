# Wael Halila — Portfolio

Static, zero-build portfolio (HTML + CSS + JS, no framework). Data / .NET / DevOps lenses, AI × Ivanti HEAT section, skills table, "Ask AI" search (runs fully in the browser), three downloadable CVs, offline support (PWA).

## Publish for free on GitHub Pages (5 minutes)

1. Create a **public** repo on GitHub (e.g. `portfolio`, or `<username>.github.io` for a root URL).
2. Upload everything from this folder (drag & drop on github.com, or `git init && git add . && git commit -m "Initial portfolio" && git branch -M main && git remote add origin <repo-url> && git push -u origin main`).
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Open the **Actions** tab, wait for "Deploy portfolio to GitHub Pages" to turn green. Your site is at `https://<username>.github.io/<repo>/` (the workflow fills in canonical / social-preview URLs automatically).

Custom domain: Settings → Pages → Custom domain, then add a `CNAME` file containing the domain.

## Other free hosts

| Host | How |
|---|---|
| Cloudflare Pages | Connect repo, build command `sh scripts/configure-url.sh https://YOUR.pages.dev`, output dir `/` |
| Netlify | Drag the folder on app.netlify.com/drop, or connect repo (`netlify.toml` included) |
| Vercel | Import repo, framework "Other" (`vercel.json` included) |

If you don't use the GitHub workflow, run once before publishing: `sh scripts/configure-url.sh https://your-final-url`

## Edit content

All text lives at the top of the `<script>` in `index.html` (`LENS`, `EXP`, `AI`, `SKILLS`, `PROJECTS`, `CERTS`, `EDU`, `CFG`). Replace CVs in `assets/cv/` keeping file names. After changing assets, bump `VERSION` in `sw.js` so returning visitors get the update.

Tip for recruiters: share a lens-specific link, e.g. `https://…/?lens=dev` or `?lens=soft`.

## Notes
- Photo and CVs: all rights reserved. Code: MIT.
- Your phone number and email are public on the page. Remove `phone` from `CFG` in `index.html` if you prefer.
- Fonts load from Google Fonts. For a fully third-party-free site, self-host Inter Tight and Instrument Serif and update the CSP in `index.html`.

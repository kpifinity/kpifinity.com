# kpifinity.com

The KpiFinity website: a static site (HTML, CSS and a little JavaScript, no build step) served by GitHub Pages from the `main` branch, with the custom domain set in `CNAME`.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `consulting.html` | Consulting — Design & Delivery |
| `ai-data.html` | AI & Data |
| `aim.html` | AIM Partnerships (Advisor · Investor · Mentor) |
| `industries.html` | Industries |
| `insights.html` | Insights — The Emerging Edge |
| `about.html` | About & Leadership |
| `contact.html` | Contact (email only — hello@kpifinity.com) |
| `legal.html` | Privacy notice, terms of use, accessibility |
| `404.html` | Not-found page (served automatically by GitHub Pages) |

`capabilities.html`, `work.html`, `studio.html` and `firm.html` are redirects from the previous site so old links keep working.

## Assets

- `assets/css/site.css` — the whole design system, including the responsive (tablet/phone) layer.
- `assets/js/site.js` — mobile menu. `assets/js/aim.js` — the AIM role configurator.
- `assets/fonts/` — Newsreader, Hanken Grotesk and IBM Plex Mono, self-hosted (SIL Open Font License). The site makes no third-party requests, which keeps the privacy notice accurate: no analytics, no cookies, no forms.
- `assets/img/` — Kπ logo and favicon, social-share image, leadership portraits.

## Editing

The HTML files are the source of truth. Most content uses inline styles, so a copy or layout change is made directly in the page. Keep header and footer changes in sync across all pages.

## Preview locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000

## Publishing

Merging to `main` publishes to https://kpifinity.com within a minute or two. Pages settings: Source = Deploy from a branch, `main`, `/ (root)`; Enforce HTTPS on.

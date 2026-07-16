# Hesed

A private investment holding company — single-page static site.

## Stack
Next.js 16 + React 19 + TypeScript, static export, deployed to Cloudflare Pages.

## Dev
```bash
nvm use              # node 24
npm install
npm run dev          # http://localhost:3000
```

## Build (static export)
```bash
npm run build        # outputs ./out
npx serve out        # preview the static export
```

## Content edits
All copy lives in `lib/site-config.ts`. Edit there, commit, push — Cloudflare Pages rebuilds on push to `main`.

## Deploy
- GitHub: `https://github.com/shulmeister/hesed-holding`
- Cloudflare Pages: bound to that repo, build command `npm run build`, output `out`, Node 24.

## Domain
TBD — currently placeholder `https://hesed.com` in `lib/site-config.ts`.

## Deploy — Cloudflare Pages

This repo is bound to Cloudflare Pages. To finish the initial bind (one-time):

1. Log in to https://dash.cloudflare.com/ → Workers & Pages → Create application → Pages → Connect to Git.
2. Select the `shulmeister/hesed-holding` repo.
3. Project name: `hesed-holding`.
4. Build settings:
   - Framework preset: **None** (do not select Next.js; static export doesn't need it).
   - Build command: `npm run build`
   - Build output directory: `out`
   - Node version: 24 (set under "Environment variables (advanced)" → `NODE_VERSION` = `24`).
5. Save and Deploy. First deploy should be green.
6. On push to `main`, Cloudflare auto-rebuilds. PRs get preview URLs automatically.

### Custom domain

Once the deploy is green:

1. Pages project → Custom domains → Set up a custom domain → enter `hesed.com` (or whatever the final domain is).
2. If the domain is on Cloudflare DNS, it auto-configures. Otherwise, follow the CNAME instructions.
3. Update `lib/site-config.ts` `metadata.siteUrl` and `public/robots.txt` + `public/sitemap.xml` URLs to the final domain.

## Open items

- Domain: TBD — using `https://hesed.com` placeholder until confirmed.
- Real photo asset: drop the file at `public/images/photo-placeholder.jpg` (16:7, then re-apply grayscale in CSS).
- Lighthouse target: ≥ 95 desktop + mobile after first deploy.

## Local preview ports

When previewing the static export locally, **do not bind to ports that route production traffic through the portal tunnel / health-monitor**. Those are:

- **Avoid (production tunnel routes / health-monitor targets):** `8765, 8767, 8769, 8771, 3000, 3001, 3003, 3015, 3020, 3030, 3099`
- Binding locally to those ports (e.g. with `python -m http.server` or a stray dev process) makes the health-monitor poll a directory listing and trip a portal restart loop. A `python -m http.server` on 8765 caused a real incident; do not repeat it.

**Use vite's `4173+` range** for ad-hoc local previews — unambiguously outside the production set:

```bash
npx serve out -l 4173   # safe local preview
```

If you need `npm run dev`, run on a port not in the dangerous list (e.g. set `PORT=4174 npm run dev`).

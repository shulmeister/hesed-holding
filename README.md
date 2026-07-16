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

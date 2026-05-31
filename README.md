# Grevya Ecosystem — Demo Portal

A premium, enterprise-grade portal that serves as the single entry point for
every Grevya product. Clients, partners, investors, and employees can discover
and launch all Grevya platforms from one dashboard, with live applications
linked directly and future products showcased as part of the roadmap.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**,
and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## What's inside

| Route     | Description                                                        |
| --------- | ------------------------------------------------------------------ |
| `/`       | Landing + dashboard: hero, stats, product grid, quick launch, recent activity, solutions, roadmap, about, contact |
| `/admin`  | Manage product launch URLs and availability (persisted per-browser) |

### Features

- **Product dashboard** — every product as a launchable card with logo, category, status, description, and features. Active products open in a new tab; "Coming Soon" products are showcased as roadmap.
- **Search & category filtering** — live filtering by name, description, feature, category, or status.
- **Quick Launch + Recent Activity** — a dashboard band for jumping straight into live apps and tracking ecosystem updates.
- **Request Demo & Contact forms** — animated modals plus an inline contact form, with success states.
- **Admin page** — edit each product's launch URL and status; changes save instantly to `localStorage` and propagate across the portal.
- **Dark mode** — class-based toggle with no flash on load, persisted to `localStorage`.
- **Motion** — staggered hero entrance, floating brand shards, scroll-reveal sections, and card hover interactions via Framer Motion.
- **Responsive** — mobile nav drawer, single-column layouts, and bottom-sheet modals.

## Editing products

The source of truth is [`lib/products.ts`](lib/products.ts) — add, remove, or
edit products there (name, category, status, features, URL, brand accent).
Runtime URL/status overrides made on `/admin` live in `localStorage` via
[`lib/use-products.ts`](lib/use-products.ts).

### Live products

| Product             | URL                                      |
| ------------------- | ---------------------------------------- |
| Irookee               | https://irookee-phi.vercel.app/          |
| Internal Onboarding   | https://grevya-onboarding.vercel.app/    |
| Grevya Naturals       | https://grevyanaturals.vercel.app/       |
| Grevya Virtual Try-On | https://grevya-virtualtryon.vercel.app/  |

## Design system

- **Type** — Sora (display), Geist (body), Geist Mono (labels & stats)
- **Color** — a four-color brand system drawn from the Grevya logo (orange · amber · green · blue); each product category owns one accent. Tokens live in [`app/globals.css`](app/globals.css).

# Hasan Consulting Group — Portals

Single Next.js 14 app with two routes that share branding and design system:

- **`/`** — landing page with two cards
- **`/internal`** — sales rep field manual (Cold Prospect Conversion Playbook)
- **`/plan`** — client-facing presentation deck reps screen-share in meetings

Stack: Next.js 14 (App Router), TypeScript, Tailwind CSS, Plus Jakarta Sans. Airbnb-inspired design system (Rausch accent, modest type scale, hairline borders, pill CTAs).

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

## Deploy to Vercel

One project covers both routes:

1. https://vercel.com/new → Import the GitHub repo `AleemHaider/ricky-hassan`.
2. Project name: `hasan-consulting`.
3. Framework preset auto-detected as Next.js. Leave Root Directory as `./`.
4. No env vars required.
5. Deploy.

URLs:
- `https://hasan-consulting.vercel.app/` — landing
- `https://hasan-consulting.vercel.app/internal` — field manual
- `https://hasan-consulting.vercel.app/plan` — sample plan

(Optional) Settings → Domains → add a custom domain.

## Structure

```
app/
  layout.tsx              shared layout, fonts, metadata defaults
  globals.css             Airbnb design tokens
  page.tsx                landing
  internal/page.tsx       field manual (1300+ lines, 13 sections)
  plan/page.tsx           sample plan walkthrough
components/
  Wordmark.tsx            shared brand mark
  internal/               TopBar, Sidebar, SayThis, WhyItWorks, etc.
  client/                 TopNav, SectionAnchor, BigNumber, etc.
lib/
  sections.ts             internal table-of-contents data
  plan.ts                 client plan section index
```

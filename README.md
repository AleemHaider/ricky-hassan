# Hasan Consulting Group — Portals

Monorepo with two Next.js apps that share branding and design system:

- **`internal-portal/`** — sales rep field manual / cold-prospect playbook (port 3001 in dev)
- **`client-portal/`** — client-facing presentation deck reps screen-share in meetings (port 3002 in dev)

Stack: Next.js 14 (App Router), TypeScript, Tailwind CSS, Plus Jakarta Sans.

## Run locally

```bash
# install for each app
cd internal-portal && npm install
cd ../client-portal && npm install

# run (different ports — both can run concurrently)
cd internal-portal && npm run dev   # http://localhost:3001
cd client-portal  && npm run dev    # http://localhost:3002
```

## Deploy to Vercel

Each app is deployed as a **separate Vercel project** pointing to its subfolder.

For each portal:

1. New Project → import the GitHub repo `AleemHaider/ricky-hassan`.
2. **Root Directory** → `internal-portal` (or `client-portal` for the other project).
3. Framework preset is auto-detected as Next.js.
4. No env vars required.
5. Deploy.

Repeat for the second app. Optional: assign custom domains (e.g. `internal.hasan-consulting.com` and `plan.hasan-consulting.com`).

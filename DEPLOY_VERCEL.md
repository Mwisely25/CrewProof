# Vercel Static Launch Runbook

Last reconciled: 2026-06-26

Use this as the static launch path for the CrewProof prototype. Deploy from:

```text
/Users/cody/Documents/CrewProof
```

## Current Deploy Shape

Vercel builds the public package into `dist/` using:

```sh
npm run build
```

The build output includes:

```text
dist/index.html
dist/crew/
dist/crew811/
dist/claims/
dist/management/
dist/jobs/
dist/closeouts/
dist/reports/
dist/settings/
dist/closeout/
dist/billing/
dist/assets/
```

## Local Preflight

From the current repo:

```sh
cd /Users/cody/Documents/CrewProof
npm test
npm run serve:dist
```

Then visit `http://127.0.0.1:5189` and confirm:

- The CrewProof page loads from the built `dist/` output.
- `/crew` loads the telecom field map with job selector, proof pins, field sync, dropped notes, and closeout package actions.
- `/management` loads the owner/PM/billing command center with KPIs, operations map, billing recovery actions, claims exposure, reports, and closeout aging.
- `/closeout/JOB-1045` loads the package review engine.
- `/billing/JOB-1045` loads billing review.
- `/claims` loads the separate claims and damages map.
- `/crew811` loads the 811 ticket workspace.
- The route-map asset loads from `assets/crewproof-field-map.png`.
- No backend storage, payments, uploads, accounts, or live integrations are enabled.

## Git-Connected Vercel Deploy

1. Push this repo to the Git provider connected to Vercel.
2. In Vercel, create a new project from that repo.
3. Keep the detected framework as `Other` or static.
4. Confirm these project settings:

```text
Build Command: npm run build
Output Directory: dist
Install Command: default
```

The committed `vercel.json` also declares the build command and output directory.

## Vercel CLI Deploy

Install and authenticate the Vercel CLI if needed:

```sh
npm i -g vercel
vercel login
```

Deploy a preview:

```sh
cd /Users/cody/Documents/CrewProof
npm test
vercel
```

Deploy production:

```sh
vercel --prod
```

For a deterministic prebuilt deploy:

```sh
npm test
vercel build --prod
vercel deploy --prebuilt --prod
```

## DNS

In Vercel, add the selected production domain, such as:

```text
crewproof.com
www.crewproof.com
```

Use the DNS records Vercel provides for the selected project.

## Live Smoke Test

- Visit the Vercel production URL and the production domain after DNS is live.
- Confirm `/crew`, `/management`, `/claims`, `/crew811`, `/closeout/JOB-1045`, and `/billing/JOB-1045` render from static routes.
- Confirm field action buttons update selected asset proof, status, and package details locally.
- Confirm the management billing recovery and claims exposure cards render from the mock live field data.
- Confirm there is no claim of server-side submission, payment processing, uploads, accounts, or live integrations.

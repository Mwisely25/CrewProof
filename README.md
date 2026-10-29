# CrewProof Static Prototype

CrewProof is a static, dependency-light prototype for telecom field closeout, billing, claims, 811 tickets, and management review.

The prototype is built around the practical field loop:

- Map the work location.
- Assign the crew.
- Capture photos, GPS proof, notes, redlines, locate tickets, material counts, and bore logs.
- Show what is ready to bill, what is waiting on approval, what is missing proof, and what was rejected.
- Assemble closeout and billing review packets from the same field data.
- Separate claims/damage and 811 ticket workflows from the main production proof map.

## Current Shape

- `/crew` is the field working view with the telecom map, job selector, asset pins, proof photos, GPS proof, dropped notes/gigs, and closeout actions.
- `/management` is the owner/PM/billing command center with live KPIs, operations map, blocked revenue actions, claims exposure, reports, aging, and crew performance.
- `/closeout/:jobId` is the detailed closeout package review engine.
- `/billing/:jobId` is the billing review for ready lines, blocked lines, and payment holds.
- `/crew811` is the 811 ticket, locate, positive response, and renewal layer.
- `/claims` is the separate claims and damages map.
- `index.html` contains the static app shell and route views.
- `assets/styles.css` holds the CrewProof visual system.
- `assets/app.js` handles client routing, live mock field data, proof packages, billing summaries, reports, claims, and 811 actions.
- `scripts/generate-assets.mjs` creates generated map assets used by the prototype.
- `scripts/build-static.mjs` creates the public deploy output in `dist/`.
- `vercel.json` configures Vercel to build and ship `dist/`.
- `DEPLOY_HETZNER.md` and `DEPLOY_VERCEL.md` are static launch runbooks.
- `ONBOARDING.md` is the operator runbook for pilot setup, role walkthroughs, package checks, and readiness verification.

## Run Locally

Open `index.html` directly in a browser, or serve the folder with any static server:

```sh
python3 -m http.server 5188 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:5188`.

## Build Public Deploy Output

```sh
npm run build
```

The generated `dist/` directory is the public static deploy package. It includes `index.html` and `assets/`.

## Verify

Run the full static prototype check before handing off changes:

```sh
npm test
```

This runs JavaScript syntax checks, Crew811 logic checks, static build generation, surface-route smoke tests, and static lint.

For pilot onboarding readiness before Sunday, June 28, 2026, run:

```sh
npm run preflight:onboarding
```

This runs the full suite and prints the onboarding preflight summary for routes, seed jobs, runbooks, and package outputs.

## Onboarding

Before inviting pilot users, follow `ONBOARDING.md` and confirm `/onboarding` shows the required setup, system readiness, field data, billing rules, and go-live gates.

## Product Notes

This is a static prototype only. It does not submit forms to a backend, process payments, store customer data, authenticate users, upload evidence, or integrate with accounting, GIS, payments, lenders, insurers, or owner systems.

The next implementation step is an authenticated pilot workspace with real field feeds, file uploads, package export, and approval queues after privacy, retention, and security requirements are approved.

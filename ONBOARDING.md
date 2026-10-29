# CrewProof Onboarding Runbook

Use this runbook before inviting crews, PMs, billing users, owners, or claims/811 reviewers into a pilot workspace.

CrewProof is ready for onboarding only when the field map, closeout package, billing review, 811 layer, claims map, exports, and role routes all work from the same job data.

## 1. Confirm Roles

| Role | Default view | Purpose |
| --- | --- | --- |
| Crew / Foreman | `/crew/:jobId` | Capture photos, GPS proof, notes, gigs, redlines, and completion status on the map. |
| PM / Admin / Owner | `/management` | Review revenue, operations, job status, blocked dollars, closeout aging, and crew performance. |
| Billing | `/billing/:jobId` | Separate ready lines from blocked lines before sending invoice backup. |
| Closeout desk | `/closeout/:jobId` | Review documents, photos, locates, bore log, material count, approval trail, and package exports. |
| Locate reviewer | `/crew811` | Track 811 tickets, positive response, renewal risk, and locate holds. |
| Claims reviewer | `/claims` | Track damages, claim photos, linked 811 tickets, restoration status, and billing holds. |

## 2. Confirm Seed Data

Required pilot jobs:

- `JOB-1045` / Windstream / Pine Hill / Ready to Bill / Alpha Crew
- `JOB-1046` / Kinetic / Oak Ridge / Missing Proof / Bravo Crew
- `JOB-1047` / Spectrum / Cedar Park / Rejected / Charlie Crew
- `JOB-1048` / AT&T / Slaughter Ln / Ready to Bill / Delta Crew

Each onboarded job should have:

- Customer, issued-to party, billing recipient, project, site, address, and crew.
- Map assets for HH / SV / SC / UG work.
- Ready, waiting, missing, and rejected statuses represented in the data.
- Pinned proof photos and GPS evidence.
- Open issues that flow into closeout and billing review.

## 3. Confirm Role Invite Checklist

Before inviting users, confirm `/onboarding` shows the role invite checklist. Each role needs a route, a first task, and a verification item:

- Crew / Foreman: `/crew/:jobId`, proof capture and map asset selection.
- PM / Admin / Owner: `/management`, revenue, blockers, closeout aging, and operations map review.
- Billing: `/billing/:jobId`, ready lines, blocked lines, and invoice backup.
- Closeout desk: `/closeout/:jobId`, package documents, photos, locates, materials, bore log, and exports.
- Locate reviewer: `/crew811`, ticket status, positive response, and locate holds.
- Claims reviewer: `/claims`, damages, recovery status, linked 811, and billing holds.

## 4. Confirm Package Outputs

Before onboarding billing or owner reviewers, verify these controls exist and download or open as expected:

- Field snapshot JSON.
- Closeout package CSV.
- Print / Save PDF.
- Closeout email draft.
- Billing JSON.
- Ops JSON.
- 811 JSON.
- Claims JSON.
- Live share links for field, operations, 811, and claims layers.

## 5. Confirm Operational Routes

Run:

```sh
npm test
```

For the final onboarding preflight before Sunday, June 28, 2026, run:

```sh
npm run preflight:onboarding
```

The required passing checks are:

- JavaScript syntax check.
- Crew811 logic test.
- Static build.
- Static route smoke test.
- Local serve smoke test.
- Onboarding readiness test.
- Static surface test.
- Static lint.
- Onboarding preflight summary.

The route smoke test must confirm all built pages, internal links, and asset references. The onboarding readiness test must confirm the core views, package controls, custody helpers, seed jobs, and test wiring.

## 6. Pilot Walkthrough

Use this walkthrough with the first customer or internal reviewer:

1. Open `/onboarding` and confirm all readiness rows.
2. Open `/crew/JOB-1045` and select HH-1, SV-1, SV-2, SC-1, and UG-1 assets.
3. Drop a note and a gig pin on the crew map.
4. Open `/closeout/JOB-1045` and verify map sheet, photos, proof checklist, billing lines, documents, locates, material count, bore log, and blockers.
5. Download the closeout package CSV and snapshot JSON.
6. Open `/billing/JOB-1045` and confirm ready lines and blocked lines are separated.
7. Open `/crew811` and confirm locate tickets and holds.
8. Open `/claims` and confirm damage records are separate from production proof.
9. Open `/management` and confirm ready dollars, blocked revenue, claims exposure, closeout aging, and operations map.

## 7. Do Not Overclaim

This static prototype does not yet provide:

- Authentication or user permissions.
- Real uploads or permanent evidence storage.
- Real email sending.
- Payment processing.
- Accounting, GIS, owner, lender, insurer, or government integrations.
- Legal records retention or production audit controls.

For onboarding, describe exports and share links as prototype package outputs. Do not describe them as live third-party integrations.

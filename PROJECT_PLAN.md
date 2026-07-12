# CrewProof Project Plan

## North Star

Turn CrewProof into the global trust and transaction system for physical work.

CrewProof should evolve through four layers:

1. Field tool
2. System of record
3. Payment network
4. Industry data layer

The winning loop is:

```text
Map -> Assign -> Execute -> Prove -> Approve -> Pay -> Insure -> Analyze
```

## Wedge

Dominate underground telecom closeout and billing, where missing photos, mismatched redlines, stale locate tickets, bore log variance, material questions, and rejected packets delay payment.

The first product promise:

```text
Get field work approved and paid faster.
```

## Implemented Static Milestone

Goal: create a static CrewProof prototype that makes the strategy concrete.

Delivered:

- Crew View at `/crew` using the live telecom field map style, asset pins, GPS proof, proof photos, dropped notes/gigs, field sync, and closeout actions.
- Management View at `/management` with ready-to-bill, pending approval, blocked revenue, 30-day forecast, operations map, billing recovery actions, claims exposure, crew performance, closeout aging, and reports.
- Closeout package review at `/closeout/:jobId`.
- Billing review at `/billing/:jobId`.
- 811 ticket and locate workflow at `/crew811`.
- Separate claims and damage map at `/claims`.
- Live mock data for Windstream, Kinetic, Spectrum, and AT&T jobs.
- Static build output with routed pages under `dist/`.
- Static deployment runbooks.

## Core Product Primitives

- Project
- Work package
- Asset
- Location
- Crew
- Subcontractor
- Evidence requirement
- Evidence item
- Proof package
- Approval
- Exception
- Pay item
- Invoice line
- Payment event
- Compliance record
- Locate ticket
- Bore log
- Material ticket
- Claim / damage record

## Next Backlog

- Add authenticated pilot workspace for contractors, PMs, owners, billing, and admins.
- Replace mock field data with a live field feed and durable audit log.
- Add proof-package export to PDF, ZIP, CSV, and email draft attachments.
- Add role-based approval queues for contractor, prime, owner, inspector, AP, and claims desk.
- Add pay-item catalog, unit-price validation, material receiving, and blocked-dollars reporting.
- Add offline-first mobile capture for photos, GPS, redlines, notes, and locate proof.
- Add real 811 import, renewal, positive response, and ticket matching.
- Add claims/damage intake, recovery tracking, warranty tracking, and billing hold workflow.
- Add integration plans for GIS, accounting, ERP, storage, email, owner portals, and payment partners only after security review.

## Guardrails

- Do not drift into generic crew management.
- Every feature must strengthen proof, approval, payability, risk reduction, or verified work analytics.
- Treat the closeout package as the working record that gets a job approved and billed.
- Do not add live payments, financing, evidence uploads, or customer data storage without security and compliance review.

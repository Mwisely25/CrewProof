# GitHub Launch & Deployment Runbook

CrewProof uses **GitHub** (GitHub Actions CI + GitHub Pages static/share builds + local/Node full-stack server) rather than Hetzner.

## 1. Local Full-Stack Server

Run the full-stack server (with persistent store, role sessions, uploads, ZIP/CSV/JSON package exports, 811 current-status engine, CrewBox Drive, and Crew Chat):

```sh
cd /Users/cody/Documents/CrewProof
npm run build
npm start
```

Open `http://127.0.0.1:4173`:
- `/crew/JOB-1045` — Telecom field map, proof pins, GPS lock, photo upload, and closeout package actions
- `/closeout/JOB-1045` — Closeout package review, rate submission controls, calculation audit, and ZIP/CSV/JSON download
- `/billing/JOB-1045` — Ready vs. blocked billing line review
- `/workspaces` — Pilot workspaces, CrewBox Drive (folders, files, spreadsheets, keyword rules, approvals), and Crew Chat
- `/crew811` — 811 ticket tracker with `crewproof.tix811.current-status.2026-09` policy evaluation
- `/claims` — Separate claims & damages map and intake
- `/management` — Owner / PM / Billing command center
- `/clients` — Client directory with one-click job creation

## 2. GitHub Repository & GitHub Pages Deployment

The workflow at `.github/workflows/deploy-github-pages.yml` automatically runs `npm run preflight:onboarding` and deploys `dist/` to GitHub Pages on every push to `main`.

```sh
cd /Users/cody/Documents/CrewProof
git add -A
git commit -m "feat: full-stack CrewProof with GitHub Pages workflow"
git push -u origin main
```

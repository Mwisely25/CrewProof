# Hetzner Static Launch Runbook

Last reconciled: 2026-06-26

Use this to publish the static CrewProof prototype to a Hetzner-hosted web root.
Deploy from:

```text
/Users/cody/Documents/CrewProof
```

If server access, billing, or DNS is blocked, use `DEPLOY_VERCEL.md` as the hosted static fallback.

## Current Deploy Shape

Build and deploy only these public static files:

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

Do not upload `.git`, local docs, generation scripts, or development-only files.

## Preflight

From the current repo:

```sh
cd /Users/cody/Documents/CrewProof
npm test
npm run serve:dist
```

Then visit `http://127.0.0.1:5189` and confirm:

- `/crew` loads the telecom field map with job selector, proof pins, field sync, dropped notes, and closeout package actions.
- `/management` loads the owner/PM/billing command center with KPIs, operations map, billing recovery actions, claims exposure, reports, and closeout aging.
- `/closeout/JOB-1045` loads the package review engine.
- `/billing/JOB-1045` loads billing review.
- `/claims` loads the separate claims and damages map.
- `/crew811` loads the 811 ticket workspace.
- No backend storage, payments, uploads, accounts, or live integrations are enabled.

## Package Current Static Site

```sh
export LOCAL_SITE=/Users/cody/Documents/CrewProof
npm test
tar -czf /tmp/crewproof-current-static.tar.gz -C "$LOCAL_SITE/dist" .
```

## Upload

Set the target values:

```sh
export SERVER_USER=deploy
export SERVER_HOST=YOUR_HETZNER_HOST_OR_IP
export WEB_ROOT=/var/www/crewproof.com/html
```

Upload the package:

```sh
scp /tmp/crewproof-current-static.tar.gz "$SERVER_USER@$SERVER_HOST:/tmp/"
```

Install on the server:

```sh
ssh "$SERVER_USER@$SERVER_HOST" "sudo mkdir -p '$WEB_ROOT' && sudo tar -xzf /tmp/crewproof-current-static.tar.gz -C '$WEB_ROOT' && sudo chown -R www-data:www-data '$WEB_ROOT'"
```

## Nginx Shape

```nginx
server {
    listen 80;
    server_name crewproof.com www.crewproof.com;

    root /var/www/crewproof.com/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

After DNS points to the server, add TLS with the certificate tool already used on that server, such as Certbot if it is installed.

## DNS

- Point `crewproof.com` to the Hetzner IPv4 address with an `A` record.
- Add `AAAA` if the Hetzner host has IPv6.
- Point `www.crewproof.com` to the apex with `CNAME`, or use the same `A`/`AAAA` records.
- Add any verification `TXT` records required by the domain, hosting, or email provider.

## Live Smoke Test

- Visit the production URL.
- Confirm `/crew`, `/management`, `/claims`, `/crew811`, `/closeout/JOB-1045`, and `/billing/JOB-1045` render from static routes.
- Confirm the generated telecom field map asset loads.
- Confirm field action buttons update selected asset proof, status, and package details locally.
- Confirm the management billing recovery and claims exposure cards render from the mock live field data.
- Confirm there is no claim of server-side submission, payment processing, uploads, accounts, or live integrations.

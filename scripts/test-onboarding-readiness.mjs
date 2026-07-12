import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const html = readFileSync(join(root, "index.html"), "utf8");
const app = readFileSync(join(root, "assets/app.js"), "utf8");
const packageJson = readFileSync(join(root, "package.json"), "utf8");
const buildStatic = readFileSync(join(root, "scripts/build-static.mjs"), "utf8");
const routeSmoke = readFileSync(join(root, "scripts/test-static-routes.mjs"), "utf8");
const onboardingRunbook = readFileSync(join(root, "ONBOARDING.md"), "utf8");

function mustInclude(source, token, label = token) {
  assert.ok(source.includes(token), `Missing onboarding readiness item: ${label}`);
}

const requiredViews = [
  ["crew", "Crew View"],
  ["management", "Management"],
  ["onboarding", "Onboarding"],
  ["clients", "Clients"],
  ["workspaces", "Workspaces"],
  ["closeout", "Closeout Package"],
  ["billing", "Billing Review"],
  ["crew811", "Crew811"],
  ["claims", "Claims / Damage"],
  ["jobs", "Jobs"],
  ["reports", "Reports"],
  ["settings", "Settings"],
];

for (const [view, label] of requiredViews) {
  mustInclude(html, `data-view="${view}"`, label + " view");
  if (!["closeout", "billing"].includes(view)) {
    mustInclude(html, `data-route-link="/${view}"`, label + " nav route");
  }
}

for (const token of [
  "data-onboarding-steps",
  "data-onboarding-system-readiness",
  "data-onboarding-field-data",
  "data-onboarding-role-invites",
  "data-onboarding-billing-rules",
  "data-onboarding-gates",
  "data-onboarding-live-status",
  "data-onboarding-command",
  "LIVE PREFLIGHT STATUS",
  "Launch Checklist",
  "System Readiness",
  "Route smoke test coverage",
  "Role Invite Checklist",
  "data-onboarding-runbook",
  "data-client-total",
  "data-client-active",
  "data-client-list",
  "data-workspace-invite-form",
  "data-workspace-job-form",
  "data-workspace-proof-form",
  "ONBOARDING.md",
]) {
  mustInclude(html, token);
}

for (const token of [
  "data-share-link",
  "data-download-snapshot",
  "data-download-package-csv",
  "data-billing-snapshot",
  "data-download-ops-snapshot",
  "data-download-crew811-snapshot",
  "data-download-claims-snapshot",
  "data-copy-share",
  "data-copy-ops-share",
  "data-copy-crew811-share",
  "data-copy-claims-share",
]) {
  mustInclude(html, token, "share/export control " + token);
}

for (const token of [
  "function renderOnboarding",
  "function renderClients",
  "function renderWorkspaces",
  "function getClients",
  "function createPilotWorkspace",
  "function activateWorkspaceJob",
  "function uploadWorkspaceProof",
  "crewproof.clients.v1",
  "crewproof.workspaces.v1",
  "demo-seed",
  "function closeoutPackageCsv",
  "function fieldSnapshot",
  "function operationsSnapshot",
  "function billingSnapshot",
  "function crew811TicketSnapshot",
  "function claimsLayerSnapshot",
  "function evidenceCustodyPacket",
  "renderManagementTable(onboardingSystemReadiness",
  "renderManagementTable(onboardingRoleInvites",
  "Closeout exports",
  "Route smoke test",
  "Local serve smoke",
  "CrewProof live preflight",
  "Clients",
  "Ready for CrewProof live onboarding",
  "npm run preflight:onboarding",
]) {
  mustInclude(app, token);
}

for (const jobId of ["JOB-1045", "JOB-1046", "JOB-1047", "JOB-1048"]) {
  mustInclude(app, jobId, "seed job " + jobId);
  mustInclude(buildStatic, jobId, "built job route " + jobId);
}

for (const clientId of ["WINDSTREAM", "KINETIC", "SPECTRUM", "ATT"]) {
  mustInclude(app, `id: "${clientId}"`, "seed client " + clientId);
  mustInclude(buildStatic, clientId, "built client route " + clientId);
}

for (const token of [
  "npm run test:routes",
  "npm run test:serve",
  "npm run test:onboarding",
  "\"test:clients\": \"node scripts/test-clients.mjs\"",
  "\"test:serve\": \"node scripts/test-serve-smoke.mjs\"",
  "\"test:onboarding\": \"node scripts/test-onboarding-readiness.mjs\"",
  "\"preflight:onboarding\"",
  "\"preflight:onboarding\": \"npm test && node scripts/onboarding-preflight.mjs\"",
]) {
  mustInclude(packageJson, token, "test command " + token);
}

for (const token of [
  "internal route target",
  "asset references",
  "ONBOARDING.md",
  "Static route smoke tests passed",
]) {
  mustInclude(routeSmoke, token, "route smoke coverage " + token);
}

for (const token of [
  "CrewProof Onboarding Runbook",
  "Confirm Roles",
  "Confirm Seed Data",
  "Confirm Role Invite Checklist",
  "Confirm Package Outputs",
  "Confirm Operational Routes",
  "Pilot Walkthrough",
  "Do Not Overclaim",
]) {
  mustInclude(onboardingRunbook, token, "runbook section " + token);
}

for (const doc of ["README.md", "ONBOARDING.md", "DEPLOY_HETZNER.md", "DEPLOY_VERCEL.md"]) {
  mustInclude(buildStatic, doc, "static build document copy " + doc);
  assert.ok(existsSync(join(root, doc)), `Missing onboarding document: ${doc}`);
}

console.log("Onboarding readiness tests passed.");

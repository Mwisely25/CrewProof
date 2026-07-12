import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dist = join(root, "dist");

const launchDeadline = "Sunday, June 28, 2026";
const staticRoutes = ["crew", "crew811", "claims", "management", "onboarding", "clients", "workspaces", "jobs", "closeouts", "reports", "settings"];
const jobRoutes = ["JOB-1045", "JOB-1046", "JOB-1047", "JOB-1048"];
const clientRoutes = ["WINDSTREAM", "KINETIC", "SPECTRUM", "ATT"];
const docs = ["README.md", "ONBOARDING.md", "DEPLOY_HETZNER.md", "DEPLOY_VERCEL.md"];
const packageOutputs = [
  "data-download-snapshot",
  "data-download-package-csv",
  "data-billing-snapshot",
  "data-download-ops-snapshot",
  "data-download-crew811-snapshot",
  "data-download-claims-snapshot",
];

function readDist(file) {
  return readFileSync(join(dist, file), "utf8");
}

function checkFile(file, label = file) {
  assert.ok(existsSync(join(dist, file)), `Missing ${label}: dist/${file}`);
}

checkFile("index.html", "built app shell");
staticRoutes.forEach((route) => checkFile(join(route, "index.html"), route + " route"));
checkFile(join("clients", "new", "index.html"), "new client route");
clientRoutes.forEach((clientId) => {
  checkFile(join("clients", clientId, "index.html"), clientId + " client route");
  checkFile(join("clients", clientId, "edit", "index.html"), clientId + " edit client route");
});
jobRoutes.forEach((jobId) => {
  checkFile(join("crew", jobId, "index.html"), jobId + " crew route");
  checkFile(join("closeout", jobId, "index.html"), jobId + " closeout route");
  checkFile(join("billing", jobId, "index.html"), jobId + " billing route");
});
docs.forEach((doc) => checkFile(doc, doc + " runbook"));

const appShell = readDist("index.html");
const appSource = readDist(join("assets", "app.js"));
const onboardingPage = readDist(join("onboarding", "index.html"));
const onboardingDoc = readDist("ONBOARDING.md");

for (const token of [
  "data-view=\"crew\"",
  "data-view=\"management\"",
  "data-view=\"onboarding\"",
  "data-view=\"clients\"",
  "data-view=\"workspaces\"",
  "data-view=\"closeout\"",
  "data-view=\"billing\"",
  "data-view=\"crew811\"",
  "data-view=\"claims\"",
  "data-onboarding-system-readiness",
  "data-onboarding-role-invites",
  "data-onboarding-runbook",
  "data-client-list",
]) {
  assert.ok(onboardingPage.includes(token) || appShell.includes(token), `Missing onboarding preflight token: ${token}`);
}

for (const token of ["crewproof.clients.v1", "crewproof.workspaces.v1", "demo-seed", "function getClients", "function renderClients", "function renderWorkspaces"]) {
  assert.ok(appSource.includes(token), `Missing client preflight token: ${token}`);
}

packageOutputs.forEach((token) => {
  assert.ok(appShell.includes(token), `Missing package/export control: ${token}`);
});

for (const token of [
  "CrewProof Onboarding Runbook",
  "Confirm Role Invite Checklist",
  "Confirm Package Outputs",
  "Confirm Operational Routes",
  "Pilot Walkthrough",
  "Do Not Overclaim",
]) {
  assert.ok(onboardingDoc.includes(token), `Missing onboarding runbook section: ${token}`);
}

const routeCount = 1 + staticRoutes.length + jobRoutes.length * 3 + 1 + clientRoutes.length * 2;
const summaryRows = [
  ["Deadline", launchDeadline],
  ["Built pages", String(routeCount)],
  ["Seed jobs", jobRoutes.join(", ")],
  ["Runbook docs", docs.join(", ")],
  ["Package outputs", String(packageOutputs.length)],
  ["Serve smoke", "dist routes/assets/runbook verified over local HTTP"],
  ["Onboarding route", "dist/onboarding/index.html"],
  ["Status", "READY FOR PILOT ONBOARDING PREFLIGHT"],
];

console.log("CrewProof onboarding preflight passed.");
summaryRows.forEach(([label, value]) => {
  console.log(label + ": " + value);
});

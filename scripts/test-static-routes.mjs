import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dist = join(root, "dist");

const staticRoutes = ["crew", "crew811", "claims", "management", "onboarding", "clients", "workspaces", "jobs", "closeouts", "reports", "settings"];
const jobRoutes = ["JOB-1045", "JOB-1046", "JOB-1047", "JOB-1048"];
const clientRoutes = ["WINDSTREAM", "KINETIC", "SPECTRUM", "ATT"];
const expectedRouteFiles = [
  ["index.html", "CrewProof navigation"],
  ...staticRoutes.map((route) => [join(route, "index.html"), `data-view="${route}"`]),
  [join("clients", "new", "index.html"), "data-view=\"clients\""],
  ...clientRoutes.flatMap((clientId) => [
    [join("clients", clientId, "index.html"), "data-view=\"clients\""],
    [join("clients", clientId, "edit", "index.html"), "data-view=\"clients\""],
  ]),
  ...jobRoutes.flatMap((jobId) => [
    [join("crew", jobId, "index.html"), "data-view=\"crew\""],
    [join("closeout", jobId, "index.html"), "data-view=\"closeout\""],
    [join("billing", jobId, "index.html"), "data-view=\"billing\""],
  ]),
];
const expectedDocs = ["README.md", "ONBOARDING.md", "DEPLOY_HETZNER.md", "DEPLOY_VERCEL.md"];
const expectedRoutePaths = new Set(expectedRouteFiles.map(([file]) => file));
const expectedShareFiles = [
  ["share/index.html", "CrewProof shareable HTML builds"],
  ["share/crew.html", "content=\"/crew\""],
  ["share/crew811.html", "content=\"/crew811\""],
  ["share/claims.html", "content=\"/claims\""],
  ["share/management.html", "content=\"/management\""],
  ["share/onboarding.html", "content=\"/onboarding\""],
  ["share/clients.html", "content=\"/clients\""],
  ["share/workspaces.html", "content=\"/workspaces\""],
  ["share/jobs.html", "content=\"/jobs\""],
  ["share/closeouts.html", "content=\"/closeouts\""],
  ["share/reports.html", "content=\"/reports\""],
  ["share/settings.html", "content=\"/settings\""],
  ...jobRoutes.flatMap((jobId) => [
    ["share/crew-" + jobId + ".html", "content=\"/crew/" + jobId + "\""],
    ["share/closeout-" + jobId + ".html", "content=\"/closeout/" + jobId + "\""],
    ["share/billing-" + jobId + ".html", "content=\"/billing/" + jobId + "\""],
  ]),
];

function routeFileForPath(pathname) {
  const cleanPath = pathname.replace(/^\/+/, "").replace(/\/+$/, "");
  return cleanPath ? join(cleanPath, "index.html") : "index.html";
}

function normalizeAssetRef(ref) {
  return ref.split("?")[0].replace(/^\/+/, "");
}

for (const [file, expectedToken] of expectedRouteFiles) {
  const fullPath = join(dist, file);
  assert.ok(existsSync(fullPath), `Missing built route file: dist/${file}`);
  const source = readFileSync(fullPath, "utf8");
  assert.ok(source.includes("<base href=") || file === "index.html", `Missing base href in built route: dist/${file}`);
  assert.ok(source.includes("assets/styles.css"), `Missing stylesheet reference in built route: dist/${file}`);
  assert.ok(source.includes("assets/app.js"), `Missing app script reference in built route: dist/${file}`);
  assert.ok(source.includes(expectedToken), `Missing expected route token ${expectedToken} in dist/${file}`);
}

const indexSource = readFileSync(join(dist, "index.html"), "utf8");
const internalRoutes = [...indexSource.matchAll(/data-route-link="([^"]+)"/g)].map((match) => match[1]);
for (const route of internalRoutes) {
  const routeFile = routeFileForPath(route);
  assert.ok(expectedRoutePaths.has(routeFile), `Untracked internal route target: ${route}`);
  assert.ok(existsSync(join(dist, routeFile)), `Missing built internal route target: ${route} -> dist/${routeFile}`);
}

const assetRefs = [
  ...indexSource.matchAll(/\s(?:src|href)="(assets\/[^"?]+)(?:\?[^"]*)?"/g),
].map((match) => normalizeAssetRef(match[1]));
for (const assetRef of new Set(assetRefs)) {
  assert.ok(existsSync(join(dist, assetRef)), `Missing built asset reference: dist/${assetRef}`);
}

for (const doc of expectedDocs) {
  assert.ok(existsSync(join(dist, doc)), `Missing built runbook document: dist/${doc}`);
}

for (const [file, expectedToken] of expectedShareFiles) {
  const fullPath = join(dist, file);
  assert.ok(existsSync(fullPath), `Missing shareable HTML build: dist/${file}`);
  const source = readFileSync(fullPath, "utf8");
  assert.ok(source.includes(expectedToken), `Missing expected share route token ${expectedToken} in dist/${file}`);
  if (file !== "share/index.html") {
    assert.ok(source.includes("crewproof-share-route"), `Missing share route meta in dist/${file}`);
    assert.ok(source.includes("<base href=\"../\">"), `Missing share base href in dist/${file}`);
  }
}

console.log(
  "Static route smoke tests passed for "
    + expectedRouteFiles.length
    + " built pages, "
    + new Set(internalRoutes).size
    + " internal links, and "
    + new Set(assetRefs).size
    + " asset references plus "
    + expectedDocs.length
    + " runbook documents plus "
    + expectedShareFiles.length
    + " shareable HTML builds.",
);

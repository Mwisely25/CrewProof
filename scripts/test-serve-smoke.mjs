import assert from "node:assert/strict";
import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dist = join(root, "dist");

const contentTypes = {
  ".css": "text/css",
  ".html": "text/html",
  ".js": "text/javascript",
  ".json": "application/json",
  ".md": "text/markdown",
  ".png": "image/png",
};

function resolveRequestPath(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]).replace(/^\/+/, "");
  const candidate = normalize(join(dist, cleanPath || "index.html"));
  assert.ok(candidate.startsWith(dist), "Blocked path traversal request: " + urlPath);
  if (existsSync(candidate) && statSync(candidate).isDirectory()) return join(candidate, "index.html");
  if (existsSync(candidate)) return candidate;
  return join(dist, cleanPath, "index.html");
}

const server = createServer((request, response) => {
  try {
    const filePath = resolveRequestPath(request.url || "/");
    if (!existsSync(filePath)) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }
    response.writeHead(200, {
      "content-type": contentTypes[extname(filePath)] || "application/octet-stream",
    });
    createReadStream(filePath).pipe(response);
  } catch (error) {
    response.writeHead(500);
    response.end(String(error));
  }
});

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const { port } = server.address();
const baseUrl = `http://127.0.0.1:${port}`;

async function expectRoute(path, token) {
  const response = await fetch(baseUrl + path);
  assert.equal(response.status, 200, `Expected 200 for ${path}`);
  const body = await response.text();
  assert.ok(body.includes(token), `Expected ${path} to include ${token}`);
}

try {
  await expectRoute("/", "CrewProof | Live Telecom Field Package");
  await expectRoute("/onboarding/", "LIVE PREFLIGHT STATUS");
  await expectRoute("/clients/", "Client Directory");
  await expectRoute("/workspaces/", "Client Workspaces");
  await expectRoute("/clients/new/", "data-client-form");
  await expectRoute("/clients/WINDSTREAM/", "data-view=\"clients\"");
  await expectRoute("/clients/WINDSTREAM/edit/", "data-view=\"clients\"");
  await expectRoute("/crew/JOB-1045/", "data-view=\"crew\"");
  await expectRoute("/management/", "Management Command Center");
  await expectRoute("/closeout/JOB-1045/", "data-view=\"closeout\"");
  await expectRoute("/billing/JOB-1045/", "data-view=\"billing\"");
  await expectRoute("/crew811/", "LIVE 811 LAYER");
  await expectRoute("/claims/", "DAMAGE / CLAIMS MAP");
  await expectRoute("/assets/app.js?v=field-package1", "function renderWorkspaces");
  await expectRoute("/assets/styles.css?v=field-package1", ".workspace-grid");
  await expectRoute("/ONBOARDING.md", "CrewProof Onboarding Runbook");
  console.log("Serve smoke tests passed for CrewProof dist at " + baseUrl);
} finally {
  await new Promise((resolve) => server.close(resolve));
}

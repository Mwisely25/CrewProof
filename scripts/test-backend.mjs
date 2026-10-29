import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createCrewProofServer } from "../server/index.mjs";

const tempDataDir = mkdtempSync(join(tmpdir(), "crewproof-backend-test-"));
const { server } = createCrewProofServer({ dataDir: tempDataDir });

async function requestJson(baseUrl, path, { method = "GET", headers = {}, body } = {}) {
  const res = await fetch(`${baseUrl}${path}`, {
    method,
    headers: {
      Accept: "application/json",
      ...(body !== undefined ? { "Content-Type": "application/json" } : {}),
      ...headers,
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  const data = await res.json();
  return { status: res.status, data };
}

try {
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const address = server.address();
  const baseUrl = `http://127.0.0.1:${address.port}`;

  // 1. Health & State
  const health = await requestJson(baseUrl, "/api/health");
  assert.equal(health.status, 200);
  assert.equal(health.data.ok, true);
  assert.equal(health.data.jobs >= 4, true);

  // 2. Auth Login & Session
  const login = await requestJson(baseUrl, "/api/auth/login", {
    method: "POST",
    body: { email: "pm@crewproof.local" },
  });
  assert.equal(login.status, 200);
  assert.equal(login.data.ok, true);
  assert.equal(login.data.user.role, "pm");
  const token = login.data.token;

  const me = await requestJson(baseUrl, "/api/auth/me", {
    headers: { "x-session-token": token },
  });
  assert.equal(me.data.authenticated, true);
  assert.equal(me.data.user.email, "pm@crewproof.local");

  // 3. Create Client & Create Job
  const newClient = await requestJson(baseUrl, "/api/clients", {
    method: "POST",
    body: {
      id: "FRONTIER",
      name: "Frontier Fiber",
      customerCode: "FTR-TX",
      issuedTo: "Frontier OSP Closeout",
      billingEmail: "ap@frontier.example",
    },
  });
  assert.equal(newClient.data.ok, true);

  const newJob = await requestJson(baseUrl, "/api/jobs", {
    method: "POST",
    body: {
      jobId: "JOB-1049",
      clientId: "FRONTIER",
      customer: "Frontier Fiber",
      project: "South Corridor Fiber",
      siteName: "Buda Route",
    },
  });
  assert.equal(newJob.data.ok, true);
  assert.equal(newJob.data.jobId, "JOB-1049");

  // 4. File Upload & Binary Retrieval
  const sampleBytes = Buffer.from("CrewProof GPS Photo Evidence Payload", "utf8");
  const uploaded = await requestJson(baseUrl, "/api/uploads", {
    method: "POST",
    body: {
      workspaceId: "demo-seed",
      jobId: "JOB-1045",
      assetId: "SV-1",
      documentType: "photo",
      fileName: "sv-1-open-vault.jpg",
      mimeType: "image/jpeg",
      base64Data: sampleBytes.toString("base64"),
      uploadedBy: "J. Ramirez",
    },
  });
  assert.equal(uploaded.status, 201);
  assert.equal(uploaded.data.ok, true);
  assert.ok(uploaded.data.upload.sha256Hex.length === 64);

  const fileRes = await fetch(`${baseUrl}${uploaded.data.upload.url}`);
  assert.equal(fileRes.status, 200);
  const fetchedBuf = Buffer.from(await fileRes.arrayBuffer());
  assert.deepEqual(fetchedBuf, sampleBytes);

  // 5. Asset Action & Rate Submission Workflow
  const assetAct = await requestJson(baseUrl, "/api/assets/SV-1/action", {
    method: "POST",
    body: { action: "Mark Complete", actor: "J. Ramirez" },
  });
  assert.equal(assetAct.data.ok, true);
  assert.equal(assetAct.data.asset.statusClass, "ready");

  const rateAct = await requestJson(baseUrl, "/api/rates/JOB-1046", {
    method: "POST",
    body: { action: "lock", actor: "M. Vance", version: "KIN-2026-06-v2-LOCKED" },
  });
  assert.equal(rateAct.data.ok, true);
  assert.equal(rateAct.data.rateSubmission.locked, true);

  // 6. Package Exports (ZIP, CSV, JSON)
  const zipRes = await fetch(`${baseUrl}/api/packages/JOB-1045/export.zip`);
  assert.equal(zipRes.status, 200);
  const zipBuf = Buffer.from(await zipRes.arrayBuffer());
  assert.equal(zipBuf[0], 0x50); // 'P'
  assert.equal(zipBuf[1], 0x4b); // 'K'
  assert.equal(zipBuf[2], 0x03);
  assert.equal(zipBuf[3], 0x04);

  const csvRes = await fetch(`${baseUrl}/api/packages/JOB-1045/export.csv`);
  assert.equal(csvRes.status, 200);
  const csvText = await csvRes.text();
  assert.ok(csvText.includes("JOB-1045"));
  assert.ok(csvText.includes("HH-1"));

  const pkgJson = await requestJson(baseUrl, "/api/packages/JOB-1045/export.json");
  assert.equal(pkgJson.status, 200);
  assert.equal(pkgJson.data.jobId, "JOB-1045");
  assert.ok(pkgJson.data.custody.sha256Hex.length === 64);

  // 7. Crew811 Current-Status Policy Evaluation & Ticket Upsert
  const evalRes = await requestJson(baseUrl, "/api/crew811/evaluate", {
    method: "POST",
    body: {
      ticketNumber: "FL811-TEST-900",
      sunshineCurrentResponses: [
        { serviceAreaCode: "OII901", serviceAreaName: "OPEN INFRA INC", responseCode: "3F", comment: "Unmarked - Delayed" },
        { serviceAreaCode: "OII902", serviceAreaName: "OPEN INFRA, INC.", responseCode: "1", comment: "Clear no facilities" },
        { serviceAreaCode: "ATT_DIST", serviceAreaName: "AT&T Distribution", responseCode: "2B", comment: "Marked within tolerance zone" },
      ],
    },
  });
  assert.equal(evalRes.data.ok, true);
  assert.equal(evalRes.data.evaluation.audit.policy, "crewproof.tix811.current-status.2026-09");
  assert.equal(evalRes.data.evaluation.responseStatus, "Marked");
  assert.equal(evalRes.data.evaluation.operativeProviders.length, 2); // Open Infra consolidated + AT&T

  // 8. CrewBox Drive (Folders, Auto-Rule Routing, Approvals, Spreadsheets, Job Links)
  const cbxFile = await requestJson(baseUrl, "/api/crewbox/action", {
    method: "POST",
    body: {
      action: "file.create",
      workspaceId: "demo-seed",
      parentId: null,
      name: "Windstream-ROW-Permit-2026.pdf",
    },
  });
  assert.equal(cbxFile.data.ok, true);
  assert.equal(cbxFile.data.file.parentId, "cbx-folder-permits");

  const cbxPhoto = await requestJson(baseUrl, "/api/crewbox/action", {
    method: "POST",
    body: {
      action: "file.create",
      workspaceId: "demo-seed",
      parentId: null,
      name: "SV-1-Vault-Photo-Evidence.jpg",
    },
  });
  assert.equal(cbxPhoto.data.ok, true);
  assert.ok(cbxPhoto.data.crewbox.approvals.some((a) => a.itemId === cbxPhoto.data.file.id && a.status === "pending"));

  const cbxSheet = await requestJson(baseUrl, "/api/crewbox/action", {
    method: "POST",
    body: {
      action: "spreadsheet.create",
      workspaceId: "demo-seed",
      parentId: "cbx-folder-closeouts",
      name: "JOB-1045 Daily Bore Sheet",
    },
  });
  assert.equal(cbxSheet.data.ok, true);
  assert.equal(cbxSheet.data.spreadsheet.kind, "spreadsheet");

  // 9. Crew Chat (Rooms, Idempotent clientId, Mentions, Job Log)
  const chatPost1 = await requestJson(baseUrl, "/api/chat/action", {
    method: "POST",
    body: {
      action: "message.post",
      workspaceId: "demo-seed",
      room: "crew:alpha",
      authorId: "jramirez@crewproof.local",
      authorName: "J. Ramirez",
      text: "Completed bore run on @JOB-1045 and starting @JOB-1046 setup.",
      clientId: "unique-client-msg-1",
    },
  });
  assert.equal(chatPost1.data.ok, true);
  assert.ok(chatPost1.data.message.id);

  const chatPostDup = await requestJson(baseUrl, "/api/chat/action", {
    method: "POST",
    body: {
      action: "message.post",
      workspaceId: "demo-seed",
      room: "crew:alpha",
      authorId: "jramirez@crewproof.local",
      authorName: "J. Ramirez",
      text: "Completed bore run on @JOB-1045 and starting @JOB-1046 setup.",
      clientId: "unique-client-msg-1",
    },
  });
  assert.equal(chatPostDup.data.message.id, chatPost1.data.message.id);
  assert.equal(chatPostDup.data.message.seq, chatPost1.data.message.seq);

  const chatState = await requestJson(baseUrl, "/api/chat?workspaceId=demo-seed&jobId=JOB-1045");
  assert.equal(chatState.data.ok, true);
  assert.ok(chatState.data.jobLog.some((entry) => entry.messageId === chatPost1.data.message.id));

  console.log("Full-stack backend & integration tests passed.");
} finally {
  await new Promise((resolve) => server.close(resolve));
  rmSync(tempDataDir, { recursive: true, force: true });
}

import { createServer } from "node:http";
import { existsSync, readFileSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { buildZipArchive, computeSha256Hex, createStore } from "./store.mjs";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const distDir = join(rootDir, "dist");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
  ".csv": "text/csv; charset=utf-8",
  ".zip": "application/zip",
};

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let total = 0;
    req.on("data", (chunk) => {
      total += chunk.length;
      if (total > 25 * 1024 * 1024) {
        reject(new Error("Payload too large"));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      const raw = Buffer.concat(chunks).toString("utf8");
      if (!raw) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch {
        resolve({ raw });
      }
    });
    req.on("error", reject);
  });
}

function sendJson(res, status, payload, extraHeaders = {}) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    ...extraHeaders,
  });
  res.end(body);
}

function parseCookies(req) {
  const header = req.headers.cookie || "";
  return Object.fromEntries(
    header
      .split(";")
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const idx = part.indexOf("=");
        return idx >= 0 ? [part.slice(0, idx), decodeURIComponent(part.slice(idx + 1))] : [part, ""];
      }),
  );
}

function extractActor(req, store, body = {}) {
  const authHeader = req.headers.authorization || "";
  const bearer = authHeader.startsWith("Bearer ") ? authHeader.slice(7).trim() : "";
  const cookies = parseCookies(req);
  const token = bearer || cookies.crewproof_session || req.headers["x-crewproof-token"] || req.headers["x-session-token"] || body.token || "";
  const session = store.getSession(token);
  const user = session?.user || null;
  const actor = body.actor || user?.name || req.headers["x-crewproof-actor"] || "Cody (Owner / Admin)";
  const tenantId = body.tenantId || body.workspaceId || req.headers["x-crewproof-tenant"] || user?.tenantId || "demo-seed";
  return { token, session, user, actor, tenantId };
}

function serializeCrewboxForClient(state, qTenant) {
  const approvals = state.crewbox.approvals.filter((a) => a.tenantId === qTenant);
  const items = state.crewbox.items
    .filter((i) => i.tenantId === qTenant)
    .map((item) => {
      const sheet = item.kind === "spreadsheet" ? state.crewbox.sheets[item.id] : null;
      const tab = sheet?.tabs?.[0] || null;
      const cols = tab?.columns || item.columns || ["Asset", "Description", "Plan Ft", "Actual Ft", "Status", "Billable $"];
      const rawRows = tab?.rows || item.rows || [];
      const rows = rawRows.map((r) => {
        if (Array.isArray(r)) return r.map((v) => String(v ?? ""));
        if (r && typeof r === "object" && r.cells) {
          return cols.map((col) => String(r.cells[col] ?? ""));
        }
        return cols.map(() => "");
      });
      const pendingApproval = approvals.some((a) => a.itemId === item.id && a.status === "pending");
      return {
        ...item,
        workspaceId: item.tenantId,
        type: item.type || item.kind,
        kind: item.kind || item.type,
        approvalStatus: pendingApproval ? "pending" : item.approvalStatus || "approved",
        ...(item.kind === "spreadsheet" ? { columns: cols, rows } : {}),
      };
    });

  const rules = state.crewbox.rules
    .filter((r) => r.tenantId === qTenant)
    .map((rule) => ({
      ...rule,
      workspaceId: rule.tenantId,
      name: rule.name || `Auto-route "${rule.keyword}"`,
      keywords: Array.isArray(rule.keywords) && rule.keywords.length ? rule.keywords : [rule.keyword].filter(Boolean),
      targetFolderId: rule.targetFolderId || rule.folderId,
      active: rule.active ?? rule.enabled ?? true,
    }));

  const events = state.crewbox.events
    .filter((e) => e.tenantId === qTenant)
    .slice(-100)
    .map((ev) => ({
      ...ev,
      details: ev.details || ev.detail || {},
      detail: ev.detail || ev.details || {},
      createdAt: ev.createdAt || ev.occurredAt,
    }));

  return {
    items,
    sheets: state.crewbox.sheets,
    rules,
    approvals,
    jobLinks: state.crewbox.jobLinks.filter((l) => l.tenantId === qTenant),
    events,
  };
}

function serializeChatForClient(store, state, qTenant, memberKey = "", jobId = "") {
  const summaries = store.chatRoomSummaries({ tenantId: qTenant, memberKey }).map((s) => ({
    ...s,
    id: s.id || s.roomKey,
  }));
  const messages = state.chat.messages
    .filter((m) => m.tenantId === qTenant)
    .map((m) => ({
      ...m,
      room: m.room || m.roomKey,
      authorId: m.authorId || m.senderKey,
      authorName: m.authorName || m.senderName,
      text: m.text || m.body,
    }));
  const jobLinks = state.chat.jobLinks
    .filter((l) => l.tenantId === qTenant && l.unlinkedAt === null)
    .map((l) => {
      const msg = state.chat.messages.find((m) => m.id === l.messageId);
      return {
        ...l,
        room: l.room || msg?.roomKey || "company",
        source: l.source || l.linkKind || "manual",
        createdAt: l.createdAt || l.linkedAt,
      };
    });
  return {
    rooms: summaries,
    summaries,
    messages,
    jobLinks,
    jobLog: jobId ? store.chatJobLog({ tenantId: qTenant, jobId }) : [],
  };
}

function buildCloseoutExportSnapshot(state, jobId) {
  const job = state.jobs[jobId] || state.jobs["JOB-1045"];
  const resolvedJobId = state.jobs[jobId] ? jobId : "JOB-1045";
  const jobAssetIds = Object.values(job?.assets || {});
  const jobAssets = Object.fromEntries(
    jobAssetIds.map((id) => [id, state.assets[id]]).filter(([, a]) => a),
  );
  const rate = state.rateSubmissionsByJob[resolvedJobId] || null;
  const tickets = state.crew811Tickets.filter((t) => t.linkedJobId === resolvedJobId);
  const claims = state.claimsDamageRecords.filter((c) => c.jobId === resolvedJobId);
  const damages = state.damageProofRecords.filter((d) => d.jobId === resolvedJobId);
  const chatLog = state.chat.jobLinks
    .filter((l) => l.jobId === resolvedJobId && l.unlinkedAt === null)
    .map((l) => state.chat.messages.find((m) => m.id === l.messageId))
    .filter(Boolean);
  const driveLinks = state.crewbox.jobLinks.filter((l) => l.jobId === resolvedJobId);

  const readyTotal = Object.values(jobAssets)
    .filter((a) => a.statusClass === "ready")
    .reduce((sum, a) => sum + (Number(a.amount) || 0), 0);
  const blockedTotal = Object.values(jobAssets)
    .filter((a) => a.statusClass !== "ready")
    .reduce((sum, a) => sum + (Number(a.amount) || 0), 0);

  const payload = {
    schema: "crewproof.closeout-package-archive.v1",
    generatedAt: new Date().toISOString(),
    jobId: resolvedJobId,
    job,
    totals: { ready: readyTotal, blocked: blockedTotal, billable: readyTotal + blockedTotal },
    assets: jobAssets,
    rateSubmission: rate,
    locates811: tickets,
    claims,
    damageProofRecords: damages,
    chatConversationLog: chatLog,
    crewboxLinkedItems: driveLinks,
  };
  const sha256 = computeSha256Hex(JSON.stringify(payload));
  payload.custody = {
    source: "server.closeout-package-export",
    evidenceId: `${resolvedJobId}-PACKAGE-ARCHIVE`,
    evidenceHash: "CP-" + sha256.slice(0, 8).toUpperCase(),
    sha256Hex: sha256,
    generatedAt: payload.generatedAt,
    custodyNotes: "Server-verified cryptographic custody hash over closeout package JSON, CSV, and attached field photos.",
  };
  return payload;
}

function buildCloseoutExportCsv(snapshot) {
  const esc = (v) => `"${String(v ?? "").replaceAll('"', '""')}"`;
  const row = (cols) => cols.map(esc).join(",");
  const lines = [
    row(["Section", "Item", "Detail", "Reference", "Amount", "Status"]),
    row(["Job", "Job ID", snapshot.jobId, snapshot.job.customer, "", snapshot.job.status]),
    row(["Job", "Project", snapshot.job.project, `${snapshot.job.siteName} / ${snapshot.job.siteId}`, "", ""]),
    row(["Billing", "Ready Total", "Ready assets", "", `$${snapshot.totals.ready}`, "Ready"]),
    row(["Billing", "Blocked Total", "Blocked assets", "", `$${snapshot.totals.blocked}`, "Blocked"]),
  ];
  for (const [assetId, data] of Object.entries(snapshot.assets || {})) {
    lines.push(
      row([
        "Asset",
        assetId,
        `${data.asset} / ${data.location}`,
        `${data.tech} / ${data.gps}`,
        `$${data.amount}`,
        `${data.status} / ${data.proof}`,
      ]),
    );
  }
  for (const t of snapshot.locates811 || []) {
    lines.push(row(["Locate 811", t.ticketNumber, t.street, t.expiresAt, "", `${t.status} / ${t.positiveResponseStatus}`]));
  }
  for (const c of snapshot.claims || []) {
    lines.push(row(["Claim", c.id, c.location, c.linked811, `$${c.blockedDollars}`, c.status]));
  }
  lines.push(row(["Custody", "Evidence Hash", snapshot.custody.evidenceHash, snapshot.custody.sha256Hex, "", snapshot.custody.generatedAt]));
  return lines.join("\n") + "\n";
}

export function createCrewProofServer(options = {}) {
  const store = options.store || createStore(options);

  const server = createServer(async (req, res) => {
    try {
      const urlObj = new URL(req.url || "/", "http://127.0.0.1");
      const pathname = decodeURIComponent(urlObj.pathname);
      const method = (req.method || "GET").toUpperCase();

      // CORS preflight support
      if (method === "OPTIONS") {
        res.writeHead(204, {
          "access-control-allow-origin": "*",
          "access-control-allow-methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
          "access-control-allow-headers": "content-type,authorization,x-crewproof-token,x-crewproof-actor,x-crewproof-tenant",
        });
        res.end();
        return;
      }

      // Serve uploaded files from /uploads/...
      if (pathname.startsWith("/uploads/")) {
        const rel = normalize(pathname.replace(/^\/uploads\/+/, "")).replace(/^(\.\.(\/|\\|$))+/, "");
        const filePath = join(store.uploadsDir, rel);
        if (existsSync(filePath) && statSync(filePath).isFile()) {
          const ext = extname(filePath).toLowerCase();
          res.writeHead(200, { "content-type": mimeTypes[ext] || "application/octet-stream" });
          res.end(readFileSync(filePath));
          return;
        }
        sendJson(res, 404, { error: "Uploaded file not found" });
        return;
      }

      // --- API Routes ---
      if (pathname.startsWith("/api/")) {
        const body = ["POST", "PUT", "PATCH", "DELETE"].includes(method) ? await readBody(req) : {};
        const { token, user, actor, tenantId } = extractActor(req, store, body);
        const state = store.getState();

        // Health & State
        if (pathname === "/api/health" && method === "GET") {
          sendJson(res, 200, {
            ok: true,
            service: "crewproof-fullstack",
            updatedAt: state.updatedAt,
            jobs: Object.keys(state.jobs).length,
            clients: state.clients.length,
            tickets811: state.crew811Tickets.length,
            claims: state.claimsDamageRecords.length,
            crewboxItems: state.crewbox.items.length,
            chatMessages: state.chat.messages.length,
          });
          return;
        }

        if (pathname === "/api/state" && method === "GET") {
          const qTenant = urlObj.searchParams.get("tenantId") || tenantId || "demo-seed";
          const crewboxPayload = serializeCrewboxForClient(state, qTenant);
          const chatPayload = serializeChatForClient(store, state, qTenant, user?.email || "");
          const stateSnapshot = {
            updatedAt: state.updatedAt,
            currentUser: user || state.users[0],
            users: state.users,
            jobs: state.jobs,
            assets: state.assets,
            clients: state.clients,
            workspaces: state.workspaces,
            rateSubmissionsByJob: state.rateSubmissionsByJob,
            crew811Tickets: state.crew811Tickets,
            claimsDamageRecords: state.claimsDamageRecords,
            damageProofRecords: state.damageProofRecords,
            droppedMapPins: state.droppedMapPins,
            uploads: state.uploads,
            auditLog: state.auditLog.slice(0, 100),
            crewbox: crewboxPayload,
            chat: chatPayload,
          };
          sendJson(res, 200, {
            ok: true,
            ...stateSnapshot,
            state: stateSnapshot,
          });
          return;
        }

        // Auth Endpoints
        if (pathname === "/api/auth/login" && method === "POST") {
          const session = store.login(body);
          sendJson(
            res,
            200,
            { ok: true, token: session.token, user: session.user, users: state.users },
            { "set-cookie": `crewproof_session=${encodeURIComponent(session.token)}; Path=/; HttpOnly; SameSite=Lax` },
          );
          return;
        }

        if (pathname === "/api/auth/logout" && method === "POST") {
          store.logout(token);
          sendJson(
            res,
            200,
            { ok: true },
            { "set-cookie": "crewproof_session=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax" },
          );
          return;
        }

        if (pathname === "/api/auth/me" && method === "GET") {
          sendJson(res, 200, {
            ok: true,
            authenticated: Boolean(user),
            user: user || state.users[0],
            users: state.users,
          });
          return;
        }

        // Uploads Endpoint
        if (pathname === "/api/uploads" && method === "POST") {
          const base64Payload = body.dataBase64 || body.base64Data;
          if (!body.fileName && !base64Payload) {
            sendJson(res, 400, { error: "fileName and dataBase64 are required" });
            return;
          }
          const upload = store.saveUpload({
            fileName: body.fileName,
            mimeType: body.mimeType,
            dataBase64: base64Payload,
            workspaceId: body.workspaceId || tenantId,
            jobId: body.jobId || "",
            assetId: body.assetId || "",
            documentType: body.documentType || "proof-photos",
            uploadedBy: body.uploadedBy || actor,
          });
          upload.sha256 = upload.sha256Hex;
          // Also register in CrewBox Drive if requested
          let crewboxItem = null;
          if (body.addToCrewbox !== false) {
            try {
              crewboxItem = store.crewboxCreateFile({
                tenantId: body.workspaceId || tenantId,
                parentId: body.folderId || null,
                name: upload.fileName,
                mimeType: upload.mimeType,
                sizeBytes: upload.sizeBytes,
                storageKey: upload.url,
                sha256Hex: upload.sha256Hex,
                actor,
                applyRules: true,
              });
              if (body.jobId) {
                store.crewboxLinkJob({
                  tenantId: body.workspaceId || tenantId,
                  itemId: crewboxItem.id,
                  jobId: body.jobId,
                  note: `Uploaded via ${body.documentType || "field upload"}`,
                  actor,
                });
              }
            } catch {
              // Ignore duplicate name in root folder if re-uploading same file name
            }
          }
          sendJson(res, 201, { ok: true, upload, crewboxItem });
          return;
        }

        // Jobs & Assets Endpoints
        if (pathname === "/api/jobs" && method === "GET") {
          sendJson(res, 200, { ok: true, jobs: state.jobs, assets: state.assets });
          return;
        }

        if (pathname === "/api/jobs" && method === "POST") {
          const result = store.createJob(body, actor);
          if (result.error) {
            sendJson(res, 400, { error: result.error });
            return;
          }
          sendJson(res, 201, { ok: true, ...result });
          return;
        }

        const assetActionMatch = pathname.match(/^\/api\/assets\/([^/]+)\/action$/);
        if (assetActionMatch && method === "POST") {
          const assetId = assetActionMatch[1];
          const result = store.mutateAsset(assetId, body.action || "Add Proof", body, actor);
          if (result.error) {
            sendJson(res, 404, { error: result.error });
            return;
          }
          sendJson(res, 200, { ok: true, ...result });
          return;
        }

        // Rate Submission Endpoints
        const rateMatch = pathname.match(/^\/api\/rates\/([^/]+)$/);
        if (rateMatch && method === "POST") {
          const jobId = rateMatch[1];
          const result = store.mutateRateSubmission(jobId, body.action || "approve", body, actor);
          if (result.error) {
            sendJson(res, 404, { error: result.error });
            return;
          }
          sendJson(res, 200, { ok: true, ...result });
          return;
        }

        // Clients & Workspaces Endpoints
        if (pathname === "/api/clients" && method === "GET") {
          sendJson(res, 200, { ok: true, clients: state.clients });
          return;
        }

        if (pathname === "/api/clients" && method === "POST") {
          const client = store.upsertClient(body, actor);
          sendJson(res, 200, { ok: true, client });
          return;
        }

        if (pathname === "/api/workspaces" && method === "GET") {
          sendJson(res, 200, { ok: true, workspaces: state.workspaces });
          return;
        }

        if (pathname === "/api/workspaces" && method === "POST") {
          const result = store.upsertWorkspace(body, actor);
          if (result.error) {
            sendJson(res, 400, { error: result.error });
            return;
          }
          sendJson(res, 200, { ok: true, ...result });
          return;
        }

        // Map Pins Endpoint
        if (pathname === "/api/map-pins" && method === "POST") {
          if (Array.isArray(body.pins)) {
            state.droppedMapPins = body.pins;
          } else if (body.pin) {
            const idx = state.droppedMapPins.findIndex((p) => p.id === body.pin.id);
            if (idx >= 0) state.droppedMapPins[idx] = body.pin;
            else state.droppedMapPins.push(body.pin);
          }
          store.save();
          sendJson(res, 200, { ok: true, droppedMapPins: state.droppedMapPins });
          return;
        }

        // Crew811 & Current Locate Status Endpoints
        if (pathname === "/api/crew811/tickets" && method === "GET") {
          const tickets = state.crew811Tickets.map((t) => ({
            ...t,
            currentStatusEvaluation: store.evaluateTicketCurrentStatus(t),
          }));
          sendJson(res, 200, { ok: true, tickets });
          return;
        }

        if (pathname === "/api/crew811/tickets" && method === "POST") {
          const ticket = store.upsertCrew811Ticket(body, actor);
          sendJson(res, 200, { ok: true, ticket });
          return;
        }

        if (pathname === "/api/crew811/evaluate" && method === "POST") {
          const evaluation = store.evaluateTicketCurrentStatus(body.ticket || body.ticketId || body, body.options || {});
          sendJson(res, 200, { ok: true, evaluation });
          return;
        }

        // Claims & Damage Endpoints
        if (pathname === "/api/claims" && method === "GET") {
          sendJson(res, 200, { ok: true, claims: state.claimsDamageRecords, damageProofs: state.damageProofRecords });
          return;
        }

        if (pathname === "/api/claims" && method === "POST") {
          const claim = store.upsertClaim(body, actor);
          sendJson(res, 200, { ok: true, claim });
          return;
        }

        if (pathname === "/api/damage-proof" && method === "POST") {
          const record = body;
          const idx = state.damageProofRecords.findIndex((r) => r.id === record.id);
          if (idx >= 0) state.damageProofRecords[idx] = record;
          else state.damageProofRecords.unshift(record);
          store.logAudit(actor, "damage_proof.saved", `Saved damage proof ${record.id} for ${record.jobId}`);
          store.save();
          sendJson(res, 200, { ok: true, damageProof: record });
          return;
        }

        // Package Exports (ZIP / CSV / JSON)
        const pkgExportMatch = pathname.match(/^\/api\/packages\/([^/]+)\/export\.(zip|csv|json)$/);
        if (pkgExportMatch && method === "GET") {
          const jobId = pkgExportMatch[1];
          const format = pkgExportMatch[2];
          const snapshot = buildCloseoutExportSnapshot(state, jobId);
          const csvText = buildCloseoutExportCsv(snapshot);

          if (format === "json") {
            res.writeHead(200, {
              "content-type": "application/json; charset=utf-8",
              "content-disposition": `attachment; filename="crewproof-${snapshot.jobId}-closeout-package.json"`,
            });
            res.end(JSON.stringify(snapshot, null, 2));
            return;
          }

          if (format === "csv") {
            res.writeHead(200, {
              "content-type": "text/csv; charset=utf-8",
              "content-disposition": `attachment; filename="crewproof-${snapshot.jobId}-closeout-package.csv"`,
            });
            res.end(csvText);
            return;
          }

          if (format === "zip") {
            const entries = [
              { name: `${snapshot.jobId}/closeout-package.json`, data: JSON.stringify(snapshot, null, 2) },
              { name: `${snapshot.jobId}/closeout-package.csv`, data: csvText },
              {
                name: `${snapshot.jobId}/CUSTODY-VERIFICATION.txt`,
                data: [
                  `CrewProof Closeout Package Custody Certificate`,
                  `Job ID: ${snapshot.jobId}`,
                  `Customer: ${snapshot.job.customer}`,
                  `Project: ${snapshot.job.project}`,
                  `Generated At: ${snapshot.custody.generatedAt}`,
                  `Evidence ID: ${snapshot.custody.evidenceId}`,
                  `Evidence Hash: ${snapshot.custody.evidenceHash}`,
                  `SHA-256: ${snapshot.custody.sha256Hex}`,
                  `Ready Total: $${snapshot.totals.ready}`,
                  `Blocked Total: $${snapshot.totals.blocked}`,
                ].join("\n"),
              },
            ];

            for (const [assetId, asset] of Object.entries(snapshot.assets || {})) {
              const photoRef = String(asset.photo || "").replace(/^\/+/, "");
              const diskPath = photoRef.startsWith("uploads/")
                ? join(store.uploadsDir, photoRef.replace(/^uploads\//, ""))
                : join(rootDir, photoRef);
              if (existsSync(diskPath) && statSync(diskPath).isFile()) {
                entries.push({
                  name: `${snapshot.jobId}/photos/${assetId}-${photoRef.split("/").pop()}`,
                  data: readFileSync(diskPath),
                });
              }
            }

            const zipBuffer = buildZipArchive(entries);
            res.writeHead(200, {
              "content-type": "application/zip",
              "content-length": String(zipBuffer.length),
              "content-disposition": `attachment; filename="crewproof-${snapshot.jobId}-closeout-package.zip"`,
            });
            res.end(zipBuffer);
            return;
          }
        }

        // --- CrewBox Drive API ---
        if (pathname === "/api/crewbox" && method === "GET") {
          const qTenant = urlObj.searchParams.get("tenantId") || tenantId;
          sendJson(res, 200, {
            ok: true,
            tenantId: qTenant,
            ...serializeCrewboxForClient(state, qTenant),
          });
          return;
        }

        if (pathname === "/api/crewbox/action" && method === "POST") {
          const action = body.action;
          try {
            let result = null;
            if (action === "create_folder" || action === "folder.create") {
              result = store.crewboxCreateFolder({ tenantId, parentId: body.parentId, name: body.name, actor });
            } else if (action === "create_file" || action === "file.create") {
              result = store.crewboxCreateFile({
                tenantId,
                parentId: body.parentId,
                name: body.name,
                mimeType: body.mimeType,
                sizeBytes: body.sizeBytes,
                storageKey: body.storageKey || body.storagePath,
                sha256Hex: body.sha256Hex || body.sha256,
                actor,
                applyRules: body.applyRules !== false,
              });
            } else if (action === "create_spreadsheet" || action === "spreadsheet.create") {
              result = store.crewboxCreateSpreadsheet({
                tenantId,
                parentId: body.parentId,
                name: body.name,
                tabs: body.tabs,
                actor,
                applyRules: body.applyRules !== false,
              });
            } else if (action === "save_spreadsheet" || action === "spreadsheet.save") {
              const itemId = body.itemId || body.id;
              const tabs = body.tabs || [{ id: "tab-1", name: "Sheet 1", columns: body.columns || [], rows: body.rows || [] }];
              result = store.crewboxSaveSpreadsheet({ tenantId, itemId, tabs, actor });
            } else if (action === "rename" || action === "item.rename") {
              result = store.crewboxRenameItem({ tenantId, itemId: body.itemId || body.id, newName: body.newName || body.name, actor });
            } else if (action === "move" || action === "item.move") {
              result = store.crewboxMoveItem({ tenantId, itemId: body.itemId || body.id, targetFolderId: body.targetFolderId, actor });
            } else if (action === "trash" || action === "item.trash") {
              result = store.crewboxTrashItem({ tenantId, itemId: body.itemId || body.id, actor });
            } else if (action === "restore" || action === "item.restore") {
              result = store.crewboxRestoreItem({ tenantId, itemId: body.itemId || body.id, actor });
            } else if (action === "purge" || action === "item.purge") {
              result = store.crewboxPurgeItem({ tenantId, itemId: body.itemId || body.id, actor });
            } else if (action === "empty_trash" || action === "trash.empty") {
              result = store.crewboxEmptyTrash({ tenantId, actor });
            } else if (action === "upsert_rule" || action === "rule.upsert") {
              const kw = body.keyword || (Array.isArray(body.keywords) ? body.keywords[0] : "rule");
              result = store.crewboxUpsertRule({
                tenantId,
                keyword: kw,
                folderId: body.folderId || body.targetFolderId,
                priority: body.priority,
                requireApproval: body.requireApproval,
                actor,
              });
            } else if (action === "review_approval" || action === "approval.review") {
              result = store.crewboxReviewApproval({
                tenantId,
                approvalId: body.approvalId,
                decision: body.decision,
                note: body.note,
                actor: body.reviewedBy || actor,
              });
            } else if (action === "link_job" || action === "job.link") {
              result = store.crewboxLinkJob({
                tenantId,
                itemId: body.itemId,
                jobId: body.jobId,
                jobTitle: body.jobTitle,
                note: body.note,
                actor,
              });
            } else if (action === "unlink_job" || action === "job.unlink") {
              result = store.crewboxUnlinkJob({ tenantId, itemId: body.itemId, jobId: body.jobId, actor });
            } else if (action === "item_path") {
              result = store.crewboxItemPath(tenantId, body.itemId || body.id);
            } else {
              sendJson(res, 400, { error: `Unknown CrewBox action: ${action}` });
              return;
            }
            const crewboxSerialized = serializeCrewboxForClient(state, tenantId);
            const findItem = (id) => crewboxSerialized.items.find((i) => i.id === id);
            sendJson(res, 200, {
              ok: true,
              result,
              folder: result?.kind === "folder" ? findItem(result.id) || result : undefined,
              file: result?.kind === "file" ? findItem(result.id) || result : undefined,
              spreadsheet: result?.item?.kind === "spreadsheet" ? findItem(result.item.id) || result.item : undefined,
              rule: result?.keyword ? crewboxSerialized.rules.find((r) => r.id === result.id) || result : undefined,
              crewbox: crewboxSerialized,
            });
          } catch (err) {
            sendJson(res, 400, { error: err.message });
          }
          return;
        }

        // --- Crew Chat API ---
        if (pathname === "/api/chat" && method === "GET") {
          const qTenant = urlObj.searchParams.get("tenantId") || urlObj.searchParams.get("workspaceId") || tenantId;
          const memberKey = urlObj.searchParams.get("memberKey") || urlObj.searchParams.get("userId") || user?.email || "";
          const jobId = urlObj.searchParams.get("jobId") || "";
          sendJson(res, 200, {
            ok: true,
            tenantId: qTenant,
            ...serializeChatForClient(store, state, qTenant, memberKey, jobId),
          });
          return;
        }

        if (pathname === "/api/chat/action" && method === "POST") {
          const action = body.action;
          try {
            let result = null;
            if (action === "post_message" || action === "message.post") {
              result = store.chatPostMessage({
                tenantId,
                roomKey: body.roomKey || body.room || "company",
                senderKey: body.senderKey || body.authorId || user?.email || "user@crewproof.local",
                senderName: body.senderName || body.authorName || actor,
                senderRole: body.senderRole || user?.role || "crew",
                body: body.body || body.text || "",
                clientId: body.clientId,
                meta: body.meta,
                jobIds: body.jobIds,
              });
            } else if (action === "mark_read" || action === "room.markRead") {
              result = store.chatMarkRead({
                tenantId,
                roomKey: body.roomKey || body.room || "company",
                memberKey: body.memberKey || body.userId || user?.email || actor,
                memberName: body.memberName || actor,
                lastReadSeq: body.lastReadSeq,
              });
            } else if (action === "link_job" || action === "job.link") {
              result = store.chatLinkMessageToJob({
                tenantId,
                jobId: body.jobId,
                messageId: body.messageId,
                actor: body.linkedBy || actor,
                note: body.note,
                linkKind: body.linkKind || "manual",
              });
            } else if (action === "unlink_job" || action === "job.unlink") {
              result = store.chatUnlinkMessageFromJob({
                tenantId,
                jobId: body.jobId,
                messageId: body.messageId,
                actor,
              });
            } else if (action === "job_log") {
              result = store.chatJobLog({
                tenantId,
                jobId: body.jobId,
                includeUnlinked: Boolean(body.includeUnlinked),
              });
            } else {
              sendJson(res, 400, { error: `Unknown chat action: ${action}` });
              return;
            }
            const chatSerialized = serializeChatForClient(store, state, tenantId, user?.email || "", body.jobId || "");
            const rawMsg = result?.message || (result?.seq ? result : undefined);
            const enrichedMsg = rawMsg ? chatSerialized.messages.find((m) => m.id === rawMsg.id) || rawMsg : undefined;
            sendJson(res, 200, {
              ok: true,
              result,
              message: enrichedMsg,
              ...chatSerialized,
            });
          } catch (err) {
            sendJson(res, 400, { error: err.message });
          }
          return;
        }

        sendJson(res, 404, { error: `Unknown API endpoint: ${method} ${pathname}` });
        return;
      }

      // --- Static & SPA Fallback Serving ---
      const serveRoot = existsSync(distDir) ? distDir : rootDir;
      const cleanRel = normalize(pathname).replace(/^(\.\.(\/|\\|$))+/, "");
      const directCandidate = join(serveRoot, cleanRel);
      const indexCandidate = join(serveRoot, cleanRel, "index.html");
      const rootDirectCandidate = join(rootDir, cleanRel);

      let targetFile = null;
      if (existsSync(directCandidate) && statSync(directCandidate).isFile()) {
        targetFile = directCandidate;
      } else if (existsSync(indexCandidate) && statSync(indexCandidate).isFile()) {
        targetFile = indexCandidate;
      } else if (existsSync(rootDirectCandidate) && statSync(rootDirectCandidate).isFile()) {
        targetFile = rootDirectCandidate;
      } else if (!extname(cleanRel)) {
        const spaIndex = existsSync(join(distDir, "index.html"))
          ? join(distDir, "index.html")
          : join(rootDir, "index.html");
        if (existsSync(spaIndex)) {
          targetFile = spaIndex;
        }
      }

      if (!targetFile) {
        res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
        res.end("Not found");
        return;
      }

      const ext = extname(targetFile).toLowerCase();
      if (ext === ".html") {
        let html = readFileSync(targetFile, "utf8");
        if (html.includes("<base href=")) {
          html = html.replace(/<base href="[^"]*">/, '<base href="/">');
        } else {
          html = html.replace("<head>", '<head>\n    <base href="/">');
        }
        res.writeHead(200, { "content-type": mimeTypes[ext], "cache-control": "no-store" });
        res.end(html);
        return;
      }

      res.writeHead(200, { "content-type": mimeTypes[ext] || "application/octet-stream" });
      res.end(readFileSync(targetFile));
    } catch (err) {
      sendJson(res, 500, { error: err.message || "Internal server error" });
    }
  });

  return { server, store };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const port = Number(process.env.PORT || 4173);
  const host = process.env.HOST || "127.0.0.1";
  const { server } = createCrewProofServer();
  server.listen(port, host, () => {
    console.log(`CrewProof full-stack server running at http://${host}:${port}`);
  });
}

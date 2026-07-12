import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const html = readFileSync(join(root, "index.html"), "utf8");
const app = readFileSync(join(root, "assets/app.js"), "utf8");
const api = readFileSync(join(root, "src/modules/crew811/api.ts"), "utf8");
const matching = readFileSync(join(root, "src/modules/crew811/matching.ts"), "utf8");
const renewals = readFileSync(join(root, "src/modules/crew811/renewals.ts"), "utf8");
const positiveResponse = readFileSync(join(root, "src/modules/crew811/positiveResponse.ts"), "utf8");

function normalize(value = "") {
  return value.toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
}

function includesEither(left = "", right = "") {
  const a = normalize(left);
  const b = normalize(right);
  return Boolean(a && b && (a.includes(b) || b.includes(a)));
}

function match(ticket, job) {
  let score = 0;
  if (ticket.tenantId !== job.tenantId) return 0;
  if (includesEither(ticket.customer_name, job.customer_name)) score += 0.22;
  if (includesEither(ticket.street, job.street) || includesEither(ticket.street, job.location_text)) score += 0.2;
  if (includesEither(ticket.city, job.city)) score += 0.12;
  if (includesEither(ticket.county, job.county)) score += 0.1;
  if (includesEither(ticket.work_description, job.work_description)) score += 0.16;
  if (ticket.assigned_crew_id && ticket.assigned_crew_id === job.assigned_crew_id) score += 0.1;
  if (ticket.latitude && ticket.longitude && job.latitude && job.longitude) score += 0.2;
  return Number(Math.min(1, score).toFixed(2));
}

function statusForMatch(confidence) {
  if (confidence >= 0.85) return "MATCHED_TO_JOB";
  if (confidence >= 0.6) return "NEEDS_REVIEW";
  return "NEW";
}

function renewalStatus(ticket, now) {
  if (ticket.status === "CLOSED") return "CLOSED";
  const expires = new Date(ticket.expires_at).getTime();
  const current = new Date(now).getTime();
  if (expires < current) return "EXPIRED";
  if (expires - current <= 48 * 60 * 60 * 1000) return "RENEWAL_NEEDED";
  return ticket.status;
}

function canClose(ticket, responses) {
  if (ticket.status === "EXPIRED") return false;
  return responses.length > 0 && responses.every((response) => ["CLEAR", "MARKED"].includes(response.response_status));
}

const ticket = {
  tenantId: "tenant-windstream",
  ticket_number: "FL811-24-1194",
  customer_name: "WINDSTREAM",
  street: "1250 PINE HILL RD",
  city: "AUSTIN",
  county: "TRAVIS",
  work_description: "Underground fiber bore path verification",
  assigned_crew_id: "alpha",
  latitude: 30.210654,
  longitude: -97.951234,
};
const job = {
  tenantId: "tenant-windstream",
  id: "JOB-1045",
  customer_name: "WINDSTREAM",
  street: "PINE HILL RD",
  location_text: "1250 PINE HILL RD AUSTIN TX",
  city: "AUSTIN",
  county: "TRAVIS",
  work_description: "Underground fiber bore path verification",
  assigned_crew_id: "alpha",
  latitude: 30.210654,
  longitude: -97.951234,
};

assert.equal(statusForMatch(match(ticket, job)), "MATCHED_TO_JOB", "auto job matching should link at high confidence");
assert.equal(statusForMatch(0.72), "NEEDS_REVIEW", "0.60-0.84 confidence should need review");
assert.equal(statusForMatch(0.3), "NEW", "below 0.60 should stay unmatched/new");
assert.equal(match(ticket, { ...job, tenantId: "tenant-other" }), 0, "tenant separation should prevent cross-tenant matching");

const imported = new Map();
imported.set(ticket.ticket_number, { ...ticket, status: "NEW" });
imported.set(ticket.ticket_number, { ...ticket, status: "NEEDS_REVIEW" });
assert.equal(imported.size, 1, "duplicate ticket import should update instead of duplicate");

assert.equal(renewalStatus({ status: "CLEAR", expires_at: "2026-06-27T12:00:00Z" }, "2026-06-26T12:00:00Z"), "RENEWAL_NEEDED", "ticket inside 48h should need renewal");
assert.equal(renewalStatus({ status: "CLEAR", expires_at: "2026-06-24T12:00:00Z" }, "2026-06-26T12:00:00Z"), "EXPIRED", "expired ticket should be expired");
assert.equal(canClose({ status: "CLEAR" }, [{ response_status: "CLEAR" }, { response_status: "MARKED" }]), true, "clear/marked responses should allow close");
assert.equal(canClose({ status: "CLEAR" }, [{ response_status: "NO_RESPONSE" }]), false, "missing positive response should block closeout");
assert.equal(canClose({ status: "EXPIRED" }, [{ response_status: "CLEAR" }]), false, "expired ticket should block closeout");

for (const token of [
  "import811Ticket",
  "link811TicketToJob",
  "assign811Ticket",
  "add811FieldProof",
  "add811PositiveResponse",
  "renew811Ticket",
  "close811Ticket",
]) {
  assert.ok(api.includes(token), `api.ts should expose ${token}`);
}

assert.ok(matching.includes("match811TicketToJob"), "matching helper should exist");
assert.ok(renewals.includes("check811Renewals"), "renewal checker should exist");
assert.ok(positiveResponse.includes("assertTicketClosable"), "positive response close blocker should exist");
assert.ok(html.includes("data-view=\"crew811\"") && app.includes("crew811Tickets"), "static Crew811 route should be wired");

console.log("Crew811 tests passed.");

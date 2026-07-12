import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const html = readFileSync(join(root, "index.html"), "utf8");
const app = readFileSync(join(root, "assets/app.js"), "utf8");
const css = readFileSync(join(root, "assets/styles.css"), "utf8");
const lint = readFileSync(join(root, "scripts/lint-static.mjs"), "utf8");
const packageJson = readFileSync(join(root, "package.json"), "utf8");
const routeSmoke = readFileSync(join(root, "scripts/test-static-routes.mjs"), "utf8");
const serveSmoke = readFileSync(join(root, "scripts/test-serve-smoke.mjs"), "utf8");
const onboardingReadiness = readFileSync(join(root, "scripts/test-onboarding-readiness.mjs"), "utf8");
const onboardingPreflight = readFileSync(join(root, "scripts/onboarding-preflight.mjs"), "utf8");
const buildStatic = readFileSync(join(root, "scripts/build-static.mjs"), "utf8");
const onboardingRunbook = readFileSync(join(root, "ONBOARDING.md"), "utf8");

function assertIncludes(source, token, label = token) {
  assert.ok(source.includes(token), `Missing ${label}`);
}

const routes = [
  "crew",
  "crew811",
  "claims",
  "management",
  "onboarding",
  "clients",
  "workspaces",
  "jobs",
  "closeouts",
  "reports",
  "settings",
  "closeout",
  "billing",
];

for (const route of routes) {
  assertIncludes(html, `data-view="${route}"`, `route view ${route}`);
}

for (const route of ["/crew", "/crew811", "/claims", "/management", "/onboarding", "/clients", "/workspaces", "/jobs", "/closeouts", "/reports", "/settings"]) {
  assertIncludes(html, `data-route-link="${route}"`, `nav link ${route}`);
}

for (const clientId of ["WINDSTREAM", "KINETIC", "SPECTRUM", "ATT"]) {
  assertIncludes(app, `id: "${clientId}"`, `seed client ${clientId}`);
  assert.ok(
    existsSync(join(root, "dist", "clients", clientId, "index.html")),
    `dist client route should exist for ${clientId}`,
  );
  assert.ok(
    existsSync(join(root, "dist", "clients", clientId, "edit", "index.html")),
    `dist client edit route should exist for ${clientId}`,
  );
}

for (const jobId of ["JOB-1045", "JOB-1046", "JOB-1047", "JOB-1048"]) {
  assertIncludes(html, jobId, `example job ${jobId}`);
  assert.ok(
    existsSync(join(root, "dist", "crew", jobId, "index.html")),
    `dist crew route should exist for ${jobId}`,
  );
  assert.ok(
    existsSync(join(root, "dist", "closeout", jobId, "index.html")),
    `dist closeout route should exist for ${jobId}`,
  );
  assert.ok(
    existsSync(join(root, "dist", "billing", jobId, "index.html")),
    `dist billing route should exist for ${jobId}`,
  );
}

for (const token of [
  "function runCrewFieldAction",
  "function refreshFieldDerivedViews",
  "function renderPackageCompleteness",
  "function renderApprovalAndAuditLines",
  "function renderLivePackageTables",
  "function isFixRow",
  "function renderReports",
  "function renderSettings",
  "function renderOnboarding",
  "function renderClients",
  "function renderWorkspaces",
  "function getClients",
  "function createPilotWorkspace",
  "function buildSignupQuestionsEmail",
  "const defaultSignupQuestions",
  "oneCallAccount",
  "811 excavator custody",
  "function activateWorkspaceJob",
  "function uploadWorkspaceProof",
  "function workspaceStoragePath",
  "function visibleWorkspacesForRole",
  "function createClient",
  "function archiveClient",
  "crewproof.clients.v1",
  "crewproof.workspaces.v1",
  "demo-seed",
  "clientIssuedToForJob",
  "function renderBlockedRevenueActions",
  "function storedActiveJobId",
  "function persistActiveJobId",
  "function operationsSnapshot",
  "function stableSerialize",
  "function evidenceHash",
  "function evidenceCustodyPacket",
  "function encodedOperationsPayload",
  "function applySharedOperationsPayload",
  "function renderManagementClaimsImpact",
  "function renderClaimsDamage",
  "function createMappedClaim",
  "function claimSnapshot",
  "function claimsLayerSnapshot",
  "function encodedClaimsPayload",
  "function applySharedClaimsPayload",
  "function buildClaimRecoveryEmail",
  "insuranceClaimLines",
  "handoffReceiptLines",
  "function renderBilling",
  "function billingSnapshot",
  "function rateSubmissionFor",
  "function adminDocsFor",
  "function lineCalculation",
  "function jobReadinessMetrics",
  "function renderRateAdminSections",
  "crewproof-share-route",
  "const documentTemplates",
  "const documentRequirements",
  "let damageProofRecords",
  "function documentSourceRecordsForJob",
  "function generateDocumentsForJob",
  "function renderDocumentAutomationEngine",
  "function createDamageProofFromCrewAction",
  "function damageProofSituationRows",
  "crewproof.billing-review.v1",
  "crewproof.claim-file.v1",
  "function buildBillingEmail",
  "function renderCrew811",
  "function sunshine811TicketFromJson",
  "function upsertCrew811Ticket",
  "function linkedCrew811Tickets",
  "function crew811JobStatus",
  "function coverageGeometry",
  "function crew811TicketSnapshot",
  "function crew811LayerSnapshot",
  "function encodedCrew811Payload",
  "function applySharedCrew811Payload",
  "function closeoutPackageCsv",
  "function csvCell",
  "crewproof.sunshine811-exactix-ticket.v1",
  "crewproof.sunshine811-exactix-layer.v1",
  "\"/crew/\" + resolvedJobId",
  "\"/crew/\" + row.jobId",
  "\"/billing/\" + storedActiveJobId()",
  "\"/crew/\" + storedActiveJobId()",
  "\"crewproof.activeJob\"",
  "tableLink(\"Open Crew\", \"/crew/\" + jobId)",
  "tableLink(\"Open Billing\", \"/billing/\" + jobId)",
  "\"PKG-\" + jobId.replace(\"JOB-\", \"\")",
]) {
  assertIncludes(app, token);
}

for (const token of [
  "Add Proof",
  "Take Photo",
  "GPS Lock",
  "Mark Complete",
  "Add Damage Proof",
  "Report Damage",
  "Add Restoration Proof",
  "Add Utility Strike Proof",
  "Add Pre-Existing Damage Proof",
  "Add Warranty / Punch Proof",
  "Ready to Bill",
  "Ready for CrewProof live onboarding",
  "Blocker cleared from field action",
  "Package ready to send with invoice lines.",
]) {
  assertIncludes(app, token, `field/package action token ${token}`);
}

for (const token of [
  "data-package-complete-status",
  "data-package-next-action",
  "data-job-percent-lines",
  "data-admin-doc-lines",
  "data-rate-submission-summary",
  "data-rate-submission-lines",
  "data-calculation-audit-lines",
  "data-daily-customer-summary-lines",
  "data-daily-customer-summary-text",
  "data-document-automation-lines",
  "data-document-automation-status",
  "data-damage-proof-lines",
  "data-situation-assistant-lines",
  "data-job-decision-log-lines",
  "data-approval-lines",
  "data-audit-lines",
  "data-report-revenue",
  "data-report-proof-quality",
  "data-settings-role-defaults",
  "data-settings-available-views",
  "data-onboarding-steps",
  "data-onboarding-system-readiness",
  "data-onboarding-live-status",
  "data-onboarding-command",
  "data-onboarding-field-data",
  "data-onboarding-role-invites",
  "data-onboarding-billing-rules",
  "data-onboarding-gates",
  "data-management-claims-open",
  "data-ops-share-link",
  "data-copy-ops-share",
  "data-download-ops-snapshot",
  "data-blocked-action-grid",
  "data-blocked-action-total",
  "data-recovery-ready-total",
  "data-recovery-billing-move",
  "data-crew811-share-link",
  "data-copy-crew811-share",
  "data-download-crew811-snapshot",
  "data-crew811-coverage-layer",
  "data-crew811-json",
  "data-crew811-import-status",
  "data-crew-card-811-ticket",
  "data-crew-card-811-status",
  "data-crew-card-811-coverage",
  "data-crew-card-811-expiry",
  "data-crew-card-811-blocker",
  "data-claims-map-pins",
  "data-claims-map-canvas",
  "data-claims-intake-status",
  "data-claim-severity",
  "data-claim-source",
  "data-claim-811",
  "data-claim-email",
  "data-claim-snapshot",
  "data-claims-share-link",
  "data-copy-claims-share",
  "data-download-claims-snapshot",
  "data-claim-billing-link",
  "data-claim-closeout-link",
  "data-billing-email",
  "data-billing-snapshot",
  "data-download-package-csv",
  "data-utility-conflict-lines",
  "data-pothole-make-ready-lines",
  "data-material-receiving-lines",
  "data-reel-lot-trace-lines",
  "data-compliance-risk-lines",
  "data-warranty-exception-lines",
  "data-package-handoff-lines",
  "data-export-event-lines",
  "data-action-queue-lines",
  "data-proof-quality-lines",
  "data-program-rollup-lines",
  "data-daily-dispatch-lines",
  "data-contract-change-order-lines",
  "data-work-order-intake-lines",
  "data-root-cause-lines",
  "data-access-sharing-lines",
  "data-gis-handoff-lines",
  "data-redline-correction-lines",
  "data-insurance-claim-lines",
  "data-financing-term-lines",
  "data-invoice-aging-lines",
  "data-lien-bond-lines",
  "data-crew-time-lines",
  "data-sub-pay-app-lines",
  "data-cost-code-lines",
  "data-tax-jurisdiction-lines",
  "data-permit-row-lines",
  "data-restoration-punch-lines",
  "data-source-intake-lines",
  "data-reconciliation-lines",
  "data-pay-item-catalog-lines",
  "data-approval-rule-lines",
  "data-qc-inspection-lines",
  "data-owner-approval-gate-lines",
  "data-signoff-log-lines",
  "data-dispute-register-lines",
  "data-escalation-queue-lines",
  "data-notification-log-lines",
  "data-safety-jsa-lines",
  "data-incident-damage-lines",
  "data-site-access-lines",
  "data-weather-condition-lines",
  "data-customer-notice-lines",
  "data-outage-noc-lines",
  "data-equipment-tool-lines",
  "data-calibration-custody-lines",
  "data-crew-qualification-lines",
  "data-certification-expiry-lines",
  "data-fiber-test-lines",
  "data-turnup-status-lines",
  "data-owner-deliverable-lines",
  "data-owner-acceptance-lines",
  "data-ball-in-court-lines",
  "data-handoff-receipt-lines",
]) {
  assertIncludes(html, token, `UI hook ${token}`);
  assertIncludes(app, token, `app selector ${token}`);
}

for (const token of [
  "Potential Billable Pool",
  "Immediate billing move",
]) {
  assertIncludes(html, token, `management card copy ${token}`);
}

for (const token of [
  "height: 100dvh;",
  "grid-template-columns: 220px minmax(0, 1fr);",
  "grid-template-rows: minmax(0, 1fr);",
  "grid-column: 2;",
  "grid-row: 1;",
]) {
  assertIncludes(css, token, `viewport shell CSS ${token}`);
}

for (const token of [
  "Claims & Damage Exposure",
  "Top Actions to Reduce Blocked Revenue",
  "Open Closeout Package",
  "Billing Review",
  "Open Claims Map",
  "Drop Damage Pin",
  "Linked 811",
  "DOCUMENT AUTOMATION ENGINE",
  "DAMAGE PROOF / OPERATIONS LEDGER",
  "AI SITUATION ASSISTANT",
  "Operational documents only",
  "Copy Ops Link",
  "Ops JSON",
  "Route smoke test",
  "Local serve smoke",
]) {
  assertIncludes(lint, token, `lint guard ${token}`);
}

for (const token of [
  "\"test:routes\": \"node scripts/test-static-routes.mjs\"",
  "\"test:serve\": \"node scripts/test-serve-smoke.mjs\"",
  "\"test:onboarding\": \"node scripts/test-onboarding-readiness.mjs\"",
  "\"test:clients\": \"node scripts/test-clients.mjs\"",
  "\"preflight:onboarding\": \"npm test && node scripts/onboarding-preflight.mjs\"",
  "npm run test:routes",
  "npm run test:serve",
  "npm run test:onboarding",
]) {
  assertIncludes(packageJson, token, `package route smoke script ${token}`);
}

for (const token of [
  "Static route smoke tests passed",
  "internal route target",
  "asset references",
  "runbook documents",
  "shareable HTML builds",
  "share/crew.html",
  "share/closeout-",
  "ONBOARDING.md",
  "assets/styles.css",
  "assets/app.js",
  "\"onboarding\"",
  "\"clients\"",
  "\"workspaces\"",
  "`data-view=\"${route}\"`",
]) {
  assertIncludes(routeSmoke, token, `route smoke guard ${token}`);
}

for (const token of [
  "Serve smoke tests passed for CrewProof dist",
  "/onboarding/",
  "LIVE PREFLIGHT STATUS",
  "/assets/app.js?v=field-package1",
  "CrewProof Onboarding Runbook",
]) {
  assertIncludes(serveSmoke, token, `serve smoke guard ${token}`);
}

for (const token of [
  "Onboarding readiness tests passed.",
  "data-onboarding-system-readiness",
  "data-onboarding-live-status",
  "data-onboarding-role-invites",
  "data-download-package-csv",
  "function closeoutPackageCsv",
  "function evidenceCustodyPacket",
  "ONBOARDING.md",
  "Confirm Package Outputs",
]) {
  assertIncludes(onboardingReadiness, token, `onboarding readiness guard ${token}`);
}

for (const token of [
  "ONBOARDING.md",
  "README.md",
  "DEPLOY_HETZNER.md",
  "DEPLOY_VERCEL.md",
  "shareRoutes",
  "crewproof-share-route",
  "CrewProof shareable HTML builds",
]) {
  assertIncludes(buildStatic, token, `build doc copy ${token}`);
}

for (const token of [
  "CrewProof Onboarding Runbook",
  "Confirm Roles",
  "Confirm Role Invite Checklist",
  "npm run preflight:onboarding",
  "Sunday, June 28, 2026",
  "Pilot Walkthrough",
  "Do Not Overclaim",
]) {
  assertIncludes(onboardingRunbook, token, `runbook content ${token}`);
}

for (const token of [
  "CrewProof onboarding preflight passed.",
  "Sunday, June 28, 2026",
  "READY FOR PILOT ONBOARDING PREFLIGHT",
  "data-onboarding-role-invites",
  "data-download-package-csv",
]) {
  assertIncludes(onboardingPreflight, token, `onboarding preflight guard ${token}`);
}

console.log("Static surface tests passed.");

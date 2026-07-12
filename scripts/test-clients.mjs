import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const html = readFileSync(join(root, "index.html"), "utf8");
const app = readFileSync(join(root, "assets/app.js"), "utf8");
const buildStatic = readFileSync(join(root, "scripts/build-static.mjs"), "utf8");

function mustInclude(source, token, label) {
  assert.ok(source.includes(token), "Missing client management item: " + label);
}

[
  "data-view=\"clients\"",
  "data-route-link=\"/clients\"",
  "data-route-link=\"/clients/new\"",
  "data-route-link=\"/workspaces\"",
  "data-client-list",
  "data-client-form",
  "data-workspace-invite-form",
  "data-workspace-invite-field=\"oneCallProvider\"",
  "data-workspace-invite-field=\"oneCallCompanyId\"",
  "data-workspace-invite-field=\"oneCallExcavatorId\"",
  "data-workspace-invite-field=\"oneCallCompanyName\"",
  "data-workspace-invite-field=\"oneCallOfficeName\"",
  "data-workspace-invite-field=\"oneCallCompanyType\"",
  "data-workspace-invite-field=\"oneCallPhone\"",
  "data-workspace-invite-field=\"oneCallMobilePhone\"",
  "data-workspace-invite-field=\"oneCallEmail\"",
  "data-workspace-invite-field=\"oneCallCallBackTime\"",
  "data-workspace-invite-field=\"oneCallFieldContact\"",
  "data-workspace-invite-field=\"oneCallWorkingFor\"",
  "data-workspace-invite-field=\"oneCallWorkType\"",
  "data-workspace-invite-field=\"oneCallSubcontractors\"",
  "data-workspace-invite-field=\"oneCallNotes\"",
  "data-signup-questions",
  "data-send-signup-questions",
  "Open Signup Email",
  "data-workspace-job-form",
  "data-workspace-proof-form",
  "data-workspace-list",
  "data-workspace-documents",
  "data-workspace-security",
  "data-client-toggle-archive",
  "data-client-field=\"billingEmail\"",
  "data-client-field=\"issuedTo\"",
  "data-client-field=\"readyRule\"",
  "data-client-field=\"locateTicketRequired\"",
  "data-client-field=\"positiveResponseRequired\"",
].forEach((token) => mustInclude(html, token, token));

[
  "const CLIENT_STORAGE_KEY = \"crewproof.clients.v1\"",
  "const WORKSPACE_STORAGE_KEY = \"crewproof.workspaces.v1\"",
  "const DEMO_WORKSPACE_ID = \"demo-seed\"",
  "const WORKSPACE_TREE_ROOT = \"workspaces\"",
  "const seededClients",
  "id: \"WINDSTREAM\"",
  "id: \"KINETIC\"",
  "id: \"SPECTRUM\"",
  "id: \"ATT\"",
  "function getClients",
  "function createClient",
  "function updateClient",
  "function archiveClient",
  "function restoreClient",
  "function validateClientInput",
  "function seededWorkspace",
  "function createPilotWorkspace",
  "const defaultSignupQuestions",
  "function buildSignupQuestionsEmail",
  "function signupQuestionnaireText",
  "signup-questionnaire-prepared",
  "811-excavator-information-requested",
  "oneCallAccount",
  "811 excavator information on file",
  "811 excavator custody",
  "CrewProof signup questions",
  "function activateWorkspaceJob",
  "function uploadWorkspaceProof",
  "function workspaceStoragePath",
  "function workspaceRetrievalIndex",
  "function visibleWorkspacesForRole",
  "Duplicate active client",
  "demo-seed",
  "workspace.type !== \"demo\"",
  "Select a pilot workspace. Demo seed data cannot be changed from client onboarding.",
  "{workspaceId}/customers/{customerId}/projects/{projectId}/jobs/{jobId}/{documentType}/{fileName}",
  "window.localStorage?.setItem(CLIENT_STORAGE_KEY",
  "window.localStorage?.setItem(WORKSPACE_STORAGE_KEY",
  "clientIssuedToForJob",
  "clientBillingEmailForJob",
  "clientReadyRuleForJob",
  "renderClients(route)",
  "parts.view !== \"clients\"",
].forEach((token) => mustInclude(app, token, token));

[
  "\"clients\"",
  "\"workspaces\"",
  "\"WINDSTREAM\"",
  "\"KINETIC\"",
  "\"SPECTRUM\"",
  "\"ATT\"",
  "clients/new/index.html",
  "clients/\" + clientId + \"/index.html",
  "clients/\" + clientId + \"/edit/index.html",
].forEach((token) => mustInclude(buildStatic, token, token));

console.log("Client management static tests passed.");

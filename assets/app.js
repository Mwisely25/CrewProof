const assetMarkers = document.querySelectorAll("[data-asset]");
const photoPins = document.querySelectorAll("[data-photo-asset]");
const filterButtons = document.querySelectorAll("[data-filter]");
const toolbarStatus = document.querySelector("[data-selected-toolbar]");
const liveSource = document.querySelector("[data-live-source]");
const liveSyncFields = document.querySelectorAll("[data-live-sync]");
const selectedAsset = document.querySelector("[data-selected-asset]");
const selectedStatus = document.querySelector("[data-selected-status]");
const selectedCrew = document.querySelector("[data-selected-crew]");
const selectedDevice = document.querySelector("[data-selected-device]");
const selectedGps = document.querySelector("[data-selected-gps]");
const selectedProof = document.querySelector("[data-selected-proof]");
const selectedBlocker = document.querySelector("[data-selected-blocker]");
const selectedPayItem = document.querySelector("[data-selected-pay-item]");
const selectedMoneyLabel = document.querySelector("[data-selected-money-label]");
const selectedValue = document.querySelector("[data-selected-value]");
const selectedTech = document.querySelector("[data-selected-tech]");
const selectedContractor = document.querySelector("[data-selected-contractor]");
const selectedUpdated = document.querySelector("[data-selected-updated]");
const selectedFeed = document.querySelector("[data-selected-feed]");
const packageLocation = document.querySelector("[data-package-location]");
const packageProgress = document.querySelector("[data-package-progress]");
const packageUpdated = document.querySelector("[data-package-updated]");
const packageSource = document.querySelector("[data-package-source]");
const packageCompleteStatus = document.querySelector("[data-package-complete-status]");
const packageReadyCount = document.querySelector("[data-package-ready-count]");
const packageBlockedCount = document.querySelector("[data-package-blocked-count]");
const packageMissingCount = document.querySelector("[data-package-missing-count]");
const packageNextAction = document.querySelector("[data-package-next-action]");
const selectedProgress = document.querySelector("[data-selected-progress]");
const selectedPercent = document.querySelector("[data-selected-percent]");
const selectedProofList = document.querySelector("[data-selected-proof-list]");
const commsLog = document.querySelector("[data-comms-log]");
const statusDot = document.querySelector(".status-dot");
const jobIdField = document.querySelector("[data-job-id]");
const jobCustomer = document.querySelector("[data-job-customer]");
const jobIssuedTo = document.querySelector("[data-job-issued-to]");
const jobProject = document.querySelector("[data-job-project]");
const jobSiteId = document.querySelector("[data-job-site-id]");
const jobSiteName = document.querySelector("[data-job-site-name]");
const jobSiteType = document.querySelector("[data-job-site-type]");
const jobAddress = document.querySelector("[data-job-address]");
const jobCounty = document.querySelector("[data-job-county]");
const jobMapDate = document.querySelector("[data-job-map-date]");
const jobDrawnBy = document.querySelector("[data-job-drawn-by]");
const titleJobId = document.querySelector("[data-title-job-id]");
const jobPickerStatus = document.querySelector("[data-job-picker-status]");
const mapCanvas = document.querySelector(".map-canvas");
const selectedPhoto = document.querySelector("[data-selected-photo]");
const selectedPhotoCaption = document.querySelector("[data-selected-photo-caption]");

const auditForm = document.querySelector("[data-audit-form]");
const auditStatus = document.querySelector("[data-audit-status]");
const invoiceForm = document.querySelector("[data-invoice-form]");
const invoiceStatus = document.querySelector("[data-invoice-status]");
const invoiceLines = document.querySelector("[data-invoice-lines]");
const documentLines = document.querySelector("[data-doc-lines]");
const assetSummaryLines = document.querySelector("[data-asset-summary-lines]");
const boreLogLines = document.querySelector("[data-bore-log-lines]");
const materialCountLines = document.querySelector("[data-material-count-lines]");
const utilitySummaryLines = document.querySelector("[data-utility-summary-lines]");
const beforeAfterLines = document.querySelector("[data-before-after-lines]");
const locateTicketLines = document.querySelector("[data-locate-ticket-lines]");
const jobPercentLines = document.querySelector("[data-job-percent-lines]");
const adminDocLines = document.querySelector("[data-admin-doc-lines]");
const rateSubmissionSummary = document.querySelector("[data-rate-submission-summary]");
const rateSubmissionLines = document.querySelector("[data-rate-submission-lines]");
const calculationAuditLines = document.querySelector("[data-calculation-audit-lines]");
const dailyCustomerSummaryLines = document.querySelector("[data-daily-customer-summary-lines]");
const dailyCustomerSummaryText = document.querySelector("[data-daily-customer-summary-text]");
const documentAutomationLines = document.querySelector("[data-document-automation-lines]");
const documentAutomationStatus = document.querySelector("[data-document-automation-status]");
const damageProofLines = document.querySelector("[data-damage-proof-lines]");
const situationAssistantLines = document.querySelector("[data-situation-assistant-lines]");
const jobDecisionLogLines = document.querySelector("[data-job-decision-log-lines]");
const approvalLinesBody = document.querySelector("[data-approval-lines]");
const auditLinesBody = document.querySelector("[data-audit-lines]");
const utilityConflictLines = document.querySelector("[data-utility-conflict-lines]");
const potholeMakeReadyLines = document.querySelector("[data-pothole-make-ready-lines]");
const materialReceivingLines = document.querySelector("[data-material-receiving-lines]");
const reelLotTraceLines = document.querySelector("[data-reel-lot-trace-lines]");
const complianceRiskLines = document.querySelector("[data-compliance-risk-lines]");
const warrantyExceptionLines = document.querySelector("[data-warranty-exception-lines]");
const packageHandoffLines = document.querySelector("[data-package-handoff-lines]");
const exportEventLines = document.querySelector("[data-export-event-lines]");
const actionQueueLines = document.querySelector("[data-action-queue-lines]");
const proofQualityLines = document.querySelector("[data-proof-quality-lines]");
const programRollupLines = document.querySelector("[data-program-rollup-lines]");
const dailyDispatchLines = document.querySelector("[data-daily-dispatch-lines]");
const contractChangeOrderLines = document.querySelector("[data-contract-change-order-lines]");
const retainageWaiverLines = document.querySelector("[data-retainage-waiver-lines]");
const workOrderIntakeLines = document.querySelector("[data-work-order-intake-lines]");
const ownerPrereqLines = document.querySelector("[data-owner-prereq-lines]");
const rootCauseLines = document.querySelector("[data-root-cause-lines]");
const cashForecastLines = document.querySelector("[data-cash-forecast-lines]");
const accessSharingLines = document.querySelector("[data-access-sharing-lines]");
const signatureTamperLines = document.querySelector("[data-signature-tamper-lines]");
const offlineSyncLines = document.querySelector("[data-offline-sync-lines]");
const retentionDeviceLines = document.querySelector("[data-retention-device-lines]");
const gisHandoffLines = document.querySelector("[data-gis-handoff-lines]");
const assetRegistryLines = document.querySelector("[data-asset-registry-lines]");
const redlineCorrectionLines = document.querySelector("[data-redline-correction-lines]");
const asbuiltVarianceLines = document.querySelector("[data-asbuilt-variance-lines]");
const insuranceClaimLines = document.querySelector("[data-insurance-claim-lines]");
const financingTermLines = document.querySelector("[data-financing-term-lines]");
const invoiceAgingLines = document.querySelector("[data-invoice-aging-lines]");
const lienBondLines = document.querySelector("[data-lien-bond-lines]");
const crewTimeLines = document.querySelector("[data-crew-time-lines]");
const subPayAppLines = document.querySelector("[data-sub-pay-app-lines]");
const costCodeLines = document.querySelector("[data-cost-code-lines]");
const taxJurisdictionLines = document.querySelector("[data-tax-jurisdiction-lines]");
const permitRowLines = document.querySelector("[data-permit-row-lines]");
const restorationPunchLines = document.querySelector("[data-restoration-punch-lines]");
const sourceIntakeLines = document.querySelector("[data-source-intake-lines]");
const reconciliationLines = document.querySelector("[data-reconciliation-lines]");
const payItemCatalogLines = document.querySelector("[data-pay-item-catalog-lines]");
const approvalRuleLines = document.querySelector("[data-approval-rule-lines]");
const qcInspectionLines = document.querySelector("[data-qc-inspection-lines]");
const ownerApprovalGateLines = document.querySelector("[data-owner-approval-gate-lines]");
const signoffLogLines = document.querySelector("[data-signoff-log-lines]");
const disputeRegisterLines = document.querySelector("[data-dispute-register-lines]");
const escalationQueueLines = document.querySelector("[data-escalation-queue-lines]");
const notificationLogLines = document.querySelector("[data-notification-log-lines]");
const safetyJsaLines = document.querySelector("[data-safety-jsa-lines]");
const incidentDamageLines = document.querySelector("[data-incident-damage-lines]");
const siteAccessLines = document.querySelector("[data-site-access-lines]");
const weatherConditionLines = document.querySelector("[data-weather-condition-lines]");
const customerNoticeLines = document.querySelector("[data-customer-notice-lines]");
const outageNocLines = document.querySelector("[data-outage-noc-lines]");
const equipmentToolLines = document.querySelector("[data-equipment-tool-lines]");
const calibrationCustodyLines = document.querySelector("[data-calibration-custody-lines]");
const crewQualificationLines = document.querySelector("[data-crew-qualification-lines]");
const certificationExpiryLines = document.querySelector("[data-certification-expiry-lines]");
const fiberTestLines = document.querySelector("[data-fiber-test-lines]");
const turnupStatusLines = document.querySelector("[data-turnup-status-lines]");
const ownerDeliverableLines = document.querySelector("[data-owner-deliverable-lines]");
const ownerAcceptanceLines = document.querySelector("[data-owner-acceptance-lines]");
const ballInCourtLines = document.querySelector("[data-ball-in-court-lines]");
const handoffReceiptLines = document.querySelector("[data-handoff-receipt-lines]");
const readyTotal = document.querySelector("[data-ready-total]");
const blockedTotal = document.querySelector("[data-blocked-total]");
const lineMode = document.querySelector("[data-line-mode]");
const workDate = document.querySelector("[data-work-date]");
const invoiceNumber = document.querySelector("[data-invoice-number]");
const subjectInput = document.querySelector("[name='subject']");
const recipientInput = document.querySelector("[name='recipient']");
const issuedToInput = document.querySelector("[name='issuedTo']");
const notesInput = document.querySelector("[name='notes']");
const shareLinks = document.querySelectorAll("[data-share-link]");
const shareLink = shareLinks[0];
const copyShareButtons = document.querySelectorAll("[data-copy-share]");
const downloadSnapshotButtons = document.querySelectorAll("[data-download-snapshot]");
const downloadPackageCsvButtons = document.querySelectorAll("[data-download-package-csv]");
const printPackageButtons = document.querySelectorAll("[data-print-package]");
const mapDropSurfaces = document.querySelectorAll("[data-drop-map]");
const mapNoteLayers = document.querySelectorAll("[data-map-note-layer]");
const mapNoteLists = document.querySelectorAll("[data-map-note-list]");
const mapToolButtons = document.querySelectorAll("[data-map-tool]");
const mapToolCancel = document.querySelector("[data-map-tool-cancel]");
const mapModeStatus = document.querySelector("[data-map-mode-status]");
const mapModeCopy = document.querySelector("[data-map-mode-copy]");
const mapViewButtons = document.querySelectorAll("[data-map-view]");
const mapZoomButtons = document.querySelectorAll("[data-map-zoom]");
const zoomReadout = document.querySelector("[data-zoom-readout]");
const jobOverviewLayer = document.querySelector("[data-job-overview-layer]");
const jobPinLayer = document.querySelector("[data-job-pin-layer]");
const closeoutMapScrollLayer = document.querySelector(".map-scroll-layer");
const crewCardNotes = document.querySelector("[data-crew-card-notes]");
const crew811List = document.querySelector("[data-crew811-list]");
const crew811MapPins = document.querySelector("[data-crew811-map-pins]");
const crew811CoverageLayer = document.querySelector("[data-crew811-coverage-layer]");
const crew811MapCopy = document.querySelector("[data-crew811-map-copy]");
const crew811Number = document.querySelector("[data-crew811-number]");
const crew811Provider = document.querySelector("[data-crew811-provider]");
const crew811CompanyId = document.querySelector("[data-crew811-company-id]");
const crew811ExcavatorId = document.querySelector("[data-crew811-excavator-id]");
const crew811Excavator = document.querySelector("[data-crew811-excavator]");
const crew811WorkingFor = document.querySelector("[data-crew811-working-for]");
const crew811WorkType = document.querySelector("[data-crew811-work-type]");
const crew811Address = document.querySelector("[data-crew811-address]");
const crew811CallBack = document.querySelector("[data-crew811-call-back]");
const crew811FieldContact = document.querySelector("[data-crew811-field-contact]");
const crew811Due = document.querySelector("[data-crew811-due]");
const crew811Expiration = document.querySelector("[data-crew811-expiration]");
const crew811Status = document.querySelector("[data-crew811-status]");
const crew811Job = document.querySelector("[data-crew811-job]");
const crew811Crew = document.querySelector("[data-crew811-crew]");
const crew811Response = document.querySelector("[data-crew811-response]");
const crew811Countdown = document.querySelector("[data-crew811-countdown]");
const crew811Proof = document.querySelector("[data-crew811-proof]");
const crew811Events = document.querySelector("[data-crew811-events]");
const crew811Actions = document.querySelectorAll("[data-crew811-action]");
const crew811Filters = document.querySelectorAll("[data-crew811-filter]");
const crew811ShareLink = document.querySelector("[data-crew811-share-link]");
const crew811JsonInput = document.querySelector("[data-crew811-json]");
const crew811ImportStatus = document.querySelector("[data-crew811-import-status]");
const copyCrew811ShareButton = document.querySelector("[data-copy-crew811-share]");
const downloadCrew811SnapshotButton = document.querySelector("[data-download-crew811-snapshot]");
const claimsList = document.querySelector("[data-claims-list]");
const claimsMapPins = document.querySelector("[data-claims-map-pins]");
const claimsMapCopy = document.querySelector("[data-claims-map-copy]");
const claimsOpen = document.querySelector("[data-claims-open]");
const claimsRecovery = document.querySelector("[data-claims-recovery]");
const claimsBlocked = document.querySelector("[data-claims-blocked]");
const claimsIntakeStatus = document.querySelector("[data-claims-intake-status]");
const claimsMapCanvas = document.querySelector("[data-claims-map-canvas]");
const claimId = document.querySelector("[data-claim-id]");
const claimType = document.querySelector("[data-claim-type]");
const claimStatus = document.querySelector("[data-claim-status]");
const claimJob = document.querySelector("[data-claim-job]");
const claimLocation = document.querySelector("[data-claim-location]");
const claimOwner = document.querySelector("[data-claim-owner]");
const claimSeverity = document.querySelector("[data-claim-severity]");
const claimSource = document.querySelector("[data-claim-source]");
const claim811 = document.querySelector("[data-claim-811]");
const claimValue = document.querySelector("[data-claim-value]");
const claimBlocked = document.querySelector("[data-claim-blocked]");
const claimUpdated = document.querySelector("[data-claim-updated]");
const claimPhoto = document.querySelector("[data-claim-photo]");
const claimCaption = document.querySelector("[data-claim-caption]");
const claimProof = document.querySelector("[data-claim-proof]");
const claimEvents = document.querySelector("[data-claim-events]");
const claimsActions = document.querySelectorAll("[data-claims-action]");
const claimsFilters = document.querySelectorAll("[data-claims-filter]");
const claimEmailButton = document.querySelector("[data-claim-email]");
const claimSnapshotButton = document.querySelector("[data-claim-snapshot]");
const claimStatusMessage = document.querySelector("[data-claim-status-message]");
const claimBillingLink = document.querySelector("[data-claim-billing-link]");
const claimCloseoutLink = document.querySelector("[data-claim-closeout-link]");
const claimsShareLink = document.querySelector("[data-claims-share-link]");
const copyClaimsShareButton = document.querySelector("[data-copy-claims-share]");
const downloadClaimsSnapshotButton = document.querySelector("[data-download-claims-snapshot]");
const opsShareLink = document.querySelector("[data-ops-share-link]");
const copyOpsShareButton = document.querySelector("[data-copy-ops-share]");
const downloadOpsSnapshotButton = document.querySelector("[data-download-ops-snapshot]");
let activeMapTool = null;
let closeoutMapZoom = 1;
let crewMapZoom = 1;
let droppedMapPins = loadDroppedMapPins();
let selectedCrew811TicketId = "811-1194";
let crew811Filter = "all";
let selectedClaimId = "CLM-1045-02";
let claimsFilter = "all";
let claimDropMode = false;

const jobData = {
  "JOB-1045": {
    customer: "WINDSTREAM",
    status: "Ready to Bill",
    issuedTo: "Windstream OSP Closeout / AP",
    recipient: "ap@windstream.example",
    project: "PINE HILL FTTH EXPANSION",
    siteId: "TXL-0456",
    siteName: "PINE HILL",
    siteType: "MONOPOLE",
    address: "1250 PINE HILL RD<br>AUSTIN, TX 78737",
    county: "TRAVIS",
    mapDate: "05/14/2024",
    drawnBy: "Field Team 2",
    defaultAsset: "HH-1",
    assets: {
      handhole: "HH-1",
      splice: "SC-1",
      vaultA: "SV-1",
      vaultB: "SV-2",
      underground: "UG-1",
    },
  },
  "JOB-1046": {
    customer: "KINETIC",
    status: "Missing Proof",
    issuedTo: "Kinetic Construction Closeout",
    recipient: "closeout@kinetic.example",
    project: "OAK RIDGE FIBER EXTENSION",
    siteId: "TXL-0461",
    siteName: "OAK RIDGE",
    siteType: "UG FIBER",
    address: "804 OAK RIDGE DR<br>ROUND ROCK, TX 78664",
    county: "WILLIAMSON",
    mapDate: "06/03/2026",
    drawnBy: "Field Team 4",
    defaultAsset: "OR-HH-2",
    assets: {
      handhole: "OR-HH-2",
      splice: "OR-SC-3",
      vaultA: "OR-SV-4",
      vaultB: "OR-SV-5",
      underground: "OR-UG-2",
    },
  },
  "JOB-1047": {
    customer: "SPECTRUM",
    status: "Rejected",
    issuedTo: "Spectrum OSP Billing Review",
    recipient: "ospbilling@spectrum.example",
    project: "CEDAR PARK NODE SPLIT",
    siteId: "TXL-0472",
    siteName: "CEDAR PARK",
    siteType: "NODE / UG",
    address: "219 BRUSHY CREEK RD<br>CEDAR PARK, TX 78613",
    county: "WILLIAMSON",
    mapDate: "06/10/2026",
    drawnBy: "Field Team 1",
    defaultAsset: "CP-HH-7",
    assets: {
      handhole: "CP-HH-7",
      splice: "CP-SC-2",
      vaultA: "CP-SV-1",
      vaultB: "CP-SV-3",
      underground: "CP-UG-4",
    },
  },
  "JOB-1048": {
    customer: "AT&T",
    status: "Ready to Bill",
    issuedTo: "AT&T Fiber Closeout Desk",
    recipient: "fibercloseout@att.example",
    project: "SLAUGHTER LN MAKE READY",
    siteId: "TXL-0488",
    siteName: "SLAUGHTER",
    siteType: "AERIAL / UG",
    address: "4100 W SLAUGHTER LN<br>AUSTIN, TX 78749",
    county: "TRAVIS",
    mapDate: "06/14/2026",
    drawnBy: "Field Team 6",
    defaultAsset: "SL-HH-9",
    assets: {
      handhole: "SL-HH-9",
      splice: "SL-SC-1",
      vaultA: "SL-SV-6",
      vaultB: "SL-SV-7",
      underground: "SL-UG-3",
    },
  },
};

const DEMO_WORKSPACE_ID = "demo-seed";
const WORKSPACE_STORAGE_KEY = "crewproof.workspaces.v1";
const WORKSPACE_TREE_ROOT = "workspaces";

Object.entries(jobData).forEach(([jobId, job]) => {
  job.workspaceId = DEMO_WORKSPACE_ID;
  job.customerId = normalizeStorageId(job.customer);
  job.projectId = normalizeStorageId(job.project);
  job.storageRoot = workspaceStoragePath({
    workspaceId: DEMO_WORKSPACE_ID,
    customerId: job.customerId,
    projectId: job.projectId,
    jobId,
  });
});

const CLIENT_STORAGE_KEY = "crewproof.clients.v1";

const seededClients = [
  {
    id: "WINDSTREAM",
    name: "Windstream",
    customerCode: "WINDSTREAM",
    status: "active",
    legalName: "Windstream Services, LLC",
    issuedTo: "Windstream OSP Closeout / AP",
    mainContactName: "OSP Closeout Desk",
    mainContactEmail: "closeout@windstream.example",
    billingEmail: "ap@windstream.example",
    paymentTerms: "Net 30",
    serviceTerritory: "Central Texas",
    readyRule: "Ready lines can send; blocked lines stay held",
    requiredPhotos: true,
    gpsRequired: true,
    redlinesRequired: true,
    materialTicketRequired: true,
    boreLogRequired: false,
    locateTicketRequired: true,
    positiveResponseRequired: true,
    claimsContactName: "Windstream Claims Desk",
    claimsContactEmail: "claims@windstream.example",
    notes: "Seeded from existing Pine Hill closeout and billing package.",
  },
  {
    id: "KINETIC",
    name: "Kinetic",
    customerCode: "KINETIC",
    status: "active",
    legalName: "Kinetic Field Services",
    issuedTo: "Kinetic Construction Closeout",
    mainContactName: "Construction Closeout",
    mainContactEmail: "closeout@kinetic.example",
    billingEmail: "closeout@kinetic.example",
    paymentTerms: "Net 30",
    serviceTerritory: "Williamson County",
    readyRule: "Hold invoice until missing proof is corrected and locate ticket is current",
    requiredPhotos: true,
    gpsRequired: true,
    redlinesRequired: true,
    materialTicketRequired: true,
    boreLogRequired: true,
    locateTicketRequired: true,
    positiveResponseRequired: true,
    claimsContactName: "Kinetic Damage Review",
    claimsContactEmail: "claims@kinetic.example",
    notes: "Default for Oak Ridge missing proof packages.",
  },
  {
    id: "SPECTRUM",
    name: "Spectrum",
    customerCode: "SPECTRUM",
    status: "active",
    legalName: "Charter Communications Operating, LLC",
    issuedTo: "Spectrum OSP Billing Review",
    mainContactName: "OSP Billing Review",
    mainContactEmail: "ospbilling@spectrum.example",
    billingEmail: "ospbilling@spectrum.example",
    paymentTerms: "Net 45",
    serviceTerritory: "Cedar Park",
    readyRule: "Rejected items require corrected photos and PM acceptance before invoice",
    requiredPhotos: true,
    gpsRequired: true,
    redlinesRequired: true,
    materialTicketRequired: true,
    boreLogRequired: true,
    locateTicketRequired: true,
    positiveResponseRequired: true,
    claimsContactName: "Spectrum Claims Review",
    claimsContactEmail: "claims@spectrum.example",
    notes: "Default for rejected Cedar Park closeout packages.",
  },
  {
    id: "ATT",
    name: "AT&T",
    customerCode: "AT&T",
    status: "active",
    legalName: "AT&T Fiber",
    issuedTo: "AT&T Fiber Closeout Desk",
    mainContactName: "Fiber Closeout Desk",
    mainContactEmail: "fibercloseout@att.example",
    billingEmail: "fibercloseout@att.example",
    paymentTerms: "Net 30",
    serviceTerritory: "Austin South",
    readyRule: "Ready lines can send after GPS proof, before/after photos, and redlines are attached",
    requiredPhotos: true,
    gpsRequired: true,
    redlinesRequired: true,
    materialTicketRequired: true,
    boreLogRequired: true,
    locateTicketRequired: true,
    positiveResponseRequired: true,
    claimsContactName: "AT&T Damage Desk",
    claimsContactEmail: "claims@att.example",
    notes: "Default for Slaughter Ln make-ready work.",
  },
].map((client) => ({
  workspaceId: DEMO_WORKSPACE_ID,
  workspaceType: "demo",
  storageRoot: `${WORKSPACE_TREE_ROOT}/${DEMO_WORKSPACE_ID}/clients`,
  createdAt: "2026-06-23T14:00:00.000Z",
  updatedAt: "2026-06-23T14:00:00.000Z",
  audit: [{ at: "2026-06-23T14:00:00.000Z", action: "seeded", note: "Seeded from existing CrewProof field jobs." }],
  ...client,
}));

function normalizeStorageId(value) {
  return String(value || "item").toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "item";
}

function workspaceStoragePath({ workspaceId, customerId, projectId, jobId, documentType = "", fileName = "" }) {
  const parts = [
    WORKSPACE_TREE_ROOT,
    workspaceId,
    "customers",
    customerId,
    "projects",
    projectId,
    "jobs",
    jobId,
  ];
  if (documentType) parts.push(documentType);
  if (fileName) parts.push(fileName);
  return parts.map(normalizeStorageId).join("/");
}

function workspaceAudit(action, note, extra = {}) {
  return { at: new Date().toISOString(), action, note, ...extra };
}

const defaultSignupQuestions = [
  "1. Company legal name and billing address?",
  "2. Primary admin name, email, phone, and role?",
  "3. Who should receive closeout packages and invoices?",
  "4. What customers or owners do you build for?",
  "5. What active projects should be loaded first?",
  "6. What crews, foremen, and devices will submit field proof?",
  "7. What is the first job ID, address, and work type?",
  "8. Please attach map sheet, permit, locate ticket, and any redlines for the first job.",
  "9. What proof is required before work is Ready to Bill?",
  "10. What photos are required by asset type: handhole, splice vault, bore, restoration, aerial?",
  "11. Are GPS, timestamps, before/after photos, material tickets, bore logs, and QC inspections required?",
  "12. Which 811 center / portal do you use in each market, including Florida 811 if applicable?",
  "13. What are your Company ID, Excavator ID, Company Name, Office Name, Company Type, and 811 mailing address?",
  "14. What phone, mobile/cell phone, email, call back time, field contact, contact type, and field contact phone/fax/email should appear on tickets?",
  "15. Who are you Working For, what Work Type should be used, and which subcontractors can be added or removed?",
  "16. What are the 811 ticket, positive response, renewal, expiration, emergency locate, and member/operator response rules?",
  "17. What should block billing: missing proof, rejected work, expired locate, damage claim, owner approval?",
  "18. Who approves closeout packages and who can reject or request fixes?",
  "19. Who handles claims, damages, warranty issues, and billing holds?",
  "20. Which users need Owner/Admin, PM, Billing, Foreman, Crew, Locate, or Claims access?",
].join("\n");

function ensureSignupQuestions() {
  if (signupQuestionsInput && !signupQuestionsInput.value.trim()) signupQuestionsInput.value = defaultSignupQuestions;
}

function signupQuestionnaireText(input = {}) {
  return String(input.questions || signupQuestionsInput?.value || defaultSignupQuestions).trim();
}

function buildSignupQuestionsEmail(input = workspaceFormData(workspaceInviteForm, "data-workspace-invite-field")) {
  const recipient = String(input.adminEmail || "").trim();
  const workspaceName = String(input.name || "CrewProof pilot workspace").trim();
  const contactName = String(input.contactName || "Pilot admin").trim();
  const subject = `CrewProof signup questions - ${workspaceName}`;
  const body = [
    `Hi ${contactName},`,
    "",
    "To set up your CrewProof workspace without mixing your data with demo data or another client workspace, please answer the questions below and attach any available first-job files.",
    "",
    signupQuestionnaireText(input),
    "",
    "CrewProof will store each record under:",
    `${WORKSPACE_TREE_ROOT}/{workspaceId}/customers/{customerId}/projects/{projectId}/jobs/{jobId}/{documentType}/{fileName}`,
    "",
    "811 excavator information on file:",
    `811 center / portal: ${input.oneCallProvider || "Please provide"}`,
    `Company ID: ${input.oneCallCompanyId || "Please provide"}`,
    `Excavator ID: ${input.oneCallExcavatorId || "Please provide"}`,
    `Company Name: ${input.oneCallCompanyName || "Please provide"}`,
    `Office Name: ${input.oneCallOfficeName || "Please provide"}`,
    `Company Type: ${input.oneCallCompanyType || "CONTRACTOR / please confirm"}`,
    `Phone: ${input.oneCallPhone || "Please provide"}`,
    `Mobile / Cell Phone: ${input.oneCallMobilePhone || "Please provide"}`,
    `Email: ${input.oneCallEmail || "Please provide"}`,
    `Call Back Time: ${input.oneCallCallBackTime || "ANYTIME / please confirm"}`,
    `Field Contact: ${input.oneCallFieldContact || "Please provide"}`,
    `Contact Type: ${input.oneCallContactType || "Cell / please confirm"}`,
    `Field Contact Phone/Fax/Email: ${input.oneCallFieldContactMethod || "Please provide"}`,
    `Working For: ${input.oneCallWorkingFor || "Please provide"}`,
    `Work Type: ${input.oneCallWorkType || "Please provide"}`,
    `Address 1: ${input.oneCallAddress1 || "Please provide"}`,
    `Address 2: ${input.oneCallAddress2 || ""}`,
    `City / State / Zip: ${[input.oneCallCity, input.oneCallState, input.oneCallZip].filter(Boolean).join(" / ") || "Please provide"}`,
    `Add / Remove Subcontractors: ${input.oneCallSubcontractors || "Please provide or confirm none"}`,
    `Notes: ${input.oneCallNotes || "Please provide positive response, renewal, emergency locate, and member/operator rules"}`,
    "",
    "Once we have this, we can create your customer, project, crew, first active job, map package, locate records, closeout rules, and billing handoff.",
  ].join("\n");
  return `mailto:${encodeURIComponent(recipient || "pilot-admin@example.invalid")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function seededWorkspace() {
  const jobs = Object.entries(jobData).map(([jobId, job]) => ({
    workspaceId: DEMO_WORKSPACE_ID,
    customerId: job.customerId,
    projectId: job.projectId,
    jobId,
    status: "demo-active",
    address: job.address.replace("<br>", ", "),
    crewId: normalizeStorageId(jobPrimaryCrew(jobId)),
    storageRoot: job.storageRoot,
  }));
  const customers = [...new Map(Object.values(jobData).map((job) => [job.customerId, {
    workspaceId: DEMO_WORKSPACE_ID,
    customerId: job.customerId,
    name: job.customer,
  }])).values()];
  const projects = Object.entries(jobData).map(([jobId, job]) => ({
    workspaceId: DEMO_WORKSPACE_ID,
    customerId: job.customerId,
    projectId: job.projectId,
    name: job.project,
    sourceJobId: jobId,
  }));
  const documents = Object.entries(jobData).flatMap(([jobId, job]) => {
    return ["map", "permit", "locate-ticket", "closeout", "billing"].map((documentType) => ({
      workspaceId: DEMO_WORKSPACE_ID,
      customerId: job.customerId,
      projectId: job.projectId,
      jobId,
      documentType,
      fileName: `${jobId}-${documentType}.demo`,
      storagePath: workspaceStoragePath({
        workspaceId: DEMO_WORKSPACE_ID,
        customerId: job.customerId,
        projectId: job.projectId,
        jobId,
        documentType,
        fileName: `${jobId}-${documentType}.demo`,
      }),
      createdAt: "2026-06-23T14:00:00.000Z",
      audit: [workspaceAudit("seeded-demo-document", "Demo document metadata isolated under demo-seed.", { workspaceId: DEMO_WORKSPACE_ID, jobId })],
    }));
  });
  return {
    workspaceId: DEMO_WORKSPACE_ID,
    name: "Demo Seed",
    type: "demo",
    status: "active",
    ownerRole: "crewproof-owner",
    storageRoot: `${WORKSPACE_TREE_ROOT}/${DEMO_WORKSPACE_ID}`,
    customerIds: customers.map((customer) => customer.customerId),
    clientIds: seededClients.map((client) => client.id),
    customers,
    projects,
    crews: [{ workspaceId: DEMO_WORKSPACE_ID, crewId: "demo-crews", name: "Demo seeded crews" }],
    jobs,
    documents,
    proof: [],
    audit: [workspaceAudit("seeded-demo-workspace", "Windstream, Kinetic, Spectrum, and AT&T seeded data moved into demo-seed.", { workspaceId: DEMO_WORKSPACE_ID })],
  };
}

function readStoredWorkspaces() {
  try {
    const raw = window.localStorage?.getItem(WORKSPACE_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function persistWorkspaces(workspaces) {
  try {
    window.localStorage?.setItem(WORKSPACE_STORAGE_KEY, JSON.stringify(workspaces));
  } catch {
    // File previews can block storage; seeded demo workspace remains available.
  }
}

function getWorkspaces() {
  const stored = readStoredWorkspaces().filter((workspace) => workspace.workspaceId !== DEMO_WORKSPACE_ID);
  return [seededWorkspace(), ...stored].sort((a, b) => a.workspaceId === DEMO_WORKSPACE_ID ? -1 : b.workspaceId === DEMO_WORKSPACE_ID ? 1 : a.name.localeCompare(b.name));
}

function saveWorkspace(workspace) {
  const stored = readStoredWorkspaces().filter((item) => item.workspaceId !== workspace.workspaceId && item.workspaceId !== DEMO_WORKSPACE_ID);
  stored.push(workspace);
  persistWorkspaces(stored);
}

function findWorkspace(workspaceId) {
  return getWorkspaces().find((workspace) => workspace.workspaceId === workspaceId);
}

function createPilotWorkspace(input) {
  const name = String(input.name || "").trim();
  const adminEmail = String(input.adminEmail || "").trim();
  const signupQuestions = signupQuestionnaireText(input);
  if (!name || !isValidEmail(adminEmail)) return { error: "Workspace name and valid admin email are required." };
  const workspaceId = normalizeStorageId(name);
  if (workspaceId === DEMO_WORKSPACE_ID || findWorkspace(workspaceId)) return { error: "Workspace already exists or conflicts with demo-seed." };
  const workspace = {
    workspaceId,
    name,
    type: "pilot",
    status: "invited",
    adminEmail,
    contactName: String(input.contactName || "").trim(),
    storageRegion: String(input.storageRegion || "local-static").trim(),
    ownerRole: "client-admin",
    storageRoot: `${WORKSPACE_TREE_ROOT}/${workspaceId}`,
    oneCallAccount: {
      provider: String(input.oneCallProvider || "").trim(),
      companyId: String(input.oneCallCompanyId || input.oneCallAccountNumber || "").trim(),
      excavatorId: String(input.oneCallExcavatorId || "").trim(),
      companyName: String(input.oneCallCompanyName || "").trim(),
      officeName: String(input.oneCallOfficeName || "").trim(),
      companyType: String(input.oneCallCompanyType || "").trim(),
      phone: String(input.oneCallPhone || "").trim(),
      mobilePhone: String(input.oneCallMobilePhone || "").trim(),
      email: String(input.oneCallEmail || "").trim(),
      callBackTime: String(input.oneCallCallBackTime || "").trim(),
      fieldContact: String(input.oneCallFieldContact || "").trim(),
      contactType: String(input.oneCallContactType || "").trim(),
      fieldContactMethod: String(input.oneCallFieldContactMethod || "").trim(),
      workingFor: String(input.oneCallWorkingFor || "").trim(),
      workType: String(input.oneCallWorkType || "").trim(),
      address1: String(input.oneCallAddress1 || "").trim(),
      address2: String(input.oneCallAddress2 || "").trim(),
      city: String(input.oneCallCity || "").trim(),
      state: String(input.oneCallState || "").trim(),
      zip: String(input.oneCallZip || "").trim(),
      subcontractors: String(input.oneCallSubcontractors || "").trim(),
      notes: String(input.oneCallNotes || "").trim(),
      storedAt: new Date().toISOString(),
    },
    signupQuestions,
    signupEmailDraft: buildSignupQuestionsEmail({ ...input, questions: signupQuestions }),
    customers: [],
    projects: [],
    crews: [],
    jobs: [],
    documents: [],
    proof: [],
    audit: [
      workspaceAudit("pilot-client-invited", "Owner invited pilot client and created isolated workspace folder tree.", { workspaceId }),
      workspaceAudit("signup-questionnaire-prepared", "Signup questions prepared for client admin before first job activation.", { workspaceId, questionCount: signupQuestions.split("\n").filter(Boolean).length }),
      workspaceAudit("811-excavator-information-requested", "Florida 811-style excavator information requested for client workspace.", { workspaceId }),
    ],
  };
  saveWorkspace(workspace);
  return { workspace };
}

function createWorkspaceDocument(workspaceId, customerId, projectId, jobId, documentType, fileName) {
  const cleanFileName = String(fileName || "").trim();
  if (!cleanFileName) return null;
  return {
    workspaceId,
    customerId,
    projectId,
    jobId,
    documentType,
    fileName: cleanFileName,
    storagePath: workspaceStoragePath({ workspaceId, customerId, projectId, jobId, documentType, fileName: cleanFileName }),
    createdAt: new Date().toISOString(),
    audit: [workspaceAudit("file-metadata-stored", `${documentType} stored under workspace folder tree.`, { workspaceId, jobId })],
  };
}

function activateWorkspaceJob(input) {
  const workspace = findWorkspace(input.workspaceId);
  if (!workspace || workspace.type === "demo") return { error: "Select a pilot workspace. Demo seed data cannot be changed from client onboarding." };
  const customerName = String(input.customerName || "").trim();
  const projectName = String(input.projectName || "").trim();
  const crewName = String(input.crewName || "").trim();
  const jobId = normalizeStorageId(input.jobId || `${customerName}-${projectName}`).toUpperCase();
  if (!customerName || !projectName || !crewName || !jobId) return { error: "Customer, project, crew, and job ID are required." };
  if ((workspace.jobs || []).some((job) => job.jobId === jobId)) return { error: "That job already exists in this workspace." };
  const customerId = normalizeStorageId(customerName);
  const projectId = normalizeStorageId(projectName);
  const crewId = normalizeStorageId(crewName);
  const customer = { workspaceId: workspace.workspaceId, customerId, name: customerName, createdAt: new Date().toISOString() };
  const project = { workspaceId: workspace.workspaceId, customerId, projectId, name: projectName, createdAt: new Date().toISOString() };
  const crew = { workspaceId: workspace.workspaceId, crewId, name: crewName, status: "active", createdAt: new Date().toISOString() };
  const job = {
    workspaceId: workspace.workspaceId,
    customerId,
    projectId,
    crewId,
    jobId,
    status: "active",
    address: String(input.address || "").trim(),
    storageRoot: workspaceStoragePath({ workspaceId: workspace.workspaceId, customerId, projectId, jobId }),
    createdAt: new Date().toISOString(),
    activatedAt: new Date().toISOString(),
  };
  const docs = [
    createWorkspaceDocument(workspace.workspaceId, customerId, projectId, jobId, "maps", input.mapFile),
    createWorkspaceDocument(workspace.workspaceId, customerId, projectId, jobId, "permits", input.permitFile),
    createWorkspaceDocument(workspace.workspaceId, customerId, projectId, jobId, "locate-tickets", input.locateFile),
  ].filter(Boolean);
  const nextWorkspace = {
    ...workspace,
    status: "active",
    customers: [...(workspace.customers || []).filter((item) => item.customerId !== customerId), customer],
    projects: [...(workspace.projects || []).filter((item) => item.projectId !== projectId), project],
    crews: [...(workspace.crews || []).filter((item) => item.crewId !== crewId), crew],
    jobs: [...(workspace.jobs || []), job],
    documents: [...(workspace.documents || []), ...docs],
    audit: [...(workspace.audit || []), workspaceAudit("job-created-and-activated", "Client created customer, project, crew, job, and uploaded startup documents.", { workspaceId: workspace.workspaceId, jobId })],
  };
  saveWorkspace(nextWorkspace);
  return { workspace: nextWorkspace, job };
}

function uploadWorkspaceProof(input) {
  const workspace = findWorkspace(input.workspaceId);
  if (!workspace || workspace.type === "demo") return { error: "Select a pilot workspace. Demo proof is read-only." };
  const job = (workspace.jobs || []).find((item) => item.jobId === input.jobId);
  if (!job) return { error: "Select an active job in this workspace." };
  const fileName = String(input.fileName || "").trim();
  if (!fileName) return { error: "Proof file name is required." };
  const document = createWorkspaceDocument(workspace.workspaceId, job.customerId, job.projectId, job.jobId, "proof-photos", fileName);
  const proof = {
    workspaceId: workspace.workspaceId,
    customerId: job.customerId,
    projectId: job.projectId,
    jobId: job.jobId,
    assetId: String(input.assetId || "field-proof").trim(),
    gps: String(input.gps || "").trim(),
    documentType: "proof-photo",
    storagePath: document.storagePath,
    createdAt: new Date().toISOString(),
  };
  const nextWorkspace = {
    ...workspace,
    documents: [...(workspace.documents || []), document],
    proof: [...(workspace.proof || []), proof],
    audit: [...(workspace.audit || []), workspaceAudit("field-proof-uploaded", "Crew proof metadata stored under client workspace and job.", { workspaceId: workspace.workspaceId, jobId: job.jobId, storagePath: document.storagePath })],
  };
  saveWorkspace(nextWorkspace);
  return { workspace: nextWorkspace, proof };
}

function visibleWorkspacesForRole(role, workspaceId = "") {
  if (role === "owner" || role === "admin") return getWorkspaces();
  if (role === "client") return getWorkspaces().filter((workspace) => workspace.type !== "demo" && workspace.workspaceId === workspaceId);
  return [];
}

function workspaceRetrievalIndex(workspaceId = "") {
  return getWorkspaces()
    .filter((workspace) => !workspaceId || workspace.workspaceId === workspaceId)
    .flatMap((workspace) => (workspace.documents || []).map((doc) => ({ workspace, doc })));
}

function normalizeClientName(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function clientIdFromInput(name, customerCode) {
  const source = String(customerCode || name || "CLIENT").toUpperCase();
  return source.replace(/&/g, "AND").replace(/[^A-Z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "CLIENT";
}

function readStoredClients() {
  try {
    const raw = window.localStorage?.getItem(CLIENT_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function persistClients(clients) {
  try {
    window.localStorage?.setItem(CLIENT_STORAGE_KEY, JSON.stringify(clients));
  } catch {
    // Local file previews can block storage; the UI still works with seeded data.
  }
}

function mergeClients(seed, saved) {
  const byId = new Map();
  seed.forEach((client) => byId.set(client.id, { ...client }));
  saved.forEach((client) => {
    const id = client.id || clientIdFromInput(client.name, client.customerCode);
    const duplicateSeed = [...byId.values()].find((seedClient) => {
      return normalizeClientName(seedClient.customerCode) === normalizeClientName(client.customerCode)
        || normalizeClientName(seedClient.name) === normalizeClientName(client.name);
    });
    const key = duplicateSeed?.id || id;
    byId.set(key, { ...(byId.get(key) || {}), ...client, id: key });
  });
  return [...byId.values()].sort((a, b) => a.name.localeCompare(b.name));
}

function getClients() {
  return mergeClients(seededClients, readStoredClients());
}

function getActiveClients() {
  return getClients().filter((client) => client.status !== "archived");
}

function saveStoredClient(client) {
  const saved = readStoredClients().filter((item) => item.id !== client.id);
  saved.push(client);
  persistClients(saved);
}

function findClientById(id) {
  return getClients().find((client) => client.id === id);
}

function findClientForJob(job) {
  const customer = normalizeClientName(job?.customer);
  return getClients().find((client) => {
    return normalizeClientName(client.customerCode) === customer || normalizeClientName(client.name) === customer;
  });
}

function clientDisplayNameForJob(job) {
  return findClientForJob(job)?.name || job?.customer || "Client";
}

function clientIssuedToForJob(job) {
  return findClientForJob(job)?.issuedTo || job?.issuedTo || "";
}

function clientBillingEmailForJob(job) {
  const client = findClientForJob(job);
  return client?.billingEmail || client?.invoiceEmail || job?.recipient || "";
}

function clientReadyRuleForJob(job) {
  return findClientForJob(job)?.readyRule || "Ready lines can send; blocked lines stay held";
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
}

function validateClientInput(input, existingId = "") {
  const errors = {};
  ["name", "customerCode", "issuedTo", "mainContactName", "mainContactEmail", "billingEmail", "readyRule", "paymentTerms"].forEach((field) => {
    if (!String(input[field] || "").trim()) errors[field] = "Required";
  });
  ["mainContactEmail", "billingEmail", "apContactEmail", "closeoutContactEmail", "fieldContactEmail", "invoiceEmail", "claimsContactEmail"].forEach((field) => {
    if (input[field] && !isValidEmail(input[field])) errors[field] = "Enter a valid email";
  });
  const nameKey = normalizeClientName(input.name);
  const codeKey = normalizeClientName(input.customerCode);
  const duplicate = getActiveClients().find((client) => {
    if (client.id === existingId) return false;
    return normalizeClientName(client.name) === nameKey || normalizeClientName(client.customerCode) === codeKey;
  });
  if (duplicate) errors.duplicate = "Duplicate active client: " + duplicate.name;
  return errors;
}

function clientAudit(action, note) {
  return { at: new Date().toISOString(), action, note };
}

function createClient(input) {
  const errors = validateClientInput(input);
  if (Object.keys(errors).length) return { errors };
  const id = clientIdFromInput(input.name, input.customerCode);
  const client = {
    ...input,
    id,
    status: "active",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    audit: [clientAudit("created", "Client created in Owner/Admin management.")],
  };
  saveStoredClient(client);
  return { client };
}

function updateClient(id, input) {
  const current = findClientById(id);
  if (!current) return { errors: { missing: "Client not found" } };
  const errors = validateClientInput(input, id);
  if (Object.keys(errors).length) return { errors };
  const client = {
    ...current,
    ...input,
    id,
    status: current.status || "active",
    updatedAt: new Date().toISOString(),
    audit: [...(current.audit || []), clientAudit("updated", "Client profile, billing, or closeout rules changed.")],
  };
  saveStoredClient(client);
  return { client };
}

function archiveClient(id) {
  const current = findClientById(id);
  if (!current) return null;
  const client = {
    ...current,
    status: "archived",
    updatedAt: new Date().toISOString(),
    audit: [...(current.audit || []), clientAudit("archived", "Client archived. Existing jobs remain visible.")],
  };
  saveStoredClient(client);
  return client;
}

function restoreClient(id) {
  const current = findClientById(id);
  if (!current) return null;
  const client = {
    ...current,
    status: "active",
    updatedAt: new Date().toISOString(),
    audit: [...(current.audit || []), clientAudit("restored", "Client restored to active directory.")],
  };
  saveStoredClient(client);
  return client;
}

function restoreAllClients() {
  const archived = getClients().filter((client) => client.status === "archived");
  return archived.map((client) => restoreClient(client.id));
}

const jobOverviewPins = {
  "JOB-1045": { x: 76, y: 43, label: "Pine Hill", crew: "Alpha Crew" },
  "JOB-1046": { x: 37, y: 36, label: "Oak Ridge", crew: "Bravo Crew" },
  "JOB-1047": { x: 54, y: 68, label: "Cedar Park", crew: "Charlie Crew" },
  "JOB-1048": { x: 68, y: 78, label: "Slaughter Ln", crew: "Delta Crew" },
};

const crew811StatusColors = {
  NEW: "#2563eb",
  NEEDS_REVIEW: "#eab308",
  MATCHED_TO_JOB: "#0f766e",
  ASSIGNED: "#7c3aed",
  IN_FIELD: "#0891b2",
  WAITING_ON_RESPONSE: "#f97316",
  CLEAR: "#16a34a",
  CONFLICT: "#dc2626",
  EXPIRED: "#7f1d1d",
  RENEWAL_NEEDED: "#ec4899",
  CLOSED: "#6b7280",
};

const crew811Tickets = [
  {
    id: "811-1194",
    tenantId: "tenant-windstream",
    ticketNumber: "FL811-24-1194",
    state: "FL",
    county: "BROWARD",
    city: "HALLANDALE BEACH",
    street: "1835 E HALLANDALE BEACH BLVD",
    crossStreet: "HIGHLANDS 21 LATERAL",
    workDescription: "WR 908792 HIGHLANDS 21 LATERAL HARDENING",
    excavatorName: "NEXT LEVEL UNDERGROUND",
    customerName: "WINDSTREAM",
    providerName: "Florida 811",
    companyId: "248654",
    excavatorId: "544490",
    officeName: "NEXT LEVEL UNDERGROUND",
    companyType: "CONTRACTOR",
    sourceSystem: "Sunshine 811 Exactix",
    sourceFormat: "Florida 811 ticket JSON",
    sourcePortal: "exactix.sunshine811.com",
    callBackTime: "ANYTIME",
    fieldContact: "ANDREI KRILOV",
    fieldContactType: "Cell",
    fieldContactMethod: "(754) 260-7248",
    workingFor: "FPL MASTEC SSUP",
    workType: "WR 908792 HIGHLANDS 21 LATERAL HARDENING",
    status: "RENEWAL_NEEDED",
    priority: "HIGH",
    dueAt: "2026-06-25T16:00:00",
    expiresAt: "2026-06-27T16:00:00",
    renewalRequiredAt: "2026-06-25T16:00:00",
    latitude: 30.210654,
    longitude: -97.951234,
    x: 74,
    y: 78,
    coverageStart: { x: 72, y: 47, label: "Start / HH-1" },
    coverageEnd: { x: 53, y: 91, label: "End / SV-2" },
    assignedCrewId: "Alpha",
    assignedUserId: "J. Ramirez",
    linkedJobId: "JOB-1045",
    positiveResponseStatus: "PENDING",
    proof: ["Locate map imported", "Boundary shown on map"],
    responses: [
      { utilityName: "Gas", responseStatus: "CLEAR", responseText: "Clear of work area" },
      { utilityName: "Power", responseStatus: "NO_RESPONSE", responseText: "Awaiting response" },
    ],
    events: ["Imported from Florida 811 excavator ticket", "Matched to JOB-1045 at 0.92 confidence"],
  },
  {
    id: "811-1201",
    tenantId: "tenant-windstream",
    ticketNumber: "FL811-24-1201",
    state: "TX",
    county: "TRAVIS",
    city: "AUSTIN",
    street: "PINE HILL RD SHOULDER",
    crossStreet: "SITE ENTRANCE",
    workDescription: "Road shoulder restoration and vault rework",
    excavatorName: "Canyon Bore",
    customerName: "WINDSTREAM",
    providerName: "Florida 811",
    sourceSystem: "Sunshine 811 Exactix",
    sourceFormat: "Florida 811 ticket JSON",
    sourcePortal: "exactix.sunshine811.com",
    companyId: "248654",
    excavatorId: "544490",
    officeName: "NEXT LEVEL UNDERGROUND",
    companyType: "CONTRACTOR",
    callBackTime: "ANYTIME",
    fieldContact: "ANDREI KRILOV",
    fieldContactType: "Cell",
    fieldContactMethod: "(754) 260-7248",
    workingFor: "WINDSTREAM OSP",
    workType: "ROAD SHOULDER RESTORATION AND VAULT REWORK",
    status: "EXPIRED",
    priority: "HIGH",
    dueAt: "2026-06-23T12:00:00",
    expiresAt: "2026-06-24T17:00:00",
    renewalRequiredAt: "2026-06-22T17:00:00",
    latitude: 30.2103,
    longitude: -97.9515,
    x: 48,
    y: 91,
    coverageStart: { x: 70, y: 78, label: "Start / UG-1" },
    coverageEnd: { x: 45, y: 92, label: "End / SV-2" },
    assignedCrewId: "Charlie",
    assignedUserId: "T. Nguyen",
    linkedJobId: "JOB-1045",
    positiveResponseStatus: "BLOCKED",
    proof: ["Rejected redline attached", "Bore log mismatch"],
    responses: [{ utilityName: "Storm", responseStatus: "CONFLICT", responseText: "Conflict at shoulder crossing" }],
    events: ["Imported from PDF", "Marked expired", "Blocks JOB-1045 closeout"],
  },
  {
    id: "811-1310",
    tenantId: "tenant-kinetic",
    ticketNumber: "FL811-24-1310",
    state: "TX",
    county: "WILLIAMSON",
    city: "ROUND ROCK",
    street: "804 OAK RIDGE DR",
    crossStreet: "OAK RIDGE HANDHOLE",
    workDescription: "Fiber extension and handhole install",
    excavatorName: "Hill Country Fiber",
    customerName: "KINETIC",
    providerName: "Florida 811",
    sourceSystem: "Sunshine 811 Exactix",
    sourceFormat: "Florida 811 ticket JSON",
    sourcePortal: "exactix.sunshine811.com",
    companyId: "248654",
    excavatorId: "544490",
    officeName: "NEXT LEVEL UNDERGROUND",
    companyType: "CONTRACTOR",
    callBackTime: "ANYTIME",
    fieldContact: "ANDREI KRILOV",
    fieldContactType: "Cell",
    fieldContactMethod: "(754) 260-7248",
    workingFor: "KINETIC OSP",
    workType: "FIBER EXTENSION AND HANDHOLE INSTALL",
    status: "NEEDS_REVIEW",
    priority: "NORMAL",
    dueAt: "2026-06-26T10:00:00",
    expiresAt: "2026-06-29T10:00:00",
    renewalRequiredAt: "2026-06-27T10:00:00",
    latitude: 30.508,
    longitude: -97.678,
    x: 38,
    y: 38,
    coverageStart: { x: 36, y: 36, label: "Start" },
    coverageEnd: { x: 48, y: 50, label: "End" },
    assignedCrewId: "Bravo",
    assignedUserId: "M. Clark",
    linkedJobId: null,
    positiveResponseStatus: "PENDING",
    proof: ["No geometry in import"],
    responses: [],
    events: ["Imported without geometry", "Needs PM review before field start"],
  },
  {
    id: "811-1404",
    tenantId: "tenant-att",
    ticketNumber: "FL811-24-1404",
    state: "TX",
    county: "TRAVIS",
    city: "AUSTIN",
    street: "4100 W SLAUGHTER LN",
    crossStreet: "WEST BORE",
    workDescription: "Make-ready and underground bore proof",
    excavatorName: "Capitol OSP",
    customerName: "AT&T",
    providerName: "Florida 811",
    sourceSystem: "Sunshine 811 Exactix",
    sourceFormat: "Florida 811 ticket JSON",
    sourcePortal: "exactix.sunshine811.com",
    companyId: "248654",
    excavatorId: "544490",
    officeName: "NEXT LEVEL UNDERGROUND",
    companyType: "CONTRACTOR",
    callBackTime: "ANYTIME",
    fieldContact: "ANDREI KRILOV",
    fieldContactType: "Cell",
    fieldContactMethod: "(754) 260-7248",
    workingFor: "AT&T OSP",
    workType: "MAKE-READY AND UNDERGROUND BORE PROOF",
    status: "CLEAR",
    priority: "NORMAL",
    dueAt: "2026-06-25T09:00:00",
    expiresAt: "2026-07-01T09:00:00",
    renewalRequiredAt: "2026-06-29T09:00:00",
    latitude: 30.172,
    longitude: -97.85,
    x: 68,
    y: 80,
    coverageStart: { x: 62, y: 76, label: "Start" },
    coverageEnd: { x: 72, y: 88, label: "End" },
    assignedCrewId: "Delta",
    assignedUserId: "P. Henry",
    linkedJobId: "JOB-1048",
    positiveResponseStatus: "READY",
    proof: ["GPS photo uploaded", "Marked utilities attached", "Positive response clear"],
    responses: [
      { utilityName: "Gas", responseStatus: "CLEAR", responseText: "Clear" },
      { utilityName: "Power", responseStatus: "MARKED", responseText: "Marked in field" },
    ],
    events: ["Imported", "Auto-linked to JOB-1048", "Positive response ready"],
  },
];

function firstJsonValue(source, paths, fallback = "") {
  for (const path of paths) {
    const value = path.split(".").reduce((cursor, key) => {
      if (cursor == null) return undefined;
      return cursor[key];
    }, source);
    if (value !== undefined && value !== null && String(value).trim() !== "") return value;
  }
  return fallback;
}

function normalizeTicketStatus(value = "") {
  const raw = String(value || "").trim().toUpperCase().replace(/[\s-]+/g, "_");
  if (/CLEAR|MARKED|NO_CONFLICT|COMPLETE/.test(raw)) return "CLEAR";
  if (/CONFLICT|DAMAGE|DISPUTE/.test(raw)) return "CONFLICT";
  if (/EXPIRED|PAST_DUE/.test(raw)) return "EXPIRED";
  if (/RENEW/.test(raw)) return "RENEWAL_NEEDED";
  if (/WAIT|PENDING|NO_RESPONSE|RESPONSE/.test(raw)) return "WAITING_ON_RESPONSE";
  if (/ASSIGN/.test(raw)) return "ASSIGNED";
  if (/MATCH/.test(raw)) return "MATCHED_TO_JOB";
  if (/REVIEW|VERIFY/.test(raw)) return "NEEDS_REVIEW";
  return raw || "NEEDS_REVIEW";
}

function normalizePositiveResponse(value = "") {
  const raw = String(value || "").trim().toUpperCase().replace(/[\s-]+/g, "_");
  if (/CLEAR|MARKED|READY|COMPLETE|NO_CONFLICT/.test(raw)) return "READY";
  if (/BLOCK|CONFLICT|DAMAGE|EXPIRED|DENIED/.test(raw)) return "BLOCKED";
  if (/OVERRIDE/.test(raw)) return "OVERRIDDEN";
  return raw || "PENDING";
}

function parseDateLike(value, fallback = new Date().toISOString()) {
  if (!value) return fallback;
  const date = new Date(value);
  if (!Number.isNaN(date.getTime())) return date.toISOString();
  return fallback;
}

function coveragePointFromJson(source, prefix, fallbackX, fallbackY, fallbackLabel) {
  const nested = source[prefix] || source[prefix + "Point"] || {};
  return {
    x: Number(firstJsonValue(nested, ["x", "mapX", "percentX"], firstJsonValue(source, [prefix + "X", prefix + "_x"], fallbackX))) || fallbackX,
    y: Number(firstJsonValue(nested, ["y", "mapY", "percentY"], firstJsonValue(source, [prefix + "Y", prefix + "_y"], fallbackY))) || fallbackY,
    label: String(firstJsonValue(nested, ["label", "name", "asset"], firstJsonValue(source, [prefix + "Label", prefix + "_label"], fallbackLabel))),
  };
}

function matchSunshineTicketToJob(ticket) {
  if (ticket.linkedJobId && jobData[ticket.linkedJobId]) return ticket.linkedJobId;
  const haystack = [
    ticket.customerName,
    ticket.workingFor,
    ticket.workType,
    ticket.workDescription,
    ticket.street,
    ticket.city,
    ticket.county,
  ].join(" ").toLowerCase();
  let best = { jobId: activeJobId(), score: 0 };
  Object.entries(jobData).forEach(([jobId, job]) => {
    const customer = clientDisplayNameForJob(job).toLowerCase();
    const tokens = [customer, job.customer, job.siteName, job.project, job.address, job.county].filter(Boolean).join(" ").toLowerCase().split(/[^a-z0-9]+/).filter((token) => token.length > 3);
    const score = tokens.reduce((total, token) => total + (haystack.includes(token) ? 1 : 0), 0);
    if (score > best.score) best = { jobId, score };
  });
  return best.jobId;
}

function sunshine811TicketFromJson(raw) {
  const source = raw?.ticket || raw?.data || raw?.ticketData || raw || {};
  const ticketNumber = String(firstJsonValue(source, [
    "ticketNumber",
    "ticket_number",
    "ticket",
    "ticketNo",
    "ticketId",
    "id",
    "request.ticketNumber",
    "TicketNumber",
  ], "FL811-" + Date.now().toString().slice(-6))).trim();
  const nowIso = new Date().toISOString();
  const dueAt = parseDateLike(firstJsonValue(source, ["dueAt", "dueDate", "legalDate", "responseDueDate", "validThrough", "dates.responseDue"], ""), nowIso);
  const expiresAt = parseDateLike(firstJsonValue(source, ["expiresAt", "expirationDate", "expiration", "validUntil", "dates.expires"], ""), dueAt);
  const positiveResponseStatus = normalizePositiveResponse(firstJsonValue(source, ["positiveResponseStatus", "positive_response_status", "responseStatus", "memberResponses.status", "status.positiveResponse"], "PENDING"));
  const status = normalizeTicketStatus(firstJsonValue(source, ["ticketStatus", "status", "ticket_status", "workflowStatus"], positiveResponseStatus === "READY" ? "CLEAR" : "WAITING_ON_RESPONSE"));
  const ticket = {
    id: "811-" + ticketNumber.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase(),
    tenantId: String(firstJsonValue(source, ["tenantId", "workspaceId"], "tenant-florida811")),
    ticketNumber,
    state: String(firstJsonValue(source, ["state", "address.state", "excavator.state"], "FL")).toUpperCase(),
    county: String(firstJsonValue(source, ["county", "worksite.county", "digSite.county"], "")),
    city: String(firstJsonValue(source, ["city", "worksite.city", "digSite.city", "excavator.city"], "")),
    street: String(firstJsonValue(source, ["address1", "street", "worksite.street", "digSite.street", "location.address", "excavator.address1"], "")),
    crossStreet: String(firstJsonValue(source, ["crossStreet", "nearestCrossStreet", "worksite.crossStreet", "digSite.crossStreet"], "")),
    workDescription: String(firstJsonValue(source, ["workDescription", "work_type", "workType", "description", "scope"], "")),
    excavatorName: String(firstJsonValue(source, ["companyName", "excavatorName", "excavator.companyName", "company.name"], "")),
    customerName: String(firstJsonValue(source, ["customerName", "clientName", "workingFor", "working_for", "owner"], activeJob().customer)),
    providerName: "Florida 811",
    sourceSystem: "Sunshine 811 Exactix",
    sourceFormat: "Florida 811 ticket JSON",
    sourcePortal: String(firstJsonValue(source, ["sourcePortal", "portal"], "exactix.sunshine811.com")),
    companyId: String(firstJsonValue(source, ["companyId", "companyID", "company_id", "excavator.companyId"], "")),
    excavatorId: String(firstJsonValue(source, ["excavatorId", "excavatorID", "excavator_id", "excavator.id"], "")),
    officeName: String(firstJsonValue(source, ["officeName", "office_name", "excavator.officeName"], "")),
    companyType: String(firstJsonValue(source, ["companyType", "company_type", "excavator.companyType"], "CONTRACTOR")),
    phone: String(firstJsonValue(source, ["phone", "phoneNumber", "excavator.phone"], "")),
    email: String(firstJsonValue(source, ["email", "ticketEmail", "excavator.email"], "")),
    callBackTime: String(firstJsonValue(source, ["callBackTime", "callbackTime", "call_back_time"], "ANYTIME")),
    fieldContact: String(firstJsonValue(source, ["fieldContact", "field_contact", "fieldContact.name"], "")),
    fieldContactType: String(firstJsonValue(source, ["fieldContactType", "contactType", "fieldContact.type"], "Cell")),
    fieldContactMethod: String(firstJsonValue(source, ["fieldContactMethod", "fieldContactPhone", "field_contact_method", "fieldContact.phone"], "")),
    workingFor: String(firstJsonValue(source, ["workingFor", "working_for", "owner", "work.owner"], "")),
    workType: String(firstJsonValue(source, ["workType", "work_type", "typeOfWork", "work.type"], "")),
    status,
    priority: String(firstJsonValue(source, ["priority", "ticketPriority"], "NORMAL")).toUpperCase(),
    dueAt,
    expiresAt,
    renewalRequiredAt: parseDateLike(firstJsonValue(source, ["renewalRequiredAt", "renewalDate", "renewBy"], ""), dueAt),
    latitude: Number(firstJsonValue(source, ["latitude", "lat", "gps.latitude", "worksite.latitude"], 0)) || undefined,
    longitude: Number(firstJsonValue(source, ["longitude", "lng", "lon", "gps.longitude", "worksite.longitude"], 0)) || undefined,
    x: Number(firstJsonValue(source, ["x", "map.x"], 72)) || 72,
    y: Number(firstJsonValue(source, ["y", "map.y"], 78)) || 78,
    coverageStart: coveragePointFromJson(source, "coverageStart", 72, 47, "Start"),
    coverageEnd: coveragePointFromJson(source, "coverageEnd", 53, 91, "End"),
    assignedCrewId: String(firstJsonValue(source, ["assignedCrewId", "crew", "assignedCrew"], "")) || null,
    assignedUserId: String(firstJsonValue(source, ["assignedUserId", "fieldTech", "lastTech"], "")) || null,
    linkedJobId: String(firstJsonValue(source, ["linkedJobId", "jobId", "job_id"], "")) || null,
    positiveResponseStatus,
    proof: ["Sunshine 811 / Exactix JSON imported", "Excavator information attached to ticket"],
    responses: Array.isArray(source.responses) ? source.responses : [],
    events: ["Imported from Sunshine 811 / Exactix JSON"],
    rawExactixJson: source,
  };
  ticket.linkedJobId = matchSunshineTicketToJob(ticket);
  if (!ticket.assignedCrewId && ticket.linkedJobId) ticket.assignedCrewId = jobPrimaryCrew(ticket.linkedJobId).replace(" Crew", "");
  return ticket;
}

function upsertCrew811Ticket(ticket) {
  const index = crew811Tickets.findIndex((item) => item.ticketNumber === ticket.ticketNumber || item.id === ticket.id);
  const event = `${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} Sunshine 811 JSON synced to ${ticket.linkedJobId || "unmatched job"}`;
  if (index >= 0) {
    crew811Tickets[index] = {
      ...crew811Tickets[index],
      ...ticket,
      events: [event, ...(crew811Tickets[index].events || []), ...(ticket.events || [])].slice(0, 10),
    };
    return crew811Tickets[index];
  }
  ticket.events = [event, ...(ticket.events || [])].slice(0, 10);
  crew811Tickets.unshift(ticket);
  return ticket;
}

function linkedCrew811Tickets(jobId) {
  return crew811Tickets.filter((ticket) => ticket.linkedJobId === jobId);
}

function crew811JobStatus(jobId) {
  const tickets = linkedCrew811Tickets(jobId);
  if (!tickets.length) return { ticketText: "No ticket linked", statusText: "Not synced", coverageText: "No covered segment", expiryText: "-", blockerText: "Import Sunshine 811 JSON" };
  const sorted = [...tickets].sort((a, b) => {
    const rank = { EXPIRED: 6, CONFLICT: 5, RENEWAL_NEEDED: 4, WAITING_ON_RESPONSE: 3, NEEDS_REVIEW: 2, CLEAR: 1, CLOSED: 0 };
    return (rank[b.status] || 0) - (rank[a.status] || 0);
  });
  const ticket = sorted[0];
  const blocker = ticket.status === "CLEAR" || ticket.positiveResponseStatus === "READY"
    ? "None"
    : ticket.status === "EXPIRED"
      ? "Expired Sunshine 811 ticket"
      : ticket.status === "CONFLICT"
        ? "Member/operator conflict"
        : ticket.positiveResponseStatus === "PENDING"
          ? "Positive response pending"
          : "Verify Sunshine 811 ticket";
  return {
    ticketText: sorted.map((item) => item.ticketNumber).join(", "),
    statusText: `${ticket.status} / ${ticket.positiveResponseStatus || "PENDING"}`,
    coverageText: `${ticket.coverageStart?.label || "Start"} to ${ticket.coverageEnd?.label || "End"}`,
    expiryText: ticket.expiresAt ? formatTicketDate(ticket.expiresAt) : "-",
    blockerText: blocker,
  };
}

const claimTypeColors = {
  "Utility Strike": "#dc2626",
  Restoration: "#f97316",
  "Property Damage": "#eab308",
  Warranty: "#7c3aed",
  "Vehicle / Equipment": "#2563eb",
};

const claimsDamageRecords = [
  {
    id: "CLM-1045-02",
    type: "Utility Strike",
    status: "Investigating",
    jobId: "JOB-1045",
    customer: "WINDSTREAM",
    location: "Pine Hill Rd shoulder / SV-2 bore exit",
    owner: "PM Review",
    severity: "High",
    source: "Foreman damage report",
    linked811: "FL811-24-1201",
    claimValue: 12800,
    blockedDollars: 22900,
    x: 48,
    y: 88,
    photo: "assets/photo-sv-2.png",
    caption: "Road shoulder strike report pinned to rejected SV-2 proof",
    proof: ["Damage photo attached", "811 ticket FL811-24-1201 expired", "Bore log variance attached", "Owner notice pending"],
    events: ["09:20 Damage record opened", "09:31 Billing hold applied to SV-2", "10:05 PM requested utility response"],
    updatedAt: "06/26/2026 09:20",
  },
  {
    id: "CLM-1045-03",
    type: "Restoration",
    status: "Open",
    jobId: "JOB-1045",
    customer: "WINDSTREAM",
    location: "HH-1 east fence restoration",
    owner: "Alpha Crew",
    severity: "Medium",
    source: "Closeout photo review",
    linked811: "FL811-24-1187",
    claimValue: 2400,
    blockedDollars: 8450,
    x: 82,
    y: 45,
    photo: "assets/photo-hh-1.png",
    caption: "Restoration claim at HH-1 fence line",
    proof: ["Before photo attached", "After photo requested", "Seed/straw ticket missing"],
    events: ["08:45 Restoration issue logged", "09:12 Foreman assigned"],
    updatedAt: "06/26/2026 08:45",
  },
  {
    id: "CLM-1047-01",
    type: "Property Damage",
    status: "Recovery",
    jobId: "JOB-1047",
    customer: "SPECTRUM",
    location: "Cedar Park driveway apron",
    owner: "Claims Desk",
    severity: "High",
    source: "Customer email",
    linked811: "CP-811-7780",
    claimValue: 18600,
    blockedDollars: 46500,
    x: 56,
    y: 66,
    photo: "assets/photo-sv-1.png",
    caption: "Drive apron photo linked to rejected closeout",
    proof: ["Owner email attached", "Before photo missing", "Subcontractor notice sent"],
    events: ["07:30 Customer complaint imported", "08:10 Recovery file opened"],
    updatedAt: "06/26/2026 07:30",
  },
  {
    id: "CLM-1048-01",
    type: "Warranty",
    status: "Closed",
    jobId: "JOB-1048",
    customer: "AT&T",
    location: "Slaughter Ln vault lid",
    owner: "Delta Crew",
    severity: "Low",
    source: "Warranty inspection",
    linked811: "SL-811-1402",
    claimValue: 0,
    blockedDollars: 0,
    x: 68,
    y: 80,
    photo: "assets/photo-ug-1.png",
    caption: "Warranty inspection closed with no billing hold",
    proof: ["Warranty photo attached", "Owner accepted", "No blocked dollars"],
    events: ["Yesterday warranty issue reviewed", "Closed after owner acceptance"],
    updatedAt: "06/25/2026 16:10",
  },
];

const documentTemplates = [
  { documentType: "daily_closeout_package", title: "Daily closeout package", audience: "closeout", requiredSourceTypes: ["photo", "gps", "closeout_line", "rate_reference"], exportFormats: ["PDF", "JSON", "CSV"], customerFacing: true },
  { documentType: "field_proof_packet", title: "Field proof packet", audience: "crew", requiredSourceTypes: ["photo", "gps", "crew_log"], exportFormats: ["PDF", "JSON"], customerFacing: true },
  { documentType: "billing_readiness_support_packet", title: "Billing-readiness support packet", audience: "billing_readiness", requiredSourceTypes: ["closeout_line", "rate_reference", "audit"], exportFormats: ["PDF", "CSV", "JSON"], customerFacing: false },
  { documentType: "held_line_report", title: "Held line report", audience: "billing_readiness", requiredSourceTypes: ["closeout_line", "audit"], exportFormats: ["PDF", "CSV"], customerFacing: false },
  { documentType: "811_ticket_packet", title: "811 ticket packet", audience: "locate", requiredSourceTypes: ["811"], exportFormats: ["PDF", "JSON"], customerFacing: true },
  { documentType: "claim_support_packet", title: "Claim support packet", audience: "claims", requiredSourceTypes: ["claim", "photo", "811"], exportFormats: ["PDF", "JSON"], customerFacing: false },
  { documentType: "material_reconciliation_report", title: "Material reconciliation report", audience: "materials", requiredSourceTypes: ["material"], exportFormats: ["PDF", "CSV"], customerFacing: false },
  { documentType: "job_chat_decision_log", title: "Job chat decision log", audience: "internal", requiredSourceTypes: ["chat", "decision"], exportFormats: ["PDF", "JSON"], customerFacing: false },
  { documentType: "audit_trail_report", title: "Audit trail report", audience: "owner", requiredSourceTypes: ["audit"], exportFormats: ["PDF", "JSON"], customerFacing: false },
  { documentType: "ai_situation_summary", title: "AI situation summary", audience: "owner", requiredSourceTypes: ["audit", "chat", "manual_note"], exportFormats: ["PDF", "JSON"], customerFacing: false },
  { documentType: "damage_proof_packet", title: "Damage proof packet", audience: "claims", requiredSourceTypes: ["damage_proof", "photo", "gps"], exportFormats: ["PDF", "JSON"], customerFacing: false },
];

const documentRequirements = documentTemplates.flatMap((template) => {
  return template.requiredSourceTypes.map((sourceType) => ({
    id: `${template.documentType}-${sourceType}`,
    documentType: template.documentType,
    requiredSourceType: sourceType,
    requiredFields: sourceType === "damage_proof" ? ["jobId", "assetId", "damageType", "status", "capturedAt"] : ["jobId", "sourceId", "capturedAt"],
    blockerIfMissing: ["photo", "gps", "811", "rate_reference", "damage_proof"].includes(sourceType),
  }));
});

let damageProofRecords = [
  {
    id: "DPF-1045-01",
    workspaceId: "demo-seed",
    jobId: "JOB-1045",
    assetId: "SV-2",
    mapPinId: "damage-pin-sv2",
    claimId: "CLM-1045-02",
    linked811TicketId: "FL811-24-1201",
    linkedUtilityConflictId: "Road shoulder",
    submittedByUserId: "user-charlie-foreman",
    submittedByName: "T. Nguyen",
    submittedByRole: "Foreman",
    crewId: "Charlie",
    foremanId: "charlie-foreman",
    damageType: "utility_strike",
    proofCategory: "crew_damage_proof",
    status: "needs_review",
    occurredWhen: "during_work",
    locationText: "SV-2 / Pine Hill Rd shoulder",
    gpsLat: 30.209884,
    gpsLng: -97.951755,
    gpsAccuracy: "+/- 18 ft",
    capturedAt: "2026-06-23T09:20:00",
    description: "Road shoulder utility conflict reported from SV-2 bore exit area.",
    immediateActionTaken: "Work stopped at shoulder; PM requested utility response and bore log review.",
    workStopped: true,
    ownerNotified: true,
    pmNotified: true,
    customerNotified: false,
    repairComplete: false,
    restorationComplete: false,
    reviewRequired: true,
    blockerCreated: true,
    relatedBlockerId: "BLOCK-SV2-REDLINE",
    nextAction: "PM to complete investigation",
    closeoutImpact: "Hold review",
    owner: "PM Review",
    lastUpdate: "06/26/2026 09:20",
    customerFacingApproved: false,
    attachments: [
      { id: "DPF-1045-01-A1", damageProofId: "DPF-1045-01", attachmentType: "photo", title: "Wide road shoulder photo", fileRef: "assets/photo-sv-2.png", gpsLat: 30.209884, gpsLng: -97.951755, capturedAt: "2026-06-23T09:20:00", capturedBy: "T. Nguyen", customerFacing: false, internalOnly: false, sourceDevice: "Charlie tablet", auditHistory: ["Photo linked to original crew proof"] },
      { id: "DPF-1045-01-A2", damageProofId: "DPF-1045-01", attachmentType: "locate_ticket", title: "FL811-24-1201", fileRef: "crew811:FL811-24-1201", capturedAt: "2026-06-23T09:31:00", capturedBy: "Locate Desk", customerFacing: true, internalOnly: false, sourceDevice: "Sunshine 811 Exactix", auditHistory: ["Locate ticket linked to damage proof"] },
    ],
    aiSummary: "SV-2 has utility strike proof linked to FL811-24-1201 and CLM-1045-02. It needs PM investigation before closeout release.",
    aiQuestions: ["Do you have a close-up photo and utility marking photo?", "Was the customer notified?", "Should this create a customer-facing notice draft after PM review?"],
    auditHistory: ["Damage proof created from foreman report", "Closeout hold linked to SV-2", "Claim support packet available for management review"],
  },
  {
    id: "DPF-1045-02",
    workspaceId: "demo-seed",
    jobId: "JOB-1045",
    assetId: "HH-1",
    mapPinId: "damage-pin-hh1",
    claimId: "CLM-1045-03",
    linked811TicketId: "",
    linkedUtilityConflictId: "",
    submittedByUserId: "user-alpha-foreman",
    submittedByName: "J. Ramirez",
    submittedByRole: "Foreman",
    crewId: "Alpha",
    foremanId: "alpha-foreman",
    damageType: "restoration",
    proofCategory: "crew_damage_proof",
    status: "submitted",
    occurredWhen: "after_work",
    locationText: "HH-1 / Pine Hill east fence",
    gpsLat: 30.210654,
    gpsLng: -97.951234,
    gpsAccuracy: "+/- 6 ft",
    capturedAt: "2026-06-23T08:45:00",
    description: "Restoration record opened for HH-1 fence line. After/restoration photo still needed.",
    immediateActionTaken: "Foreman assigned restoration after-photo follow-up.",
    workStopped: false,
    ownerNotified: false,
    pmNotified: true,
    customerNotified: false,
    repairComplete: false,
    restorationComplete: false,
    reviewRequired: true,
    blockerCreated: true,
    relatedBlockerId: "BLOCK-HH1-RESTORE",
    nextAction: "Crew to attach after photo",
    closeoutImpact: "Restoration proof needed",
    owner: "Alpha Crew",
    lastUpdate: "06/26/2026 08:45",
    customerFacingApproved: false,
    attachments: [
      { id: "DPF-1045-02-A1", damageProofId: "DPF-1045-02", attachmentType: "photo", title: "Before restoration photo", fileRef: "assets/photo-hh-1.png", gpsLat: 30.210654, gpsLng: -97.951234, capturedAt: "2026-06-23T08:45:00", capturedBy: "J. Ramirez", customerFacing: false, internalOnly: false, sourceDevice: "Alpha iPad", auditHistory: ["Before photo linked to HH-1 restoration proof"] },
    ],
    aiSummary: "HH-1 has restoration proof open and needs an after/restoration photo before the record can be closed.",
    aiQuestions: ["Is restoration complete or still open?", "Do you have an after/restoration photo?", "Should this remain internal until PM approves it for the customer package?"],
    auditHistory: ["Damage proof created from closeout photo review", "Restoration blocker created", "AI requested after photo"],
  },
];

const assetData = {
  "HH-1": {
    jobId: "JOB-1045",
    asset: "HH-1 Handhole",
    status: "Ready to Bill",
    statusClass: "ready",
    crew: "Alpha",
    location: "HH-1 handhole / Pine Hill east fence",
    source: "Foreman app + GPS camera",
    device: "Alpha iPad / GPS camera",
    gps: "30.210654, -97.951234",
    feedUpdated: "06/23/2026 14:40",
    tech: "J. Ramirez / Alpha",
    contractor: "Lone Star Fiber Works",
    updated: "06/23/2026 14:40",
    proof: "Complete",
    blocker: "None",
    value: "$8,450",
    amount: 8450,
    payItem: "Handhole install + restoration",
    photo: "assets/photo-hh-1.png",
    photoCaption: "HH-1 handhole evidence at job location",
    progress: 100,
    list: [
      ["done", "Crew Submitted: handhole photo"],
      ["done", "GPS point attached"],
      ["done", "Pay item matched"],
      ["done", "Ready to Bill"],
    ],
    comms: [
      ["14:40 Chat", "Alpha: HH-1 set, restoration photo attached."],
      ["14:12 Email", "PM sent ready-to-bill note for handhole install."],
      ["13:58 Timeline", "GPS point and pay item matched to HH-1."],
    ],
  },
  "SC-1": {
    jobId: "JOB-1045-SC1",
    asset: "SC-1 Splice Closure",
    status: "Waiting on Approval",
    statusClass: "waiting",
    crew: "Bravo",
    location: "Pole #124567 / aerial run north side",
    source: "Splicing crew mobile upload",
    device: "Bravo phone / pole photo",
    gps: "30.211012, -97.950918",
    feedUpdated: "06/23/2026 13:15",
    tech: "M. Clark / Bravo",
    contractor: "Summit Splicing",
    updated: "06/23/2026 13:15",
    proof: "Submitted",
    blocker: "PM review pending",
    value: "$11,200",
    amount: 11200,
    payItem: "Aerial splice closure",
    photo: "assets/photo-sc-1.png",
    photoCaption: "SC-1 aerial splice closure photo at pole line",
    progress: 87,
    list: [
      ["done", "Aerial splice photo"],
      ["done", "Pole #124567 noted"],
      ["done", "Fiber count entered"],
      ["", "Waiting on Approval"],
    ],
    comms: [
      ["13:15 Email", "Owner asked PM to confirm pole #124567 and aerial strand note."],
      ["12:48 Chat", "Bravo: splice closure photo uploaded from pole line."],
      ["12:25 Timeline", "SC-1 proof submitted; approval still open."],
    ],
  },
  "SV-1": {
    jobId: "JOB-1045-SV1",
    asset: "SV-1 Splice Vault",
    status: "Missing Photos",
    statusClass: "missing",
    crew: "Alpha",
    location: "SV-1 vault / UG route by east tree line",
    source: "Foreman app + GPS camera",
    device: "Alpha iPad / vault photo",
    gps: "30.210438, -97.950990",
    feedUpdated: "06/23/2026 12:05",
    tech: "J. Ramirez / Alpha",
    contractor: "Lone Star Fiber Works",
    updated: "06/23/2026 12:05",
    proof: "Needs Fix",
    blocker: "Missing open-vault photo",
    value: "$18,600",
    amount: 18600,
    payItem: "Splice vault SV-1",
    photo: "assets/photo-sv-1.png",
    photoCaption: "SV-1 needs open-vault photo before billing",
    progress: 62,
    list: [
      ["done", "Vault location confirmed"],
      ["done", "UG route marked"],
      ["", "Missing Photos: open vault"],
      ["", "Blocked Dollars until resubmitted"],
    ],
    comms: [
      ["12:05 Chat", "Alpha: SV-1 lid photo uploaded, open-vault shot missing."],
      ["11:44 Email", "PM requested open-vault photo before billing line can release."],
      ["11:20 Timeline", "SV-1 marked Needs Fix; $18,600 held."],
    ],
  },
  "SV-2": {
    jobId: "JOB-1045-SV2",
    asset: "SV-2 Splice Vault",
    status: "Rejected",
    statusClass: "rejected",
    crew: "Charlie",
    location: "SV-2 vault / Pine Hill Rd shoulder",
    source: "Bore crew upload + PM rejection email",
    device: "Charlie tablet / redline upload",
    gps: "30.209884, -97.951755",
    feedUpdated: "06/23/2026 10:30",
    tech: "T. Nguyen / Charlie",
    contractor: "Canyon Bore",
    updated: "06/23/2026 10:30",
    proof: "Rejected",
    blocker: "Redline route does not match bore summary",
    value: "$22,900",
    amount: 22900,
    payItem: "Splice vault SV-2",
    photo: "assets/photo-sv-2.png",
    photoCaption: "SV-2 rejected photo/redline mismatch",
    progress: 48,
    list: [
      ["done", "Crew Submitted packet"],
      ["rejected", "Owner rejected route redline"],
      ["", "Needs Fix: bore footage mismatch"],
      ["", "Cannot bill until corrected"],
    ],
    comms: [
      ["10:30 Email", "Owner rejected SV-2: redline does not match bore summary."],
      ["10:18 Chat", "Charlie: bore footage revised, waiting on PM check."],
      ["09:55 Timeline", "SV-2 moved to rejected queue; invoice hold applied."],
    ],
  },
  "UG-1": {
    jobId: "JOB-1045-UG1",
    asset: "UG-1 Underground Fiber",
    status: "Waiting on Approval",
    statusClass: "waiting",
    crew: "Delta",
    location: "UG-1 conduit run / SV-1 to road crossing",
    source: "Locate desk + crew mobile upload",
    device: "Delta phone / locate photo",
    gps: "30.210071, -97.951112",
    feedUpdated: "06/23/2026 11:50",
    tech: "R. Flores / Delta",
    contractor: "Canyon Bore",
    updated: "06/23/2026 11:50",
    proof: "Submitted",
    blocker: "Locate verification pending",
    value: "$32,400",
    amount: 32400,
    payItem: "Underground fiber in conduit",
    photo: "assets/photo-ug-1.png",
    photoCaption: "UG-1 underground route locate photo",
    progress: 74,
    list: [
      ["done", "Conduit route submitted"],
      ["done", "Material qty attached"],
      ["", "Waiting on Approval: locate check"],
      ["", "Billing hold"],
    ],
    comms: [
      ["11:50 Chat", "Delta: UG route complete from SV-1 to road crossing."],
      ["11:05 Email", "Locate desk asked for verification before approval."],
      ["10:42 Timeline", "Material quantity attached; approval pending locate check."],
    ],
  },
  "OR-HH-2": {
    jobId: "JOB-1046",
    asset: "OR-HH-2 Handhole",
    status: "Ready to Bill",
    statusClass: "ready",
    crew: "Field Team 4",
    location: "Oak Ridge handhole / west easement",
    source: "Foreman app + GPS camera",
    device: "Team 4 iPad / GPS camera",
    gps: "30.512188, -97.677418",
    feedUpdated: "06/23/2026 13:55",
    tech: "A. Molina / Field Team 4",
    contractor: "Hill Country Fiber",
    updated: "06/23/2026 13:55",
    proof: "Complete",
    blocker: "None",
    value: "$21,700",
    amount: 21700,
    payItem: "Handhole set + restoration",
    photo: "assets/photo-hh-1.png",
    photoCaption: "OR-HH-2 handhole evidence at oak ridge easement",
    progress: 100,
    list: [
      ["done", "Crew Submitted: handhole set"],
      ["done", "GPS point attached"],
      ["done", "Restoration photo attached"],
      ["done", "Ready to Bill"],
    ],
    comms: [
      ["13:55 Chat", "Team 4: OR-HH-2 set and restoration photo uploaded."],
      ["13:22 Email", "Kinetic PM approved handhole location."],
      ["12:40 Timeline", "Pay item matched to Oak Ridge job."],
    ],
  },
  "OR-SC-3": {
    jobId: "JOB-1046",
    asset: "OR-SC-3 Splice Closure",
    status: "Waiting on Approval",
    statusClass: "waiting",
    crew: "Summit Splicing",
    location: "Oak Ridge pole tie-in / north run",
    source: "Splicing crew mobile upload",
    device: "Summit phone / pole photo",
    gps: "30.512533, -97.677109",
    feedUpdated: "06/23/2026 12:35",
    tech: "M. Clark / Summit",
    contractor: "Summit Splicing",
    updated: "06/23/2026 12:35",
    proof: "Submitted",
    blocker: "Owner splice count review",
    value: "$14,200",
    amount: 14200,
    payItem: "Aerial closure and splice count",
    photo: "assets/photo-sc-1.png",
    photoCaption: "OR-SC-3 aerial closure proof waiting on owner count",
    progress: 84,
    list: [
      ["done", "Closure photo attached"],
      ["done", "Fiber count entered"],
      ["", "Waiting on Approval: splice count"],
      ["", "Billing hold"],
    ],
    comms: [
      ["12:35 Chat", "Summit: closure photo and splice tray count attached."],
      ["12:18 Email", "Kinetic reviewer asked for splice count confirmation."],
      ["11:50 Timeline", "OR-SC-3 moved to owner approval queue."],
    ],
  },
  "OR-SV-4": {
    jobId: "JOB-1046",
    asset: "OR-SV-4 Splice Vault",
    status: "Ready to Bill",
    statusClass: "ready",
    crew: "Field Team 4",
    location: "Oak Ridge vault / driveway bore exit",
    source: "Foreman app + GPS camera",
    device: "Team 4 iPad / vault photo",
    gps: "30.512014, -97.677722",
    feedUpdated: "06/23/2026 13:20",
    tech: "A. Molina / Field Team 4",
    contractor: "Hill Country Fiber",
    updated: "06/23/2026 13:20",
    proof: "Complete",
    blocker: "None",
    value: "$9,600",
    amount: 9600,
    payItem: "Splice vault OR-SV-4",
    photo: "assets/photo-sv-1.png",
    photoCaption: "OR-SV-4 open-vault proof attached",
    progress: 100,
    list: [
      ["done", "Vault open photo attached"],
      ["done", "GPS matched"],
      ["done", "Pay item matched"],
      ["done", "Ready to Bill"],
    ],
    comms: [
      ["13:20 Timeline", "OR-SV-4 passed open-vault proof check."],
      ["13:02 Chat", "Team 4: vault photo and restoration attached."],
      ["12:45 Email", "PM released OR-SV-4 billing line."],
    ],
  },
  "OR-SV-5": {
    jobId: "JOB-1046",
    asset: "OR-SV-5 Splice Vault",
    status: "Missing Photos",
    statusClass: "missing",
    crew: "Field Team 4",
    location: "Oak Ridge vault / alley tie-in",
    source: "Foreman app + GPS camera",
    device: "Team 4 iPad / vault photo",
    gps: "30.511804, -97.678015",
    feedUpdated: "06/23/2026 11:15",
    tech: "A. Molina / Field Team 4",
    contractor: "Hill Country Fiber",
    updated: "06/23/2026 11:15",
    proof: "Needs Fix",
    blocker: "Missing before photo",
    value: "$7,400",
    amount: 7400,
    payItem: "Splice vault OR-SV-5",
    photo: "assets/photo-sv-2.png",
    photoCaption: "OR-SV-5 needs before photo before billing",
    progress: 58,
    list: [
      ["done", "After photo attached"],
      ["done", "GPS point attached"],
      ["", "Missing Photos: before photo"],
      ["", "Blocked Dollars until resubmitted"],
    ],
    comms: [
      ["11:15 Chat", "Team 4: after photo uploaded, no before photo on device."],
      ["10:58 Email", "PM asked crew to upload before photo from camera roll."],
      ["10:40 Timeline", "OR-SV-5 marked Needs Fix."],
    ],
  },
  "OR-UG-2": {
    jobId: "JOB-1046",
    asset: "OR-UG-2 Underground Fiber",
    status: "Waiting on Approval",
    statusClass: "waiting",
    crew: "Bore Crew B",
    location: "Oak Ridge conduit / alley to handhole",
    source: "Bore tracker + crew mobile upload",
    device: "Bore tablet / reel counter",
    gps: "30.511920, -97.677601",
    feedUpdated: "06/23/2026 10:50",
    tech: "S. Patel / Bore Crew B",
    contractor: "Canyon Bore",
    updated: "06/23/2026 10:50",
    proof: "Submitted",
    blocker: "Footage overage approval",
    value: "$6,800",
    amount: 6800,
    payItem: "Underground fiber in conduit",
    photo: "assets/photo-ug-1.png",
    photoCaption: "OR-UG-2 bore path proof waiting on overage approval",
    progress: 76,
    list: [
      ["done", "Bore path photo attached"],
      ["done", "Material count entered"],
      ["", "Waiting on Approval: footage overage"],
      ["", "Billing hold"],
    ],
    comms: [
      ["10:50 Timeline", "OR-UG-2 bore footage submitted with +12 ft overage."],
      ["10:31 Chat", "Bore Crew B: rock forced minor route change."],
      ["10:05 Email", "Kinetic PM asked for overage approval backup."],
    ],
  },
  "CP-HH-7": {
    jobId: "JOB-1047",
    asset: "CP-HH-7 Handhole",
    status: "Rejected",
    statusClass: "rejected",
    crew: "Cedar Crew",
    location: "Cedar Park node split / HH-7",
    source: "Owner rejection note + crew photo",
    device: "Cedar tablet / GPS camera",
    gps: "30.508200, -97.820551",
    feedUpdated: "06/23/2026 09:35",
    tech: "B. Ibarra / Cedar Crew",
    contractor: "Metro Fiber Services",
    updated: "06/23/2026 09:35",
    proof: "Rejected",
    blocker: "Wrong handhole label in photo",
    value: "$12,500",
    amount: 12500,
    payItem: "Handhole install",
    photo: "assets/photo-hh-1.png",
    photoCaption: "CP-HH-7 rejected because label does not match asset",
    progress: 42,
    list: [
      ["rejected", "Owner rejected label mismatch"],
      ["done", "GPS point attached"],
      ["", "Needs Fix: retake label photo"],
      ["", "Cannot bill until corrected"],
    ],
    comms: [
      ["09:35 Email", "Spectrum rejected HH-7 due to wrong asset label."],
      ["09:18 Chat", "Crew found label mismatch and will retake."],
      ["08:55 Timeline", "CP-HH-7 invoice line held."],
    ],
  },
  "CP-SC-2": {
    jobId: "JOB-1047",
    asset: "CP-SC-2 Splice Closure",
    status: "Missing Photos",
    statusClass: "missing",
    crew: "Splice Crew C",
    location: "Cedar Park aerial closure / node split",
    source: "Splice crew phone upload",
    device: "Crew C phone / pole photo",
    gps: "30.508411, -97.820220",
    feedUpdated: "06/23/2026 09:10",
    tech: "L. Romero / Splice Crew C",
    contractor: "Summit Splicing",
    updated: "06/23/2026 09:10",
    proof: "Needs Fix",
    blocker: "Missing splice tray photo",
    value: "$10,800",
    amount: 10800,
    payItem: "Closure splice and tray",
    photo: "assets/photo-sc-1.png",
    photoCaption: "CP-SC-2 missing splice tray photo",
    progress: 55,
    list: [
      ["done", "Closure exterior photo attached"],
      ["done", "Pole ID attached"],
      ["", "Missing Photos: splice tray"],
      ["", "Blocked Dollars until resubmitted"],
    ],
    comms: [
      ["09:10 Chat", "Splice Crew C: exterior photo uploaded; tray photo missing."],
      ["08:52 Email", "PM asked crew for splice tray proof."],
      ["08:20 Timeline", "CP-SC-2 marked Needs Fix."],
    ],
  },
  "CP-SV-1": {
    jobId: "JOB-1047",
    asset: "CP-SV-1 Splice Vault",
    status: "Rejected",
    statusClass: "rejected",
    crew: "Cedar Crew",
    location: "Cedar Park vault / trail crossing",
    source: "Owner rejection note",
    device: "Cedar tablet / vault photo",
    gps: "30.508018, -97.820900",
    feedUpdated: "06/23/2026 08:50",
    tech: "B. Ibarra / Cedar Crew",
    contractor: "Metro Fiber Services",
    updated: "06/23/2026 08:50",
    proof: "Rejected",
    blocker: "Restoration not complete",
    value: "$18,900",
    amount: 18900,
    payItem: "Splice vault CP-SV-1",
    photo: "assets/photo-sv-1.png",
    photoCaption: "CP-SV-1 rejected for restoration punch item",
    progress: 40,
    list: [
      ["done", "Vault photo attached"],
      ["rejected", "Restoration rejected"],
      ["", "Needs Fix: seed and straw photo"],
      ["", "Cannot bill until corrected"],
    ],
    comms: [
      ["08:50 Email", "Spectrum rejected CP-SV-1 restoration."],
      ["08:22 Chat", "Crew: restoration subcontractor scheduled."],
      ["08:05 Timeline", "CP-SV-1 moved to rejected queue."],
    ],
  },
  "CP-SV-3": {
    jobId: "JOB-1047",
    asset: "CP-SV-3 Splice Vault",
    status: "Waiting on Approval",
    statusClass: "waiting",
    crew: "Cedar Crew",
    location: "Cedar Park vault / subdivision entrance",
    source: "Foreman app + GPS camera",
    device: "Cedar tablet / GPS camera",
    gps: "30.507910, -97.821102",
    feedUpdated: "06/23/2026 10:05",
    tech: "B. Ibarra / Cedar Crew",
    contractor: "Metro Fiber Services",
    updated: "06/23/2026 10:05",
    proof: "Submitted",
    blocker: "QC inspection pending",
    value: "$15,100",
    amount: 15100,
    payItem: "Splice vault CP-SV-3",
    photo: "assets/photo-sv-2.png",
    photoCaption: "CP-SV-3 submitted for QC inspection",
    progress: 81,
    list: [
      ["done", "Open-vault photo attached"],
      ["done", "Restoration photo attached"],
      ["", "Waiting on Approval: QC inspection"],
      ["", "Billing hold"],
    ],
    comms: [
      ["10:05 Chat", "Crew: CP-SV-3 complete and ready for QC."],
      ["09:44 Timeline", "QC inspection request sent."],
      ["09:20 Email", "PM queued CP-SV-3 for owner review."],
    ],
  },
  "CP-UG-4": {
    jobId: "JOB-1047",
    asset: "CP-UG-4 Underground Fiber",
    status: "Missing Photos",
    statusClass: "missing",
    crew: "Bore Crew C",
    location: "Cedar Park UG leg / trail crossing",
    source: "Bore tracker + locate desk",
    device: "Bore tablet / tracker",
    gps: "30.507770, -97.820785",
    feedUpdated: "06/23/2026 08:30",
    tech: "K. Shaw / Bore Crew C",
    contractor: "Canyon Bore",
    updated: "06/23/2026 08:30",
    proof: "Needs Fix",
    blocker: "Missing bore exit photo",
    value: "$16,200",
    amount: 16200,
    payItem: "Underground fiber bore",
    photo: "assets/photo-ug-1.png",
    photoCaption: "CP-UG-4 needs bore exit photo",
    progress: 52,
    list: [
      ["done", "Entry photo attached"],
      ["done", "Locate ticket attached"],
      ["", "Missing Photos: bore exit"],
      ["", "Blocked Dollars until resubmitted"],
    ],
    comms: [
      ["08:30 Timeline", "CP-UG-4 missing bore exit photo."],
      ["08:18 Chat", "Bore Crew C: will upload exit photo after lane opens."],
      ["07:55 Email", "PM put UG-4 billing line on hold."],
    ],
  },
  "SL-HH-9": {
    jobId: "JOB-1048",
    asset: "SL-HH-9 Handhole",
    status: "Ready to Bill",
    statusClass: "ready",
    crew: "Make Ready Crew",
    location: "Slaughter Ln HH-9 / south shoulder",
    source: "Foreman app + GPS camera",
    device: "Make Ready iPad / GPS camera",
    gps: "30.172410, -97.849915",
    feedUpdated: "06/23/2026 15:05",
    tech: "N. Brooks / Make Ready Crew",
    contractor: "Capitol OSP",
    updated: "06/23/2026 15:05",
    proof: "Complete",
    blocker: "None",
    value: "$12,400",
    amount: 12400,
    payItem: "Handhole install + shoulder restoration",
    photo: "assets/photo-hh-1.png",
    photoCaption: "SL-HH-9 ready-to-bill handhole proof",
    progress: 100,
    list: [
      ["done", "Crew Submitted: handhole photo"],
      ["done", "GPS point attached"],
      ["done", "Traffic control photo attached"],
      ["done", "Ready to Bill"],
    ],
    comms: [
      ["15:05 Chat", "Make Ready: HH-9 complete, shoulder restored."],
      ["14:46 Email", "AT&T closeout accepted handhole proof."],
      ["14:22 Timeline", "SL-HH-9 moved to ready-to-bill."],
    ],
  },
  "SL-SC-1": {
    jobId: "JOB-1048",
    asset: "SL-SC-1 Splice Closure",
    status: "Ready to Bill",
    statusClass: "ready",
    crew: "Splice Crew A",
    location: "Slaughter Ln pole transfer / SC-1",
    source: "Splice crew mobile upload",
    device: "Crew A phone / pole photo",
    gps: "30.172602, -97.849700",
    feedUpdated: "06/23/2026 14:55",
    tech: "M. Clark / Splice Crew A",
    contractor: "Summit Splicing",
    updated: "06/23/2026 14:55",
    proof: "Complete",
    blocker: "None",
    value: "$9,900",
    amount: 9900,
    payItem: "Aerial splice closure",
    photo: "assets/photo-sc-1.png",
    photoCaption: "SL-SC-1 closure proof accepted",
    progress: 100,
    list: [
      ["done", "Closure photo attached"],
      ["done", "Pole transfer noted"],
      ["done", "Splice count accepted"],
      ["done", "Ready to Bill"],
    ],
    comms: [
      ["14:55 Timeline", "SL-SC-1 accepted by AT&T closeout desk."],
      ["14:20 Chat", "Splice Crew A: closure and strand proof uploaded."],
      ["13:58 Email", "PM released SC-1 pay item."],
    ],
  },
  "SL-SV-6": {
    jobId: "JOB-1048",
    asset: "SL-SV-6 Splice Vault",
    status: "Ready to Bill",
    statusClass: "ready",
    crew: "Make Ready Crew",
    location: "Slaughter Ln vault / curb return",
    source: "Foreman app + GPS camera",
    device: "Make Ready iPad / vault photo",
    gps: "30.172211, -97.850140",
    feedUpdated: "06/23/2026 14:35",
    tech: "N. Brooks / Make Ready Crew",
    contractor: "Capitol OSP",
    updated: "06/23/2026 14:35",
    proof: "Complete",
    blocker: "None",
    value: "$8,600",
    amount: 8600,
    payItem: "Splice vault SL-SV-6",
    photo: "assets/photo-sv-1.png",
    photoCaption: "SL-SV-6 open-vault proof accepted",
    progress: 100,
    list: [
      ["done", "Open-vault photo attached"],
      ["done", "GPS matched"],
      ["done", "Restoration photo attached"],
      ["done", "Ready to Bill"],
    ],
    comms: [
      ["14:35 Timeline", "SL-SV-6 passed closeout rules."],
      ["14:12 Chat", "Crew: vault and restoration proof attached."],
      ["13:42 Email", "AT&T PM approved vault closeout."],
    ],
  },
  "SL-SV-7": {
    jobId: "JOB-1048",
    asset: "SL-SV-7 Splice Vault",
    status: "Ready to Bill",
    statusClass: "ready",
    crew: "Make Ready Crew",
    location: "Slaughter Ln vault / west bore exit",
    source: "Foreman app + GPS camera",
    device: "Make Ready iPad / vault photo",
    gps: "30.172004, -97.850491",
    feedUpdated: "06/23/2026 14:10",
    tech: "N. Brooks / Make Ready Crew",
    contractor: "Capitol OSP",
    updated: "06/23/2026 14:10",
    proof: "Complete",
    blocker: "None",
    value: "$8,000",
    amount: 8000,
    payItem: "Splice vault SL-SV-7",
    photo: "assets/photo-sv-2.png",
    photoCaption: "SL-SV-7 closeout proof accepted",
    progress: 100,
    list: [
      ["done", "Vault photo attached"],
      ["done", "Bore exit photo attached"],
      ["done", "Pay item matched"],
      ["done", "Ready to Bill"],
    ],
    comms: [
      ["14:10 Chat", "Make Ready: SL-SV-7 complete and billing matched."],
      ["13:51 Timeline", "SV-7 proof locked."],
      ["13:20 Email", "PM added SV-7 to daily ready package."],
    ],
  },
  "SL-UG-3": {
    jobId: "JOB-1048",
    asset: "SL-UG-3 Underground Fiber",
    status: "Ready to Bill",
    statusClass: "ready",
    crew: "Bore Crew A",
    location: "Slaughter Ln UG leg / west bore",
    source: "Bore tracker + GPS camera",
    device: "Bore tablet / tracker",
    gps: "30.172110, -97.850250",
    feedUpdated: "06/23/2026 13:45",
    tech: "P. Henry / Bore Crew A",
    contractor: "Capitol OSP",
    updated: "06/23/2026 13:45",
    proof: "Complete",
    blocker: "None",
    value: "$0",
    amount: 0,
    payItem: "UG route included in vault pay item",
    photo: "assets/photo-ug-1.png",
    photoCaption: "SL-UG-3 bore route proof accepted",
    progress: 100,
    list: [
      ["done", "Bore route photo attached"],
      ["done", "Locate ticket clear"],
      ["done", "Material count matched"],
      ["done", "Ready to Bill"],
    ],
    comms: [
      ["13:45 Timeline", "SL-UG-3 route accepted with no separate pay line."],
      ["13:18 Chat", "Bore Crew A: route photo and locate ticket uploaded."],
      ["12:55 Email", "PM cleared UG route for package."],
    ],
  },
};

const requiredAdminDocTypes = [
  "Contract / MSA",
  "SOW",
  "PO",
  "Customer rate sheet",
  "Approved pay items",
  "Billing rules",
  "Closeout rules",
  "Retainage",
  "Tax / jurisdiction",
  "Lien waiver",
  "COI / insurance",
  "Owner approval rules",
];

const adminDocumentsByJob = {
  "JOB-1045": [
    ["Contract / MSA", "Attached", "MSA-WIN-2025", "2026-01-01", "2026-12-31", "v2", "Ops Admin", "Windstream AP", "Yes"],
    ["SOW", "Attached", "PINE-HILL-SOW", "2026-05-01", "2026-09-30", "v1", "PM Review", "Owner PM", "Yes"],
    ["PO", "Partial", "PO-WIN-1045", "2026-06-01", "2026-08-30", "v1", "Billing", "Pending", "Yes"],
    ["Customer rate sheet", "Attached", "WIN-2026-RATE-v2", "2026-01-01", "2026-12-31", "v2", "Admin", "Approved", "Yes"],
    ["Approved pay items", "Attached", "WIN-OSP-PAYITEMS", "2026-01-01", "2026-12-31", "v3", "Admin", "Approved", "Yes"],
    ["Billing rules", "Ready", "WIN-BILL-RULES", "2026-01-01", "2026-12-31", "v1", "Billing", "Approved", "Yes"],
    ["Closeout rules", "Attached", "WIN-CLOSEOUT", "2026-01-01", "2026-12-31", "v1", "Closeout", "Approved", "Yes"],
    ["Retainage", "Ready", "5% standard", "2026-01-01", "2026-12-31", "v1", "Admin", "Approved", "Yes"],
    ["Tax / jurisdiction", "Ready", "Travis County / Austin", "2026-01-01", "2026-12-31", "v1", "Admin", "Approved", "Yes"],
    ["Lien waiver", "Ready", "LW-WIN-1045", "2026-06-23", "2026-07-23", "v1", "Billing", "Approved", "No"],
  ],
  "JOB-1046": [
    ["Contract / MSA", "Attached", "KIN-MSA-2026", "2026-01-01", "2026-12-31", "v1", "Admin", "Approved", "Yes"],
    ["SOW", "Attached", "OAK-RIDGE-SOW", "2026-06-01", "2026-09-30", "v1", "PM", "Approved", "Yes"],
    ["PO", "Missing", "Needed", "-", "-", "-", "PM", "Pending", "Yes"],
    ["Customer rate sheet", "Attached", "KIN-2026-RATE-v1", "2026-01-01", "2026-12-31", "v1", "Admin", "Pending", "Yes"],
    ["Approved pay items", "Partial", "KIN-PAYITEMS", "2026-01-01", "2026-12-31", "v1", "Admin", "Pending", "Yes"],
  ],
  "JOB-1047": [
    ["Contract / MSA", "Attached", "SPEC-MSA-2025", "2025-01-01", "2026-12-31", "v2", "Admin", "Approved", "Yes"],
    ["SOW", "Attached", "CEDAR-SOW", "2026-06-01", "2026-10-31", "v1", "PM", "Approved", "Yes"],
    ["PO", "Attached", "PO-SPEC-1047", "2026-06-01", "2026-08-30", "v1", "Billing", "Approved", "Yes"],
    ["Customer rate sheet", "Rejected", "SPEC-2026-RATE-v1", "2026-01-01", "2026-12-31", "v1", "Admin", "Rejected", "Yes"],
    ["Approved pay items", "Rejected", "SPEC-PAYITEMS", "2026-01-01", "2026-12-31", "v1", "Admin", "Rejected", "Yes"],
  ],
  "JOB-1048": [
    ["Contract / MSA", "Attached", "MSA-22", "2026-01-01", "2026-12-31", "v2", "Admin", "AT&T", "Yes"],
    ["SOW", "Attached", "SOW-22A", "2026-06-01", "2026-09-30", "v1", "PM", "AT&T", "Yes"],
    ["PO", "Attached", "PO-7782", "2026-06-01", "2026-08-31", "v1", "Billing", "AT&T AP", "Yes"],
    ["Customer rate sheet", "Attached", "ATT-2026-06-v3", "2026-06-01", "2026-12-31", "v3", "Admin", "Approved", "Yes"],
    ["Approved pay items", "Attached", "ATT-PAYITEMS-v3", "2026-06-01", "2026-12-31", "v3", "Admin", "Approved", "Yes"],
    ["Billing rules", "Ready", "Ready lines can send; blocked lines stay held", "2026-06-01", "2026-12-31", "v1", "Billing", "Approved", "Yes"],
    ["Retainage", "Ready", "5% / waiver ready", "2026-06-01", "2026-12-31", "v1", "Billing", "Approved", "Yes"],
    ["Lien waiver", "Ready", "LW-ATT-1048", "2026-06-29", "2026-07-29", "v1", "Billing", "Approved", "No"],
    ["Tax / jurisdiction", "Ready", "Travis County / Austin", "2026-06-01", "2026-12-31", "v1", "Admin", "Approved", "Yes"],
    ["Owner approval rules", "Ready", "SC and UG owner approval", "2026-06-01", "2026-12-31", "v1", "PM", "Approved", "Yes"],
  ],
};

const rateSubmissionsByJob = {
  "JOB-1045": {
    customer: "Windstream",
    project: "Pine Hill FTTH Expansion",
    contract: "MSA-WIN-2025",
    sow: "PINE-HILL-SOW",
    po: "PO-WIN-1045",
    version: "WIN-2026-RATE-v2",
    status: "Approved",
    effectiveDate: "06/01/2026",
    submittedBy: "PM Review",
    approvedBy: "Windstream AP",
    locked: false,
    retainage: "5%",
    taxJurisdiction: "Travis County / Austin",
    poFunding: 75,
    changeOrderApproval: 50,
    lines: Object.values(jobData["JOB-1045"].assets).map((assetId) => ({ assetId, quantity: 1, unit: "EA", rate: assetData[assetId].amount, status: "Approved", source: "WIN-2026-RATE-v2" })),
  },
  "JOB-1046": {
    customer: "Kinetic",
    project: "Oak Ridge Fiber Extension",
    contract: "KIN-MSA-2026",
    sow: "OAK-RIDGE-SOW",
    po: "Missing",
    version: "KIN-2026-RATE-v1",
    status: "Submitted",
    effectiveDate: "06/01/2026",
    submittedBy: "Bravo PM",
    approvedBy: "Pending",
    locked: false,
    retainage: "5%",
    taxJurisdiction: "Williamson County",
    poFunding: 35,
    changeOrderApproval: 0,
    lines: Object.values(jobData["JOB-1046"].assets).map((assetId) => ({ assetId, quantity: 1, unit: "EA", rate: assetData[assetId].amount, status: "Submitted", source: "KIN-2026-RATE-v1" })),
  },
  "JOB-1047": {
    customer: "Spectrum",
    project: "Cedar Park Node Split",
    contract: "SPEC-MSA-2025",
    sow: "CEDAR-SOW",
    po: "PO-SPEC-1047",
    version: "SPEC-2026-RATE-v1",
    status: "Rejected",
    effectiveDate: "06/01/2026",
    submittedBy: "Charlie PM",
    approvedBy: "Rejected by Spectrum",
    locked: false,
    retainage: "10%",
    taxJurisdiction: "Williamson County",
    poFunding: 60,
    changeOrderApproval: 0,
    lines: Object.values(jobData["JOB-1047"].assets).map((assetId) => ({ assetId, quantity: 1, unit: "EA", rate: assetData[assetId].amount, status: "Rejected", source: "SPEC-2026-RATE-v1" })),
  },
  "JOB-1048": {
    customer: "AT&T",
    project: "Slaughter Ln Make Ready",
    contract: "MSA-22",
    sow: "SOW-22A",
    po: "PO-7782",
    version: "ATT-2026-06-v3",
    status: "Locked",
    effectiveDate: "06/01/2026",
    submittedBy: "Delta PM",
    approvedBy: "AT&T Fiber Closeout Desk",
    locked: true,
    retainage: "5%",
    taxJurisdiction: "Travis County / Austin",
    poFunding: 100,
    changeOrderApproval: 100,
    lines: [
      { assetId: "SL-HH-9", payItem: "Handhole install + restoration", quantity: 1, unit: "EA", rate: 12400, status: "Approved", source: "ATT-2026-06-v3" },
      { assetId: "SL-SC-1", payItem: "Aerial splice closure", quantity: 1, unit: "EA", rate: 9900, status: "Approved", source: "ATT-2026-06-v3" },
      { assetId: "SL-SV-6", payItem: "Splice vault", quantity: 1, unit: "EA", rate: 8600, status: "Approved", source: "ATT-2026-06-v3" },
      { assetId: "SL-SV-7", payItem: "Splice vault", quantity: 1, unit: "EA", rate: 8000, status: "Approved", source: "ATT-2026-06-v3" },
      { assetId: "SL-UG-3", payItem: "UG route included in vault pay item", quantity: 1, unit: "INC", rate: 0, status: "Approved", source: "ATT-2026-06-v3" },
    ],
  },
};

const documentManifest = [
  ["Locate map", "Included", "Sheet 1 / Pine Hill route"],
  ["Field photos", "Included", "5 pinned to assets"],
  ["Before / after photos", "Needs Fix", "SV-1 open-vault after photo"],
  ["Redlines", "Included", "UG route and bore path"],
  ["Bore log", "Needs Fix", "SV-2 footage mismatch"],
  ["Material ticket", "Included", "MAT-240 / HDPE 212 FT"],
  ["Locate tickets", "Partial", "FL811-24-1194 verify"],
  ["QC inspection", "Pending", "PM Review"],
  ["Owner approval", "Partial", "HH-1 ready / SC-1 waiting"],
  ["Invoice lines", "Included", "Ready and blocked totals"],
  ["Exceptions", "Included", "SV-1 missing photo / SV-2 rejected"],
];

const boreLog = [
  ["HH-1 to SV-1", "125 ft", "125 ft", "0", "Matched"],
  ["SV-1 to SV-2", "87 ft", "94 ft", "+7", "Needs Fix"],
];

const materialCount = [
  ["144ct Fiber", "MAT-240", "238 ft", "2 ft", "OK"],
  ["1.25 in HDPE", "MAT-212", "219 ft", "-7 ft", "Reconcile"],
  ["24x36 HH", "MAT-HH2", "1 ea", "1 ea", "OK"],
];

const materialReceiving = [
  ["144ct fiber", "PO-7782", "240 ft", "240 ft", "238 ft", "None"],
  ["1.25 in HDPE", "PO-7782", "212 ft", "226 ft", "219 ft", "Reconcile"],
  ["24x36 handhole", "PO-7782", "1 ea", "1 ea", "1 ea", "None"],
  ["Splice vault", "PO-7782", "2 ea", "2 ea", "2 ea", "Photo proof"],
];

const reelLotTrace = [
  ["SC-1 fiber", "REEL-144-7782", "Graybar", "5 yr", "Matched", "None"],
  ["HH-1", "HH24-3310", "Oldcastle", "1 yr", "Matched", "None"],
  ["SV-1", "SV36-8820", "Oldcastle", "1 yr", "Photo hold", "Open-vault"],
  ["HDPE bore", "LOT-HDPE-212", "Dura-Line", "2 yr", "Qty mismatch", "SV-2 bore"],
];

const beforeAfterPhotos = [
  ["HH-1", "Attached", "Attached", "Matched", "Ready"],
  ["SV-1", "Attached", "Missing open-vault", "Matched", "Needs Fix"],
  ["SV-2", "Attached", "Attached", "Mismatch", "Rejected"],
];

const locateTickets = [
  ["FL811-24-1187", "HH-1 to SV-1", "06/28/2026", "Clear", "None"],
  ["FL811-24-1194", "SV-1 to SV-2", "06/25/2026", "Verify", "UG-1 approval"],
  ["FL811-24-1201", "Pine Hill Rd shoulder", "06/24/2026", "Expired soon", "SV-2 rework"],
];

const utilityConflicts = [
  ["HH-1 to SV-1", "Gas", "42 in", "Vac expose", "Clear", "None"],
  ["UG-1 sweep", "Water", "38 in", "Hand dig", "Clear", "Photo attach"],
  ["SV-1 to SV-2", "Power", "Unknown", "Pothole", "Verify", "FL811 hold"],
  ["Road shoulder", "Storm", "24 in", "Bore watch", "Conflict", "SV-2 rework"],
];

const potholeMakeReady = [
  ["Vac ticket V-1187", "Delta", "Photo + GPS", "Locate Desk", "Accepted", "Release UG-1"],
  ["Pole make-ready", "Bravo", "Pole photo", "OSP engineer", "Review", "SC-1 signoff"],
  ["Pothole P-1194", "Delta", "Missing depth", "Utility coord", "Hold", "Measure power"],
  ["Storm crossing", "Charlie", "Redline only", "County", "Rejected", "Vac photo"],
];

const approvalPayment = [
  ["HH-1", "Approved", "Ready", "Ready queue", "None"],
  ["SC-1", "Waiting", "Pending", "Not released", "Owner approval"],
  ["SV-1", "Needs Fix", "Blocked", "Held for readiness", "Missing photo"],
  ["SV-2", "Rejected", "Blocked", "Held for readiness", "Redline mismatch"],
  ["UG-1", "Waiting", "Pending", "Not released", "Locate verification"],
];

const auditTrail = [
  ["14:40", "HH-1 proof locked", "J. Ramirez", "Ready to bill"],
  ["14:12", "Invoice line matched", "CrewProof", "Pay item ready"],
  ["12:05", "SV-1 photo check", "PM Review", "Needs fix"],
  ["11:05", "UG-1 locate review", "Locate Desk", "Approval hold"],
  ["10:30", "SV-2 owner review", "Windstream", "Rejected"],
];

const complianceRisk = [
  ["Permit / ROW", "Clear", "PM Review", "Closed", "Low"],
  ["Locate expiry", "Verify", "Locate Desk", "06/24", "Medium"],
  ["Safety / traffic", "Logged", "Alpha", "Closed", "Low"],
  ["Damage claim", "Watch", "Canyon Bore", "Open", "Medium"],
];

const warrantyExceptions = [
  ["HH-1 warranty", "Lone Star", "0d", "$8,450", "Ready queue"],
  ["SV-1 missing photo", "Alpha", "1d", "$18,600", "Reshoot"],
  ["SV-2 redline", "Charlie", "1d", "$22,900", "Correct map"],
  ["UG-1 locate hold", "Locate Desk", "0d", "$32,400", "Verify ticket"],
];

const packageHandoffs = [
  ["Owner review", "Closeout PDF + JSON", "Ready to export", "14:42", "PM approve"],
  ["AP / accounting", "Invoice lines", "Draft ready", "14:41", "Send bill"],
  ["Document package", "Photos / redlines", "Included", "14:40", "Attach to email"],
  ["Locate desk", "Ticket verify", "Needs review", "11:05", "FL811 check"],
];

const exportEvents = [
  ["Closeout PDF", "package.ready", "Export ready", "PM review"],
  ["Invoice CSV", "invoice.ready", "Draft ready", "AP send"],
  ["Proof exception list", "proof.needs_fix", "Needs field fix", "SV-1 photo"],
  ["Locate ticket packet", "ticket.verify", "Hold", "FL811 check"],
];

const actionQueue = [
  ["HH-1 bill pack", "PM Review", "Today", "0h", "Send invoice"],
  ["SV-1 after photo", "Alpha", "Today", "2h", "Reshoot vault"],
  ["SV-2 redline", "Charlie", "Today", "4h", "Fix route"],
  ["UG-1 locate", "Locate Desk", "15m", "35m", "Verify ticket"],
];

const proofQuality = [
  ["HH-1", "+/- 6 ft", "Matched", "Locked", "Trusted"],
  ["SC-1", "+/- 9 ft", "Matched", "Locked", "Review"],
  ["SV-1", "+/- 7 ft", "Matched", "Missing", "Incomplete"],
  ["SV-2", "+/- 18 ft", "Mismatch", "Locked", "Rejected"],
];

const programRollup = [
  ["JOB-1045", "Windstream", "$8,450", "$85,100", "Fixes open"],
  ["JOB-1046", "Kinetic", "$21,700", "$14,200", "PM review"],
  ["JOB-1047", "Spectrum", "$0", "$46,500", "Rejected"],
  ["JOB-1048", "AT&T", "$38,900", "$0", "Ready"],
];

const dailyDispatch = [
  ["Alpha", "1045", "SV-1", "Reshoot vault", "15:30"],
  ["Charlie", "1045", "SV-2", "Correct redline", "16:00"],
  ["Delta", "1045", "UG-1", "Locate verify", "15:15"],
  ["Field Team 4", "1046", "Oak Ridge", "PM walk", "Tomorrow"],
];

const contractChangeOrders = [
  ["MSA-22", "FTTH build", "Active", "$93,550", "Bill ready items"],
  ["CO-014", "Extra bore", "Pending", "$7,800", "Owner signoff"],
  ["CO-015", "SV-2 rework", "Draft", "$4,200", "Attach redline"],
];

const retainageWaivers = [
  ["Retainage", "5%", "$423", "AP", "Holdback"],
  ["Lien waiver", "Ready", "$8,450", "Lone Star", "Attach"],
  ["CO waiver", "Missing", "$4,200", "Charlie", "Upload"],
];

const workOrderIntake = [
  ["WO-1045", "Owner work order", "Pine Hill FTTH", "PO-7782", "Matched", "None"],
  ["SOW-22A", "MSA-22", "HH / vault / bore", "SOW-22A", "Active", "None"],
  ["CO-015", "Field change", "SV-2 rework", "Pending", "Draft", "Owner signoff"],
  ["MAT-240", "Warehouse", "144ct fiber", "PO-7782", "Attached", "None"],
];

const ownerPrerequisites = [
  ["Approved design", "All lines", "Engineering", "Attached", "Closed", "None"],
  ["PO funding", "Invoice post", "AP", "Open", "Today", "SC-1 / UG-1"],
  ["Change order", "SV-2 rework", "Owner PM", "Missing", "16:00", "$4,200"],
  ["Permit release", "ROW closeout", "County", "Queued", "06/24", "Lane photo"],
];

const rootCauseCycle = [
  ["Ready cycle", "4.2h", "6h", "Photos matched", "Keep"],
  ["Reject rate", "22%", "<8%", "Redlines", "Field check"],
  ["Missing proof", "1 asset", "0", "Open vault", "Reshoot"],
  ["Avg approval", "18h", "24h", "PM queue", "Monitor"],
];

const cashForecast = [
  ["Ready today", "$8,450", "Today", "High", "None"],
  ["Owner review", "$43,600", "24h", "Medium", "Approval"],
  ["Fix required", "$41,500", "48h", "Low", "Proof"],
  ["Retainage", "$423", "Close", "High", "Holdback"],
];

const accessSharing = [
  ["Owner PM", "Full package", "Yes", "No", "7d"],
  ["AP", "Invoice only", "No", "Yes", "7d"],
  ["Crew", "Fix items", "No", "No", "24h"],
  ["Public link", "Disabled", "No", "No", "Revoked"],
];

const signatureTamper = [
  ["HH-1 proof", "Locked", "8F3A", "J. Ramirez", "14:40"],
  ["Package JSON", "Signed", "91CD", "CrewProof", "14:42"],
  ["Invoice lines", "Signed", "44B2", "PM Review", "14:41"],
  ["SV-1 after", "Missing", "-", "-", "-"],
];

const offlineSync = [
  ["Alpha iPad", "Alpha", "0", "14:40", "Synced"],
  ["Bravo phone", "Bravo", "1 photo", "13:15", "Queued"],
  ["Charlie tablet", "Charlie", "1 redline", "10:30", "Retry"],
  ["Delta phone", "Delta", "0", "11:50", "Synced"],
];

const retentionDeviceHealth = [
  ["Photos", "7 yrs", "OK", "Cloud + local", "Retain"],
  ["GPS trail", "7 yrs", "OK", "Cloud", "Retain"],
  ["Redline cache", "7 yrs", "Retry", "Device", "Upload"],
  ["Battery", "Field day", "78%", "-", "OK"],
];

const gisHandoff = [
  ["Route line", "GeoJSON", "Ready", "+7 ft", "PM review"],
  ["Handholes", "CSV + GPS", "Ready", "0", "Publish"],
  ["Vaults", "GeoJSON", "Hold", "SV-2 mismatch", "Correct"],
  ["Photos", "Linked URLs", "Partial", "SV-1 missing", "Reshoot"],
];

const assetRegistry = [
  ["HH-1", "WST-HH-1045", "Matched", "Handhole", "Ready"],
  ["SC-1", "WST-SC-1045", "Matched", "Closure", "Review"],
  ["SV-1", "WST-SV-1045A", "Matched", "Vault", "Photo hold"],
  ["SV-2", "WST-SV-1045B", "Mismatch", "Vault", "Rejected"],
];

const redlineCorrections = [
  ["HH-1 to SV-1", "125 ft", "125 ft", "0", "Matched", "Ready"],
  ["SC-1 aerial drop", "Pole line", "Pole #124567", "0", "Tagged", "Owner review"],
  ["SV-1 to SV-2", "87 ft", "94 ft", "+7 ft", "Redline mismatch", "Rejected"],
  ["UG-1 sweep", "Conduit", "Conduit", "0", "Locate verified", "Waiting"],
];

const asBuiltVariance = [
  ["HH-1", "0.8 ft", "$0", "PM", "GPS photo", "Publish"],
  ["SC-1", "1.2 ft", "$0", "Owner PM", "Pole photo", "Accept"],
  ["SV-2", "18.4 ft", "$4,200 CO", "Construction mgr", "Bore log + redline", "Approve variance"],
  ["Route line", "+7 ft", "$22,900 hold", "PM Review", "GIS layer", "Correct map"],
];

const insuranceClaims = [
  ["COI", "Current", "GL / Auto", "-", "Attach to owner"],
  ["Damage watch", "Open", "GL-2026", "$2,500 reserve", "Photo shoulder"],
  ["Warranty bond", "Active", "WB-1045", "$8,450", "Release with HH-1"],
  ["Deductible hold", "Pending", "Claim review", "$1,000", "PM decision"],
];

const financingTerms = [
  ["Lone Star", "Yes", "$8,027", "Net 30", "5% retainage"],
  ["Summit Splicing", "Review", "$0", "Owner approval", "SC-1 waiting"],
  ["Canyon Bore", "No", "$0", "Hold", "SV-2 rejected"],
  ["Delta crew", "Review", "$0", "Locate verify", "UG-1 pending"],
];

const invoiceAging = [
  ["INV-1045-HH1", "HH-1", "$8,450", "0d", "Net 30", "Ready"],
  ["Draft-SC1", "SC-1", "$11,200", "Hold", "On approval", "Waiting"],
  ["Hold-SV1", "SV-1", "$18,600", "3d", "After photo", "Blocked"],
  ["Reject-SV2", "SV-2", "$22,900", "4d", "Dispute", "Dispute watch"],
];

const lienBondNotices = [
  ["Prelim notice", "Owner / GC", "Sent", "$8,450", "PN-1045", "Attach receipt"],
  ["Bond claim clock", "Surety", "07/23", "$11,200", "WB-1045", "Wait approval"],
  ["Lien rights", "SV-1 hold", "07/08", "$18,600", "Missing photo", "Reshoot"],
  ["Dispute packet", "SV-2 reject", "Now", "$22,900", "Dispute file", "Escalate PM"],
];

const crewTimeProduction = [
  ["Alpha", "8.5", "HH-1 / SV-1", "Partial", "Split", "SV-1 photo"],
  ["Bravo", "5.0", "SC-1 splice", "Submitted", "Pending", "Owner approval"],
  ["Charlie", "7.0", "SV-2 bore", "Mismatch", "Held", "Bore log"],
  ["Delta", "4.0", "UG-1 locate", "Submitted", "Pending", "FL811 verify"],
];

const subcontractorPayApps = [
  ["Lone Star", "PA-1045-A", "$27,050", "$8,450", "$423", "Partial release"],
  ["Summit", "PA-1045-B", "$11,200", "$0", "$0", "Owner review"],
  ["Canyon Bore", "PA-1045-C", "$55,300", "$0", "$0", "Held"],
  ["Delta crew", "PA-1045-D", "$32,400", "$0", "$0", "Locate hold"],
];

const costCodeGlExport = [
  ["HH-1", "OSP-HH", "4100-Field Rev", "$8,450", "Ready", "None"],
  ["SC-1", "OSP-SPLICE", "4100-Field Rev", "$11,200", "Pending", "Approval"],
  ["SV-1", "OSP-VAULT", "4100-Field Rev", "$18,600", "Blocked", "Photo"],
  ["SV-2", "OSP-BORE", "4100-Field Rev", "$22,900", "Rejected", "Redline"],
];

const taxJurisdiction = [
  ["Travis TX", "Construction service", "Yes", "WST-EX-22", "Matched", "None"],
  ["Pine Hill ROW", "Permit recovery", "No", "-", "Accrue", "ROW fee"],
  ["SV-2 rework", "Backcharge", "Review", "-", "Hold", "Owner reject"],
  ["Retainage", "Deferred", "N/A", "-", "Track", "Final accept"],
];

const permitRow = [
  ["ROW-4471", "Pine Hill Rd", "Active", "07/02/2026", "None"],
  ["TCP-119", "Road shoulder", "Logged", "06/30/2026", "Lane photo"],
  ["BORE-221", "SV-1 to SV-2", "Variance", "06/29/2026", "+7 ft review"],
  ["REST-88", "Drive apron", "Open", "07/05/2026", "After photo"],
];

const restorationPunch = [
  ["Seed / straw", "HH-1 fence", "Alpha", "Complete", "Closed"],
  ["Open vault after", "SV-1", "Alpha", "Missing", "Today"],
  ["Shoulder patch", "SV-2 road", "Charlie", "Rejected", "Tomorrow"],
  ["Cabinet cleanup", "Shelter pad", "Field Team 2", "Ready", "PM walk"],
];

const sourceIntake = [
  ["Foreman app", "Photos + GPS", "14:40", "Yes", "None"],
  ["Email inbox", "Owner notes", "14:12", "Yes", "SC-1 review"],
  ["PDF locate map", "Plan sheet", "09:10", "Yes", "Sheet 1 only"],
  ["Invoice export", "Pay items", "13:55", "Partial", "SV-2 mismatch"],
];

const reconciliationChecks = [
  ["HH-1 install", "Complete", "Approved", "Matched", "Ready"],
  ["SC-1 closure", "Submitted", "Pending", "Matched", "Waiting"],
  ["SV-1 vault", "Missing photo", "Hold", "Blocked", "Needs Fix"],
  ["SV-2 bore", "94 ft", "87 ft plan", "Blocked", "Reject"],
];

const payItemCatalog = [
  ["HH24", "24x36 handhole", "EA", "$8,450", "Photo + GPS"],
  ["SC14", "144ct splice", "EA", "$11,200", "Pole photo"],
  ["SV36", "Splice vault", "EA", "$18,600", "Open-vault photo"],
  ["BORE125", "1.25 in HDPE bore", "FT", "$372", "Footage match"],
];

const approvalRules = [
  ["R-101", "Photo + GPS + pay item", "Ready to Bill", "PM", "Active"],
  ["R-204", "Owner accepts SC-1", "Approval", "Owner PM", "Waiting"],
  ["R-312", "Missing required photo", "Hold dollars", "Crew", "Blocking"],
  ["R-410", "Plan vs actual mismatch", "Reject line", "PM", "Blocking"],
];

const qcInspection = [
  ["Photo match", "HH-1", "PM Review", "Pass", "GPS photo", "None"],
  ["Pole note", "SC-1", "Owner PM", "Review", "Pole #124567", "Approval"],
  ["Open vault", "SV-1", "QC tech", "Fail", "Missing after", "Retake"],
  ["Bore footage", "SV-2", "PM Review", "Fail", "94 ft vs 87 ft", "Redline"],
];

const ownerApprovalGates = [
  ["Closeout accept", "Windstream PM", "HH-1 invoice", "Accepted", "0h", "AP queue"],
  ["Splice review", "OSP engineer", "SC-1 dollars", "Waiting", "2h", "Accept pole note"],
  ["Photo exception", "QC desk", "SV-1 dollars", "Rejected", "3h", "Upload open vault"],
  ["Variance approval", "Construction mgr", "SV-2 / bore", "Blocked", "4h", "Fix redline"],
];

const signoffLog = [
  ["HH-1", "Accepted", "Owner PM", "14:42", "$8,450"],
  ["SC-1", "Pending", "Owner PM", "-", "$11,200"],
  ["SV-1", "Hold", "PM Review", "12:05", "$18,600"],
  ["SV-2", "Rejected", "Windstream", "10:30", "$22,900"],
];

const disputeRegister = [
  ["D-001", "SC-1 pole note", "$11,200", "Pole photo", "Owner review"],
  ["D-002", "SV-1 missing open vault", "$18,600", "Need photo", "Reshoot"],
  ["D-003", "SV-2 bore footage", "$22,900", "Redline + bore log", "Reconcile"],
  ["D-004", "UG-1 locate verify", "$32,400", "FL811 ticket", "Locate desk"],
];

const escalationQueue = [
  ["SC-1 approval", "Owner PM", "2h", "$11,200", "OSP manager"],
  ["SV-1 photo", "Alpha", "3h", "$18,600", "Foreman"],
  ["SV-2 dispute", "PM Review", "4h", "$22,900", "Construction mgr"],
  ["UG-1 locate", "Locate Desk", "45m", "$32,400", "Utility coordinator"],
];

const notificationLog = [
  ["14:45", "Email", "AP", "HH-1 ready", "Sent"],
  ["14:30", "SMS", "Alpha", "SV-1 reshoot", "Ack"],
  ["13:55", "Email", "PM", "SV-2 reject", "Open"],
  ["13:20", "Owner packet", "Owner PM", "SC-1 review", "Queued"],
];

const safetyJsa = [
  ["JSA signed", "Alpha", "Complete", "07:12", "None"],
  ["Traffic setup", "Charlie", "Photo logged", "08:05", "PM review"],
  ["PPE check", "Delta", "Complete", "07:30", "None"],
  ["Confined space", "Alpha", "Missing", "-", "SV-1 open vault"],
];

const incidentDamage = [
  ["I-001", "Near miss", "Pine Hill Rd", "Closed", "Toolbox talk"],
  ["I-002", "Shoulder rut", "SV-2 road", "Open", "Restoration photo"],
  ["I-003", "Utility mark", "UG-1 route", "Watch", "Locate verify"],
  ["I-004", "Customer complaint", "Drive apron", "Logged", "PM call"],
];

const siteAccess = [
  ["Gate code", "Valid", "07:00-17:00", "Site owner", "None"],
  ["Outage window", "Approved", "13:00-15:00", "NOC", "SC-1 only"],
  ["Road shoulder", "Restricted", "After 16:00", "County", "SV-2 patch"],
  ["Customer notice", "Sent", "24h", "PM", "None"],
];

const weatherConditions = [
  ["Weather", "Clear / 92F", "Workable", "All", "Hydration"],
  ["Ground", "Dry", "Restore OK", "Alpha", "Photo after"],
  ["Road edge", "Soft shoulder", "Patch hold", "Charlie", "County check"],
  ["Light", "Daylight", "Photos OK", "Field Team 2", "None"],
];

const customerNotices = [
  ["Door hanger", "Pine Hill Rd", "06/22", "Logged", "24h", "None"],
  ["Business notice", "Drive apron", "Pending", "No ack", "After 16:00", "SV-2 patch"],
  ["Owner notice", "SC-1 outage", "Sent", "Ack", "13:00-15:00", "NOC clear"],
  ["County alert", "Road shoulder", "Queued", "Open", "06/24", "Lane photo"],
];

const outageNoc = [
  ["Backhaul window", "13:00-15:00", "Ready", "Low", "Clear", "Owner approve"],
  ["OLT port", "15:00", "Queued", "Medium", "Waiting", "SC-1 signoff"],
  ["SV-2 leg", "Hold", "Blocked", "High", "Rejected", "Retest"],
  ["Customer drop", "After closeout", "Pending", "Low", "Queued", "Notify"],
];

const equipmentTools = [
  ["GPS camera", "CAM-A17", "Alpha", "Synced", "HH-1 / SV-1"],
  ["Fusion splicer", "FS-442", "Bravo", "Ready", "SC-1"],
  ["Bore tracker", "BT-88", "Charlie", "Logged", "SV-2 run"],
  ["Reel counter", "RC-12", "Delta", "Mismatch", "UG-1 footage"],
];

const calibrationCustody = [
  ["CAM-A17", "06/01/2026", "J. Ramirez", "7A2F", "None"],
  ["FS-442", "05/20/2026", "M. Clark", "2BCD", "None"],
  ["BT-88", "06/10/2026", "T. Nguyen", "9F10", "Review"],
  ["RC-12", "Expired", "Delta", "-", "Reconcile qty"],
];

const crewQualifications = [
  ["Alpha", "Foreman", "OSP closeout", "Current", "HH / vault"],
  ["Bravo", "Splicer", "Fiber splice", "Current", "SC-1"],
  ["Charlie", "Bore lead", "Directional bore", "Current", "SV-2 run"],
  ["Delta", "Locate tech", "811 verify", "Review", "UG-1 hold"],
];

const certificationExpiry = [
  ["J. Ramirez", "Closeout QC", "12/31/2026", "Alpha", "None"],
  ["M. Clark", "Fiber splicing", "10/15/2026", "Bravo", "None"],
  ["T. Nguyen", "Bore safety", "09/01/2026", "Charlie", "None"],
  ["R. Flores", "Locate ticket", "Expired", "Delta", "UG-1 approval"],
];

const fiberTests = [
  ["HH-1 to SC-1", "OTDR", "Pass", "Attached", "None"],
  ["SC-1 splice", "Loss", "0.03 dB", "Attached", "Owner review"],
  ["SV-1 to SV-2", "Continuity", "Retest", "Missing", "SV-2 reject"],
  ["UG-1 route", "Light level", "-18.2 dBm", "Attached", "Locate verify"],
];

const turnupStatus = [
  ["Backhaul", "13:00-15:00", "Ready", "Clear", "Owner approve"],
  ["OLT port", "15:00", "Queued", "Waiting", "SC-1 signoff"],
  ["SV-2 leg", "Hold", "Blocked", "Rejected", "Retest"],
  ["As-built push", "After test", "Queued", "Pending", "GIS publish"],
];

const ownerDeliverables = [
  ["Closeout PDF", "PDF", "Ready", "PKG-1045", "None"],
  ["Photo ZIP", "Images", "Partial", "PH-1045", "SV-1 photo"],
  ["As-built GIS", "GeoJSON", "Queued", "GIS-1045", "SV-2 mismatch"],
  ["Test traces", "OTDR PDF", "Missing", "TEST-1045", "SV-2 retest"],
];

const ownerAcceptance = [
  ["Windstream OSP", "14:48", "Pass", "Accepted", "AP queue"],
  ["AP invoice", "14:50", "Pass", "Ready", "Send invoice"],
  ["GIS handoff", "Queued", "Hold", "Rejected", "Fix SV-2"],
  ["Test archive", "Pending", "Waiting", "Open", "Attach traces"],
];

const ballInCourt = [
  ["Owner PM", "SC-1 approval", "SC-1", "$11,200", "Today", "Accept pole note"],
  ["Alpha", "Open-vault photo", "SV-1", "$18,600", "15:30", "Retake photo"],
  ["PM Review", "Bore reconcile", "SV-2", "$22,900", "16:00", "Correct redline"],
  ["Locate Desk", "Ticket verify", "UG-1", "$32,400", "15:15", "Clear FL811"],
];

const handoffReceipts = [
  ["Email", "AP", "Invoice lines", "Queued", "MSG-1445", "None"],
  ["Owner review packet", "OSP PM", "Closeout PDF", "Accepted", "Review-221", "SC-1 review"],
  ["SMS", "Alpha", "Fix list", "Ack", "SMS-882", "SV-1 photo"],
  ["Email", "PM Review", "Rejected line", "Open", "MSG-1390", "SV-2 redline"],
];

function statusBucket(data) {
  if (data.statusClass === "ready") return "ready";
  if (data.statusClass === "missing" || data.statusClass === "rejected") return "blocked";
  return "pending";
}

function currency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatLiveTimestamp(date = new Date()) {
  return new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

function stableSerialize(value) {
  if (Array.isArray(value)) return "[" + value.map(stableSerialize).join(",") + "]";
  if (value && typeof value === "object") {
    return "{" + Object.keys(value).sort().map((key) => JSON.stringify(key) + ":" + stableSerialize(value[key])).join(",") + "}";
  }
  return JSON.stringify(value);
}

function evidenceHash(value) {
  const input = stableSerialize(value);
  let hash = 0x811c9dc5;
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }
  return "CP-" + (hash >>> 0).toString(16).toUpperCase().padStart(8, "0");
}

function evidenceCustodyPacket(source, payload) {
  const jobId = payload.jobId || payload.activeJob || payload.job?.id || activeJobId();
  const selectedAssetId = payload.selectedAsset || payload.selectedClaimId || payload.claimId || "program";
  return {
    source,
    evidenceId: `${jobId}-${selectedAssetId}`.replace(/[^A-Z0-9-]/gi, "-").toUpperCase(),
    evidenceHash: evidenceHash(payload),
    generatedAt: payload.generatedAt || new Date().toISOString(),
    chain: [
      "Field capture",
      "GPS / timestamp check",
      "Closeout review",
      "Billing or claims packet",
    ],
    custodyNotes: "Hash covers exported packet content. Re-export after any field, billing, claims, locate, or approval change.",
  };
}

function syncLiveHeartbeat() {
  liveSyncFields.forEach((field) => {
    field.textContent = formatLiveTimestamp();
  });
  updateShareLink();
}

function currentAssetId() {
  const selected = document.querySelector("[data-asset].is-selected")?.dataset.asset;
  return selected && isActiveJobAsset(selected) ? selected : defaultAssetForActiveJob();
}

function activeJobId() {
  const fieldJobId = jobIdField?.value;
  if (jobData[fieldJobId]) return fieldJobId;
  return storedActiveJobId();
}

function activeJob() {
  return jobData[activeJobId()] || jobData["JOB-1045"];
}

function storedActiveJobId() {
  try {
    const storedJobId = window.localStorage?.getItem("crewproof.activeJob");
    return jobData[storedJobId] ? storedJobId : "JOB-1045";
  } catch {
    return "JOB-1045";
  }
}

function persistActiveJobId(jobId) {
  if (!jobData[jobId]) return;
  try {
    window.localStorage?.setItem("crewproof.activeJob", jobId);
  } catch {
    // Local storage is optional; route state still carries the selected job.
  }
}

function jobToken(jobId = activeJobId()) {
  return jobId.replace(/[^A-Z0-9]/gi, "");
}

function activeJobAssetIds() {
  return Object.values(activeJob().assets || {});
}

function activeJobAssets() {
  return activeJobAssetIds()
    .map((assetId) => [assetId, assetData[assetId]])
    .filter(([, data]) => data);
}

const appendixSelector = [
  ".utility-conflict-tables",
  ".material-trace-tables",
  ".workflow-tables",
  ".risk-tables",
  ".integration-tables",
  ".operations-tables",
  ".program-tables",
  ".commercial-tables",
  ".upstream-tables",
  ".analytics-tables",
  ".security-tables",
  ".device-tables",
  ".gis-tables",
  ".redline-tables",
  ".finance-tables",
  ".payment-control-tables",
  ".labor-tables",
  ".accounting-tables",
  ".permit-tables",
  ".intake-tables",
  ".rules-tables",
  ".qc-approval-tables",
  ".signoff-tables",
  ".escalation-tables",
  ".safety-tables",
  ".access-tables",
  ".service-impact-tables",
  ".equipment-tables",
  ".qualification-tables",
  ".testing-tables",
  ".deliverable-tables",
  ".handoff-tables",
].join(", ");
let appendixTextNodes = null;

function displayName(value) {
  return value
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .replace(/\bAt&T\b/g, "AT&T")
    .replace(/\bFtth\b/g, "FTTH")
    .replace(/\bUg\b/g, "UG")
    .replace(/\bOsp\b/g, "OSP")
    .replace(/\bAp\b/g, "AP");
}

function collectAppendixTextNodes() {
  if (appendixTextNodes) return appendixTextNodes;

  appendixTextNodes = [];
  document.querySelectorAll(appendixSelector).forEach((section) => {
    const walker = document.createTreeWalker(section, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();
    while (node) {
      if (node.nodeValue && node.nodeValue.trim()) {
        node.crewProofOriginalText = node.nodeValue;
        appendixTextNodes.push(node);
      }
      node = walker.nextNode();
    }
  });

  return appendixTextNodes;
}

function replaceAllText(source, replacements) {
  return replacements.reduce((text, [from, to]) => text.split(from).join(to), source);
}

function activeTokenReplacements() {
  const job = activeJob();
  const jobId = activeJobId();
  const assets = job.assets || {};
  const jobNumber = jobId.replace(/^JOB-/, "");
  const siteTitle = displayName(job.siteName);
  const projectTitle = displayName(job.project);
  const customerTitle = displayName(job.customer);
  const handholeFlat = (assets.handhole || "").replace(/-/g, "");

  return [
    ["PINE HILL FTTH EXPANSION", job.project],
    ["Pine Hill FTTH", projectTitle],
    ["Pine Hill Rd", `${siteTitle} route`],
    ["Pine Hill ROW", `${siteTitle} ROW`],
    ["Pine Hill", siteTitle],
    ["PINE HILL", job.siteName],
    ["Windstream", customerTitle],
    ["WINDSTREAM", job.customer],
    ["JOB-1045", jobId],
    ["1045", jobNumber],
    ["HH1", handholeFlat],
    ["HH-1", assets.handhole || "HH-1"],
    ["SC-1", assets.splice || "SC-1"],
    ["SV-1", assets.vaultA || "SV-1"],
    ["SV-2", assets.vaultB || "SV-2"],
    ["UG-1", assets.underground || "UG-1"],
    ["Site HH", `Site ${assets.handhole || "HH"}`],
    ["Field Team 2", job.drawnBy],
  ];
}

function activeRows(rows) {
  const replacements = activeTokenReplacements();
  return rows.map((row) => {
    return row.map((cell) => {
      return typeof cell === "string" ? replaceAllText(cell, replacements) : cell;
    });
  });
}

function activePackageRows() {
  return {
    documents: activeRows(documentManifest),
    boreLog: activeRows(boreLog),
    materialCount: activeRows(materialCount),
    materialReceiving: activeRows(materialReceiving),
    reelLotTrace: activeRows(reelLotTrace),
    beforeAfterPhotos: activeRows(beforeAfterPhotos),
    locateTickets: activeRows(locateTickets),
    utilityConflicts: activeRows(utilityConflicts),
    potholeMakeReady: activeRows(potholeMakeReady),
    approvalPayment: activeRows(approvalPayment),
    auditTrail: activeRows(auditTrail),
    complianceRisk: activeRows(complianceRisk),
    warrantyExceptions: activeRows(warrantyExceptions),
    packageHandoffs: activeRows(packageHandoffs),
    exportEvents: activeRows(exportEvents),
    actionQueue: activeRows(actionQueue),
    proofQuality: activeRows(proofQuality),
    programRollup: activeRows(programRollup),
    dailyDispatch: activeRows(dailyDispatch),
    contractChangeOrders: activeRows(contractChangeOrders),
    retainageWaivers: activeRows(retainageWaivers),
    workOrderIntake: activeRows(workOrderIntake),
    ownerPrerequisites: activeRows(ownerPrerequisites),
    rootCauseCycle: activeRows(rootCauseCycle),
    cashForecast: activeRows(cashForecast),
    accessSharing: activeRows(accessSharing),
    signatureTamper: activeRows(signatureTamper),
    offlineSync: activeRows(offlineSync),
    retentionDeviceHealth: activeRows(retentionDeviceHealth),
    gisHandoff: activeRows(gisHandoff),
    assetRegistry: activeRows(assetRegistry),
    redlineCorrections: activeRows(redlineCorrections),
    asBuiltVariance: activeRows(asBuiltVariance),
    insuranceClaims: activeRows(insuranceClaims),
    financingTerms: activeRows(financingTerms),
    invoiceAging: activeRows(invoiceAging),
    lienBondNotices: activeRows(lienBondNotices),
    crewTimeProduction: activeRows(crewTimeProduction),
    subcontractorPayApps: activeRows(subcontractorPayApps),
    costCodeGlExport: activeRows(costCodeGlExport),
    taxJurisdiction: activeRows(taxJurisdiction),
    permitRow: activeRows(permitRow),
    restorationPunch: activeRows(restorationPunch),
    sourceIntake: activeRows(sourceIntake),
    reconciliationChecks: activeRows(reconciliationChecks),
    payItemCatalog: activeRows(payItemCatalog),
    approvalRules: activeRows(approvalRules),
    qcInspection: activeRows(qcInspection),
    ownerApprovalGates: activeRows(ownerApprovalGates),
    signoffLog: activeRows(signoffLog),
    disputeRegister: activeRows(disputeRegister),
    escalationQueue: activeRows(escalationQueue),
    notificationLog: activeRows(notificationLog),
    safetyJsa: activeRows(safetyJsa),
    incidentDamage: activeRows(incidentDamage),
    siteAccess: activeRows(siteAccess),
    weatherConditions: activeRows(weatherConditions),
    customerNotices: activeRows(customerNotices),
    outageNoc: activeRows(outageNoc),
    equipmentTools: activeRows(equipmentTools),
    calibrationCustody: activeRows(calibrationCustody),
    crewQualifications: activeRows(crewQualifications),
    certificationExpiry: activeRows(certificationExpiry),
    fiberTests: activeRows(fiberTests),
    turnupStatus: activeRows(turnupStatus),
    ownerDeliverables: activeRows(ownerDeliverables),
    ownerAcceptance: activeRows(ownerAcceptance),
    ballInCourt: activeRows(ballInCourt),
    handoffReceipts: activeRows(handoffReceipts),
  };
}

function syncCloseoutAppendixText() {
  const replacements = activeTokenReplacements();
  collectAppendixTextNodes().forEach((node) => {
    node.nodeValue = replaceAllText(node.crewProofOriginalText || "", replacements);
  });
}

function defaultAssetForActiveJob() {
  return activeJob().defaultAsset || activeJobAssetIds()[0] || "HH-1";
}

function isActiveJobAsset(assetId) {
  return activeJobAssetIds().includes(assetId);
}

function rateSubmissionFor(jobId = activeJobId()) {
  return rateSubmissionsByJob[jobId] || null;
}

function adminDocsFor(jobId = activeJobId()) {
  return adminDocumentsByJob[jobId] || [];
}

function rateApproved(rate) {
  return Boolean(rate && ["Approved", "Locked"].includes(rate.status));
}

function rateLineForAsset(jobId, assetId) {
  const rate = rateSubmissionFor(jobId);
  return rate?.lines.find((line) => line.assetId === assetId) || null;
}

function calculatedLineValue(line) {
  if (!line) return 0;
  const base = Number(line.rate || 0) * Number(line.quantity || 0);
  return Math.max(0, base + Number(line.changeOrders || 0) + Number(line.premiums || 0) - Number(line.retainageHold || 0) - Number(line.deductions || 0));
}

function lineCalculation(jobId, assetId) {
  const data = assetData[assetId];
  const rate = rateSubmissionFor(jobId);
  const line = rateLineForAsset(jobId, assetId);
  const hasApprovedRate = rateApproved(rate) && line?.status === "Approved";
  const docsReady = adminDocsFor(jobId).filter((doc) => doc[8] === "Yes").every((doc) => !/Missing|Rejected/i.test(doc[1]));
  const proofReady = data?.statusClass === "ready";
  const billingRulePassed = proofReady && docsReady && hasApprovedRate;
  const value = calculatedLineValue(line) || data?.amount || 0;
  const result = billingRulePassed ? "Ready to Bill" : `Blocked: ${!hasApprovedRate ? "Rate approval required" : !docsReady ? "Admin docs incomplete" : data?.blocker || "Billing rule not passed"}`;
  return {
    assetId,
    data,
    rate,
    line,
    value,
    hasApprovedRate,
    docsReady,
    proofReady,
    billingRulePassed,
    result,
    formula: line ? `${currency(line.rate)} x ${line.quantity} ${line.unit} + ${currency(line.changeOrders || 0)} CO + ${currency(line.premiums || 0)} premiums - ${currency(line.retainageHold || 0)} retainage - ${currency(line.deductions || 0)} deductions = ${currency(value)}` : "No approved rate line",
  };
}

function jobCalculationLines(jobId = activeJobId()) {
  return jobAssetsFor(jobId).map(([assetId]) => lineCalculation(jobId, assetId));
}

function jobReadinessMetrics(jobId = activeJobId()) {
  const docs = adminDocsFor(jobId);
  const requiredDocs = docs.filter((doc) => doc[8] === "Yes");
  const completeDocs = requiredDocs.filter((doc) => !/Missing|Rejected|Partial|Pending/i.test(doc[1]));
  const rate = rateSubmissionFor(jobId);
  const lines = jobCalculationLines(jobId);
  const approvedLines = lines.filter((line) => line.hasApprovedRate);
  const matchedLines = lines.filter((line) => Boolean(line.line));
  const readyCalcLines = lines.filter((line) => line.hasApprovedRate && line.line && line.proofReady);
  const pct = (value, total) => total ? Math.round(value / total * 100) : 0;
  return {
    adminDocs: pct(completeDocs.length, requiredDocs.length),
    rateSubmission: rate ? pct(["customer", "project", "contract", "sow", "po", "version", "effectiveDate", "submittedBy", "approvedBy", "status"].filter((field) => rate[field]).length, 10) : 0,
    rateApproval: pct(approvedLines.length, lines.length),
    contractMatch: pct(matchedLines.length, lines.length),
    poFunding: rate?.poFunding || 0,
    changeOrder: rate?.changeOrderApproval || 0,
    calculationConfidence: pct(readyCalcLines.length, lines.length),
    retainageWaiver: completeDocs.some((doc) => /Retainage|Lien waiver/i.test(doc[0])) ? 80 : 0,
  };
}

function activeJobTotals() {
  return jobCalculationLines(activeJobId()).reduce(
    (totals, line) => {
      if (line.billingRulePassed) {
        totals.ready += line.value;
      } else {
        totals.blocked += line.value || 0;
      }
      totals.assets += 1;
      return totals;
    },
    { ready: 0, blocked: 0, assets: 0 },
  );
}

function documentSourceRecordsForJob(jobId = activeJobId()) {
  const assets = jobAssetsFor(jobId);
  const now = new Date().toISOString();
  const assetSources = assets.flatMap(([assetId, data]) => [
    { sourceType: "photo", sourceId: `${assetId}-photo`, jobId, assetId, capturedAt: data.feedUpdated || now, capturedBy: data.tech || data.crew, confidence: data.statusClass === "ready" ? 0.98 : 0.78 },
    { sourceType: "gps", sourceId: `${assetId}-gps`, jobId, assetId, capturedAt: data.feedUpdated || now, capturedBy: data.device || data.crew, confidence: data.gps ? 0.96 : 0.2 },
    { sourceType: "crew_log", sourceId: `${assetId}-crew-log`, jobId, assetId, capturedAt: data.updated || now, capturedBy: data.tech || data.crew, confidence: 0.9 },
    { sourceType: "closeout_line", sourceId: `${assetId}-closeout-line`, jobId, assetId, capturedAt: data.updated || now, capturedBy: "CrewProof closeout engine", confidence: data.statusClass === "ready" ? 0.95 : 0.72 },
  ]);
  const chatSources = assets.flatMap(([assetId, data]) => (data.comms || []).flatMap(([label, message], index) => [
    { sourceType: "chat", sourceId: `${assetId}-chat-${index}`, jobId, assetId, capturedAt: data.updated || now, capturedBy: label, confidence: 0.86, summary: message },
    { sourceType: /accepted|approved|rejected|hold|ready|requested/i.test(message) ? "decision" : "manual_note", sourceId: `${assetId}-decision-${index}`, jobId, assetId, capturedAt: data.updated || now, capturedBy: label, confidence: 0.82, summary: message },
  ]));
  const ticketSources = linkedCrew811Tickets(jobId).map((ticket) => ({
    sourceType: "811",
    sourceId: ticket.ticketNumber,
    jobId,
    assetId: ticket.coverageEnd?.label || "",
    capturedAt: ticket.dueAt || now,
    capturedBy: ticket.sourceSystem || "811",
    confidence: ticket.status === "CLEAR" ? 0.96 : 0.74,
  }));
  const claimSources = claimsDamageRecords.filter((claim) => claim.jobId === jobId).map((claim) => ({
    sourceType: "claim",
    sourceId: claim.id,
    jobId,
    assetId: claim.location,
    capturedAt: claim.updatedAt || now,
    capturedBy: claim.source,
    confidence: 0.84,
  }));
  const damageSources = damageProofRecords.filter((record) => record.jobId === jobId).flatMap((record) => [
    { sourceType: "damage_proof", sourceId: record.id, jobId, assetId: record.assetId, capturedAt: record.capturedAt, capturedBy: record.submittedByName, confidence: record.status === "accepted" ? 0.96 : 0.82 },
    { sourceType: "gps", sourceId: `${record.id}-gps`, jobId, assetId: record.assetId, capturedAt: record.capturedAt, capturedBy: record.submittedByName, confidence: record.gpsLat && record.gpsLng ? 0.94 : 0.2 },
    ...(record.attachments || []).filter((attachment) => attachment.attachmentType === "photo").map((attachment) => ({
      sourceType: "photo",
      sourceId: attachment.id,
      jobId,
      assetId: record.assetId,
      capturedAt: attachment.capturedAt || record.capturedAt,
      capturedBy: attachment.capturedBy || record.submittedByName,
      confidence: 0.88,
    })),
  ]);
  const rate = rateSubmissionFor(jobId);
  const rateSources = rate ? [{ sourceType: "rate_reference", sourceId: rate.version, jobId, capturedAt: rate.effectiveDate || now, capturedBy: rate.approvedBy || rate.submittedBy, confidence: rateApproved(rate) ? 0.97 : 0.65 }] : [];
  const materialSources = materialCount.map((row, index) => ({
    sourceType: "material",
    sourceId: `${jobId}-material-${index + 1}`,
    jobId,
    capturedAt: now,
    capturedBy: row[1],
    confidence: row[4] === "OK" ? 0.94 : 0.68,
  }));
  const auditSources = auditTrail.map((row, index) => ({
    sourceType: "audit",
    sourceId: `${jobId}-audit-${index + 1}`,
    jobId,
    capturedAt: row[0],
    capturedBy: row[2],
    confidence: 0.9,
    summary: `${row[1]} / ${row[3]}`,
  }));
  return [...assetSources, ...chatSources, ...ticketSources, ...claimSources, ...damageSources, ...rateSources, ...materialSources, ...auditSources];
}

function sourceTypesAvailable(records) {
  return new Set(records.map((record) => record.sourceType));
}

function generateDocumentsForJob(jobId = activeJobId()) {
  const records = documentSourceRecordsForJob(jobId);
  const availableTypes = sourceTypesAvailable(records);
  const now = new Date().toISOString();
  return documentTemplates.map((template, index) => {
    const requirements = documentRequirements.filter((requirement) => requirement.documentType === template.documentType);
    const missingRequirements = requirements
      .filter((requirement) => !availableTypes.has(requirement.requiredSourceType))
      .map((requirement) => requirement.requiredSourceType);
    const blockerMissing = requirements.some((requirement) => requirement.blockerIfMissing && missingRequirements.includes(requirement.requiredSourceType));
    const sourceRecords = records.filter((record) => template.requiredSourceTypes.includes(record.sourceType));
    return {
      id: `GDOC-${jobId}-${String(index + 1).padStart(2, "0")}`,
      workspaceId: "demo-seed",
      jobId,
      assetId: template.documentType === "damage_proof_packet" ? damageProofRecords.find((record) => record.jobId === jobId)?.assetId : undefined,
      documentType: template.documentType,
      title: template.title,
      audience: template.audience,
      status: missingRequirements.length ? (blockerMissing ? "needs_review" : "draft") : "ready",
      generatedBy: "system",
      sourceRecords,
      missingRequirements,
      exportFormats: template.exportFormats,
      customerFacing: template.customerFacing,
      internalOnly: !template.customerFacing,
      createdAt: now,
      updatedAt: now,
      approvedBy: missingRequirements.length ? "" : "PM Review",
      approvedAt: missingRequirements.length ? "" : now,
      auditHistory: [
        "Document Automation Engine detected submitted job data.",
        `${sourceRecords.length} source records attached.`,
        missingRequirements.length ? `Needs review: missing ${missingRequirements.join(", ")}.` : "Ready for package review and export.",
      ],
      aiExplanation: `${template.title} was drafted from ${template.requiredSourceTypes.join(", ")} records for operational review.`,
    };
  });
}

function damageProofTypeLabel(type) {
  return String(type || "other").split("_").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

function damageProofStatusLabel(status) {
  return String(status || "draft").split("_").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

function damageProofQuestions(record) {
  const questions = [];
  const hasPhoto = (record.attachments || []).some((attachment) => attachment.attachmentType === "photo");
  if (!record.occurredWhen || record.occurredWhen === "unknown") questions.push("Was this present before work, during work, or discovered after work?");
  if (!record.assetId) questions.push("Which asset or map location should this damage proof link to?");
  if (!hasPhoto) questions.push("Do you have a wide-area photo and a close-up photo?");
  if (!record.linked811TicketId && record.damageType === "utility_strike") questions.push("Is there an active 811 ticket connected to this area?");
  if (record.workStopped === undefined) questions.push("Did work stop after this was found?");
  if (!record.pmNotified && !record.ownerNotified && !record.customerNotified) questions.push("Was the PM, owner, or customer notified?");
  if (!record.repairComplete && !record.restorationComplete) questions.push("Is repair or restoration complete or still open?");
  if (record.reviewRequired) questions.push("Should this create a closeout hold or remain an internal review item?");
  return [...questions, ...(record.aiQuestions || [])].slice(0, 4);
}

function damageProofSituationRows(jobId = activeJobId()) {
  const records = damageProofRecords.filter((record) => record.jobId === jobId);
  if (!records.length) {
    return [["What damage proof exists?", "No damage proof records are linked to this job.", "Add Damage Proof from Crew View if field evidence exists."]];
  }
  return records.map((record) => [
    `${record.assetId} / ${damageProofTypeLabel(record.damageType)}`,
    record.aiSummary || `${record.id} was submitted by ${record.submittedByName}.`,
    damageProofQuestions(record)[0] || record.nextAction || "Management review",
  ]);
}

function createDamageProofFromCrewAction(action, assetId, data) {
  const typeMap = {
    "Add Damage Proof": "property_damage",
    "Report Damage": "property_damage",
    "Add Restoration Proof": "restoration",
    "Add Utility Strike Proof": "utility_strike",
    "Add Pre-Existing Damage Proof": "pre_existing",
    "Add Warranty / Punch Proof": "warranty",
  };
  const damageType = typeMap[action];
  if (!damageType) return null;
  const id = `DPF-${activeJobId().replace("JOB-", "")}-${String(damageProofRecords.filter((record) => record.jobId === activeJobId()).length + 1).padStart(2, "0")}`;
  const now = new Date().toISOString();
  const [gpsLat, gpsLng] = String(data.gps || "").split(",").map((part) => Number(part.trim()));
  const record = {
    id,
    workspaceId: "demo-seed",
    jobId: activeJobId(),
    assetId,
    mapPinId: `damage-pin-${assetId.toLowerCase()}-${Date.now()}`,
    claimId: "",
    linked811TicketId: linkedCrew811Tickets(activeJobId())[0]?.ticketNumber || "",
    linkedUtilityConflictId: "",
    submittedByUserId: "field-user",
    submittedByName: data.tech.split("/")[0].trim() || data.crew,
    submittedByRole: "Foreman",
    crewId: data.crew,
    foremanId: "",
    damageType,
    proofCategory: "crew_damage_proof",
    status: "submitted",
    occurredWhen: damageType === "pre_existing" ? "pre_existing" : "unknown",
    locationText: data.location,
    gpsLat,
    gpsLng,
    gpsAccuracy: "+/- field device",
    capturedAt: now,
    description: `${damageProofTypeLabel(damageType)} submitted from Crew View for ${assetId}.`,
    immediateActionTaken: "Captured as crew proof and queued for management review.",
    workStopped: false,
    ownerNotified: false,
    pmNotified: true,
    customerNotified: false,
    repairComplete: false,
    restorationComplete: false,
    reviewRequired: true,
    blockerCreated: true,
    relatedBlockerId: `BLOCK-${assetId}-DAMAGE`,
    nextAction: "PM to review damage proof and approve package visibility",
    closeoutImpact: "Management review",
    owner: "PM Review",
    lastUpdate: formatLiveTimestamp(),
    customerFacingApproved: false,
    attachments: [
      { id: `${id}-A1`, damageProofId: id, attachmentType: "photo", title: `${assetId} field photo`, fileRef: data.photo, gpsLat, gpsLng, capturedAt: now, capturedBy: data.tech, customerFacing: false, internalOnly: false, sourceDevice: data.device, auditHistory: ["Crew View action created damage proof attachment"] },
    ],
    aiSummary: `${assetId} has ${damageProofTypeLabel(damageType).toLowerCase()} proof submitted from Crew View. Management should review before customer-facing export.`,
    aiQuestions: ["Was this present before work started, during work, or discovered after work?", "Do you have a wide-area photo and a close-up photo?", "Should this create a closeout hold or only an internal review item?"],
    auditHistory: ["Original crew-submitted damage proof preserved", "AI follow-up questions queued", "Customer-facing export held for management approval"],
  };
  damageProofRecords.unshift(record);
  return record;
}

function loadDroppedMapPins() {
  try {
    const raw = window.localStorage?.getItem("crewproof.mapPins");
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveDroppedMapPins() {
  try {
    window.localStorage?.setItem("crewproof.mapPins", JSON.stringify(droppedMapPins));
  } catch {
    // Local drafts are best-effort; map pins still work for the current session.
  }
}

function activeDroppedMapPins(jobId = activeJobId()) {
  return droppedMapPins.filter((pin) => pin.jobId === jobId);
}

function mapPinLabel(type) {
  return type === "gig" ? "Gig" : "Note";
}

function setActiveMapTool(type) {
  activeMapTool = activeMapTool === type ? null : type;
  const label = activeMapTool ? mapPinLabel(activeMapTool) : "";
  mapToolButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mapTool === activeMapTool);
    button.setAttribute("aria-pressed", String(button.dataset.mapTool === activeMapTool));
  });
  document.body.classList.toggle("is-map-drop-mode", Boolean(activeMapTool));
  if (mapCanvas) mapCanvas.classList.toggle("is-dropping-pin", Boolean(activeMapTool));
  if (mapModeStatus) mapModeStatus.hidden = !activeMapTool;
  if (mapModeCopy && activeMapTool) mapModeCopy.textContent = "Drop " + label + " - click map location or press Esc";
  if (toolbarStatus && activeMapTool) {
    toolbarStatus.textContent = "Drop " + label + " mode - click the map";
  }
  if (toolbarStatus && !activeMapTool) {
    toolbarStatus.textContent = currentAssetId() + " selected - " + (assetData[currentAssetId()]?.status || "Ready to Bill");
  }
  if (crewLiveCopy && activeMapTool) {
    crewLiveCopy.textContent = "Drop " + label + " mode / click map location";
  }
}

function mapClickPosition(surface, event) {
  const rect = surface.getBoundingClientRect();
  const scrollLeft = surface.scrollLeft || 0;
  const scrollTop = surface.scrollTop || 0;
  const width = surface.scrollWidth || rect.width;
  const height = surface.scrollHeight || rect.height;
  const x = ((event.clientX - rect.left + scrollLeft) / width) * 100;
  const y = ((event.clientY - rect.top + scrollTop) / height) * 100;
  return {
    x: Math.max(1, Math.min(99, x)),
    y: Math.max(1, Math.min(99, y)),
  };
}

function addDroppedMapPin(surface, event) {
  if (!activeMapTool || event.crewProofDropHandled) return;
  if (event.target.closest("button, a, input, select, textarea")) return;
  event.crewProofDropHandled = true;
  const position = mapClickPosition(surface, event);
  const defaultText = activeMapTool === "gig" ? "New field task" : "Field note";
  const text = (window.prompt("Add " + mapPinLabel(activeMapTool).toLowerCase() + " for " + activeJobId(), defaultText) || "").trim();
  if (!text) return;
  const selectedAssetId = currentAssetId();
  droppedMapPins.push({
    id: Date.now() + "-" + Math.round(position.x * 10) + "-" + Math.round(position.y * 10),
    jobId: activeJobId(),
    assetId: selectedAssetId,
    type: activeMapTool,
    text,
    x: Number(position.x.toFixed(2)),
    y: Number(position.y.toFixed(2)),
    by: assetData[selectedAssetId]?.tech || "Field user",
    createdAt: formatLiveTimestamp(),
  });
  saveDroppedMapPins();
  setActiveMapTool(null);
  renderDroppedMapPins();
  renderJobOverviewPins();
  updateShareLink();
}

function updateDroppedMapPin(pinId) {
  const pin = droppedMapPins.find((item) => item.id === pinId);
  if (!pin) return;
  const text = (window.prompt("Update " + mapPinLabel(pin.type).toLowerCase(), pin.text) || "").trim();
  if (!text) return;
  pin.text = text;
  pin.updatedAt = formatLiveTimestamp();
  saveDroppedMapPins();
  renderDroppedMapPins();
  updateShareLink();
}

function removeDroppedMapPin(pinId) {
  const pin = droppedMapPins.find((item) => item.id === pinId);
  if (!pin) return;
  const confirmed = window.confirm("Clear " + mapPinLabel(pin.type).toLowerCase() + " from " + pin.assetId + "?");
  if (!confirmed) return;
  droppedMapPins = droppedMapPins.filter((item) => item.id !== pinId);
  saveDroppedMapPins();
  renderDroppedMapPins();
  updateShareLink();
}

function renderDroppedMapPins() {
  const pins = activeDroppedMapPins();
  mapNoteLayers.forEach((layer) => {
    layer.textContent = "";
    pins.forEach((pin, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "map-note-pin " + pin.type;
      button.style.setProperty("--x", pin.x + "%");
      button.style.setProperty("--y", pin.y + "%");
      button.dataset.mapPinId = pin.id;
      button.textContent = mapPinLabel(pin.type) + " " + (index + 1);
      const pinText = document.createElement("span");
      pinText.textContent = pin.text;
      button.append(pinText);
      button.title = pin.assetId + ": " + pin.text;
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        document.querySelectorAll("[data-map-pin-id]").forEach((item) => item.classList.toggle("is-selected", item.dataset.mapPinId === pin.id));
        if (toolbarStatus) toolbarStatus.textContent = mapPinLabel(pin.type) + " pinned to " + pin.assetId + " - " + pin.text;
        if (crewLiveCopy) crewLiveCopy.textContent = mapPinLabel(pin.type) + " pinned to " + pin.assetId + " / " + pin.text;
      });
      layer.append(button);
    });
  });
  mapNoteLists.forEach((list) => {
    list.textContent = "";
    pins.slice(-4).forEach((pin) => {
      const item = document.createElement("li");
      item.className = pin.type;
      const title = document.createElement("strong");
      const note = document.createElement("span");
      const meta = document.createElement("small");
      const actions = document.createElement("div");
      const editButton = document.createElement("button");
      const clearButton = document.createElement("button");
      title.textContent = mapPinLabel(pin.type) + " / " + pin.assetId;
      note.textContent = pin.text;
      meta.textContent = pin.by + " / " + (pin.updatedAt ? "updated " + pin.updatedAt : pin.createdAt);
      actions.className = "map-note-actions";
      editButton.type = "button";
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => updateDroppedMapPin(pin.id));
      clearButton.type = "button";
      clearButton.textContent = "Clear";
      clearButton.addEventListener("click", () => removeDroppedMapPin(pin.id));
      actions.append(editButton, clearButton);
      item.append(title, note, meta, actions);
      list.append(item);
    });
  });
  if (crewCardNotes) {
    const noteCount = pins.filter((pin) => pin.type === "note").length;
    const gigCount = pins.filter((pin) => pin.type === "gig").length;
    crewCardNotes.textContent = pins.length + " dropped (" + noteCount + " notes / " + gigCount + " gigs)";
  }
}

function selectedCrew811Ticket() {
  return crew811Tickets.find((ticket) => ticket.id === selectedCrew811TicketId) || crew811Tickets[0];
}

function formatTicketDate(value) {
  return new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function crew811RenewalCountdown(ticket) {
  const hours = Math.ceil((new Date(ticket.expiresAt).getTime() - Date.now()) / 36e5);
  if (hours < 0) return "Expired";
  if (hours <= 48) return hours + "h until expiration";
  return Math.ceil(hours / 24) + "d until expiration";
}

function crew811CanClose(ticket) {
  if (ticket.status === "EXPIRED") return false;
  if (ticket.positiveResponseStatus === "READY") return true;
  return ticket.responses.length > 0 && ticket.responses.every((response) => ["CLEAR", "MARKED"].includes(response.responseStatus));
}

function crew811TicketSnapshot(ticket = selectedCrew811Ticket()) {
  const snapshot = {
    schema: "crewproof.sunshine811-exactix-ticket.v1",
    generatedAt: new Date().toISOString(),
    ticketNumber: ticket.ticketNumber,
    status: ticket.status,
    priority: ticket.priority,
    providerName: ticket.providerName,
    sourceSystem: ticket.sourceSystem || "Sunshine 811 Exactix",
    sourceFormat: ticket.sourceFormat || "Florida 811 ticket JSON",
    sourcePortal: ticket.sourcePortal || "exactix.sunshine811.com",
    customerName: ticket.customerName,
    excavatorName: ticket.excavatorName,
    companyId: ticket.companyId,
    excavatorId: ticket.excavatorId,
    officeName: ticket.officeName,
    companyType: ticket.companyType,
    callBackTime: ticket.callBackTime,
    fieldContact: ticket.fieldContact,
    fieldContactType: ticket.fieldContactType,
    fieldContactMethod: ticket.fieldContactMethod,
    workingFor: ticket.workingFor,
    workType: ticket.workType,
    county: ticket.county,
    city: ticket.city,
    street: ticket.street,
    crossStreet: ticket.crossStreet,
    workDescription: ticket.workDescription,
    dueAt: ticket.dueAt,
    expiresAt: ticket.expiresAt,
    renewalRequiredAt: ticket.renewalRequiredAt,
    renewalCountdown: crew811RenewalCountdown(ticket),
    linkedJobId: ticket.linkedJobId,
    assignedCrewId: ticket.assignedCrewId,
    positiveResponseStatus: ticket.positiveResponseStatus,
    latitude: ticket.latitude,
    longitude: ticket.longitude,
    coverageStart: ticket.coverageStart,
    coverageEnd: ticket.coverageEnd,
    proof: [...ticket.proof],
    responses: ticket.responses.map((response) => ({ ...response })),
    events: [...ticket.events],
  };
  snapshot.custody = evidenceCustodyPacket("crew811.ticket-file", snapshot);
  return snapshot;
}

function crew811LayerSnapshot() {
  const visibleTickets = crew811Tickets.filter((ticket) => crew811Filter === "all" || ticket.status === crew811Filter);
  const ticketCounts = crew811Tickets.reduce((counts, ticket) => {
    counts[ticket.status] = (counts[ticket.status] || 0) + 1;
    return counts;
  }, {});
  const snapshot = {
    schema: "crewproof.sunshine811-exactix-layer.v1",
    generatedAt: new Date().toISOString(),
    selectedTicketNumber: selectedCrew811Ticket()?.ticketNumber || "",
    activeFilter: crew811Filter,
    totals: {
      tickets: crew811Tickets.length,
      visible: visibleTickets.length,
      renewalNeeded: ticketCounts.RENEWAL_NEEDED || 0,
      conflicts: ticketCounts.CONFLICT || 0,
      waitingOnResponse: ticketCounts.WAITING_ON_RESPONSE || 0,
      clear: ticketCounts.CLEAR || 0,
    },
    tickets: crew811Tickets.map((ticket) => crew811TicketSnapshot(ticket)),
  };
  snapshot.custody = evidenceCustodyPacket("crew811.ticket-layer", snapshot);
  return snapshot;
}

function selectCrew811Ticket(ticketId) {
  selectedCrew811TicketId = ticketId;
  renderCrew811();
  syncCrewCard(activeJobId());
}

function coverageGeometry(ticket) {
  const start = ticket.coverageStart || { x: Math.max(5, (ticket.x || 50) - 8), y: Math.max(5, (ticket.y || 50) - 10), label: "Start" };
  const end = ticket.coverageEnd || { x: Math.min(95, (ticket.x || 50) + 8), y: Math.min(95, (ticket.y || 50) + 10), label: "End" };
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  return {
    start,
    end,
    length: Math.hypot(dx, dy),
    angle: Math.atan2(dy, dx) * 180 / Math.PI,
    labelX: (start.x + end.x) / 2,
    labelY: (start.y + end.y) / 2,
  };
}

function renderCrew811() {
  if (!crew811List || !crew811MapPins) return;
  const selected = selectedCrew811Ticket();
  const visibleTickets = crew811Tickets.filter((ticket) => crew811Filter === "all" || ticket.status === crew811Filter);
  updateCrew811ShareLink();

  crew811List.textContent = "";
  visibleTickets.forEach((ticket) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = ticket.id === selected.id ? "is-selected" : "";
    item.style.setProperty("--ticket-color", crew811StatusColors[ticket.status] || "#2563eb");
    item.innerHTML = `<b>${ticket.ticketNumber}</b><small>${ticket.status}</small><span>${ticket.street} / ${ticket.city}</span><span>${ticket.linkedJobId || "Unmatched"} / ${ticket.assignedCrewId || "Unassigned"}</span>`;
    item.addEventListener("click", () => {
      selectCrew811Ticket(ticket.id);
    });
    crew811List.append(item);
  });

  if (crew811CoverageLayer) {
    crew811CoverageLayer.textContent = "";
    visibleTickets.forEach((ticket) => {
      const geo = coverageGeometry(ticket);
      const color = crew811StatusColors[ticket.status] || "#2563eb";
      const coverage = document.createElement("div");
      coverage.className = "crew811-coverage" + (ticket.id === selected.id ? " is-selected" : "");
      coverage.style.setProperty("--ticket-color", color);
      coverage.style.color = color;
      coverage.style.setProperty("--start-x", geo.start.x + "%");
      coverage.style.setProperty("--start-y", geo.start.y + "%");
      coverage.style.setProperty("--line-length", geo.length + "%");
      coverage.style.setProperty("--line-angle", geo.angle + "deg");
      coverage.style.setProperty("--label-x", geo.labelX + "%");
      coverage.style.setProperty("--label-y", geo.labelY + "%");
      coverage.innerHTML = `<span class="crew811-coverage-line"></span><button type="button" class="crew811-coverage-point start" style="--point-x:${geo.start.x}%;--point-y:${geo.start.y}%"><span>START ${geo.start.label || ""}</span></button><button type="button" class="crew811-coverage-point end" style="--point-x:${geo.end.x}%;--point-y:${geo.end.y}%"><span>END ${geo.end.label || ""}</span></button><button type="button" class="crew811-coverage-label"><b>${ticket.ticketNumber}</b><small>${ticket.status} / ${ticket.positiveResponseStatus || "PENDING"}</small></button>`;
      coverage.querySelectorAll("button").forEach((button) => {
        button.title = `${ticket.ticketNumber} covers ${geo.start.label || "start"} to ${geo.end.label || "end"} / ${ticket.status}`;
        button.addEventListener("click", () => selectCrew811Ticket(ticket.id));
      });
      crew811CoverageLayer.append(coverage);
    });
  }

  crew811MapPins.textContent = "";
  visibleTickets.forEach((ticket) => {
    const pin = document.createElement("button");
    pin.type = "button";
    pin.className = "crew811-pin" + (ticket.id === selected.id ? " is-selected" : "");
    pin.style.setProperty("--x", ticket.x + "%");
    pin.style.setProperty("--y", ticket.y + "%");
    pin.style.background = crew811StatusColors[ticket.status] || "#2563eb";
    pin.textContent = ticket.ticketNumber;
    pin.title = ticket.ticketNumber + " / " + ticket.status + " / " + ticket.street;
    pin.addEventListener("click", () => {
      selectCrew811Ticket(ticket.id);
    });
    crew811MapPins.append(pin);
  });

  if (crew811MapCopy) crew811MapCopy.textContent = `${visibleTickets.length} tickets shown / ${selected.ticketNumber} selected / ${selected.status}`;
  if (crew811Number) crew811Number.textContent = selected.ticketNumber;
  if (crew811Provider) crew811Provider.textContent = selected.providerName || "811";
  if (crew811CompanyId) crew811CompanyId.textContent = selected.companyId || "Not on file";
  if (crew811ExcavatorId) crew811ExcavatorId.textContent = selected.excavatorId || "Not on file";
  if (crew811Excavator) crew811Excavator.textContent = selected.excavatorName || "Not on file";
  if (crew811WorkingFor) crew811WorkingFor.textContent = selected.workingFor || selected.customerName || "Not on file";
  if (crew811WorkType) crew811WorkType.textContent = selected.workType || selected.workDescription || "Not on file";
  if (crew811Address) crew811Address.textContent = `${selected.street}, ${selected.city}, ${selected.county}`;
  if (crew811CallBack) crew811CallBack.textContent = selected.callBackTime || "Not on file";
  if (crew811FieldContact) crew811FieldContact.textContent = [selected.fieldContact, selected.fieldContactType, selected.fieldContactMethod].filter(Boolean).join(" / ") || "Not on file";
  if (crew811Due) crew811Due.textContent = formatTicketDate(selected.dueAt);
  if (crew811Expiration) crew811Expiration.textContent = formatTicketDate(selected.expiresAt);
  if (crew811Status) crew811Status.textContent = selected.status;
  if (crew811Job) crew811Job.textContent = selected.linkedJobId || "Needs Review";
  if (crew811Crew) crew811Crew.textContent = selected.assignedCrewId || "Unassigned";
  if (crew811Response) crew811Response.textContent = selected.positiveResponseStatus || "PENDING";
  if (crew811Countdown) crew811Countdown.textContent = crew811RenewalCountdown(selected);
  if (crew811Proof) {
    crew811Proof.textContent = "";
    selected.proof.forEach((line) => {
      const item = document.createElement("li");
      item.textContent = line;
      crew811Proof.append(item);
    });
  }
  if (crew811Events) {
    crew811Events.textContent = "";
    selected.events.slice(-6).forEach((line) => {
      const item = document.createElement("li");
      item.textContent = line;
      crew811Events.append(item);
    });
  }
}

function auditCrew811(ticket, event) {
  ticket.events.push(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) + " " + event);
}

function runCrew811Action(action) {
  if (action === "import-json") {
    try {
      const parsed = JSON.parse(crew811JsonInput?.value || "{}");
      const ticket = upsertCrew811Ticket(sunshine811TicketFromJson(parsed));
      selectedCrew811TicketId = ticket.id;
      if (crew811Filter !== "all" && ticket.status !== crew811Filter) {
        crew811Filter = "all";
        crew811Filters.forEach((item) => item.classList.toggle("active", item.dataset.crew811Filter === "all"));
      }
      if (crew811ImportStatus) crew811ImportStatus.textContent = `${ticket.ticketNumber} synced to ${ticket.linkedJobId || "unmatched"} from Sunshine 811 / Exactix JSON.`;
      renderCrew811();
      refreshFieldDerivedViews(currentAssetId());
    } catch {
      if (crew811ImportStatus) crew811ImportStatus.textContent = "Invalid Sunshine 811 JSON. Paste the Exactix ticket JSON and try again.";
    }
    return;
  }

  if (action === "import") {
    const exists = crew811Tickets.some((ticket) => ticket.ticketNumber === "FL811-24-1502");
    if (!exists) {
      crew811Tickets.unshift({
        id: "811-1502",
        tenantId: "tenant-spectrum",
        ticketNumber: "FL811-24-1502",
        state: "FL",
        county: "BROWARD",
        city: "HALLANDALE BEACH",
        street: "1835 E HALLANDALE BEACH BLVD",
        crossStreet: "NODE SPLIT",
        workDescription: "Node split lateral hardening import with missing geometry",
        excavatorName: "NEXT LEVEL UNDERGROUND",
        customerName: "SPECTRUM",
        providerName: "Florida 811",
        sourceSystem: "Sunshine 811 Exactix",
        sourceFormat: "Florida 811 ticket JSON",
        sourcePortal: "exactix.sunshine811.com",
        companyId: "248654",
        excavatorId: "544490",
        officeName: "NEXT LEVEL UNDERGROUND",
        companyType: "CONTRACTOR",
        callBackTime: "ANYTIME",
        fieldContact: "ANDREI KRILOV",
        fieldContactType: "Cell",
        fieldContactMethod: "(754) 260-7248",
        workingFor: "SPECTRUM OSP",
        workType: "NODE SPLIT LATERAL HARDENING",
        status: "NEEDS_REVIEW",
        priority: "NORMAL",
        dueAt: "2026-06-27T11:00:00",
        expiresAt: "2026-07-01T11:00:00",
        renewalRequiredAt: "2026-06-29T11:00:00",
        latitude: 30.505,
        longitude: -97.82,
        x: 55,
        y: 66,
        assignedCrewId: null,
        assignedUserId: null,
        linkedJobId: null,
        positiveResponseStatus: "PENDING",
        proof: ["Imported from raw email body", "Geometry missing"],
        responses: [],
        events: ["Imported from Florida 811 excavator ticket as NEEDS_REVIEW because geometry was missing"],
      });
    }
    selectedCrew811TicketId = "811-1502";
    renderCrew811();
    return;
  }

  const ticket = selectedCrew811Ticket();
  if (!ticket) return;
  if (action === "link") {
    ticket.linkedJobId = ticket.customerName === "AT&T" ? "JOB-1048" : ticket.customerName === "KINETIC" ? "JOB-1046" : ticket.customerName === "SPECTRUM" ? "JOB-1047" : "JOB-1045";
    ticket.status = "MATCHED_TO_JOB";
    auditCrew811(ticket, "Linked to " + ticket.linkedJobId);
  }
  if (action === "assign") {
    ticket.assignedCrewId = ticket.assignedCrewId || "Alpha";
    ticket.status = "ASSIGNED";
    auditCrew811(ticket, "Assigned to " + ticket.assignedCrewId);
  }
  if (action === "proof") {
    ticket.proof.push("GPS photo, technician notes, marked utilities, and timestamp captured");
    ticket.status = "WAITING_ON_RESPONSE";
    auditCrew811(ticket, "Field proof uploaded and attached to linked closeout package");
  }
  if (action === "clear") {
    ticket.responses.push({ utilityName: "Utility", responseStatus: "CLEAR", responseText: "Clear / marked" });
    ticket.positiveResponseStatus = "READY";
    ticket.status = "CLEAR";
    auditCrew811(ticket, "Positive response checked: CLEAR");
  }
  if (action === "conflict") {
    ticket.responses.push({ utilityName: "Utility", responseStatus: "CONFLICT", responseText: "Conflict documented" });
    ticket.positiveResponseStatus = "BLOCKED";
    ticket.status = "CONFLICT";
    auditCrew811(ticket, "Conflict response documented");
  }
  if (action === "renew") {
    ticket.status = "RENEWAL_NEEDED";
    ticket.renewalRequiredAt = new Date().toISOString();
    auditCrew811(ticket, "Renewal requested");
  }
  if (action === "close") {
    if (crew811CanClose(ticket)) {
      ticket.status = "CLOSED";
      auditCrew811(ticket, "Closed");
    } else {
      auditCrew811(ticket, "Close blocked until responses are CLEAR, MARKED, or override documented");
    }
  }
  renderCrew811();
}

function selectedClaimRecord() {
  return claimsDamageRecords.find((record) => record.id === selectedClaimId) || claimsDamageRecords[0];
}

function renderClaimsDamage() {
  if (!claimsList || !claimsMapPins) return;
  renderManagementClaimsImpact();
  const selected = selectedClaimRecord();
  const visibleRecords = claimsDamageRecords.filter((record) => claimsFilter === "all" || record.status === claimsFilter);
  const openRecords = claimsDamageRecords.filter((record) => record.status !== "Closed");
  const recoveryValue = claimsDamageRecords.reduce((sum, record) => sum + (record.status === "Recovery" ? record.claimValue : 0), 0);
  const blockedValue = claimsDamageRecords.reduce((sum, record) => sum + (record.status !== "Closed" ? record.blockedDollars : 0), 0);

  if (claimsOpen) claimsOpen.textContent = String(openRecords.length);
  if (claimsRecovery) claimsRecovery.textContent = currency(recoveryValue);
  if (claimsBlocked) claimsBlocked.textContent = String(new Set(openRecords.map((record) => record.jobId)).size);
  if (claimsIntakeStatus) {
    claimsIntakeStatus.textContent = claimDropMode
      ? "Drop mode armed. Click the damage location on the claims map."
      : `${openRecords.length} open claim files / ${currency(blockedValue)} billing held.`;
  }
  updateClaimsShareLink();
  claimsMapCanvas?.classList.toggle("is-dropping-claim", claimDropMode);
  claimsActions.forEach((button) => {
    if (button.dataset.claimsAction === "drop") button.classList.toggle("is-active", claimDropMode);
  });

  claimsList.textContent = "";
  visibleRecords.forEach((record) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = record.id === selected.id ? "is-selected" : "";
    item.style.setProperty("--claim-color", claimTypeColors[record.type] || "#2563eb");
    item.innerHTML = `<b>${record.id}</b><small>${record.status}</small><span>${record.type} / ${record.location}</span><span>${record.jobId} / ${currency(record.blockedDollars)} blocked</span>`;
    item.addEventListener("click", () => {
      selectedClaimId = record.id;
      renderClaimsDamage();
    });
    claimsList.append(item);
  });

  claimsMapPins.textContent = "";
  visibleRecords.forEach((record) => {
    const pin = document.createElement("button");
    pin.type = "button";
    pin.className = "claim-pin" + (record.id === selected.id ? " is-selected" : "");
    pin.style.setProperty("--x", record.x + "%");
    pin.style.setProperty("--y", record.y + "%");
    pin.style.background = claimTypeColors[record.type] || "#2563eb";
    pin.textContent = record.id;
    pin.title = `${record.type} / ${record.status} / ${record.location}`;
    pin.addEventListener("click", () => {
      selectedClaimId = record.id;
      renderClaimsDamage();
    });
    claimsMapPins.append(pin);
  });

  if (claimsMapCopy) claimsMapCopy.textContent = `${visibleRecords.length} records shown / ${selected.id} selected / ${selected.type}`;
  if (claimId) claimId.textContent = selected.id;
  if (claimType) claimType.textContent = selected.type;
  if (claimStatus) claimStatus.textContent = selected.status;
  if (claimJob) claimJob.textContent = selected.jobId;
  if (claimLocation) claimLocation.textContent = selected.location;
  if (claimOwner) claimOwner.textContent = selected.owner;
  if (claimSeverity) claimSeverity.textContent = selected.severity || "Medium";
  if (claimSource) claimSource.textContent = selected.source || "Field report";
  if (claim811) claim811.textContent = selected.linked811 || "Not linked";
  if (claimValue) claimValue.textContent = currency(selected.claimValue);
  if (claimBlocked) claimBlocked.textContent = currency(selected.blockedDollars);
  if (claimUpdated) claimUpdated.textContent = selected.updatedAt;
  setRouteLink(claimBillingLink, "/billing/" + selected.jobId);
  setRouteLink(claimCloseoutLink, "/closeout/" + selected.jobId);
  if (claimPhoto) claimPhoto.src = selected.photo;
  if (claimCaption) claimCaption.textContent = selected.caption;
  if (claimProof) {
    claimProof.textContent = "";
    selected.proof.forEach((line) => {
      const item = document.createElement("li");
      item.textContent = line;
      claimProof.append(item);
    });
  }
  if (claimEvents) {
    claimEvents.textContent = "";
    selected.events.slice(-6).forEach((line) => {
      const item = document.createElement("li");
      item.textContent = line;
      claimEvents.append(item);
    });
  }
}

function createMappedClaim(clientX, clientY) {
  if (!claimsMapCanvas) return;
  const rect = claimsMapCanvas.getBoundingClientRect();
  const x = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100));
  const y = Math.max(2, Math.min(98, ((clientY - rect.top) / rect.height) * 100));
  const jobId = activeJobId();
  const job = jobData[jobId] || jobData["JOB-1045"];
  const id = "CLM-" + jobId.replace("JOB-", "") + "-" + String(claimsDamageRecords.length + 1).padStart(2, "0");
  const location = (window.prompt("Damage location / note", `${job.siteName} field damage pin`) || "").trim();
  if (!location) {
    claimDropMode = false;
    renderClaimsDamage();
    return;
  }

  claimsDamageRecords.unshift({
    id,
    type: "Property Damage",
    status: "Open",
    jobId,
    customer: job.customer,
    location,
    owner: "Claims Desk",
    severity: "Medium",
    source: "Dropped claims map pin",
    linked811: "Needs 811 match",
    claimValue: 0,
    blockedDollars: 0,
    x: Number(x.toFixed(1)),
    y: Number(y.toFixed(1)),
    photo: "assets/photo-sv-2.png",
    caption: "New damage pin awaiting field photo",
    proof: ["Damage pin dropped on separate claims map", "Field photo needed", "Owner and recovery value pending"],
    events: [formatLiveTimestamp() + " Damage pin dropped on claims map"],
    updatedAt: formatLiveTimestamp(),
  });
  selectedClaimId = id;
  claimsFilter = "all";
  claimsFilters.forEach((item) => item.classList.toggle("active", item.dataset.claimsFilter === "all"));
  claimDropMode = false;
  renderClaimsDamage();
}

function auditClaim(record, event) {
  record.events.push(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) + " " + event);
  record.updatedAt = formatLiveTimestamp();
}

function claimSnapshot(record = selectedClaimRecord()) {
  const job = jobData[record.jobId] || {};
  const snapshot = {
    schema: "crewproof.claim-file.v1",
    claimId: record.id,
    type: record.type,
    status: record.status,
    jobId: record.jobId,
    customer: record.customer,
    siteName: job.siteName || "",
    location: record.location,
    owner: record.owner,
    severity: record.severity || "Medium",
    source: record.source || "Field report",
    linked811: record.linked811 || "",
    claimValue: record.claimValue,
    blockedDollars: record.blockedDollars,
    photo: record.photo,
    caption: record.caption,
    proof: [...record.proof],
    events: [...record.events],
    updatedAt: record.updatedAt,
  };
  snapshot.custody = evidenceCustodyPacket("claims.damage-file", snapshot);
  return snapshot;
}

function claimsLayerSnapshot() {
  const openClaims = claimsDamageRecords.filter((record) => record.status !== "Closed");
  const recoveryClaims = claimsDamageRecords.filter((record) => record.status === "Recovery");
  const selected = selectedClaimRecord();
  const snapshot = {
    schema: "crewproof.claims-layer.v1",
    generatedAt: new Date().toISOString(),
    selectedClaimId: selected?.id || "",
    activeJob: activeJobId(),
    totals: {
      openClaims: openClaims.length,
      recoveryDollars: recoveryClaims.reduce((sum, record) => sum + record.claimValue, 0),
      blockedDollars: openClaims.reduce((sum, record) => sum + record.blockedDollars, 0),
      blockedJobs: new Set(openClaims.map((record) => record.jobId)).size,
    },
    records: claimsDamageRecords.map((record) => claimSnapshot(record)),
    linked811: crew811Tickets
      .filter((ticket) => claimsDamageRecords.some((record) => record.linked811 === ticket.ticketNumber))
      .map((ticket) => ({
        ticketNumber: ticket.ticketNumber,
        status: ticket.status,
        linkedJobId: ticket.linkedJobId,
        assignedCrewId: ticket.assignedCrewId,
        dueAt: ticket.dueAt,
        expiresAt: ticket.expiresAt,
        positiveResponse: ticket.positiveResponseStatus,
      })),
  };
  snapshot.custody = evidenceCustodyPacket("claims.damage-layer", snapshot);
  return snapshot;
}

function buildClaimRecoveryEmail(record = selectedClaimRecord()) {
  const snapshot = claimSnapshot(record);
  const subject = `Claim recovery file - ${snapshot.claimId} - ${snapshot.jobId}`;
  const body = [
    `Claim recovery file: ${snapshot.claimId}`,
    `Job: ${snapshot.jobId} / ${snapshot.customer} / ${snapshot.siteName}`,
    `Type: ${snapshot.type}`,
    `Status: ${snapshot.status}`,
    `Location: ${snapshot.location}`,
    `Owner: ${snapshot.owner}`,
    `Severity: ${snapshot.severity}`,
    `Source: ${snapshot.source}`,
    `Linked 811: ${snapshot.linked811 || "Not linked"}`,
    `Claim value: ${currency(snapshot.claimValue)}`,
    `Billing held: ${currency(snapshot.blockedDollars)}`,
    "",
    "Proof:",
    snapshot.proof.join("\n"),
    "",
    "Timeline:",
    snapshot.events.join("\n"),
  ].join("\n");
  return `mailto:claims@example.invalid?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function runClaimAction(action) {
  const record = selectedClaimRecord();
  if (!record) return;
  if (action === "drop") {
    claimDropMode = !claimDropMode;
    renderClaimsDamage();
    return;
  }
  if (action === "photo") {
    record.proof.push("New claim photo attached at mapped damage location");
    record.caption = "Latest damage photo pinned to claims map location";
    record.source = "Field photo";
    auditClaim(record, "Claim photo added");
  }
  if (action === "assign") {
    record.owner = record.owner === "Claims Desk" ? "PM Review" : "Claims Desk";
    auditClaim(record, "Owner assigned to " + record.owner);
  }
  if (action === "recovery") {
    record.status = "Recovery";
    record.proof.push("Recovery packet started with subcontractor notice");
    auditClaim(record, "Recovery started");
  }
  if (action === "hold") {
    record.blockedDollars = Math.max(record.blockedDollars, jobTotalsFor(record.jobId).blocked);
    record.proof.push("Billing hold linked to " + record.jobId);
    record.severity = "High";
    auditClaim(record, "Billing hold applied");
  }
  if (action === "close") {
    record.status = "Closed";
    record.blockedDollars = 0;
    auditClaim(record, "Claim closed and archived");
  }
  renderClaimsDamage();
}

function renderManagementClaimsImpact() {
  const openClaims = claimsDamageRecords.filter((record) => record.status !== "Closed");
  const recoveryClaims = claimsDamageRecords.filter((record) => record.status === "Recovery");
  const blockedTotal = openClaims.reduce((sum, record) => sum + record.blockedDollars, 0);
  const recoveryTotal = recoveryClaims.reduce((sum, record) => sum + record.claimValue, 0);
  const topClaim = openClaims.slice().sort((a, b) => b.blockedDollars - a.blockedDollars)[0];
  const actionLines = openClaims
    .slice()
    .sort((a, b) => b.blockedDollars - a.blockedDollars)
    .slice(0, 3)
    .map((record) => {
      const action = record.status === "Recovery" ? "Track recovery" : record.status === "Investigating" ? "Complete investigation" : "Assign field fix";
      return `${record.jobId} / ${record.type}: ${action} / ${currency(record.blockedDollars)} held`;
    });

  if (managementClaimsOpen) managementClaimsOpen.textContent = String(openClaims.length);
  if (managementClaimsBlocked) managementClaimsBlocked.textContent = currency(blockedTotal);
  if (managementClaimsRecovery) managementClaimsRecovery.textContent = currency(recoveryTotal);
  if (managementClaimsTop) {
    managementClaimsTop.textContent = topClaim
      ? `Top claim: ${topClaim.id} / ${topClaim.location} / ${currency(topClaim.blockedDollars)} billing held`
      : "Top claim: no open damage records";
  }
  if (managementClaimsActions) {
    managementClaimsActions.textContent = "";
    actionLines.forEach((line) => {
      const item = document.createElement("li");
      item.textContent = line;
      managementClaimsActions.append(item);
    });
  }
}

function shortStatusLabel(data) {
  if (data.statusClass === "ready") return "photo";
  if (data.statusClass === "missing") return "missing";
  if (data.statusClass === "rejected") return "rejected";
  return "photo";
}

function fieldSnapshot() {
  const selectedAssetId = currentAssetId();
  const selectedData = assetData[selectedAssetId] || assetData["HH-1"];
  const job = activeJob();
  const jobId = activeJobId();

  const snapshot = {
    schema: "crewproof.field-package.v1",
    generatedAt: new Date().toISOString(),
    job: {
      id: jobId,
      customer: job.customer,
      issuedTo: job.issuedTo,
      project: job.project,
      site: `${job.siteName} / ${job.siteId}`,
      source: "LIVE FIELD FEED",
    },
    selectedAsset: selectedAssetId,
    selectedStatus: {
      asset: selectedData.asset,
      status: selectedData.status,
      proof: selectedData.proof,
      blocker: selectedData.blocker,
      progress: selectedData.progress,
      location: selectedData.location,
      source: selectedData.source,
      device: selectedData.device,
      gps: selectedData.gps,
      tech: selectedData.tech,
      contractor: selectedData.contractor,
      updated: selectedData.updated,
      payItem: selectedData.payItem,
      amount: selectedData.amount,
    },
    assets: Object.fromEntries(activeJobAssets()),
    adminDocuments: adminDocsFor(jobId),
    rateSubmission: rateSubmissionFor(jobId),
    calculationAudit: jobCalculationLines(jobId).map((line) => ({
      assetId: line.assetId,
      rateSource: line.rate?.version || null,
      formula: line.formula,
      result: line.result,
      value: line.value,
    })),
    readinessMetrics: jobReadinessMetrics(jobId),
    generatedDocuments: generateDocumentsForJob(jobId),
    damageProofRecords: damageProofRecords.filter((record) => record.jobId === jobId),
    droppedMapPins: activeDroppedMapPins(jobId),
    allJobs: jobData,
    packageRows: activePackageRows(),
  };
  snapshot.custody = evidenceCustodyPacket("field.closeout-package", snapshot);
  return snapshot;
}

function csvCell(value) {
  return `"${String(value ?? "").replaceAll("\"", "\"\"")}"`;
}

function csvRow(values) {
  return values.map(csvCell).join(",");
}

function appendPackageCsvSection(rows, section, packageRows) {
  packageRows.forEach((cells) => {
    const [primary = "", secondary = "", tertiary = "", quaternary = "", status = ""] = cells;
    rows.push(csvRow([section, primary, secondary, tertiary, quaternary, status]));
  });
}

function closeoutPackageCsv() {
  const snapshot = fieldSnapshot();
  const jobId = snapshot.job.id;
  const job = activeJob();
  const totals = activeJobTotals();
  const rows = [
    csvRow(["Section", "Item", "Detail", "Reference", "Amount", "Status"]),
    csvRow(["Job", "Job ID", jobId, job.customer, "", jobStatusLabel(jobId)]),
    csvRow(["Job", "Project", job.project, `${job.siteName} / ${job.siteId}`, "", ""]),
    csvRow(["Job", "Issued To", job.issuedTo, recipientInput?.value || "", "", ""]),
    csvRow(["Job", "Address", job.address, `${job.county} County`, "", ""]),
    csvRow(["Billing", "Ready Total", `${activeJobAssets().filter(([, data]) => data.statusClass === "ready").length} ready assets`, "", currency(totals.ready), "Ready"]),
    csvRow(["Billing", "Blocked Total", `${activeJobAssets().filter(([, data]) => data.statusClass !== "ready").length} blocked assets`, "", currency(totals.blocked), "Blocked"]),
  ];

  activeJobAssets().forEach(([assetId, data]) => {
    rows.push(csvRow([
      "Asset",
      assetId,
      `${data.asset} / ${data.location}`,
      `${data.tech} / ${data.gps}`,
      currency(data.amount),
      `${data.status} / ${data.proof}`,
    ]));
    if (data.blocker && data.blocker !== "None") {
      rows.push(csvRow(["Blocker", assetId, data.blocker, data.source, currency(data.amount), data.status]));
    }
  });

  const packageRows = activePackageRows();
  appendPackageCsvSection(rows, "Document", packageRows.documents);
  appendPackageCsvSection(rows, "Bore Log", packageRows.boreLog);
  appendPackageCsvSection(rows, "Material Count", packageRows.materialCount);
  appendPackageCsvSection(rows, "Before / After Photos", packageRows.beforeAfterPhotos);
  appendPackageCsvSection(rows, "Locate Ticket", packageRows.locateTickets);
  appendPackageCsvSection(rows, "Approval / Readiness", packageRows.approvalPayment);
  appendPackageCsvSection(rows, "Audit Trail", packageRows.auditTrail);
  appendPackageCsvSection(rows, "Package Handoff", packageRows.packageHandoffs);
  appendPackageCsvSection(rows, "Owner Acceptance", packageRows.ownerAcceptance);
  appendPackageCsvSection(rows, "Ball In Court", packageRows.ballInCourt);
  appendPackageCsvSection(rows, "Handoff Receipt", packageRows.handoffReceipts);

  rows.push(csvRow(["Custody", "Evidence ID", snapshot.custody.evidenceId, snapshot.custody.generatedAt, "", ""]));
  rows.push(csvRow(["Custody", "Evidence Hash", snapshot.custody.evidenceHash, snapshot.custody.source, "", snapshot.custody.schema]));
  return `${rows.join("\n")}\n`;
}

function operationsSnapshot() {
  const totals = programTotals();
  const openClaims = claimsDamageRecords.filter((record) => record.status !== "Closed");
  const ticketCounts = crew811Tickets.reduce((counts, ticket) => {
    counts[ticket.status] = (counts[ticket.status] || 0) + 1;
    return counts;
  }, {});

  const snapshot = {
    schema: "crewproof.operations-snapshot.v1",
    generatedAt: new Date().toISOString(),
    activeJob: activeJobId(),
    roleMode: roleMode?.value || window.localStorage?.getItem("crewproof.role") || "crew",
    totals: {
      jobs: totals.jobs,
      readyDollars: totals.readyDollars,
      blockedDollars: totals.blockedDollars,
      readyAssets: totals.readyAssets,
      statusCounts: totals.statusCounts,
    },
    jobs: Object.fromEntries(Object.entries(jobData).map(([jobId, job]) => {
      const jobTotals = jobTotalsFor(jobId);
      return [jobId, {
        customer: job.customer,
        siteName: job.siteName,
        status: jobStatusLabel(jobId),
        crew: jobPrimaryCrew(jobId),
        readyDollars: jobTotals.ready,
        blockedDollars: jobTotals.blocked,
        route: "/crew/" + jobId,
        closeoutRoute: "/closeout/" + jobId,
        billingRoute: "/billing/" + jobId,
      }];
    })),
    claims: {
      open: openClaims.length,
      blockedDollars: openClaims.reduce((sum, record) => sum + record.blockedDollars, 0),
      records: claimsDamageRecords.map((record) => claimSnapshot(record)),
    },
    locates811: {
      ticketCounts,
      tickets: crew811Tickets.map((ticket) => ({
        ticketNumber: ticket.ticketNumber,
        status: ticket.status,
        linkedJobId: ticket.linkedJobId,
        assignedCrewId: ticket.assignedCrewId,
        dueAt: ticket.dueAt,
        expiresAt: ticket.expiresAt,
        positiveResponse: ticket.positiveResponseStatus,
      })),
    },
  };
  snapshot.custody = evidenceCustodyPacket("management.operations-snapshot", snapshot);
  return snapshot;
}

function base64UrlEncode(value) {
  const encoded = window.btoa(unescape(encodeURIComponent(value)));
  return encoded.replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

function base64UrlDecode(value) {
  const padded = value.replaceAll("-", "+").replaceAll("_", "/") + "===".slice((value.length + 3) % 4);
  return decodeURIComponent(escape(window.atob(padded)));
}

function encodedSharePayload() {
  const payload = {
    job: activeJobId(),
    asset: currentAssetId(),
    droppedMapPins: activeDroppedMapPins(),
    generatedAt: new Date().toISOString(),
  };

  return base64UrlEncode(JSON.stringify(payload));
}

function encodedOperationsPayload() {
  const payload = {
    route: "/management",
    job: activeJobId(),
    generatedAt: new Date().toISOString(),
  };

  return base64UrlEncode(JSON.stringify(payload));
}

function encodedClaimsPayload() {
  const record = selectedClaimRecord();
  const payload = {
    route: "/claims",
    job: record?.jobId || activeJobId(),
    claim: record?.id || "",
    filter: claimsFilter,
    generatedAt: new Date().toISOString(),
  };

  return base64UrlEncode(JSON.stringify(payload));
}

function encodedCrew811Payload() {
  const ticket = selectedCrew811Ticket();
  const payload = {
    route: "/crew811",
    ticket: ticket?.ticketNumber || "",
    filter: crew811Filter,
    generatedAt: new Date().toISOString(),
  };

  return base64UrlEncode(JSON.stringify(payload));
}

function applySharedFieldPayload() {
  if (!window.location.hash.startsWith("#field=")) return null;

  try {
    const payload = JSON.parse(base64UrlDecode(window.location.hash.slice(7)));
    const sharedJobId = jobData[payload.job] ? payload.job : null;
    const sharedAssetId = payload.asset && assetData[payload.asset] ? payload.asset : null;
    const sharedPins = Array.isArray(payload.droppedMapPins) ? payload.droppedMapPins : [];

    if (sharedJobId && jobIdField) {
      jobIdField.value = sharedJobId;
      persistActiveJobId(sharedJobId);
    }
    if (sharedPins.length) {
      const existingIds = new Set(droppedMapPins.map((pin) => pin.id));
      sharedPins.forEach((pin) => {
        if (!pin?.id || existingIds.has(pin.id)) return;
        if (!jobData[pin.jobId] || typeof pin.text !== "string") return;
        droppedMapPins.push({
          id: pin.id,
          jobId: pin.jobId,
          assetId: pin.assetId && assetData[pin.assetId] ? pin.assetId : defaultAssetForActiveJob(),
          type: pin.type === "gig" ? "gig" : "note",
          text: pin.text,
          x: Number(pin.x) || 50,
          y: Number(pin.y) || 50,
          by: pin.by || "Shared field link",
          createdAt: pin.createdAt || payload.generatedAt || formatLiveTimestamp(),
          updatedAt: pin.updatedAt || "",
        });
        existingIds.add(pin.id);
      });
      saveDroppedMapPins();
    }

    return sharedAssetId;
  } catch {
    return null;
  }
}

function applySharedOperationsPayload() {
  if (!window.location.hash.startsWith("#ops=")) return null;

  try {
    const payload = JSON.parse(base64UrlDecode(window.location.hash.slice(5)));
    const sharedJobId = jobData[payload.job] ? payload.job : null;
    if (sharedJobId && jobIdField) {
      jobIdField.value = sharedJobId;
      persistActiveJobId(sharedJobId);
      if (crewJobSelect) crewJobSelect.value = sharedJobId;
      syncJobFields();
    }
    return sharedJobId;
  } catch {
    return null;
  }
}

function applySharedClaimsPayload() {
  if (!window.location.hash.startsWith("#claims=")) return null;

  try {
    const payload = JSON.parse(base64UrlDecode(window.location.hash.slice(8)));
    const sharedJobId = jobData[payload.job] ? payload.job : null;
    const sharedClaimId = claimsDamageRecords.some((record) => record.id === payload.claim) ? payload.claim : null;
    if (sharedJobId) {
      persistActiveJobId(sharedJobId);
      if (jobIdField) jobIdField.value = sharedJobId;
      if (crewJobSelect) crewJobSelect.value = sharedJobId;
      syncJobFields();
    }
    if (sharedClaimId) selectedClaimId = sharedClaimId;
    if (["all", "Open", "Investigating", "Recovery", "Closed"].includes(payload.filter)) {
      claimsFilter = payload.filter;
      claimsFilters.forEach((item) => item.classList.toggle("active", item.dataset.claimsFilter === claimsFilter));
    }
    return sharedClaimId;
  } catch {
    return null;
  }
}

function applySharedCrew811Payload() {
  if (!window.location.hash.startsWith("#crew811=")) return null;

  try {
    const payload = JSON.parse(base64UrlDecode(window.location.hash.slice(9)));
    const sharedTicket = crew811Tickets.find((ticket) => ticket.ticketNumber === payload.ticket);
    if (sharedTicket) selectedCrew811TicketId = sharedTicket.id;
    const allowedFilters = ["all", "RENEWAL_NEEDED", "WAITING_ON_RESPONSE", "CONFLICT", "CLEAR"];
    if (allowedFilters.includes(payload.filter)) {
      crew811Filter = payload.filter;
      crew811Filters.forEach((item) => item.classList.toggle("active", item.dataset.crew811Filter === crew811Filter));
    }
    return sharedTicket?.ticketNumber || null;
  } catch {
    return null;
  }
}

function currentShareBaseUrl() {
  if (window.location.protocol === "file:") return window.location.href.split("#")[0];
  return `${window.location.origin}${window.location.pathname}`;
}

function updateShareLink() {
  if (!shareLinks.length) return;
  const shareValue = `${currentShareBaseUrl()}#field=${encodedSharePayload()}`;
  shareLinks.forEach((input) => {
    input.value = shareValue;
  });
}

function updateOpsShareLink() {
  if (!opsShareLink) return;
  opsShareLink.value = `${currentShareBaseUrl()}#ops=${encodedOperationsPayload()}`;
}

function updateClaimsShareLink() {
  if (!claimsShareLink) return;
  claimsShareLink.value = `${currentShareBaseUrl()}#claims=${encodedClaimsPayload()}`;
}

function updateCrew811ShareLink() {
  if (!crew811ShareLink) return;
  crew811ShareLink.value = `${currentShareBaseUrl()}#crew811=${encodedCrew811Payload()}`;
}

function jobAssetsFor(jobId) {
  const job = jobData[jobId];
  return Object.values(job?.assets || {}).map((assetId) => [assetId, assetData[assetId]]).filter(([, data]) => data);
}

function jobTotalsFor(jobId) {
  return jobCalculationLines(jobId).reduce(
    (totals, line) => {
      if (line.billingRulePassed) totals.ready += line.value;
      else totals.blocked += line.value;
      totals.assets += 1;
      const data = line.data || {};
      if (data.statusClass === "rejected") totals.rejected += 1;
      if (data.statusClass === "missing") totals.missing += 1;
      if (data.statusClass === "waiting") totals.waiting += 1;
      return totals;
    },
    { ready: 0, blocked: 0, assets: 0, rejected: 0, missing: 0, waiting: 0 },
  );
}

function jobReadyAssetCount(jobId) {
  return jobAssetsFor(jobId).filter(([, data]) => data.statusClass === "ready").length;
}

function jobPrimaryCrew(jobId) {
  const job = jobData[jobId];
  const primary = assetData[job?.defaultAsset];
  if (!primary) return "Unassigned";
  return primary.crew.includes("Crew") ? primary.crew : primary.crew + " Crew";
}

function jobPrimaryBlocker(jobId) {
  const blocked = jobAssetsFor(jobId).find(([, data]) => data.statusClass !== "ready");
  return blocked ? blocked[0] + ": " + blocked[1].blocker : "None";
}

function jobStatusBucket(jobId) {
  const status = (jobData[jobId]?.status || "").toLowerCase();
  if (status.includes("ready")) return "ready";
  if (status.includes("missing")) return "missing";
  if (status.includes("reject")) return "rejected";
  if (status.includes("waiting") || status.includes("approval")) return "waiting";
  return jobOverviewStatus(jobId);
}

function jobStatusLabel(jobId) {
  if (jobData[jobId]?.status) return jobData[jobId].status;
  const bucket = jobOverviewStatus(jobId);
  if (bucket === "ready") return "Ready to Bill";
  if (bucket === "missing") return "Missing Proof";
  if (bucket === "rejected") return "Rejected";
  return "Waiting on Approval";
}

function programTotals() {
  return Object.keys(jobData).reduce(
    (totals, jobId) => {
      const jobTotals = jobTotalsFor(jobId);
      const status = jobStatusBucket(jobId);
      totals.readyDollars += jobTotals.ready;
      totals.blockedDollars += jobTotals.blocked;
      totals.assets += jobTotals.assets;
      totals.readyAssets += jobReadyAssetCount(jobId);
      totals.jobs += 1;
      totals.statusCounts[status] += 1;
      return totals;
    },
    { readyDollars: 0, blockedDollars: 0, assets: 0, readyAssets: 0, jobs: 0, statusCounts: { ready: 0, waiting: 0, missing: 0, rejected: 0 } },
  );
}

function jobOverviewStatus(jobId) {
  if (jobData[jobId]?.status) return jobStatusBucket(jobId);
  const totals = jobTotalsFor(jobId);
  if (totals.rejected) return "rejected";
  if (totals.missing) return "missing";
  if (totals.waiting) return "waiting";
  return "ready";
}

function createJobOverviewPin(jobId, job, onSelect) {
  const point = jobOverviewPins[jobId] || { x: 50, y: 50, label: job.siteName, crew: "Crew" };
  const status = jobOverviewStatus(jobId);
  const totals = jobTotalsFor(jobId);
  const button = document.createElement("button");
  const title = document.createElement("strong");
  const meta = document.createElement("span");
  button.type = "button";
  button.className = "job-map-pin " + status;
  button.classList.toggle("is-selected", jobId === activeJobId());
  button.style.setProperty("--x", point.x + "%");
  button.style.setProperty("--y", point.y + "%");
  button.dataset.jobPin = jobId;
  title.textContent = jobId;
  meta.textContent = job.customer + " / " + point.label + " / " + currency(totals.ready) + " ready / " + currency(totals.blocked) + " blocked";
  button.append(title, meta);
  button.addEventListener("click", () => onSelect(jobId));
  return button;
}

function renderJobPins(layer, onSelect) {
  if (!layer) return;
  layer.textContent = "";
  Object.entries(jobData).forEach(([jobId, job]) => {
    layer.append(createJobOverviewPin(jobId, job, onSelect));
  });
}

function renderJobOverviewPins() {
  renderJobPins(jobPinLayer, selectOverviewJob);
  renderJobPins(crewJobPinLayer, selectCrewOverviewJob);
}

function applyMapZoom(nextZoom, preserveCenter = true) {
  if (!mapCanvas) return;
  const previousZoom = closeoutMapZoom;
  const before = {
    x: mapCanvas.scrollLeft + mapCanvas.clientWidth / 2,
    y: mapCanvas.scrollTop + mapCanvas.clientHeight / 2,
  };
  closeoutMapZoom = Math.max(0.65, Math.min(2.5, Number(nextZoom) || 1));
  mapCanvas.style.setProperty("--map-zoom", closeoutMapZoom.toFixed(2));
  if (zoomReadout) zoomReadout.textContent = Math.round(closeoutMapZoom * 100) + "%";
  if (preserveCenter && previousZoom > 0) {
    const ratio = closeoutMapZoom / previousZoom;
    requestAnimationFrame(() => {
      mapCanvas.scrollLeft = before.x * ratio - mapCanvas.clientWidth / 2;
      mapCanvas.scrollTop = before.y * ratio - mapCanvas.clientHeight / 2;
    });
  }
}

function applyMapZoomAtPoint(nextZoom, clientX, clientY) {
  if (!mapCanvas) return;
  const previousZoom = closeoutMapZoom;
  const rect = mapCanvas.getBoundingClientRect();
  const before = {
    x: mapCanvas.scrollLeft + clientX - rect.left,
    y: mapCanvas.scrollTop + clientY - rect.top,
  };
  closeoutMapZoom = Math.max(0.65, Math.min(2.5, Number(nextZoom) || 1));
  mapCanvas.style.setProperty("--map-zoom", closeoutMapZoom.toFixed(2));
  if (zoomReadout) zoomReadout.textContent = Math.round(closeoutMapZoom * 100) + "%";
  if (previousZoom > 0) {
    const ratio = closeoutMapZoom / previousZoom;
    requestAnimationFrame(() => {
      mapCanvas.scrollLeft = before.x * ratio - (clientX - rect.left);
      mapCanvas.scrollTop = before.y * ratio - (clientY - rect.top);
    });
  }
}

function handleMapZoom(action) {
  if (action === "fit") {
    applyMapZoom(1, false);
    if (mapCanvas) {
      requestAnimationFrame(() => {
        mapCanvas.scrollLeft = 0;
        mapCanvas.scrollTop = 0;
      });
    }
    return;
  }
  const step = action === "in" ? 0.2 : -0.2;
  applyMapZoom(closeoutMapZoom + step, true);
}

function setCloseoutMapView(view) {
  const showJobs = view === "jobs";
  mapCanvas?.classList.toggle("is-job-overview", showJobs);
  if (jobOverviewLayer) jobOverviewLayer.hidden = !showJobs;
  if (closeoutMapScrollLayer) closeoutMapScrollLayer.hidden = showJobs;
  mapViewButtons.forEach((button) => button.classList.toggle("active", button.dataset.mapView === view));
  if (showJobs) {
    renderJobOverviewPins();
    if (toolbarStatus) toolbarStatus.textContent = "Full job map - select a job pin";
    if (liveSource) liveSource.textContent = Object.keys(jobData).length + " active jobs pinned";
  } else {
    renderAsset(currentAssetId());
  }
}

function selectOverviewJob(jobId) {
  if (!jobData[jobId]) return;
  if (jobIdField) jobIdField.value = jobId;
  if (crewJobSelect) crewJobSelect.value = jobId;
  syncJobFields();
  renderInvoiceLines();
  renderCloseoutSummaries();
  syncCrewCard(jobId);
  renderBilling(jobId);
  renderAsset(defaultAssetForActiveJob());
  renderJobOverviewPins();
  if (document.body.dataset.route === "closeout") setRoute("/closeout/" + jobId, true);
}

function applyCrewMapZoom(nextZoom, preserveCenter = true) {
  if (!crewMapCanvas) return;
  const previousZoom = crewMapZoom;
  const before = {
    x: crewMapCanvas.scrollLeft + crewMapCanvas.clientWidth / 2,
    y: crewMapCanvas.scrollTop + crewMapCanvas.clientHeight / 2,
  };
  crewMapZoom = Math.max(0.65, Math.min(2.4, Number(nextZoom) || 1));
  crewMapCanvas.style.setProperty("--crew-map-zoom", crewMapZoom.toFixed(2));
  if (crewZoomReadout) crewZoomReadout.textContent = Math.round(crewMapZoom * 100) + "%";
  if (preserveCenter && previousZoom > 0) {
    const ratio = crewMapZoom / previousZoom;
    requestAnimationFrame(() => {
      crewMapCanvas.scrollLeft = before.x * ratio - crewMapCanvas.clientWidth / 2;
      crewMapCanvas.scrollTop = before.y * ratio - crewMapCanvas.clientHeight / 2;
    });
  }
}

function handleCrewMapZoom(action) {
  if (action === "fit") {
    applyCrewMapZoom(1, false);
    requestAnimationFrame(() => {
      if (!crewMapCanvas) return;
      crewMapCanvas.scrollLeft = 0;
      crewMapCanvas.scrollTop = 0;
    });
    return;
  }
  applyCrewMapZoom(crewMapZoom + (action === "in" ? 0.2 : -0.2), true);
}

function setCrewMapView(view) {
  const showJobs = view === "jobs";
  crewMapCanvas?.classList.toggle("is-job-overview", showJobs);
  if (crewOverviewLayer) crewOverviewLayer.hidden = !showJobs;
  crewMapViewButtons.forEach((button) => button.classList.toggle("active", button.dataset.crewMapView === view));
  if (showJobs) {
    renderJobOverviewPins();
    if (crewLiveCopy) crewLiveCopy.textContent = Object.keys(jobData).length + " active jobs / tap a pin to open job";
  } else {
    syncCrewCard(activeJobId());
  }
}

function selectCrewOverviewJob(jobId) {
  if (!jobData[jobId]) return;
  if (jobIdField) jobIdField.value = jobId;
  if (crewJobSelect) crewJobSelect.value = jobId;
  syncJobFields();
  renderInvoiceLines();
  renderCloseoutSummaries();
  renderBilling(jobId);
  renderAsset(defaultAssetForActiveJob());
  syncCrewCard(jobId);
  renderDroppedMapPins();
  renderJobOverviewPins();
  updateShareLink();
}

function syncJobMarkers(selectedAssetId = defaultAssetForActiveJob()) {
  const job = activeJob();
assetMarkers.forEach((marker) => {
    const assetId = job.assets?.[marker.dataset.slot];
    const data = assetData[assetId];
    if (!assetId || !data) return;

    marker.dataset.asset = assetId;
    marker.dataset.status = data.statusClass;
    marker.textContent = assetId;
    marker.className = `asset-marker ${data.statusClass}`;
    marker.classList.toggle("is-selected", assetId === selectedAssetId);
  });

  photoPins.forEach((pin) => {
    const assetId = job.assets?.[pin.dataset.photoSlot];
    const data = assetData[assetId];
    if (!assetId || !data) return;

    pin.dataset.photoAsset = assetId;
    pin.dataset.status = data.statusClass;
    pin.className = `photo-pin ${data.statusClass}`;
    pin.classList.toggle("is-selected", assetId === selectedAssetId);

    const image = pin.querySelector("img");
    const label = pin.querySelector("span");
    if (image) {
      image.src = data.photo;
      image.alt = `${assetId} field evidence photo`;
    }
    if (label) label.textContent = `${assetId} ${shortStatusLabel(data)}`;
  });
}

function syncJobRouteLinks(jobId = activeJobId()) {
  if (!jobData[jobId]) return;
  setRouteLink(openCloseoutLink, "/closeout/" + jobId);
  setRouteLink(openBillingLink, "/billing/" + jobId);
  setRouteLink(billingNavLink, "/billing/" + jobId);
  setRouteLink(closeoutsPrimaryLink, "/closeout/" + jobId);
  if (closeoutsPrimaryLink) closeoutsPrimaryLink.textContent = "Open " + jobId + " Package";
}

function syncJobFields() {
  const job = activeJob();
  const jobId = activeJobId();
  const totals = activeJobTotals();

  if (jobCustomer) jobCustomer.textContent = clientDisplayNameForJob(job);
  if (jobIssuedTo) jobIssuedTo.textContent = clientIssuedToForJob(job);
  if (jobProject) jobProject.textContent = job.project;
  if (jobSiteId) jobSiteId.textContent = job.siteId;
  if (jobSiteName) jobSiteName.textContent = job.siteName;
  if (jobSiteType) jobSiteType.textContent = job.siteType;
  if (jobAddress) jobAddress.innerHTML = job.address;
  if (jobCounty) jobCounty.textContent = job.county;
  if (jobMapDate) jobMapDate.textContent = job.mapDate;
  if (jobDrawnBy) jobDrawnBy.textContent = job.drawnBy;
  if (titleJobId) titleJobId.textContent = jobId;
  if (jobPickerStatus) {
    jobPickerStatus.textContent = `${totals.assets} assets / ${currency(totals.ready)} ready / ${currency(totals.blocked)} blocked`;
  }

  syncInvoiceNumber();
  syncJobRouteLinks(jobId);

  if (subjectInput) {
    subjectInput.value = `Daily closeout package - ${jobId} - ${job.siteName}`;
  }
  if (recipientInput) recipientInput.value = clientBillingEmailForJob(job) || "closeout@example.invalid";
  if (issuedToInput) issuedToInput.value = clientIssuedToForJob(job);
  if (notesInput) {
    const totals = activeJobTotals();
    notesInput.value = `Daily closeout package for ${job.siteName}. Includes map sheet, asset photos, proof checklist, billing lines, and remaining blockers. Ready: ${currency(totals.ready)}. Blocked: ${currency(totals.blocked)}.`;
  }

  syncCloseoutAppendixText();
  updateShareLink();
}

function billingSummary(data) {
  if (data.statusClass === "ready") {
    return ["READY TO BILL:", currency(data.amount)];
  }

  if (data.statusClass === "rejected") {
    return ["REJECTED $:", `${currency(data.amount)} held`];
  }

  if (data.statusClass === "missing") {
    return ["BLOCKED $:", `${currency(data.amount)} held`];
  }

  return ["WAITING $:", `${currency(data.amount)} pending`];
}

function invoiceRowsForMode(mode) {
  return jobCalculationLines(activeJobId()).filter((line) => {
    if (mode === "ready") return line.billingRulePassed;
    if (mode === "blocked") return !line.billingRulePassed;
    return true;
  });
}

function renderInvoiceLines() {
  if (!invoiceLines) return;

  const mode = lineMode?.value || "ready";
  const rows = invoiceRowsForMode(mode);
  const totals = activeJobTotals();

  invoiceLines.textContent = "";

  rows.forEach((line) => {
    const row = document.createElement("tr");
    const cells = [line.assetId, line.billingRulePassed ? "Ready to Bill" : line.result, line.line?.payItem || line.data.payItem, currency(line.value)];

    cells.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      row.append(td);
    });

    invoiceLines.append(row);
  });

  if (!rows.length) {
    const row = document.createElement("tr");
    const modeLabel = mode === "blocked" ? "No blocked or rejected lines" : mode === "all" ? "No closeout lines" : "No ready-to-bill lines";
    [modeLabel, "-", "-", "$0"].forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      row.append(td);
    });
    invoiceLines.append(row);
  }

  if (readyTotal) readyTotal.textContent = currency(totals.ready);
  if (blockedTotal) blockedTotal.textContent = currency(totals.blocked);
}

function renderDocumentManifest() {
  if (!documentLines) return;

  documentLines.textContent = "";

  activeRows(documentManifest).forEach(([doc, status, ref]) => {
    const row = document.createElement("tr");

    [doc, status, ref].forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      row.append(td);
    });

    if (status === "Needs Fix") row.className = "needs-fix";
    if (status === "Pending" || status === "Partial") row.className = "pending";

    documentLines.append(row);
  });
  renderPackageCompleteness();
}

function renderPackageCompleteness() {
  const assets = activeJobAssets();
  const readyAssets = assets.filter(([, data]) => data.statusClass === "ready");
  const blockedAssets = assets.filter(([, data]) => data.statusClass !== "ready");
  const manifestRows = activeRows(documentManifest);
  const missingDocs = manifestRows.filter(([, status]) => /Needs Fix|Pending|Partial|Missing/i.test(status));
  const topBlocker = blockedAssets[0];
  const status = blockedAssets.length ? "Needs Fix" : missingDocs.length ? "Docs Review" : "Ready to Send";

  if (packageCompleteStatus) packageCompleteStatus.textContent = status;
  if (packageReadyCount) packageReadyCount.textContent = String(readyAssets.length);
  if (packageBlockedCount) packageBlockedCount.textContent = String(blockedAssets.length);
  if (packageMissingCount) packageMissingCount.textContent = String(missingDocs.length);
  if (packageNextAction) {
    packageNextAction.textContent = topBlocker
      ? `Next: clear ${topBlocker[0]} - ${topBlocker[1].blocker}`
      : missingDocs.length
        ? `Next: review ${missingDocs[0][0]} - ${missingDocs[0][1]}`
        : "Package ready to send with invoice lines.";
  }
}

function assetKind(assetId, data) {
  const label = `${assetId} ${data.asset}`.toLowerCase();
  if (label.includes("handhole")) return "Handhole";
  if (label.includes("splice closure")) return "Splice closure";
  if (label.includes("vault")) return "Splice vault";
  if (label.includes("underground") || label.includes("ug")) return "Underground fiber";
  return "Field asset";
}

function renderRows(body, rows, fixPredicate = () => false) {
  if (!body) return;
  body.textContent = "";
  rows.forEach((cells) => {
    const row = document.createElement("tr");
    cells.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      row.append(td);
    });
    if (fixPredicate(cells)) row.className = "needs-fix";
    body.append(row);
  });
}

function approvalStateForAsset(data) {
  if (data.statusClass === "ready") return ["Approved", "Ready", "Queued", "None"];
  if (data.statusClass === "waiting") return ["Waiting", "Pending", "Not released", data.blocker];
  if (data.statusClass === "rejected") return ["Rejected", "Blocked", "Held", data.blocker];
  return ["Needs Fix", "Blocked", "Held", data.blocker];
}

function renderApprovalAndAuditLines() {
  const assets = activeJobAssets();
  renderRows(approvalLinesBody, assets.map(([assetId, data]) => {
    const [approval, invoice, readiness, hold] = approvalStateForAsset(data);
    return [assetId, approval, invoice, readiness, hold];
  }), (cells) => cells[1] !== "Approved");

  const auditRows = assets.flatMap(([assetId, data]) => {
    const sourceRows = data.comms.length ? data.comms.slice(0, 2) : [["Field sync", data.status]];
    return sourceRows.map(([label, text]) => {
      const time = label.match(/\d{1,2}:\d{2}/)?.[0] || data.updated.split(" ").slice(-1)[0] || "Live";
      const by = data.tech.split("/")[0].trim() || data.crew;
      return [time, `${assetId} ${text}`, by, data.status];
    });
  }).slice(0, 10);
  renderRows(auditLinesBody, auditRows, (cells) => !/Ready to Bill|Complete|Approved/.test(cells[3]));
}

function isFixRow(cells) {
  return cells.some((cell) => /Needs Fix|Rejected|Hold|Verify|Missing|Mismatch|Reconcile|Conflict|Incomplete|Pending|Review|Expires/i.test(String(cell)));
}

function renderLivePackageTables() {
  const rows = activePackageRows();
  renderRows(utilityConflictLines, rows.utilityConflicts, isFixRow);
  renderRows(potholeMakeReadyLines, rows.potholeMakeReady, isFixRow);
  renderRows(materialReceivingLines, rows.materialReceiving, isFixRow);
  renderRows(reelLotTraceLines, rows.reelLotTrace, isFixRow);
  renderRows(complianceRiskLines, rows.complianceRisk, isFixRow);
  renderRows(warrantyExceptionLines, rows.warrantyExceptions, isFixRow);
  renderRows(packageHandoffLines, rows.packageHandoffs, isFixRow);
  renderRows(exportEventLines, rows.exportEvents, isFixRow);
  renderRows(actionQueueLines, rows.actionQueue, isFixRow);
  renderRows(proofQualityLines, rows.proofQuality, isFixRow);
  renderRows(programRollupLines, rows.programRollup, isFixRow);
  renderRows(dailyDispatchLines, rows.dailyDispatch, isFixRow);
  renderRows(contractChangeOrderLines, rows.contractChangeOrders, isFixRow);
  renderRows(retainageWaiverLines, rows.retainageWaivers, isFixRow);
  renderRows(workOrderIntakeLines, rows.workOrderIntake, isFixRow);
  renderRows(ownerPrereqLines, rows.ownerPrerequisites, isFixRow);
  renderRows(rootCauseLines, rows.rootCauseCycle, isFixRow);
  renderRows(cashForecastLines, rows.cashForecast, isFixRow);
  renderRows(accessSharingLines, rows.accessSharing, isFixRow);
  renderRows(signatureTamperLines, rows.signatureTamper, isFixRow);
  renderRows(offlineSyncLines, rows.offlineSync, isFixRow);
  renderRows(retentionDeviceLines, rows.retentionDeviceHealth, isFixRow);
  renderRows(gisHandoffLines, rows.gisHandoff, isFixRow);
  renderRows(assetRegistryLines, rows.assetRegistry, isFixRow);
  renderRows(redlineCorrectionLines, rows.redlineCorrections, isFixRow);
  renderRows(asbuiltVarianceLines, rows.asBuiltVariance, isFixRow);
  renderRows(insuranceClaimLines, rows.insuranceClaims, isFixRow);
  renderRows(financingTermLines, rows.financingTerms, isFixRow);
  renderRows(invoiceAgingLines, rows.invoiceAging, isFixRow);
  renderRows(lienBondLines, rows.lienBondNotices, isFixRow);
  renderRows(crewTimeLines, rows.crewTimeProduction, isFixRow);
  renderRows(subPayAppLines, rows.subcontractorPayApps, isFixRow);
  renderRows(costCodeLines, rows.costCodeGlExport, isFixRow);
  renderRows(taxJurisdictionLines, rows.taxJurisdiction, isFixRow);
  renderRows(permitRowLines, rows.permitRow, isFixRow);
  renderRows(restorationPunchLines, rows.restorationPunch, isFixRow);
  renderRows(sourceIntakeLines, rows.sourceIntake, isFixRow);
  renderRows(reconciliationLines, rows.reconciliationChecks, isFixRow);
  renderRows(payItemCatalogLines, rows.payItemCatalog, isFixRow);
  renderRows(approvalRuleLines, rows.approvalRules, isFixRow);
  renderRows(qcInspectionLines, rows.qcInspection, isFixRow);
  renderRows(ownerApprovalGateLines, rows.ownerApprovalGates, isFixRow);
  renderRows(signoffLogLines, rows.signoffLog, isFixRow);
  renderRows(disputeRegisterLines, rows.disputeRegister, isFixRow);
  renderRows(escalationQueueLines, rows.escalationQueue, isFixRow);
  renderRows(notificationLogLines, rows.notificationLog, isFixRow);
  renderRows(safetyJsaLines, rows.safetyJsa, isFixRow);
  renderRows(incidentDamageLines, rows.incidentDamage, isFixRow);
  renderRows(siteAccessLines, rows.siteAccess, isFixRow);
  renderRows(weatherConditionLines, rows.weatherConditions, isFixRow);
  renderRows(customerNoticeLines, rows.customerNotices, isFixRow);
  renderRows(outageNocLines, rows.outageNoc, isFixRow);
  renderRows(equipmentToolLines, rows.equipmentTools, isFixRow);
  renderRows(calibrationCustodyLines, rows.calibrationCustody, isFixRow);
  renderRows(crewQualificationLines, rows.crewQualifications, isFixRow);
  renderRows(certificationExpiryLines, rows.certificationExpiry, isFixRow);
  renderRows(fiberTestLines, rows.fiberTests, isFixRow);
  renderRows(turnupStatusLines, rows.turnupStatus, isFixRow);
  renderRows(ownerDeliverableLines, rows.ownerDeliverables, isFixRow);
  renderRows(ownerAcceptanceLines, rows.ownerAcceptance, isFixRow);
  renderRows(ballInCourtLines, rows.ballInCourt, isFixRow);
  renderRows(handoffReceiptLines, rows.handoffReceipts, isFixRow);
}

function renderRateAdminSections() {
  const jobId = activeJobId();
  const job = activeJob();
  const rate = rateSubmissionFor(jobId);
  const metrics = jobReadinessMetrics(jobId);
  const totals = activeJobTotals();
  const calcLines = jobCalculationLines(jobId);
  renderRows(jobPercentLines, [
    ["Admin Docs Complete %", metrics.adminDocs + "%", "Required admin docs attached / required docs"],
    ["Rate Submission Complete %", metrics.rateSubmission + "%", "Completed rate fields / required rate fields"],
    ["Rate Approval %", metrics.rateApproval + "%", "Approved rate lines / submitted rate lines"],
    ["Contract Match %", metrics.contractMatch + "%", "Asset pay items matched to contract pay items / total asset pay items"],
    ["PO Funding %", metrics.poFunding + "%", "Funded dollars / total billable dollars"],
    ["Change Order Approval %", metrics.changeOrder + "%", "Approved CO dollars / submitted CO dollars"],
    ["Calculation Confidence %", metrics.calculationConfidence + "%", "Lines with approved rate + quantity + proof + billing rule / total lines"],
    ["Retainage / Waiver Complete %", metrics.retainageWaiver + "%", "Required waiver and retainage docs complete / required items"],
  ], (cells) => parseInt(cells[1], 10) < 100);

  renderRows(adminDocLines, adminDocsFor(jobId).map((doc) => [doc[0], doc[1], doc[5] || doc[2], doc[8] || "No"]), (cells) => /Missing|Rejected|Partial|Pending/i.test(cells[1]));

  if (rateSubmissionSummary) {
    rateSubmissionSummary.innerHTML = "";
    [
      ["Customer", rate?.customer || job.customer],
      ["Project", rate?.project || job.project],
      ["Job", jobId],
      ["Contract / MSA", rate?.contract || "Missing"],
      ["SOW", rate?.sow || "Missing"],
      ["PO", rate?.po || "Missing"],
      ["Rate Version", rate?.version || "Missing"],
      ["Status", rate?.status || "Missing"],
      ["Effective Date", rate?.effectiveDate || "Missing"],
      ["Submitted By", rate?.submittedBy || "Missing"],
      ["Approved By", rate?.approvedBy || "Missing"],
      ["Locked For Billing", rate?.locked ? "Yes" : "No"],
      ["Retainage", rate?.retainage || "Not set"],
      ["Tax / Jurisdiction", rate?.taxJurisdiction || "Not set"],
    ].forEach(([label, value]) => {
      const row = document.createElement("div");
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = label;
      dd.textContent = value;
      row.append(dt, dd);
      rateSubmissionSummary.append(row);
    });
  }

  renderRows(rateSubmissionLines, calcLines.map((line) => [
    line.assetId,
    line.line?.payItem || line.data.payItem,
    `${line.line?.quantity || 0} ${line.line?.unit || ""}`,
    currency(line.line?.rate || 0),
    currency(line.value),
    line.line?.status || "Missing",
  ]), (cells) => cells[5] !== "Approved");

  renderRows(calculationAuditLines, calcLines.map((line) => [
    line.assetId,
    line.rate?.version || "No rate source",
    line.formula,
    `${line.result} / proof ${line.proofReady ? "Complete" : "Incomplete"} / docs ${line.docsReady ? "Complete" : "Incomplete"}`,
  ]), (cells) => !/^Ready to Bill/.test(cells[3]));

  renderRows(dailyCustomerSummaryLines, [
    ["Customer", clientDisplayNameForJob(job)],
    ["Job", `${jobId} / ${job.siteName}`],
    ["Date", workDate?.value || "06/29/2026"],
    ["Customer Ready Score", metrics.calculationConfidence + "%"],
    ["Billing Ready", totals.blocked ? "Blocked" : "100%"],
    ["Blocked Revenue", currency(totals.blocked)],
    ["Field Proof", Math.round(activeJobAssets().filter(([, data]) => data.statusClass === "ready").length / Math.max(activeJobAssets().length, 1) * 100) + "%"],
    ["Documents", metrics.adminDocs + "%"],
    ["Admin Docs", metrics.adminDocs + "%"],
    ["Rate Submission", metrics.rateSubmission + "%"],
    ["Calculation Confidence", metrics.calculationConfidence + "%"],
    ["Ready to Bill", currency(totals.ready)],
    ["Blocked", currency(totals.blocked)],
    ["Total Billable", currency(totals.ready + totals.blocked)],
    ["Rate Version", rate?.version || "Missing"],
    ["Contract / MSA", rate?.contract || "Missing"],
    ["SOW", rate?.sow || "Missing"],
    ["PO", rate?.po || "Missing"],
    ["Rate Status", `${rate?.status || "Missing"}${rate?.locked ? " / Locked" : ""}`],
    ["Retainage", rate?.retainage || "Not set"],
  ], (cells) => /Blocked|Missing|Submitted|Rejected|Expired/i.test(cells[1]));

  if (dailyCustomerSummaryText) {
    dailyCustomerSummaryText.textContent = totals.blocked
      ? `The field work may be complete, but billing remains blocked because ${rateApproved(rate) ? "proof, docs, locate, claim, or owner approval holds remain" : "the rate submission is not approved"}. Ready: ${currency(totals.ready)} / Blocked: ${currency(totals.blocked)}.`
      : `The ${job.siteName} package is ready for billing with ${currency(totals.ready)} calculated from the approved ${rate?.version || "rate submission"}. Field proof is complete, billing lines are matched to approved pay items, and no revenue is currently blocked.`;
  }
}

function renderDocumentAutomationEngine() {
  const jobId = activeJobId();
  const generatedDocuments = generateDocumentsForJob(jobId);
  const damageRecords = damageProofRecords.filter((record) => record.jobId === jobId);

  if (documentAutomationStatus) {
    const readyCount = generatedDocuments.filter((doc) => doc.status === "ready").length;
    documentAutomationStatus.textContent = `Document Automation Engine drafted ${generatedDocuments.length} operational documents for ${jobId}; ${readyCount} are ready and ${generatedDocuments.length - readyCount} need review. Operational documents only: CrewProof creates packages, exports, readiness support, and audit records. It does not process payments, payroll, banking, collections, settlements, or money movement.`;
  }

  renderRows(documentAutomationLines, generatedDocuments.map((doc) => [
    doc.title,
    doc.audience.replaceAll("_", " "),
    damageProofStatusLabel(doc.status),
    String(doc.sourceRecords.length),
    doc.missingRequirements.length ? doc.missingRequirements.join(", ") : "None",
    doc.exportFormats.join(" / "),
  ]), (cells) => cells[2] !== "Ready");

  renderRows(damageProofLines, damageRecords.map((record) => [
    record.id,
    record.assetId || "Map pin",
    damageProofTypeLabel(record.damageType),
    damageProofStatusLabel(record.status),
    `${record.linked811TicketId || "none"} / ${record.claimId || "none"}`,
    record.nextAction || "Management review",
  ]), (cells) => !/Accepted|Closed/.test(cells[3]));

  renderRows(situationAssistantLines, damageProofSituationRows(jobId), (cells) => /needs|review|missing|hold|open|attach/i.test(cells.join(" ")));

  const decisionRows = jobAssetsFor(jobId).flatMap(([assetId, data]) => (data.comms || []).slice(0, 2).map(([label, message]) => [
    label,
    /Email/i.test(label) ? "Email" : /Chat/i.test(label) ? "Chat" : "Timeline",
    `${assetId}: ${message}`,
    /accepted|approved|rejected|hold|ready|requested|blocked/i.test(message) ? "Official decision candidate" : "Source record",
  ]));
  const damageDecisionRows = damageRecords.map((record) => [
    record.lastUpdate || record.capturedAt,
    "Damage Proof",
    `${record.id}: ${record.aiSummary}`,
    record.customerFacingApproved ? "Approved for customer package" : "Internal until management approval",
  ]);
  renderRows(jobDecisionLogLines, [...damageDecisionRows, ...decisionRows].slice(0, 10), (cells) => /candidate|Internal|Rejected|hold|requested/i.test(cells.join(" ")));
}

function renderCloseoutSummaries() {
  const job = activeJob();
  const assets = activeJobAssets();
  const assetIds = activeJobAssetIds();
  const firstAsset = assetIds[0] || "HH-1";
  const secondAsset = assetIds[1] || firstAsset;
  const lastAsset = assetIds[assetIds.length - 1] || firstAsset;

  renderRows(assetSummaryLines, assets.map(([assetId, data]) => [
    assetId,
    assetKind(assetId, data),
    data.status,
    data.blocker === "None" ? data.payItem : data.blocker,
  ]), (cells) => !/Ready to Bill|Waiting on Approval/.test(cells[2]) && cells[2] !== "Complete");

  renderRows(boreLogLines, assets.slice(0, Math.max(2, Math.min(assets.length, 4))).map(([assetId, data], index) => {
    const from = index === 0 ? "POLE / START" : assetIds[index - 1] || firstAsset;
    const planned = 80 + index * 27;
    const variance = data.statusClass === "ready" ? "0" : "+" + (index + 4);
    return [
      `${from} to ${assetId}`,
      planned + " ft",
      data.statusClass === "ready" ? planned + " ft" : planned + index + 4 + " ft",
      variance,
      data.statusClass === "ready" ? "Matched" : data.proof,
    ];
  }), (cells) => cells[4] !== "Matched");

  const blockedFootage = assets.filter(([, data]) => data.statusClass !== "ready").length * 7;
  renderRows(materialCountLines, [
    ["144ct Fiber", "MAT-" + jobToken(), (230 + assets.length * 12) + " ft", assets.length + " ft", "OK"],
    ["1.25 in HDPE", "MAT-HDPE-" + jobToken().slice(-4), (210 + blockedFootage) + " ft", blockedFootage ? "-" + blockedFootage + " ft" : "0 ft", blockedFootage ? "Reconcile" : "OK"],
    ["24x36 HH / vault", "MAT-CIVIL-" + job.siteId, assets.filter(([assetId]) => /HH|SV/.test(assetId)).length + " ea", "0 ea", "OK"],
  ], (cells) => cells[4] !== "OK");

  renderRows(utilitySummaryLines, assets.map(([assetId, data], index) => [
    String(index + 1),
    assetKind(assetId, data),
    index === 0 ? "Pole / start" : assetIds[index - 1],
    assetId,
    data.status,
  ]), (cells) => !/Ready to Bill/.test(cells[4]));

  renderRows(beforeAfterLines, assets.map(([assetId, data]) => [
    assetId,
    "Attached",
    data.statusClass === "missing" ? "Missing after / open proof" : "Attached",
    data.statusClass === "rejected" ? "Mismatch" : "Matched",
    data.proof,
  ]), (cells) => cells[4] !== "Complete");

  const liveLocateRows = linkedCrew811Tickets(activeJobId()).map((ticket) => [
    ticket.ticketNumber,
    ticket.workType || ticket.workDescription || `${firstAsset} to ${lastAsset}`,
    ticket.expiresAt ? formatTicketDate(ticket.expiresAt) : "No expiration",
    ticket.status,
    crew811JobStatus(activeJobId()).blockerText,
  ]);
  renderRows(locateTicketLines, liveLocateRows.length ? liveLocateRows : [
    ["No Sunshine 811 ticket linked", `${firstAsset} to ${secondAsset}`, "-", "Needs import", "Paste Exactix JSON in Crew811"],
  ], (cells) => cells[3] !== "CLEAR" && cells[3] !== "Clear" || cells[4] !== "None");

  renderApprovalAndAuditLines();
  renderLivePackageTables();
  renderRateAdminSections();
  renderDocumentAutomationEngine();
}

function renderAsset(assetId) {
  const targetAssetId = isActiveJobAsset(assetId) ? assetId : defaultAssetForActiveJob();
  const data = assetData[targetAssetId];

  if (!data) {
    return;
  }

  syncJobMarkers(targetAssetId);

  assetMarkers.forEach((marker) => {
    marker.classList.toggle("is-selected", marker.dataset.asset === targetAssetId);
  });
  photoPins.forEach((pin) => {
    pin.classList.toggle("is-selected", pin.dataset.photoAsset === targetAssetId);
  });

  if (toolbarStatus) {
    toolbarStatus.textContent = `${targetAssetId} selected - ${data.status}`;
  }
  if (liveSource) liveSource.textContent = `Live from ${data.source}`;

  if (titleJobId) titleJobId.textContent = activeJobId();
  if (selectedAsset) selectedAsset.textContent = data.asset;
  if (selectedStatus) selectedStatus.textContent = data.status;
  if (selectedCrew) selectedCrew.textContent = data.crew;
  if (selectedDevice) selectedDevice.textContent = data.device;
  if (selectedGps) selectedGps.textContent = data.gps;
  if (selectedProof) selectedProof.textContent = data.proof;
  if (selectedBlocker) selectedBlocker.textContent = data.blocker;
  if (selectedTech) selectedTech.textContent = data.tech;
  if (selectedContractor) selectedContractor.textContent = data.contractor;
  if (selectedUpdated) selectedUpdated.textContent = data.updated;
  if (selectedFeed) selectedFeed.textContent = data.source;
  if (packageLocation) packageLocation.textContent = data.location;
  if (packageProgress) packageProgress.textContent = `${data.progress}% proof - ${data.status}`;
  if (packageUpdated) packageUpdated.textContent = `${data.tech} / ${data.updated}`;
  if (packageSource) packageSource.textContent = data.source;
  if (selectedPayItem) selectedPayItem.textContent = data.payItem;
  const [billingLabel, billingValue] = billingSummary(data);
  if (selectedMoneyLabel) selectedMoneyLabel.textContent = billingLabel;
  if (selectedValue) selectedValue.textContent = billingValue;
  if (selectedPhoto) selectedPhoto.src = data.photo;
  if (selectedPhotoCaption) selectedPhotoCaption.textContent = data.photoCaption;
  if (selectedProgress) selectedProgress.style.width = `${data.progress}%`;
  if (selectedPercent) selectedPercent.textContent = `${data.progress}%`;

  if (statusDot) {
    statusDot.className = `status-dot ${data.statusClass}`;
  }

  if (selectedProofList) {
    selectedProofList.textContent = "";

    data.list.forEach(([state, text]) => {
      const item = document.createElement("li");
      item.textContent = text;
      if (state) item.className = state;
      selectedProofList.append(item);
    });
  }

  if (commsLog) {
    commsLog.textContent = "";

    data.comms.forEach(([label, text], index) => {
      const item = document.createElement("li");
      const details = document.createElement("details");
      const summary = document.createElement("summary");
      const tag = document.createElement("b");
      const message = document.createElement("span");
      const detail = document.createElement("dl");
      const rows = [
        ["Asset", targetAssetId],
        ["Status", data.status],
        ["Source", data.source],
        ["GPS", data.gps],
        ["Next Action", data.blocker === "None" ? "Ready for approval / billing" : data.blocker],
      ];

      tag.textContent = label;
      message.textContent = text;
      summary.append(tag, message);
      summary.addEventListener("click", (event) => {
        event.preventDefault();
        details.open = !details.open;
      });
      rows.forEach(([key, value]) => {
        const row = document.createElement("div");
        const dt = document.createElement("dt");
        const dd = document.createElement("dd");
        dt.textContent = key;
        dd.textContent = value;
        row.append(dt, dd);
        detail.append(row);
      });
      if (index === 0) details.open = true;
      details.append(summary, detail);
      item.append(details);
      commsLog.append(item);
    });
  }

  const activeMarker = document.querySelector(`[data-asset="${targetAssetId}"]`);
  if (mapCanvas && activeMarker) {
    activeMarker.scrollIntoView({ block: "center", inline: "center", behavior: "smooth" });
  }

  renderDroppedMapPins();
  updateShareLink();
}

function refreshFieldDerivedViews(assetId = currentAssetId()) {
  syncJobFields();
  renderInvoiceLines();
  renderDocumentManifest();
  renderCloseoutSummaries();
  renderAsset(assetId);
  syncCrewCard(activeJobId());
  renderBilling(activeJobId());
  renderManagement();
  renderReports();
  renderJobOverviewPins();
  updateShareLink();
}

function addAssetEvent(data, label, message) {
  data.comms.unshift([label, message]);
  data.comms = data.comms.slice(0, 8);
}

function upsertProofLine(data, text, state = "done") {
  if (!data.list.some(([, line]) => line === text)) {
    data.list.unshift([state, text]);
  }
}

function runCrewFieldAction(action) {
  const assetId = currentAssetId();
  const data = assetData[assetId] || assetData[defaultAssetForActiveJob()];
  if (!data) return;
  const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const actor = data.tech.split("/")[0].trim() || data.crew;

  if (action === "Add Proof") {
    data.proof = data.proof === "Rejected" ? "Needs Fix" : "Submitted";
    data.progress = Math.min(96, Math.max(data.progress, data.progress + 12));
    upsertProofLine(data, `Crew Submitted: new proof added by ${actor}`);
    addAssetEvent(data, `${time} Proof`, `${actor}: added field proof to ${assetId}.`);
  }

  if (action === "Take Photo") {
    data.proof = data.statusClass === "ready" ? "Complete" : "Submitted";
    data.progress = Math.min(98, Math.max(data.progress, data.progress + 18));
    data.photoCaption = `${assetId} latest field photo pinned at job location`;
    upsertProofLine(data, "Field photo pinned to asset location");
    addAssetEvent(data, `${time} Photo`, `${actor}: photo captured and pinned to ${data.location}.`);
  }

  if (action === "GPS Lock") {
    data.progress = Math.min(99, Math.max(data.progress, data.progress + 8));
    upsertProofLine(data, "GPS point locked at asset location");
    addAssetEvent(data, `${time} GPS`, `${actor}: GPS lock confirmed at ${data.gps}.`);
  }

  if (action === "Mark Complete") {
    data.status = "Ready to Bill";
    data.statusClass = "ready";
    data.proof = "Complete";
    data.blocker = "None";
    data.progress = 100;
    data.feedUpdated = formatLiveTimestamp();
    data.updated = data.feedUpdated;
    upsertProofLine(data, "Ready to Bill");
    upsertProofLine(data, "Blocker cleared from field action");
    addAssetEvent(data, `${time} Complete`, `${actor}: ${assetId} marked complete and ready to bill.`);
  }

  const damageRecord = createDamageProofFromCrewAction(action, assetId, data);
  if (damageRecord) {
    data.proof = data.proof === "Complete" ? "Complete" : "Submitted";
    data.blocker = damageRecord.reviewRequired ? "Damage proof requires management review" : data.blocker;
    data.progress = Math.min(99, Math.max(data.progress, data.progress + 6));
    upsertProofLine(data, `${damageProofTypeLabel(damageRecord.damageType)} captured as crew damage proof`, "rejected");
    addAssetEvent(data, `${time} Damage Proof`, `${actor}: ${damageRecord.id} created for ${assetId}; AI follow-up queued.`);
  }

  if (!["Add Proof", "Take Photo", "GPS Lock", "Mark Complete"].includes(action)) {
    addAssetEvent(data, `${time} Field`, `${actor}: ${action} queued for ${assetId}.`);
  }

  if (crewActionStatus) {
    crewActionStatus.textContent = `${action} saved to ${assetId} / ${data.status} / ${formatLiveTimestamp()}`;
    crewActionStatus.classList.add("is-updated");
  }
  if (crewLiveCopy) crewLiveCopy.textContent = `${action} saved / ${assetId} / ${data.status}`;
  if (typeof apiRequest === "function") {
    apiRequest(`/api/assets/${encodeURIComponent(assetId)}/action`, {
      method: "POST",
      body: { action, actor },
    });
    if (damageRecord) {
      apiRequest("/api/damage-proof", {
        method: "POST",
        body: damageRecord,
      });
    }
  }
  refreshFieldDerivedViews(assetId);
}

const commsMetaSummaries = document.querySelectorAll(".comms-meta summary");
const routeViews = document.querySelectorAll("[data-view]");
const routeLinks = document.querySelectorAll("[data-route-link]");
const modeLabel = document.querySelector("[data-mode-label]");
const roleMode = document.querySelector("[data-role-mode]");
const crewJobSelect = document.querySelector("[data-crew-job-select]");
const crewPins = document.querySelectorAll("[data-crew-asset]");
const crewPhotos = document.querySelectorAll("[data-crew-photo]");
const crewLiveCopy = document.querySelector("[data-crew-live-copy]");
const crewMapCanvas = document.querySelector(".crew-map-canvas");
const crewOverviewLayer = document.querySelector("[data-crew-overview-layer]");
const crewJobPinLayer = document.querySelector("[data-crew-job-pin-layer]");
const crewMapViewButtons = document.querySelectorAll("[data-crew-map-view]");
const crewMapZoomButtons = document.querySelectorAll("[data-crew-map-zoom]");
const crewZoomReadout = document.querySelector("[data-crew-zoom-readout]");
const crewActionButtons = document.querySelectorAll("[data-crew-action]");
const crewActionStatus = document.querySelector("[data-crew-action-status]");
const managementMapPins = document.querySelector("[data-management-map-pins]");
const managementSelectedJob = document.querySelector("[data-management-selected-job]");
const kpiReady = document.querySelector("[data-kpi-ready]");
const kpiReadySub = document.querySelector("[data-kpi-ready-sub]");
const kpiPending = document.querySelector("[data-kpi-pending]");
const kpiPendingSub = document.querySelector("[data-kpi-pending-sub]");
const kpiBlocked = document.querySelector("[data-kpi-blocked]");
const kpiBlockedSub = document.querySelector("[data-kpi-blocked-sub]");
const kpiForecast = document.querySelector("[data-kpi-forecast]");
const kpiForecastSub = document.querySelector("[data-kpi-forecast-sub]");
const blockedActionTotal = document.querySelector("[data-blocked-action-total]");
const blockedActionShare = document.querySelector("[data-blocked-action-share]");
const recoveryReadyTotal = document.querySelector("[data-recovery-ready-total]");
const recoveryReadySub = document.querySelector("[data-recovery-ready-sub]");
const recoveryBlockedTotal = document.querySelector("[data-recovery-blocked-total]");
const recoveryBlockedSub = document.querySelector("[data-recovery-blocked-sub]");
const recoveryPoolTotal = document.querySelector("[data-recovery-pool-total]");
const recoveryPoolSub = document.querySelector("[data-recovery-pool-sub]");
const blockedActionGrid = document.querySelector("[data-blocked-action-grid]");
const recoveryBillingMove = document.querySelector("[data-recovery-billing-move]");
const recoveryDataNote = document.querySelector("[data-recovery-data-note]");
const revenueByCustomer = document.querySelector("[data-revenue-by-customer]");
const statusTotal = document.querySelector("[data-status-total]");
const statusCopy = document.querySelector("[data-status-copy]");
const managementClaimsOpen = document.querySelector("[data-management-claims-open]");
const managementClaimsBlocked = document.querySelector("[data-management-claims-blocked]");
const managementClaimsRecovery = document.querySelector("[data-management-claims-recovery]");
const managementClaimsTop = document.querySelector("[data-management-claims-top]");
const managementClaimsActions = document.querySelector("[data-management-claims-actions]");
const jobsProgress = document.querySelector("[data-jobs-progress]");
const crewUtilization = document.querySelector("[data-crew-utilization]");
const topBlockedJobs = document.querySelector("[data-top-blocked-jobs]");
const crewPerformance = document.querySelector("[data-crew-performance]");
const closeoutAging = document.querySelector("[data-closeout-aging]");
const alertsExceptions = document.querySelector("[data-alerts-exceptions]");
const jobStatusBoard = document.querySelector("[data-job-status-board]");
const nextFieldAction = document.querySelector("[data-next-field-action]");
const closeoutQueueBody = document.querySelector("[data-closeout-queue]");
const agingBuckets = document.querySelector("[data-aging-buckets]");
const reportRevenue = document.querySelector("[data-report-revenue]");
const reportProofQuality = document.querySelector("[data-report-proof-quality]");
const reportQueue = document.querySelector("[data-report-queue]");
const settingsRoleDefaults = document.querySelector("[data-settings-role-defaults]");
const settingsPackageRules = document.querySelector("[data-settings-package-rules]");
const settingsCurrentDefaults = document.querySelector("[data-settings-current-defaults]");
const settingsAvailableViews = document.querySelector("[data-settings-available-views]");
const onboardingSteps = document.querySelector("[data-onboarding-steps]");
const onboardingSystemReadiness = document.querySelector("[data-onboarding-system-readiness]");
const onboardingFieldData = document.querySelector("[data-onboarding-field-data]");
const onboardingRoleInvites = document.querySelector("[data-onboarding-role-invites]");
const onboardingBillingRules = document.querySelector("[data-onboarding-billing-rules]");
const onboardingGates = document.querySelector("[data-onboarding-gates]");
const onboardingLiveStatus = document.querySelector("[data-onboarding-live-status]");
const onboardingLiveSummary = document.querySelector("[data-onboarding-live-summary]");
const onboardingDeadline = document.querySelector("[data-onboarding-deadline]");
const onboardingCommand = document.querySelector("[data-onboarding-command]");
const onboardingBuiltPages = document.querySelector("[data-onboarding-built-pages]");
const onboardingSeedJobs = document.querySelector("[data-onboarding-seed-jobs]");
const onboardingPackageOutputs = document.querySelector("[data-onboarding-package-outputs]");
const onboardingRunbookCount = document.querySelector("[data-onboarding-runbook-count]");
const clientListPanel = document.querySelector("[data-client-list-panel]");
const clientDetailPanel = document.querySelector("[data-client-detail-panel]");
const clientFormPanel = document.querySelector("[data-client-form-panel]");
const clientPageTitle = document.querySelector("[data-client-page-title]");
const clientPageSubtitle = document.querySelector("[data-client-page-subtitle]");
const clientSearchInput = document.querySelector("[data-client-search]");
const clientStatusFilter = document.querySelector("[data-client-status-filter]");
const clientList = document.querySelector("[data-client-list]");
const clientDetailStatus = document.querySelector("[data-client-detail-status]");
const clientDetailName = document.querySelector("[data-client-detail-name]");
const clientDetailCode = document.querySelector("[data-client-detail-code]");
const clientEditLink = document.querySelector("[data-client-edit-link]");
const clientToggleArchive = document.querySelector("[data-client-toggle-archive]");
const clientRestoreAll = document.querySelector("[data-client-restore-all]");
const clientCreateJob = document.querySelector("[data-client-create-job]");
const clientInfo = document.querySelector("[data-client-info]");
const clientContacts = document.querySelector("[data-client-contacts]");
const clientBilling = document.querySelector("[data-client-billing]");
const clientCloseout = document.querySelector("[data-client-closeout]");
const clientLocate = document.querySelector("[data-client-locate]");
const clientClaims = document.querySelector("[data-client-claims]");
const clientAuditTable = document.querySelector("[data-client-audit]");
const clientForm = document.querySelector("[data-client-form]");
const clientFormTitle = document.querySelector("[data-client-form-title]");
const clientFormStatus = document.querySelector("[data-client-form-status]");
const clientFormErrors = document.querySelector("[data-client-form-errors]");
const clientSaveJob = document.querySelector("[data-client-save-job]");
const clientTotalCount = document.querySelector("[data-client-total]");
const clientActiveCount = document.querySelector("[data-client-active]");
const clientArchivedCount = document.querySelector("[data-client-archived]");
const workspaceInviteForm = document.querySelector("[data-workspace-invite-form]");
const workspaceJobForm = document.querySelector("[data-workspace-job-form]");
const workspaceProofForm = document.querySelector("[data-workspace-proof-form]");
const workspaceList = document.querySelector("[data-workspace-list]");
const workspaceDocuments = document.querySelector("[data-workspace-documents]");
const workspaceSecurity = document.querySelector("[data-workspace-security]");
const workspaceAuditBody = document.querySelector("[data-workspace-audit]");
const workspaceStatus = document.querySelector("[data-workspace-status]");
const workspaceJobSelect = document.querySelector("[data-workspace-job-field='workspaceId']");
const workspaceProofSelect = document.querySelector("[data-workspace-proof-field='workspaceId']");
const workspaceProofJobSelect = document.querySelector("[data-workspace-proof-field='jobId']");
const signupQuestionsInput = document.querySelector("[data-signup-questions]");
const sendSignupQuestionsButton = document.querySelector("[data-send-signup-questions]");
const billingJobLabel = document.querySelector("[data-billing-job-label]");
const billingReadyBody = document.querySelector("[data-billing-ready] tbody");
const billingBlockedBody = document.querySelector("[data-billing-blocked] tbody");
const billingHoldsBody = document.querySelector("[data-billing-holds] tbody");
const billingSummaryPanel = document.querySelector("[data-billing-summary]");
const billingCloseoutLink = document.querySelector("[data-billing-closeout-link]");
const billingCrewLink = document.querySelector("[data-billing-crew-link]");
const billingEmailButton = document.querySelector("[data-billing-email]");
const billingSnapshotButton = document.querySelector("[data-billing-snapshot]");
const billingStatus = document.querySelector("[data-billing-status]");
const billingNavLink = document.querySelector("[data-billing-nav-link]");
const closeoutsPrimaryLink = document.querySelector("[data-closeouts-primary-link]");
const openCloseoutLink = document.querySelector("[data-open-closeout]");
const openBillingLink = document.querySelector("[data-open-billing]");

commsMetaSummaries.forEach((summary) => {
  summary.addEventListener("click", (event) => {
    event.preventDefault();
    const details = summary.closest("details");
    if (details) details.open = !details.open;
  });
});

assetMarkers.forEach((marker) => {
  marker.addEventListener("click", () => renderAsset(marker.dataset.asset));
});

photoPins.forEach((pin) => {
  pin.addEventListener("click", () => renderAsset(pin.dataset.photoAsset));
});

crewPins.forEach((pin) => {
  pin.addEventListener("click", () => {
    renderAsset(pin.dataset.crewAsset);
    if (crewLiveCopy) crewLiveCopy.textContent = pin.dataset.crewAsset + " selected / field asset opened";
  });
});

crewPhotos.forEach((pin) => {
  pin.addEventListener("click", () => {
    renderAsset(pin.dataset.crewPhoto);
    if (crewLiveCopy) crewLiveCopy.textContent = pin.dataset.crewPhoto + " proof photo opened";
  });
});

mapToolButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveMapTool(button.dataset.mapTool));
});

mapToolCancel?.addEventListener("click", () => setActiveMapTool(null));

mapViewButtons.forEach((button) => {
  button.addEventListener("click", () => setCloseoutMapView(button.dataset.mapView || "detail"));
});

mapZoomButtons.forEach((button) => {
  button.addEventListener("click", () => handleMapZoom(button.dataset.mapZoom));
});

crewMapViewButtons.forEach((button) => {
  button.addEventListener("click", () => setCrewMapView(button.dataset.crewMapView || "detail"));
});

crewMapZoomButtons.forEach((button) => {
  button.addEventListener("click", () => handleCrewMapZoom(button.dataset.crewMapZoom));
});

crewActionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.crewAction || "Field action";
    runCrewFieldAction(action);
  });
});

mapCanvas?.addEventListener("wheel", (event) => {
  if (!event.ctrlKey && !event.metaKey) return;
  event.preventDefault();
  const step = event.deltaY < 0 ? 0.12 : -0.12;
  applyMapZoomAtPoint(closeoutMapZoom + step, event.clientX, event.clientY);
}, { passive: false });

mapCanvas?.addEventListener("dblclick", (event) => {
  if (activeMapTool || event.target.closest("button, a, input, select, textarea")) return;
  event.preventDefault();
  applyMapZoomAtPoint(closeoutMapZoom + 0.2, event.clientX, event.clientY);
});

crewMapCanvas?.addEventListener("wheel", (event) => {
  if (!event.ctrlKey && !event.metaKey) return;
  event.preventDefault();
  const step = event.deltaY < 0 ? 0.12 : -0.12;
  applyCrewMapZoom(crewMapZoom + step, true);
}, { passive: false });

crewMapCanvas?.addEventListener("dblclick", (event) => {
  if (activeMapTool || event.target.closest("button, a, input, select, textarea")) return;
  event.preventDefault();
  handleCrewMapZoom("in");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && activeMapTool) {
    event.preventDefault();
    setActiveMapTool(null);
  }
});

mapCanvas?.addEventListener("keydown", (event) => {
  if (event.key === "+" || event.key === "=") {
    event.preventDefault();
    handleMapZoom("in");
  }
  if (event.key === "-" || event.key === "_") {
    event.preventDefault();
    handleMapZoom("out");
  }
  if (event.key === "0") {
    event.preventDefault();
    handleMapZoom("fit");
  }
  if (event.key === "Escape" && activeMapTool) {
    event.preventDefault();
    setActiveMapTool(null);
  }
});

mapDropSurfaces.forEach((surface) => {
  surface.addEventListener("click", (event) => addDroppedMapPin(surface, event));
});

mapCanvas?.addEventListener("click", (event) => addDroppedMapPin(mapCanvas, event));
crewMapCanvas?.addEventListener("click", (event) => addDroppedMapPin(crewMapCanvas, event));

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));

    assetMarkers.forEach((marker) => {
      const isVisible = filter === "all" || marker.dataset.status === filter;
      marker.classList.toggle("is-hidden", !isVisible);
    });
    photoPins.forEach((pin) => {
      const isVisible = filter === "all" || pin.dataset.status === filter;
      pin.classList.toggle("is-hidden", !isVisible);
    });
  });
});

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formNumber(formData, fieldName) {
  return Number.parseFloat(String(formData.get(fieldName) || "0")) || 0;
}

auditForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(auditForm);
  const company = String(formData.get("company") || "this contractor").trim() || "this contractor";
  const closeouts = formNumber(formData, "closeouts");
  const jobValue = formNumber(formData, "jobValue");
  const rejectionRate = formNumber(formData, "rejectionRate") / 100;
  const approvalDelay = formNumber(formData, "approvalDelay");
  const monthlyWork = closeouts * jobValue;
  const rejectedWork = monthlyWork * rejectionRate;
  const delayedWork = monthlyWork * Math.min(approvalDelay / 30, 1);
  const blockedEstimate = Math.max(rejectedWork, delayedWork * 0.45);

  if (auditStatus) {
    auditStatus.textContent = `${company}: about ${formatCurrency(blockedEstimate)} may be waiting on missing proof, owner review, or rejected packets.`;
  }
});

function isoToday() {
  return new Date().toISOString().slice(0, 10);
}

function compactDate(dateValue) {
  return String(dateValue || isoToday()).replaceAll("-", "");
}

function syncInvoiceNumber() {
  if (!invoiceNumber || !workDate) return;
  invoiceNumber.value = `CLOSEOUT-${compactDate(workDate.value)}-${jobToken()}`;
}

function buildCloseoutPackageEmail(formData) {
  const mode = String(formData.get("lineMode") || "ready");
  const job = activeJob();
  const jobId = activeJobId();
  const packageRows = activePackageRows();
  const rows = invoiceRowsForMode(mode);
  const lines = rows.map(([assetId, data]) => {
    return [
      `${assetId} - ${data.asset}`,
      `Status: ${data.status}`,
      `Proof: ${data.proof}`,
      `Photo: ${data.photoCaption}`,
      `Pay item: ${data.payItem}`,
      `Amount: ${currency(data.amount)}`,
      `Blocker: ${data.blocker}`,
    ].join(" | ");
  });
  const documents = packageRows.documents.map(([doc, status, ref]) => `${doc} - ${status} - ${ref}`);
  const boreLines = packageRows.boreLog.map(([run, plan, measured, variance, status]) => {
    return `${run} | plan ${plan} | measured ${measured} | variance ${variance} | ${status}`;
  });
  const materialLines = packageRows.materialCount.map(([material, ticket, used, left, status]) => {
    return `${material} | ticket ${ticket} | used ${used} | left ${left} | ${status}`;
  });
  const receivingLines = packageRows.materialReceiving.map(([item, po, received, issued, used, hold]) => {
    return `${item} | PO ${po} | received ${received} | issued ${issued} | used ${used} | hold: ${hold}`;
  });
  const traceLines = packageRows.reelLotTrace.map(([asset, serialLot, supplier, warranty, status, hold]) => {
    return `${asset} | serial/lot ${serialLot} | supplier ${supplier} | warranty ${warranty} | ${status} | hold: ${hold}`;
  });
  const photoLines = packageRows.beforeAfterPhotos.map(([asset, before, after, gps, status]) => {
    return `${asset} | before ${before} | after ${after} | GPS ${gps} | ${status}`;
  });
  const locateLines = packageRows.locateTickets.map(([ticket, area, validThrough, status, hold]) => {
    return `${ticket} | ${area} | valid through ${validThrough} | ${status} | hold: ${hold}`;
  });
  const utilityConflictLines = packageRows.utilityConflicts.map(([crossing, utility, depth, method, status, hold]) => {
    return `${crossing} | utility ${utility} | depth ${depth} | method ${method} | ${status} | hold: ${hold}`;
  });
  const makeReadyLines = packageRows.potholeMakeReady.map(([item, crew, proof, owner, result, next]) => {
    return `${item} | crew ${crew} | proof ${proof} | owner ${owner} | ${result} | next: ${next}`;
  });
  const approvalLines = packageRows.approvalPayment.map(([asset, approval, invoice, readiness, hold]) => {
    return `${asset} | approval ${approval} | package ${invoice} | readiness ${readiness} | hold: ${hold}`;
  });
  const auditLines = packageRows.auditTrail.map(([time, event, by, result]) => {
    return `${time} | ${event} | ${by} | ${result}`;
  });
  const complianceLines = packageRows.complianceRisk.map(([check, status, owner, due, risk]) => {
    return `${check} | ${status} | owner ${owner} | due ${due} | risk ${risk}`;
  });
  const warrantyLines = packageRows.warrantyExceptions.map(([item, owner, aging, dollars, nextStep]) => {
    return `${item} | owner ${owner} | aging ${aging} | dollars ${dollars} | next: ${nextStep}`;
  });
  const handoffLines = packageRows.packageHandoffs.map(([destination, payload, status, prepTime, next]) => {
    return `${destination} | ${payload} | ${status} | prepared ${prepTime} | next: ${next}`;
  });
  const exportLines = packageRows.exportEvents.map(([exportName, event, status, next]) => {
    return `${exportName} | ${event} | ${status} | next: ${next}`;
  });
  const actionLines = packageRows.actionQueue.map(([item, owner, sla, aging, action]) => {
    return `${item} | owner ${owner} | SLA ${sla} | aging ${aging} | action: ${action}`;
  });
  const qualityLines = packageRows.proofQuality.map(([asset, gps, time, photoHash, result]) => {
    return `${asset} | GPS ${gps} | time ${time} | photo hash ${photoHash} | ${result}`;
  });
  const programLines = packageRows.programRollup.map(([jobId, customer, ready, blocked, state]) => {
    return `${jobId} | ${customer} | ready ${ready} | blocked ${blocked} | ${state}`;
  });
  const dispatchLines = packageRows.dailyDispatch.map(([crew, jobId, location, task, eta]) => {
    return `${crew} | job ${jobId} | ${location} | ${task} | ETA ${eta}`;
  });
  const contractLines = packageRows.contractChangeOrders.map(([ref, scope, status, value, action]) => {
    return `${ref} | ${scope} | ${status} | ${value} | action: ${action}`;
  });
  const waiverLines = packageRows.retainageWaivers.map(([item, status, amount, owner, next]) => {
    return `${item} | ${status} | ${amount} | owner ${owner} | next: ${next}`;
  });
  const workOrderLines = packageRows.workOrderIntake.map(([ref, source, scope, poSow, status, hold]) => {
    return `${ref} | source ${source} | scope ${scope} | PO/SOW ${poSow} | ${status} | hold: ${hold}`;
  });
  const prerequisiteLines = packageRows.ownerPrerequisites.map(([item, requiredFor, owner, status, due, hold]) => {
    return `${item} | required for ${requiredFor} | owner ${owner} | ${status} | due ${due} | hold: ${hold}`;
  });
  const rootCauseLines = packageRows.rootCauseCycle.map(([metric, value, target, driver, action]) => {
    return `${metric} | ${value} | target ${target} | driver ${driver} | action: ${action}`;
  });
  const forecastLines = packageRows.cashForecast.map(([bucket, dollars, expected, confidence, blocker]) => {
    return `${bucket} | ${dollars} | expected ${expected} | confidence ${confidence} | blocker ${blocker}`;
  });
  const accessLines = packageRows.accessSharing.map(([role, access, canApprove, canPay, expiry]) => {
    return `${role} | access ${access} | approve ${canApprove} | release package ${canPay} | expiry ${expiry}`;
  });
  const signatureLines = packageRows.signatureTamper.map(([item, status, hash, signedBy, time]) => {
    return `${item} | ${status} | hash ${hash} | signed by ${signedBy} | ${time}`;
  });
  const offlineLines = packageRows.offlineSync.map(([device, crew, pending, lastSync, status]) => {
    return `${device} | crew ${crew} | pending ${pending} | last sync ${lastSync} | ${status}`;
  });
  const retentionLines = packageRows.retentionDeviceHealth.map(([item, policy, health, storage, next]) => {
    return `${item} | policy ${policy} | health ${health} | storage ${storage} | next: ${next}`;
  });
  const gisLines = packageRows.gisHandoff.map(([layer, format, status, delta, next]) => {
    return `${layer} | ${format} | ${status} | delta ${delta} | next: ${next}`;
  });
  const registryLines = packageRows.assetRegistry.map(([asset, ownerId, gps, type, record]) => {
    return `${asset} | owner id ${ownerId} | GPS ${gps} | ${type} | ${record}`;
  });
  const redlineLines = packageRows.redlineCorrections.map(([segment, plan, field, delta, markup, status]) => {
    return `${segment} | plan ${plan} | field ${field} | delta ${delta} | markup ${markup} | ${status}`;
  });
  const varianceLines = packageRows.asBuiltVariance.map(([asset, gpsDelta, payImpact, approver, evidence, next]) => {
    return `${asset} | GPS delta ${gpsDelta} | pay impact ${payImpact} | approver ${approver} | evidence ${evidence} | next: ${next}`;
  });
  const insuranceLines = packageRows.insuranceClaims.map(([item, status, policy, dollars, next]) => {
    return `${item} | ${status} | policy ${policy} | ${dollars} | next: ${next}`;
  });
  const financingLines = packageRows.financingTerms.map(([contractor, eligible, advance, term, hold]) => {
    return `${contractor} | advance eligible ${eligible} | ${advance} | term ${term} | hold: ${hold}`;
  });
  const agingLines = packageRows.invoiceAging.map(([invoice, asset, amount, age, promise, status]) => {
    return `${invoice} | asset ${asset} | ${amount} | age ${age} | promise ${promise} | ${status}`;
  });
  const lienBondLines = packageRows.lienBondNotices.map(([notice, party, deadline, dollars, doc, next]) => {
    return `${notice} | party ${party} | deadline ${deadline} | ${dollars} | doc ${doc} | next: ${next}`;
  });
  const crewTimeLines = packageRows.crewTimeProduction.map(([crew, hours, production, proofMatch, payStatus, hold]) => {
    return `${crew} | hours ${hours} | production ${production} | proof ${proofMatch} | package status ${payStatus} | hold: ${hold}`;
  });
  const payAppLines = packageRows.subcontractorPayApps.map(([contractor, payApp, request, approved, retainage, status]) => {
    return `${contractor} | ${payApp} | requested ${request} | approved ${approved} | retainage ${retainage} | ${status}`;
  });
  const costCodeLines = packageRows.costCodeGlExport.map(([line, costCode, gl, amount, post, hold]) => {
    return `${line} | cost code ${costCode} | GL ${gl} | ${amount} | post ${post} | hold: ${hold}`;
  });
  const taxLines = packageRows.taxJurisdiction.map(([area, taxUse, exempt, cert, status, hold]) => {
    return `${area} | ${taxUse} | exempt ${exempt} | cert ${cert} | ${status} | hold: ${hold}`;
  });
  const permitLines = packageRows.permitRow.map(([permit, area, status, expires, hold]) => {
    return `${permit} | ${area} | ${status} | expires ${expires} | hold: ${hold}`;
  });
  const restorationLines = packageRows.restorationPunch.map(([item, location, owner, status, due]) => {
    return `${item} | ${location} | owner ${owner} | ${status} | due: ${due}`;
  });
  const intakeLines = packageRows.sourceIntake.map(([source, type, lastIn, parsed, issue]) => {
    return `${source} | ${type} | last in ${lastIn} | parsed ${parsed} | issue: ${issue}`;
  });
  const reconciliationLines = packageRows.reconciliationChecks.map(([check, field, owner, billing, result]) => {
    return `${check} | field ${field} | owner ${owner} | billing ${billing} | result: ${result}`;
  });
  const payItemLines = packageRows.payItemCatalog.map(([code, item, unit, rate, proof]) => {
    return `${code} | ${item} | ${unit} | ${rate} | proof required: ${proof}`;
  });
  const ruleLines = packageRows.approvalRules.map(([rule, trigger, releases, owner, status]) => {
    return `${rule} | trigger ${trigger} | releases ${releases} | owner ${owner} | ${status}`;
  });
  const qcLines = packageRows.qcInspection.map(([check, asset, inspector, result, evidence, hold]) => {
    return `${check} | asset ${asset} | inspector ${inspector} | result ${result} | evidence ${evidence} | hold: ${hold}`;
  });
  const ownerGateLines = packageRows.ownerApprovalGates.map(([gate, owner, releases, status, aging, next]) => {
    return `${gate} | owner ${owner} | releases ${releases} | ${status} | aging ${aging} | next: ${next}`;
  });
  const signoffLines = packageRows.signoffLog.map(([asset, signoff, by, time, release]) => {
    return `${asset} | ${signoff} | by ${by} | time ${time} | release ${release}`;
  });
  const disputeLines = packageRows.disputeRegister.map(([id, issue, dollars, evidence, next]) => {
    return `${id} | ${issue} | ${dollars} | evidence: ${evidence} | next: ${next}`;
  });
  const escalationLines = packageRows.escalationQueue.map(([item, owner, aging, dollars, escalateTo]) => {
    return `${item} | owner ${owner} | aging ${aging} | ${dollars} | escalate to ${escalateTo}`;
  });
  const notificationLines = packageRows.notificationLog.map(([time, channel, to, message, result]) => {
    return `${time} | ${channel} | to ${to} | ${message} | ${result}`;
  });
  const safetyLines = packageRows.safetyJsa.map(([check, crew, status, time, hold]) => {
    return `${check} | crew ${crew} | ${status} | time ${time} | hold: ${hold}`;
  });
  const incidentLines = packageRows.incidentDamage.map(([id, type, location, status, next]) => {
    return `${id} | ${type} | ${location} | ${status} | next: ${next}`;
  });
  const siteAccessLines = packageRows.siteAccess.map(([access, status, window, contact, hold]) => {
    return `${access} | ${status} | window ${window} | contact ${contact} | hold: ${hold}`;
  });
  const conditionLines = packageRows.weatherConditions.map(([item, reading, impact, crew, next]) => {
    return `${item} | ${reading} | impact ${impact} | crew ${crew} | next: ${next}`;
  });
  const noticeLines = packageRows.customerNotices.map(([notice, area, sent, ack, window, hold]) => {
    return `${notice} | area ${area} | sent ${sent} | ack ${ack} | window ${window} | hold: ${hold}`;
  });
  const outageLines = packageRows.outageNoc.map(([item, window, noc, impact, status, next]) => {
    return `${item} | window ${window} | NOC ${noc} | impact ${impact} | ${status} | next: ${next}`;
  });
  const equipmentLines = packageRows.equipmentTools.map(([item, id, crew, status, jobUse]) => {
    return `${item} | ${id} | crew ${crew} | ${status} | job use: ${jobUse}`;
  });
  const custodyLines = packageRows.calibrationCustody.map(([asset, calDate, custody, hash, hold]) => {
    return `${asset} | calibration ${calDate} | custody ${custody} | hash ${hash} | hold: ${hold}`;
  });
  const qualificationLines = packageRows.crewQualifications.map(([crew, role, cert, status, workAllowed]) => {
    return `${crew} | ${role} | cert ${cert} | ${status} | work allowed: ${workAllowed}`;
  });
  const certificationLines = packageRows.certificationExpiry.map(([person, cert, expires, owner, hold]) => {
    return `${person} | ${cert} | expires ${expires} | owner ${owner} | hold: ${hold}`;
  });
  const fiberTestLines = packageRows.fiberTests.map(([run, test, result, trace, hold]) => {
    return `${run} | ${test} | result ${result} | trace ${trace} | hold: ${hold}`;
  });
  const turnupLines = packageRows.turnupStatus.map(([service, window, noc, status, next]) => {
    return `${service} | window ${window} | NOC ${noc} | ${status} | next: ${next}`;
  });
  const ownerDeliverableLines = packageRows.ownerDeliverables.map(([deliverable, format, status, ownerRef, hold]) => {
    return `${deliverable} | ${format} | ${status} | owner ref ${ownerRef} | hold: ${hold}`;
  });
  const ownerAcceptanceLines = packageRows.ownerAcceptance.map(([ownerDesk, handoff, validation, result, next]) => {
    return `${ownerDesk} | handoff ${handoff} | validation ${validation} | ${result} | next: ${next}`;
  });
  const ballInCourtLines = packageRows.ballInCourt.map(([party, owes, asset, dollars, due, nextMove]) => {
    return `${party} | owes ${owes} | asset ${asset} | ${dollars} | due ${due} | next: ${nextMove}`;
  });
  const handoffReceiptLines = packageRows.handoffReceipts.map(([channel, to, packageName, ack, ref, hold]) => {
    return `${channel} | to ${to} | package ${packageName} | ack ${ack} | ref ${ref} | hold: ${hold}`;
  });
  const selectedAssetId = currentAssetId();
  const selectedData = assetData[selectedAssetId] || assetData["HH-1"];
  const comms = selectedData.comms.map(([label, text]) => `${label}: ${text}`);
  const assetList = activeJobAssetIds().join(", ");
  const mapPinLines = activeDroppedMapPins(jobId).map((pin) => {
    return `${mapPinLabel(pin.type)} | ${pin.assetId} | x ${pin.x}% / y ${pin.y}% | ${pin.text} | by ${pin.by} | ${pin.updatedAt ? "updated " + pin.updatedAt : pin.createdAt}`;
  });
  const totals = activeJobTotals();
  const rate = rateSubmissionFor(jobId);
  const metrics = jobReadinessMetrics(jobId);
  const subject = String(formData.get("subject") || `Daily closeout package - ${jobId}`).trim();
  const recipient = String(formData.get("recipient") || "").trim();
  const body = [
    "CrewProof Daily Closeout Package",
    "",
    `Package #: ${formData.get("invoiceNumber")}`,
    `Work Date: ${formData.get("workDate")}`,
    `Customer: ${clientDisplayNameForJob(job)}`,
    `Issued To: ${String(formData.get("issuedTo") || clientIssuedToForJob(job)).trim()}`,
    `Project: ${job.project}`,
    `Job: ${jobId}`,
    `Site: ${job.siteName} / ${job.siteId}`,
    "",
    "Crew Location / Progress:",
    `Selected asset: ${selectedAssetId} - ${selectedData.asset}`,
    `Crew location: ${selectedData.location}`,
    `Field source: ${selectedData.source}`,
    `Field device: ${selectedData.device}`,
    `GPS: ${selectedData.gps}`,
    `Last tech: ${selectedData.tech}`,
    `Contractor: ${selectedData.contractor}`,
    `Last field update: ${selectedData.updated}`,
    `Closeout progress: ${selectedData.progress}% proof - ${selectedData.status}`,
    "",
    "Relevant Chats / Emails / Timeline:",
    ...comms,
    "",
    "Package Contents:",
    "- Locate map / field map sheet",
    `- Field photos and before/after photos pinned to ${assetList}`,
    "- Redlines, route corrections, as-built variance, and GIS deltas",
    "- Bore log and footage exceptions",
    "- Material ticket, receiving, reel/lot trace, and quantities",
    "- Locate tickets, utility conflicts, pothole/vac proof, and make-ready clearance",
    "- Permit, ROW, traffic control, and restoration status",
    "- Work order intake, SOW, PO, and owner prerequisites",
    "- Source intake and reconciliation checks",
    "- Pay item catalog and approval rules",
    "- Owner signoff log and dispute register",
    "- Escalation queue and notification log",
    "- Safety JSA and incident/damage log",
    "- Site access, outage window, weather, and road conditions",
    "- Customer notices, NOC dependencies, and service-impact holds",
    "- Equipment, calibration, and custody records",
    "- Crew qualifications and certification expiry",
    "- Fiber test results and turn-up status",
    "- Owner deliverables and acceptance status",
    "- Ball-in-court owner and handoff receipt log",
    "- QC inspection, owner approval gates, inspection failures, and release holds",
    "- Invoice lines, ready-to-bill total, and blocked dollars",
    `- Admin docs ${metrics.adminDocs}%, rate submission ${metrics.rateSubmission}%, calculation confidence ${metrics.calculationConfidence}%`,
    `- Rate basis ${rate?.version || "Missing"} / Contract ${rate?.contract || "Missing"} / SOW ${rate?.sow || "Missing"} / PO ${rate?.po || "Missing"} / Status ${rate?.status || "Missing"}`,
    "- COI, claim, warranty, and deductible status",
    "- Contractor document readiness and billing terms",
    "- Invoice support aging, lien/bond notices, and dispute holds",
    "- Crew time, production units, and subcontractor support applications",
    "- Cost codes, GL export, tax jurisdiction, and posting holds",
    "- Exceptions list for missing proof, rejected work, and approval holds",
    "",
    "Document Manifest:",
    ...documents,
    "",
    "Bore Log:",
    ...boreLines,
    "",
    "Material Count:",
    ...materialLines,
    "",
    "Material Receiving:",
    ...receivingLines,
    "",
    "Reel / Lot Trace:",
    ...traceLines,
    "",
    "Before / After Photos:",
    ...photoLines,
    "",
    "Locate Tickets:",
    ...locateLines,
    "",
    "Utility Conflicts:",
    ...utilityConflictLines,
    "",
    "Pothole / Make-Ready:",
    ...makeReadyLines,
    "",
    "Approval / Readiness:",
    ...approvalLines,
    "",
    "Audit Trail:",
    ...auditLines,
    "",
    "Compliance / Risk:",
    ...complianceLines,
    "",
    "Warranty / Exceptions:",
    ...warrantyLines,
    "",
    "Package Handoffs:",
    ...handoffLines,
    "",
    "Export Events:",
    ...exportLines,
    "",
    "Action Queue / SLA:",
    ...actionLines,
    "",
    "Proof Quality:",
    ...qualityLines,
    "",
    "Program Rollup:",
    ...programLines,
    "",
    "Daily Dispatch:",
    ...dispatchLines,
    "",
    "Contract / Change Orders:",
    ...contractLines,
    "",
    "Retainage / Waivers:",
    ...waiverLines,
    "",
    "Work Order Intake:",
    ...workOrderLines,
    "",
    "Owner Prerequisites:",
    ...prerequisiteLines,
    "",
    "Root Cause / Cycle Time:",
    ...rootCauseLines,
    "",
    "Cash Forecast:",
    ...forecastLines,
    "",
    "Access / Sharing:",
    ...accessLines,
    "",
    "Signature / Tamper:",
    ...signatureLines,
    "",
    "Offline Sync Queue:",
    ...offlineLines,
    "",
    "Retention / Device Health:",
    ...retentionLines,
    "",
    "As-Built / GIS Handoff:",
    ...gisLines,
    "",
    "Asset Registry:",
    ...registryLines,
    "",
    "Redline / Route Corrections:",
    ...redlineLines,
    "",
    "As-Built Variance:",
    ...varianceLines,
    "",
    "Insurance / Claims:",
    ...insuranceLines,
    "",
    "Financing / Pay Terms:",
    ...financingLines,
    "",
    "Invoice / Aging:",
    ...agingLines,
    "",
    "Lien / Bond Notice:",
    ...lienBondLines,
    "",
    "Crew Time / Production:",
    ...crewTimeLines,
    "",
    "Subcontractor Pay Apps:",
    ...payAppLines,
    "",
    "Cost Code / GL Export:",
    ...costCodeLines,
    "",
    "Tax / Jurisdiction:",
    ...taxLines,
    "",
    "Permit / ROW:",
    ...permitLines,
    "",
    "Restoration / Punch:",
    ...restorationLines,
    "",
    "Source Intake:",
    ...intakeLines,
    "",
    "Reconciliation:",
    ...reconciliationLines,
    "",
    "Pay Item Catalog:",
    ...payItemLines,
    "",
    "Approval Rules:",
    ...ruleLines,
    "",
    "QC Inspection:",
    ...qcLines,
    "",
    "Owner Approval Gates:",
    ...ownerGateLines,
    "",
    "Signoff Log:",
    ...signoffLines,
    "",
    "Dispute Register:",
    ...disputeLines,
    "",
    "Escalation Queue:",
    ...escalationLines,
    "",
    "Notification Log:",
    ...notificationLines,
    "",
    "Safety / JSA:",
    ...safetyLines,
    "",
    "Incident / Damage:",
    ...incidentLines,
    "",
    "Site Access:",
    ...siteAccessLines,
    "",
    "Weather / Conditions:",
    ...conditionLines,
    "",
    "Customer Notices:",
    ...noticeLines,
    "",
    "Outage / NOC / Service Impact:",
    ...outageLines,
    "",
    "Equipment / Tools:",
    ...equipmentLines,
    "",
    "Calibration / Custody:",
    ...custodyLines,
    "",
    "Crew Qualifications:",
    ...qualificationLines,
    "",
    "Certification Expiry:",
    ...certificationLines,
    "",
    "Fiber Tests:",
    ...fiberTestLines,
    "",
    "Turn-Up Status:",
    ...turnupLines,
    "",
    "Owner Deliverables:",
    ...ownerDeliverableLines,
    "",
    "Owner Acceptance:",
    ...ownerAcceptanceLines,
    "",
    "Ball In Court:",
    ...ballInCourtLines,
    "",
    "Handoff Receipts:",
    ...handoffReceiptLines,
    "",
    "Closeout Lines:",
    ...lines,
    "",
    "Map Notes / Gigs:",
    ...(mapPinLines.length ? mapPinLines : ["No dropped map notes or gigs for this job."]),
    "",
    `Ready to Bill Total: ${currency(totals.ready)}`,
    `Blocked / Pending Total: ${currency(totals.blocked)}`,
    "",
    "PM Notes:",
    String(formData.get("notes") || "").trim(),
    "",
    "Generated from CrewProof field package. Review map markers for proof photos, blockers, approval state, and invoice readiness.",
  ].join("\n");

  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function billingRowsForJob(jobId) {
  return jobCalculationLines(jobId);
}

function billingSnapshot(jobId = activeJobId()) {
  const job = jobData[jobId] || activeJob();
  const totals = jobTotalsFor(jobId);
  const rows = billingRowsForJob(jobId);
  const client = findClientForJob(job);
  const rate = rateSubmissionFor(jobId);
  const snapshot = {
    schema: "crewproof.billing-review.v1",
    generatedAt: new Date().toISOString(),
    jobId,
    customer: client?.name || job.customer,
    customerCode: client?.customerCode || job.customer,
    siteName: job.siteName,
    issuedTo: clientIssuedToForJob(job),
    recipient: clientBillingEmailForJob(job),
    clientId: client?.id || null,
    readyRule: clientReadyRuleForJob(job),
    rateBasis: rate,
    adminDocuments: adminDocsFor(jobId),
    readinessMetrics: jobReadinessMetrics(jobId),
    generatedDocuments: generateDocumentsForJob(jobId).filter((doc) => doc.audience === "billing_readiness" || doc.documentType === "audit_trail_report"),
    damageProofRecords: damageProofRecords.filter((record) => record.jobId === jobId),
    readyTotal: totals.ready,
    heldTotal: totals.blocked,
    readyLines: rows
      .filter((line) => line.billingRulePassed)
      .map((line) => ({ assetId: line.assetId, payItem: line.line?.payItem || line.data.payItem, amount: line.value, status: line.result, rateSource: line.rate?.version, formula: line.formula })),
    heldLines: rows
      .filter((line) => !line.billingRulePassed)
      .map((line) => ({ assetId: line.assetId, blocker: line.result, amount: line.value, status: line.rate?.status || "Rate missing", proof: line.data.proof, rateSource: line.rate?.version, formula: line.formula })),
  };
  snapshot.custody = evidenceCustodyPacket("billing.invoice-review", snapshot);
  return snapshot;
}

function buildBillingEmail(jobId = activeJobId()) {
  const snapshot = billingSnapshot(jobId);
  const readyLines = snapshot.readyLines.map((line) => {
    return `${line.assetId} | ${line.payItem} | ${currency(line.amount)} | ${line.status}`;
  });
  const heldLines = snapshot.heldLines.map((line) => {
    return `${line.assetId} | ${line.blocker} | ${currency(line.amount)} | ${line.status}`;
  });
  const subject = `Invoice review - ${snapshot.jobId} - ${snapshot.siteName}`;
  const body = [
    `Billing review for ${snapshot.jobId} / ${snapshot.customer} / ${snapshot.siteName}`,
    `Issued to: ${snapshot.issuedTo}`,
    `Rate basis: ${snapshot.rateBasis?.version || "Missing"} / ${snapshot.rateBasis?.status || "Missing"} / Contract ${snapshot.rateBasis?.contract || "Missing"} / PO ${snapshot.rateBasis?.po || "Missing"}`,
    `Calculation confidence: ${snapshot.readinessMetrics?.calculationConfidence || 0}%`,
    `Ready total: ${currency(snapshot.readyTotal)}`,
    `Held total: ${currency(snapshot.heldTotal)}`,
    "",
    "READY TO BILL:",
    readyLines.length ? readyLines.join("\n") : "No ready invoice lines.",
    "",
    "HELD / BLOCKED:",
    heldLines.length ? heldLines.join("\n") : "No held lines.",
    "",
    "Open the closeout package before sending final invoice if any held lines remain.",
  ].join("\n");
  return `mailto:${encodeURIComponent(snapshot.recipient || "ap@example.invalid")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

lineMode?.addEventListener("change", renderInvoiceLines);
workDate?.addEventListener("change", syncInvoiceNumber);
jobIdField?.addEventListener("change", () => {
  persistActiveJobId(activeJobId());
  syncJobFields();
  renderInvoiceLines();
  renderCloseoutSummaries();
  renderAsset(currentAssetId());
  if (crewJobSelect) crewJobSelect.value = activeJobId();
  syncCrewCard(activeJobId());
  renderBilling(activeJobId());
  renderDroppedMapPins();
  renderJobOverviewPins();
});

copyShareButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    updateShareLink();
    const panel = button.closest(".share-panel");
    const input = panel?.querySelector("[data-share-link]") || shareLink;

    try {
      await navigator.clipboard.writeText(input.value);
      if (invoiceStatus) invoiceStatus.textContent = "Live field share link copied.";
    } catch {
      input?.select();
      if (invoiceStatus) invoiceStatus.textContent = "Share link selected. Copy it from the field above.";
    }
  });
});

copyOpsShareButton?.addEventListener("click", async () => {
  updateOpsShareLink();
  try {
    await navigator.clipboard.writeText(opsShareLink?.value || "");
  } catch {
    opsShareLink?.select();
  }
});

copyClaimsShareButton?.addEventListener("click", async () => {
  updateClaimsShareLink();
  try {
    await navigator.clipboard.writeText(claimsShareLink?.value || "");
    if (claimStatusMessage) claimStatusMessage.textContent = "Live claims share link copied.";
  } catch {
    claimsShareLink?.select();
    if (claimStatusMessage) claimStatusMessage.textContent = "Claims share link selected. Copy it from the field.";
  }
});

copyCrew811ShareButton?.addEventListener("click", async () => {
  updateCrew811ShareLink();
  try {
    await navigator.clipboard.writeText(crew811ShareLink?.value || "");
    if (crew811MapCopy) crew811MapCopy.textContent = "Live 811 share link copied.";
  } catch {
    crew811ShareLink?.select();
    if (crew811MapCopy) crew811MapCopy.textContent = "811 share link selected. Copy it from the field.";
  }
});

downloadOpsSnapshotButton?.addEventListener("click", () => {
  const snapshot = operationsSnapshot();
  const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  const objectUrl = URL.createObjectURL(blob);
  link.href = objectUrl;
  link.download = `crewproof-${snapshot.activeJob}-operations-snapshot.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
});

downloadClaimsSnapshotButton?.addEventListener("click", () => {
  const snapshot = claimsLayerSnapshot();
  const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  const objectUrl = URL.createObjectURL(blob);
  link.href = objectUrl;
  link.download = `crewproof-claims-${snapshot.activeJob}-layer.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
  if (claimStatusMessage) claimStatusMessage.textContent = `Claims layer JSON downloaded with ${snapshot.records.length} records.`;
});

downloadCrew811SnapshotButton?.addEventListener("click", () => {
  const snapshot = crew811LayerSnapshot();
  const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  const objectUrl = URL.createObjectURL(blob);
  link.href = objectUrl;
  link.download = `crewproof-sunshine811-exactix-${selectedCrew811Ticket().ticketNumber}-layer.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
  if (crew811MapCopy) crew811MapCopy.textContent = `Sunshine 811 / Exactix JSON downloaded with ${snapshot.tickets.length} tickets.`;
});

crew811Actions.forEach((button) => {
  button.addEventListener("click", () => runCrew811Action(button.dataset.crew811Action));
});

crew811Filters.forEach((button) => {
  button.addEventListener("click", () => {
    crew811Filter = button.dataset.crew811Filter || "all";
    crew811Filters.forEach((item) => item.classList.toggle("active", item === button));
    renderCrew811();
  });
});

claimsActions.forEach((button) => {
  button.addEventListener("click", () => runClaimAction(button.dataset.claimsAction));
});

claimsMapCanvas?.addEventListener("click", (event) => {
  if (!claimDropMode) return;
  if (event.target.closest("button")) return;
  createMappedClaim(event.clientX, event.clientY);
});

claimsFilters.forEach((button) => {
  button.addEventListener("click", () => {
    claimsFilter = button.dataset.claimsFilter || "all";
    claimsFilters.forEach((item) => item.classList.toggle("active", item === button));
    renderClaimsDamage();
  });
});

claimSnapshotButton?.addEventListener("click", () => {
  const snapshot = claimSnapshot();
  const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  const objectUrl = URL.createObjectURL(blob);
  link.href = objectUrl;
  link.download = `crewproof-${snapshot.claimId}-claim-file.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
  if (claimStatusMessage) claimStatusMessage.textContent = `${snapshot.claimId} claim JSON downloaded.`;
});

claimEmailButton?.addEventListener("click", () => {
  const record = selectedClaimRecord();
  if (claimStatusMessage) claimStatusMessage.textContent = `Opening recovery email draft for ${record.id}. Nothing is sent until you press send.`;
  window.location.href = buildClaimRecoveryEmail(record);
});

downloadSnapshotButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const snapshot = fieldSnapshot();
    const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    const objectUrl = URL.createObjectURL(blob);
    link.href = objectUrl;
    link.download = `crewproof-${snapshot.job.id}-${snapshot.selectedAsset}-field-snapshot.json`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(objectUrl);

    if (invoiceStatus) {
      invoiceStatus.textContent = "Live field snapshot JSON downloaded.";
    }
  });
});

downloadPackageCsvButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const snapshot = fieldSnapshot();
    const csv = closeoutPackageCsv();
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    const objectUrl = URL.createObjectURL(blob);
    link.href = objectUrl;
    link.download = `crewproof-${snapshot.job.id}-closeout-package.csv`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(objectUrl);

    if (invoiceStatus) {
      invoiceStatus.textContent = "Closeout package CSV downloaded with custody hash.";
    }
  });
});

billingSnapshotButton?.addEventListener("click", () => {
  const routeJobId = routeParts(routeFromLocation()).jobId;
  const jobId = jobData[routeJobId] ? routeJobId : activeJobId();
  const snapshot = billingSnapshot(jobId);
  const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  const objectUrl = URL.createObjectURL(blob);
  link.href = objectUrl;
  link.download = `crewproof-${snapshot.jobId}-billing-review.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
  if (billingStatus) billingStatus.textContent = `${snapshot.jobId} billing JSON downloaded.`;
});

billingEmailButton?.addEventListener("click", () => {
  const routeJobId = routeParts(routeFromLocation()).jobId;
  const jobId = jobData[routeJobId] ? routeJobId : activeJobId();
  if (billingStatus) billingStatus.textContent = `Opening invoice email draft for ${jobId}. Nothing is sent until you press send.`;
  window.location.href = buildBillingEmail(jobId);
});

printPackageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    syncInvoiceNumber();
    renderInvoiceLines();
    renderDocumentManifest();
    renderCloseoutSummaries();
    if (invoiceStatus) invoiceStatus.textContent = "Print package ready. Choose Save as PDF in the print dialog.";
    window.print();
  });
});


invoiceForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  syncInvoiceNumber();
  renderInvoiceLines();
  renderCloseoutSummaries();

  const formData = new FormData(invoiceForm);
  const mailtoUrl = buildCloseoutPackageEmail(formData);

  if (invoiceStatus) {
    invoiceStatus.textContent = "Opening email app with the daily closeout package. Nothing is sent until you press send.";
  }

  window.location.href = mailtoUrl;
});

if (workDate && !workDate.value) {
  workDate.value = isoToday();
}

syncJobFields();
syncInvoiceNumber();
renderInvoiceLines();
renderDocumentManifest();
renderCloseoutSummaries();
renderCrew811();
renderClaimsDamage();
syncLiveHeartbeat();
setInterval(syncLiveHeartbeat, 15000);

requestAnimationFrame(() => {
  const initialMarker = document.querySelector("[data-asset].is-selected");
  if (initialMarker) {
    initialMarker.scrollIntoView({ block: "center", inline: "center" });
  }
});


function isLocalFile() {
  return window.location.protocol === "file:";
}

function routeFromLocation() {
  if (window.location.hash.startsWith("#/")) return window.location.hash.slice(1);
  if (window.location.hash.startsWith("#ops=")) return "/management";
  if (window.location.hash.startsWith("#claims=")) return "/claims";
  if (window.location.hash.startsWith("#crew811=")) return "/crew811";
  const shareRoute = document.querySelector("meta[name='crewproof-share-route']")?.content;
  if (shareRoute) return shareRoute;
  const path = window.location.pathname;
  const known = path.match(new RegExp("/(crew|crew811|claims|management|onboarding|clients|workspaces|jobs|closeouts|reports|settings|closeout|billing)(/[^/]+)?(/[^/]+)?/?$"));
  if (known) return "/" + known[1] + (known[2] || "") + (known[3] || "");
  const storedRole = window.localStorage?.getItem("crewproof.role") || "crew";
  if (storedRole === "pm") return "/management";
  if (storedRole === "billing") return "/billing/" + storedActiveJobId();
  return "/crew/" + storedActiveJobId();
}

function routeParts(route) {
  const clean = route || "/crew";
  const parts = clean.split("/");
  const view = parts[1] || "crew";
  const jobScopedViews = ["crew", "closeout", "billing"];
  return { view, jobId: parts[2] || (jobScopedViews.includes(view) ? activeJobId() : ""), action: parts[3] || "" };
}

function siteBasePrefix() {
  const path = window.location.pathname || "/";
  const m = path.match(/^(.*?)(?:\/(?:crew|crew811|claims|management|onboarding|clients|workspaces|jobs|closeouts|reports|settings|closeout|billing|share)(?:\/.*)?|\/(?:index|404)\.html)?\/?$/);
  return (m && m[1] ? m[1] : "").replace(/\/+$/, "");
}

function ensureHttpBaseHref() {
  if (isLocalFile()) return;
  const desired = `${siteBasePrefix()}/`;
  let base = document.querySelector("head > base");
  if (!base) {
    base = document.createElement("base");
    document.head.prepend(base);
  }
  if (base.getAttribute("href") !== desired) {
    base.setAttribute("href", desired);
  }
}

function setRoute(route, replace = false) {
  const nextRoute = route || "/crew";
  if (isLocalFile()) {
    const nextHash = "#" + nextRoute;
    if (replace) window.location.replace(nextHash);
    else if (window.location.hash !== nextHash) window.location.hash = nextRoute;
    renderRoute(nextRoute);
    return;
  }
  ensureHttpBaseHref();
  const fullUrl = siteBasePrefix() + (nextRoute.startsWith("/") ? nextRoute : "/" + nextRoute);
  if (replace) window.history.replaceState({}, "", fullUrl);
  else window.history.pushState({}, "", fullUrl);
  renderRoute(nextRoute);
}

function setRouteLink(link, route) {
  if (!link) return;
  link.dataset.routeLink = route;
  link.setAttribute("href", route);
}

function syncCrewCard(jobId) {
  const job = jobData[jobId] || activeJob();
  const assets = Object.values(job.assets || {});
  const primaryId = job.defaultAsset || assets[0] || "HH-1";
  const primary = assetData[primaryId] || assetData["HH-1"];
  const totals = assets.reduce((acc, assetId) => {
    const data = assetData[assetId];
    if (!data) return acc;
    if (data.statusClass === "ready") acc.ready += data.amount;
    else acc.blocked += data.amount;
    if (data.statusClass !== "ready") acc.issues.push(assetId + ": " + data.blocker);
    return acc;
  }, { ready: 0, blocked: 0, issues: [] });

  const setText = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = value;
  };
  setText("[data-crew-card-job]", jobId);
  setText("[data-crew-card-customer]", clientDisplayNameForJob(job));
  const addressEl = document.querySelector("[data-crew-card-address]");
  if (addressEl) addressEl.innerHTML = job.address.replace("<br>", ", ");
  setText("[data-crew-card-crew]", primary.crew.includes("Crew") ? primary.crew : primary.crew + " Crew");
  setText("[data-crew-card-ready]", currency(totals.ready));
  setText("[data-crew-card-blocked]", currency(totals.blocked));
  setText("[data-crew-card-progress]", primary.progress + "%");
  setText("[data-crew-card-issues]", totals.issues.length ? totals.issues.join(" / ") : "None");
  const ticketStatus = crew811JobStatus(jobId);
  const metrics = jobReadinessMetrics(jobId);
  const rate = rateSubmissionFor(jobId);
  setText("[data-crew-card-811-ticket]", ticketStatus.ticketText);
  setText("[data-crew-card-811-status]", ticketStatus.statusText);
  setText("[data-crew-card-811-coverage]", ticketStatus.coverageText);
  setText("[data-crew-card-811-expiry]", ticketStatus.expiryText);
  setText("[data-crew-card-811-blocker]", ticketStatus.blockerText);
  setText("[data-crew-card-admin-docs]", metrics.adminDocs + "%");
  setText("[data-crew-card-rate-submission]", metrics.rateSubmission + "%");
  setText("[data-crew-card-rate-approval]", rate?.status || "Missing");
  setText("[data-crew-card-calculation-confidence]", metrics.calculationConfidence + "%");
  setText("[data-crew-card-contract-match]", metrics.contractMatch + "%");
  setText("[data-crew-card-po-funding]", metrics.poFunding + "%");
  setText("[data-crew-card-change-order]", metrics.changeOrder + "%");
  setText("[data-crew-card-retainage-waiver]", metrics.retainageWaiver + "%");
  if (crewLiveCopy) crewLiveCopy.textContent = primaryId + " selected / " + primary.status + " / " + primary.source;
  setRouteLink(openCloseoutLink, "/closeout/" + jobId);
  setRouteLink(openBillingLink, "/billing/" + jobId);

  const slots = ["handhole", "splice", "vaultA", "vaultB", "underground"];
  crewPins.forEach((pin, index) => {
    const assetId = (job.assets && job.assets[slots[index]]) || assets[index] || pin.dataset.crewAsset;
    const data = assetData[assetId] || primary;
    pin.dataset.crewAsset = assetId;
    pin.textContent = assetId;
    pin.className = "crew-pin " + statusBucket(data) + (assetId === primaryId ? " is-selected" : "");
  });
  crewPhotos.forEach((pin, index) => {
    const assetId = (job.assets && job.assets[slots[index]]) || assets[index] || pin.dataset.crewPhoto;
    const data = assetData[assetId] || primary;
    pin.dataset.crewPhoto = assetId;
    pin.className = "crew-photo " + statusBucket(data) + (assetId === primaryId ? " is-selected" : "");
    const img = pin.querySelector("img");
    const label = pin.querySelector("span");
    if (img) {
      img.src = data.photo;
      img.alt = data.photoCaption;
    }
    if (label) label.textContent = data.statusClass === "missing" ? "Missing" : data.statusClass === "rejected" ? "Rejected" : "Photo";
  });
}

function renderBilling(jobId) {
  const job = jobData[jobId] || activeJob();
  const resolvedJobId = jobData[jobId] ? jobId : activeJobId();
  const totals = jobTotalsFor(resolvedJobId);
  if (billingJobLabel) billingJobLabel.textContent = resolvedJobId + " / " + clientDisplayNameForJob(job) + " / " + job.siteName + " billing package and readiness holds.";
  const rows = jobCalculationLines(resolvedJobId);
  const readyRows = rows.filter((line) => line.billingRulePassed);
  const blockedRows = rows.filter((line) => !line.billingRulePassed);
  if (billingReadyBody) {
    renderManagementTable(billingReadyBody, readyRows.map((line) => [line.assetId, line.line?.payItem || line.data.payItem, currency(line.value), line.rate?.version || "No rate source"]));
    if (!readyRows.length) renderManagementTable(billingReadyBody, [["No ready lines", "-", "$0", "Open"]]);
  }
  if (billingBlockedBody) {
    renderManagementTable(billingBlockedBody, blockedRows.map((line) => [line.assetId, line.result, currency(line.value), line.rate?.status || "No rate"]));
    if (!blockedRows.length) renderManagementTable(billingBlockedBody, [["No blocked lines", "-", "$0", "Clear"]]);
  }
  if (billingHoldsBody) {
    renderManagementTable(billingHoldsBody, blockedRows.map((line) => [line.assetId, line.data.proof, line.result, currency(line.value)]));
    if (!blockedRows.length) renderManagementTable(billingHoldsBody, [["None", "Complete", "No billing hold", "$0"]]);
  }
  if (billingSummaryPanel) {
    billingSummaryPanel.innerHTML = "";
    const rate = rateSubmissionFor(resolvedJobId);
    const metrics = jobReadinessMetrics(resolvedJobId);
    [
      ["Ready Total", currency(totals.ready)],
      ["Held Total", currency(totals.blocked)],
      ["Rate Basis", rate ? `${rate.version} / ${rate.status}` : "No approved rate source"],
      ["Calculation Confidence", metrics.calculationConfidence + "%"],
      ["Package Status", blockedRows.length ? blockedRows.length + " holds before full invoice" : "Ready for invoice"],
    ].forEach(([label, value]) => {
      const row = document.createElement("div");
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = label;
      dd.textContent = value;
      row.append(dt, dd);
      billingSummaryPanel.append(row);
    });
  }
  setRouteLink(billingCloseoutLink, "/closeout/" + resolvedJobId);
  setRouteLink(billingCrewLink, "/crew/" + resolvedJobId);
}

function renderCells(row, values) {
  values.forEach((value) => {
    const cell = document.createElement("td");
    if (value instanceof Node) {
      cell.append(value);
    } else {
      cell.textContent = value;
    }
    row.append(cell);
  });
}

function tableLink(label, route) {
  const link = document.createElement("a");
  link.href = route;
  link.dataset.routeLink = route;
  link.textContent = label;
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setRoute(route);
  });
  return link;
}

function setManagementSelectedJob(jobId) {
  if (!managementSelectedJob || !jobData[jobId]) return;
  const job = jobData[jobId];
  const totals = jobTotalsFor(jobId);
  const blocker = jobPrimaryBlocker(jobId);
  managementSelectedJob.innerHTML = "";
  [
    ["Selected Job", `${jobId} / ${clientDisplayNameForJob(job)} / ${job.siteName}`],
    ["Status", jobStatusLabel(jobId)],
    ["Ready", currency(totals.ready)],
    ["Blocked", currency(totals.blocked)],
    ["Crew", jobPrimaryCrew(jobId)],
    ["Next", blocker],
  ].forEach(([label, value]) => {
    const row = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = label;
    dd.textContent = value;
    row.append(dt, dd);
    managementSelectedJob.append(row);
  });
}

function selectManagementJob(jobId) {
  if (!jobData[jobId]) return;
  persistActiveJobId(jobId);
  if (jobIdField) jobIdField.value = jobId;
  if (crewJobSelect) crewJobSelect.value = jobId;
  syncJobFields();
  renderAsset(defaultAssetForActiveJob());
  syncCrewCard(jobId);
  renderBilling(jobId);
  setManagementSelectedJob(jobId);
  renderManagement();
}

function renderManagementMap() {
  if (!managementMapPins) return;
  managementMapPins.textContent = "";
  Object.entries(jobData).forEach(([jobId, job]) => {
    const point = jobOverviewPins[jobId] || { x: 50, y: 50 };
    const totals = jobTotalsFor(jobId);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "ops-job-pin " + jobOverviewStatus(jobId);
    button.classList.toggle("is-selected", jobId === activeJobId());
    button.style.setProperty("--x", point.x + "%");
    button.style.setProperty("--y", point.y + "%");
    button.innerHTML = "<strong></strong><span></span>";
    button.querySelector("strong").textContent = jobId;
    button.querySelector("span").textContent = `${clientDisplayNameForJob(job)} / ${currency(totals.ready)} ready / ${currency(totals.blocked)} blocked`;
    button.addEventListener("click", () => selectManagementJob(jobId));
    managementMapPins.append(button);
  });
}

function renderBlockedRevenueActions() {
  const totals = programTotals();
  const pool = totals.readyDollars + totals.blockedDollars;
  const blockedShare = pool ? Math.round((totals.blockedDollars / pool) * 100) : 0;
  const blockedJobs = Object.entries(jobData)
    .map(([jobId, job]) => {
      const jobTotals = jobTotalsFor(jobId);
      const blockedAssets = jobAssetsFor(jobId)
        .filter(([, data]) => data.statusClass !== "ready")
        .sort((a, b) => b[1].amount - a[1].amount);
      return { jobId, job, jobTotals, blockedAssets };
    })
    .filter((row) => row.jobTotals.blocked > 0)
    .sort((a, b) => b.jobTotals.blocked - a.jobTotals.blocked);
  const readyJobIds = Object.keys(jobData).filter((jobId) => jobTotalsFor(jobId).ready > 0);

  if (blockedActionTotal) blockedActionTotal.textContent = currency(totals.blockedDollars);
  if (blockedActionShare) blockedActionShare.textContent = `${blockedShare}% of ready + blocked revenue`;
  if (recoveryReadyTotal) recoveryReadyTotal.textContent = currency(totals.readyDollars);
  if (recoveryReadySub) recoveryReadySub.textContent = totals.readyAssets + " ready asset lines";
  if (recoveryBlockedTotal) recoveryBlockedTotal.textContent = currency(totals.blockedDollars);
  if (recoveryBlockedSub) recoveryBlockedSub.textContent = blockedJobs.map((row) => row.jobId).join(", ") || "No blocked jobs";
  if (recoveryPoolTotal) recoveryPoolTotal.textContent = currency(pool);
  if (recoveryPoolSub) recoveryPoolSub.textContent = "Ready + blocked from live field jobs";
  if (recoveryBillingMove) {
    recoveryBillingMove.textContent = readyJobIds.length
      ? `Send the clean ${currency(totals.readyDollars)} ready today while blockers are worked. Ready jobs: ${readyJobIds.join(", ")}.`
      : "No clean ready-to-bill lines. Clear the highest blocked job first.";
  }
  if (recoveryDataNote) {
    recoveryDataNote.textContent = `Data check: blocked revenue reconciles to ${currency(totals.blockedDollars)} across ${blockedJobs.length} jobs from live asset status, proof, approval, and rejection holds.`;
  }
  if (!blockedActionGrid) return;
  blockedActionGrid.textContent = "";
  blockedJobs.slice(0, 3).forEach((row, index) => {
    const article = document.createElement("article");
    const rank = document.createElement("span");
    const copy = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const list = document.createElement("ul");
    const value = document.createElement("b");
    article.className = row.jobTotals.blocked >= 50000 ? "priority-high" : "priority-medium";
    rank.textContent = String(index + 1);
    title.textContent = `${row.jobId} ${clientDisplayNameForJob(row.job)}: clear ${jobPrimaryBlocker(row.jobId)}`;
    description.textContent = `${row.job.siteName} has ${currency(row.jobTotals.ready)} ready and ${currency(row.jobTotals.blocked)} blocked. Work the highest-value blocker first, then send remaining ready lines to billing.`;
    row.blockedAssets.slice(0, 4).forEach(([assetId, data]) => {
      const item = document.createElement("li");
      const strong = document.createElement("strong");
      strong.textContent = assetId + ":";
      item.append(strong, " " + data.blocker + ", " + currency(data.amount));
      list.append(item);
    });
    value.textContent = "Unlock " + currency(row.jobTotals.blocked);
    copy.append(title, description, list);
    article.append(rank, copy, value);
    blockedActionGrid.append(article);
  });
}

function renderManagementTable(body, rows) {
  if (!body) return;
  body.textContent = "";
  rows.forEach((values) => {
    const row = document.createElement("tr");
    renderCells(row, values);
    body.append(row);
  });
}

function renderReportBars(container, rows) {
  if (!container) return;
  const maxValue = Math.max(...rows.map((row) => row.value), 1);
  container.textContent = "";
  rows.forEach((row) => {
    const item = document.createElement("span");
    item.style.setProperty("--v", Math.max(8, Math.round((row.value / maxValue) * 100)) + "%");
    item.textContent = row.label + " " + row.display;
    container.append(item);
  });
}

function renderReports() {
  const totals = programTotals();
  const allAssets = Object.values(jobData).flatMap((job) => Object.values(job.assets || {}).map((assetId) => assetData[assetId]).filter(Boolean));
  const waitingAssets = allAssets.filter((data) => data.statusClass === "waiting");
  const pendingDollars = waitingAssets.reduce((sum, data) => sum + data.amount, 0);
  const openClaims = claimsDamageRecords.filter((record) => record.status !== "Closed");
  const claimBlocked = openClaims.reduce((sum, record) => sum + record.blockedDollars, 0);
  const forecast = Math.round((totals.readyDollars + totals.blockedDollars + pendingDollars) * 1.18);

  renderReportBars(reportRevenue, [
    { label: "Ready", value: totals.readyDollars, display: currency(totals.readyDollars) },
    { label: "Pending", value: pendingDollars, display: currency(pendingDollars) },
    { label: "Blocked", value: totals.blockedDollars, display: currency(totals.blockedDollars) },
    { label: "30 Day", value: forecast, display: currency(forecast) },
  ]);

  const crewStats = new Map();
  allAssets.forEach((data) => {
    const crew = data.crew.includes("Crew") ? data.crew : data.crew + " Crew";
    const current = crewStats.get(crew) || { total: 0, ready: 0 };
    current.total += 1;
    if (data.statusClass === "ready") current.ready += 1;
    crewStats.set(crew, current);
  });
  renderReportBars(reportProofQuality, [...crewStats.entries()].map(([crew, stats]) => {
    const passRate = Math.round((stats.ready / Math.max(stats.total, 1)) * 100);
    return { label: crew, value: passRate, display: passRate + "% pass" };
  }));

  renderManagementTable(reportQueue, [
    ["Daily ready-to-bill", "Management", totals.readyAssets ? `${totals.readyAssets} lines / ${currency(totals.readyDollars)}` : "No ready lines"],
    ["Blocked dollars by reason", "Billing", `${currency(totals.blockedDollars)} held across proof, approval, and rejection`],
    ["Claims and damage exposure", "Claims", `${openClaims.length} open / ${currency(claimBlocked)} billing held`],
    ["Crew proof pass rate", "Operations", `${crewStats.size} crews reporting from field data`],
    ["Owner approval aging", "PM", `${waitingAssets.length} asset lines waiting on approval`],
  ]);
}

function renderSettings() {
  const selectedRole = roleMode?.value || window.localStorage?.getItem("crewproof.role") || "crew";
  renderManagementTable(settingsRoleDefaults, [
    ["Crew / Foreman", "/crew/" + activeJobId(), selectedRole === "crew" ? "Current" : "Available"],
    ["PM / Admin / Owner", "/management", selectedRole === "pm" ? "Current" : "Available"],
    ["Billing", "/billing/" + activeJobId(), selectedRole === "billing" ? "Current" : "Available"],
    ["Client Workspace Admin", "/workspaces", "Owner/admin invite and retrieval"],
  ]);

  renderManagementTable(settingsPackageRules, [
    ["Closeout source", "Field package", "Photos, GPS, redlines, notes, locates, material counts"],
    ["Billing source", "Approved proof lines", "Ready lines post to Billing Review"],
    ["Claims source", "Separate claims map", "Damage holds link back to billing and closeout"],
    ["811 source", "Crew811 layer", "Tickets, renewals, and positive response stay separate"],
    ["Workspace isolation", "demo-seed + pilot workspaces", "Client data is scoped by workspaceId and storagePath"],
    ["Route behavior", "Static + client route fallback", "Direct routes generated for job reviews"],
  ]);

  renderManagementTable(settingsCurrentDefaults, [
    ["Active job", activeJobId(), activeJob().customer + " / " + activeJob().siteName],
    ["Role mode", selectedRole, selectedRole === "pm" ? "Management default" : selectedRole === "billing" ? "Billing default" : "Crew default"],
    ["Billing route", "/billing/" + activeJobId(), "Job-specific"],
    ["Closeout route", "/closeout/" + activeJobId(), "Job-specific"],
    ["Crew route", "/crew/" + activeJobId(), "Job-specific"],
  ]);

  renderManagementTable(settingsAvailableViews, [
    ["/crew/:jobId", "Field proof capture", "Crew / Foreman"],
    ["/management", "Command center", "PM / Admin / Owner"],
    ["/onboarding", "Customer, crew, proof, billing, 811, and claims setup", "Admin / Ops"],
    ["/workspaces", "Pilot invite, workspace files, first job activation, retrieval audit", "Owner / Admin"],
    ["/jobs", "Job status and handoffs", "Operations"],
    ["/closeouts", "Closeout package queue", "PM / Closeout desk"],
    ["/closeout/:jobId", "Package review engine", "PM / Owner / Inspector"],
    ["/billing/:jobId", "Billing review and invoice handoff", "Billing / AP"],
    ["/crew811", "811 tickets and locates", "Locate desk / Foreman"],
    ["/claims", "Claims and damage map", "Claims / PM"],
    ["/reports", "Operational reports", "Management"],
    ["/settings", "Role and route defaults", "Admin"],
  ]);
}

function renderOnboarding() {
  const readyJobs = Object.entries(jobData).filter(([jobId]) => jobTotalsFor(jobId).ready > 0);
  const blockedJobs = Object.entries(jobData).filter(([jobId]) => jobTotalsFor(jobId).blocked > 0);
  const totals = programTotals();
  const clients = getClients();
  const workspaces = getWorkspaces();
  const pilotWorkspaces = workspaces.filter((workspace) => workspace.type === "pilot");
  const activeClients = clients.filter((client) => client.status !== "archived");
  const archivedClients = clients.filter((client) => client.status === "archived");
  const activeAssetCount = Object.values(jobData).reduce((sum, job) => sum + Object.keys(job.assets || {}).length, 0);
  const routeCount = ["crew", "management", "onboarding", "clients", "workspaces", "closeout", "billing", "crew811", "claims", "reports", "settings"].length;
  const seedJobCount = Object.keys(jobData).length;
  const builtPageCount = 1 + 11 + seedJobCount * 3 + 1 + seededClients.length * 2;
  const packageOutputCount = 6;
  const runbookCount = 4;
  const allReady = seedJobCount >= 4 && activeAssetCount > 0 && totals.readyDollars > 0 && crew811Tickets.length > 0 && claimsDamageRecords.length > 0;
  if (onboardingLiveStatus) {
    onboardingLiveStatus.textContent = allReady ? "Ready for CrewProof live onboarding" : "Needs setup before CrewProof live onboarding";
  }
  if (onboardingLiveSummary) {
    onboardingLiveSummary.textContent = allReady
      ? "Preflight is wired for today. Run npm run preflight:onboarding, then invite pilot users by role."
      : "Review the readiness table before inviting users.";
  }
  if (onboardingDeadline) onboardingDeadline.textContent = "Sunday, June 28, 2026";
  if (onboardingCommand) onboardingCommand.textContent = "npm run preflight:onboarding";
  if (onboardingBuiltPages) onboardingBuiltPages.textContent = String(builtPageCount);
  if (onboardingSeedJobs) onboardingSeedJobs.textContent = String(seedJobCount);
  if (onboardingPackageOutputs) onboardingPackageOutputs.textContent = String(packageOutputCount);
  if (onboardingRunbookCount) onboardingRunbookCount.textContent = String(runbookCount);
  if (clientTotalCount) clientTotalCount.textContent = String(clients.length);
  if (clientActiveCount) clientActiveCount.textContent = String(activeClients.length);
  if (clientArchivedCount) clientArchivedCount.textContent = String(archivedClients.length);
  const readinessRows = [
    ["Clients", `${activeClients.length} active client profiles with issued-to contacts and billing rules`, activeClients.length >= 4 ? "Ready" : "Needs client setup"],
    ["Workspaces", `${workspaces.length} total workspaces; ${pilotWorkspaces.length} pilot workspace records; demo-seed isolated`, workspaces.some((workspace) => workspace.workspaceId === DEMO_WORKSPACE_ID) ? "Ready" : "Needs demo workspace"],
    ["Jobs", `${seedJobCount} active jobs seeded with map assets`, seedJobCount >= 4 ? "Ready" : "Needs data"],
    ["Map assets", `${activeAssetCount} HH / SV / SC / UG assets tied to jobs`, activeAssetCount > 0 ? "Ready" : "Needs data"],
    ["Billing", `${currency(totals.readyDollars)} ready and ${currency(totals.blockedDollars)} blocked`, totals.readyDollars > 0 ? "Ready" : "Needs ready lines"],
    ["Closeout exports", "CSV, JSON, print/PDF, and email draft controls present", "Ready"],
    ["811", `${crew811Tickets.length} locate records available`, crew811Tickets.length ? "Ready" : "Needs tickets"],
    ["Claims", `${claimsDamageRecords.length} damage records on separate map`, claimsDamageRecords.length ? "Ready" : "Needs claims layer"],
    ["Routes", `${routeCount} operator routes plus job-specific closeout and billing routes`, "Ready"],
    ["Route smoke test", "Build verifies direct links, app shell, CSS, script, and asset references", "Covered by npm test"],
    ["Local serve smoke", "Serves dist over HTTP and checks CrewProof routes, assets, and runbook", "Covered by npm test"],
    ["CrewProof live preflight", "Run npm run preflight:onboarding before inviting pilot users", "Due Sunday, June 28, 2026"],
  ];
  renderManagementTable(onboardingSteps, [
    ["1. Add clients and issued-to contacts", "Ops admin", `${activeClients.map((client) => client.name).join(", ")} active`],
    ["2. Invite pilot workspace", "CrewProof owner", "Use /workspaces to create isolated pilot workspace folder tree"],
    ["3. Load job map and locate sheet", "PM", `${Object.keys(jobData).length} active demo telecom jobs available`],
    ["4. Add crews and devices", "Foreman", "Alpha, Bravo, Charlie, Delta with GPS camera source"],
    ["5. Configure pay items", "Billing", "Handhole, splice, bore, restoration, and route lines mapped"],
    ["6. Set closeout rules", "Closeout desk", "Photos, GPS, redlines, material count, bore log, locates"],
    ["7. Turn on 811 and claims layers", "Locate / Claims", "Separate maps available for tickets and damages"],
    ["8. Confirm billing handoff", "Billing", `${readyJobs.length} jobs have ready dollars; ${blockedJobs.length} jobs need cleanup`],
  ]);

  renderManagementTable(onboardingSystemReadiness, readinessRows);

  renderManagementTable(onboardingFieldData, [
    ["Pinned asset photos", "Foreman app", "Proof package and billing release"],
    ["GPS points", "GPS camera / device", "Tie proof to handhole, vault, bore, or damage location"],
    ["Locate tickets", "Crew811 layer", "Verify open tickets before bore and claims review"],
    ["Material tickets", "Warehouse / foreman", "Reconcile material count to pay items"],
    ["Bore log", "Bore crew", "Resolve footage variance and route redlines"],
    ["Chats and email timeline", "Field feed", "Show last tech, contractor, and owner approvals"],
  ]);

  renderManagementTable(onboardingRoleInvites, [
    ["Crew / Foreman", "/crew/" + activeJobId(), "Select map asset, add proof, drop note, mark complete", "Job pins, GPS proof, photos, and closeout actions load"],
    ["PM / Admin / Owner", "/management", "Review blocked revenue, closeout aging, crew performance, and map overview", "KPIs, operations map, alerts, and reports render"],
    ["Pilot client admin", "/workspaces", "Invite workspace, add customer/project/crew/job, upload map/permit/locate sheet", "Client workspace records stay outside demo-seed"],
    ["Billing", "/billing/" + activeJobId(), "Confirm ready lines, blocked lines, and invoice backup", "Ready dollars and held dollars reconcile to job package"],
    ["Closeout desk", "/closeout/" + activeJobId(), "Review documents, photos, bore log, locates, material count, and package exports", "CSV, JSON, print/PDF, and email draft controls exist"],
    ["Locate reviewer", "/crew811", "Review tickets, positive response, renewal risk, and locate holds", "Ticket snapshot and 811 layer share controls exist"],
    ["Claims reviewer", "/claims", "Review damage pins, claim photos, recovery status, linked 811, and billing holds", "Claims map, claim JSON, recovery email, and billing links work"],
  ]);

  renderManagementTable(onboardingBillingRules, Object.entries(jobData).map(([jobId, job]) => {
    const totals = jobTotalsFor(jobId);
    return [
      `${clientDisplayNameForJob(job)} / ${job.siteName}`,
      clientIssuedToForJob(job),
      clientReadyRuleForJob(job),
      clientBillingEmailForJob(job),
    ];
  }));

  renderManagementTable(onboardingGates, [
    ["Crew View", "Each active job has selectable map pins and proof photos", `${Object.keys(jobData).length} jobs / ${activeJobAssetIds().length} active pins`, "/crew"],
    ["Closeout Package", "Package has docs, photos, locates, bore log, material count, audit trail", "Package CSV, JSON, PDF, and email draft available", "/closeout/" + activeJobId()],
    ["Billing Review", "Ready and blocked lines are separated before invoice", `${currency(activeJobTotals().ready)} ready / ${currency(activeJobTotals().blocked)} blocked`, "/billing/" + activeJobId()],
    ["Workspace Isolation", "Every real client record carries workspaceId and storagePath metadata", `${workspaceRetrievalIndex().length} retrievable document records`, "/workspaces"],
    ["Crew811", "Tickets and locate holds are separate from closeout proof", `${crew811Tickets.length} locate records tracked`, "/crew811"],
    ["Claims / Damage", "Claims map is separate and links to billing holds", `${claimsDamageRecords.length} damage records tracked`, "/claims"],
  ]);
}

function renderManagement() {
  const totals = programTotals();
  const allAssets = Object.values(jobData).flatMap((job) => Object.values(job.assets || {}).map((assetId) => [assetId, assetData[assetId]]).filter(([, data]) => data));
  const waitingAssets = allAssets.filter(([, data]) => data.statusClass === "waiting");
  const waitingTotal = waitingAssets.reduce((sum, [, data]) => sum + data.amount, 0);
  const statusCounts = totals.statusCounts;
  const forecast = Math.round((totals.readyDollars + totals.blockedDollars + waitingTotal) * 1.18);

  if (kpiReady) kpiReady.textContent = currency(totals.readyDollars);
  if (kpiReadySub) kpiReadySub.textContent = totals.readyAssets + " ready asset lines";
  if (kpiPending) kpiPending.textContent = currency(waitingTotal);
  if (kpiPendingSub) kpiPendingSub.textContent = waitingAssets.length + " asset lines with owner / PM queue";
  if (kpiBlocked) kpiBlocked.textContent = currency(totals.blockedDollars);
  if (kpiBlockedSub) kpiBlockedSub.textContent = (statusCounts.missing + statusCounts.rejected + statusCounts.waiting) + " jobs with proof, approval, or rejection holds";
  if (kpiForecast) kpiForecast.textContent = currency(forecast);
  if (kpiForecastSub) kpiForecastSub.textContent = totals.jobs + " active jobs in 30 day view";
  if (statusTotal) statusTotal.textContent = String(totals.jobs);
  if (statusCopy) statusCopy.textContent = `Ready ${statusCounts.ready} / Missing ${statusCounts.missing} / Rejected ${statusCounts.rejected} / Waiting ${statusCounts.waiting}`;
  updateOpsShareLink();

  if (revenueByCustomer) {
    const maxReady = Math.max(...Object.keys(jobData).map((jobId) => jobTotalsFor(jobId).ready), 1);
    revenueByCustomer.textContent = "";
    Object.entries(jobData).forEach(([jobId, job]) => {
      const ready = jobTotalsFor(jobId).ready;
      const bar = document.createElement("span");
      bar.style.setProperty("--v", Math.max(8, Math.round((ready / maxReady) * 100)) + "%");
      bar.textContent = `${clientDisplayNameForJob(job)} ${currency(ready)}`;
      revenueByCustomer.append(bar);
    });
  }

  renderManagementMap();
  renderManagementClaimsImpact();
  renderBlockedRevenueActions();
  setManagementSelectedJob(activeJobId());

  const jobRows = Object.entries(jobData).map(([jobId, job]) => {
    const jobTotals = jobTotalsFor(jobId);
    return [
      tableLink(jobId, "/closeout/" + jobId),
      clientDisplayNameForJob(job),
      job.siteName,
      jobStatusLabel(jobId),
      jobPrimaryCrew(jobId),
      currency(jobTotals.ready),
      currency(jobTotals.blocked),
      tableLink("Open Crew", "/crew/" + jobId),
      tableLink("Open Billing", "/billing/" + jobId),
    ];
  });
  renderManagementTable(jobStatusBoard, jobRows);

  const blockedRows = Object.entries(jobData)
    .map(([jobId, job]) => ({ jobId, job, totals: jobTotalsFor(jobId), blocker: jobPrimaryBlocker(jobId) }))
    .filter((row) => row.totals.blocked > 0)
    .sort((a, b) => b.totals.blocked - a.totals.blocked);
  renderManagementTable(topBlockedJobs, blockedRows.slice(0, 4).map((row) => [tableLink(row.jobId, "/billing/" + row.jobId), row.blocker, currency(row.totals.blocked)]));

  renderManagementTable(jobsProgress, [
    ["Ready to Bill", totals.readyAssets + " asset lines", currency(totals.readyDollars)],
    ["Waiting on Approval", waitingAssets.length + " asset lines", currency(waitingTotal)],
    ["Missing Proof", statusCounts.missing + " jobs", currency(blockedRows.reduce((sum, row) => row.job && jobOverviewStatus(row.jobId) === "missing" ? sum + row.totals.blocked : sum, 0))],
    ["Rejected / Needs Fix", statusCounts.rejected + " jobs", currency(blockedRows.reduce((sum, row) => row.job && jobOverviewStatus(row.jobId) === "rejected" ? sum + row.totals.blocked : sum, 0))],
  ]);

  const crewMap = new Map();
  allAssets.forEach(([assetId, data]) => {
    const crew = data.crew.includes("Crew") ? data.crew : data.crew + " Crew";
    const current = crewMap.get(crew) || { total: 0, ready: 0, blocked: 0, next: data.blocker };
    current.total += 1;
    if (data.statusClass === "ready") current.ready += 1;
    else {
      current.blocked += 1;
      current.next = data.blocker;
    }
    crewMap.set(crew, current);
  });
  const crewRows = [...crewMap.entries()].map(([crew, stats]) => {
    const passRate = Math.round((stats.ready / Math.max(stats.total, 1)) * 100);
    return [crew, passRate + "% proof pass", stats.blocked ? stats.blocked + " open holds" : "All clear"];
  });
  renderManagementTable(crewUtilization, crewRows);
  renderManagementTable(crewPerformance, crewRows);

  renderManagementTable(closeoutAging, [
    ["0-1 days", Object.keys(jobData).filter((jobId) => jobTotalsFor(jobId).ready > 0).length + " packages", currency(totals.readyDollars)],
    ["2-3 days", waitingAssets.length + " asset lines", currency(waitingTotal)],
    ["4+ days", (statusCounts.missing + statusCounts.rejected) + " packages", currency(totals.blockedDollars)],
  ]);
  renderManagementTable(agingBuckets, [
    ["0-1 days", Object.keys(jobData).filter((jobId) => jobTotalsFor(jobId).ready > 0).length + " packages"],
    ["2-3 days", waitingAssets.length + " asset lines"],
    ["4+ days", (statusCounts.missing + statusCounts.rejected) + " packages"],
  ]);

  renderManagementTable(alertsExceptions, blockedRows.flatMap((row) => jobAssetsFor(row.jobId)
    .filter(([, data]) => data.statusClass !== "ready")
    .slice(0, 2)
    .map(([assetId, data]) => [tableLink(row.jobId, "/closeout/" + row.jobId), assetId + " " + data.blocker, data.crew])));

  renderManagementTable(nextFieldAction, blockedRows.map((row) => [tableLink(row.jobId, "/crew/" + row.jobId), row.blocker]));

  renderManagementTable(closeoutQueueBody, Object.entries(jobData).map(([jobId, job], index) => {
    const status = jobStatusLabel(jobId);
    return [
      "PKG-" + jobId.replace("JOB-", ""),
      tableLink(jobId, "/closeout/" + jobId),
      clientIssuedToForJob(job),
      index < 2 ? "0d" : index + "d",
      status,
      jobPrimaryBlocker(jobId),
      tableLink("Open Crew", "/crew/" + jobId),
      tableLink("Open Billing", "/billing/" + jobId),
    ];
  }));
}

function setPanelHidden(panel, hidden) {
  if (panel) panel.hidden = hidden;
}

function renderDefinitionList(container, rows) {
  if (!container) return;
  container.textContent = "";
  rows.forEach(([label, value]) => {
    const row = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = label;
    dd.textContent = value || "-";
    row.append(dt, dd);
    container.append(row);
  });
}

function yesNo(value) {
  return value ? "Required" : "Not required";
}

function clientFormData() {
  const data = {};
  clientForm?.querySelectorAll("[data-client-field]").forEach((field) => {
    const key = field.dataset.clientField;
    data[key] = field.type === "checkbox" ? field.checked : field.value.trim();
  });
  data.retainagePercent = data.retainagePercent ? Number(data.retainagePercent) : "";
  return data;
}

function fillClientForm(client = {}) {
  clientForm?.querySelectorAll("[data-client-field]").forEach((field) => {
    const key = field.dataset.clientField;
    const defaultChecked = ["requiredPhotos", "gpsRequired", "redlinesRequired", "materialTicketRequired", "locateTicketRequired", "positiveResponseRequired"].includes(key);
    if (field.type === "checkbox") field.checked = client[key] ?? defaultChecked;
    else if (key === "readyRule") field.value = client[key] || "Ready lines can send; blocked lines stay held";
    else if (key === "paymentTerms") field.value = client[key] || "Net 30";
    else field.value = client[key] ?? "";
  });
}

function showClientFormErrors(errors = {}) {
  if (!clientFormErrors) return;
  clientFormErrors.textContent = "";
  const entries = Object.entries(errors);
  if (!entries.length) {
    clientFormErrors.hidden = true;
    return;
  }
  clientFormErrors.hidden = false;
  entries.forEach(([field, message]) => {
    const item = document.createElement("p");
    item.textContent = field + ": " + message;
    clientFormErrors.append(item);
  });
}

function renderClientList() {
  if (!clientList) return;
  const query = normalizeClientName(clientSearchInput?.value || "");
  const filter = clientStatusFilter?.value || "active";
  const clients = getClients().filter((client) => {
    const haystack = normalizeClientName([client.name, client.customerCode, client.issuedTo, client.billingEmail, client.mainContactEmail].join(" "));
    const statusMatch = filter === "all" || (filter === "archived" ? client.status === "archived" : client.status !== "archived");
    return statusMatch && (!query || haystack.includes(query));
  });
  clientList.textContent = "";
  clients.forEach((client) => {
    const row = document.createElement("tr");
    const actions = document.createElement("span");
    actions.className = "client-row-actions";
    actions.append(tableLink("View", "/clients/" + client.id), tableLink("Edit", "/clients/" + client.id + "/edit"));
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.textContent = client.status === "archived" ? "Restore" : "Archive";
    toggle.addEventListener("click", () => {
      if (client.status === "archived") restoreClient(client.id);
      else archiveClient(client.id);
      renderClients(routeFromLocation());
      renderOnboarding();
    });
    actions.append(toggle);
    renderCells(row, [
      client.name,
      client.customerCode,
      client.issuedTo,
      client.billingEmail,
      client.readyRule,
      client.status === "archived" ? "Archived" : "Active",
      actions,
    ]);
    clientList.append(row);
  });
  if (!clients.length) {
    const row = document.createElement("tr");
    renderCells(row, ["No clients match the current filter.", "-", "-", "-", "-", "-", tableLink("Add Client", "/clients/new")]);
    clientList.append(row);
  }
}

function renderClientDetail(id) {
  const client = findClientById(id);
  if (!client) {
    setRoute("/clients", true);
    return;
  }
  if (clientDetailStatus) {
    clientDetailStatus.textContent = client.status === "archived" ? "Archived" : "Active";
    clientDetailStatus.className = "client-status-badge " + (client.status === "archived" ? "archived" : "active");
  }
  if (clientDetailName) clientDetailName.textContent = client.name;
  if (clientDetailCode) clientDetailCode.textContent = client.customerCode + " / " + (client.legalName || "No legal name set");
  setRouteLink(clientEditLink, "/clients/" + client.id + "/edit");
  if (clientToggleArchive) {
    clientToggleArchive.textContent = client.status === "archived" ? "Restore Client" : "Archive Client";
    clientToggleArchive.dataset.clientId = client.id;
  }
  if (clientCreateJob) clientCreateJob.dataset.clientId = client.id;
  renderDefinitionList(clientInfo, [
    ["Client ID", client.id],
    ["Customer Code", client.customerCode],
    ["Legal Name", client.legalName],
    ["Territory", client.serviceTerritory],
    ["Office", client.officeAddress],
    ["Website", client.website],
  ]);
  renderDefinitionList(clientContacts, [
    ["Main Contact", [client.mainContactName, client.mainContactEmail].filter(Boolean).join(" / ")],
    ["AP Contact", [client.apContactName, client.apContactEmail].filter(Boolean).join(" / ")],
    ["Closeout Contact", [client.closeoutContactName, client.closeoutContactEmail].filter(Boolean).join(" / ")],
    ["Field Contact", [client.fieldContactName, client.fieldContactEmail].filter(Boolean).join(" / ")],
  ]);
  renderDefinitionList(clientBilling, [
    ["Issued To", client.issuedTo],
    ["Billing Email", client.billingEmail],
    ["Invoice Email", client.invoiceEmail],
    ["Billing Terms", client.paymentTerms],
    ["Retainage", client.retainagePercent ? client.retainagePercent + "%" : "None"],
    ["Ready Rule", client.readyRule],
  ]);
  renderDefinitionList(clientCloseout, [
    ["Photos", yesNo(client.requiredPhotos)],
    ["GPS", yesNo(client.gpsRequired)],
    ["Redlines", yesNo(client.redlinesRequired)],
    ["Material Ticket", yesNo(client.materialTicketRequired)],
    ["Bore Log", yesNo(client.boreLogRequired)],
    ["Notes", client.notes],
  ]);
  renderDefinitionList(clientLocate, [
    ["Locate Ticket", yesNo(client.locateTicketRequired)],
    ["Positive Response", yesNo(client.positiveResponseRequired)],
    ["Default Hold", client.locateTicketRequired ? "Hold bore billing if ticket is expired or unverified" : "No default locate hold"],
  ]);
  renderDefinitionList(clientClaims, [
    ["Claims Contact", [client.claimsContactName, client.claimsContactEmail].filter(Boolean).join(" / ")],
    ["Claims Rule", "Damage pins stay on the claims map and link to billing holds"],
  ]);
  renderManagementTable(clientAuditTable, (client.audit || []).slice().reverse().map((entry) => [entry.at, entry.action, entry.note]));
}

function renderClientForm(mode, id) {
  const isEdit = mode === "edit";
  const client = isEdit ? findClientById(id) : null;
  if (isEdit && !client) {
    setRoute("/clients", true);
    return;
  }
  if (clientFormTitle) clientFormTitle.textContent = isEdit ? "Edit Client" : "Add Client";
  if (clientFormStatus) clientFormStatus.textContent = isEdit ? "Update client contacts, billing rules, and closeout requirements." : "Create the Owner/Admin client profile before creating new jobs.";
  fillClientForm(client || {});
  showClientFormErrors({});
}

function renderClients(route = routeFromLocation()) {
  const parts = routeParts(route);
  if (parts.view !== "clients") return;
  const isNew = parts.jobId === "new";
  const isEdit = parts.action === "edit";
  const isDetail = parts.jobId && !isNew && !isEdit;
  setPanelHidden(clientListPanel, isNew || isEdit || isDetail);
  setPanelHidden(clientDetailPanel, !isDetail);
  setPanelHidden(clientFormPanel, !(isNew || isEdit));
  if (clientPageTitle) clientPageTitle.textContent = isNew ? "Add Client" : isEdit ? "Edit Client" : isDetail ? "Client Profile" : "Clients";
  if (clientPageSubtitle) {
    clientPageSubtitle.textContent = isNew || isEdit
      ? "Client rules feed onboarding, jobs, closeout packages, billing review, locates, and claims."
      : "Manage customer profiles, issued-to contacts, billing rules, and closeout requirements.";
  }
  if (isNew) renderClientForm("new");
  else if (isEdit) renderClientForm("edit", parts.jobId);
  else if (isDetail) renderClientDetail(parts.jobId);
  else renderClientList();
}

function workspaceFormData(form, attr) {
  const data = {};
  form?.querySelectorAll(`[${attr}]`).forEach((field) => {
    data[field.getAttribute(attr)] = field.value.trim();
  });
  return data;
}

function renderWorkspaceSelects() {
  const pilotWorkspaces = getWorkspaces().filter((workspace) => workspace.type !== "demo");
  [workspaceJobSelect, workspaceProofSelect].forEach((select) => {
    if (!select) return;
    const current = select.value;
    select.textContent = "";
    pilotWorkspaces.forEach((workspace) => {
      const option = document.createElement("option");
      option.value = workspace.workspaceId;
      option.textContent = `${workspace.name} / ${workspace.workspaceId}`;
      select.append(option);
    });
    if (current && pilotWorkspaces.some((workspace) => workspace.workspaceId === current)) select.value = current;
  });
  if (workspaceProofJobSelect) {
    const workspace = findWorkspace(workspaceProofSelect?.value);
    const currentJob = workspaceProofJobSelect.value;
    workspaceProofJobSelect.textContent = "";
    (workspace?.jobs || []).forEach((job) => {
      const option = document.createElement("option");
      option.value = job.jobId;
      option.textContent = `${job.jobId} / ${job.status}`;
      workspaceProofJobSelect.append(option);
    });
    if (currentJob && (workspace?.jobs || []).some((job) => job.jobId === currentJob)) workspaceProofJobSelect.value = currentJob;
  }
}

function renderWorkspaces() {
  renderWorkspaceSelects();
  const workspaces = getWorkspaces();
  if (workspaceList) {
    renderManagementTable(workspaceList, workspaces.map((workspace) => [
      workspace.workspaceId,
      workspace.type,
      workspace.status + (workspace.signupQuestions ? " / signup sent" : ""),
      workspace.storageRoot,
      String((workspace.customers || []).length),
      String((workspace.jobs || []).length),
      String((workspace.documents || []).length),
    ]));
  }
  if (workspaceDocuments) {
    const rows = workspaceRetrievalIndex().map(({ workspace, doc }) => [
      workspace.workspaceId,
      doc.customerId,
      doc.projectId,
      doc.jobId,
      doc.documentType,
      doc.storagePath,
      doc.createdAt,
    ]);
    renderManagementTable(workspaceDocuments, rows.length ? rows : [["No pilot files yet", "-", "-", "-", "-", "-", "-"]]);
  }
  renderManagementTable(workspaceSecurity, [
    ["Demo isolation", "demo-seed is read-only demo data and is excluded from client role visibility"],
    ["Owner/Admin", `${visibleWorkspacesForRole("owner").length} workspaces visible for retrieval and audit`],
    ["Client portal", "Only the matching non-demo workspace is visible by workspaceId"],
    ["811 excavator custody", getWorkspaces().filter((workspace) => workspace.type !== "demo").map((workspace) => `${workspace.workspaceId}: company ${workspace.oneCallAccount?.companyId || "needed"} / excavator ${workspace.oneCallAccount?.excavatorId || "needed"} / ${workspace.oneCallAccount?.provider || "provider needed"}`).join(" | ") || "No pilot 811 excavator data yet"],
    ["Storage key", WORKSPACE_STORAGE_KEY],
    ["Folder rule", `${WORKSPACE_TREE_ROOT}/{workspaceId}/customers/{customerId}/projects/{projectId}/jobs/{jobId}/{documentType}/{fileName}`],
  ]);
  const auditRows = workspaces.flatMap((workspace) => (workspace.audit || []).slice(-6).map((event) => [
    workspace.workspaceId,
    event.at,
    event.action,
    event.note,
  ]));
  renderManagementTable(workspaceAuditBody, auditRows.length ? auditRows : [["-", "-", "No audit events", "-"]]);
  if (workspaceStatus) {
    const pilotCount = workspaces.filter((workspace) => workspace.type === "pilot").length;
    workspaceStatus.textContent = `${pilotCount} pilot workspace${pilotCount === 1 ? "" : "s"} plus demo-seed. Owner/admin retrieval index contains ${workspaceRetrievalIndex().length} document records.`;
  }
}

function renderRoute(route = routeFromLocation()) {
  const parts = routeParts(route);
  const routeViewNames = ["crew", "crew811", "claims", "management", "onboarding", "clients", "workspaces", "jobs", "closeouts", "reports", "settings", "closeout", "billing"];
  const normalizedView = routeViewNames.includes(parts.view) ? parts.view : "crew";
  const selectedJob = jobData[parts.jobId] ? parts.jobId : activeJobId();
  persistActiveJobId(selectedJob);
  if (jobIdField && jobData[selectedJob] && jobIdField.value !== selectedJob) {
    jobIdField.value = selectedJob;
    syncJobFields();
    renderInvoiceLines();
    renderCloseoutSummaries();
    renderAsset(currentAssetId());
  }
  if (crewJobSelect && jobData[selectedJob]) crewJobSelect.value = selectedJob;
  syncCrewCard(selectedJob);
  renderBilling(selectedJob);
  renderManagement();
  renderReports();
  renderSettings();
  renderOnboarding();
  renderClients(route);
  renderWorkspaces();
  if (typeof renderCrewboxDrive === "function") renderCrewboxDrive();
  if (typeof renderCrewChat === "function") renderCrewChat();
  renderDroppedMapPins();
  renderJobOverviewPins();

  routeViews.forEach((viewEl) => {
    viewEl.classList.toggle("is-active", viewEl.dataset.view === normalizedView);
  });
  document.body.dataset.route = normalizedView;
  if (modeLabel) {
    const viewLabels = { crew: "Crew View", crew811: "Crew811", claims: "Claims / Damage", management: "Management View", onboarding: "Onboarding", clients: "Client Management", workspaces: "Client Workspaces", jobs: "Jobs", closeouts: "Closeouts", reports: "Reports", settings: "Settings", billing: "Billing Review", closeout: "Closeout Review" };
    modeLabel.textContent = viewLabels[normalizedView] || "Crew View";
  }
  routeLinks.forEach((link) => {
    const target = link.dataset.routeLink || "";
    const targetView = routeParts(target).view;
    link.classList.toggle("is-active", target === route || (targetView === normalizedView && !target.includes("JOB")));
  });
}

routeLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setRoute(link.dataset.routeLink || link.getAttribute("href") || "/crew");
  });
});

roleMode?.addEventListener("change", () => {
  window.localStorage?.setItem("crewproof.role", roleMode.value);
  if (roleMode.value === "pm") setRoute("/management");
  else if (roleMode.value === "billing") setRoute("/billing/" + activeJobId());
  else setRoute("/crew/" + activeJobId());
});

clientSearchInput?.addEventListener("input", () => renderClients(routeFromLocation()));
clientStatusFilter?.addEventListener("change", () => renderClients(routeFromLocation()));
clientRestoreAll?.addEventListener("click", () => {
  restoreAllClients();
  renderClients(routeFromLocation());
  renderOnboarding();
});

clientForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const parts = routeParts(routeFromLocation());
  const result = parts.action === "edit" ? updateClient(parts.jobId, clientFormData()) : createClient(clientFormData());
  if (result.errors) {
    showClientFormErrors(result.errors);
    if (clientFormStatus) clientFormStatus.textContent = "Fix the client profile before saving.";
    return;
  }
  if (clientFormStatus) clientFormStatus.textContent = "Client saved.";
  renderOnboarding();
  renderManagement();
  renderBilling(activeJobId());
  setRoute("/clients/" + result.client.id);
});

clientSaveJob?.addEventListener("click", () => {
  const parts = routeParts(routeFromLocation());
  const result = parts.action === "edit" ? updateClient(parts.jobId, clientFormData()) : createClient(clientFormData());
  if (result.errors) {
    showClientFormErrors(result.errors);
    if (clientFormStatus) clientFormStatus.textContent = "Fix the client profile before saving.";
    return;
  }
  const createdJobId = createJobForClientProfile(result.client);
  if (clientFormStatus) clientFormStatus.textContent = `Client saved and ${createdJobId} created.`;
  renderOnboarding();
  setRoute("/crew/" + createdJobId);
});

clientToggleArchive?.addEventListener("click", () => {
  const id = clientToggleArchive.dataset.clientId;
  const client = findClientById(id);
  if (!client) return;
  if (client.status === "archived") restoreClient(id);
  else archiveClient(id);
  renderOnboarding();
  renderClients("/clients/" + id);
});

clientCreateJob?.addEventListener("click", () => {
  const id = clientCreateJob.dataset.clientId || routeParts(routeFromLocation()).jobId;
  const client = findClientById(id) || getClients()[0];
  if (!client) return;
  const createdJobId = createJobForClientProfile(client);
  if (clientFormStatus) clientFormStatus.textContent = `Created ${createdJobId} for ${client.name}.`;
  renderOnboarding();
  setRoute("/crew/" + createdJobId);
});

workspaceInviteForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const result = createPilotWorkspace(workspaceFormData(workspaceInviteForm, "data-workspace-invite-field"));
  if (workspaceStatus) workspaceStatus.textContent = result.error || `Pilot workspace invited: ${result.workspace.workspaceId}. Signup questionnaire email draft opened for ${result.workspace.adminEmail}.`;
  if (!result.error) window.location.href = result.workspace.signupEmailDraft;
  renderWorkspaces();
  renderOnboarding();
});

sendSignupQuestionsButton?.addEventListener("click", () => {
  ensureSignupQuestions();
  window.location.href = buildSignupQuestionsEmail();
  if (workspaceStatus) workspaceStatus.textContent = "Signup questionnaire email draft opened. Nothing is sent until you press send in your email client.";
});

workspaceJobForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const result = activateWorkspaceJob(workspaceFormData(workspaceJobForm, "data-workspace-job-field"));
  if (workspaceStatus) workspaceStatus.textContent = result.error || `Activated ${result.job.jobId}. Files stored under ${result.job.storageRoot}.`;
  renderWorkspaces();
  renderOnboarding();
});

workspaceProofSelect?.addEventListener("change", renderWorkspaceSelects);

workspaceProofForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const result = uploadWorkspaceProof(workspaceFormData(workspaceProofForm, "data-workspace-proof-field"));
  if (workspaceStatus) workspaceStatus.textContent = result.error || `Proof stored at ${result.proof.storagePath}.`;
  renderWorkspaces();
  renderOnboarding();
});

crewJobSelect?.addEventListener("change", () => {
  if (jobIdField) {
    jobIdField.value = crewJobSelect.value;
    persistActiveJobId(crewJobSelect.value);
    syncJobFields();
    renderInvoiceLines();
    renderCloseoutSummaries();
    renderAsset(currentAssetId());
  }
  syncCrewCard(crewJobSelect.value);
  renderBilling(crewJobSelect.value);
  renderDroppedMapPins();
  renderJobOverviewPins();
  updateShareLink();
  updateOpsShareLink();
});

window.addEventListener("popstate", () => renderRoute(routeFromLocation()));
window.addEventListener("hashchange", () => renderRoute(routeFromLocation()));

const storedRole = window.localStorage?.getItem("crewproof.role");
if (storedRole && roleMode) roleMode.value = storedRole;
const sharedAssetId = applySharedFieldPayload();
applySharedOperationsPayload();
const sharedClaimId = applySharedClaimsPayload();
const sharedCrew811Ticket = applySharedCrew811Payload();
applyMapZoom(closeoutMapZoom, false);
applyCrewMapZoom(crewMapZoom, false);
ensureSignupQuestions();
ensureHttpBaseHref();
renderJobOverviewPins();
renderDroppedMapPins();
renderRoute(routeFromLocation());
renderAsset(sharedAssetId || currentAssetId());
if (sharedClaimId) renderClaimsDamage();
if (sharedCrew811Ticket) renderCrew811();

// ============================================================================
// FULL-STACK CAPABILITIES: PERSISTENT BACKEND SYNC, AUTH, UPLOADS, RATES,
// PACKAGE ZIP EXPORT, CREWBOX DRIVE, AND CREW CHAT
// ============================================================================

const authUserSelect = document.querySelector("[data-auth-user-select]");
const authStatusCopy = document.querySelector("[data-auth-status]");
const globalFileInput = document.querySelector("[data-global-file-input]");
const downloadPackageZipButtons = document.querySelectorAll("[data-download-package-zip]");
const rateActionButtons = document.querySelectorAll("[data-rate-action]");
const rateActionStatus = document.querySelector("[data-rate-action-status]");

const crewboxFolderSelect = document.querySelector("[data-crewbox-folder-select]");
const crewboxFilterSelect = document.querySelector("[data-crewbox-filter-select]");
const crewboxNewFolderBtn = document.querySelector("[data-crewbox-new-folder]");
const crewboxUploadFileBtn = document.querySelector("[data-crewbox-upload-file]");
const crewboxNewSheetBtn = document.querySelector("[data-crewbox-new-sheet]");
const crewboxEmptyTrashBtn = document.querySelector("[data-crewbox-empty-trash]");
const crewboxItemsBody = document.querySelector("[data-crewbox-items]");
const crewboxSheetTitle = document.querySelector("[data-crewbox-sheet-title]");
const crewboxSheetGrid = document.querySelector("[data-crewbox-sheet-grid]");
const crewboxSaveSheetBtn = document.querySelector("[data-crewbox-save-sheet]");
const crewboxJobLinkSelect = document.querySelector("[data-crewbox-job-link-select]");
const crewboxLinkJobBtn = document.querySelector("[data-crewbox-link-job-btn]");
const crewboxRuleForm = document.querySelector("[data-crewbox-rule-form]");
const crewboxRuleName = document.querySelector("[data-crewbox-rule-name]");
const crewboxRuleKeywords = document.querySelector("[data-crewbox-rule-keywords]");
const crewboxRuleTarget = document.querySelector("[data-crewbox-rule-target]");
const crewboxRuleApproval = document.querySelector("[data-crewbox-rule-approval]");
const crewboxRulesList = document.querySelector("[data-crewbox-rules-list]");
const crewboxEventsList = document.querySelector("[data-crewbox-events-list]");

const chatRoomSelect = document.querySelector("[data-chat-room-select]");
const chatMarkReadBtn = document.querySelector("[data-chat-mark-read]");
const chatUnreadBadge = document.querySelector("[data-chat-unread-badge]");
const chatMessagesContainer = document.querySelector("[data-chat-messages]");
const chatForm = document.querySelector("[data-chat-form]");
const chatInput = document.querySelector("[data-chat-input]");
const chatLogJobLabel = document.querySelector("[data-chat-log-job-label]");
const chatJobLogBody = document.querySelector("[data-chat-job-log]");

let activeSessionToken = window.localStorage?.getItem("crewproof.sessionToken") || "";
let activeUserAccount = {
  id: "USR-CREW-1",
  name: "J. Ramirez",
  email: "jramirez@crewproof.local",
  role: "crew",
  title: "Foreman",
  workspaceId: "demo-seed",
};

let crewboxState = {
  items: [
    {
      id: "cbx_folder_closeouts",
      workspaceId: "demo-seed",
      parentId: null,
      type: "folder",
      name: "Closeout Packets",
      trashedAt: null,
      approvalStatus: "approved",
      updatedAt: "2026-06-23T14:00:00.000Z",
    },
    {
      id: "cbx_folder_locates",
      workspaceId: "demo-seed",
      parentId: null,
      type: "folder",
      name: "811 Locate Sheets",
      trashedAt: null,
      approvalStatus: "approved",
      updatedAt: "2026-06-23T14:00:00.000Z",
    },
    {
      id: "cbx_folder_rates",
      workspaceId: "demo-seed",
      parentId: null,
      type: "folder",
      name: "Rate & Bore Sheets",
      trashedAt: null,
      approvalStatus: "approved",
      updatedAt: "2026-06-23T14:00:00.000Z",
    },
    {
      id: "cbx_sheet_pinehill",
      workspaceId: "demo-seed",
      parentId: "cbx_folder_rates",
      type: "spreadsheet",
      name: "JOB-1045 Bore & Footage Reconciliation",
      trashedAt: null,
      approvalStatus: "approved",
      columns: ["Run", "Plan Ft", "Measured Ft", "Variance", "Status"],
      rows: [
        ["HH-1 to SV-1", "125", "125", "0", "Matched"],
        ["SV-1 to SV-2", "87", "94", "+7", "Needs Fix"],
        ["HH-1 to UG-1", "210", "210", "0", "Matched"],
      ],
      updatedAt: "2026-06-23T14:35:00.000Z",
    },
    {
      id: "cbx_file_windstream_msa",
      workspaceId: "demo-seed",
      parentId: "cbx_folder_closeouts",
      type: "file",
      name: "Windstream-MSA-19-Rate-Schedule.pdf",
      mimeType: "application/pdf",
      sizeBytes: 48200,
      trashedAt: null,
      approvalStatus: "approved",
      updatedAt: "2026-06-23T14:10:00.000Z",
    },
  ],
  rules: [
    {
      id: "cbr_locate_auto",
      workspaceId: "demo-seed",
      name: "Auto-route 811 & Exactix files",
      keywords: ["811", "locate", "exactix", "ticket"],
      targetFolderId: "cbx_folder_locates",
      requireApproval: false,
      active: true,
    },
    {
      id: "cbr_rate_approval",
      workspaceId: "demo-seed",
      name: "Rate & Invoice sheets require PM approval",
      keywords: ["rate", "invoice", "change-order", "variance"],
      targetFolderId: "cbx_folder_rates",
      requireApproval: true,
      active: true,
    },
  ],
  approvals: [],
  jobLinks: [
    { id: "cbl_1", workspaceId: "demo-seed", itemId: "cbx_sheet_pinehill", jobId: "JOB-1045" },
    { id: "cbl_2", workspaceId: "demo-seed", itemId: "cbx_file_windstream_msa", jobId: "JOB-1045" },
  ],
  events: [
    { id: "cbe_1", action: "spreadsheet.create", details: { name: "JOB-1045 Bore & Footage Reconciliation" }, createdAt: "2026-06-23T14:35:00.000Z" },
  ],
};
let selectedCrewboxSheetId = "cbx_sheet_pinehill";

let crewChatState = {
  rooms: [
    { id: "company", label: "Company General", kind: "company" },
    { id: "crew:alpha", label: "Crew Alpha", kind: "crew" },
    { id: "crew:bravo", label: "Crew Bravo", kind: "crew" },
    { id: "crew:charlie", label: "Crew Charlie", kind: "crew" },
    { id: "crew:delta", label: "Crew Delta", kind: "crew" },
    { id: "job:JOB-1045", label: "JOB-1045 Pine Hill", kind: "job", jobId: "JOB-1045" },
    { id: "job:JOB-1046", label: "JOB-1046 Oak Ridge", kind: "job", jobId: "JOB-1046" },
    { id: "job:JOB-1047", label: "JOB-1047 Cedar Park", kind: "job", jobId: "JOB-1047" },
    { id: "job:JOB-1048", label: "JOB-1048 Slaughter Ln", kind: "job", jobId: "JOB-1048" },
  ],
  messages: [
    {
      id: "msg_seed_1",
      room: "company",
      seq: 1,
      authorId: "pm@crewproof.local",
      authorName: "M. Vance (PM)",
      text: "Morning crews — ensure all positive responses are verified in Crew811 before bore startup on @JOB-1045 and @JOB-1046.",
      mentions: ["JOB-1045", "JOB-1046"],
      createdAt: "2026-06-23T13:00:00.000Z",
    },
    {
      id: "msg_seed_2",
      room: "job:JOB-1045",
      seq: 1,
      authorId: "jramirez@crewproof.local",
      authorName: "J. Ramirez (Alpha Crew)",
      text: "HH-1 handhole photo and GPS locked. Moving to SV-1 open-vault photo next.",
      mentions: ["JOB-1045"],
      createdAt: "2026-06-23T14:40:00.000Z",
    },
    {
      id: "msg_seed_3",
      room: "crew:alpha",
      seq: 1,
      authorId: "locate@crewproof.local",
      authorName: "D. Brooks (811 Desk)",
      text: "FL811-24-1187 is Clear for @JOB-1045 HH-1 to SV-1. Keep pothole photos attached for UG-1.",
      mentions: ["JOB-1045"],
      createdAt: "2026-06-23T14:42:00.000Z",
    },
  ],
  jobLinks: [
    { id: "cjl_seed_1", messageId: "msg_seed_1", jobId: "JOB-1045", room: "company", source: "mention", linkedBy: "pm@crewproof.local", createdAt: "2026-06-23T13:00:00.000Z" },
    { id: "cjl_seed_2", messageId: "msg_seed_2", jobId: "JOB-1045", room: "job:JOB-1045", source: "job-room", linkedBy: "jramirez@crewproof.local", createdAt: "2026-06-23T14:40:00.000Z" },
    { id: "cjl_seed_3", messageId: "msg_seed_3", jobId: "JOB-1045", room: "crew:alpha", source: "mention", linkedBy: "locate@crewproof.local", createdAt: "2026-06-23T14:42:00.000Z" },
  ],
  summaries: [],
};

function canCallBackend() {
  return typeof window.fetch === "function" && /^https?:$/i.test(window.location?.protocol || "");
}

async function apiRequest(path, { method = "GET", body } = {}) {
  if (!canCallBackend()) return null;
  try {
    const headers = { Accept: "application/json" };
    if (activeSessionToken) headers["x-session-token"] = activeSessionToken;
    if (body !== undefined) headers["Content-Type"] = "application/json";
    const response = await window.fetch(path, {
      method,
      headers,
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}

function promptFileUpload({ accept = "*/*", workspaceId = "demo-seed", jobId = activeJobId(), assetId = currentAssetId(), documentType = "proof" } = {}) {
  return new Promise((resolve) => {
    if (!globalFileInput) {
      resolve(null);
      return;
    }
    globalFileInput.accept = accept;
    globalFileInput.value = "";
    const onChange = () => {
      globalFileInput.removeEventListener("change", onChange);
      const file = globalFileInput.files?.[0];
      if (!file) {
        resolve(null);
        return;
      }
      const reader = new FileReader();
      reader.onload = async () => {
        const dataUrl = String(reader.result || "");
        const uploaded = await apiRequest("/api/uploads", {
          method: "POST",
          body: {
            workspaceId,
            jobId,
            assetId,
            documentType,
            fileName: file.name,
            mimeType: file.type || "application/octet-stream",
            base64Data: dataUrl,
            uploadedBy: activeUserAccount.name,
          },
        });
        resolve({
          fileName: file.name,
          mimeType: file.type || "application/octet-stream",
          sizeBytes: file.size,
          dataUrl,
          upload: uploaded?.upload || null,
        });
      };
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(file);
    };
    globalFileInput.addEventListener("change", onChange, { once: true });
    globalFileInput.click();
  });
}

function syncJobSelectOptions(jobId, job) {
  [jobIdField, crewJobSelect, crewboxJobLinkSelect].forEach((select) => {
    if (!select) return;
    if (![...select.options].some((opt) => opt.value === jobId)) {
      const option = document.createElement("option");
      option.value = jobId;
      option.textContent = select === crewboxJobLinkSelect ? jobId : `${jobId} / ${job.customer} / ${job.siteName}`;
      select.append(option);
    }
  });
  if (chatRoomSelect && ![...chatRoomSelect.options].some((opt) => opt.value === `job:${jobId}`)) {
    const option = document.createElement("option");
    option.value = `job:${jobId}`;
    option.textContent = `Job Room: ${jobId}`;
    chatRoomSelect.append(option);
  }
}

function createJobForClientProfile(client) {
  const existingNums = Object.keys(jobData)
    .map((id) => Number.parseInt(id.replace(/\D+/g, ""), 10))
    .filter((num) => Number.isFinite(num));
  const nextNum = Math.max(1048, ...existingNums) + 1;
  const newJobId = `JOB-${nextNum}`;
  const prefix = (client.customerCode || client.name || "JB").slice(0, 2).toUpperCase();
  const assets = {
    handhole: `${prefix}-HH-1`,
    splice: `${prefix}-SC-1`,
    vaultA: `${prefix}-SV-1`,
    vaultB: `${prefix}-SV-2`,
    underground: `${prefix}-UG-1`,
  };
  const job = {
    id: newJobId,
    customer: client.name,
    clientId: client.id,
    project: `${client.name} OSP Expansion`,
    siteName: client.serviceTerritory || "Primary Route",
    siteId: `${prefix}-${nextNum}`,
    address: client.officeAddress || "100 Main Corridor<br>Austin, TX 78701",
    defaultAsset: assets.handhole,
    assets,
    packageRows: structuredClone(jobData["JOB-1045"].packageRows),
  };
  jobData[newJobId] = job;
  jobOverviewPins[newJobId] = { x: 52, y: 48, label: job.siteName, crew: "Alpha Crew" };

  const templateMap = [
    [assets.handhole, "HH-1", "Handhole", 8450, "Ready to Bill", "ready", "Complete", "None", 100],
    [assets.splice, "SC-1", "Splice Case", 6200, "Waiting on Approval", "waiting", "Submitted", "PM / Owner approval", 90],
    [assets.vaultA, "SV-1", "Splice Vault", 14800, "Missing Proof", "missing", "Missing Photo", "Missing open-vault photo", 64],
    [assets.vaultB, "SV-2", "Splice Vault", 18250, "Waiting on Approval", "waiting", "Submitted", "Inspector signoff", 85],
    [assets.underground, "UG-1", "Underground Bore", 24600, "Waiting on Approval", "waiting", "Submitted", "Locate verification", 88],
  ];
  templateMap.forEach(([assetId, baseId, typeLabel, amount, status, statusClass, proof, blocker, progress]) => {
    const base = structuredClone(assetData[baseId]);
    assetData[assetId] = {
      ...base,
      jobId: newJobId,
      asset: `${assetId} ${typeLabel}`,
      status,
      statusClass,
      proof,
      blocker,
      amount,
      progress,
      updated: formatLiveTimestamp(),
      feedUpdated: formatLiveTimestamp(),
    };
  });

  rateSubmissionsByJob[newJobId] = {
    customer: client.name,
    project: job.project,
    version: `${prefix}-2026-v1`,
    status: "Approved",
    submittedBy: activeUserAccount.name,
    approvedBy: "M. Vance / PM",
    effectiveDate: isoToday(),
    contract: `MSA-${prefix}-2026`,
    sow: `SOW-${nextNum}`,
    po: `PO-${nextNum}`,
    locked: false,
    retainage: `${Number(client.retainagePercent) || 5}%`,
    taxJurisdiction: "Travis County / Austin",
    poFunding: 100,
    changeOrderApproval: 100,
    lines: [
      { assetId: assets.handhole, payItem: "Handhole install", quantity: 1, unit: "EA", rate: 8450, status: "Approved", source: `${prefix}-2026-v1` },
      { assetId: assets.splice, payItem: "Splice case prep", quantity: 1, unit: "EA", rate: 6200, status: "Approved", source: `${prefix}-2026-v1` },
      { assetId: assets.vaultA, payItem: "Vault placement", quantity: 1, unit: "EA", rate: 14800, status: "Approved", source: `${prefix}-2026-v1` },
      { assetId: assets.vaultB, payItem: "Vault tie-in", quantity: 1, unit: "EA", rate: 18250, status: "Approved", source: `${prefix}-2026-v1` },
      { assetId: assets.underground, payItem: "Directional bore", quantity: 1, unit: "EA", rate: 24600, status: "Approved", source: `${prefix}-2026-v1` },
    ],
  };

  syncJobSelectOptions(newJobId, job);
  persistActiveJobId(newJobId);
  apiRequest("/api/jobs", {
    method: "POST",
    body: {
      jobId: newJobId,
      clientId: client.id,
      customer: client.name,
      project: job.project,
      siteName: job.siteName,
      address: job.address,
    },
  });
  return newJobId;
}

authUserSelect?.addEventListener("change", async () => {
  const email = authUserSelect.value;
  const response = await apiRequest("/api/auth/login", { method: "POST", body: { email } });
  if (response?.user) {
    activeSessionToken = response.token || "";
    activeUserAccount = response.user;
    window.localStorage?.setItem("crewproof.sessionToken", activeSessionToken);
  } else {
    const fallbackRole = email.includes("pm@") ? "pm" : email.includes("billing@") ? "billing" : "crew";
    activeUserAccount = {
      id: email,
      name: authUserSelect.options[authUserSelect.selectedIndex]?.textContent?.split("(")[0]?.trim() || email,
      email,
      role: fallbackRole,
      title: fallbackRole.toUpperCase(),
      workspaceId: "demo-seed",
    };
  }
  if (authStatusCopy) {
    authStatusCopy.textContent = `Session: ${activeUserAccount.name} / ${activeUserAccount.title || activeUserAccount.role}`;
  }
  if (roleMode && ["crew", "pm", "billing"].includes(activeUserAccount.role)) {
    roleMode.value = activeUserAccount.role;
    window.localStorage?.setItem("crewproof.role", activeUserAccount.role);
  }
  renderCrewChat();
});

rateActionButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const action = button.dataset.rateAction;
    const jobId = activeJobId();
    const rate = rateSubmissionFor(jobId);
    if (!rate) return;

    if (action === "export") {
      const payload = {
        schema: "crewproof.rate-submission.v1",
        jobId,
        exportedAt: new Date().toISOString(),
        exportedBy: activeUserAccount.name,
        rateSubmission: rate,
      };
      payload.custody = evidenceCustodyPacket("closeout.rate-submission", payload);
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
      link.href = url;
      link.download = `crewproof-${jobId}-rate-submission.json`;
      document.body.append(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      if (rateActionStatus) rateActionStatus.textContent = `Rate submission JSON exported for ${jobId}.`;
      return;
    }

    if (action === "audit") {
      const auditEl = document.querySelector("[data-calculation-audit-lines]");
      auditEl?.scrollIntoView({ behavior: "smooth", block: "center" });
      if (rateActionStatus) rateActionStatus.textContent = `Viewing calculation audit for ${jobId} (${Object.keys(rate.lines || {}).length} line items).`;
      return;
    }

    let version = rate.version;
    if (action === "upload") {
      const uploaded = await promptFileUpload({
        accept: ".pdf,.csv,.xlsx,.json",
        workspaceId: "demo-seed",
        jobId,
        documentType: "rate-sheet",
      });
      if (uploaded?.fileName) {
        version = uploaded.fileName.replace(/\.[^.]+$/, "");
      } else {
        version = `${rate.version}-rev`;
      }
    }

    const statusMap = {
      submit: "Submitted",
      approve: "Approved",
      reject: "Rejected",
      lock: "Locked for Billing",
      upload: "Approved",
    };
    const nextStatus = statusMap[action] || rate.status;
    rate.status = nextStatus;
    rate.version = version;
    if (action === "approve" || action === "lock" || action === "upload") {
      rate.approvedBy = `${activeUserAccount.name} (${formatLiveTimestamp()})`;
      Object.values(rate.lines || {}).forEach((line) => {
        line.status = nextStatus === "Locked for Billing" ? "Locked" : "Approved";
      });
    } else if (action === "reject") {
      Object.values(rate.lines || {}).forEach((line) => {
        line.status = "Rejected";
      });
    } else if (action === "submit") {
      rate.submittedBy = `${activeUserAccount.name} (${formatLiveTimestamp()})`;
      Object.values(rate.lines || {}).forEach((line) => {
        line.status = "Submitted";
      });
    }

    await apiRequest(`/api/rates/${encodeURIComponent(jobId)}`, {
      method: "POST",
      body: { action, actor: activeUserAccount.name, version },
    });

    renderRateAdminSections(jobId);
    renderInvoiceLines();
    renderCloseoutSummaries();
    renderBilling(jobId);
    syncCrewCard(jobId);
    renderManagement();
    if (rateActionStatus) {
      rateActionStatus.textContent = `Rate submission for ${jobId} updated: ${rate.status} (${rate.version}).`;
    }
  });
});

downloadPackageZipButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const jobId = activeJobId();
    if (canCallBackend()) {
      const link = document.createElement("a");
      link.href = `/api/packages/${encodeURIComponent(jobId)}/export.zip`;
      link.download = `crewproof-${jobId}-closeout-package.zip`;
      document.body.append(link);
      link.click();
      link.remove();
      if (invoiceStatus) invoiceStatus.textContent = `Closeout package ZIP archive downloaded for ${jobId}.`;
      return;
    }
    const snapshot = fieldSnapshot();
    const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = `crewproof-${jobId}-closeout-package-bundle.json`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    if (invoiceStatus) invoiceStatus.textContent = `Closeout package bundle downloaded for ${jobId}.`;
  });
});

function crewboxPathForItem(item) {
  const parts = [item.name];
  let current = item;
  let guard = 0;
  while (current?.parentId && guard < 20) {
    guard += 1;
    const parent = crewboxState.items.find((entry) => entry.id === current.parentId);
    if (!parent) break;
    parts.unshift(parent.name);
    current = parent;
  }
  return "/" + parts.join("/");
}

function renderCrewboxDrive() {
  if (!crewboxItemsBody) return;
  const folders = crewboxState.items.filter((item) => item.type === "folder" && !item.trashedAt);
  if (crewboxFolderSelect) {
    const currentVal = crewboxFolderSelect.value || "root";
    crewboxFolderSelect.textContent = "";
    const rootOpt = document.createElement("option");
    rootOpt.value = "root";
    rootOpt.textContent = "/ (Workspace Root)";
    crewboxFolderSelect.append(rootOpt);
    folders.forEach((folder) => {
      const opt = document.createElement("option");
      opt.value = folder.id;
      opt.textContent = crewboxPathForItem(folder);
      crewboxFolderSelect.append(opt);
    });
    if ([...crewboxFolderSelect.options].some((opt) => opt.value === currentVal)) {
      crewboxFolderSelect.value = currentVal;
    }
  }
  if (crewboxRuleTarget) {
    const currentTarget = crewboxRuleTarget.value;
    crewboxRuleTarget.textContent = "";
    folders.forEach((folder) => {
      const opt = document.createElement("option");
      opt.value = folder.id;
      opt.textContent = `Move to ${folder.name}`;
      crewboxRuleTarget.append(opt);
    });
    if (currentTarget && [...crewboxRuleTarget.options].some((opt) => opt.value === currentTarget)) {
      crewboxRuleTarget.value = currentTarget;
    }
  }

  const filterMode = crewboxFilterSelect?.value || "all";
  const selectedFolderId = crewboxFolderSelect?.value === "root" ? null : crewboxFolderSelect?.value || null;
  const visibleItems = crewboxState.items.filter((item) => {
    if (filterMode === "trash") return Boolean(item.trashedAt);
    if (item.trashedAt) return false;
    if (filterMode === "active") return (item.parentId || null) === selectedFolderId;
    return true;
  });

  crewboxItemsBody.textContent = "";
  visibleItems.forEach((item) => {
    const tr = document.createElement("tr");
    const links = crewboxState.jobLinks.filter((link) => link.itemId === item.id).map((link) => link.jobId);
    const actionsWrap = document.createElement("span");
    actionsWrap.className = "client-row-actions";

    if (item.type === "spreadsheet" && !item.trashedAt) {
      const openBtn = document.createElement("button");
      openBtn.type = "button";
      openBtn.textContent = "Edit Sheet";
      openBtn.addEventListener("click", () => {
        selectedCrewboxSheetId = item.id;
        renderCrewboxSpreadsheet();
      });
      actionsWrap.append(openBtn);
    }

    if (item.approvalStatus === "pending" && !item.trashedAt) {
      const approveBtn = document.createElement("button");
      approveBtn.type = "button";
      approveBtn.textContent = "Approve";
      approveBtn.addEventListener("click", async () => {
        item.approvalStatus = "approved";
        const approval = crewboxState.approvals.find((a) => a.itemId === item.id && a.status === "pending");
        if (approval) {
          approval.status = "approved";
          await apiRequest("/api/crewbox/action", {
            method: "POST",
            body: { action: "approval.review", approvalId: approval.id, decision: "approved", reviewedBy: activeUserAccount.name },
          });
        }
        renderCrewboxDrive();
      });
      actionsWrap.append(approveBtn);
    }

    const trashBtn = document.createElement("button");
    trashBtn.type = "button";
    trashBtn.textContent = item.trashedAt ? "Restore" : "Trash";
    trashBtn.addEventListener("click", async () => {
      if (item.trashedAt) {
        item.trashedAt = null;
        await apiRequest("/api/crewbox/action", { method: "POST", body: { action: "item.restore", id: item.id } });
      } else {
        item.trashedAt = new Date().toISOString();
        await apiRequest("/api/crewbox/action", { method: "POST", body: { action: "item.trash", id: item.id } });
      }
      renderCrewboxDrive();
    });
    actionsWrap.append(trashBtn);

    renderCells(tr, [
      item.name,
      item.type,
      crewboxPathForItem(item),
      item.approvalStatus || "approved",
      links.length ? links.join(", ") : "-",
      String(item.updatedAt || "").slice(0, 16).replace("T", " "),
      actionsWrap,
    ]);
    crewboxItemsBody.append(tr);
  });

  if (!visibleItems.length) {
    const tr = document.createElement("tr");
    renderCells(tr, ["No items in this view", "-", "-", "-", "-", "-", "-"]);
    crewboxItemsBody.append(tr);
  }

  renderCrewboxSpreadsheet();

  if (crewboxRulesList) {
    crewboxRulesList.textContent = "";
    crewboxState.rules.forEach((rule) => {
      const li = document.createElement("li");
      const targetFolder = crewboxState.items.find((i) => i.id === rule.targetFolderId);
      li.textContent = `${rule.name}: [${(rule.keywords || []).join(", ")}] -> ${targetFolder?.name || "Root"} (${rule.requireApproval ? "Requires approval" : "Auto-approve"})`;
      crewboxRulesList.append(li);
    });
  }

  if (crewboxEventsList) {
    crewboxEventsList.textContent = "";
    crewboxState.events.slice(-6).reverse().forEach((ev) => {
      const li = document.createElement("li");
      li.textContent = `${String(ev.createdAt || "").slice(11, 19)} - ${ev.action}: ${ev.details?.name || ev.details?.jobId || ""}`;
      crewboxEventsList.append(li);
    });
  }
}

function renderCrewboxSpreadsheet() {
  if (!crewboxSheetGrid) return;
  const sheet = crewboxState.items.find((item) => item.id === selectedCrewboxSheetId && item.type === "spreadsheet")
    || crewboxState.items.find((item) => item.type === "spreadsheet" && !item.trashedAt);
  if (!sheet) {
    if (crewboxSheetTitle) crewboxSheetTitle.textContent = "(No spreadsheet selected)";
    crewboxSheetGrid.textContent = "Create or select a spreadsheet to edit cells.";
    return;
  }
  selectedCrewboxSheetId = sheet.id;
  if (crewboxSheetTitle) crewboxSheetTitle.textContent = sheet.name;
  crewboxSheetGrid.textContent = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  (sheet.columns || ["Col 1", "Col 2", "Col 3", "Col 4"]).forEach((col) => {
    const th = document.createElement("th");
    th.textContent = col;
    headRow.append(th);
  });
  thead.append(headRow);
  const tbody = document.createElement("tbody");
  (sheet.rows || []).forEach((rowValues, rIdx) => {
    const tr = document.createElement("tr");
    rowValues.forEach((cellVal, cIdx) => {
      const td = document.createElement("td");
      const input = document.createElement("input");
      input.type = "text";
      input.value = cellVal;
      input.dataset.sheetRow = String(rIdx);
      input.dataset.sheetCol = String(cIdx);
      td.append(input);
      tr.append(td);
    });
    tbody.append(tr);
  });
  table.append(thead, tbody);
  crewboxSheetGrid.append(table);
}

crewboxFolderSelect?.addEventListener("change", renderCrewboxDrive);
crewboxFilterSelect?.addEventListener("change", renderCrewboxDrive);

crewboxNewFolderBtn?.addEventListener("click", async () => {
  const folderCount = crewboxState.items.filter((i) => i.type === "folder").length + 1;
  const name = `Field Packet Folder ${folderCount}`;
  const parentId = crewboxFolderSelect?.value === "root" ? null : crewboxFolderSelect?.value || null;
  const res = await apiRequest("/api/crewbox/action", {
    method: "POST",
    body: { action: "folder.create", workspaceId: "demo-seed", parentId, name },
  });
  const folder = res?.folder || {
    id: `cbx_folder_${Date.now()}`,
    workspaceId: "demo-seed",
    parentId,
    type: "folder",
    name,
    trashedAt: null,
    approvalStatus: "approved",
    updatedAt: new Date().toISOString(),
  };
  if (!crewboxState.items.some((i) => i.id === folder.id)) crewboxState.items.push(folder);
  crewboxState.events.push({ id: `cbe_${Date.now()}`, action: "folder.create", details: { name }, createdAt: new Date().toISOString() });
  renderCrewboxDrive();
});

crewboxUploadFileBtn?.addEventListener("click", async () => {
  const parentId = crewboxFolderSelect?.value === "root" ? null : crewboxFolderSelect?.value || null;
  const uploaded = await promptFileUpload({
    accept: "*/*",
    workspaceId: "demo-seed",
    jobId: activeJobId(),
    documentType: "crewbox-file",
  });
  const fileName = uploaded?.fileName || `field-locate-ticket-${Date.now().toString().slice(-4)}.pdf`;
  const res = await apiRequest("/api/crewbox/action", {
    method: "POST",
    body: {
      action: "file.create",
      workspaceId: "demo-seed",
      parentId,
      name: fileName,
      mimeType: uploaded?.mimeType || "application/pdf",
      sizeBytes: uploaded?.sizeBytes || 12400,
      storagePath: uploaded?.upload?.url || "",
      sha256: uploaded?.upload?.sha256 || "",
    },
  });
  if (res?.file) {
    if (!crewboxState.items.some((i) => i.id === res.file.id)) crewboxState.items.push(res.file);
  } else {
    const matchedRule = crewboxState.rules.find((r) => r.active && r.keywords.some((kw) => fileName.toLowerCase().includes(kw.toLowerCase())));
    const item = {
      id: `cbx_file_${Date.now()}`,
      workspaceId: "demo-seed",
      parentId: matchedRule?.targetFolderId || parentId,
      type: "file",
      name: fileName,
      trashedAt: null,
      approvalStatus: matchedRule?.requireApproval ? "pending" : "approved",
      updatedAt: new Date().toISOString(),
    };
    crewboxState.items.push(item);
  }
  crewboxState.events.push({ id: `cbe_${Date.now()}`, action: "file.upload", details: { name: fileName }, createdAt: new Date().toISOString() });
  renderCrewboxDrive();
});

crewboxNewSheetBtn?.addEventListener("click", async () => {
  const parentId = crewboxFolderSelect?.value === "root" ? null : crewboxFolderSelect?.value || null;
  const name = `${activeJobId()} Field Production Sheet`;
  const res = await apiRequest("/api/crewbox/action", {
    method: "POST",
    body: { action: "spreadsheet.create", workspaceId: "demo-seed", parentId, name },
  });
  const sheet = res?.spreadsheet || {
    id: `cbx_sheet_${Date.now()}`,
    workspaceId: "demo-seed",
    parentId,
    type: "spreadsheet",
    name,
    trashedAt: null,
    approvalStatus: "approved",
    columns: ["Asset", "Pay Item", "Quantity", "Status"],
    rows: [
      [currentAssetId(), "Handhole / Bore Line", "1", "Ready"],
      ["SV-1", "Vault Placement", "1", "Pending"],
    ],
    updatedAt: new Date().toISOString(),
  };
  if (!crewboxState.items.some((i) => i.id === sheet.id)) crewboxState.items.push(sheet);
  selectedCrewboxSheetId = sheet.id;
  crewboxState.events.push({ id: `cbe_${Date.now()}`, action: "spreadsheet.create", details: { name }, createdAt: new Date().toISOString() });
  renderCrewboxDrive();
});

crewboxSaveSheetBtn?.addEventListener("click", async () => {
  const sheet = crewboxState.items.find((item) => item.id === selectedCrewboxSheetId && item.type === "spreadsheet");
  if (!sheet || !crewboxSheetGrid) return;
  const inputs = crewboxSheetGrid.querySelectorAll("input[data-sheet-row]");
  inputs.forEach((input) => {
    const r = Number(input.dataset.sheetRow);
    const c = Number(input.dataset.sheetCol);
    if (sheet.rows[r]) sheet.rows[r][c] = input.value;
  });
  sheet.updatedAt = new Date().toISOString();
  await apiRequest("/api/crewbox/action", {
    method: "POST",
    body: { action: "spreadsheet.save", id: sheet.id, columns: sheet.columns, rows: sheet.rows },
  });
  crewboxState.events.push({ id: `cbe_${Date.now()}`, action: "spreadsheet.save", details: { name: sheet.name }, createdAt: sheet.updatedAt });
  renderCrewboxDrive();
  if (workspaceStatus) workspaceStatus.textContent = `Saved spreadsheet "${sheet.name}" in CrewBox Drive.`;
});

crewboxLinkJobBtn?.addEventListener("click", async () => {
  const jobId = crewboxJobLinkSelect?.value || activeJobId();
  const itemId = selectedCrewboxSheetId || crewboxState.items.find((i) => !i.trashedAt)?.id;
  if (!itemId) return;
  if (!crewboxState.jobLinks.some((l) => l.itemId === itemId && l.jobId === jobId)) {
    crewboxState.jobLinks.push({ id: `cbl_${Date.now()}`, workspaceId: "demo-seed", itemId, jobId });
  }
  await apiRequest("/api/crewbox/action", {
    method: "POST",
    body: { action: "job.link", workspaceId: "demo-seed", itemId, jobId },
  });
  crewboxState.events.push({ id: `cbe_${Date.now()}`, action: "job.link", details: { jobId }, createdAt: new Date().toISOString() });
  renderCrewboxDrive();
});

crewboxEmptyTrashBtn?.addEventListener("click", async () => {
  crewboxState.items = crewboxState.items.filter((item) => !item.trashedAt);
  await apiRequest("/api/crewbox/action", {
    method: "POST",
    body: { action: "trash.empty", workspaceId: "demo-seed" },
  });
  renderCrewboxDrive();
});

crewboxRuleForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = crewboxRuleName?.value?.trim();
  const keywords = (crewboxRuleKeywords?.value || "").split(",").map((s) => s.trim()).filter(Boolean);
  const targetFolderId = crewboxRuleTarget?.value || null;
  const requireApproval = Boolean(crewboxRuleApproval?.checked);
  if (!name || !keywords.length) return;
  const res = await apiRequest("/api/crewbox/action", {
    method: "POST",
    body: { action: "rule.upsert", workspaceId: "demo-seed", name, keywords, targetFolderId, requireApproval },
  });
  const rule = res?.rule || {
    id: `cbr_${Date.now()}`,
    workspaceId: "demo-seed",
    name,
    keywords,
    targetFolderId,
    requireApproval,
    active: true,
  };
  crewboxState.rules.push(rule);
  if (crewboxRuleName) crewboxRuleName.value = "";
  if (crewboxRuleKeywords) crewboxRuleKeywords.value = "";
  renderCrewboxDrive();
});

function renderCrewChat() {
  if (!chatMessagesContainer) return;
  const currentRoom = chatRoomSelect?.value || "company";
  const roomMessages = crewChatState.messages
    .filter((m) => m.room === currentRoom)
    .sort((a, b) => a.seq - b.seq);

  chatMessagesContainer.textContent = "";
  roomMessages.forEach((msg) => {
    const div = document.createElement("div");
    div.className = "chat-msg-item";
    const meta = document.createElement("div");
    meta.className = "chat-msg-meta";
    const strong = document.createElement("strong");
    strong.textContent = `#${msg.seq} ${msg.authorName}`;
    const timeSpan = document.createElement("span");
    timeSpan.textContent = String(msg.createdAt || "").slice(11, 16);
    const linkBtn = document.createElement("button");
    linkBtn.type = "button";
    linkBtn.className = "chat-link-job-btn";
    const targetJob = activeJobId();
    const isLinked = crewChatState.jobLinks.some((l) => l.messageId === msg.id && l.jobId === targetJob);
    linkBtn.textContent = isLinked ? `Linked to ${targetJob}` : `Link to ${targetJob}`;
    linkBtn.addEventListener("click", async () => {
      if (isLinked) {
        crewChatState.jobLinks = crewChatState.jobLinks.filter((l) => !(l.messageId === msg.id && l.jobId === targetJob));
        await apiRequest("/api/chat/action", { method: "POST", body: { action: "job.unlink", messageId: msg.id, jobId: targetJob } });
      } else {
        crewChatState.jobLinks.push({
          id: `cjl_${Date.now()}`,
          messageId: msg.id,
          jobId: targetJob,
          room: msg.room,
          source: "manual",
          linkedBy: activeUserAccount.name,
          createdAt: new Date().toISOString(),
        });
        await apiRequest("/api/chat/action", { method: "POST", body: { action: "job.link", messageId: msg.id, jobId: targetJob, linkedBy: activeUserAccount.name } });
      }
      renderCrewChat();
    });
    meta.append(strong, timeSpan, linkBtn);
    const textP = document.createElement("p");
    textP.textContent = msg.text;
    div.append(meta, textP);
    chatMessagesContainer.append(div);
  });

  if (!roomMessages.length) {
    const empty = document.createElement("p");
    empty.textContent = `No messages in ${currentRoom} yet. Start the conversation below.`;
    chatMessagesContainer.append(empty);
  }

  const jobId = activeJobId();
  if (chatLogJobLabel) chatLogJobLabel.textContent = jobId;
  if (chatJobLogBody) {
    chatJobLogBody.textContent = "";
    const links = crewChatState.jobLinks.filter((l) => l.jobId === jobId);
    links.forEach((link) => {
      const msg = crewChatState.messages.find((m) => m.id === link.messageId);
      if (!msg) return;
      const tr = document.createElement("tr");
      const unlinkBtn = document.createElement("button");
      unlinkBtn.type = "button";
      unlinkBtn.textContent = "Unlink";
      unlinkBtn.addEventListener("click", async () => {
        crewChatState.jobLinks = crewChatState.jobLinks.filter((l) => l.id !== link.id);
        await apiRequest("/api/chat/action", { method: "POST", body: { action: "job.unlink", messageId: msg.id, jobId } });
        renderCrewChat();
      });
      renderCells(tr, [
        msg.room,
        msg.authorName,
        msg.text,
        link.source,
        String(msg.createdAt || "").slice(0, 16).replace("T", " "),
        unlinkBtn,
      ]);
      chatJobLogBody.append(tr);
    });
    if (!links.length) {
      const tr = document.createElement("tr");
      renderCells(tr, ["-", "-", `No chat messages linked to ${jobId}`, "-", "-", "-"]);
      chatJobLogBody.append(tr);
    }
  }

  if (chatUnreadBadge) {
    const summary = crewChatState.summaries.find((s) => s.id === currentRoom);
    const unread = summary ? summary.unreadCount : 0;
    chatUnreadBadge.textContent = `${unread} unread`;
  }
}

chatRoomSelect?.addEventListener("change", renderCrewChat);

chatMarkReadBtn?.addEventListener("click", async () => {
  const room = chatRoomSelect?.value || "company";
  await apiRequest("/api/chat/action", {
    method: "POST",
    body: { action: "room.markRead", workspaceId: "demo-seed", room, userId: activeUserAccount.email },
  });
  const summary = crewChatState.summaries.find((s) => s.id === room);
  if (summary) summary.unreadCount = 0;
  renderCrewChat();
});

chatForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const text = chatInput?.value?.trim();
  if (!text) return;
  const room = chatRoomSelect?.value || "company";
  const clientId = `cid_${Date.now()}`;
  if (chatInput) chatInput.value = "";

  const res = await apiRequest("/api/chat/action", {
    method: "POST",
    body: {
      action: "message.post",
      workspaceId: "demo-seed",
      room,
      authorId: activeUserAccount.email,
      authorName: `${activeUserAccount.name} (${activeUserAccount.title || activeUserAccount.role})`,
      text,
      clientId,
    },
  });

  if (res?.message) {
    if (!crewChatState.messages.some((m) => m.id === res.message.id)) {
      crewChatState.messages.push(res.message);
    }
    const chatSync = await apiRequest(`/api/chat?workspaceId=demo-seed&userId=${encodeURIComponent(activeUserAccount.email)}&jobId=${encodeURIComponent(activeJobId())}`);
    if (chatSync?.jobLinks) crewChatState.jobLinks = chatSync.jobLinks;
    if (chatSync?.summaries) crewChatState.summaries = chatSync.summaries;
  } else {
    const roomMsgs = crewChatState.messages.filter((m) => m.room === room);
    const nextSeq = roomMsgs.reduce((max, m) => Math.max(max, m.seq || 0), 0) + 1;
    const mentions = [...new Set([...text.matchAll(/@?(JOB-\d{3,6})/gi)].map((m) => m[1].toUpperCase()))];
    const msg = {
      id: `msg_${Date.now()}`,
      room,
      seq: nextSeq,
      authorId: activeUserAccount.email,
      authorName: `${activeUserAccount.name} (${activeUserAccount.title || activeUserAccount.role})`,
      text,
      mentions,
      createdAt: new Date().toISOString(),
    };
    crewChatState.messages.push(msg);
    if (room.startsWith("job:")) {
      const rJob = room.slice(4).toUpperCase();
      crewChatState.jobLinks.push({ id: `cjl_${Date.now()}_r`, messageId: msg.id, jobId: rJob, room, source: "job-room", linkedBy: activeUserAccount.email, createdAt: msg.createdAt });
    }
    mentions.forEach((mJob) => {
      if (!crewChatState.jobLinks.some((l) => l.messageId === msg.id && l.jobId === mJob)) {
        crewChatState.jobLinks.push({ id: `cjl_${Date.now()}_${mJob}`, messageId: msg.id, jobId: mJob, room, source: "mention", linkedBy: activeUserAccount.email, createdAt: msg.createdAt });
      }
    });
  }

  const asset = assetData[currentAssetId()];
  if (asset) {
    addAssetEvent(asset, `${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} Chat`, `${activeUserAccount.name}: ${text}`);
    renderAsset(currentAssetId());
  }
  renderCrewChat();
});

async function hydrateFromBackend() {
  if (!canCallBackend()) return;
  const payload = await apiRequest("/api/state");
  if (!payload?.state) return;
  const s = payload.state;
  if (s.jobs) {
    Object.entries(s.jobs).forEach(([id, job]) => {
      if (!jobData[id]) {
        jobData[id] = {
          ...job,
          packageRows: job.packageRows || structuredClone(jobData["JOB-1045"].packageRows),
        };
        syncJobSelectOptions(id, jobData[id]);
      }
    });
  }
  if (s.assets) {
    Object.entries(s.assets).forEach(([id, asset]) => {
      assetData[id] = { ...(assetData[id] || {}), ...asset };
    });
  }
  if (s.rateSubmissionsByJob) {
    Object.entries(s.rateSubmissionsByJob).forEach(([id, rate]) => {
      rateSubmissionsByJob[id] = rate;
    });
  }
  if (s.crewbox) {
    crewboxState = s.crewbox;
  }
  if (s.chat) {
    crewChatState = {
      ...crewChatState,
      ...s.chat,
    };
  }
  renderCrewboxDrive();
  renderCrewChat();
  refreshFieldDerivedViews(currentAssetId());
}

renderCrewboxDrive();
renderCrewChat();
hydrateFromBackend();


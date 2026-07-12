import type { Crew811Attachment, Crew811ImportInput, Crew811Response, Crew811Store, Crew811Ticket } from "./types";
import { match811TicketToJob, statusForMatch } from "./matching";
import { assertTicketClosable, positiveResponseStatus } from "./positiveResponse";
import { renewalRequiredAt } from "./renewals";

export const crew811ApiRoutes = {
  import: "POST /api/811/import",
  list: "GET /api/811/tickets",
  detail: "GET /api/811/tickets/:id",
  update: "PATCH /api/811/tickets/:id",
  linkJob: "POST /api/811/tickets/:id/link-job",
  assign: "POST /api/811/tickets/:id/assign",
  fieldProof: "POST /api/811/tickets/:id/field-proof",
  positiveResponse: "POST /api/811/tickets/:id/positive-response",
  renew: "POST /api/811/tickets/:id/renew",
  close: "POST /api/811/tickets/:id/close",
} as const;

function id(prefix: string) {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

function now() {
  return new Date().toISOString();
}

function audit(store: Crew811Store, tenantId: string, ticket_id: string, event_type: string, message: string, metadata_json = {}) {
  store.events.push({ id: id("evt"), tenantId, ticket_id, event_type, message, metadata_json, created_at: now() });
}

function tenantTicket(store: Crew811Store, tenantId: string, ticketId: string) {
  const ticket = store.tickets.find((item) => item.id === ticketId && item.tenantId === tenantId);
  if (!ticket) throw new Error("811 ticket not found for tenant");
  return ticket;
}

export function import811Ticket(store: Crew811Store, input: Crew811ImportInput) {
  if (!input.tenantId) throw new Error("811 ticket import requires tenantId");
  const timestamp = now();
  const existing = store.tickets.find((ticket) => ticket.tenantId === input.tenantId && ticket.ticket_number === input.ticket_number);
  const base = {
    state: input.state || "",
    county: input.county || "",
    city: input.city || "",
    street: input.street || input.location_text || "",
    cross_street: input.cross_street || "",
    work_description: input.work_description || "",
    excavator_name: input.excavator_name || "",
    company_id: input.company_id || "",
    excavator_id: input.excavator_id || "",
    office_name: input.office_name || "",
    company_type: input.company_type || "",
    call_back_time: input.call_back_time || "",
    field_contact: input.field_contact || "",
    field_contact_type: input.field_contact_type || "",
    field_contact_method: input.field_contact_method || "",
    working_for: input.working_for || "",
    work_type: input.work_type || "",
    customer_name: input.customer_name || "",
    provider_name: input.provider_name || "",
    due_at: input.due_at || timestamp,
    expires_at: input.expires_at || timestamp,
    renewal_required_at: renewalRequiredAt(input.expires_at || timestamp),
    latitude: input.latitude,
    longitude: input.longitude,
    geometry_json: input.geometry_json || null,
    raw_payload_json: { raw_email_body: input.raw_email_body, raw_pdf_text: input.raw_pdf_text, input },
    updated_at: timestamp,
  };

  const ticket: Crew811Ticket = existing
    ? Object.assign(existing, base)
    : {
        id: id("811"),
        tenantId: input.tenantId,
        ticket_number: input.ticket_number,
        status: input.geometry_json ? "NEW" : "NEEDS_REVIEW",
        priority: "NORMAL",
        assigned_crew_id: null,
        assigned_user_id: null,
        linked_job_id: null,
        positive_response_status: "PENDING",
        created_at: timestamp,
        ...base,
      };

  if (!existing) store.tickets.push(ticket);

  const match = match811TicketToJob(ticket, store.jobs);
  ticket.status = statusForMatch(match.confidence);
  if (match.confidence >= 0.85 && match.matchedJobId) {
    ticket.linked_job_id = match.matchedJobId;
    store.jobLinks.push({ id: id("link"), tenantId: ticket.tenantId, ticket_id: ticket.id, job_id: match.matchedJobId, confidence: match.confidence, reason: match.reason, created_at: timestamp });
  } else if (!ticket.geometry_json) {
    ticket.status = "NEEDS_REVIEW";
  }

  audit(store, ticket.tenantId, ticket.id, existing ? "IMPORT_UPDATED" : "IMPORT_CREATED", match.reason, { confidence: match.confidence });
  return ticket;
}

export function list811Tickets(store: Crew811Store, tenantId: string) {
  return store.tickets.filter((ticket) => ticket.tenantId === tenantId);
}

export function update811Ticket(store: Crew811Store, tenantId: string, ticketId: string, patch: Partial<Crew811Ticket>) {
  const ticket = tenantTicket(store, tenantId, ticketId);
  Object.assign(ticket, { ...patch, tenantId, id: ticket.id, updated_at: now() });
  audit(store, tenantId, ticket.id, "TICKET_UPDATED", "811 ticket updated", patch);
  return ticket;
}

export function link811TicketToJob(store: Crew811Store, tenantId: string, ticketId: string, jobId: string, reason = "Manual link") {
  const ticket = tenantTicket(store, tenantId, ticketId);
  const job = store.jobs.find((candidate) => candidate.tenantId === tenantId && candidate.id === jobId);
  if (!job) throw new Error("Cannot link 811 ticket to a job outside tenant");
  ticket.linked_job_id = jobId;
  ticket.status = "MATCHED_TO_JOB";
  ticket.updated_at = now();
  store.jobLinks.push({ id: id("link"), tenantId, ticket_id: ticket.id, job_id: jobId, confidence: 1, reason, created_at: now() });
  audit(store, tenantId, ticket.id, "JOB_LINKED", reason, { jobId });
  return ticket;
}

export function assign811Ticket(store: Crew811Store, tenantId: string, ticketId: string, crewId: string, userId?: string) {
  const ticket = tenantTicket(store, tenantId, ticketId);
  ticket.assigned_crew_id = crewId;
  ticket.assigned_user_id = userId || null;
  ticket.status = "ASSIGNED";
  ticket.updated_at = now();
  audit(store, tenantId, ticket.id, "ASSIGNED", "811 ticket assigned", { crewId, userId });
  return ticket;
}

export function add811FieldProof(store: Crew811Store, tenantId: string, ticketId: string, proof: Omit<Crew811Attachment, "id" | "tenantId" | "ticket_id" | "created_at">) {
  const ticket = tenantTicket(store, tenantId, ticketId);
  const attachment: Crew811Attachment = { id: id("att"), tenantId, ticket_id: ticket.id, created_at: now(), linked_job_id: ticket.linked_job_id, ...proof };
  store.attachments.push(attachment);
  ticket.status = "WAITING_ON_RESPONSE";
  ticket.updated_at = now();
  audit(store, tenantId, ticket.id, "FIELD_PROOF_ADDED", "Field proof captured and attached to closeout package", { attachmentId: attachment.id });
  return attachment;
}

export function add811PositiveResponse(store: Crew811Store, tenantId: string, ticketId: string, response: Omit<Crew811Response, "id" | "tenantId" | "ticket_id" | "created_at">) {
  const ticket = tenantTicket(store, tenantId, ticketId);
  const saved: Crew811Response = { id: id("resp"), tenantId, ticket_id: ticket.id, created_at: now(), ...response };
  store.responses.push(saved);
  const responses = store.responses.filter((item) => item.tenantId === tenantId && item.ticket_id === ticket.id);
  ticket.positive_response_status = positiveResponseStatus(responses, ticket.override_reason);
  ticket.status = ticket.positive_response_status === "READY" ? "CLEAR" : response.response_status === "CONFLICT" ? "CONFLICT" : "WAITING_ON_RESPONSE";
  ticket.updated_at = now();
  audit(store, tenantId, ticket.id, "POSITIVE_RESPONSE", "Positive response recorded", response);
  return saved;
}

export function renew811Ticket(store: Crew811Store, tenantId: string, ticketId: string, renewal_ticket_number?: string) {
  const ticket = tenantTicket(store, tenantId, ticketId);
  store.renewals.push({ id: id("ren"), tenantId, ticket_id: ticket.id, previous_ticket_number: ticket.ticket_number, renewal_ticket_number, status: renewal_ticket_number ? "RENEWED" : "REQUESTED", requested_at: now(), completed_at: renewal_ticket_number ? now() : undefined, created_at: now() });
  ticket.status = renewal_ticket_number ? "NEW" : "RENEWAL_NEEDED";
  ticket.updated_at = now();
  audit(store, tenantId, ticket.id, "RENEWAL", "811 renewal processed", { renewal_ticket_number });
  return ticket;
}

export function close811Ticket(store: Crew811Store, tenantId: string, ticketId: string, overrideReason?: string) {
  const ticket = tenantTicket(store, tenantId, ticketId);
  if (overrideReason) ticket.override_reason = overrideReason;
  const responses = store.responses.filter((item) => item.tenantId === tenantId && item.ticket_id === ticket.id);
  assertTicketClosable(ticket, responses);
  ticket.status = "CLOSED";
  ticket.updated_at = now();
  audit(store, tenantId, ticket.id, "CLOSED", "811 ticket closed", { overrideReason });
  return ticket;
}

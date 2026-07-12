import type { Crew811Attachment, Crew811Response, Crew811Ticket } from "../types";
import { canCloseTicket } from "../status";
import { Crew811ProofUpload } from "./Crew811ProofUpload";

interface Props {
  ticket: Crew811Ticket;
  responses: Crew811Response[];
  onAction: (action: "link" | "assign" | "clear" | "conflict" | "renew" | "close") => void;
  onProof: (proof: Omit<Crew811Attachment, "id" | "tenantId" | "ticket_id" | "created_at">) => void;
}

export function Crew811TicketPanel({ ticket, responses, onAction, onProof }: Props) {
  const renewalHours = Math.ceil((new Date(ticket.expires_at).getTime() - Date.now()) / 36e5);

  return (
    <aside className="crew811-ticket-panel" aria-label="Selected 811 ticket">
      <h2>{ticket.ticket_number}</h2>
      <dl>
        <div><dt>811 Center</dt><dd>{ticket.provider_name || "811"}</dd></div>
        <div><dt>Company ID</dt><dd>{ticket.company_id || "Not on file"}</dd></div>
        <div><dt>Excavator ID</dt><dd>{ticket.excavator_id || "Not on file"}</dd></div>
        <div><dt>Excavator</dt><dd>{ticket.excavator_name || "Not on file"}</dd></div>
        <div><dt>Working For</dt><dd>{ticket.working_for || ticket.customer_name}</dd></div>
        <div><dt>Work Type</dt><dd>{ticket.work_type || ticket.work_description}</dd></div>
        <div><dt>Address</dt><dd>{ticket.street}, {ticket.city}</dd></div>
        <div><dt>Call Back Time</dt><dd>{ticket.call_back_time || "Not on file"}</dd></div>
        <div><dt>Field Contact</dt><dd>{[ticket.field_contact, ticket.field_contact_type, ticket.field_contact_method].filter(Boolean).join(" / ") || "Not on file"}</dd></div>
        <div><dt>Due</dt><dd>{ticket.due_at}</dd></div>
        <div><dt>Expires</dt><dd>{ticket.expires_at}</dd></div>
        <div><dt>Status</dt><dd>{ticket.status}</dd></div>
        <div><dt>Linked job</dt><dd>{ticket.linked_job_id || "Unmatched"}</dd></div>
        <div><dt>Assigned crew</dt><dd>{ticket.assigned_crew_id || "Unassigned"}</dd></div>
        <div><dt>Positive response</dt><dd>{ticket.positive_response_status || "PENDING"}</dd></div>
        <div><dt>Renewal countdown</dt><dd>{renewalHours} hours</dd></div>
      </dl>
      <div className="crew811-actions">
        <button type="button" onClick={() => onAction("link")}>Link to job</button>
        <button type="button" onClick={() => onAction("assign")}>Assign crew</button>
        <button type="button" onClick={() => onAction("clear")}>Mark clear</button>
        <button type="button" onClick={() => onAction("conflict")}>Mark conflict</button>
        <button type="button" onClick={() => onAction("renew")}>Renew ticket</button>
        <button type="button" disabled={!canCloseTicket(ticket, responses)} onClick={() => onAction("close")}>Close ticket</button>
      </div>
      <Crew811ProofUpload onProof={onProof} />
    </aside>
  );
}

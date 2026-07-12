import type { Crew811Response, Crew811Ticket, Crew811TicketStatus } from "./types";

export const CREW811_STATUSES: Crew811TicketStatus[] = [
  "NEW",
  "NEEDS_REVIEW",
  "MATCHED_TO_JOB",
  "ASSIGNED",
  "IN_FIELD",
  "WAITING_ON_RESPONSE",
  "CLEAR",
  "CONFLICT",
  "EXPIRED",
  "RENEWAL_NEEDED",
  "CLOSED",
];

export const CREW811_STATUS_COLORS: Record<Crew811TicketStatus, string> = {
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

const allowedCloseResponses = new Set(["CLEAR", "MARKED"]);

export function hasSafePositiveResponses(responses: Crew811Response[], overrideReason?: string | null) {
  if (overrideReason && overrideReason.trim().length >= 8) return true;
  if (!responses.length) return false;
  return responses.every((response) => allowedCloseResponses.has(response.response_status));
}

export function canStartFieldWork(ticket: Crew811Ticket, overrideApproved = false) {
  if (overrideApproved) return true;
  return ticket.status === "CLEAR" || ticket.positive_response_status === "READY";
}

export function canCloseTicket(ticket: Crew811Ticket, responses: Crew811Response[]) {
  if (ticket.status === "EXPIRED") return false;
  return hasSafePositiveResponses(responses, ticket.override_reason);
}

export function canCloseLinkedJob(tickets: Crew811Ticket[]) {
  return tickets.every((ticket) => ticket.status === "CLOSED" || ticket.status === "CLEAR");
}

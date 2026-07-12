import type { Crew811Response, Crew811Ticket } from "./types";
import { canCloseTicket, hasSafePositiveResponses } from "./status";

export function positiveResponseStatus(responses: Crew811Response[], overrideReason?: string | null) {
  if (hasSafePositiveResponses(responses, overrideReason)) return "READY";
  if (responses.some((response) => response.response_status === "CONFLICT" || response.response_status === "DAMAGED_FACILITY")) {
    return "BLOCKED";
  }
  return "PENDING";
}

export function assertTicketClosable(ticket: Crew811Ticket, responses: Crew811Response[]) {
  if (!canCloseTicket(ticket, responses)) {
    throw new Error("811 ticket cannot close until required positive responses are CLEAR, MARKED, or overridden.");
  }
}

import type { Crew811Ticket } from "./types";

const fortyEightHoursMs = 48 * 60 * 60 * 1000;

export function renewalRequiredAt(expiresAt: string) {
  return new Date(new Date(expiresAt).getTime() - fortyEightHoursMs).toISOString();
}

export function renewalStatus(ticket: Crew811Ticket, now = new Date()): Crew811Ticket["status"] {
  if (ticket.status === "CLOSED") return ticket.status;
  const expires = new Date(ticket.expires_at).getTime();
  const current = now.getTime();
  if (expires < current) return "EXPIRED";
  if (expires - current <= fortyEightHoursMs) return "RENEWAL_NEEDED";
  return ticket.status;
}

export function check811Renewals(tickets: Crew811Ticket[], now = new Date()) {
  return tickets.map((ticket) => {
    const nextStatus = renewalStatus(ticket, now);
    if (nextStatus === ticket.status) return ticket;
    return { ...ticket, status: nextStatus, updated_at: now.toISOString() };
  });
}

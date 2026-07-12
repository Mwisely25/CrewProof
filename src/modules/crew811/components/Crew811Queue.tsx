import type { Crew811Ticket } from "../types";

interface Props {
  tickets: Crew811Ticket[];
  selectedId?: string;
  onSelect: (ticketId: string) => void;
}

export function Crew811Queue({ tickets, selectedId, onSelect }: Props) {
  return (
    <aside className="crew811-queue" aria-label="811 ticket queue">
      <h1>Crew811</h1>
      <p>Tickets, locates, renewals, positive response, and proof.</p>
      {tickets.map((ticket) => (
        <button
          type="button"
          key={ticket.id}
          className={ticket.id === selectedId ? "is-selected" : ""}
          onClick={() => onSelect(ticket.id)}
        >
          <b>{ticket.ticket_number}</b>
          <span>{ticket.street || ticket.city}</span>
          <small>{ticket.status}</small>
        </button>
      ))}
    </aside>
  );
}

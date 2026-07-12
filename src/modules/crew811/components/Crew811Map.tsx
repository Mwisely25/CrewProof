import type { Crew811Ticket } from "../types";
import { CREW811_STATUS_COLORS } from "../status";

interface Props {
  tickets: Crew811Ticket[];
  selectedId?: string;
  onSelect: (ticketId: string) => void;
}

export function Crew811Map({ tickets, selectedId, onSelect }: Props) {
  return (
    <section className="crew811-map" aria-label="Map-first 811 ticket layer">
      <img src="/assets/crewproof-locate-map-crop.png" alt="CrewProof telecom map with 811 ticket layer" />
      {tickets.map((ticket, index) => (
        <button
          type="button"
          key={ticket.id}
          className={ticket.id === selectedId ? "crew811-pin is-selected" : "crew811-pin"}
          style={{
            background: CREW811_STATUS_COLORS[ticket.status],
            left: `${ticket.longitude ? 50 + index * 7 : 35 + index * 8}%`,
            top: `${ticket.latitude ? 35 + index * 9 : 45 + index * 6}%`,
          }}
          onClick={() => onSelect(ticket.id)}
        >
          {ticket.ticket_number}
        </button>
      ))}
    </section>
  );
}

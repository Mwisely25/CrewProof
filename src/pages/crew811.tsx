import { useMemo, useState } from "react";
import { add811FieldProof, add811PositiveResponse, assign811Ticket, close811Ticket, link811TicketToJob, renew811Ticket } from "../modules/crew811/api";
import { Crew811Legend } from "../modules/crew811/components/Crew811Legend";
import { Crew811Map } from "../modules/crew811/components/Crew811Map";
import { Crew811Queue } from "../modules/crew811/components/Crew811Queue";
import { Crew811TicketPanel } from "../modules/crew811/components/Crew811TicketPanel";
import type { Crew811Store } from "../modules/crew811/types";

const initialStore: Crew811Store = {
  tickets: [
    {
      id: "811-1",
      tenantId: "tenant-windstream",
      ticket_number: "FL811-24-1194",
      state: "FL",
      county: "BROWARD",
      city: "HALLANDALE BEACH",
      street: "1835 E HALLANDALE BEACH BLVD",
      work_description: "WR 908792 HIGHLANDS 21 LATERAL HARDENING",
      excavator_name: "NEXT LEVEL UNDERGROUND",
      company_id: "248654",
      excavator_id: "544490",
      office_name: "NEXT LEVEL UNDERGROUND",
      company_type: "CONTRACTOR",
      call_back_time: "ANYTIME",
      field_contact: "ANDREI KRILOV",
      field_contact_type: "Cell",
      field_contact_method: "(754) 260-7248",
      working_for: "FPL MASTEC SSUP",
      work_type: "WR 908792 HIGHLANDS 21 LATERAL HARDENING",
      customer_name: "WINDSTREAM",
      provider_name: "Florida 811",
      status: "RENEWAL_NEEDED",
      priority: "HIGH",
      due_at: "2026-06-25T16:00:00.000Z",
      expires_at: "2026-06-27T16:00:00.000Z",
      renewal_required_at: "2026-06-25T16:00:00.000Z",
      latitude: 30.210654,
      longitude: -97.951234,
      geometry_json: { type: "LineString", coordinates: [] },
      assigned_crew_id: "alpha",
      assigned_user_id: null,
      linked_job_id: "JOB-1045",
      positive_response_status: "PENDING",
      created_at: "2026-06-24T14:00:00.000Z",
      updated_at: "2026-06-25T14:00:00.000Z",
    },
  ],
  events: [],
  responses: [],
  attachments: [],
  jobLinks: [],
  renewals: [],
  jobs: [
    {
      id: "JOB-1045",
      tenantId: "tenant-windstream",
      customer_name: "WINDSTREAM",
      city: "AUSTIN",
      county: "TRAVIS",
      street: "PINE HILL RD",
      location_text: "1250 PINE HILL RD AUSTIN TX",
      work_description: "Underground fiber and bore path verification",
      assigned_crew_id: "alpha",
      latitude: 30.210654,
      longitude: -97.951234,
    },
  ],
};

export default function Crew811Page() {
  const [store, setStore] = useState(initialStore);
  const [selectedId, setSelectedId] = useState(initialStore.tickets[0]?.id);
  const selected = useMemo(() => store.tickets.find((ticket) => ticket.id === selectedId) || store.tickets[0], [selectedId, store]);
  const responses = store.responses.filter((response) => response.ticket_id === selected?.id);

  function mutate(action: (draft: Crew811Store) => void) {
    const draft: Crew811Store = JSON.parse(JSON.stringify(store));
    action(draft);
    setStore(draft);
  }

  return (
    <main className="crew811-page">
      <Crew811Queue tickets={store.tickets} selectedId={selected?.id} onSelect={setSelectedId} />
      <Crew811Map tickets={store.tickets} selectedId={selected?.id} onSelect={setSelectedId} />
      <Crew811Legend />
      {selected && (
        <Crew811TicketPanel
          ticket={selected}
          responses={responses}
          onAction={(action) => mutate((draft) => {
            if (action === "link") link811TicketToJob(draft, selected.tenantId, selected.id, "JOB-1045");
            if (action === "assign") assign811Ticket(draft, selected.tenantId, selected.id, "alpha");
            if (action === "clear") add811PositiveResponse(draft, selected.tenantId, selected.id, { utility_name: "Telecom", response_status: "CLEAR", responded_at: new Date().toISOString() });
            if (action === "conflict") add811PositiveResponse(draft, selected.tenantId, selected.id, { utility_name: "Power", response_status: "CONFLICT", response_text: "Conflict near bore path" });
            if (action === "renew") renew811Ticket(draft, selected.tenantId, selected.id);
            if (action === "close") close811Ticket(draft, selected.tenantId, selected.id);
          })}
          onProof={(proof) => mutate((draft) => add811FieldProof(draft, selected.tenantId, selected.id, proof))}
        />
      )}
    </main>
  );
}

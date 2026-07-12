import type { Crew811Attachment } from "../types";

interface Props {
  onProof: (proof: Omit<Crew811Attachment, "id" | "tenantId" | "ticket_id" | "created_at">) => void;
}

export function Crew811ProofUpload({ onProof }: Props) {
  return (
    <form
      className="crew811-proof"
      onSubmit={(event) => {
        event.preventDefault();
        onProof({
          attachment_type: "PHOTO",
          url: "field-photo://new-capture",
          gps_latitude: 30.210654,
          gps_longitude: -97.951234,
          technician_notes: "Locate marks verified in field.",
          marked_utilities: ["fiber", "power", "gas"],
          captured_at: new Date().toISOString(),
        });
      }}
    >
      <button type="submit">Upload proof</button>
    </form>
  );
}

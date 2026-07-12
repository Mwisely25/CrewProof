import { CREW811_STATUS_COLORS } from "../status";

export function Crew811Legend() {
  return (
    <aside className="crew811-legend" aria-label="811 ticket status legend">
      <h2>811 Legend</h2>
      {Object.entries(CREW811_STATUS_COLORS).map(([status, color]) => (
        <span key={status}>
          <i style={{ background: color }} />
          {status.replaceAll("_", " ")}
        </span>
      ))}
    </aside>
  );
}

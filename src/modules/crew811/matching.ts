import type { Crew811JobMatchCandidate, Crew811MatchResult, Crew811Ticket } from "./types";

function normalize(value?: string | null) {
  return (value || "").toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
}

function includesEither(left?: string, right?: string) {
  const a = normalize(left);
  const b = normalize(right);
  return Boolean(a && b && (a.includes(b) || b.includes(a)));
}

function distanceScore(ticket: Crew811Ticket, job: Crew811JobMatchCandidate) {
  if (ticket.latitude == null || ticket.longitude == null || job.latitude == null || job.longitude == null) return 0;
  const miles = Math.hypot(ticket.latitude - job.latitude, ticket.longitude - job.longitude) * 69;
  if (miles <= 0.1) return 0.2;
  if (miles <= 0.5) return 0.14;
  if (miles <= 1) return 0.08;
  return 0;
}

export function match811TicketToJob(ticket: Crew811Ticket, jobs: Crew811JobMatchCandidate[]): Crew811MatchResult {
  const tenantJobs = jobs.filter((job) => job.tenantId === ticket.tenantId);
  let best: Crew811MatchResult = { confidence: 0, matchedJobId: null, reason: "No tenant-safe job candidates" };

  for (const job of tenantJobs) {
    let score = 0;
    const reasons: string[] = [];

    if (includesEither(ticket.customer_name, job.customer_name)) {
      score += 0.22;
      reasons.push("customer matched");
    }
    if (includesEither(ticket.street, job.street) || includesEither(ticket.street, job.location_text)) {
      score += 0.2;
      reasons.push("street matched");
    }
    if (includesEither(ticket.city, job.city)) {
      score += 0.12;
      reasons.push("city matched");
    }
    if (includesEither(ticket.county, job.county)) {
      score += 0.1;
      reasons.push("county matched");
    }
    if (includesEither(ticket.work_description, job.work_description)) {
      score += 0.16;
      reasons.push("work description matched");
    }
    if (ticket.assigned_crew_id && ticket.assigned_crew_id === job.assigned_crew_id) {
      score += 0.1;
      reasons.push("crew matched");
    }
    const geoScore = distanceScore(ticket, job);
    if (geoScore) {
      score += geoScore;
      reasons.push("geometry near job");
    }

    const confidence = Math.min(1, Number(score.toFixed(2)));
    if (confidence > best.confidence) {
      best = {
        confidence,
        matchedJobId: confidence >= 0.6 ? job.id : null,
        reason: reasons.length ? reasons.join(", ") : "Weak location and customer match",
      };
    }
  }

  return best;
}

export function statusForMatch(confidence: number) {
  if (confidence >= 0.85) return "MATCHED_TO_JOB";
  if (confidence >= 0.6) return "NEEDS_REVIEW";
  return "NEW";
}

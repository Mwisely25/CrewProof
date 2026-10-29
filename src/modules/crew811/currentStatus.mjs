/* September 2026 tracker policy. Response completion never authorizes excavation.
 * Pure calculation: caller supplies the clock and verified source evidence.
 */
export const POLICY = "crewproof.tix811.current-status.2026-09";
const POSITIVE = new Set(["1", "2B", "2D", "3U", "4", "5", "CLEAR", "MARKED"]);
const DELAY = new Set(["3F", "3D", "8", "PENDING", "WAITING"]);
const OPEN_INFRA = new Set(["OPEN INFRA INC", "OPEN INFRA, INC", "OPEN INFRA, INC."]);
const SOURCES = ["sunshine_current", "human_current_only", "exactix_current_api", "raw_events"];
const text = (value) => String(value ?? "").trim();
const code = (value) => text(value).toUpperCase();
const instant = (value) =>
  typeof value === "string" && /T.*(?:Z|[+-]\d{2}:\d{2})$/i.test(value) && Number.isFinite(Date.parse(value))
    ? Date.parse(value)
    : typeof value === "string" && Number.isFinite(Date.parse(value))
      ? Date.parse(value)
      : null;
const unique = (values) => [...new Set(values)];
const values = (value) => (Array.isArray(value) ? value : Object.values(value || {}));
const timestamp = (response) =>
  response?.enteredDate || response?.responseTimestamp || response?.enteredAt || response?.timestamp;
const signature = (r) =>
  JSON.stringify([code(r?.responseCode ?? r?.code ?? r?.responseStatus), text(r?.comment ?? r?.comments ?? r?.responseText), r?.extension || null]);
const hardHold = (comment) =>
  /\bDO NOT\b|\bDON['’]T (?:DIG|EXCAVATE|DEMOLISH|PROCEED)\b|\bSTOP WORK\b|\b(?:LOCATE|MARKING) (?:IS |REMAINS )?(?:NOT COMPLETE|INCOMPLETE)\b|\bMUST NOT (?:PROCEED|EXCAVATE|DEMOLISH)\b|\bCONFLICT\b/i.test(
    comment,
  );
const ATTENTION = [
  [/VERIFY MARKS/i, "VERIFY MARKS"],
  [/PRE[- ]EXISTING MARKS/i, "PRE-EXISTING MARKS"],
  [/LOOSE SAND/i, "MARKS ON LOOSE SAND"],
  [/EMPTY PIPE/i, "EMPTY PIPE"],
  [/UNLOCATABLE/i, "UNLOCATABLE FACILITY/CROSSING"],
  [/PRIVATE FACILIT/i, "PRIVATE FACILITIES"],
  [/HIGH[- ]PROFILE/i, "HIGH-PROFILE UTILITY"],
  [/OVERGROWN|VEGETATION/i, "OVERGROWN VEGETATION"],
  [/FLOOD|STANDING WATER/i, "WATER/FLOODING"],
  [/WEATHER|REFRESH/i, "WEATHER REFRESH NEEDED"],
  [/MARKS (?:DESTROYED|REMOVED)/i, "MARKS DESTROYED"],
  [/CONTACT (?:THE )?UTILITY/i, "CONTACT UTILITY"],
  [/PARTIAL|AREA[- ]SPECIFIC/i, "PARTIAL/AREA-SPECIFIC LOCATE"],
  [/WORK (?:HAS BEEN |IS )?COMPLETED|THIS CROSSING IS DONE|(?:CONDUIT|HH).*ALREADY IN PLACE/i, "POSSIBLE WORK COMPLETE"],
];

export function calculateCurrentLocateStatus(ticket = {}, options = {}) {
  const now = options.now instanceof Date ? options.now : new Date(options.now ?? Date.now());
  const nowMs = now.getTime();
  const issues = [];
  const attention = [];
  const decisions = [];

  const version = ticket.currentVersion ?? ticket.ticketVersion ?? 0;
  const established = ticket.currentVersionEstablished ?? true;
  if (version == null || !Number.isSafeInteger(Number(version)) || Number(version) < 0 || established !== true) {
    issues.push("Current ticket version is not established");
  }
  if (!Number.isFinite(nowMs)) issues.push("Calculation time is invalid");

  const snapshots = values(ticket.currentSnapshots).filter((s) => s && s.current === true);
  snapshots.sort(
    (a, b) =>
      (SOURCES.includes(a.source) ? SOURCES.indexOf(a.source) : 99) -
        (SOURCES.includes(b.source) ? SOURCES.indexOf(b.source) : 99) ||
      (instant(b.capturedAt) ?? 0) - (instant(a.capturedAt) ?? 0),
  );
  const snapshot = snapshots[0];
  if (
    snapshot &&
    (!SOURCES.slice(0, 3).includes(snapshot.source) ||
      instant(snapshot.capturedAt) === null ||
      String(snapshot.ticketVersion ?? version) !== String(version) ||
      (snapshot.ticketNumber && snapshot.ticketNumber !== ticket.ticketNumber) ||
      (snapshot.source === "human_current_only" && (!snapshot.verifier || !snapshot.evidence)))
  ) {
    issues.push("Current snapshot identity or provenance is invalid");
  }
  if (
    snapshots
      .slice(1)
      .some(
        (other) =>
          other.source === snapshot.source &&
          other.capturedAt === snapshot.capturedAt &&
          JSON.stringify(other.responses) !== JSON.stringify(snapshot.responses),
      )
  ) {
    issues.push("Equally current snapshots conflict");
  }

  const source = snapshot?.source || "raw_events";
  const fallbackRoster = Array.isArray(ticket.responses)
    ? ticket.responses.map((r, idx) => ({
        serviceAreaCode: code(r.serviceAreaCode ?? r.code ?? r.utilityName ?? `UTIL-${idx + 1}`),
        serviceAreaName: text(r.serviceAreaName ?? r.name ?? r.utilityName ?? `Utility ${idx + 1}`),
      }))
    : [];
  const rosterInput = snapshot?.serviceAreas ?? ticket.serviceAreas ?? ticket.expectedServiceAreas ?? fallbackRoster;
  const roster = values(rosterInput).map((a) => ({
    serviceAreaCode: code(a?.serviceAreaCode ?? a?.code ?? a?.utilityName),
    serviceAreaName: text(a?.serviceAreaName ?? a?.name ?? a?.utilityName),
  }));
  if (!roster.length || roster.some((a) => !a.serviceAreaCode || !a.serviceAreaName)) {
    issues.push("Current service-area roster is unavailable or incomplete");
  }
  if (unique(roster.map((a) => a.serviceAreaCode)).length !== roster.length) {
    issues.push("Current roster contains duplicate service-area codes");
  }
  const expected = values(ticket.expectedServiceAreas).map((a) =>
    code(typeof a === "string" ? a : a?.serviceAreaCode ?? a?.code),
  );
  if (
    !snapshot?.serviceAreas &&
    expected.length &&
    JSON.stringify([...expected].sort()) !== JSON.stringify(roster.map((a) => a.serviceAreaCode).sort())
  ) {
    issues.push("Expected codes and named roster disagree");
  }

  const rosterCodes = new Set(roster.map((a) => a.serviceAreaCode));
  const candidates = snapshot ? values(snapshot.responses) : values(ticket.responses);
  const byCode = new Map();
  const historical = [];
  for (const response of candidates) {
    if (response.operative === false || response.current === false) {
      historical.push(response);
      continue;
    }
    const memberCode = code(response.serviceAreaCode ?? response.code ?? response.utilityName);
    if (!memberCode) {
      issues.push("Response cannot be assigned to a service-area code");
      continue;
    }
    if (!rosterCodes.has(memberCode)) {
      historical.push(response);
      continue;
    }
    const prior = byCode.get(memberCode);
    if (!prior) {
      byCode.set(memberCode, response);
      continue;
    }
    if (signature(prior) === signature(response)) {
      if ((instant(timestamp(response)) ?? 0) > (instant(timestamp(prior)) ?? 0)) byCode.set(memberCode, response);
      continue;
    }
    const a = instant(timestamp(prior));
    const b = instant(timestamp(response));
    if (snapshot || a === null || b === null || a === b) issues.push(`Conflicting current responses for ${memberCode}`);
    else if (b > a) byCode.set(memberCode, response);
  }

  if (!snapshot && ticket.revisionReconciled === false) issues.push("Ticket revision cannot be reconciled from event history");
  if (ticket.dataMismatch === true) issues.push("Current ticket evidence does not reconcile");
  if (snapshot) decisions.push("Current source takes precedence over raw event history");
  if (snapshot && instant(snapshot.capturedAt) > nowMs) issues.push("Current snapshot timestamp is in the future");

  const due = ticket.dates?.responseDueAt ?? ticket.responseDueAt ?? ticket.dueAt;
  if (ticket.ticketType === "Design") attention.push("DESIGN TICKET – NOT EXCAVATION AUTHORITY");
  if (ticket.ticketType === "Emergency") attention.push("EMERGENCY PROCEDURE REVIEW");

  const members = roster.map((area) => {
    const response = byCode.get(area.serviceAreaCode) || null;
    const responseCode = code(response?.responseCode ?? response?.code ?? response?.responseStatus);
    const comment = text(response?.comment ?? response?.comments ?? response?.responseText);
    if (response && instant(timestamp(response)) > nowMs) {
      issues.push(`Response timestamp is in the future for ${area.serviceAreaCode}`);
    }
    const flags = ATTENTION.filter(([pattern]) => pattern.test(comment)).map(([, label]) => label);
    if (responseCode === "2B") flags.push("PRIVATE FACILITIES");
    if (responseCode === "2D") flags.push("HIGH-PROFILE UTILITY", "CONTACT UTILITY");
    const manual = response?.manualOverride;
    const manualPositive =
      responseCode === "MANUAL POSITIVE" &&
      manual?.verifiedResult === "positive_non_blocking" &&
      manual.provider === area.serviceAreaCode &&
      instant(manual.timestamp) !== null &&
      manual.verifier &&
      manual.evidence &&
      manual.source;
    let memberState;
    let effectiveDeadline = due;
    const extension = response?.extension;
    if (DELAY.has(responseCode) && extension?.accepted === true && extension.evidence && instant(extension.deadline) !== null) {
      effectiveDeadline = extension.deadline;
    }
    if (hardHold(comment) || responseCode === "6A" || responseCode === "CONFLICT" || response?.safetyHold === true) {
      memberState = "SAFETY_HOLD";
    } else if (POSITIVE.has(responseCode) || manualPositive) {
      memberState = "COMPLETE";
    } else if (!responseCode || responseCode === "NO RESPONSE" || responseCode === "NO_RESPONSE" || DELAY.has(responseCode)) {
      if (instant(effectiveDeadline) === null) {
        issues.push(`Usable response deadline missing for ${area.serviceAreaCode}`);
        memberState = "REVIEW";
      } else {
        memberState = nowMs > instant(effectiveDeadline) ? "PAST_DUE" : "PENDING";
      }
    } else {
      issues.push(`Unknown or unverified response code for ${area.serviceAreaCode}: ${responseCode}`);
      memberState = "REVIEW";
    }
    attention.push(...flags);
    return {
      ...area,
      responseCode: manualPositive ? "MANUAL POSITIVE – exact code not captured" : responseCode || "No Response",
      memberState,
      effectiveDeadline: effectiveDeadline || null,
      attentionFlags: unique(flags),
      response: response
        ? {
            ...response,
            source: response.source || source,
            sourceTimestamp: response.sourceTimestamp || snapshot?.capturedAt || response.transmissionDate || null,
          }
        : null,
    };
  });

  const rawRespondedCount = members.filter(
    (m) => m.response && m.responseCode !== "No Response" && m.responseCode !== "NO RESPONSE" && m.responseCode !== "NO_RESPONSE",
  ).length;
  const ratio = snapshot?.responseRatio ?? ticket.responseRatio;
  let ratioReconciles = null;
  if (ratio != null) {
    const match = typeof ratio === "string" ? ratio.match(/^\s*(\d+)\s*\/\s*(\d+)\s*$/) : null;
    const responded = match ? Number(match[1]) : ratio.responded;
    const total = match ? Number(match[2]) : ratio.expected;
    ratioReconciles =
      Number.isInteger(responded) && Number.isInteger(total) && responded === rawRespondedCount && total === roster.length;
    if (!ratioReconciles) issues.push("Sunshine response ratio does not reconcile with the current roster and responses");
  }

  const groups = new Map();
  for (const member of members) {
    const alias = OPEN_INFRA.has(code(member.serviceAreaName));
    const key = alias ? "OPEN_INFRA" : member.serviceAreaCode;
    if (!groups.has(key)) groups.set(key, { key, name: alias ? "Open Infra" : member.serviceAreaName, members: [] });
    groups.get(key).members.push(member);
  }

  const aliasesApplied = [];
  const operativeProviders = [...groups.values()].map((group) => {
    const hold = group.members.some((m) => m.memberState === "SAFETY_HOLD");
    const review = group.members.some((m) => m.memberState === "REVIEW");
    const positives = group.members.filter((m) => m.memberState === "COMPLETE");
    const consolidate = group.key === "OPEN_INFRA" && group.members.length > 1 && positives.length && !hold && !review;
    const positiveTime = Math.max(...positives.map((m) => instant(timestamp(m.response)) ?? -Infinity));
    const staleUnresolved = group.members.every(
      (m) =>
        m.memberState === "COMPLETE" ||
        !m.response ||
        m.responseCode === "NO RESPONSE" ||
        m.responseCode === "NO_RESPONSE" ||
        (["3F", "8"].includes(m.responseCode) &&
          instant(timestamp(m.response)) !== null &&
          instant(timestamp(m.response)) <= positiveTime),
    );
    let state = hold ? "SAFETY_HOLD" : review ? "REVIEW" : null;
    if (consolidate && staleUnresolved) {
      state = "COMPLETE";
      aliasesApplied.push({
        alias: group.key,
        serviceAreaCodes: group.members.map((m) => m.serviceAreaCode),
        reason: "Final positive satisfies stale duplicate obligation",
      });
    }
    if (!state) {
      state = group.members.some((m) => m.memberState === "PAST_DUE")
        ? "PAST_DUE"
        : group.members.some((m) => m.memberState === "PENDING")
          ? "PENDING"
          : "COMPLETE";
    }
    return { ...group, state };
  });

  const pastDue = operativeProviders.filter((p) => p.state === "PAST_DUE").map((p) => p.name).sort();
  const pending = operativeProviders.filter((p) => p.state === "PENDING").map((p) => p.name).sort();
  const safetyHold = ticket.safetyHold === true || operativeProviders.some((p) => p.state === "SAFETY_HOLD");
  const expiresAt = ticket.dates?.expiresAt ?? ticket.expiresAt;
  const validAt = ticket.dates?.legalAt ?? ticket.dates?.legalStartAt ?? ticket.dates?.validAt ?? ticket.validAt;
  if (instant(expiresAt) === null) issues.push("Exact ticket expiration is unavailable");
  if (validAt && instant(validAt) === null) issues.push("Legal start timestamp is invalid");
  if (instant(validAt) !== null && nowMs < instant(validAt)) attention.push("NOT YET VALID");

  const workComplete =
    ticket.workComplete?.confirmed === true &&
    ticket.workComplete.verifier &&
    ticket.workComplete.evidence &&
    instant(ticket.workComplete.timestamp) !== null;

  let responseStatus;
  if (ticket.isCanceled === true) responseStatus = "Cancelled";
  else if (workComplete) responseStatus = "Work Complete / Resolved";
  else if (ticket.currentReplacement) responseStatus = "Superseded";
  else if (instant(expiresAt) !== null && nowMs >= instant(expiresAt)) responseStatus = "Expired";
  else if (safetyHold) responseStatus = "Review Required – Safety Hold";
  else if (issues.length) responseStatus = "Review Required – Data Mismatch";
  else if (pastDue.length) responseStatus = `Past Due – ${pastDue.join(", ")}`;
  else if (pending.length) responseStatus = `Pending – ${pending.join(", ")}`;
  else responseStatus = "Marked";

  const renewalAction = workComplete
    ? "Do Not Renew – Work Complete"
    : ticket.isCanceled === true
      ? "Cancelled"
      : ticket.currentReplacement
        ? "Do Not Renew"
        : options.renewalSchedule?.state === "due" || responseStatus === "Expired"
          ? "Renew"
          : ["Do Not Renew", "Work Complete", "Cancelled", "TBD"].includes(ticket.renewalDisposition)
            ? ticket.renewalDisposition
            : "TBD";

  const latestSourceTimestamp =
    snapshot?.capturedAt ||
    [ticket.currentTicketTransmittedAt, ...members.map((m) => m.response?.transmissionDate)]
      .filter((v) => instant(v) !== null)
      .sort((a, b) => instant(b) - instant(a))[0] ||
    null;

  const result = {
    responseStatus,
    attentionStatus: unique(attention).sort(),
    renewalAction,
    actionStatus: workComplete ? "Resolved" : "Open",
    members,
    operativeProviders,
    aliasesApplied,
    rawExpectedCount: roster.length,
    rawRespondedCount,
    responseRatio: ratio ?? `${rawRespondedCount}/${roster.length}`,
    ratioReconciles,
    pendingProviders: pending,
    pastDueProviders: pastDue,
    reviewReasons: unique(issues),
    dataSource: source,
    latestSourceTimestamp,
    historyOnlyResponses: historical,
    fieldClearance: "Separate field verification and authorized release required",
    action: issues.length ? "LIVE 811 MEMBER CHECK REQUIRED" : null,
  };
  result.audit = {
    policy: POLICY,
    ticketNumber: ticket.ticketNumber,
    currentVersion: version,
    recalculatedAt: Number.isFinite(nowMs) ? now.toISOString() : null,
    currentRosterCount: roster.length,
    currentServiceAreas: roster,
    currentResponsePerServiceAreaCode: Object.fromEntries(members.map((m) => [m.serviceAreaCode, m.response])),
    responseRatio: result.responseRatio,
    rawRespondedCount,
    aliasGroupsApplied: aliasesApplied,
    blockingProviders: operativeProviders.filter((p) => p.state !== "COMPLETE").map((p) => ({ provider: p.name, state: p.state })),
    responseDueAt: due || null,
    effectiveProviderDeadlines: Object.fromEntries(members.map((m) => [m.serviceAreaCode, m.effectiveDeadline])),
    resultingStatus: responseStatus,
    attentionFlags: result.attentionStatus,
    renewalAction,
    dataSource: source,
    latestSourceTimestamp,
    statusChangedFrom: options.previousStatus ?? null,
    reasonForChange: [...unique(issues), ...decisions, `Rebuilt from current roster: ${responseStatus}`],
  };
  return result;
}

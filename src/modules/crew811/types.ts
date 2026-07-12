export type Crew811TicketStatus =
  | "NEW"
  | "NEEDS_REVIEW"
  | "MATCHED_TO_JOB"
  | "ASSIGNED"
  | "IN_FIELD"
  | "WAITING_ON_RESPONSE"
  | "CLEAR"
  | "CONFLICT"
  | "EXPIRED"
  | "RENEWAL_NEEDED"
  | "CLOSED";

export type Crew811ResponseStatus =
  | "CLEAR"
  | "MARKED"
  | "NO_RESPONSE"
  | "CONFLICT"
  | "DAMAGED_FACILITY"
  | "NEEDS_CONTACT";

export interface Crew811Geometry {
  type: "Point" | "LineString" | "Polygon";
  coordinates: unknown;
}

export interface Crew811Ticket {
  id: string;
  tenantId: string;
  ticket_number: string;
  state: string;
  county: string;
  city: string;
  street: string;
  cross_street?: string;
  work_description: string;
  excavator_name?: string;
  company_id?: string;
  excavator_id?: string;
  office_name?: string;
  company_type?: string;
  call_back_time?: string;
  field_contact?: string;
  field_contact_type?: string;
  field_contact_method?: string;
  working_for?: string;
  work_type?: string;
  customer_name: string;
  provider_name?: string;
  status: Crew811TicketStatus;
  priority: "LOW" | "NORMAL" | "HIGH" | "EMERGENCY";
  due_at: string;
  expires_at: string;
  renewal_required_at: string;
  latitude?: number;
  longitude?: number;
  geometry_json?: Crew811Geometry | null;
  raw_payload_json?: Record<string, unknown>;
  assigned_crew_id?: string | null;
  assigned_user_id?: string | null;
  linked_job_id?: string | null;
  positive_response_status?: "PENDING" | "READY" | "BLOCKED" | "OVERRIDDEN";
  override_reason?: string | null;
  created_at: string;
  updated_at: string;
}

export interface Crew811TicketEvent {
  id: string;
  tenantId: string;
  ticket_id: string;
  event_type: string;
  actor_id?: string;
  message: string;
  metadata_json?: Record<string, unknown>;
  created_at: string;
}

export interface Crew811Response {
  id: string;
  tenantId: string;
  ticket_id: string;
  utility_name: string;
  response_status: Crew811ResponseStatus;
  response_text?: string;
  responded_at?: string;
  created_at: string;
}

export interface Crew811Attachment {
  id: string;
  tenantId: string;
  ticket_id: string;
  linked_job_id?: string | null;
  attachment_type: "PHOTO" | "VIDEO" | "PDF" | "EMAIL" | "GPS_PROOF" | "OTHER";
  url: string;
  gps_latitude?: number;
  gps_longitude?: number;
  technician_notes?: string;
  marked_utilities?: string[];
  conflict_notes?: string;
  captured_at: string;
  created_at: string;
}

export interface Crew811JobLink {
  id: string;
  tenantId: string;
  ticket_id: string;
  job_id: string;
  confidence: number;
  reason: string;
  created_at: string;
}

export interface Crew811Renewal {
  id: string;
  tenantId: string;
  ticket_id: string;
  previous_ticket_number: string;
  renewal_ticket_number?: string;
  status: "NEEDED" | "REQUESTED" | "RENEWED" | "FAILED";
  requested_at?: string;
  completed_at?: string;
  created_at: string;
}

export interface Crew811JobMatchCandidate {
  id: string;
  tenantId: string;
  customer_name: string;
  city: string;
  county: string;
  street: string;
  location_text: string;
  work_description?: string;
  assigned_crew_id?: string | null;
  latitude?: number;
  longitude?: number;
}

export interface Crew811MatchResult {
  confidence: number;
  matchedJobId: string | null;
  reason: string;
}

export interface Crew811ImportInput {
  tenantId: string;
  ticket_number: string;
  state?: string;
  county?: string;
  city?: string;
  street?: string;
  cross_street?: string;
  location_text?: string;
  work_description?: string;
  due_at?: string;
  expires_at?: string;
  raw_email_body?: string;
  raw_pdf_text?: string;
  geometry_json?: Crew811Geometry | null;
  latitude?: number;
  longitude?: number;
  customer_name?: string;
  provider_name?: string;
  excavator_name?: string;
  company_id?: string;
  excavator_id?: string;
  office_name?: string;
  company_type?: string;
  call_back_time?: string;
  field_contact?: string;
  field_contact_type?: string;
  field_contact_method?: string;
  working_for?: string;
  work_type?: string;
}

export interface Crew811Store {
  tickets: Crew811Ticket[];
  events: Crew811TicketEvent[];
  responses: Crew811Response[];
  attachments: Crew811Attachment[];
  jobLinks: Crew811JobLink[];
  renewals: Crew811Renewal[];
  jobs: Crew811JobMatchCandidate[];
}

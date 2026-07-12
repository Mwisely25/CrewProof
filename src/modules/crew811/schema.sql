create table one_call_tickets (
  id text primary key,
  tenant_id text not null,
  ticket_number text not null,
  state text,
  county text,
  city text,
  street text,
  cross_street text,
  work_description text,
  excavator_name text,
  customer_name text,
  provider_name text,
  status text not null check (status in (
    'NEW',
    'NEEDS_REVIEW',
    'MATCHED_TO_JOB',
    'ASSIGNED',
    'IN_FIELD',
    'WAITING_ON_RESPONSE',
    'CLEAR',
    'CONFLICT',
    'EXPIRED',
    'RENEWAL_NEEDED',
    'CLOSED'
  )),
  priority text not null default 'NORMAL',
  due_at timestamp,
  expires_at timestamp,
  renewal_required_at timestamp,
  latitude numeric,
  longitude numeric,
  geometry_json jsonb,
  raw_payload_json jsonb,
  assigned_crew_id text,
  assigned_user_id text,
  linked_job_id text,
  override_reason text,
  created_at timestamp not null,
  updated_at timestamp not null,
  unique (tenant_id, ticket_number)
);

create table one_call_ticket_events (
  id text primary key,
  tenant_id text not null,
  ticket_id text not null references one_call_tickets(id),
  event_type text not null,
  actor_id text,
  message text not null,
  metadata_json jsonb,
  created_at timestamp not null
);

create table one_call_responses (
  id text primary key,
  tenant_id text not null,
  ticket_id text not null references one_call_tickets(id),
  utility_name text not null,
  response_status text not null check (response_status in (
    'CLEAR',
    'MARKED',
    'NO_RESPONSE',
    'CONFLICT',
    'DAMAGED_FACILITY',
    'NEEDS_CONTACT'
  )),
  response_text text,
  responded_at timestamp,
  created_at timestamp not null
);

create table one_call_attachments (
  id text primary key,
  tenant_id text not null,
  ticket_id text not null references one_call_tickets(id),
  linked_job_id text,
  attachment_type text not null,
  url text not null,
  gps_latitude numeric,
  gps_longitude numeric,
  technician_notes text,
  marked_utilities jsonb,
  conflict_notes text,
  captured_at timestamp,
  created_at timestamp not null
);

create table one_call_job_links (
  id text primary key,
  tenant_id text not null,
  ticket_id text not null references one_call_tickets(id),
  job_id text not null,
  confidence numeric not null,
  reason text not null,
  created_at timestamp not null,
  unique (tenant_id, ticket_id, job_id)
);

create table one_call_renewals (
  id text primary key,
  tenant_id text not null,
  ticket_id text not null references one_call_tickets(id),
  previous_ticket_number text not null,
  renewal_ticket_number text,
  status text not null check (status in ('NEEDED', 'REQUESTED', 'RENEWED', 'FAILED')),
  requested_at timestamp,
  completed_at timestamp,
  created_at timestamp not null
);

create index one_call_tickets_tenant_status_idx on one_call_tickets (tenant_id, status);
create index one_call_tickets_expiry_idx on one_call_tickets (tenant_id, expires_at);
create index one_call_events_ticket_idx on one_call_ticket_events (tenant_id, ticket_id, created_at);
create index one_call_responses_ticket_idx on one_call_responses (tenant_id, ticket_id);

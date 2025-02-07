create type audit_log_action as enum (
  'login',
  'logout',
  'signup',
  'password_reset',
  'profile_update',
  'account_deletion'
);

create table public.audit_logs (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id) on delete set null,
  action audit_log_action not null,
  metadata jsonb default '{}'::jsonb,
  ip_address inet,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.audit_logs enable row level security;

-- Create policies
create policy "Users can view their own audit logs"
  on public.audit_logs
  for select
  using (auth.uid() = user_id);

-- Only system can insert
create policy "System can insert audit logs"
  on public.audit_logs
  for insert
  with check (true); 
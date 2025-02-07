create table public.sessions (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id) on delete cascade not null,
  refresh_token text unique not null,
  user_agent text,
  ip_address inet,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  expires_at timestamp with time zone not null
);

-- Enable RLS
alter table public.sessions enable row level security;

-- Create policies
create policy "Users can view their own sessions"
  on public.sessions
  for select
  using (auth.uid() = user_id);

create policy "Users can delete their own sessions"
  on public.sessions
  for delete
  using (auth.uid() = user_id); 
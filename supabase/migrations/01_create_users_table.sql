-- Drop existing table and related objects if they exist
drop trigger if exists users_updated_at on public.users;
drop function if exists public.handle_updated_at();
drop policy if exists "Users can view their own profile" on public.users;
drop policy if exists "Users can update their own profile" on public.users;
drop table if exists public.users cascade;

-- Create users table if it doesn't exist
create table if not exists public.users (
  id uuid references auth.users on delete cascade not null primary key,
  email text unique not null,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS (this is idempotent)
alter table public.users enable row level security;

-- Drop existing policies if they exist
drop policy if exists "Users can view their own profile" on public.users;
drop policy if exists "Users can update their own profile" on public.users;

-- Create policies
create policy "Users can view their own profile" 
  on public.users 
  for select 
  using (auth.uid() = id);

create policy "Users can update their own profile" 
  on public.users 
  for update 
  using (auth.uid() = id);

-- Create or replace function (this is already idempotent)
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Drop trigger if exists
drop trigger if exists users_updated_at on public.users;

-- Create trigger
create trigger users_updated_at
  before update on public.users
  for each row
  execute procedure public.handle_updated_at(); 
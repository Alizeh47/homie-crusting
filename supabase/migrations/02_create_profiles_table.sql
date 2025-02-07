create table public.profiles (
  id uuid references public.users(id) on delete cascade not null primary key,
  username text unique,
  bio text,
  website text,
  location text,
  phone_number text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  constraint username_length check (char_length(username) >= 3)
);

-- Enable RLS
alter table public.profiles enable row level security;

-- Create policies
create policy "Public profiles are viewable by everyone"
  on public.profiles
  for select
  using (true);

create policy "Users can update own profile"
  on public.profiles
  for update
  using (auth.uid() = id);

-- Create trigger for updated_at
create trigger profiles_updated_at
  before update on public.profiles
  for each row
  execute procedure public.handle_updated_at(); 
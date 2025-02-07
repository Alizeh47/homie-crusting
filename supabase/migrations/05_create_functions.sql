-- Function to handle new user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');

  insert into public.profiles (id)
  values (new.id);

  return new;
end;
$$ language plpgsql security definer;

-- Trigger after auth.users insert
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Function to get current user's profile
create or replace function public.get_current_user_profile()
returns json as $$
begin
  return (
    select json_build_object(
      'id', users.id,
      'email', users.email,
      'full_name', users.full_name,
      'avatar_url', users.avatar_url,
      'profile', json_build_object(
        'username', profiles.username,
        'bio', profiles.bio,
        'website', profiles.website,
        'location', profiles.location
      )
    )
    from public.users
    left join public.profiles on users.id = profiles.id
    where users.id = auth.uid()
  );
end;
$$ language plpgsql security definer; 
-- Core schema for profiles, ranking games, and friendships.
-- Apply this migration before the notifications migration.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text not null unique
    check (username ~ '^[a-zA-Z0-9_]{3,20}$'),
  display_name text,
  created_at timestamptz not null default now()
);

create table if not exists public.ranking_games (
  user_id uuid primary key references auth.users(id) on delete cascade,
  players jsonb not null default '[]'::jsonb,
  round_count integer not null default 0 check (round_count >= 0),
  phase text not null default 'setup'
    check (phase in ('setup', 'playing', 'finished')),
  updated_at timestamptz not null default now()
);

create table if not exists public.friendships (
  id uuid primary key default gen_random_uuid(),
  requester_id uuid not null references auth.users(id) on delete cascade,
  addressee_id uuid not null references auth.users(id) on delete cascade,
  status text not null default 'pending'
    check (status in ('pending', 'accepted', 'declined', 'blocked')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint friendships_no_self_request check (requester_id <> addressee_id),
  constraint friendships_unique_pair unique (requester_id, addressee_id)
);

create index if not exists friendships_requester_idx
  on public.friendships (requester_id);

create index if not exists friendships_addressee_idx
  on public.friendships (addressee_id);

alter table public.profiles enable row level security;
alter table public.ranking_games enable row level security;
alter table public.friendships enable row level security;

drop policy if exists "Profile lesen" on public.profiles;
drop policy if exists "Profile aktualisieren" on public.profiles;
drop policy if exists "Profile dürfen gelesen werden" on public.profiles;
drop policy if exists "Eigenes Profil darf geändert werden" on public.profiles;

create policy "Profile dürfen gelesen werden"
  on public.profiles for select
  to authenticated
  using (true);

create policy "Eigenes Profil darf geändert werden"
  on public.profiles for update
  to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

drop policy if exists "own ranking game - select" on public.ranking_games;
drop policy if exists "own ranking game - insert" on public.ranking_games;
drop policy if exists "own ranking game - update" on public.ranking_games;

create policy "own ranking game - select"
  on public.ranking_games for select
  to authenticated
  using (auth.uid() = user_id);

create policy "own ranking game - insert"
  on public.ranking_games for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "own ranking game - update"
  on public.ranking_games for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "Users can read their friendships" on public.friendships;
drop policy if exists "Users can create friendship requests" on public.friendships;
drop policy if exists "Users can update their friendships" on public.friendships;

create policy "Users can read their friendships"
  on public.friendships for select
  to authenticated
  using (auth.uid() = requester_id or auth.uid() = addressee_id);

create policy "Users can create friendship requests"
  on public.friendships for insert
  to authenticated
  with check (auth.uid() = requester_id);

create policy "Users can update their friendships"
  on public.friendships for update
  to authenticated
  using (auth.uid() = requester_id or auth.uid() = addressee_id)
  with check (auth.uid() = requester_id or auth.uid() = addressee_id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username, display_name)
  values (
    new.id,
    coalesce(
      nullif(new.raw_user_meta_data ->> 'username', ''),
      'user_' || replace(left(new.id::text, 8), '-', '')
    ),
    nullif(new.raw_user_meta_data ->> 'display_name', '')
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

revoke all on function public.handle_new_user() from public;

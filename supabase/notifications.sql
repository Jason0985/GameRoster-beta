create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  recipient_id uuid not null references auth.users(id) on delete cascade,
  sender_id uuid references auth.users(id) on delete set null,
  sender_name text not null,
  type text not null check (type in ('game_invite', 'friend_request')),
  title text not null,
  message text not null,
  related_id text,
  created_at timestamptz not null default now()
);

create index if not exists notifications_recipient_created_at_idx
  on public.notifications (recipient_id, created_at desc);

alter table public.notifications enable row level security;

drop policy if exists "Users can read their own notifications" on public.notifications;
create policy "Users can read their own notifications"
  on public.notifications for select
  using (auth.uid() = recipient_id);

drop policy if exists "Users can create notifications for another user" on public.notifications;
create policy "Users can create notifications for another user"
  on public.notifications for insert
  with check (auth.uid() = sender_id and auth.uid() <> recipient_id);

-- Example data for a logged-in user. Replace both UUIDs with real auth.users IDs.
-- insert into public.notifications (
--   recipient_id, sender_id, sender_name, type, title, message, related_id
-- ) values
-- (
--   'RECIPIENT_USER_UUID',
--   'SENDER_USER_UUID',
--   'Mara',
--   'game_invite',
--   'Spieleinladung',
--   'Mara lädt dich zu einer neuen Paddle-Runde ein.',
--   'GAME_ID'
-- );

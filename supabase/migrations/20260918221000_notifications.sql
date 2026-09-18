-- Notification storage and row-level security.

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
drop policy if exists "Users can create notifications for another user" on public.notifications;

create policy "Users can read their own notifications"
  on public.notifications for select
  to authenticated
  using (auth.uid() = recipient_id);

create policy "Users can create notifications for another user"
  on public.notifications for insert
  to authenticated
  with check (auth.uid() = sender_id and auth.uid() <> recipient_id);

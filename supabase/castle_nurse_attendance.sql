create extension if not exists pgcrypto;

create table if not exists public.castle_nurse_settings (
  key text primary key,
  value text not null
);

insert into public.castle_nurse_settings (key, value)
values ('team_code_hash', crypt('CHANGE_ME', gen_salt('bf')))
on conflict (key) do nothing;

create table if not exists public.castle_nurse_attendance (
  event_id text not null,
  member_id text not null,
  status text not null check (status in ('attending', 'pending', 'absent')),
  comment text not null default '',
  updated_at timestamptz not null default now(),
  primary key (event_id, member_id)
);

alter table public.castle_nurse_attendance enable row level security;
alter table public.castle_nurse_settings enable row level security;

create or replace function public.castle_nurse_verify_team_code(p_team_code text)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.castle_nurse_settings settings
    where settings.key = 'team_code_hash'
      and settings.value = crypt(coalesce(p_team_code, ''), settings.value)
  );
$$;

create or replace function public.castle_nurse_get_attendance(p_team_code text)
returns table (
  event_id text,
  member_id text,
  status text,
  comment text,
  updated_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.castle_nurse_verify_team_code(p_team_code) then
    raise exception 'invalid team code' using errcode = '28000';
  end if;

  return query
    select
      attendance.event_id,
      attendance.member_id,
      attendance.status,
      attendance.comment,
      attendance.updated_at
    from public.castle_nurse_attendance attendance
    order by attendance.event_id, attendance.member_id;
end;
$$;

create or replace function public.castle_nurse_upsert_attendance(
  p_team_code text,
  p_event_id text,
  p_member_id text,
  p_status text,
  p_comment text default ''
)
returns table (
  event_id text,
  member_id text,
  status text,
  comment text,
  updated_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.castle_nurse_verify_team_code(p_team_code) then
    raise exception 'invalid team code' using errcode = '28000';
  end if;

  if p_status not in ('attending', 'pending', 'absent') then
    raise exception 'invalid attendance status' using errcode = '22023';
  end if;

  return query
    insert into public.castle_nurse_attendance (
      event_id,
      member_id,
      status,
      comment,
      updated_at
    )
    values (
      p_event_id,
      p_member_id,
      p_status,
      coalesce(p_comment, ''),
      now()
    )
    on conflict (event_id, member_id)
    do update set
      status = excluded.status,
      comment = excluded.comment,
      updated_at = now()
    returning
      castle_nurse_attendance.event_id,
      castle_nurse_attendance.member_id,
      castle_nurse_attendance.status,
      castle_nurse_attendance.comment,
      castle_nurse_attendance.updated_at;
end;
$$;

grant execute on function public.castle_nurse_verify_team_code(text) to anon;
grant execute on function public.castle_nurse_get_attendance(text) to anon;
grant execute on function public.castle_nurse_upsert_attendance(text, text, text, text, text) to anon;

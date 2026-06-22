create extension if not exists pgcrypto;

create table if not exists public.castle_nurse_settings (
  key text primary key,
  value text not null
);

insert into public.castle_nurse_settings (key, value)
values ('team_code_hash', crypt('CHANGE_ME', gen_salt('bf')))
on conflict (key) do nothing;

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

create table if not exists public.castle_nurse_games (
  id uuid primary key default gen_random_uuid(),
  game_date date not null,
  opponent text not null,
  venue text not null default '',
  our_score integer check (our_score is null or our_score >= 0),
  opponent_score integer check (opponent_score is null or opponent_score >= 0),
  note text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists castle_nurse_games_game_date_idx
on public.castle_nurse_games (game_date desc, created_at desc);

create table if not exists public.castle_nurse_lineups (
  game_id uuid not null references public.castle_nurse_games (id) on delete cascade,
  member_id text not null,
  player_name text not null,
  batting_order integer not null check (batting_order between 1 and 99),
  position text not null,
  starter boolean not null default true,
  note text not null default '',
  updated_at timestamptz not null default now(),
  primary key (game_id, member_id)
);

create index if not exists castle_nurse_lineups_game_order_idx
on public.castle_nurse_lineups (game_id, batting_order);

create table if not exists public.castle_nurse_batting_stats (
  game_id uuid not null references public.castle_nurse_games (id) on delete cascade,
  member_id text not null,
  player_name text not null,
  plate_appearances integer not null default 0 check (plate_appearances >= 0),
  at_bats integer not null default 0 check (at_bats >= 0),
  hits integer not null default 0 check (hits >= 0),
  doubles integer not null default 0 check (doubles >= 0),
  triples integer not null default 0 check (triples >= 0),
  home_runs integer not null default 0 check (home_runs >= 0),
  rbi integer not null default 0 check (rbi >= 0),
  runs integer not null default 0 check (runs >= 0),
  walks integer not null default 0 check (walks >= 0),
  strikeouts integer not null default 0 check (strikeouts >= 0),
  steals integer not null default 0 check (steals >= 0),
  updated_at timestamptz not null default now(),
  primary key (game_id, member_id),
  check (hits <= at_bats),
  check (doubles + triples + home_runs <= hits),
  check (plate_appearances = 0 or at_bats <= plate_appearances)
);

create index if not exists castle_nurse_batting_stats_member_idx
on public.castle_nurse_batting_stats (member_id);

create table if not exists public.castle_nurse_pitching_stats (
  game_id uuid not null references public.castle_nurse_games (id) on delete cascade,
  member_id text not null,
  player_name text not null,
  innings_outs integer not null default 0 check (innings_outs >= 0),
  hits_allowed integer not null default 0 check (hits_allowed >= 0),
  earned_runs integer not null default 0 check (earned_runs >= 0),
  runs_allowed integer not null default 0 check (runs_allowed >= 0),
  walks integer not null default 0 check (walks >= 0),
  strikeouts integer not null default 0 check (strikeouts >= 0),
  pitches integer not null default 0 check (pitches >= 0),
  updated_at timestamptz not null default now(),
  primary key (game_id, member_id)
);

create index if not exists castle_nurse_pitching_stats_member_idx
on public.castle_nurse_pitching_stats (member_id);

alter table public.castle_nurse_settings enable row level security;
alter table public.castle_nurse_games enable row level security;
alter table public.castle_nurse_lineups enable row level security;
alter table public.castle_nurse_batting_stats enable row level security;
alter table public.castle_nurse_pitching_stats enable row level security;

create or replace function public.castle_nurse_get_scorebook(p_team_code text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.castle_nurse_verify_team_code(p_team_code) then
    raise exception 'invalid team code' using errcode = '28000';
  end if;

  return jsonb_build_object(
    'games',
      coalesce(
        (
          select jsonb_agg(to_jsonb(games) order by games.game_date desc, games.created_at desc)
          from public.castle_nurse_games games
        ),
        '[]'::jsonb
      ),
    'lineups',
      coalesce(
        (
          select jsonb_agg(to_jsonb(lineups) order by lineups.game_id, lineups.batting_order)
          from public.castle_nurse_lineups lineups
        ),
        '[]'::jsonb
      ),
    'batting_stats',
      coalesce(
        (
          select jsonb_agg(to_jsonb(batting) order by batting.updated_at desc)
          from public.castle_nurse_batting_stats batting
        ),
        '[]'::jsonb
      ),
    'pitching_stats',
      coalesce(
        (
          select jsonb_agg(to_jsonb(pitching) order by pitching.updated_at desc)
          from public.castle_nurse_pitching_stats pitching
        ),
        '[]'::jsonb
      )
  );
end;
$$;

create or replace function public.castle_nurse_upsert_game(
  p_team_code text,
  p_game_id uuid default null,
  p_game_date date default current_date,
  p_opponent text default '',
  p_venue text default '',
  p_our_score integer default null,
  p_opponent_score integer default null,
  p_note text default ''
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_game_id uuid := coalesce(p_game_id, gen_random_uuid());
  v_row public.castle_nurse_games%rowtype;
begin
  if not public.castle_nurse_verify_team_code(p_team_code) then
    raise exception 'invalid team code' using errcode = '28000';
  end if;

  if nullif(trim(coalesce(p_opponent, '')), '') is null then
    raise exception 'opponent is required' using errcode = '22023';
  end if;

  insert into public.castle_nurse_games (
    id,
    game_date,
    opponent,
    venue,
    our_score,
    opponent_score,
    note,
    updated_at
  )
  values (
    v_game_id,
    p_game_date,
    trim(p_opponent),
    trim(coalesce(p_venue, '')),
    p_our_score,
    p_opponent_score,
    trim(coalesce(p_note, '')),
    now()
  )
  on conflict (id)
  do update set
    game_date = excluded.game_date,
    opponent = excluded.opponent,
    venue = excluded.venue,
    our_score = excluded.our_score,
    opponent_score = excluded.opponent_score,
    note = excluded.note,
    updated_at = now()
  returning * into v_row;

  return to_jsonb(v_row);
end;
$$;

create or replace function public.castle_nurse_upsert_lineup(
  p_team_code text,
  p_game_id uuid,
  p_member_id text,
  p_player_name text,
  p_batting_order integer,
  p_position text,
  p_starter boolean default true,
  p_note text default ''
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_row public.castle_nurse_lineups%rowtype;
begin
  if not public.castle_nurse_verify_team_code(p_team_code) then
    raise exception 'invalid team code' using errcode = '28000';
  end if;

  insert into public.castle_nurse_lineups (
    game_id,
    member_id,
    player_name,
    batting_order,
    position,
    starter,
    note,
    updated_at
  )
  values (
    p_game_id,
    trim(p_member_id),
    trim(p_player_name),
    p_batting_order,
    trim(p_position),
    coalesce(p_starter, true),
    trim(coalesce(p_note, '')),
    now()
  )
  on conflict (game_id, member_id)
  do update set
    player_name = excluded.player_name,
    batting_order = excluded.batting_order,
    position = excluded.position,
    starter = excluded.starter,
    note = excluded.note,
    updated_at = now()
  returning * into v_row;

  return to_jsonb(v_row);
end;
$$;

create or replace function public.castle_nurse_upsert_batting_stat(
  p_team_code text,
  p_game_id uuid,
  p_member_id text,
  p_player_name text,
  p_plate_appearances integer default 0,
  p_at_bats integer default 0,
  p_hits integer default 0,
  p_doubles integer default 0,
  p_triples integer default 0,
  p_home_runs integer default 0,
  p_rbi integer default 0,
  p_runs integer default 0,
  p_walks integer default 0,
  p_strikeouts integer default 0,
  p_steals integer default 0
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_row public.castle_nurse_batting_stats%rowtype;
begin
  if not public.castle_nurse_verify_team_code(p_team_code) then
    raise exception 'invalid team code' using errcode = '28000';
  end if;

  insert into public.castle_nurse_batting_stats (
    game_id,
    member_id,
    player_name,
    plate_appearances,
    at_bats,
    hits,
    doubles,
    triples,
    home_runs,
    rbi,
    runs,
    walks,
    strikeouts,
    steals,
    updated_at
  )
  values (
    p_game_id,
    trim(p_member_id),
    trim(p_player_name),
    coalesce(p_plate_appearances, 0),
    coalesce(p_at_bats, 0),
    coalesce(p_hits, 0),
    coalesce(p_doubles, 0),
    coalesce(p_triples, 0),
    coalesce(p_home_runs, 0),
    coalesce(p_rbi, 0),
    coalesce(p_runs, 0),
    coalesce(p_walks, 0),
    coalesce(p_strikeouts, 0),
    coalesce(p_steals, 0),
    now()
  )
  on conflict (game_id, member_id)
  do update set
    player_name = excluded.player_name,
    plate_appearances = excluded.plate_appearances,
    at_bats = excluded.at_bats,
    hits = excluded.hits,
    doubles = excluded.doubles,
    triples = excluded.triples,
    home_runs = excluded.home_runs,
    rbi = excluded.rbi,
    runs = excluded.runs,
    walks = excluded.walks,
    strikeouts = excluded.strikeouts,
    steals = excluded.steals,
    updated_at = now()
  returning * into v_row;

  return to_jsonb(v_row);
end;
$$;

create or replace function public.castle_nurse_upsert_pitching_stat(
  p_team_code text,
  p_game_id uuid,
  p_member_id text,
  p_player_name text,
  p_innings_outs integer default 0,
  p_hits_allowed integer default 0,
  p_earned_runs integer default 0,
  p_runs_allowed integer default 0,
  p_walks integer default 0,
  p_strikeouts integer default 0,
  p_pitches integer default 0
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_row public.castle_nurse_pitching_stats%rowtype;
begin
  if not public.castle_nurse_verify_team_code(p_team_code) then
    raise exception 'invalid team code' using errcode = '28000';
  end if;

  insert into public.castle_nurse_pitching_stats (
    game_id,
    member_id,
    player_name,
    innings_outs,
    hits_allowed,
    earned_runs,
    runs_allowed,
    walks,
    strikeouts,
    pitches,
    updated_at
  )
  values (
    p_game_id,
    trim(p_member_id),
    trim(p_player_name),
    coalesce(p_innings_outs, 0),
    coalesce(p_hits_allowed, 0),
    coalesce(p_earned_runs, 0),
    coalesce(p_runs_allowed, 0),
    coalesce(p_walks, 0),
    coalesce(p_strikeouts, 0),
    coalesce(p_pitches, 0),
    now()
  )
  on conflict (game_id, member_id)
  do update set
    player_name = excluded.player_name,
    innings_outs = excluded.innings_outs,
    hits_allowed = excluded.hits_allowed,
    earned_runs = excluded.earned_runs,
    runs_allowed = excluded.runs_allowed,
    walks = excluded.walks,
    strikeouts = excluded.strikeouts,
    pitches = excluded.pitches,
    updated_at = now()
  returning * into v_row;

  return to_jsonb(v_row);
end;
$$;

grant execute on function public.castle_nurse_verify_team_code(text) to anon;
grant execute on function public.castle_nurse_get_scorebook(text) to anon;
grant execute on function public.castle_nurse_upsert_game(text, uuid, date, text, text, integer, integer, text) to anon;
grant execute on function public.castle_nurse_upsert_lineup(text, uuid, text, text, integer, text, boolean, text) to anon;
grant execute on function public.castle_nurse_upsert_batting_stat(text, uuid, text, text, integer, integer, integer, integer, integer, integer, integer, integer, integer, integer, integer) to anon;
grant execute on function public.castle_nurse_upsert_pitching_stat(text, uuid, text, text, integer, integer, integer, integer, integer, integer, integer) to anon;

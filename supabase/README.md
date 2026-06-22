# CASTLE NURSE Supabase

## Supabase setup

1. Create a Supabase project.
2. Open SQL Editor and run `castle_nurse_attendance.sql`.
3. Run `castle_nurse_scorebook.sql` to add games, lineups, batting stats, pitching stats, and score leader RPCs.
4. Replace the default team code:

```sql
update public.castle_nurse_settings
set value = crypt('YOUR_TEAM_CODE', gen_salt('bf'))
where key = 'team_code_hash';
```

5. Copy the project URL and anon public key into `attendance-config.js`.

```js
window.CASTLE_NURSE_SUPABASE = {
  url: "https://YOUR_PROJECT.supabase.co",
  anonKey: "YOUR_ANON_PUBLIC_KEY",
  teamCodeStorageKey: "castle-nurse-team-code",
};
```

Until `attendance-config.js` is filled in, attendance and scorebook entries use browser-local storage for testing.

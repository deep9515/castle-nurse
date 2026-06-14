# CASTLE NURSE Attendance

## Supabase setup

1. Create a Supabase project.
2. Open SQL Editor and run `castle_nurse_attendance.sql`.
3. Replace the default team code:

```sql
update public.castle_nurse_settings
set value = crypt('YOUR_TEAM_CODE', gen_salt('bf'))
where key = 'team_code_hash';
```

4. Copy the project URL and anon public key into `attendance-config.js`.

```js
window.CASTLE_NURSE_SUPABASE = {
  url: "https://YOUR_PROJECT.supabase.co",
  anonKey: "YOUR_ANON_PUBLIC_KEY",
  teamCodeStorageKey: "castle-nurse-team-code",
};
```

Until `attendance-config.js` is filled in, the page uses browser-local storage for testing.

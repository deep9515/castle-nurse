const team = {
  name: "CASTLE NURSE",
  today: todayIso(),
  mainGround: "錦糸公園野球場",
};

const defaultCalendar = {
  calendarId: "",
  apiKey: "",
  publicUrl: "",
  maxResults: 20,
  daysAhead: 120,
};

const scheduleSheet = {
  id: "1n3VHETRKGHBl6mvxo7cxyFBN8mCjplZHr67qf8KXDkw",
  gid: "775258869",
  url: "https://docs.google.com/spreadsheets/d/1n3VHETRKGHBl6mvxo7cxyFBN8mCjplZHr67qf8KXDkw/edit?gid=775258869#gid=775258869",
};

const practiceSheet = {
  id: "1n3VHETRKGHBl6mvxo7cxyFBN8mCjplZHr67qf8KXDkw",
  gid: "265488796",
  url: "https://docs.google.com/spreadsheets/d/1n3VHETRKGHBl6mvxo7cxyFBN8mCjplZHr67qf8KXDkw/edit?pli=1&gid=265488796#gid=265488796",
};

const fallbackSchedule = [
  {
    date: "2026-06-28",
    time: "18:00-19:00",
    opponent: "グラウンド練習",
    venue: "スポドリ@後楽園",
    type: "practice",
    reservation: "浮島＋萩下",
    manager: "仲村",
  },
];

let schedule = fallbackSchedule.slice();

const members = [
  {
    id: "masa-fujiki",
    number: 0,
    name: "マサ",
    position: "外野手",
    bats: "右投右打",
    note: "チームの勝利のために、全力で戦う。",
    photo: "./assets/members/NoName.png",
  },
  {
    id: "yuki",
    number: 1,
    name: "ユウキ",
    position: "内野手",
    bats: "右投左打",
    note: "チームの勝利のために、全力で戦う。",
    photo: "./assets/members/yuki.png",
  },
  {
    id: "yamada-takumi",
    number: 2,
    name: "ヤマダ",
    position: "内野手",
    bats: "右投左打",
    note: "チームの勝利のために、全力で戦う。",
    photo: "./assets/members/yamada.png",
  },
  {
    id: "kaneko-tetsuya",
    number: 4,
    name: "カネコ",
    position: "内野手",
    bats: "右投右打",
    note: "チームの勝利のために、全力で戦う。",
    photo: "./assets/members/kaneko.png",
  },
  {
    id: "ukishima-sho",
    number: 5,
    name: "ウキシマ",
    position: "外野手",
    bats: "右投右打",
    note: "チームの勝利のために、全力で戦う。",
    photo: "./assets/members/ukishima.png",
  },
  {
    id: "hagishita-ryuichi",
    number: 11,
    name: "ハギシタ",
    position: "投手",
    bats: "右投右打",
    note: "チームの勝利のために、全力で戦う。",
    photo: "./assets/members/hagishita.png",
  },
  {
    id: "hayashi-sojiro",
    number: 17,
    name: "ディルバート",
    position: "外野手",
    bats: "右投右打",
    note: "チームの勝利のために、全力で戦う。",
    photo: "./assets/members/dirbato.png",
  },
  {
    id: "iyori",
    number: 81,
    name: "イヨリ",
    position: "内野手",
    bats: "右投右打",
    note: "チームの勝利のために、全力で戦う。",
    photo: "./assets/members/iyori.png",
  },
  {
    id: "takafumi",
    order: 101,
    name: "タカフミ",
    position: "メンバー",
    photo: "./assets/members/NoName.png",
  },
  {
    id: "kotaro",
    number: 3,
    name: "コウタロウ",
    position: "外野手",
    bats: "右投右打",
    photo: "./assets/members/kotaro-20260618.JPG",
  },
  {
    id: "matsumura-kazuki",
    order: 103,
    name: "マツムラ",
    number: 19,
    position: "メンバー",
    photo: "./assets/members/NoName.png",
  },
  {
    id: "inoue-takahiro",
    order: 104,
    name: "イノウエ",
    position: "メンバー",
    photo: "./assets/members/NoName.png",
  },
  {
    id: "kawanabe-en",
    order: 105,
    name: "カワナベ",
    position: "メンバー",
    photo: "./assets/members/NoName.png",
  },
  {
    id: "yuto",
    order: 107,
    name: "ユウト",
    position: "メンバー",
    photo: "./assets/members/NoName.png",
  },
  {
    id: "hayakawa-yoshiya",
    order: 108,
    name: "ハヤカワ",
    position: "メンバー",
    photo: "./assets/members/NoName.png",
  },
  {
    id: "nagamine-hitoshi",
    order: 109,
    name: "ナガミネ",
    number: 52,
    position: "メンバー",
    photo: "./assets/members/NoName.png",
  },
  {
    id: "72h-gay",
    number: 72,
    name: "GAY",
    position: "メンバー",
    photo: "./assets/members/72H・GAY.png",
  },
];

const results = [
  {
    date: "2026-05-31",
    opponent: "モジュラーズ",
    venue: "小豆沢公園",
    ourScore: 4,
    opponentScore: 7,
    note: "小豆沢公園でのVSモジュラーズ戦。序盤の大量失点から中盤に4点を返すも、3点差で敗戦。",
    summary:
      "序盤に大量失点を許し、試合の主導権を相手に握られる苦しい立ち上がり。それでも中盤、相手投手の制球の乱れを逃さず、四球とつなぐ意識で一気に4点を奪い返した。守備でも粘り強く立て直し、終盤にかけて攻勢を強める展開へ。あと一歩で流れを引き寄せるところまで迫ったが、序盤のビハインドを返し切れず、最終的には4-7の3点差で試合終了。敗戦の中にも、集中力を切らさず追い上げた収穫のある一戦となった。",
    highlights: ["中盤に一挙4得点", "相手投手の乱れを逃さず出塁", "終盤まで攻勢を強めた粘り"],
    photo: "./assets/results/game-20260531-01.jpg",
    url: "./results/2026-05-31.html",
  },
];

const typeLabels = {
  game: "試合",
  home: "ホーム",
  away: "ビジター",
  tournament: "大会",
  practice: "練習",
  cancelled: "キャンセル",
};

const attendanceStatusLabels = {
  attending: "⭕",
  pending: "🔺",
  absent: "×",
  unanswered: "未回答",
};

const attendanceStatusNames = {
  attending: "参加",
  pending: "調整中",
  absent: "不可",
  unanswered: "未回答",
};

const attendanceStatusOrder = ["attending", "pending", "absent", "unanswered"];
const attendanceStorageKey = "castle-nurse-attendance-v1";
const scorebookStorageKey = "castle-nurse-scorebook-v1";
const attendanceCandidates = [
  {
    id: "2026-07-03-night",
    date: "2026-07-03",
    label: "07/03(金)",
    slot: "金夜",
    venue: "錦糸公園",
  },
  {
    id: "2026-07-04-day",
    date: "2026-07-04",
    label: "07/04(土)",
    slot: "土曜",
    venue: "錦糸公園",
  },
  {
    id: "2026-07-05-day",
    date: "2026-07-05",
    label: "07/05(日)",
    slot: "日曜",
    venue: "錦糸公園",
  },
  {
    id: "2026-07-10-night",
    date: "2026-07-10",
    label: "07/10(金)",
    slot: "金夜",
    venue: "錦糸公園",
  },
  {
    id: "2026-07-11-day",
    date: "2026-07-11",
    label: "07/11(土)",
    slot: "土曜",
    venue: "錦糸公園",
  },
  {
    id: "2026-07-12-day",
    date: "2026-07-12",
    label: "07/12(日)",
    slot: "日曜",
    venue: "錦糸公園",
  },
  {
    id: "2026-07-17-night",
    date: "2026-07-17",
    label: "07/17(金)",
    slot: "金夜",
    venue: "錦糸公園",
  },
  {
    id: "2026-07-18-day",
    date: "2026-07-18",
    label: "07/18(土)",
    slot: "土曜",
    venue: "錦糸公園",
  },
  {
    id: "2026-07-19-day",
    date: "2026-07-19",
    label: "07/19(日)",
    slot: "日曜",
    venue: "錦糸公園",
  },
  {
    id: "2026-07-24-night",
    date: "2026-07-24",
    label: "07/24(金)",
    slot: "金夜",
    venue: "錦糸公園",
  },
  {
    id: "2026-07-25-day",
    date: "2026-07-25",
    label: "07/25(土)",
    slot: "土曜",
    venue: "錦糸公園",
  },
  {
    id: "2026-07-26-day",
    date: "2026-07-26",
    label: "07/26(日)",
    slot: "日曜",
    venue: "錦糸公園",
  },
  {
    id: "2026-07-31-night",
    date: "2026-07-31",
    label: "07/31(金)",
    slot: "金夜",
    venue: "錦糸公園",
  },
];

const scheduleRows = document.querySelector("#scheduleRows");
const calendarStatus = document.querySelector("#calendarStatus");
const calendarEventList = document.querySelector("#calendarEventList");
const calendarLink = document.querySelector("#calendarLink");
const practiceSheetStatus = document.querySelector("#practiceSheetStatus");
const practiceSheetList = document.querySelector("#practiceSheetList");
const memberGrid = document.querySelector("#memberGrid");
const resultList = document.querySelector("#resultList");
const memberSearch = document.querySelector("#memberSearch");
const attendanceForm = document.querySelector("#attendanceForm");
const attendanceMember = document.querySelector("#attendanceMember");
const attendanceComment = document.querySelector("#attendanceComment");
const attendanceTeamCode = document.querySelector("#attendanceTeamCode");
const attendanceMode = document.querySelector("#attendanceMode");
const attendanceSaveState = document.querySelector("#attendanceSaveState");
const attendanceCounts = document.querySelector("#attendanceCounts");
const attendanceRows = document.querySelector("#attendanceRows");
const attendanceBoardTitle = document.querySelector("#attendanceBoardTitle");
const attendanceCandidateGrid = document.querySelector("#attendanceCandidateGrid");
const attendanceViewButtons = document.querySelectorAll("[data-attendance-view]");
const scorebookSection = document.querySelector("#scorebook");
const scorebookMode = document.querySelector("#scorebookMode");
const scorebookStatus = document.querySelector("#scorebookStatus");
const scorebookTeamCode = document.querySelector("#scorebookTeamCode");
const scorebookRefresh = document.querySelector("#scorebookRefresh");
const scorebookSummary = document.querySelector("#scorebookSummary");
const battingLeaderRows = document.querySelector("#battingLeaderRows");
const pitchingLeaderRows = document.querySelector("#pitchingLeaderRows");
const scorebookGameList = document.querySelector("#scorebookGameList");
const scorebookGameCount = document.querySelector("#scorebookGameCount");
const scorebookGameForm = document.querySelector("#scorebookGameForm");
const scorebookLineupForm = document.querySelector("#scorebookLineupForm");
const scorebookBattingForm = document.querySelector("#scorebookBattingForm");
const scorebookPitchingForm = document.querySelector("#scorebookPitchingForm");
const scorebookTabs = document.querySelectorAll("[data-scorebook-tab]");
const scorebookPanels = document.querySelectorAll("[data-scorebook-panel]");
const scorebookGameSelects = document.querySelectorAll(".scorebook-game-select");
const scorebookMemberSelects = document.querySelectorAll(".scorebook-member-select");

let attendanceRecords = [];
let attendanceClient = null;
let attendanceDraft = {};
let activeAttendanceView = "cards";
let activeScheduleFilter = "all";
let scorebookClient = null;
let scorebookRecords = emptyScorebookRecords();

function todayIso() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("ja-JP", {
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  }).format(new Date(`${value}T00:00:00+09:00`));
}

function formatScheduleDate(game) {
  return game.displayDate || formatDate(game.date);
}

function scheduleTitle(game) {
  if (!game) return "予定なし";
  if (game.type === "practice") return game.opponent || "練習";
  if (game.type === "cancelled") return "キャンセル";
  return game.opponent && !/^[ー-]$/.test(game.opponent) ? `vs ${game.opponent}` : typeLabels[game.type] || "予定";
}

function sortedMembers() {
  return members
    .slice()
    .sort((a, b) => {
      const aIsCn = a.number == null;
      const bIsCn = b.number == null;
      if (aIsCn !== bIsCn) return aIsCn ? 1 : -1;
      if (!aIsCn && !bIsCn) return a.number - b.number;
      return (a.order || 999) - (b.order || 999) || a.name.localeCompare(b.name, "ja");
    });
}

function memberId(member) {
  return member.id || String(member.number);
}

function displayMemberNumber(member) {
  return member.number == null ? "CN" : String(member.number).padStart(2, "0");
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function renderSchedule(filter = "all") {
  const rows = schedule
    .filter((game) => filter === "all" || game.type === filter)
    .map(
      (game) => `
        <tr>
          <td>${escapeHtml(formatScheduleDate(game))}</td>
          <td><span class="tag ${escapeHtml(game.type)}">${escapeHtml(typeLabels[game.type] || "予定")}</span></td>
          <td>${escapeHtml(game.venue || "未定")}</td>
          <td>${escapeHtml(game.time || "未定")}</td>
          <td>${escapeHtml(game.opponent || "未定")}</td>
        </tr>
      `,
    )
    .join("");

  scheduleRows.innerHTML = rows || `
    <tr>
      <td class="empty-table" colspan="5">表示できる予定がありません。</td>
    </tr>
  `;
}

function getCalendarConfig() {
  return {
    ...defaultCalendar,
    ...(window.CASTLE_NURSE_CALENDAR || {}),
  };
}

function calendarApiUrl(config) {
  const today = new Date(`${team.today}T00:00:00+09:00`);
  const timeMax = new Date(today);
  timeMax.setDate(today.getDate() + Number(config.daysAhead || defaultCalendar.daysAhead));
  const params = new URLSearchParams({
    key: config.apiKey,
    timeMin: today.toISOString(),
    timeMax: timeMax.toISOString(),
    singleEvents: "true",
    orderBy: "startTime",
    maxResults: String(config.maxResults || defaultCalendar.maxResults),
  });
  return `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(config.calendarId)}/events?${params}`;
}

function formatCalendarTime(start, end) {
  if (!start?.dateTime) return "終日";
  const formatter = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const startTime = formatter.format(new Date(start.dateTime));
  const endTime = end?.dateTime ? formatter.format(new Date(end.dateTime)) : "";
  return endTime ? `${startTime}-${endTime}` : startTime;
}

function calendarDate(start) {
  if (start?.date) return start.date;
  if (!start?.dateTime) return team.today;
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date(start.dateTime));
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function calendarText(value) {
  return String(value || "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+\n/g, "\n")
    .trim();
}

function findCalendarMeta(description, labels) {
  const labelPattern = labels.map((label) => label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  const pattern = new RegExp(`^(${labelPattern})\\s*[:：]\\s*(.+)$`, "i");
  return calendarText(description)
    .split(/\n+/)
    .map((line) => line.trim())
    .map((line) => line.match(pattern)?.[2]?.trim())
    .find(Boolean);
}

function normalizeCalendarType(value) {
  const type = String(value || "").trim().toLowerCase();
  if (!type) return "";
  if (["game", "match", "試合", "練習試合", "公式戦"].includes(type)) return "game";
  if (["practice", "練習", "トレーニング"].includes(type)) return "practice";
  if (["tournament", "大会", "トーナメント", "cup"].includes(type)) return "tournament";
  if (["cancelled", "canceled", "cancel", "キャンセル", "中止"].includes(type)) return "cancelled";
  if (["home", "ホーム"].includes(type)) return "home";
  if (["away", "ビジター", "アウェイ"].includes(type)) return "away";
  return "";
}

function inferCalendarType(event) {
  const sharedType = event.extendedProperties?.shared?.type;
  const metaType = normalizeCalendarType(
    sharedType || findCalendarMeta(event.description, ["練習/試合", "練習・試合", "種別", "type"]),
  );
  if (metaType) return metaType;
  if (event.status === "cancelled") return "cancelled";
  const text = `${event.summary || ""} ${event.description || ""} ${event.location || ""}`.toLowerCase();
  if (/キャンセル|中止|cancel/.test(text)) return "cancelled";
  if (/練習|practice|トレーニング/.test(text)) return "practice";
  if (/大会|トーナメント|tournament|cup/.test(text)) return "tournament";
  if (/ホーム|home/.test(text) || String(event.location || "").includes(team.mainGround)) return "home";
  if (/ビジター|アウェイ|away/.test(text)) return "away";
  return "game";
}

function calendarOpponent(event, type) {
  const summary = String(event.summary || "").trim();
  const descriptionOpponent = findCalendarMeta(event.description, ["相手/内容", "内容", "相手", "対戦相手", "opponent"]);
  if (descriptionOpponent) return descriptionOpponent;
  if (type === "practice") return summary || "練習";
  if (type === "cancelled") return summary.replace(/キャンセル|中止/g, "").trim() || "キャンセル";
  return (
    summary
      .replace(new RegExp(team.name, "gi"), "")
      .replace(/^(試合|練習試合|公式戦|大会)\s*[:：-]?\s*/i, "")
      .replace(/^(vs|VS|対)\s*/i, "")
      .trim() || "対戦相手未定"
  );
}

function normalizeCalendarEvent(event) {
  const type = inferCalendarType(event);
  const descriptionTime = findCalendarMeta(event.description, ["時間帯", "開始", "time"]);
  const venue = event.location || findCalendarMeta(event.description, ["場所", "球場", "会場", "venue"]) || "未定";
  return {
    date: calendarDate(event.start),
    time: descriptionTime || formatCalendarTime(event.start, event.end),
    opponent: calendarOpponent(event, type),
    venue,
    type,
    reservation: findCalendarMeta(event.description, ["グラウンド予約", "予約", "reservation"]) || "",
    manager: findCalendarMeta(event.description, ["メンバー出席管理", "出欠管理", "管理", "manager"]) || "",
    url: event.htmlLink || "",
  };
}

function sheetDateToIso(value) {
  const formatted = formatSheetDate(value);
  const match = String(formatted || "").match(/^(\d{4})\/(\d{2})\/(\d{2})$/);
  if (!match) return "";
  return `${match[1]}-${match[2]}-${match[3]}`;
}

function parseScheduleSheetTable(table) {
  const columns = table.cols || [];
  const weekdayIndex = findSheetColumn(columns, (label) => label.includes("曜日"));
  const dateIndex = findSheetColumn(columns, (label) => label.includes("月日"));
  const typeIndex = findSheetColumn(columns, (label) => label.includes("練習") && label.includes("試合"));
  const venueIndex = findSheetColumn(columns, (label) => label === "場所");
  const timeIndex = findSheetColumn(columns, (label) => label.includes("時間帯"));
  const opponentIndex = findSheetColumn(columns, (label) => label.includes("相手") || label.includes("内容"));
  const attendanceManagerIndex = findSheetColumn(columns, (label) => label.includes("メンバー出席管理"));
  const memberStartIndex = attendanceManagerIndex >= 0 ? attendanceManagerIndex + 1 : opponentIndex + 1;

  return (table.rows || [])
    .map((row) => {
      const attendance = columns
        .slice(memberStartIndex)
        .map((column, offset) => ({
          name: String(column.label || "").trim(),
          status: normalizeSheetStatus(getCell(row, memberStartIndex + offset)),
        }))
        .filter((item) => item.name && item.status);
      const counts = attendance.reduce(
        (result, item) => ({
          ...result,
          [item.status]: result[item.status] + 1,
        }),
        { yes: 0, maybe: 0, no: 0 },
      );
      return {
        date: sheetDateToIso(getCell(row, dateIndex)),
        displayDate: formatSheetDate(getCell(row, dateIndex)),
        weekday: getCell(row, weekdayIndex),
        type: normalizeCalendarType(getCell(row, typeIndex)),
        venue: getCell(row, venueIndex),
        time: getCell(row, timeIndex),
        opponent: getCell(row, opponentIndex),
        attendance,
        counts,
      };
    })
    .filter((item) => item.date && item.attendance.length);
}

async function loadScheduleAttendanceItems() {
  const payload = await loadGoogleSheetJsonp(scheduleSheet);
  return parseScheduleSheetTable(payload.table || {});
}

function findScheduleAttendance(item, attendanceItems) {
  return attendanceItems.find((attendance) => attendance.date === item.date);
}

async function loadGoogleCalendarEvents() {
  const config = getCalendarConfig();
  if (calendarLink) {
    calendarLink.href = config.publicUrl || "https://calendar.google.com/";
  }
  if (!config.calendarId || !config.apiKey) {
    return { items: fallbackSchedule.slice(), source: "fallback", reason: "カレンダー未設定のため、仮日程を表示中" };
  }

  const response = await fetch(calendarApiUrl(config));
  if (!response.ok) {
    throw new Error("Google Calendarを読み込めませんでした。");
  }
  const payload = await response.json();
  return {
    items: (payload.items || []).map(normalizeCalendarEvent),
    source: "calendar",
  };
}

function renderAttendanceNames(attendance = [], status) {
  const names = attendance
    .filter((entry) => entry.status === status)
    .map((entry) => entry.name);
  return names.length ? escapeHtml(names.join("、")) : "なし";
}

function renderCalendarPanel(items, options = {}) {
  if (!calendarStatus || !calendarEventList) return;
  const tone = options.tone || "ok";
  const attendanceItems = options.attendanceItems || [];
  calendarStatus.dataset.tone = tone;
  calendarStatus.textContent = options.message || `${items.length}件をGoogle Calendarから表示中`;

  calendarEventList.innerHTML = items
    .slice(0, 6)
    .map((item) => {
      const attendance = findScheduleAttendance(item, attendanceItems);
      return `
        <article class="sheet-card calendar-card">
          <div class="sheet-card-head">
            <div>
              <time>${escapeHtml(formatScheduleDate(item))}</time>
              <small>${escapeHtml(item.time || "未定")}</small>
            </div>
            <span class="tag ${escapeHtml(item.type)}">${escapeHtml(typeLabels[item.type] || "予定")}</span>
          </div>
          ${
            attendance
              ? `
                <div class="calendar-attendance-summary" aria-label="出欠集計">
                  <span class="yes"><b>${attendance.counts.yes}</b><small>参加</small></span>
                  <span class="no"><b>${attendance.counts.no}</b><small>不参加</small></span>
                  <span class="maybe"><b>${attendance.counts.maybe}</b><small>未定</small></span>
                </div>
                <div class="sheet-members calendar-members">
                  <p class="yes">参加: ${renderAttendanceNames(attendance.attendance, "yes")}</p>
                  <p class="no">不参加: ${renderAttendanceNames(attendance.attendance, "no")}</p>
                  <p class="maybe">未定: ${renderAttendanceNames(attendance.attendance, "maybe")}</p>
                </div>
              `
              : `<p class="calendar-attendance-empty">出欠データなし</p>`
          }
          <dl class="sheet-meta">
            <div>
              <dt>内容</dt>
              <dd>${escapeHtml(item.opponent || "未定")}</dd>
            </div>
            <div>
              <dt>場所</dt>
              <dd>${escapeHtml(item.venue || "未定")}</dd>
            </div>
            <div>
              <dt>時間帯</dt>
              <dd>${escapeHtml(item.time || "未定")}</dd>
            </div>
          </dl>
          ${
            item.url
              ? `<a class="calendar-card-link" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">予定を開く</a>`
              : ""
          }
        </article>
      `;
    })
    .join("");
}

async function initGoogleCalendarSchedule() {
  let attendanceItems = [];
  try {
    attendanceItems = await loadScheduleAttendanceItems();
  } catch (error) {
    attendanceItems = [];
  }

  try {
    const result = await loadGoogleCalendarEvents();
    schedule = result.source === "calendar" ? result.items : fallbackSchedule.slice();
    renderSchedule(activeScheduleFilter);
    renderSummary();
    if (result.source === "fallback") {
      renderCalendarPanel(schedule, { tone: "muted", message: result.reason, attendanceItems });
      return;
    }
    if (!schedule.length) {
      renderCalendarPanel(schedule, {
        tone: "muted",
        message: "Google Calendarに今後の予定がありません。",
        attendanceItems,
      });
      return;
    }
    renderCalendarPanel(schedule, { attendanceItems });
  } catch (error) {
    schedule = fallbackSchedule.slice();
    renderSchedule(activeScheduleFilter);
    renderSummary();
    renderCalendarPanel(schedule, {
      tone: "error",
      message: "Google Calendarを読み込めませんでした。公開設定とAPIキーを確認してください。",
      attendanceItems,
    });
  }
}

function compactLabel(value) {
  return String(value || "").replace(/\s+/g, "");
}

function getCell(row, index) {
  const cell = row.c?.[index];
  if (!cell) return "";
  return cell.f || cell.v || "";
}

function formatSheetDate(value) {
  const raw = String(value || "");
  const gvizMatch = raw.match(/^Date\((\d+),(\d+),(\d+)\)$/);
  const japaneseMatch = raw.match(/^(\d{4})年(\d{1,2})月(\d{1,2})日$/);
  if (!gvizMatch && !japaneseMatch) return raw;
  const year = Number((gvizMatch || japaneseMatch)[1]);
  const month = gvizMatch ? Number(gvizMatch[2]) + 1 : Number(japaneseMatch[2]);
  const day = Number((gvizMatch || japaneseMatch)[3]);
  return `${year}/${String(month).padStart(2, "0")}/${String(day).padStart(2, "0")}`;
}

function parseDateForCompare(value) {
  const match = String(value || "").match(/^(\d{4})\/(\d{2})\/(\d{2})$/);
  if (!match) return null;
  return new Date(`${match[1]}-${match[2]}-${match[3]}T00:00:00+09:00`);
}

function findSheetColumn(columns, predicate) {
  return columns.findIndex((column) => predicate(compactLabel(column.label), column.label));
}

function normalizeSheetStatus(value) {
  const status = String(value || "").trim();
  if (!status) return "";
  if (/[○◯⭕]/.test(status)) return "yes";
  if (/[△🔺]/.test(status)) return "maybe";
  if (/[×✕✖❌xX]/.test(status)) return "no";
  return "";
}

function sheetStatusLabel(status) {
  if (status === "yes") return "⭕";
  if (status === "maybe") return "🔺";
  if (status === "no") return "×";
  return "";
}

function parsePracticeSheetTable(table) {
  const columns = table.cols || [];
  const weekdayIndex = findSheetColumn(columns, (label) => label.includes("曜日"));
  const dateIndex = findSheetColumn(columns, (label) => label.includes("月日"));
  const memberStartIndex = dateIndex >= 0 ? dateIndex + 1 : 2;
  const today = new Date(`${team.today}T00:00:00+09:00`);

  return (table.rows || [])
    .map((row) => {
      const attendance = columns
        .slice(memberStartIndex)
        .map((column, offset) => ({
          name: String(column.label || "").trim(),
          status: normalizeSheetStatus(getCell(row, memberStartIndex + offset)),
        }))
        .filter((item) => item.name && item.status);
      const counts = attendance.reduce(
        (result, item) => ({
          ...result,
          [item.status]: result[item.status] + 1,
        }),
        { yes: 0, maybe: 0, no: 0 },
      );
      return {
        weekday: getCell(row, weekdayIndex),
        date: formatSheetDate(getCell(row, dateIndex)),
        attendance,
        counts,
      };
    })
    .filter((item) => {
      const date = parseDateForCompare(item.date);
      return item.date && (!date || date >= today);
    });
}

function renderPracticeSheetPanel(items) {
  if (!practiceSheetStatus || !practiceSheetList) return;
  if (!items.length) {
    practiceSheetStatus.textContent = "表示できる練習候補がありません。";
    practiceSheetList.innerHTML = "";
    return;
  }

  const rankedItems = items.slice().sort((a, b) => {
    const aTime = parseDateForCompare(a.date)?.getTime() || Number.MAX_SAFE_INTEGER;
    const bTime = parseDateForCompare(b.date)?.getTime() || Number.MAX_SAFE_INTEGER;
    return (
      b.counts.yes - a.counts.yes ||
      b.counts.maybe - a.counts.maybe ||
      a.counts.no - b.counts.no ||
      aTime - bTime
    );
  });

  const visibleItems = rankedItems.slice(0, 3);
  practiceSheetStatus.textContent = `参加最多TOP3を表示中（${visibleItems.length}/${items.length}候補）`;
  practiceSheetStatus.dataset.tone = "ok";
  practiceSheetList.innerHTML = visibleItems
    .map((item, index) => {
      const yesMembers = item.attendance
        .filter((entry) => entry.status === "yes")
        .map((entry) => entry.name);
      const maybeMembers = item.attendance
        .filter((entry) => entry.status === "maybe")
        .map((entry) => entry.name);
      const noMembers = item.attendance
        .filter((entry) => entry.status === "no")
        .map((entry) => entry.name);
      return `
        <article class="sheet-card practice-sheet-card">
          <div class="sheet-card-head">
            <div>
              <time>${escapeHtml(item.date)}</time>
              <small>${escapeHtml(item.weekday || "")}</small>
            </div>
            <span class="tag practice">TOP${index + 1}</span>
          </div>
          <div class="sheet-attendance" aria-label="練習日調整集計">
            <span class="yes">${sheetStatusLabel("yes")} ${item.counts.yes}</span>
            <span class="maybe">${sheetStatusLabel("maybe")} ${item.counts.maybe}</span>
            <span class="no">${sheetStatusLabel("no")} ${item.counts.no}</span>
          </div>
          <div class="sheet-members">
            <p class="yes">参加: ${yesMembers.length ? escapeHtml(yesMembers.join("、")) : "未入力"}</p>
            <p class="maybe">未定: ${maybeMembers.length ? escapeHtml(maybeMembers.join("、")) : "なし"}</p>
            <p class="no">不参加: ${noMembers.length ? escapeHtml(noMembers.join("、")) : "なし"}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function loadGoogleSheetJsonp(sheet = practiceSheet) {
  return new Promise((resolve, reject) => {
    const callbackName = `castleNurseSheet_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
    const script = document.createElement("script");
    const timeout = window.setTimeout(() => {
      cleanup();
      reject(new Error("Google Sheetsの読み込みがタイムアウトしました。"));
    }, 10000);

    function cleanup() {
      window.clearTimeout(timeout);
      delete window[callbackName];
      script.remove();
    }

    window[callbackName] = (payload) => {
      cleanup();
      resolve(payload);
    };

    script.onerror = () => {
      cleanup();
      reject(new Error("Google Sheetsを読み込めませんでした。"));
    };
    script.src = `https://docs.google.com/spreadsheets/d/${sheet.id}/gviz/tq?gid=${sheet.gid}&tqx=responseHandler:${callbackName}`;
    document.body.appendChild(script);
  });
}

async function initPracticeSheetPanel() {
  if (!practiceSheetStatus || !practiceSheetList) return;
  try {
    practiceSheetStatus.textContent = "読み込み中...";
    const payload = await loadGoogleSheetJsonp(practiceSheet);
    renderPracticeSheetPanel(parsePracticeSheetTable(payload.table || {}));
  } catch (error) {
    practiceSheetStatus.textContent = "調整シートを読み込めませんでした。公開設定を確認してください。";
    practiceSheetStatus.dataset.tone = "error";
    practiceSheetList.innerHTML = "";
  }
}

function renderMembers(position = "all", query = "") {
  const normalizedQuery = query.trim().toLowerCase();
  const cards = sortedMembers()
    .filter((member) => position === "all" || member.position === position)
    .filter((member) => {
      if (!normalizedQuery) return true;
      return `${displayMemberNumber(member)} ${member.name}`.toLowerCase().includes(normalizedQuery);
    })
    .map(
      (member) => `
        <article class="member-card ${member.photo ? "has-photo" : ""}">
          ${
            member.photo
              ? `<img class="member-photo" src="${member.photo}" alt="${member.name}のメンバー写真" loading="lazy" />`
              : ""
          }
          <div class="member-top">
            <span class="number">${displayMemberNumber(member)}</span>
            <span class="position">${member.position}</span>
          </div>
          <h3>${member.name}</h3>
          <p>${[member.bats, member.note || "プロフィール準備中。"].filter(Boolean).join("<br />")}</p>
        </article>
      `,
    )
    .join("");

  memberGrid.innerHTML = cards || `<p class="empty">該当メンバーがいません。</p>`;
}

function getSupabaseConfig() {
  return window.CASTLE_NURSE_SUPABASE || {};
}

function hasSupabaseConfig() {
  const config = getSupabaseConfig();
  return Boolean(config.url && config.anonKey && window.supabase);
}

function initAttendanceClient() {
  if (!attendanceForm) return;
  if (hasSupabaseConfig()) {
    const config = getSupabaseConfig();
    attendanceClient = window.supabase.createClient(config.url, config.anonKey);
    attendanceMode.textContent = "Supabase";
    attendanceMode.classList.add("is-live");
    return;
  }

  attendanceMode.textContent = "Local";
  attendanceMode.classList.remove("is-live");
}

function localAttendanceKey() {
  const teamCode = attendanceTeamCode.value.trim() || "default";
  return `${attendanceStorageKey}:${teamCode}`;
}

function readLocalAttendance() {
  try {
    return JSON.parse(localStorage.getItem(localAttendanceKey()) || "[]");
  } catch {
    return [];
  }
}

function writeLocalAttendance(records) {
  localStorage.setItem(localAttendanceKey(), JSON.stringify(records));
}

function normalizeAttendanceRow(row) {
  return {
    event_id: row.event_id,
    member_id: String(row.member_id),
    status: row.status,
    comment: row.comment || "",
    updated_at: row.updated_at || new Date().toISOString(),
  };
}

async function loadAttendanceRecords() {
  if (!attendanceForm) return;
  if (!attendanceClient) {
    attendanceRecords = readLocalAttendance().map(normalizeAttendanceRow);
    renderAttendanceBoard();
    return;
  }

  const teamCode = attendanceTeamCode.value.trim();
  if (!teamCode) {
    attendanceRecords = [];
    setAttendanceState("チームコードを入力してください。", "muted");
    renderAttendanceBoard();
    return;
  }

  setAttendanceState("読み込み中...", "muted");
  const { data, error } = await attendanceClient.rpc("castle_nurse_get_attendance", {
    p_team_code: teamCode,
  });

  if (error) {
    attendanceRecords = [];
    setAttendanceState("読み込みに失敗しました。", "error");
    renderAttendanceBoard();
    return;
  }

  attendanceRecords = (data || []).map(normalizeAttendanceRow);
  setAttendanceState("", "muted");
  renderAttendanceBoard();
}

function findAttendanceRecord(eventIdValue, memberId) {
  return attendanceRecords.find(
    (record) => record.event_id === eventIdValue && record.member_id === String(memberId),
  );
}

function upsertLocalAttendance(record) {
  const records = readLocalAttendance().map(normalizeAttendanceRow);
  const index = records.findIndex(
    (item) => item.event_id === record.event_id && item.member_id === record.member_id,
  );
  if (index >= 0) {
    records[index] = record;
  } else {
    records.push(record);
  }
  writeLocalAttendance(records);
  attendanceRecords = records;
}

async function saveAttendance(record, options = {}) {
  if (!attendanceClient) {
    upsertLocalAttendance(record);
    return { ok: true };
  }

  const teamCode = attendanceTeamCode.value.trim();
  if (!teamCode) {
    return { ok: false, message: "チームコードを入力してください。" };
  }

  const { error } = await attendanceClient.rpc("castle_nurse_upsert_attendance", {
    p_team_code: teamCode,
    p_event_id: record.event_id,
    p_member_id: record.member_id,
    p_status: record.status,
    p_comment: record.comment,
  });

  if (error) {
    return { ok: false, message: "保存に失敗しました。" };
  }

  if (options.reload !== false) {
    await loadAttendanceRecords();
  }
  return { ok: true };
}

function setAttendanceState(message, tone = "muted") {
  attendanceSaveState.textContent = message;
  attendanceSaveState.dataset.tone = tone;
}

function buildAttendanceOptions() {
  if (!attendanceForm) return;
  attendanceMember.innerHTML = sortedMembers()
    .map(
      (member) =>
        `<option value="${escapeHtml(memberId(member))}">${displayMemberNumber(member)} ${escapeHtml(
          member.name,
        )}</option>`,
    )
    .join("");
}

function candidateLabel(candidate) {
  return `${candidate.label} ${candidate.slot}`;
}

function countCandidate(candidateId) {
  const records = attendanceRecords.filter((record) => record.event_id === candidateId);
  const counts = attendanceStatusOrder.reduce(
    (result, status) => ({
      ...result,
      [status]:
        status === "unanswered"
          ? Math.max(0, members.length - records.length)
          : records.filter((record) => record.status === status).length,
    }),
    {},
  );
  return { records, counts };
}

function candidateScore(candidateId) {
  const { counts } = countCandidate(candidateId);
  return counts.attending * 2 + counts.pending - counts.absent * 1.2;
}

function renderCandidatePicker() {
  if (!attendanceForm) return;
  attendanceCandidateGrid.innerHTML = attendanceCandidates
    .map(
      (candidate) => {
        const status = attendanceDraft[candidate.id] || "unanswered";
        return `
        <article class="candidate-card ${status}">
          <div>
            <strong>${escapeHtml(candidate.label)}</strong>
            <span>${escapeHtml(candidate.slot)} / ${escapeHtml(candidate.venue)}</span>
          </div>
          <div class="candidate-actions" role="group" aria-label="${escapeHtml(candidateLabel(candidate))}の出欠">
            ${["attending", "pending", "absent"]
              .map(
                (option) => `
                  <button
                    class="${status === option ? "is-active" : ""}"
                    type="button"
                    data-candidate-id="${escapeHtml(candidate.id)}"
                    data-status="${option}"
                    aria-label="${escapeHtml(candidateLabel(candidate))} ${attendanceStatusNames[option]}"
                  >
                    ${attendanceStatusLabels[option]}
                  </button>
                `,
              )
              .join("")}
          </div>
        </article>
      `;
      },
    )
    .join("");
}

function renderAttendanceCounts() {
  const answeredMembers = new Set(attendanceRecords.map((record) => record.member_id)).size;
  const ranked = attendanceCandidates
    .map((candidate) => ({ candidate, score: candidateScore(candidate.id), counts: countCandidate(candidate.id).counts }))
    .sort((a, b) => b.score - a.score);
  const best = ranked[0];
  const totalAnswered = attendanceRecords.length;

  attendanceCounts.innerHTML = `
    <article class="attendance-count">
      <span>${attendanceCandidates.length}</span>
      <p>候補日</p>
    </article>
    <article class="attendance-count">
      <span>${answeredMembers}</span>
      <p>回答メンバー</p>
    </article>
    <article class="attendance-count attending">
      <span>${best ? best.counts.attending : 0}</span>
      <p>最多 ${attendanceStatusLabels.attending}</p>
    </article>
    <article class="attendance-count pending">
      <span>${totalAnswered}</span>
      <p>回答総数</p>
    </article>
  `;
}

function memberNameById(id) {
  return members.find((member) => memberId(member) === String(id))?.name || id;
}

function memberNamesFor(candidateId, status) {
  return attendanceRecords
    .filter((record) => record.event_id === candidateId && record.status === status)
    .map((record) => memberNameById(record.member_id));
}

function renderAttendanceCards() {
  return attendanceCandidates
    .map((candidate) => {
      const { counts } = countCandidate(candidate.id);
      const availableMembers = memberNamesFor(candidate.id, "attending");
      return `
        <article class="attendance-summary-card">
          <div class="candidate-summary-head">
            <div>
              <strong>${escapeHtml(candidate.label)}</strong>
              <span>${escapeHtml(candidate.slot)} / ${escapeHtml(candidate.venue)}</span>
            </div>
            <b>${attendanceStatusLabels.attending} ${counts.attending}</b>
          </div>
          <div class="candidate-summary-counts">
            <span>${attendanceStatusLabels.attending} ${counts.attending}</span>
            <span>${attendanceStatusLabels.pending} ${counts.pending}</span>
            <span>${attendanceStatusLabels.absent} ${counts.absent}</span>
            <span>未 ${counts.unanswered}</span>
          </div>
          <p>${availableMembers.length ? escapeHtml(availableMembers.join("、")) : "参加者未回答"}</p>
        </article>
      `;
    })
    .join("");
}

function renderAttendanceMatrix() {
  const columns = attendanceCandidates
    .map(
      (candidate) => `
        <th>
          <span>${escapeHtml(candidate.label)}</span>
          <small>${escapeHtml(candidate.slot)}</small>
        </th>
      `,
    )
    .join("");
  const rows = sortedMembers()
    .map((member) => {
      const cells = attendanceCandidates
        .map((candidate) => {
          const status = findAttendanceRecord(candidate.id, memberId(member))?.status || "unanswered";
          return `<td><span class="matrix-status ${status}">${attendanceStatusLabels[status]}</span></td>`;
        })
        .join("");
      return `
        <tr>
          <th>${displayMemberNumber(member)} ${escapeHtml(member.name)}</th>
          ${cells}
        </tr>
      `;
    })
    .join("");

  return `
    <div class="attendance-matrix-wrap">
      <table class="attendance-matrix">
        <thead>
          <tr>
            <th>メンバー</th>
            ${columns}
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderAttendanceRanking() {
  return attendanceCandidates
    .map((candidate) => ({ candidate, score: candidateScore(candidate.id), counts: countCandidate(candidate.id).counts }))
    .sort((a, b) => b.score - a.score)
    .map(
      ({ candidate, counts }, index) => `
        <article class="attendance-rank-row">
          <span>${index + 1}</span>
          <div>
            <strong>${escapeHtml(candidate.label)} ${escapeHtml(candidate.slot)}</strong>
            <small>${escapeHtml(candidate.venue)}</small>
          </div>
          <p>
            ${attendanceStatusLabels.attending} ${counts.attending}
            ${attendanceStatusLabels.pending} ${counts.pending}
            ${attendanceStatusLabels.absent} ${counts.absent}
          </p>
        </article>
      `,
    )
    .join("");
}

function renderAttendanceBoard() {
  if (!attendanceForm) return;
  attendanceBoardTitle.textContent = "練習候補";
  renderAttendanceCounts();

  if (activeAttendanceView === "matrix") {
    attendanceRows.innerHTML = renderAttendanceMatrix();
    return;
  }

  if (activeAttendanceView === "ranking") {
    attendanceRows.innerHTML = renderAttendanceRanking();
    return;
  }

  attendanceRows.innerHTML = renderAttendanceCards();
}

function syncAttendanceForm() {
  if (!attendanceForm) return;
  attendanceDraft = {};
  const comments = [];
  attendanceCandidates.forEach((candidate) => {
    const record = findAttendanceRecord(candidate.id, attendanceMember.value);
    if (!record) return;
    attendanceDraft[candidate.id] = record.status;
    if (record.comment) comments.push(record.comment);
  });
  attendanceComment.value = comments[0] || "";
  renderCandidatePicker();
}

function rememberTeamCode() {
  const key = getSupabaseConfig().teamCodeStorageKey;
  if (!key) return;
  try {
    sessionStorage.setItem(key, attendanceTeamCode.value.trim());
  } catch {
    // Session storage is optional.
  }
}

function restoreTeamCode() {
  const key = getSupabaseConfig().teamCodeStorageKey;
  if (!key) return;
  try {
    attendanceTeamCode.value = sessionStorage.getItem(key) || "";
  } catch {
    attendanceTeamCode.value = "";
  }
}

async function initAttendance() {
  if (!attendanceForm) return;
  buildAttendanceOptions();
  restoreTeamCode();
  initAttendanceClient();
  await loadAttendanceRecords();
  syncAttendanceForm();
  renderAttendanceBoard();
}

function emptyScorebookRecords() {
  return {
    games: [],
    lineups: [],
    batting_stats: [],
    pitching_stats: [],
  };
}

function normalizeScorebookRecords(data = {}) {
  return {
    games: Array.isArray(data.games) ? data.games : [],
    lineups: Array.isArray(data.lineups) ? data.lineups : [],
    batting_stats: Array.isArray(data.batting_stats) ? data.batting_stats : [],
    pitching_stats: Array.isArray(data.pitching_stats) ? data.pitching_stats : [],
  };
}

function scorebookTeamCodeValue() {
  return scorebookTeamCode?.value.trim() || "";
}

function localScorebookKey() {
  return `${scorebookStorageKey}:${scorebookTeamCodeValue() || "default"}`;
}

function readLocalScorebook() {
  try {
    return normalizeScorebookRecords(JSON.parse(localStorage.getItem(localScorebookKey()) || "{}"));
  } catch {
    return emptyScorebookRecords();
  }
}

function writeLocalScorebook(records) {
  localStorage.setItem(localScorebookKey(), JSON.stringify(normalizeScorebookRecords(records)));
}

function restoreScorebookTeamCode() {
  if (!scorebookTeamCode) return;
  const key = getSupabaseConfig().teamCodeStorageKey;
  if (!key) return;
  try {
    scorebookTeamCode.value = sessionStorage.getItem(key) || "";
  } catch {
    scorebookTeamCode.value = "";
  }
}

function rememberScorebookTeamCode() {
  const key = getSupabaseConfig().teamCodeStorageKey;
  if (!key || !scorebookTeamCode) return;
  try {
    sessionStorage.setItem(key, scorebookTeamCode.value.trim());
  } catch {
    // Session storage is optional.
  }
}

function initScorebookClient() {
  if (!scorebookSection) return;
  if (hasSupabaseConfig()) {
    const config = getSupabaseConfig();
    scorebookClient = window.supabase.createClient(config.url, config.anonKey);
    scorebookMode.textContent = "Supabase";
    scorebookMode.classList.add("is-live");
    return;
  }

  scorebookClient = null;
  scorebookMode.textContent = "Local";
  scorebookMode.classList.remove("is-live");
}

function setScorebookState(message, tone = "muted") {
  if (!scorebookStatus) return;
  scorebookStatus.textContent = message;
  scorebookStatus.dataset.tone = tone;
}

function memberById(id) {
  return sortedMembers().find((member) => memberId(member) === String(id));
}

function buildScorebookOptions() {
  if (!scorebookSection) return;
  const memberOptions = sortedMembers()
    .map(
      (member) =>
        `<option value="${escapeHtml(memberId(member))}">${displayMemberNumber(member)} ${escapeHtml(member.name)}</option>`,
    )
    .join("");
  scorebookMemberSelects.forEach((select) => {
    select.innerHTML = memberOptions;
  });
  renderScorebookGameOptions();
}

function renderScorebookGameOptions() {
  const options = scorebookRecords.games
    .slice()
    .sort((a, b) => String(b.game_date).localeCompare(String(a.game_date)) || String(b.created_at || "").localeCompare(String(a.created_at || "")))
    .map((game) => {
      const score =
        game.our_score != null && game.opponent_score != null
          ? ` ${game.our_score}-${game.opponent_score}`
          : "";
      return `<option value="${escapeHtml(game.id)}">${escapeHtml(game.game_date)} vs ${escapeHtml(game.opponent)}${escapeHtml(score)}</option>`;
    })
    .join("");
  scorebookGameSelects.forEach((select) => {
    select.innerHTML = options || '<option value="">試合未登録</option>';
  });
}

function toInteger(value, fallback = 0) {
  if (value === "" || value == null) return fallback;
  const number = Number(value);
  return Number.isFinite(number) ? Math.trunc(number) : fallback;
}

function optionalInteger(value) {
  if (value === "" || value == null) return null;
  const number = Number(value);
  return Number.isFinite(number) ? Math.trunc(number) : null;
}

function parseScorebookInnings(value) {
  const text = String(value || "").trim();
  if (!/^\d+(\.[0-2])?$/.test(text)) {
    throw new Error("投球回は 5.2 のように入力してください。");
  }
  const [whole, fraction = "0"] = text.split(".");
  return Number(whole) * 3 + Number(fraction);
}

function formatScorebookInnings(outs) {
  const value = Number(outs || 0);
  return `${Math.floor(value / 3)}.${value % 3}`;
}

function formatScorebookAverage(value) {
  if (!Number.isFinite(value) || value <= 0) return ".000";
  return value.toFixed(3).replace(/^0/, "");
}

function formatScorebookEra(value) {
  if (!Number.isFinite(value)) return "0.00";
  return value.toFixed(2);
}

function scorebookFormData(form) {
  return Object.fromEntries(new FormData(form).entries());
}

function upsertByKeys(rows, nextRow, keys) {
  const index = rows.findIndex((row) => keys.every((key) => String(row[key]) === String(nextRow[key])));
  if (index >= 0) {
    rows[index] = { ...rows[index], ...nextRow };
  } else {
    rows.push(nextRow);
  }
}

function localUuid(prefix) {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

function saveLocalScorebookGame(payload) {
  const records = readLocalScorebook();
  const now = new Date().toISOString();
  const row = {
    id: payload.game_id || localUuid("game"),
    game_date: payload.game_date,
    opponent: payload.opponent,
    venue: payload.venue || "",
    our_score: optionalInteger(payload.our_score),
    opponent_score: optionalInteger(payload.opponent_score),
    note: payload.note || "",
    created_at: now,
    updated_at: now,
  };
  upsertByKeys(records.games, row, ["id"]);
  writeLocalScorebook(records);
  scorebookRecords = records;
}

function saveLocalScorebookRow(collection, payload, keys) {
  const records = readLocalScorebook();
  upsertByKeys(records[collection], { ...payload, updated_at: new Date().toISOString() }, keys);
  writeLocalScorebook(records);
  scorebookRecords = records;
}

async function loadScorebookRecords() {
  if (!scorebookSection) return;
  if (!scorebookClient) {
    scorebookRecords = readLocalScorebook();
    renderScorebook();
    return;
  }

  const teamCode = scorebookTeamCodeValue();
  if (!teamCode) {
    scorebookRecords = emptyScorebookRecords();
    setScorebookState("チームコードを入力してください。", "muted");
    renderScorebook();
    return;
  }

  setScorebookState("読み込み中...", "muted");
  const { data, error } = await scorebookClient.rpc("castle_nurse_get_scorebook", {
    p_team_code: teamCode,
  });
  if (error) {
    scorebookRecords = emptyScorebookRecords();
    setScorebookState("読み込みに失敗しました。", "error");
    renderScorebook();
    return;
  }

  scorebookRecords = normalizeScorebookRecords(data || {});
  setScorebookState("同期済み", "ok");
  renderScorebook();
}

async function callScorebookRpc(name, payload) {
  if (!scorebookClient) return { ok: true };
  const teamCode = scorebookTeamCodeValue();
  if (!teamCode) return { ok: false, message: "チームコードを入力してください。" };
  const { error } = await scorebookClient.rpc(name, {
    p_team_code: teamCode,
    ...payload,
  });
  if (error) return { ok: false, message: "保存に失敗しました。" };
  return { ok: true };
}

function scorebookBattingAggregates() {
  const map = new Map();
  scorebookRecords.batting_stats.forEach((row) => {
    const key = row.member_id || row.player_name;
    const current = map.get(key) || {
      member_id: row.member_id,
      player_name: row.player_name,
      plate_appearances: 0,
      at_bats: 0,
      hits: 0,
      doubles: 0,
      triples: 0,
      home_runs: 0,
      rbi: 0,
      runs: 0,
      walks: 0,
      strikeouts: 0,
      steals: 0,
    };
    [
      "plate_appearances",
      "at_bats",
      "hits",
      "doubles",
      "triples",
      "home_runs",
      "rbi",
      "runs",
      "walks",
      "strikeouts",
      "steals",
    ].forEach((field) => {
      current[field] += Number(row[field] || 0);
    });
    map.set(key, current);
  });
  return [...map.values()].map((row) => ({
    ...row,
    batting_average: row.at_bats ? row.hits / row.at_bats : 0,
  }));
}

function scorebookPitchingAggregates() {
  const map = new Map();
  scorebookRecords.pitching_stats.forEach((row) => {
    const key = row.member_id || row.player_name;
    const current = map.get(key) || {
      member_id: row.member_id,
      player_name: row.player_name,
      innings_outs: 0,
      hits_allowed: 0,
      earned_runs: 0,
      runs_allowed: 0,
      walks: 0,
      strikeouts: 0,
      pitches: 0,
    };
    ["innings_outs", "hits_allowed", "earned_runs", "runs_allowed", "walks", "strikeouts", "pitches"].forEach(
      (field) => {
        current[field] += Number(row[field] || 0);
      },
    );
    map.set(key, current);
  });
  return [...map.values()].map((row) => ({
    ...row,
    era: row.innings_outs ? (row.earned_runs * 27) / row.innings_outs : Number.POSITIVE_INFINITY,
  }));
}

function renderScorebookSummary() {
  const batting = scorebookBattingAggregates();
  const pitching = scorebookPitchingAggregates();
  const battingTotals = batting.reduce(
    (result, row) => ({
      at_bats: result.at_bats + row.at_bats,
      hits: result.hits + row.hits,
      home_runs: result.home_runs + row.home_runs,
      rbi: result.rbi + row.rbi,
    }),
    { at_bats: 0, hits: 0, home_runs: 0, rbi: 0 },
  );
  const pitchingTotals = pitching.reduce(
    (result, row) => ({
      innings_outs: result.innings_outs + row.innings_outs,
      earned_runs: result.earned_runs + row.earned_runs,
      strikeouts: result.strikeouts + row.strikeouts,
    }),
    { innings_outs: 0, earned_runs: 0, strikeouts: 0 },
  );
  const items = [
    ["試合", `${scorebookRecords.games.length}`],
    ["打率", formatScorebookAverage(battingTotals.at_bats ? battingTotals.hits / battingTotals.at_bats : 0)],
    ["本塁打", `${battingTotals.home_runs}`],
    ["打点", `${battingTotals.rbi}`],
    ["防御率", formatScorebookEra(pitchingTotals.innings_outs ? (pitchingTotals.earned_runs * 27) / pitchingTotals.innings_outs : 0)],
    ["奪三振", `${pitchingTotals.strikeouts}`],
  ];
  scorebookSummary.innerHTML = items
    .map(
      ([label, value]) => `
        <article>
          <span>${escapeHtml(value)}</span>
          <p>${escapeHtml(label)}</p>
        </article>
      `,
    )
    .join("");
}

function renderScorebookLeaders() {
  const battingRows = scorebookBattingAggregates()
    .filter((row) => row.at_bats > 0)
    .sort((a, b) => b.batting_average - a.batting_average || b.hits - a.hits)
    .slice(0, 5);
  battingLeaderRows.innerHTML = battingRows.length
    ? battingRows
        .map(
          (row, index) => `
            <tr>
              <td>${index + 1}</td>
              <td>${escapeHtml(row.player_name)}</td>
              <td>${formatScorebookAverage(row.batting_average)}</td>
              <td>${row.hits}/${row.at_bats}</td>
              <td>${row.home_runs}</td>
            </tr>
          `,
        )
        .join("")
    : `<tr><td colspan="5" class="empty-table">打撃成績はまだありません。</td></tr>`;

  const pitchingRows = scorebookPitchingAggregates()
    .filter((row) => row.innings_outs > 0)
    .sort((a, b) => a.era - b.era || b.innings_outs - a.innings_outs)
    .slice(0, 5);
  pitchingLeaderRows.innerHTML = pitchingRows.length
    ? pitchingRows
        .map(
          (row, index) => `
            <tr>
              <td>${index + 1}</td>
              <td>${escapeHtml(row.player_name)}</td>
              <td>${formatScorebookEra(row.era)}</td>
              <td>${formatScorebookInnings(row.innings_outs)}</td>
              <td>${row.strikeouts}</td>
            </tr>
          `,
        )
        .join("")
    : `<tr><td colspan="5" class="empty-table">投手成績はまだありません。</td></tr>`;
}

function scorebookGameScore(game) {
  if (game.our_score == null || game.opponent_score == null) return "未入力";
  return `${game.our_score} - ${game.opponent_score}`;
}

function renderScorebookGames() {
  const games = scorebookRecords.games
    .slice()
    .sort((a, b) => String(b.game_date).localeCompare(String(a.game_date)) || String(b.created_at || "").localeCompare(String(a.created_at || "")));
  scorebookGameCount.textContent = `${games.length}件`;
  scorebookGameList.innerHTML = games.length
    ? games
        .slice(0, 6)
        .map((game) => {
          const lineupCount = scorebookRecords.lineups.filter((row) => row.game_id === game.id).length;
          const battingCount = scorebookRecords.batting_stats.filter((row) => row.game_id === game.id).length;
          const pitchingCount = scorebookRecords.pitching_stats.filter((row) => row.game_id === game.id).length;
          return `
            <article class="scorebook-game-card">
              <div>
                <time>${escapeHtml(game.game_date)}</time>
                <strong>VS ${escapeHtml(game.opponent)}</strong>
                <small>${escapeHtml(game.venue || "未定")} / ${escapeHtml(scorebookGameScore(game))}</small>
              </div>
              <p>O ${lineupCount} / B ${battingCount} / P ${pitchingCount}</p>
            </article>
          `;
        })
        .join("")
    : `<p class="empty">試合データはまだありません。</p>`;
}

function renderScorebook() {
  if (!scorebookSection) return;
  renderScorebookGameOptions();
  renderScorebookSummary();
  renderScorebookLeaders();
  renderScorebookGames();
}

function scorebookGamePayload(form) {
  const data = scorebookFormData(form);
  return {
    game_id: data.game_id || null,
    game_date: data.game_date,
    opponent: data.opponent.trim(),
    venue: data.venue.trim(),
    our_score: optionalInteger(data.our_score),
    opponent_score: optionalInteger(data.opponent_score),
    note: data.note.trim(),
  };
}

function selectedScorebookMember(form) {
  const data = scorebookFormData(form);
  const member = memberById(data.member_id);
  return {
    member_id: String(data.member_id),
    player_name: member?.name || String(data.member_id),
  };
}

async function saveScorebookGame(event) {
  event.preventDefault();
  const payload = scorebookGamePayload(scorebookGameForm);
  if (!payload.opponent) {
    setScorebookState("相手を入力してください。", "error");
    return;
  }
  rememberScorebookTeamCode();
  setScorebookState("保存中...", "muted");
  if (!scorebookClient) {
    saveLocalScorebookGame(payload);
  } else {
    const result = await callScorebookRpc("castle_nurse_upsert_game", {
      p_game_id: payload.game_id,
      p_game_date: payload.game_date,
      p_opponent: payload.opponent,
      p_venue: payload.venue,
      p_our_score: payload.our_score,
      p_opponent_score: payload.opponent_score,
      p_note: payload.note,
    });
    if (!result.ok) {
      setScorebookState(result.message, "error");
      return;
    }
  }
  scorebookGameForm.reset();
  scorebookGameForm.elements.game_date.value = team.today;
  setScorebookState("保存しました。", "ok");
  await loadScorebookRecords();
}

async function saveScorebookLineup(event) {
  event.preventDefault();
  const data = scorebookFormData(scorebookLineupForm);
  const member = selectedScorebookMember(scorebookLineupForm);
  const payload = {
    game_id: data.game_id,
    ...member,
    batting_order: toInteger(data.batting_order),
    position: data.position.trim(),
    starter: data.starter === "on",
    note: data.note.trim(),
  };
  rememberScorebookTeamCode();
  setScorebookState("保存中...", "muted");
  if (!scorebookClient) {
    saveLocalScorebookRow("lineups", payload, ["game_id", "member_id"]);
  } else {
    const result = await callScorebookRpc("castle_nurse_upsert_lineup", {
      p_game_id: payload.game_id,
      p_member_id: payload.member_id,
      p_player_name: payload.player_name,
      p_batting_order: payload.batting_order,
      p_position: payload.position,
      p_starter: payload.starter,
      p_note: payload.note,
    });
    if (!result.ok) {
      setScorebookState(result.message, "error");
      return;
    }
  }
  scorebookLineupForm.reset();
  setScorebookState("保存しました。", "ok");
  await loadScorebookRecords();
}

async function saveScorebookBatting(event) {
  event.preventDefault();
  const data = scorebookFormData(scorebookBattingForm);
  const member = selectedScorebookMember(scorebookBattingForm);
  const payload = {
    game_id: data.game_id,
    ...member,
    plate_appearances: toInteger(data.plate_appearances),
    at_bats: toInteger(data.at_bats),
    hits: toInteger(data.hits),
    doubles: toInteger(data.doubles),
    triples: toInteger(data.triples),
    home_runs: toInteger(data.home_runs),
    rbi: toInteger(data.rbi),
    runs: toInteger(data.runs),
    walks: toInteger(data.walks),
    strikeouts: toInteger(data.strikeouts),
    steals: toInteger(data.steals),
  };
  if (payload.plate_appearances > 0 && payload.at_bats > payload.plate_appearances) {
    setScorebookState("ABがPAを超えています。", "error");
    return;
  }
  if (payload.hits > payload.at_bats || payload.doubles + payload.triples + payload.home_runs > payload.hits) {
    setScorebookState("安打数の内訳を確認してください。", "error");
    return;
  }
  rememberScorebookTeamCode();
  setScorebookState("保存中...", "muted");
  if (!scorebookClient) {
    saveLocalScorebookRow("batting_stats", payload, ["game_id", "member_id"]);
  } else {
    const result = await callScorebookRpc("castle_nurse_upsert_batting_stat", {
      p_game_id: payload.game_id,
      p_member_id: payload.member_id,
      p_player_name: payload.player_name,
      p_plate_appearances: payload.plate_appearances,
      p_at_bats: payload.at_bats,
      p_hits: payload.hits,
      p_doubles: payload.doubles,
      p_triples: payload.triples,
      p_home_runs: payload.home_runs,
      p_rbi: payload.rbi,
      p_runs: payload.runs,
      p_walks: payload.walks,
      p_strikeouts: payload.strikeouts,
      p_steals: payload.steals,
    });
    if (!result.ok) {
      setScorebookState(result.message, "error");
      return;
    }
  }
  scorebookBattingForm.reset();
  setScorebookState("保存しました。", "ok");
  await loadScorebookRecords();
}

async function saveScorebookPitching(event) {
  event.preventDefault();
  const data = scorebookFormData(scorebookPitchingForm);
  const member = selectedScorebookMember(scorebookPitchingForm);
  let inningsOuts = 0;
  try {
    inningsOuts = parseScorebookInnings(data.innings);
  } catch (error) {
    setScorebookState(error.message, "error");
    return;
  }
  const payload = {
    game_id: data.game_id,
    ...member,
    innings_outs: inningsOuts,
    hits_allowed: toInteger(data.hits_allowed),
    earned_runs: toInteger(data.earned_runs),
    runs_allowed: toInteger(data.runs_allowed),
    walks: toInteger(data.walks),
    strikeouts: toInteger(data.strikeouts),
    pitches: toInteger(data.pitches),
  };
  rememberScorebookTeamCode();
  setScorebookState("保存中...", "muted");
  if (!scorebookClient) {
    saveLocalScorebookRow("pitching_stats", payload, ["game_id", "member_id"]);
  } else {
    const result = await callScorebookRpc("castle_nurse_upsert_pitching_stat", {
      p_game_id: payload.game_id,
      p_member_id: payload.member_id,
      p_player_name: payload.player_name,
      p_innings_outs: payload.innings_outs,
      p_hits_allowed: payload.hits_allowed,
      p_earned_runs: payload.earned_runs,
      p_runs_allowed: payload.runs_allowed,
      p_walks: payload.walks,
      p_strikeouts: payload.strikeouts,
      p_pitches: payload.pitches,
    });
    if (!result.ok) {
      setScorebookState(result.message, "error");
      return;
    }
  }
  scorebookPitchingForm.reset();
  setScorebookState("保存しました。", "ok");
  await loadScorebookRecords();
}

async function initScorebook() {
  if (!scorebookSection) return;
  buildScorebookOptions();
  restoreScorebookTeamCode();
  initScorebookClient();
  if (scorebookGameForm) scorebookGameForm.elements.game_date.value = team.today;
  await loadScorebookRecords();
}

function resultStatus(result) {
  if (result.ourScore > result.opponentScore) return "win";
  if (result.ourScore < result.opponentScore) return "loss";
  return "draw";
}

function renderResults() {
  resultList.innerHTML = results
    .map((result) => {
      const status = resultStatus(result);
      const title = result.opponent.includes("ゲーム")
        ? result.opponent
        : `VS ${result.opponent}`;
      const photo = result.photo
        ? `<img class="result-photo" src="${result.photo}" alt="${formatDate(result.date)}の試合写真" loading="lazy" />`
        : "";
      return `
        <a class="result-card ${result.photo ? "has-photo" : ""}" href="${result.url}" aria-label="${title}の試合詳細を見る">
          ${photo}
          <div class="result-date">${formatDate(result.date)}<br />${result.venue}</div>
          <div>
            <h3>${title}</h3>
            <p>${result.note}</p>
          </div>
          <div class="result-score ${status}">${result.ourScore} - ${result.opponentScore}</div>
        </a>
      `;
    })
    .join("");

  const latest = results[0];
  document.querySelector("#latestResultTitle").textContent = latest.opponent.includes("ゲーム")
    ? latest.opponent
    : `VS ${latest.opponent}`;
  document.querySelector("#latestResultText").textContent = latest.summary || latest.note;
  document.querySelector("#latestOurScore").textContent = latest.ourScore;
  document.querySelector("#latestOppScore").textContent = latest.opponentScore;
  const latestImage = document.querySelector("#latestResultImage");
  latestImage.src = latest.photo || "";
  latestImage.alt = latest.photo ? `${formatDate(latest.date)}の試合写真` : "";
  latestImage.hidden = !latest.photo;
  document.querySelector("#latestResultPoints").innerHTML = (latest.highlights || [])
    .map((highlight) => `<li>${highlight}</li>`)
    .join("");
}

function renderSummary() {
  const wins = results.filter((result) => result.ourScore > result.opponentScore).length;
  const losses = results.filter((result) => result.ourScore < result.opponentScore).length;
  const draws = results.length - wins - losses;
  const decidedGames = wins + losses;
  const winRate = decidedGames ? Math.round((wins / decidedGames) * 1000) / 1000 : 0;
  const today = new Date(`${team.today}T00:00:00+09:00`);
  const thirtyDaysLater = new Date(today);
  thirtyDaysLater.setDate(today.getDate() + 30);
  const upcoming = schedule.filter((game) => {
    const date = new Date(`${game.date}T00:00:00+09:00`);
    return date >= today && date <= thirtyDaysLater;
  });
  const next = upcoming[0] || schedule[0];

  document.querySelector("#seasonRecord").textContent = `${wins}勝${losses}敗${draws}分`;
  document.querySelector("#winRate").textContent = winRate.toFixed(3).replace(/^0\./, ".");
  document.querySelector("#memberCount").textContent = `${members.length}名`;
  document.querySelector("#nextMonthGames").textContent = `${upcoming.length}件`;
  document.querySelector("#nextGameTitle").textContent = scheduleTitle(next);
  document.querySelector("#nextGameDate").textContent = next ? `${formatScheduleDate(next)} ${next.time}` : "-";
  document.querySelector("#nextGameVenue").textContent = next?.venue || "-";
  document.querySelector("#nextGameOpponent").textContent = next?.opponent || "-";
}

let activePosition = "all";

document.querySelectorAll("[data-schedule-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll("[data-schedule-filter]")
      .forEach((item) => item.classList.toggle("is-active", item === button));
    activeScheduleFilter = button.dataset.scheduleFilter;
    renderSchedule(activeScheduleFilter);
  });
});

document.querySelectorAll("[data-position-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    activePosition = button.dataset.positionFilter;
    document
      .querySelectorAll("[data-position-filter]")
      .forEach((item) => item.classList.toggle("is-active", item === button));
    renderMembers(activePosition, memberSearch.value);
  });
});

memberSearch.addEventListener("input", () => {
  renderMembers(activePosition, memberSearch.value);
});

if (attendanceForm && attendanceMember && attendanceCandidateGrid && attendanceTeamCode) {
  attendanceMember.addEventListener("change", syncAttendanceForm);

  attendanceCandidateGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-candidate-id][data-status]");
    if (!button) return;
    attendanceDraft[button.dataset.candidateId] = button.dataset.status;
    renderCandidatePicker();
    renderAttendanceBoard();
  });

  attendanceViewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeAttendanceView = button.dataset.attendanceView;
      attendanceViewButtons.forEach((item) =>
        item.classList.toggle("is-active", item === button),
      );
      renderAttendanceBoard();
    });
  });

  attendanceTeamCode.addEventListener("change", async () => {
    rememberTeamCode();
    if (Object.keys(attendanceDraft).length || !attendanceClient) {
      return;
    }
    await loadAttendanceRecords();
    syncAttendanceForm();
  });

  attendanceForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!attendanceForm.reportValidity()) return;

    const selectedEntries = Object.entries(attendanceDraft);
    if (!selectedEntries.length) {
      setAttendanceState("候補日を選択してください。", "error");
      return;
    }

    rememberTeamCode();
    setAttendanceState("保存中...", "muted");
    for (const [candidateId, status] of selectedEntries) {
      const record = {
        event_id: candidateId,
        member_id: String(attendanceMember.value),
        status,
        comment: attendanceComment.value.trim(),
        updated_at: new Date().toISOString(),
      };
      const result = await saveAttendance(record, { reload: false });
      if (!result.ok) {
        setAttendanceState(result.message || "保存に失敗しました。", "error");
        return;
      }
    }

    if (attendanceClient) {
      await loadAttendanceRecords();
    }

    setAttendanceState("保存しました。", "success");
    renderAttendanceBoard();
    syncAttendanceForm();
  });
}

if (scorebookSection) {
  scorebookTabs.forEach((button) => {
    button.addEventListener("click", () => {
      scorebookTabs.forEach((item) => item.classList.toggle("is-active", item === button));
      scorebookPanels.forEach((panel) =>
        panel.classList.toggle("is-active", panel.dataset.scorebookPanel === button.dataset.scorebookTab),
      );
    });
  });

  scorebookTeamCode.addEventListener("change", async () => {
    rememberScorebookTeamCode();
    await loadScorebookRecords();
  });
  scorebookRefresh.addEventListener("click", loadScorebookRecords);
  scorebookGameForm.addEventListener("submit", saveScorebookGame);
  scorebookLineupForm.addEventListener("submit", saveScorebookLineup);
  scorebookBattingForm.addEventListener("submit", saveScorebookBatting);
  scorebookPitchingForm.addEventListener("submit", saveScorebookPitching);
}

renderSummary();
renderSchedule();
renderMembers();
renderResults();
if (attendanceForm) {
  initAttendance();
}
if (scorebookSection) {
  initScorebook();
}
initGoogleCalendarSchedule();
initPracticeSheetPanel();

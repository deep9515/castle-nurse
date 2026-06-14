const team = {
  name: "CASTLE NURSE",
  today: "2026-06-14",
  mainGround: "錦糸公園野球場",
};

const schedule = [
  {
    date: "2026-06-28",
    time: "時間未定",
    opponent: "練習",
    venue: "スポドリ@後楽園",
    type: "practice",
    meeting: "現地集合",
  },
  {
    date: "2026-07-01",
    displayDate: "7/XX",
    time: "時間未定",
    opponent: "練習",
    venue: "錦糸公園",
    type: "practice",
    meeting: "現地集合",
  },
];

const members = [
  {
    number: 0,
    name: "マサ",
    position: "外野手",
    bats: "右投右打",
    note: "チームの勝利のために、全力で戦う。",
    photo: "./assets/members/masa.jpg",
  },
  {
    number: 1,
    name: "ユウキ",
    position: "内野手",
    bats: "右投左打",
    note: "チームの勝利のために、全力で戦う。",
    photo: "./assets/members/yuki.jpg",
  },
  {
    number: 2,
    name: "ヤマダ",
    position: "内野手",
    bats: "右投左打",
    note: "チームの勝利のために、全力で戦う。",
    photo: "./assets/members/yamada.jpg",
  },
  {
    number: 4,
    name: "カネコ",
    position: "内野手",
    bats: "右投右打",
    note: "チームの勝利のために、全力で戦う。",
    photo: "./assets/members/kaneko.jpg",
  },
  {
    number: 5,
    name: "ウキシマ",
    position: "外野手",
    bats: "右投右打",
    note: "チームの勝利のために、全力で戦う。",
    photo: "./assets/members/ukishima.jpg",
  },
  {
    number: 11,
    name: "ハギシタ",
    position: "投手",
    bats: "右投右打",
    note: "チームの勝利のために、全力で戦う。",
    photo: "./assets/members/hagishita.jpg",
  },
  {
    number: 17,
    name: "ディルバート",
    position: "内野手",
    bats: "右投右打",
    note: "チームの勝利のために、全力で戦う。",
    photo: "./assets/members/dirbato.jpg",
  },
  {
    number: 81,
    name: "イヨリ",
    position: "内野手",
    bats: "右投右打",
    note: "チームの勝利のために、全力で戦う。",
    photo: "./assets/members/iyori.jpg",
  },
];

const results = [
  {
    date: "2026-05-31",
    opponent: "アウェイゲーム",
    venue: "アウェイ",
    ourScore: 4,
    opponentScore: 7,
    note: "序盤の大量失点から中盤に4点を返すも、3点差で敗戦。",
    summary:
      "序盤に大量失点を許し、試合の主導権を相手に握られる苦しい立ち上がり。それでも中盤、相手投手の制球の乱れを逃さず、四球とつなぐ意識で一気に4点を奪い返した。守備でも粘り強く立て直し、終盤にかけて攻勢を強める展開へ。あと一歩で流れを引き寄せるところまで迫ったが、序盤のビハインドを返し切れず、最終的には4-7の3点差で試合終了。敗戦の中にも、集中力を切らさず追い上げた収穫のある一戦となった。",
    highlights: ["中盤に一挙4得点", "相手投手の乱れを逃さず出塁", "終盤まで攻勢を強めた粘り"],
    photo: "./assets/results/game-20260531-01.jpg",
    url: "./results/2026-05-31.html",
  },
];

const typeLabels = {
  home: "ホーム",
  away: "ビジター",
  tournament: "大会",
  practice: "練習",
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
const memberGrid = document.querySelector("#memberGrid");
const resultList = document.querySelector("#resultList");
const memberSearch = document.querySelector("#memberSearch");
const contactForm = document.querySelector("#contactForm");
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

let attendanceRecords = [];
let attendanceClient = null;
let attendanceDraft = {};
let activeAttendanceView = "cards";

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
  return game.type === "practice" ? game.opponent : `vs ${game.opponent}`;
}

function sortedMembers() {
  return members
    .slice()
    .sort((a, b) => a.number - b.number || a.name.localeCompare(b.name, "ja"));
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
          <td>${formatScheduleDate(game)}</td>
          <td>${game.time}</td>
          <td>${game.opponent}</td>
          <td>${game.venue}</td>
          <td><span class="tag ${game.type}">${typeLabels[game.type]}</span></td>
          <td>${game.meeting}</td>
        </tr>
      `,
    )
    .join("");

  scheduleRows.innerHTML = rows;
}

function renderMembers(position = "all", query = "") {
  const normalizedQuery = query.trim().toLowerCase();
  const cards = sortedMembers()
    .filter((member) => position === "all" || member.position === position)
    .filter((member) => {
      if (!normalizedQuery) return true;
      return `${member.number} ${member.name}`.toLowerCase().includes(normalizedQuery);
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
            <span class="number">${String(member.number).padStart(2, "0")}</span>
            <span class="position">${member.position}</span>
          </div>
          <h3>${member.name}</h3>
          <p>${member.bats}<br />${member.note}</p>
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
        `<option value="${member.number}">${String(member.number).padStart(2, "0")} ${escapeHtml(
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

function memberNameById(memberId) {
  return members.find((member) => String(member.number) === String(memberId))?.name || memberId;
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
          const status = findAttendanceRecord(candidate.id, member.number)?.status || "unanswered";
          return `<td><span class="matrix-status ${status}">${attendanceStatusLabels[status]}</span></td>`;
        })
        .join("");
      return `
        <tr>
          <th>${String(member.number).padStart(2, "0")} ${escapeHtml(member.name)}</th>
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
  attendanceBoardTitle.textContent = "7月候補";
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
        : `vs ${result.opponent}`;
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
    : `vs ${latest.opponent}`;
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
  document.querySelector("#nextGameDate").textContent = `${formatScheduleDate(next)} ${next.time}`;
  document.querySelector("#nextGameVenue").textContent = next.venue;
  document.querySelector("#nextGameOpponent").textContent = next.opponent;
}

function buildContactMailto(values) {
  const subject = `【試合希望】${values.team}様より`;
  const body = [
    "キャッスルナース ご担当者様",
    "",
    "試合希望の問い合わせです。",
    "",
    `チーム名: ${values.team}`,
    `担当者名: ${values.name}`,
    `返信先メール: ${values.email}`,
    `希望日: ${values.date || "未定"}`,
    `希望場所: ${values.venue || "未定"}`,
    "",
    "内容:",
    values.message || "未記入",
    "",
    "よろしくお願いいたします。",
  ].join("\n");

  return `mailto:goldship.ougon@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

let activePosition = "all";

document.querySelectorAll("[data-schedule-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll("[data-schedule-filter]")
      .forEach((item) => item.classList.toggle("is-active", item === button));
    renderSchedule(button.dataset.scheduleFilter);
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

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const values = {
    team: document.querySelector("#contactTeam").value.trim(),
    name: document.querySelector("#contactName").value.trim(),
    email: document.querySelector("#contactEmail").value.trim(),
    date: document.querySelector("#contactDate").value,
    venue: document.querySelector("#contactVenue").value.trim(),
    message: document.querySelector("#contactMessage").value.trim(),
  };
  window.location.href = buildContactMailto(values);
});

renderSummary();
renderSchedule();
renderMembers();
renderResults();
initAttendance();

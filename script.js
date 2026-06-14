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
];

const members = [
  {
    number: 17,
    name: "ディルバート",
    position: "内野手",
    bats: "右投右打",
    note: "チームの勝利のために、全力で戦う。",
    photo: "./assets/members/dirbato.jpg",
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

const scheduleRows = document.querySelector("#scheduleRows");
const memberGrid = document.querySelector("#memberGrid");
const resultList = document.querySelector("#resultList");
const memberSearch = document.querySelector("#memberSearch");
const contactForm = document.querySelector("#contactForm");

function formatDate(value) {
  return new Intl.DateTimeFormat("ja-JP", {
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  }).format(new Date(`${value}T00:00:00+09:00`));
}

function scheduleTitle(game) {
  return game.type === "practice" ? game.opponent : `vs ${game.opponent}`;
}

function renderSchedule(filter = "all") {
  const rows = schedule
    .filter((game) => filter === "all" || game.type === filter)
    .map(
      (game) => `
        <tr>
          <td>${formatDate(game.date)}</td>
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
  const cards = members
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
  document.querySelector("#nextGameDate").textContent = `${formatDate(next.date)} ${next.time}`;
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

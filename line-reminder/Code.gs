const CONFIG = {
  scheduleSpreadsheetId: "1n3VHETRKGHBl6mvxo7cxyFBN8mCjplZHr67qf8KXDkw",
  scheduleSheetId: 775258869,
  teamSiteUrl: "https://deep9515.github.io/castle-nurse/",
  timezone: "Asia/Tokyo",
};

function doPost(e) {
  const payload = JSON.parse(e.postData.contents || "{}");
  const events = payload.events || [];
  const props = PropertiesService.getScriptProperties();

  events.forEach((event) => {
    const groupId = event.source && event.source.groupId;
    if (!groupId) return;
    props.setProperty("LINE_GROUP_ID", groupId);

    if (event.replyToken && event.type === "join") {
      replyText_(event.replyToken, "チームLINEグループを登録しました。以後、このグループへ日程リマインドを送ります。");
    }

    if (
      event.replyToken &&
      event.type === "message" &&
      event.message &&
      event.message.type === "text" &&
      event.message.text.includes("登録確認")
    ) {
      replyText_(event.replyToken, "このグループをリマインド送信先として登録済みです。");
    }
  });

  return ContentService.createTextOutput("OK");
}

function getSetupStatus() {
  const props = PropertiesService.getScriptProperties();
  Logger.log(
    JSON.stringify(
      {
        hasLineChannelAccessToken: Boolean(props.getProperty("LINE_CHANNEL_ACCESS_TOKEN")),
        hasLineGroupId: Boolean(props.getProperty("LINE_GROUP_ID")),
        scheduleSpreadsheetId: CONFIG.scheduleSpreadsheetId,
        scheduleSheetId: CONFIG.scheduleSheetId,
        teamSiteUrl: CONFIG.teamSiteUrl,
      },
      null,
      2,
    ),
  );
}

function sendNextScheduleTest() {
  const today = startOfToday_();
  const event = readScheduleEvents_().find((candidate) => candidate.date >= today);
  if (!event) throw new Error("Upcoming schedule event was not found.");
  pushText_(buildReminderText_(event, "テスト送信"));
}

function setupFreePlanTrigger() {
  resetReminderTriggers_();
  ScriptApp.newTrigger("sendTomorrowReminder").timeBased().everyDays(1).atHour(21).create();
}

function setupFullReminderTriggers() {
  resetReminderTriggers_();
  ScriptApp.newTrigger("sendTomorrowReminder").timeBased().everyDays(1).atHour(21).create();
  ScriptApp.newTrigger("sendTodayReminder").timeBased().everyDays(1).atHour(9).create();
}

function resetReminderTriggers() {
  resetReminderTriggers_();
}

function sendTomorrowReminder() {
  sendReminderForOffset_(1, "前日リマインド");
}

function sendTodayReminder() {
  sendReminderForOffset_(0, "当日リマインド");
}

function sendReminderForOffset_(offsetDays, label) {
  const targetDate = addDays_(startOfToday_(), offsetDays);
  const events = readScheduleEvents_().filter((event) => isSameDate_(event.date, targetDate));
  if (!events.length) return;

  events.forEach((event) => {
    const dedupeKey = `sent:${label}:${formatDateKey_(event.date)}:${event.type}:${event.opponent}`;
    if (PropertiesService.getScriptProperties().getProperty(dedupeKey)) return;

    pushText_(buildReminderText_(event, label));
    PropertiesService.getScriptProperties().setProperty(dedupeKey, new Date().toISOString());
  });
}

function readScheduleEvents_() {
  const spreadsheet = SpreadsheetApp.openById(CONFIG.scheduleSpreadsheetId);
  const sheet = spreadsheet
    .getSheets()
    .find((candidate) => candidate.getSheetId() === CONFIG.scheduleSheetId);
  if (!sheet) throw new Error(`Sheet ID not found: ${CONFIG.scheduleSheetId}`);

  const values = sheet.getDataRange().getValues();
  const headers = values.shift().map((header) => compact_(header));
  const column = (names) => headers.findIndex((header) => names.some((name) => header.includes(compact_(name))));

  const weekdayIndex = column(["曜日"]);
  const dateIndex = column(["月日"]);
  const typeIndex = column(["練習/試合", "練習・試合"]);
  const venueIndex = headers.findIndex((header) => header === "場所");
  const timeIndex = column(["時間帯"]);
  const opponentIndex = column(["相手/内容", "対戦相手", "内容"]);
  const attendanceManagerIndex = column(["メンバー出席管理"]);
  const memberStartIndex = attendanceManagerIndex >= 0 ? attendanceManagerIndex + 1 : opponentIndex + 1;

  return values
    .map((row) => {
      const date = parseDate_(row[dateIndex]);
      const attendance = headers
        .slice(memberStartIndex)
        .map((name, offset) => ({
          name,
          status: normalizeStatus_(row[memberStartIndex + offset]),
        }))
        .filter((item) => item.name && item.status);

      return {
        weekday: row[weekdayIndex] || "",
        date,
        type: String(row[typeIndex] || "").trim(),
        venue: row[venueIndex] || "未定",
        time: row[timeIndex] || "未定",
        opponent: row[opponentIndex] || "未定",
        attendance,
      };
    })
    .filter((event) => event.date && event.type && event.type !== "キャンセル");
}

function buildReminderText_(event, label) {
  const attending = namesFor_(event.attendance, "yes");
  const maybe = namesFor_(event.attendance, "maybe");
  const absent = namesFor_(event.attendance, "no");

  return [
    `【${label}】${event.type}予定`,
    `${formatDisplayDate_(event.date)} ${event.time}`,
    `場所: ${event.venue}`,
    `内容: ${event.opponent}`,
    "",
    `参加(${attending.length}): ${attending.join("、") || "なし"}`,
    `未定(${maybe.length}): ${maybe.join("、") || "なし"}`,
    `不参加(${absent.length}): ${absent.join("、") || "なし"}`,
    "",
    CONFIG.teamSiteUrl,
  ].join("\n");
}

function pushText_(text) {
  const props = PropertiesService.getScriptProperties();
  const token = props.getProperty("LINE_CHANNEL_ACCESS_TOKEN");
  const groupId = props.getProperty("LINE_GROUP_ID");
  if (!token) throw new Error("LINE_CHANNEL_ACCESS_TOKEN is missing.");
  if (!groupId) throw new Error("LINE_GROUP_ID is missing.");

  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/push", {
    method: "post",
    contentType: "application/json",
    headers: { Authorization: `Bearer ${token}` },
    payload: JSON.stringify({
      to: groupId,
      messages: [{ type: "text", text }],
    }),
  });
}

function replyText_(replyToken, text) {
  const token = PropertiesService.getScriptProperties().getProperty("LINE_CHANNEL_ACCESS_TOKEN");
  if (!token) return;

  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/reply", {
    method: "post",
    contentType: "application/json",
    headers: { Authorization: `Bearer ${token}` },
    payload: JSON.stringify({
      replyToken,
      messages: [{ type: "text", text }],
    }),
  });
}

function resetReminderTriggers_() {
  const managedFunctions = ["sendTomorrowReminder", "sendTodayReminder"];
  ScriptApp.getProjectTriggers().forEach((trigger) => {
    if (managedFunctions.includes(trigger.getHandlerFunction())) {
      ScriptApp.deleteTrigger(trigger);
    }
  });
}

function normalizeStatus_(value) {
  const status = String(value || "").trim();
  if (!status) return "";
  if (/[○◯⭕]/.test(status)) return "yes";
  if (/[△🔺]/.test(status)) return "maybe";
  if (/[×✕✖❌xX]/.test(status)) return "no";
  return "";
}

function namesFor_(attendance, status) {
  return attendance.filter((item) => item.status === status).map((item) => item.name);
}

function compact_(value) {
  return String(value || "").replace(/\s+/g, "");
}

function parseDate_(value) {
  if (Object.prototype.toString.call(value) === "[object Date]" && !Number.isNaN(value.getTime())) {
    return value;
  }
  const match = String(value || "").match(/^(\d{4})年(\d{1,2})月(\d{1,2})日$/);
  if (!match) return null;
  return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
}

function startOfToday_() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function addDays_(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function isSameDate_(a, b) {
  return formatDateKey_(a) === formatDateKey_(b);
}

function formatDateKey_(date) {
  return Utilities.formatDate(date, CONFIG.timezone, "yyyy-MM-dd");
}

function formatDisplayDate_(date) {
  return Utilities.formatDate(date, CONFIG.timezone, "M/d(E)");
}

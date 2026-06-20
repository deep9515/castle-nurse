# LINE group reminders

Google Apps Scriptで、試合日程表を読み取り、チームLINEグループに公式LINE botからリマインドを送ります。

## 0. 進める順番

1. LINE Developersで `Channel access token (long-lived)` を発行する
2. Apps Scriptへ `Code.gs` を貼り、Script Propertiesにトークンを保存する
3. Apps ScriptをWeb appとしてデプロイし、そのURLをLINEのWebhook URLに設定する
4. 公式LINE botをチームLINEグループに招待する
5. グループで `登録確認` と送って、`LINE_GROUP_ID` が保存されることを確認する
6. Apps Scriptで `sendNextScheduleTest` を実行して、テスト通知を送る
7. 問題なければ `setupFreePlanTrigger` または `setupFullReminderTriggers` を実行する

## 1. LINE Developers側

1. LINE Developers Consoleで対象の公式LINEアカウントのMessaging API channelを開く
2. `Channel access token (long-lived)` を発行する
3. Webhookを有効化する
4. グループ・複数人トークへの参加を許可する
5. 公式LINE botをチームのLINEグループに招待できる状態にする

## 2. Google Apps Script側

1. 新しいApps Scriptプロジェクトを作る
2. `Code.gs` の中身を貼る
3. Project Settings > Script Properties に以下を追加する

| Key | Value |
|---|---|
| `LINE_CHANNEL_ACCESS_TOKEN` | LINE Developersで発行した長期チャネルアクセストークン |

4. Deploy > New deployment > Web app
5. Execute as: `Me`
6. Who has access: `Anyone`
7. 発行されたWeb app URLをLINE DevelopersのWebhook URLに設定する
8. LINE Developers上でWebhookをVerifyする

## 3. groupId取得

1. 公式LINE botをチームLINEグループに招待する
2. グループで `登録確認` と送る
3. Apps ScriptのScript Propertiesに `LINE_GROUP_ID` が自動保存される
4. Apps Scriptで `getSetupStatus` を実行し、ログで以下を確認する

```json
{
  "hasLineChannelAccessToken": true,
  "hasLineGroupId": true
}
```

保存されない場合は、Webhook URL、Webhookの有効化、グループ参加許可の3点を確認します。

## 4. テスト送信

Apps Scriptで `sendNextScheduleTest` を実行します。次回以降の予定を1件読み取り、チームLINEグループへテスト通知を送ります。

テスト送信が成功したら、本文の以下を確認します。

- 日付、時間帯、場所が正しい
- 内容が正しい
- 参加、未定、不参加の人数とメンバー名が正しい
- 最後のURLがチームサイトになっている

## 5. 定期実行

無料枠を優先するなら、まずは前日リマインドだけにします。

| Function | What it does |
|---|---|
| `setupFreePlanTrigger` | 毎日21時に前日リマインドだけ送る |
| `setupFullReminderTriggers` | 毎日21時の前日リマインドと、毎日9時の当日リマインドを送る |
| `resetReminderTriggers` | このスクリプトが作ったリマインド用トリガーを削除する |

手動で設定する場合は、Apps ScriptのTriggersで以下を設定します。

| Function | Suggested timing |
|---|---|
| `sendTomorrowReminder` | 毎日 21:00 |
| `sendTodayReminder` | 毎日 09:00 |

送信済みキーをScript Propertiesに保存するため、同じ予定・同じリマインド種別は重複送信しません。

## Cost

Google Apps Scriptは小規模利用なら基本0円です。LINE公式アカウントのPush APIはメッセージ通数にカウントされます。グループ宛は受信人数分として扱われるため、17人グループに2回送ると1予定あたり約34通です。

無料枠重視なら `setupFreePlanTrigger` から始めてください。17人グループに前日1回だけ送る場合、1予定あたり約17通です。

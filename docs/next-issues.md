# 現在地と次に切る Issue

- 最終更新: 2026-10-28
- 書く人: PO。開発チームは Issue レポートの「PO への申し送り」で渡す。

## 現在地

| 項目 | 状態 |
|---|---|
| 環境の初期準備 | ローカルの導入・自動確認・表示確認が完了。確認結果は下記 |
| main への反映 | PR #10 を採用・squash マージ済み（`53652f2`）。Issue #8 の完了レポート・改善 E/F・ADR 0002 は `501ace7` |
| 人間の実機確認 | #8 の両 PR を並べて表示し「見ました。#10でいいね。」と採用。#5 からの持ち越しもこの表示で確認。端末・項目ごとの結果は未記録。区切り1の説明確認とは分ける |
| 区切り1 | 確認待ち。実装・マージの完了と、仕様4章の説明ができることの確認を分ける |
| リモート CI | #8 マージ `53652f2` と完了記録 `501ace7` で成功（[マージ](https://github.com/dyamada-jaki/agent-dev-slide/actions/runs/40658638282)、[完了記録](https://github.com/dyamada-jaki/agent-dev-slide/actions/runs/40659244176)） |
| PO | この Orca の Codex 端末を登録済み。再起動時は再登録する |
| GitHub | 「開発可」「着手中」を作成済み。squash merge の許可を確認済み |
| 起動係 | 有効化済み。Issue #8 は完了。#4・#9 は方針の未決事項があるため開発可を付けていない（[起動手順](setup.md)） |
| LT の前提 | AI開発に関心がある開発者へ、15分程度で全体像を説明。人間と合意済み（仕様 `26838ab`） |
| 説明用スライド | [Issue #1](https://github.com/dyamada-jaki/agent-dev-slide/issues/1) の導入6枚を実装・検証・取り込み済み。PR #2 は不採用でクローズ、リモートブランチを保存 |
| 個人用デザイン | [Issue #8](https://github.com/dyamada-jaki/agent-dev-slide/issues/8) 完了。PR #10 の共通テーマ `paper` を導入6枚に適用。PR #11 はブランチ保存でクローズ。挿絵の追加・役割への人物割り当ては後続の検討候補 |
| スクラムの用語・対比 | 人間の希望を spec.md 2.3 に記録し、スクラムガイドの参照先を追加。[Issue #4](https://github.com/dyamada-jaki/agent-dev-slide/issues/4) を先行登録。対応表などが未決のため開発可は付けない |
| 採用した技術判断 | [ADR 0002](decisions/0002-共通デザインをMarpのテーマファイルに置く.md)。図は原稿内 HTML、見た目は `themes/paper.css`、画像は生成時に `dist/assets` へ複製。ADR 0001 は置き換え済み。後続の計画前に読む |

## 初期準備の確認記録

- 対象: セットアップのコミット `375b88ec6c24d91873b59a12ce86db407feacb5b`。
- 環境: macOS、Node.js 24.14.0、npm 11.9.0、インストール済みの Google Chrome。
- `npm ci` と `npm run check`: 成功。Markdown・ローカル参照・ガイド同期・HTML・PDF を確認。
- HTML: 検証用の headless Chrome、実測 1280×720、HTTP 200、JavaScript エラーなし。1ページの表紙を画像でも確認し、日本語の文字切れ・重なりなし。
- PDF: 生成した1ページを Quick Look で画像化して目視。日本語の表示・収まりを確認。
- 通常のブラウザ操作ツールは接続／権限が不足していたため未使用。上記のエージェントによる確認を、人間の実機確認とは扱わない。
- `npm run dev`: 5273 で起動を確認。確認後に終了。既存プロジェクトの 5173・5182 は変更していない。
- 起動係の precheck: 開発可 0・着手中 0・開発チーム 0、終了コード1で起動しないことを確認。
- `npm audit`: 残件あり。[環境構築](setup.md) に記録。

## 完了した Issue

[Issue #1: LTの導入：開発プロセスの全体像と役割を説明する](https://github.com/dyamada-jaki/agent-dev-slide/issues/1)

採用 PR #3、不採用 PR #2。相互レビューと PO の受け入れ確認を経て、人間が採用を決定した。詳細は [レポート](issue-reports/issue-1.md) と [完了コメント](https://github.com/dyamada-jaki/agent-dev-slide/issues/1#issuecomment-6460092374)。区切り1の達成は上記のとおり確認待ち。

[Issue #5: 導入の代表3枚で個人用スライドのデザイン2案を比較する](https://github.com/dyamada-jaki/agent-dev-slide/issues/5)

採用 PR #6（main `e0d645a`）、不採用 PR #7（ブランチ保存）。修正後の head `3480008` で再レビュー・PO の受け入れ確認・CI 成功を確認し、人間の承認を経て完了した。[レポート](issue-reports/issue-5.md) と [完了コメント](https://github.com/dyamada-jaki/agent-dev-slide/issues/5#issuecomment-6462780411) に記録。見本の完成と、実機確認・正式テーマ化は区別する。

[Issue #8: 個人用の共通デザインを整え、導入6枚に適用する](https://github.com/dyamada-jaki/agent-dev-slide/issues/8)

採用 PR #10（main `53652f2`）、不採用 PR #11（ブランチ保存）。人間が両案を表示比較して採用し、重複画像の削除・再確認を経て完了した。[レポート](issue-reports/issue-8.md) 11・13〜15章と [完了コメント](https://github.com/dyamada-jaki/agent-dev-slide/issues/8#issuecomment-6464624201) に記録。改善 E/F と ADR 0002 は反映済み。

## 先行登録した Issue

[Issue #4: スクラムの用語と対比を導入に加える](https://github.com/dyamada-jaki/agent-dev-slide/issues/4)。受け入れ条件と着手条件は Issue を正とする。Issue #5 のデザイン比較という前提は完了した。対応表・対比の深さ・表記の合意は未決のため、まだ「開発可」は付けない。

[Issue #9: 次章：Issue #5 の実例で Issue 1本の流れを説明する](https://github.com/dyamada-jaki/agent-dev-slide/issues/9)。6枚・5〜6分を目安にする構成を人間が了承し、spec.md 2.4 に記録した。Issue #8 の共通デザインを利用する。スクラムの用語方針と元資料のマージ実行担当の記載不一致を着手前に整理するため、先行登録のみで「開発可」は付けない。

## 次に進める Issue

Issue #9 の次章を準備する。共通デザインの main への取り込みは完了した。着手前に、スクラム用語の方針と元資料のマージ担当の記載不一致を人間と整理する。#4 との実装順序もそのときに決める。

Issue #8 から、挿絵を増やし AI の役割にも人物を割り当てたいという希望を受領した。次章の計画前に、キャラクター・人間との見分け方・置くページを検討する。具体案が決まるまでは配置や対応を実装者の推測で固定しない。

## 次に切る Issue

以下は後続の構成候補で、受け入れ条件は未確定。本文の「Issue 1本の流れ」へ進む前に、スクラムの用語方針を決める。

共通デザインと導入6枚への適用は Issue #8 で完了。追加のページ型や他の発表向けの整備は、今回の適用結果を見て必要なものだけ検討する。

挿絵の追加・役割の人物表現は後続 Issue の候補。spec.md 2.2 に人間の希望と未決事項を記録した。導入への追加と次章での利用の範囲を決めてから Issue にする。

次章「Issue 1本の流れ」は Issue #9 に登録済み。後続は次を候補とする。

1. 人間の判断と記録: #9 で扱う実例との重複を避け、残す記録の使い方を補足する必要があるかを全体構成で判断する。
2. 始め方: 環境の準備、仕様の議論、最初の Issue、起動係。

全体の枚数と時間配分は、15分程度の LT に収まるように計画と通し確認で調整する。
GitHub に登録した下書きはこの節から消して二重管理しない。

## 持ち越しと次回の効果確認

| 項目 | 状態・担当・確認時点 | 記録先 |
|---|---|---|
| 導入の表示・口頭説明 | 表示比較後の #10 採用は記録済み。区切り1の口頭説明確認は別に残す | Issue #8 レポート15章、spec.md 4章 |
| CI の実行結果 | Issue #8 のマージと完了記録で成功。以後も対象コミットごとに確認 | 現在地にある Actions リンク |
| 開発依存の監査 | 17件（high 12、low 5）は未解消。依存更新を別 Issue 候補として扱い、導入の文書制作には混ぜない。対応時に再監査・生成確認を行う | [環境構築](setup.md) |
| 共通テーマとフォント差 | 後続の計画で ADR 0002・design.md を読み、手元と CI の PDF（Noto）の文字切れを開発チームが確認 | ADR 0002、次の Issue のレポート |
| Marp の標準入力待ち | Issue #5 で入力を開いたまま2〜4秒で終了し、停止0件。効果確認は完了、設定は継続 | Issue #5 レポート10章 |
| Codex の更新案内 | Issue #5 の起動5回で失敗0件。案内自体は未観測のため、新しい版が出たときに開発チームが再確認 | Issue #5 レポート10章 |
| 受け入れ条件変更後の修正 | Issue #5 で PO 更新後に修正開始。条件変更による修正は1回で済み、効果を観測。手順を継続 | Issue #5 レポート10章 |
| マージ担当の参照元不一致 | 固定版の README と workflow.md の相違を確認済み。8ステップの Issue 着手前に PO と人間が扱いを決める | sources.md、spec.md 5章 |
| 実機確認 | #8 の表示比較と採用判断を記録済み。項目ごとの結果は未記録であり、すべてを個別に確認済みとはしない | spec.md 2.2、PR #10 の実機確認コメント |
| 改善案 A〜D | #8 で A（計画の要点）・B（代替確認）の効果を観測、継続。C は新規人物を描くときに確認。D は画像1件の削除で約2分という材料を得たが継続観測 | Issue #8 レポート13章 |
| 改善 E・F | 人間の採用後 `501ace7` で反映済み。次の開発チームが、待機中の通知の蓄積、プレビュー画像の置き場所の迷い、Orca のキー操作結果を確認 | Issue #8 レポート14章、testing.md 2章 |
| 品質レビューの効果 | PR ごとの有効な独自指摘に差があり継続観測。別の種類の Issue でも開発チームが効果と負担を記録する。次回の実施は人間の指定に従う | Issue #5 レポート10章、testing.md 5章 |

## PO への申し送り

Issue #1 の [レポート12章](issue-reports/issue-1.md) と [コメント](https://github.com/dyamada-jaki/agent-dev-slide/issues/1#issuecomment-6460092374) を受領。スクラムを扱う意図を仕様に、参照資料と記載の不一致を sources.md に、現在地と効果確認を本ファイルに反映した。スクラムの具体的な対応表と区切り1の達成は未確定。

Issue #5 の [レポート12章](issue-reports/issue-5.md) と [完了コメント](https://github.com/dyamada-jaki/agent-dev-slide/issues/5#issuecomment-6462780411) を受領。デザインの判断は spec.md 2.2 に反映済み。今回、採用・マージの完了と実機確認の残件を仕様・現在地へ反映し、後続テーマの検討事項と改善案の判断待ちを引き継いだ。#4 の具体的な対応表と実装順序は未決。

追加の [改善反映コメント](https://github.com/dyamada-jaki/agent-dev-slide/issues/5#issuecomment-6462970624) で A〜C の採用・反映を確認し、効果確認を Issue #8 に引き継いだ。D は継続観測。

Issue #8 の [完了コメント](https://github.com/dyamada-jaki/agent-dev-slide/issues/8#issuecomment-6464624201) と [レポート15章](issue-reports/issue-8.md) を受領。採用・マージ・実機確認の状態、ADR 0002、反映済み改善の効果確認を更新した。挿絵と役割への人物割り当ての希望は仕様と後続候補に記録し、具体案の検討へ引き継いだ。

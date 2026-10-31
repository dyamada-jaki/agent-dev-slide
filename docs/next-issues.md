# 現在地と次に切る Issue

- 最終更新: 2026-10-31
- 書く人: PO。開発チームは Issue レポートの「PO への申し送り」で渡す。

## 現在地

| 項目 | 状態 |
|---|---|
| 環境の初期準備 | ローカルの導入・自動確認・表示確認が完了。確認結果は下記 |
| main への反映 | PR #19 を採用・squash マージ済み（`3e59e97`）。Issue #17 の完了レポートは `df9b42c` |
| 人間の実機確認 | #17 で前提・2案への接続・10枚目・読みやすさ・ページ送り・説明時間を確認。12枚目の画像は修正後にOK。最終 head の SHA 削除後の4枚の結果・端末・実測秒数は記録なし |
| 区切り1 | 確認待ち。実装・マージの完了と、仕様4章の説明ができることの確認を分ける |
| リモート CI | #17 マージ `3e59e97` の [CI](https://github.com/dyamada-jaki/agent-dev-slide/actions/runs/41184855523) は成功。完了記録 `df9b42c` の [CI](https://github.com/dyamada-jaki/agent-dev-slide/actions/runs/41185042508) も成功 |
| PO | この Orca の Codex 端末を登録済み。再起動時は再登録する |
| GitHub | 「開発可」「着手中」を作成済み。squash merge の許可を確認済み |
| 起動係 | 有効化済み。#17 は完了。合意済みの順序に従い、申し送りを反映した #4 を開発可として計画提案へ進む |
| LT の前提 | AI開発に関心がある開発者へ、15分程度で全体像を説明。人間と合意済み（仕様 `26838ab`） |
| 説明用スライド | 導入6枚＋board #37 の前提2枚＋工程6枚＝計14枚。見積もり約11分35秒（次章7分35秒）。PR #18 は不採用・ブランチ保存 |
| 個人用デザイン | #8 の共通テーマに加え、#12 の PR #14 の人物を採用済み。AI の役割は名前のない人物、開発者は2人、人間はレナ・ヨナ。PR #13 はブランチ保存でクローズ。次章でも再利用済み |
| スクラムの用語・対比 | [Issue #4](https://github.com/dyamada-jaki/agent-dev-slide/issues/4) の説明方針は合意済み。#17 の採用・main 反映という着手条件を満たした。14枚と残り約3分25秒の見積もりを踏まえて計画する |
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

[Issue #12: 導入4枚目に役割を表す人物画を加え、次章で再利用できる形にする](https://github.com/dyamada-jaki/agent-dev-slide/issues/12)

採用 PR #14（main `7eaea0e`）、不採用 PR #13（ブランチ保存）。配置説明の1行を訂正し、CI 成功後にマージした。人間の採用理由は「開発者が二人になっているので」。実機確認の結果は記録なし。[レポート](issue-reports/issue-12.md) 10〜14章と [完了コメント](https://github.com/dyamada-jaki/agent-dev-slide/issues/12#issuecomment-6495872545) に記録。改善1は反映済みで、ADR は追加しない。

[Issue #9: 次章：Issue #5 の実例で Issue 1本の流れを説明する](https://github.com/dyamada-jaki/agent-dev-slide/issues/9)

採用 PR #15（main `19656aa`）、不採用 PR #16（ブランチ保存）。実機確認を経て採用し、題材の差し替えを後続へ分けた。[レポート](issue-reports/issue-9.md) 10〜12章と [完了コメント](https://github.com/dyamada-jaki/agent-dev-slide/issues/9#issuecomment-6537464005)。閉じた #9 の受け入れ条件は当時の記録として残す。

[Issue #17: 次章の実例を overstrata-board #37 の移動力設定へ差し替える](https://github.com/dyamada-jaki/agent-dev-slide/issues/17)

採用 PR #19（main `3e59e97`）、不採用 PR #18（ブランチ保存）。PO は5回確認し、差し戻し0回。人間の判断による前提・起動の説明・操作前後の画像・SHA表示の修正を反映した。[レポート](issue-reports/issue-17.md) 13〜16章と[完了コメント](https://github.com/dyamada-jaki/agent-dev-slide/issues/17#issuecomment-6541192697)。閉じた Issue の条件は当時の記録として保持する。

## 次に進める Issue

[Issue #4: スクラムの用語と対比を導入に加える](https://github.com/dyamada-jaki/agent-dev-slide/issues/4)。spec.md 2.3 の説明方針と #17 → #4 の順序は合意済み。#17 が採用・main 反映済みとなり、着手条件を満たした。導入6枚に短い共通点の説明、ノートに厳密な違いを加える範囲を維持する。

現行は計14枚・見積もり11分35秒。次章7〜14枚目を維持し、スクラムの追加説明と質疑を含め全体15分程度に収める配分を計画に示す。既存の確認結果は引き継ぎ、最終版の見え方・時間の実測は #4 後の人間の通し確認で対象版と結果を残す。未記録の確認結果を採用済みの理由だけで補わない。

## 次に切る Issue

以下は後続の構成候補で、受け入れ条件は未確定。次は #4。その後の必要性を判断する。

共通デザインと導入6枚への適用は Issue #8 で完了。追加のページ型や他の発表向けの整備は、今回の適用結果を見て必要なものだけ検討する。

役割の人物表現は Issue #12 で完了。他の導入ページへの挿絵追加は、今回の結果を見て必要に応じて検討する。

次章「Issue 1本の流れ」は #17 で board #37 の実例へ差し替え済み。後続は次を候補とする。

1. 人間の判断と記録: #17 で扱う実例との重複を避け、残す記録の使い方を補足する必要があるかを全体構成で判断する。
2. 始め方: 環境の準備、仕様の議論、最初の Issue、起動係。
3. 発表・配布形式: 人間の「このあと、HTMLかパワポの形式にしたい」を受領。現状の Marp HTML・PDFを踏まえ、発表方法・編集の必要性・配布先から既存HTMLの整備かPPTX等の追加かを人間と決める。まだ受け入れ条件は定めない。

全体の枚数と時間配分は、15分程度の LT に収まるように計画と通し確認で調整する。
GitHub に登録した下書きはこの節から消して二重管理しない。

## 持ち越しと次回の効果確認

| 項目 | 状態・担当・確認時点 | 記録先 |
|---|---|---|
| 導入の表示・口頭説明 | #9 で導入4→5と次章の実機確認を実施。区切り1の口頭説明の達成確認とは分ける | Issue #9 レポート7・8・10〜12章 |
| CI の実行結果 | #17 のマージ・完了記録で成功。以後も対象コミットごとに確認 | Issue #17 レポート15・16章 |
| 開発依存の監査 | 17件（high 12、low 5）は未解消。依存更新を別 Issue 候補として扱い、導入の文書制作には混ぜない。対応時に再監査・生成確認を行う | [環境構築](setup.md) |
| 共通テーマとフォント差 | 後続の計画で ADR 0002・design.md を読み、手元と CI の PDF（Noto）の文字切れを開発チームが確認 | ADR 0002、次の Issue のレポート |
| Marp の標準入力待ち | Issue #5 で入力を開いたまま2〜4秒で終了し、停止0件。効果確認は完了、設定は継続 | Issue #5 レポート10章 |
| Codex の更新案内 | #9 のレビューワーカーで発生。「次の版までスキップ」後に起動し直して復旧。手順を継続 | Issue #9 レポート7・8・10〜12章 |
| 受け入れ条件変更後の修正 | Issue #5 で PO 更新後に修正開始。条件変更による修正は1回で済み、効果を観測。手順を継続 | Issue #5 レポート10章 |
| マージ担当の参照元不一致 | 説明方針は合意済み。#9 では人間が採用・実行内容を承認し、開発チームがマージすると説明する。記載不一致はノートに残す | sources.md、spec.md 2.4 |
| 実機確認 | #17 の確認済み項目を保持。最終SHA削除後の4枚の結果・秒数は未記録。#4 後の人間の通し確認で版と結果を記録 | Issue #17 レポート13〜16章 |
| 改善案 A〜D | #12 で A・B・C・D の効果を観測。小さな文書訂正は差分・影響・CI を記録して扱った。既存の確認手順を継続する | Issue #12 レポート13章 |
| 改善 E・F | #9 で F の代替確認とプレビューの効果を観測。E は長い計画承認待ちが起きず未観測、継続 | Issue #9 レポート7・8・10〜12章 |
| #12 の改善1 | #9 で人間が起動を頼まず確認へ進め、効果を観測。最終報告前の起動・待ち受け・HTTP 200 確認を継続 | Issue #9 レポート7・8・10〜12章 |
| 作業時間・モデルの記録 | #9 で待ちの印を観測。Claude Code ワーカーの effective が null の件は継続観測 | Issue #9 レポート7・8・10〜12章 |
| 品質レビューの効果 | PR ごとの有効な独自指摘に差があり継続観測。別の種類の Issue でも開発チームが効果と負担を記録する。次回の実施は人間の指定に従う | Issue #5 レポート10章、testing.md 5章 |
| #9 改善 P1 | #17 では所見を書いたが前提不足を見落とし、効果なし。改善案 P2 は判断待ち | Issue #17 レポート16章 |
| #17 改善 P2〜P5 | 人間の判断待ち。P2: 本文だけで前提を理解できるか、P3: PO依頼前の現head CI/PDF記録、P4: 人間の回答を忠実に渡す・具体的な言葉、P5: 代替表示確認と接続案内。採用・手順変更は未実施 | Issue #17 レポート16章 |

## PO への申し送り

Issue #1 の [レポート12章](issue-reports/issue-1.md) と [コメント](https://github.com/dyamada-jaki/agent-dev-slide/issues/1#issuecomment-6460092374) を受領。スクラムを扱う意図を仕様に、参照資料と記載の不一致を sources.md に、現在地と効果確認を本ファイルに反映した。スクラムの具体的な対応表と区切り1の達成は未確定。

Issue #5 の [レポート12章](issue-reports/issue-5.md) と [完了コメント](https://github.com/dyamada-jaki/agent-dev-slide/issues/5#issuecomment-6462780411) を受領。デザインの判断は spec.md 2.2 に反映済み。今回、採用・マージの完了と実機確認の残件を仕様・現在地へ反映し、後続テーマの検討事項と改善案の判断待ちを引き継いだ。#4 の具体的な対応表と実装順序は未決。

追加の [改善反映コメント](https://github.com/dyamada-jaki/agent-dev-slide/issues/5#issuecomment-6462970624) で A〜C の採用・反映を確認し、効果確認を Issue #8 に引き継いだ。D は継続観測。

Issue #8 の [完了コメント](https://github.com/dyamada-jaki/agent-dev-slide/issues/8#issuecomment-6464624201) と [レポート15章](issue-reports/issue-8.md) を受領。採用・マージ・実機確認の状態、ADR 0002、反映済み改善の効果確認を更新した。挿絵と役割への人物割り当ての希望は仕様と後続候補に記録し、具体案の検討へ引き継いだ。

Issue #12 の [完了コメント](https://github.com/dyamada-jaki/agent-dev-slide/issues/12#issuecomment-6495872545) と [レポート14章](issue-reports/issue-12.md) を受領。採用・マージ、見出し表記、次章の人物の対応、改善の効果確認を反映した。実機確認の結果は未記録として残し、#9 で確認する方針を引き継ぐ。

Issue #9 の [完了コメント](https://github.com/dyamada-jaki/agent-dev-slide/issues/9#issuecomment-6537464005) と [レポート12章](issue-reports/issue-9.md) を受領。採用・マージ・実機確認結果と、overstrata-board への実例差し替え方針を反映した。その後、題材 #37 と制作順 #17 → #4 を人間が了承。改善 P1 も採用・反映済みとして効果確認を引き継ぐ。

Issue #17 の[完了コメント](https://github.com/dyamada-jaki/agent-dev-slide/issues/17#issuecomment-6541192697)とレポート16章を受領。採用・main 反映、14枚と時間見積もり、実機確認の範囲、本文の「ゲームの進行役」とSHAをノートに残す判断を仕様・現在地へ反映した。#4 の前提を更新し、発表・配布形式の希望と未採用の改善案 P2〜P5 を引き継いだ。

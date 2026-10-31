# 説明対象の参照元

説明するプロセスの出典。制作に合わせて変更する本プロジェクトの設定と区別する。

## 元テンプレート

- リポジトリ: [dyamada-jaki/agent-dev-template](https://github.com/dyamada-jaki/agent-dev-template)
- 参照版: `78c72e2a824ef1056e8ecbcae141818acf28ec71`（2026-10-27）
- GitHub の `template_repository` から、本プロジェクトの直接の作成元であることを確認した。
- 初期 README の Git blob は元テンプレートの参照版と一致（`739d718e8e414d3ab21df8f5da00bf285c447de1`）。
- 本プロジェクトの初期コミット: `a1f0ab42537cf2fd79701d91ec40fc4f8df5dd20`。初期状態の文書は Git 履歴からも読める。

| 資料 | 説明に使う内容 |
|---|---|
| [README](https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md) | 全体像、席と受け渡し、Issue 1本の流れ、始め方 |
| [開発手順](https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md) | 3つの席、8ステップ、人間の判断、起動係 |
| [テスト・レビュー方針](https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/testing.md) | 検証、相互レビュー、独立した品質レビュー、証拠の残し方 |
| [種類別設定](https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/profiles/README.md) | Web アプリ以外にもプロセスを適用する方法 |
| [スキル](https://github.com/dyamada-jaki/agent-dev-template/tree/78c72e2a824ef1056e8ecbcae141818acf28ec71/.claude/skills) | 実装・二重実装・受け入れ確認・完了処理の具体的な手順 |

### 固定版で確認した記載の不一致

README の工程図（65行目）はマージと後片付けを開発チームの作業とし、workflow.md（225行目）はマージを人間がすると記載している。両方を参照版で確認済み（2026-10-28）。2026-10-30 に下記の説明方針を人間と合意した。本プロジェクトで実際に行った手順と、説明対象の記述を混同しない。

2026-10-30 に同じ固定版を再確認した。workflow.md のステップ7も開発チームを担当とし、[finish-issue の手順3・4](https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/.claude/skills/finish-issue/SKILL.md)は、人間が具体的な実行内容を承認した後に開発チームがマージを実行する構成だった。[Issue #5 の完了記録](https://github.com/dyamada-jaki/agent-dev-slide/blob/4c79405a64f13ec4359e6ceb57d1c871ba84b35f/docs/issue-reports/issue-5.md) 9章も同じ流れである。人間の「OKです。」を受け、説明は「人間が採用・実行内容を承認し、開発チームがマージする」に統一する。workflow.md ステップ6の記載不一致は発表ノートに短く残す。参照版や元資料は変更せず、スライドでの説明方針として扱う。

## スクラム

- 資料: Ken Schwaber・Jeff Sutherland『スクラムガイド』2020年11月版。
- [公式の配布ページ](https://scrumguides.org/download.html) で、2020年11月版が現行の公式版であることを確認した（2026-10-28）。
- [日本語訳 PDF](https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Japanese.pdf)。公式配布ページに掲載された訳を用いる。
- 用途: spec.md 2.3 の用語・対比を検討するための定義の参照先。「スクラムチーム」「スクラムイベント」「スクラムの作成物」の各節を参照する。
- 元テンプレートとの比較は spec.md 2.3 の合意した対応表に従う。スクラムガイドの説明と、本プロセスへの当てはめの解釈を分けて記す。2026-10-30 に日本語訳の「スクラムの理論」「スクラムチーム」「スプリント」「スプリントレビュー」「スプリントレトロスペクティブ」「スクラムの作成物」を再確認し、人間の合意後に [spec.md](spec.md) 2.3 に説明方針を確定した。

## Overstrata のデザイン参照

仕様2.2の見本制作では、既存の作品を画風とキャラクターの参照に使う。ロゴや情景画の常設は求めない。人間の判断により、Overstrata の出典・クレジットはスライド・発表ノート・制作記録の必須項目としない。以下は制作時の参考情報として残す。

- 手元の参照プロジェクト: `overstrata-web`。参照版 `a0fcee059cfe5dd4f628ad7d022000e37ffffe1f`。
- `css/tokens.css`: 配色・書体の候補。今回のスライドで採用済みの指定ではない。
- `images/rules/fig_ch1_hantei_4koma.png`: デフォルメした人物表現の参照。[公開サイトの第1章](https://web.overstrata.workers.dev/rules_ch1)にも掲載。
- キャラクターの参照資料が必要なら、隣接する `overstrata` プロジェクトの既存資料を読み取り専用で確認する。未公開資料の本文・生成指示を本リポジトリへ転載しない。
- 見本で使う画像は、使用ファイルと生成・編集した素材の区別を保守用に記録する。参照元の列挙は求めない。表情・ポーズ、デフォルメの程度は計画で提示する。

## Issue #9 の次章で使った本プロジェクトの実例（記録）

Issue #9 で採用した次章（main `19656aa`）は、元テンプレートの説明に添える具体例として Issue #5 を使った。Issue #17 で次章の実例を overstrata-board #37（下記）に差し替えたため、以下は現行の原稿ではなく、#9 で採用した版を裏付ける出典の記録として保持する。テンプレートの一般的なルールと、実際に行った作業の記録を区別する。

- [Issue #5 レポート](https://github.com/dyamada-jaki/agent-dev-slide/blob/4c79405a64f13ec4359e6ceb57d1c871ba84b35f/docs/issue-reports/issue-5.md): 計画承認（3章）、初回2案の比較（4章）、PO の確認と人間の判断・修正（8章）、完了処理（9章）、ふりかえりと改善の採否（10・11章）。実例の参照版は改善 A〜C 反映時の `4c79405a64f13ec4359e6ceb57d1c871ba84b35f`。
- 初回比較の成果物: [PR #6 の原稿](https://github.com/dyamada-jaki/agent-dev-slide/blob/c332c3760316c7509452b0cc6be39d138d712368/slides/design-codex.md)（`c332c37`）と [PR #7 の原稿](https://github.com/dyamada-jaki/agent-dev-slide/blob/b3e0c3e8964a764a424a131f004625d5f4b6697d/slides/samples/issue-5-claude/index.md)（`b3e0c3e`）。採用修正版とは区別する。
- 採用修正版: [PR #6 の原稿](https://github.com/dyamada-jaki/agent-dev-slide/blob/3480008867440677afcb0b29e8a0b8aa06a08c00/slides/design-codex.md)と同じ版の `docs/design-samples/issue-5-codex-preview/`。罫線・金色・下部2文のノート移動を反映した版。
- 次への接続は [Issue #8](https://github.com/dyamada-jaki/agent-dev-slide/issues/8) の目的・範囲（共通デザインの整備と導入6枚への適用）を示す。今回の実例の時点で、その完了や効果を断定しない。

## 次章で使う overstrata-board #37 の実例

- 公開リポジトリ [overstrata-board](https://github.com/dyamada-jaki/overstrata-board) の main と手元の HEAD が `346606809993990ddf3cdb0244b0db9a59e42a7d` で一致することを確認した（2026-10-31）。読み取り専用でレポートを調査した。この版を #37 の完了・改善を読む記録の固定版とする。画面の比較は以下の当時の版を使う。
- [Issue #37 レポート](https://github.com/dyamada-jaki/overstrata-board/blob/346606809993990ddf3cdb0244b0db9a59e42a7d/docs/issue-reports/issue-37.md): 3章の計画、4章の2案、7章の人間の実機比較・条件更新・推薦変更、再受け入れと完了、改善 F/G。比較する画面は PR #40 `b1902c4`／#41 `526f8f8`、採用版は #40 `629709a`。採用版の差分は README であり、画面の作り直しではない。
- 前提説明の抽出元: [board Issue #37](https://github.com/dyamada-jaki/overstrata-board/issues/37) の「目的」「仕様・根拠」「受け入れ条件」を2026-10-31に確認した。本文は部分的な引用・要約とし、元の項目をノートに記録する。現在の Issue の条件3は変更後なので、当初の「駒の近く」は [変更直前の仕様 d6b5d01](https://github.com/dyamada-jaki/overstrata-board/blob/d6b5d015f79b8324d1a776882c7e1089e2ff1ecc/docs/spec.md) 2.2 と下記の条件変更コメントで照合する。全駒5マス固定、準備中の0〜9・±・即時反映、範囲が目安であることも同版で確認できる。
- 比較画面のコード: [PR #40 初回版](https://github.com/dyamada-jaki/overstrata-board/tree/b1902c451de34eb2725c9da48dc3435bd7cbfa64)、[PR #41](https://github.com/dyamada-jaki/overstrata-board/tree/526f8f8340fe64b065ee8d618fc8852c237d8c64)。[PR #40 採用版](https://github.com/dyamada-jaki/overstrata-board/tree/629709a1f9825a8974f8e4d20cf6208eb6f5c463)との差分は README。採用版の SHA は GitHub の PR head とも照合済み。画像を再現するときは当時の版と操作・表示条件を記録する。
- [条件変更のコメント](https://github.com/dyamada-jaki/overstrata-board/issues/37#issuecomment-6365106903)と [仕様更新 `3bac3e9`](https://github.com/dyamada-jaki/overstrata-board/commit/3bac3e9ed1b884765a3519157b634c1bb128e2e3): 人間の原文と条件3の変更。現行 Issue 本文だけで変更前の条件を推測しない。
- [当初の PO 受け入れ（#41）](https://github.com/dyamada-jaki/overstrata-board/pull/41#issuecomment-6364548520)、[再レビュー（#40）](https://github.com/dyamada-jaki/overstrata-board/pull/40#issuecomment-6365375650)、[推薦変更](https://github.com/dyamada-jaki/overstrata-board/pull/40#issuecomment-6365395577)、[変更後の PO 受け入れ](https://github.com/dyamada-jaki/overstrata-board/pull/40#issuecomment-6365485501)、[実機確認の記録](https://github.com/dyamada-jaki/overstrata-board/pull/40#issuecomment-6365962809)。レポートと合わせ、発表ノートで対応付ける。
- [採用コミット `e3311d4`](https://github.com/dyamada-jaki/overstrata-board/commit/e3311d43c6f125adec76eafe0d683e6d62fa74bb)、[改善 F/G 反映 `9b7eae7`](https://github.com/dyamada-jaki/overstrata-board/commit/9b7eae763cfc199080f09653f65c31a1cf01e072)、[完了と申し送り](https://github.com/dyamada-jaki/overstrata-board/issues/37#issuecomment-6366665330)。後の Issue の成果をこの時点での効果として混ぜない。
- 画面の再現（Issue #17）: 7枚目は #37 着手前の main [`c276d11`](https://github.com/dyamada-jaki/overstrata-board/tree/c276d11e5da42c7664ffa41693d5c9cb762ac7d0)（#32 の PR #38 を取り込んだ版、全駒5マス固定）、12枚目は比較した版 `526f8f8`・`b1902c4` を、公開リポジトリの新しい clone で起動して撮影した。表示幅は 375×667（元の実機比較・レビューと同じスマホ幅）。12枚目には、人間の実機確認を受けて各版の「触る前」（味方4・敵4を用意した直後）の画像を足し、同じ大きさで切り抜いた（#41 は前後で同じ矩形。#40 の触る前だけ、見出しが切れないよう位置を変えた。詳細は design.md・ノート。同じ手順で新しい clone から撮影）。操作と切り抜きは [design.md](design.md) の「画像の置き方」と各ページのノートに記録した。元プロジェクトの既存の clone・worktree・コンテナは使っていない。
- 元プロジェクトの実際の修正順序と、このスライド制作で採用している手順を区別する。条件変更の判断は人間、仕様更新は PO、修正と検証・推薦は開発者／開発チーム、最終的な採用は人間である。画像再現の際も元プロジェクトは変更しない。

## 使い方

- 読むための参照先。元リポジトリを変更しない。
- 各スライドのノート（HTML コメント）に、説明内容を裏付ける資料の URL を残す。Overstrata の絵・キャラクター・画風の出典表記は上記のとおり不要。
- 参照版を更新するときは差分を読み、説明への影響と新しい SHA を記録する。最新版の仕様を推測で混ぜない。
- 成果や効果を説明する場合、参照元に根拠がない数値・優劣を追加しない。

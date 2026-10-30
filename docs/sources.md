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

## 次章で使う本プロジェクトの実例

元テンプレートの説明に添える具体例として Issue #5 を使う。テンプレートの一般的なルールと、実際に行った作業の記録を区別する。

- [Issue #5 レポート](https://github.com/dyamada-jaki/agent-dev-slide/blob/4c79405a64f13ec4359e6ceb57d1c871ba84b35f/docs/issue-reports/issue-5.md): 計画承認（3章）、初回2案の比較（4章）、PO の確認と人間の判断・修正（8章）、完了処理（9章）、ふりかえりと改善の採否（10・11章）。実例の参照版は改善 A〜C 反映時の `4c79405a64f13ec4359e6ceb57d1c871ba84b35f`。
- 初回比較の成果物: [PR #6 の原稿](https://github.com/dyamada-jaki/agent-dev-slide/blob/c332c3760316c7509452b0cc6be39d138d712368/slides/design-codex.md)（`c332c37`）と [PR #7 の原稿](https://github.com/dyamada-jaki/agent-dev-slide/blob/b3e0c3e8964a764a424a131f004625d5f4b6697d/slides/samples/issue-5-claude/index.md)（`b3e0c3e`）。採用修正版とは区別する。
- 採用修正版: [PR #6 の原稿](https://github.com/dyamada-jaki/agent-dev-slide/blob/3480008867440677afcb0b29e8a0b8aa06a08c00/slides/design-codex.md)と同じ版の `docs/design-samples/issue-5-codex-preview/`。罫線・金色・下部2文のノート移動を反映した版。
- 次への接続は [Issue #8](https://github.com/dyamada-jaki/agent-dev-slide/issues/8) の目的・範囲（共通デザインの整備と導入6枚への適用）を示す。今回の実例の時点で、その完了や効果を断定しない。

## 使い方

- 読むための参照先。元リポジトリを変更しない。
- 各スライドのノート（HTML コメント）に、説明内容を裏付ける資料の URL を残す。Overstrata の絵・キャラクター・画風の出典表記は上記のとおり不要。
- 参照版を更新するときは差分を読み、説明への影響と新しい SHA を記録する。最新版の仕様を推測で混ぜない。
- 成果や効果を説明する場合、参照元に根拠がない数値・優劣を追加しない。

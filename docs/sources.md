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

README の工程図（65行目）はマージと後片付けを開発チームの作業とし、workflow.md（225行目）はマージを人間がすると記載している。両方を参照版で確認済み（2026-10-28）。説明での扱いは未決で、8ステップを扱う Issue の着手前に人間と決める。本プロジェクトで実際に行った手順と、説明対象の記述を混同しない。

## スクラム

- 資料: Ken Schwaber・Jeff Sutherland『スクラムガイド』2020年11月版。
- [公式の配布ページ](https://scrumguides.org/download.html) で、2020年11月版が現行の公式版であることを確認した（2026-10-28）。
- [日本語訳 PDF](https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Japanese.pdf)。公式配布ページに掲載された訳を用いる。
- 用途: spec.md 2.3 の用語・対比を検討するための定義の参照先。「スクラムチーム」「スクラムイベント」「スクラムの作成物」の各節を参照する。
- 元テンプレートとの具体的な対応づけは、これから人間と決める。スクラムガイドの説明と、本プロセスへの当てはめの解釈を分けて記す。

## Overstrata のデザイン参照

仕様2.2の見本制作では、既存の作品を画風とキャラクターの参照に使う。ロゴや情景画の常設は求めない。人間の判断により、Overstrata の出典・クレジットはスライド・発表ノート・制作記録の必須項目としない。以下は制作時の参考情報として残す。

- 手元の参照プロジェクト: `overstrata-web`。参照版 `a0fcee059cfe5dd4f628ad7d022000e37ffffe1f`。
- `css/tokens.css`: 配色・書体の候補。今回のスライドで採用済みの指定ではない。
- `images/rules/fig_ch1_hantei_4koma.png`: デフォルメした人物表現の参照。[公開サイトの第1章](https://web.overstrata.workers.dev/rules_ch1)にも掲載。
- キャラクターの参照資料が必要なら、隣接する `overstrata` プロジェクトの既存資料を読み取り専用で確認する。未公開資料の本文・生成指示を本リポジトリへ転載しない。
- 見本で使う画像は、使用ファイルと生成・編集した素材の区別を保守用に記録する。参照元の列挙は求めない。表情・ポーズ、デフォルメの程度は計画で提示する。

## 使い方

- 読むための参照先。元リポジトリを変更しない。
- 各スライドのノート（HTML コメント）に、説明内容を裏付ける資料の URL を残す。Overstrata の絵・キャラクター・画風の出典表記は上記のとおり不要。
- 参照版を更新するときは差分を読み、説明への影響と新しい SHA を記録する。最新版の仕様を推測で混ぜない。
- 成果や効果を説明する場合、参照元に根拠がない数値・優劣を追加しない。

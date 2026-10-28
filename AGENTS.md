# agent-dev-slide — エージェント向けガイド

`agent-dev-template` の開発プロセスを説明するスライドを、そのプロセスに沿って少しずつ制作する。
**仕様はすべて [docs/spec.md](docs/spec.md) にある。作業の前に必ず読むこと。**

> `CLAUDE.md` と `AGENTS.md`（Codex 用）は同じ内容に保つ。直したら両方をそろえる。

## 作るもの（説明用スライド）

`agent-dev-template` の開発プロセスを人に説明する、日本語のスライド。
スキルは「開発設定」の表から値を読み、表に無い項目や「なし」の手順を飛ばす。

- 制作環境: Markdown + Marp CLI。原稿は Git 管理し、HTML と PDF を生成する
- 実行環境: Node.js 24（`.nvmrc`）と Chrome。ローカルで制作し、GitHub Actions で確認する
- 原稿は LT の導入6枚。共通デザイン（`themes/paper.css`）で見た目をそろえる。内容・構成・デザインは人間と議論し、Issue ごとに作る

## コマンド

- `npm ci` — 依存を固定バージョンで導入
- `npm run dev` — ブラウザでプレビュー（`.env` の `HOST_PORT`、既定 `5273`）
- `npm run lint` — Markdown の書式確認
- `npm run check:links` — 原稿・文書のローカル参照先を確認（外部 URL とアンカーは目視）
- `npm run check:guides` — CLAUDE.md と AGENTS.md の一致を確認
- `npm run build` — HTML を `dist/index.html` に出力
- `npm run build:pdf` — PDF を `dist/agent-dev-slide.pdf` に出力
- `npm run check` — 必須確認をまとめて実行

## ディレクトリ構成

```text
slides/        スライド原稿（index.md）と画像（assets/）
themes/        共通デザインのテーマ（paper.css）
scripts/       プレビュー起動・本編と見本の生成・ガイド同期確認
dist/          HTML・PDF（生成物、Git 管理外）
docs/
  spec.md      仕様（正）
  design.md    共通デザインの使い方
  sources.md   説明対象の参照元と版
  setup.md     環境構築・運用の開始手順
  workflow.md  開発の進め方
  testing.md   スライドの確かめ方とレビューの方針
  next-issues.md  現在地と次に切る Issue（PO だけが書く）
  decisions/   技術判断の記録（ADR）
  issue-reports/  Issue ごとの記録
```

## 開発設定（スキルが参照する値）

`.claude/skills/` のスキルは、プロジェクト固有の値をここから読む。値を変えるときはここだけを直す。使わない項目は「なし」と書く。

| 項目 | 値 |
|---|---|
| リポジトリ | `dyamada-jaki/agent-dev-slide`（既定ブランチ `main`） |
| 確認コマンド | `npm run lint` / `npm run check:links` / `npm run check:guides` / `npm run build` / `npm run build:pdf`（一括: `npm run check`） |
| テスト先行 | しない（スライドの文書制作。先に受け入れ条件と確かめ方を決める。→ testing.md 1章） |
| E2E | なし（導入したらコマンドを書く） |
| ミューテーション | なし（導入したらコマンドと対象を書く） |
| 開発サーバー | `npm run dev`（worktree ごとに `.env` の `HOST_PORT` で分ける。Docker は使わない） |
| ポート | main: `5273` / 実装（Claude Code）: `5281` / 実装（Codex）: `5282` / 品質レビュー: `5283`・`5284` |
| 画面確認の幅 | PC `1280×720`（16:9）。HTML と PDF の全ページで文字切れ・重なり・日本語表示を確認。スマホは対象外 |
| マージ方式 | squash（`finish-issue/scripts/finish.sh` で固定） |
| 仕様・方針 | `docs/spec.md` / `docs/testing.md` / `docs/workflow.md` |
| 技術判断 | `docs/decisions/`（ADR。計画の前に関係するものを読む。書くのは finish-issue で人間が採用したときだけ） |
| 記録 | `docs/next-issues.md`（現在地。PO だけが書く）/ `docs/issue-reports/`（Issue レポート。開発チームから PO への申し送りもここに書く） |
| 席 | PO（Claude Code か Codex。開いたら `dev-team.sh po-register` で登録）/ 開発チーム（Issue ごとに開いて閉じる。`dev-team.sh claim` で登録）/ 開発者（dual-implement のワーカー）。役割は workflow.md「3つの席」 |
| 着手のラベル | `開発可`（着手してよい。付けるのは PO か人間だけ）/ `着手中`（開発チームが動いている。同時に1つまで） |
| 起動係 | Orca の定期実行 `開発チーム起動（agent-dev-slide）`。`.claude/skills/dual-implement/scripts/dev-team.sh` で確認と起動を行う |
| PO の差し戻し | 2回まで。3回目は人間に判断を仰ぐ |

## 守ること

1. 原稿は `slides/`、仕様は `docs/spec.md`、参照元は `docs/sources.md` に置く。生成物 `dist/` を直接編集しない
2. 制作前に受け入れ条件と確かめ方を決め、[docs/testing.md](docs/testing.md) に従って内容・出典・表示を確認する
3. 画面があるなら、「開発設定」の画面確認の幅を基準に作る
4. 画面の文言・文書は 日本語
5. 依存パッケージを増やすときは、PR 本文に理由を書く
6. **1つの PR は1つの Issue だけを扱う**。PR 本文に `Closes #番号` を書く
7. Issue の「スコープ外」に書かれたことはやらない。必要だと思ったら PR 本文で提案する
8. spec.md や Issue に書かれていないルールを推測で作らない。不明点は計画の段階で質問するか、PR 本文に「確認したいこと」として書く。採用の ADR（`docs/decisions/`）と違う作り方をするときも、計画の段階でそう書いて理由を示す
9. 公開してはいけない情報（認証情報、環境変数の秘密の値、未公開の資料）を、コード・Issue・PR・ドキュメントに書かない

## Issue の実装手順

`.claude/skills/implement-issue/SKILL.md`（Codex 用の `.agents/skills/implement-issue` は、このフォルダへのシンボリックリンク）に従う。Claude Code では `/implement-issue 番号`、Codex では「implement-issue スキルで Issue 番号」。

## 完了の定義

- Issue の受け入れ条件をすべて満たす
- 「開発設定」の確認コマンドがすべて通る。E2E・ミューテーションは、導入済みで対象となる場合に通す
- PR 本文に「何をしたか」「どう確認したか」「確認したいこと」を書く

## 用語

| 日本語 | コード上の名前 |
|---|---|
| 原稿 | `slides/index.md` |
| 説明対象のテンプレート | `agent-dev-template` |
| 本プロジェクト | `agent-dev-slide` |

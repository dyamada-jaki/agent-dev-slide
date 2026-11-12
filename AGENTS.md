# agent-dev-slide — エージェント向けガイド

`agent-dev-template` の開発プロセスを説明するスライドを、そのプロセスに沿って少しずつ制作する。
仕様の正本は [docs/spec.md](docs/spec.md)。作業に関係する箇所を読んでから始める。

> `CLAUDE.md` と `AGENTS.md`（Codex 用）は同じ内容に保つ。直したら両方をそろえる。

## 作るもの（説明用スライド）

`agent-dev-template` の開発プロセスを人に説明する、日本語のスライドと、その英語版。
スキルは「開発設定」の表から値を読み、表に無い項目や「なし」の手順を飛ばす。

- 制作環境: Markdown + Marp CLI。原稿は Git 管理し、HTML と PDF を生成する
- 実行環境: Node.js 24（`.nvmrc`）と Chrome。ローカルで制作し、GitHub Actions で確認する
- 本編はプロセスを紹介する8枚（表紙・全体図・役割分担・5つの活動の図）。発表ノートは付けず、出典は `docs/sources.md` と削除前の固定版で追う。実例は本編から外し、詳しい説明用の別のスライドは #31 で検討する。枚数・順序は `docs/spec.md` の現在の制作条件に従う。共通デザイン（`themes/paper.css`）で見た目をそろえる。内容・構成・デザインは人間と議論し、Issue ごとに作る

## コマンド

- `npm ci` — 依存を固定バージョンで導入
- `npm run dev` — ブラウザでプレビュー（`.env` の `HOST_PORT`、既定 `5273`）
- `npm run lint` — Markdown の書式確認
- `npm run check:links` — 原稿・文書のローカル参照先を確認（外部 URL とアンカーは目視）
- `npm run check:guides` — CLAUDE.md と AGENTS.md の一致を確認
- `npm run build` — HTML を `dist/index.html`・`dist/index-en.html` に出力
- `npm run build:pdf` — PDF を `dist/agent-dev-slide.pdf`・`dist/agent-dev-slide-en.pdf` に出力
- `npm run check` — 必須確認をまとめて実行

## ディレクトリ構成

```text
slides/        スライド原稿（index.md・index-en.md）と画像（assets/）
themes/        共通デザインのテーマ（paper.css）
scripts/       プレビュー起動・本編と見本の生成・ガイド同期確認
dist/          HTML・PDF（生成物、Git 管理外）
docs/
  spec.md      仕様（正）
  article/     技術記事の共通原稿と根拠・掲載メモ
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

## PO の席でのやり方

PO（人間と仕様を話し合い、Issue を書く席。→ [docs/workflow.md](docs/workflow.md)「3つの席」）として動くときは、次のとおりにする。

- PO が書くのは `docs/spec.md`・`docs/next-issues.md`・Issue とラベル・PR への受け入れコメント。作るもの（コード、スライドや文書の本文、試作の環境）は Issue にして、開発チームに作らせる
- 人間と話して1つの Issue にできるだけのことが決まったら、その場で Issue の案（目的・受け入れ条件・スコープ外）を見せ、登録して「開発可」を付けてよいかを聞く。中身のたたき台を会話で示すのは、人間が決めるのに必要な分だけにする
- 資料・規約・料金などの調べものは PO が行う。動かして確かめる調査（試作・環境づくり・計測など）は Issue にする
- 話の中で出たアイデアや、あとでやることも Issue にして書きためる（本数に上限はない）。着手条件がそろうまでは「開発可」を付けない

## 守ること

1. 原稿は `slides/`、仕様は `docs/spec.md`、参照元は `docs/sources.md` に置く。生成物 `dist/` を直接編集しない
2. 制作前に受け入れ条件と確かめ方を決め、[docs/testing.md](docs/testing.md) に従って内容・出典・表示を確認する
3. 画面があるなら、「開発設定」の画面確認の幅を基準に作る
4. 画面の文言・文書は日本語。英語版スライド（仕様2.8）の本文・読み上げ用説明は英語
5. 依存パッケージを増やすときは、PR 本文に理由を書く
6. **1つの PR は1つの Issue だけを扱う**。PR 本文に `Closes #番号` を書く
7. Issue の「スコープ外」に書かれたことはやらない。必要だと思ったら PR 本文で提案する
8. spec.md や Issue に書かれていないルールを推測で作らない。不明点は計画の段階で質問するか、PR 本文に「確認したいこと」として書く。採用の ADR（`docs/decisions/`）と違う作り方をするときも、計画の段階でそう書いて理由を示す
9. 公開してはいけない情報（認証情報、環境変数の秘密の値、未公開の資料）を、コード・Issue・PR・ドキュメントに書かない
10. **文章の決まり**（文書・画面の文言・PR 本文）: 前提を知らない読み手に向けて書く。用語・略語・このプロジェクト独自の呼び名（役割名・ラベル名など）は、本文で初めて出るところで短く説明する（ノートや注だけに回さない）。何であるか・何をするかを肯定の形で書き、「…ではありません」「…とは扱いません」のような、規則の文をそのまま写した否定の言い回しで説明しない。日本語で言えることは日本語で書き、英字の用語を使うときは初めて出るところで説明する（コード上の名前・コマンドはそのまま書いてよい）

## Issue の実装手順

`.claude/skills/implement-issue/SKILL.md`（Codex 用の `.agents/skills/implement-issue` は、このフォルダへのシンボリックリンク）に従う。Claude Code では `/implement-issue 番号`、Codex では「implement-issue スキルで Issue 番号」。

## 完了の定義

開発者が「Issue の作業は終わった」と判断する基準は [docs/definition-of-done.md](docs/definition-of-done.md)。PR を作るときに1項目ずつ確かめる。

## 用語

| 日本語 | コード上の名前 |
|---|---|
| 原稿 | `slides/index.md` |
| 説明対象のテンプレート | `agent-dev-template` |
| 本プロジェクト | `agent-dev-slide` |

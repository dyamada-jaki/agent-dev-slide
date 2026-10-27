# 環境構築と運用の開始

## 制作環境

- Node.js `24.14.0`（`.nvmrc`）。`nvm install && nvm use` でそろえる。
- Chrome（PDF 生成）。自動検出できないときは `BROWSER_PATH` に実行ファイルを指定する。
- 日本語フォント。macOS では標準フォントを使用し、CI は `fonts-noto-cjk` を導入する。
- Git、GitHub CLI、Python 3、Bash、Orca、Claude Code、Codex CLI（開発プロセスの実行用）。

```sh
npm ci
cp .env.example .env
npm run dev
```

`http://localhost:5273/` で初期原稿が見えればプレビューは起動済み。終了は `Ctrl+C`。
別 worktree では `.env` の `HOST_PORT` を変更する。main は 5273、Claude Code は 5281、Codex は 5282、品質レビューは 5283・5284。
他プロジェクトが 5173・5182 を使用していたため、このプロジェクトは 5273・5281〜5284 を使う。
`HOST_PORT=5282 npm run dev` のような一時指定もできる。`.env` は Git 管理外。

```sh
npm run check
```

`dist/index.html` と `dist/agent-dev-slide.pdf` ができる。
ビルド成功と目視確認は別。HTML と PDF で日本語の表示・文字切れを確かめる。

### 依存の理由

| 開発依存 | 用途 |
|---|---|
| `@marp-team/marp-cli` | Markdown 原稿のプレビュー、HTML・PDF 生成 |
| `markdownlint-cli2` | 原稿・制作文書の書式確認 |
| `markdown-link-check` | ローカルの参照先・画像のリンク切れ確認 |

直接依存は固定バージョンとし、`package-lock.json` をコミットする。
リンク検査は外部 URL・アンカーを除外するため、それらはレビューで確認する。

## GitHub

- リポジトリ: `dyamada-jaki/agent-dev-slide`、既定ブランチ: `main`
- `開発可` と `着手中` のラベルを作成済み。
- squash merge は許可済みだった。マージ方式は既存の finish-issue に従う。
- `.github/workflows/ci.yml` を追加。リモートでの CI 実行は push 後に確認する。

## PO

このセットアップを進めた Orca の Codex 端末を PO として登録済み。
端末を開き直したら、その端末で再登録する。

```sh
gh api user -q .login
bash .claude/skills/dual-implement/scripts/dev-team.sh po-register
bash .claude/skills/dual-implement/scripts/dev-team.sh po-find
```

PO は [仕様](spec.md) と [現在地](next-issues.md) を読んで続きから進める。

## 起動係

- 名前: `開発チーム起動（agent-dev-slide）`
- ID: `55f916e1-38d5-4f1b-9cbd-f5cb8cb54ccb`
- 15分おき、既存の main worktree、毎回新しいセッション。
- precheck: `bash .claude/skills/dual-implement/scripts/dev-team.sh precheck`
- 起動係は Claude Haiku。開発チームは元テンプレートの設定を引き継ぐ。
- 現在は**無効**。初期準備の main 反映後に有効化する。最初の Issue の前提がそろったら PO が「開発可」を付ける。

```sh
/Applications/Orca.app/Contents/Resources/bin/orca automations edit \
  --id 55f916e1-38d5-4f1b-9cbd-f5cb8cb54ccb --enabled
```

止めるときは `--enabled` を `--disabled` に替える。
別の環境で再作成するときは [workflow.md](workflow.md) の作成例を使い、名前と worktree パスをこのプロジェクトに合わせる。
ID は端末環境ごとの値なので、再作成時には更新する。

## 初期準備の区切り

[workflow.md](workflow.md) の「準備4」は、初期の土台を人間が main にコミットする手順。
今回はその確認用の差分を用意する。コミット・push のあとに CI を確認し、起動係を有効化する。
本文の制作は、読者・持ち時間を仕様へ反映して Issue を切ってから始める。

## 依存監査の残件

2026-10-27 の `npm audit` は17件（high 12、low 5、間接依存・親パッケージの重複を含む）を報告した。
`npm audit fix` を試したが解消しなかった。`--force` は Marp の旧版への大幅な変更を提案するため適用していない。
対象は Marp のブラウザ・数式処理、リンク検査などの開発依存。動作確認の成功とは別に扱う。
依存の更新または制作基盤の見直しを次の検討事項とし、更新したら HTML・PDF・プレビューを再確認する。

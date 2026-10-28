# agent-dev-slide

[agent-dev-template](https://github.com/dyamada-jaki/agent-dev-template) の開発プロセスを、人に説明するための日本語スライドです。
スライド自体も、Spec・Issue・Orca を使った同じプロセスで少しずつ制作します。

現在は制作環境の初期準備です。原稿は表示確認用の表紙のみで、本文は今後の Issue で作ります。

## すぐに試す

Node.js の版は `.nvmrc` を使います。PDF 出力には Google Chrome が必要です。

```sh
nvm install
nvm use
npm ci
npm run dev
```

ブラウザで `http://localhost:5273/` を開きます。終了は `Ctrl+C`。
`nvm` を使わない場合も `.nvmrc` と同じ Node.js を用意してください。

```sh
npm run check
```

原稿の書式・ローカルリンク・ガイドの同期を確認し、HTML と PDF を生成します。

| コマンド | 用途 |
|---|---|
| `npm run dev` | 編集用プレビュー |
| `npm run lint` | Markdown の書式確認 |
| `npm run check:links` | ローカル参照先の確認 |
| `npm run check:guides` | CLAUDE.md と AGENTS.md の一致確認 |
| `npm run build` | `dist/index.html` を生成 |
| `npm run build:pdf` | `dist/agent-dev-slide.pdf` を生成 |
| `npm run check` | 上記の自動確認を一括実行（dev を除く） |

Marp の使い方は [公式ドキュメント](https://github.com/marp-team/marp-cli#readme) を参照してください。
HTML 内のプレイヤー用リソースは CDN を参照する場合があります。オフラインで配布する場合は PDF を使い、発表環境で確認します。

## これからの進め方

1. 初期準備は main に反映済み。CI と表示確認の記録を [現在地](docs/next-issues.md) で確認する。
2. PO と対象読者・説明時間・伝えたいことを決め、仕様に反映する。
3. 今作る一片を Issue にし、受け入れ条件・スコープ外・確認方法を決める。
4. 着手条件のそろった Issue に「開発可」を付け、有効化済みの起動係から開発チームを起動する。
5. 計画承認、制作、相互レビュー、PO の受け入れ確認、採用判断、マージ、ふりかえりを行う。

起動係は有効化済みです。設定手順と有効化・停止のコマンドは [環境構築](docs/setup.md) にあります。

## 文書と原稿

- [仕様](docs/spec.md): 決まったことと未決事項
- [現在地と次の Issue](docs/next-issues.md): 続きから始めるための記録
- [原稿](slides/index.md): Markdown／Marp、16:9
- [参照元](docs/sources.md): 説明対象の資料と固定した版
- [開発手順](docs/workflow.md): 3つの席と8ステップ
- [確認・レビュー方針](docs/testing.md): スライド向けの確かめ方
- [環境構築](docs/setup.md): 開発環境と Orca／GitHub の設定
- [取り出し元](docs/origin.md): テンプレートの由来

原稿と設定を Git で管理し、生成物 `dist/` と依存 `node_modules/` はコミットしません。
GitHub Actions は PR と main への push で同じ確認コマンドを実行し、HTML・PDF を artifact に保存します。ホスティングは行いません。

## 検討用のデザイン見本

Issue #5 の [Codex案（3枚）](slides/design-codex.md) は、本編と分けた未採用の見本です。[意図・素材・比較手順](docs/design-samples/issue-5-codex.md)を確認できます。`npm run build:samples` で `dist/design-codex.html` と `dist/design-codex.pdf` を生成します。

## ライセンス

[MIT No Attribution（MIT-0）](LICENSE)。

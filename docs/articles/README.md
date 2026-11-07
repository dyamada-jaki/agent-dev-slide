# 技術記事の保守メモ

[共通原稿](agent-development.md)は Qiita・Zenn 向けの公開前の原稿。本文だけを掲載し、このメモは掲載しない。仕様は [spec.md 2.7](../spec.md)、確認方針は [testing.md「記事の確認」](../testing.md#記事の確認)を参照する。

## 構成・語り口

設計意図から入り、役割、Issue 化、計画と開発、成果の判断、ふりかえりの5節で説明する。スライドや図を読まなくても流れを追える本文とし、設計した本人が意図と手順を淡々と説明する「です・ます調」にそろえる。

計画確認で、見出しと冒頭3段落を含む構成を承認された。先に決まった選択は「です・ます調」「両方とも入れる」（全体図と原寸へのリンク）、「Q3 は書かない」（制作方法に触れない）、「Q8 は書かない」（スライドから削除した計画承認についての否定文を再掲しない）、「相互レビューだけ」。追加の回答「図だけ高解像度にする」を反映し、全体図を 2560×1440 にした。本人の語り口・意図との一致、掲載したい内容かの最終判断は、人間による採用時に行う。

## 主張と根拠の対応

2026-11-07 に以下を照合した。テンプレートは `78c72e2a824ef1056e8ecbcae141818acf28ec71`、採用済み本編は `9d073116c6c54ca2a15eef99b31ac6e48e0f528a`、設計者の発言は仕様 `96d152b8a3b882193960cb0a046d65b1a7d0df49` の2.3を使う。旧ノートの転載や、旧ノートへのリンクだけによる裏付けにはしていない。

| 本文の箇所・主張 | 手順・採用済みの説明 | 本人の意図・照合した点 |
|---|---|---|
| 冒頭：仕様から実装・レビュー・ふりかえりへ進めるテンプレート | [固定版 README][template-readme]の冒頭・工程図 | [仕様2.3][intent]「再計画で合意した説明の軸」の「可能な限り、役割とイベントを取り入れ…」を設計意図として要約。未測定の効果や架空の経験を足していない |
| AI に持たせた役割：PO・開発チーム・開発者と人間の分担 | [固定版 workflow][workflow]の役割表、[本編][slides]3枚目 | [仕様2.3][intent]「人間の役割と3つのイベントへの関与」。人間の方向・優先順位の判断を、AI の独断と説明しない |
| 開発チームという命名、スクラムマスター不在 | [本編][slides]3枚目 | [仕様2.3][intent]「開発チームとスクラムマスターについての認識」の本人発言。進行の主導が強いという理由と「要素も含まれる」の含みを保ち、責任すべてを代替するとは書かない |
| Spec・Issue、リファインメント、開発可で着手 | [固定版 workflow][workflow]冒頭・ステップ1〜3、[本編][slides]4枚目 | [仕様2.3][intent]「導入4枚への絞り込みと担当の補足」「PR #25 の受け入れ確認で合意した補足」「Issue #30 の完了と実例への引き継ぎ」。PBI の代替、人間と優先順位を検討し PO が着手順を整理する関係を確認 |
| 別々の計画、人間の承認、仕様の不足は相談へ戻す | [固定版 workflow][workflow]ステップ4・5、[implement-issue][implement]手順3・4、[本編][slides]5・6枚目 | 人間の承認前に実装しない。通常の開発と、仕様の不足・判断が必要な場合を区別 |
| スプリント期間・デイリースクラムを設けない | [本編][slides]5枚目、[スクラムガイド][scrum]「スクラムイベント」「スプリント」「デイリースクラム」（印刷ページ8〜10） | [仕様2.3][intent]「スプリントの期間と流れについての認識」「成果の確認とデイリースクラムについての認識」。流れを踏襲する意図とスクラムの定義を区別し、リファインメント・開発を正式なイベントと断定しない |
| 二重実装は任意、別 worktree、相互レビュー | [固定版 README][template-readme]の役割表、[workflow][workflow]ステップ6の任意の二重実装、[本編][slides]6枚目 | 2人が1つずつ案を作る例として説明。品質レビューを常設・必須の工程にしていない |
| 推薦 → PO の受け入れ確認 → 人間の判断、条件変更時の再確認 | [accept-review][accept]手順1・2、[workflow][workflow]ステップ6、[本編][slides]7枚目 | [仕様2.3][intent]「全体像に示す AI の PO の関与」と成果確認の本人発言。AI の一次判断と人間の採用判断を区別。スプリントレビューの当てはめは設計者の認識として書く |
| 人間が採用と実行内容を承認し、開発チームがマージ | [固定版 README][template-readme]工程図、[workflow][workflow]ステップ7、[finish-issue][finish]手順3・4 | 固定版 workflow のステップ6末尾は「マージは人間」と記載が不一致。[sources.md](../sources.md#固定版で確認した記載の不一致)にある合意した説明方針を採る。元資料を修正済みとはしない |
| 改善の採否・反映・効果確認、PO への申し送り | [workflow][workflow]ステップ8、[finish-issue][finish]手順7・8、[本編][slides]8枚目 | [仕様2.3][intent]「人間の役割と3つのイベントへの関与」。採用・反映・効果確認を別に扱い、次の仕様・Issue へ戻る説明を確認 |

[template-readme]: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md
[workflow]: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md
[implement]: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/.claude/skills/implement-issue/SKILL.md
[accept]: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/.claude/skills/accept-review/SKILL.md
[finish]: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/.claude/skills/finish-issue/SKILL.md
[slides]: https://github.com/dyamada-jaki/agent-dev-slide/blob/9d073116c6c54ca2a15eef99b31ac6e48e0f528a/slides/index.md
[intent]: https://github.com/dyamada-jaki/agent-dev-slide/blob/96d152b8a3b882193960cb0a046d65b1a7d0df49/docs/spec.md
[scrum]: https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Japanese.pdf

## 図の生成と更新

[全体図 PNG](assets/process-overview.png) は、本編の2枚目「人間と AI で進める開発の全体像」をそのまま画像化したもの。初回生成時の作業元は `96d152b8a3b882193960cb0a046d65b1a7d0df49` で、原稿・テーマ・素材・Marp 設定は上記の採用版から変更なし。Marp CLI 4.5.1、Chrome、Node.js 24 で次を実行した。

```sh
mkdir -p dist/article-source
npx marp --no-stdin --allow-local-files --images png --image-scale 2 slides/index.md -o dist/article-source/p.png
cp dist/article-source/p.002.png docs/articles/assets/process-overview.png
```

更新時は元の原稿の版と2枚目の見出しを確認し、PNG が 2560×1440 で、文字・人物・矢印の欠けがなく、操作バーが写っていないことを確認する。上のコマンドは実行時の原稿から生成するので、別の版なら生成元の記録も更新する。図は再設計せず、既存の [ADR 0002](../decisions/0002-共通デザインをMarpのテーマファイルに置く.md)の描画を使う。

## Qiita・Zenn に載せるとき

[Qiita の公式記法](https://qiita.com/Qiita/items/c686397e4a0f4f11683d)と [Zenn の公式記法](https://zenn.dev/zenn/articles/markdown-guide)の見出し・リンク・画像・インラインコードを確認した（2026-11-07）。本文はこれらの基本記法で書き、媒体専用の拡張は使っていない。掲載作業が依頼されたときに、次を行う。

1. 原稿の先頭の `#` 見出しを投稿画面のタイトル欄へ移し、本文には冒頭の段落から貼り付ける。本文の節は `##` のまま使う。
2. `assets/process-overview.png` を各媒体へアップロードする。原稿の相対パスはリポジトリ内で読むためのものなので、そのまま投稿しない。画像の参照、画像を囲むリンク、直後の「全体図を原寸で開く」の3か所を、アップロード先の画像 URL に差し替える。
3. 図の代替テキストと原寸へのテキストリンクを残す。各サイトのプレビューで本文の全段落・画像・改行を確認し、画像クリックとテキストリンクの両方から 2560×1440 の原画像を開けるか確かめる。狭い本文幅でも同じ導線を確認する。
4. 本文の外部リンクを開き、説明対象の固定版とスライド PDF に到達するか確認する。リンクを最新版へ変える場合は内容も再照合する。

今回、ログイン・投稿・予約・アカウント設定は行っていない。ローカルで基本記法が表示できても、Qiita・Zenn 上の表示やアップロード後の画像解像度を確認したことにはしない。

## ローカル表示の確かめ方

`npm ci` 後、Marp が使っている既存の `markdown-it` で通常の Markdown として一時 HTML を生成する。追加依存や投稿用 CLI は使わない。このプレビュー用 CSS は読みやすく表示するためだけのもので、記事に含めず、媒体の表示を再現したものとは扱わない。

```sh
node --input-type=module <<'JS'
import { readFile, mkdir, writeFile, cp } from 'node:fs/promises';
import MarkdownIt from 'markdown-it';
const source = await readFile('docs/articles/agent-development.md', 'utf8');
const body = new MarkdownIt({ html: false }).render(source);
await mkdir('dist/article-preview', { recursive: true });
await cp('docs/articles/assets', 'dist/article-preview/assets', { recursive: true });
await writeFile('dist/article-preview/index.html', `<!doctype html>
<html lang="ja"><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>記事のローカル確認</title><style>
body { margin: 32px auto; padding: 0 24px; max-width: 800px;
  font: 18px/1.9 sans-serif; color: #202020; }
h1 { font-size: 28px; } h2 { margin-top: 2em; font-size: 24px; }
img { max-width: 100%; height: auto; } a { overflow-wrap: anywhere; }
</style><main>${body}</main></html>`);
JS
```

スライドを `npm run dev` で確かめたらいったん終了する。次に `.env` の `HOST_PORT`（未指定なら5273）で記事だけをローカル配信する。別のサーバーが使っているポートは使わない。

```sh
node --env-file-if-exists=.env --input-type=module <<'JS'
import { spawn } from 'node:child_process';
const server = spawn('python3', ['-m', 'http.server', process.env.HOST_PORT || '5273',
  '--bind', '127.0.0.1', '--directory', 'dist/article-preview'], { stdio: 'inherit' });
process.on('SIGINT', () => server.kill('SIGINT'));
JS
```

Orca で `http://localhost:<HOST_PORT>/` を開き、viewport を1280×720に設定して `window.innerWidth` と `window.innerHeight` を実測する。全段落をスクロールして読み、横あふれと画像欠けを確認し、画像とテキストの原寸リンクをそれぞれ開く。図を非表示にした本文も通読し、画像の中の文字に説明が依存していないか確かめる。終了は `Ctrl+C`。確認した SHA・実測値・操作・結果・未確認範囲は PR に残す。

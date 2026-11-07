# 紹介記事の根拠と掲載メモ

共通原稿は [development-process.md](development-process.md)。Qiita・Zenn 向けの公開前原稿で、本文と保守用の本書を分ける。掲載は今回の作業に含めない。

## 計画で確認したこと

です・ます調で、設計した本人が意図を淡々と説明する語り口を採用した。構成は、設計意図から役割、仕様と Issue、計画と開発、成果の確認、ふりかえりへ進む5節。一般論や架空の体験から書き始めず、制作方法には触れない。

当初の「図なし」の案は、人間の「両方とも入れる」により変更した。採用済み本編2枚目を PNG とし、本文から原寸画像を開ける形で挿入する。レビューは相互レビューだけとし、独立した品質レビューは追加しない。語り口・本人の意図との一致・掲載したい内容かどうかの最終判断は人間が行う。

## 参照版と照合箇所

一般的な手順は元テンプレートの固定版、本人の意図は仕様に記録された発言、スクラムの定義はスクラムガイドを根拠とする。採用済みスライドとの一致も確認する。旧ノートだけで記事の裏付けを済ませない。

- テンプレート固定版: `78c72e2a824ef1056e8ecbcae141818acf28ec71` の [workflow.md](https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md)、[dual-implement](https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/.claude/skills/dual-implement/SKILL.md)、[finish-issue](https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/.claude/skills/finish-issue/SKILL.md)。
- 設計者の意図: 計画時の固定版 `96d152b8a3b882193960cb0a046d65b1a7d0df49` の [spec.md](https://github.com/dyamada-jaki/agent-dev-slide/blob/96d152b8a3b882193960cb0a046d65b1a7d0df49/docs/spec.md) 2.3・2.7。以下の「仕様」はこの版を指す。
- 採用済み本編: main `9d073116c6c54ca2a15eef99b31ac6e48e0f528a` の [slides/index.md](https://github.com/dyamada-jaki/agent-dev-slide/blob/9d073116c6c54ca2a15eef99b31ac6e48e0f528a/slides/index.md) と [PDF](https://github.com/dyamada-jaki/agent-dev-slide/blob/9d073116c6c54ca2a15eef99b31ac6e48e0f528a/docs/pdf/agent-dev-slide.pdf)。
- 定義: Ken Schwaber・Jeff Sutherland『[スクラムガイド2020年11月版 日本語訳](https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Japanese.pdf)』。以下のページは PDF ビューアーのページ数ではなく、印刷ページ番号。

| 本文の箇所・主張 | 主な根拠・照合先 |
|---|---|
| 冒頭: スクラムの役割・イベントを可能な限り取り入れたいという意図 | 仕様2.3「再計画で合意した説明の軸」の人間の原文。本編2枚目。成果や生産性を実証した主張にはしない |
| 第1節: AI の PO・開発チーム・開発者の分担 | workflow「3つの席」、ステップ4〜8。本編3枚目。人間の方向・優先順位・計画・成果・改善の判断は仕様2.3「人間の役割と3つのイベントへの関与」の合意 |
| 第1節: 開発チームとスクラムマスターの区別 | 仕様2.3「開発チームとスクラムマスターについての認識」の原文。本編3枚目。スクラムマスターの定義自体はガイド7ページ |
| 第2節: 仕様、Issue、着手の順 | workflow 冒頭・ステップ1〜3・「開発チームを開く」。Issue が PBI の代わり、人間と AI の PO が中心という説明は本編4枚目と仕様2.3の採用した活動図の条件 |
| 第2節: リファインメントの位置づけ | ガイド12ページ「プロダクトバックログ」の継続的な活動の説明、8〜11ページのイベント一覧。独立した正式イベントとは書かない |
| 冒頭・第3節: スプリント期間なし、デイリースクラムなし | 仕様2.3「スプリントの期間と流れについての認識」「成果の確認とデイリースクラムについての認識」の原文、本編5枚目。ガイド8〜10ページの定義と設計意図を区別 |
| 第1・3節: 2人が別案を作り、相互レビューする。1人でも進められる | workflow ステップ3とステップ6「任意：2つのエージェントで作らせて比べる」、dual-implement 手順3〜7、本編5・6枚目。二重実装はすべての作業で必須とはしない |
| 第3節: 計画承認、仕様の穴があるときの戻り先 | workflow ステップ4・5、本編5・6枚目。通常の計画に AI の PO の承認工程は加えない。開発を正式なスクラムイベントと名付けない |
| 第4節: 推薦→AI の PO の受け入れ確認→人間の成果確認・採用 | workflow ステップ6、dual-implement 手順7〜9、本編7枚目。人間が成果確認をスプリントレビューと捉えた意図は仕様2.3の原文。ガイド10〜11ページのスプリントレビューの目的とも照合 |
| 第4節: 人間が実行内容を承認し、開発チームがマージ | finish-issue 手順3・4、本編7枚目、[sources.md](../sources.md)「固定版で確認した記載の不一致」の合意。workflow ステップ6の「人間がマージ」の一文だけを採用せず、不一致の解決方針に従う |
| 第5節: 根拠のある改善案、人間の採否、反映、次の Issue での効果確認 | workflow ステップ8、finish-issue 手順7・8、本編8枚目。ガイド11ページ「スプリントレトロスペクティブ」。採用・反映・効果確認を区別 |

本文中の一人称に当たる「作るときに考えたこと」「呼ばなかった理由」「〜と捉えている」は上記の設計者の原文・合意に限定する。未記録の失敗談、感情、導入効果、時間短縮、性能比較は加えていない。

## 全体図の画像

[process-overview.png](assets/process-overview.png) は、上記の採用済み本編2枚目の描画をそのまま画像化したもの。新規の人物画や図の再設計、トリミングはしていない。生成時の `slides/index.md`・テーマ・画像・生成設定が採用版から変わっていないことを Git の差分で確認した。

```sh
npx marp --no-stdin --allow-local-files --images png --image-scale 2 slides/index.md -o dist/article-overview.png
cp dist/article-overview.002.png docs/articles/assets/process-overview.png
```

Marp CLI 4.5.1 と Google Chrome で生成。スライドの画面寸法は1280×720、画像の実寸は2560×1440。画像の SHA-256 は `dda3fddfccd2257d6f869929d219f4f843848cdcfe9954cd7a32db8ddbb3b0d3`。日本語・役割名・矢印・人間の判断箇所を画像で確認する。本文は画像内の文字を読まなくても流れを追えるようにした。

## Qiita・Zenn で使うとき

見出し、段落、インラインコード、通常のリンクと画像リンクだけを本文に使う。記法は [Qiita 公式のチートシート](https://qiita.com/Qiita/items/c686397e4a0f4f11683d)と [Zenn 公式の記法一覧](https://zenn.dev/zenn/articles/markdown-guide)を2026-11-07に確認した。両方で使える基本の記法を選び、媒体固有の囲み・カード・画像幅指定・Marp の設定や HTML 図は使わない。

掲載時は、先頭の H1 をタイトル欄へ移し、本文は導入段落から貼り付ける。以降の見出しは H2 のまま使う。画像は各サイトへアップロードし、画像表示の参照とクリック先の両方を、その公開画像 URL に置き換える。リポジトリ内の相対パスをそのまま投稿しない。原寸を開けること、狭い表示で拡大して読めることを各サイトのプレビューで確認する。外部リンクは、本文の参照版と説明が一致するかも確認する。

実サイトのプレビュー・アップロード・公開は未実施。投稿する人が掲載前に確認する。原稿の制作方法の説明は本文に加えない。

## ローカル表示の再現と確認

`npm ci` 後、既存依存の markdown-it で一時的な確認用 HTML を作れる。以下はリポジトリ直下で実行する。独自の CSS はローカルの読みやすさの確認用で、記事本文には含めない。サイト固有のレンダリングの再現ではない。

```sh
node --input-type=module <<'JS'
import { readFileSync, writeFileSync, copyFileSync } from 'node:fs';
import MarkdownIt from 'markdown-it';
const source = readFileSync('docs/articles/development-process.md', 'utf8')
  .replaceAll('assets/process-overview.png', 'assets/issue-37-preview-process.png');
const body = new MarkdownIt().render(source);
copyFileSync('docs/articles/assets/process-overview.png', 'slides/assets/issue-37-preview-process.png');
writeFileSync('slides/issue-37-preview.html', `<!doctype html><html lang="ja">
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>紹介記事のローカル確認</title><style>
body{max-width:800px;margin:40px auto;padding:0 24px;font:18px/1.9 sans-serif;color:#222}
h1{font-size:30px;line-height:1.5}h2{margin-top:2em;font-size:24px}
a{color:#1263a1;overflow-wrap:anywhere}img{max-width:100%;height:auto}
</style><main>${body}</main></html>`);
JS
npm run dev
```

`.env` の `HOST_PORT`（この実装では5282）で `http://localhost:5282/issue-37-preview.html` を開く。Orca のブラウザで PC 1280×720 を指定して実寸を測り、全文をスクロールして文字切れ・日本語・段落・リンク・横はみ出しと、図をクリックして原寸を開けることを確かめる。寸法を設定できなければ、実測と未確認範囲を PR に記録する。終了後はサーバーを `Ctrl+C` で止め、一時ファイルを削除する。

```sh
rm slides/issue-37-preview.html slides/assets/issue-37-preview-process.png
```

`npm run check` で既存の全確認を行う。記事 Markdown は lint の `docs/**/*.md` と参照確認の `docs` に含まれる。記事だけの変更なので、スライド原稿・テーマ・共有 PDF の更新は行わない。記事の照合と表示確認の対象コミット、操作、結果は PR に記録する。本人の語り口・意図との一致は採用時に人間が確認する。

# 共通デザインと原稿の追加

Issue #5 の採用見本（`e0d645a`）を基に、導入6枚を同じ見た目にそろえた。[共通テーマ](../slides/themes/paper-ink.css) の名前は `paper-ink`。[本編](../slides/index.md) から長い CSS を切り離し、別の原稿でも同じテーマを選べるようにした。
図は引き続き原稿内の HTML で描く。[ADR 0001](decisions/0001-原稿内のHTMLで図を描く.md) の「front matter に CSS を置く」点を変更した理由は、原稿間の CSS 複製を避けるため。テーマ登録・画像を含む出力方法は ADR の候補とし、採用の記録は完了処理で扱う。

## 色・書体・文字の階層

色やフォントを変えるときは CSS の `section` にある変数を直す。外部 Web フォントは読み込まない。

| 用途 | 変数・値 |
|---|---|
| 紙色 | `--paper: #F6F4EE` |
| 本文 | `--ink: #26262E` |
| 見出し | `--indigo: #1F2B47` |
| 罫線・補足 | `--rule: #D7D2C4` / `--muted: #62626C` |
| 人間の判断の文字・罫線 | `--judgement-ink: #6E5418` / `--judgement-rule: #B8912F` |
| 見出しの明朝 | 游明朝 → Noto Serif CJK JP → serif |
| 本文のゴシック | ヒラギノ角ゴ → Noto Sans CJK JP → Noto Sans JP → sans-serif |

金色は5枚目の人間の判断の文字・罫線と、その人間の補足に使う。AI の役割など他のページには使わない。薄い金色 `#B8912F` は文字には使わない。

| 階層 | 基準値 |
|---|---|
| 表紙・キーワード・副題 | 60px / 32px / 28px |
| ページ見出し・項目名 | 40px / 34px |
| 本文・工程・判断 | 25px / 28px / 30px |
| 補足・ページ番号 | 22px / 18px |
| 行間 | 本文1.5、見出し1.35 |
| 外周の余白 | 上下56px・左右72px |
| 領域間・3列間の余白 | 32px / 22px |
| 罫線 | 上端2px・行の区切り1px |

紙色の上に文字と罫線を置く。情報をカードで囲わない。見本の1・3・5枚目に相当する型は、見本の寸法を引き継いだ。4枚目は2行の見出しと PO の説明7行が収まるよう、3列の高さを430pxから420px、見出し下の余白を38pxから28px、項目間を16pxから12px、本文の行間を1.5から1.45に調整した。

## 今回のページ型

HTML のクラスは [本編](../slides/index.md) の該当ページから必要な構造だけを再利用する。本文・発表ノート・出典は新しい内容に合わせて書く。

| 型・本編のページ | 指定・構造 | 使い方 |
|---|---|---|
| 表紙・1 | `<!-- _class: cover -->`、`keywords`、`subtitle` | 題名を文節で改行。`_paginate: false` で表紙の番号を隠す |
| 工程・2 | `statement`、`process` の中に `step` と `arrow` | 工程名と順序を示す。工程を増やす前に表示を確認する |
| 関係の3列・3 | `definitions` の中に `definition` と `arrow` | 各列に h3・ul・`meta`。参照先を下端にそろえる |
| 役割の3列・4 | `<!-- _class: roles -->`、`definitions` と3つの `definition` | 同じ階層の役割を並べる。人物は置かない |
| 人間と判断・5 | `<!-- _class: human-page -->`、`decision-layout` | 左に `person`、右に `judgements` と `judgement`。人間だけを人物画で示す |
| まとめ・6 | `table.recap`、`next` | 行を罫線で区切り、次への案内を本文に残す |

### 日本語の改行と画像

- 長い見出しは意味がつながる位置で `<br>` を入れる。例: 「3つの役割」と「（どれも AI エージェント）」を2行にする。
- 3列の箇条書きは、語の途中で切れないよう `<br>` で文節を指定する。現在は `white-space: nowrap` と文字間 `-.04em` を使うため、文章を増やすと列外に出る。游明朝・ヒラギノの手元と Noto の CI の両方で HTML・PDF を確かめる。狭い列に長文を押し込まず、内容・改行・配置を計画で見直す。
- 発表ノートはページ末尾の HTML コメントに置く。2〜5枚目の下部4文は【話すこと】へ移し、既存ノートと開発プロセスの出典 URL を保っている。
- 5枚目は [既存の挿絵](../slides/assets/issue-5-codex/human-decisions.png) をそのまま再利用。Issue #5 で生成し600×400へ縮小した透過 PNG であり、今回は生成・編集・移動をしていない。作品の既存絵を直接使った画像とは区別する。
- 画像枠は300×210px、`object-fit: contain`。画像自体は3:2の300×200pxに収まり、透過と縦横比を保つ。背景で塗りつぶしたり引き伸ばしたりしない。画像は `slides/assets/` に置き、原稿から相対パスで参照する。

## 別の原稿へ適用する

新しい原稿にも以下の front matter を書く。長い CSS を複製する必要はない。`marp.config.mjs` の `themeSet` が共通テーマを登録する。

```markdown
---
marp: true
theme: paper-ink
size: 16:9
paginate: true
---

## 新しい説明

ここに本文を書く。
```

たとえば `slides/new.md` として作れば、`npm run dev` の `/new.md` で表示できる。リポジトリ直下から次を実行すると単独でも生成できる。

```sh
npx marp --no-stdin slides/new.md -o dist/new.html
npx marp --no-stdin --allow-local-files slides/new.md --pdf -o dist/new.pdf
```

この2コマンド自体は画像をコピーしない。新原稿の画像は `assets/...` で参照し、配布時に同じ相対位置へ一緒にコピーする。本編の `npm run build` と `build:pdf` は [生成処理](../scripts/build.mjs) が `slides/assets/` を `dist/assets/` へコピーする。共通 CSS は生成 HTML に埋め込まれるので、CSS を別途配布しない。

本編の出力は `dist/index.html` と `dist/agent-dev-slide.pdf`。本編6枚の確認方法と画像は [プレビュー](preview/issue-8-codex/README.md) を参照する。スマホは対象外。人間の実機確認は、エージェントの表示確認とは分け、レビュー時に対象版と結果を Issue #8 または PR に残す。

## 比較資料を残す

Issue #5 の [3枚の見本](../slides/design-codex.md) と [比較記録](design-samples/issue-5-codex.md) は変更していない。原稿内の「検討用・未採用」は比較時点の表示として残る。`npm run build:samples` は従来どおり独立した `dist/design-codex.html`・`dist/design-codex.pdf` を生成する。本編は `paper-ink` テーマ、見本は当時の原稿内 CSS で描く。

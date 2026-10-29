# 共通デザイン「紙と藍」の使い方

本編のスライドは、共通テーマ [themes/paper.css](../themes/paper.css)（テーマ名 `paper`）で見た目をそろえる。
Issue #5 で採用した見本（`e0d645a` の [見本原稿](../slides/design-codex.md) と [説明書](design-samples/issue-5-codex.md)）の数値を出発点にし、Issue #8 で導入6枚に適用した。

- テーマは [marp.config.mjs](../marp.config.mjs) の `themeSet` で登録している。原稿の front matter に `theme: paper` と書けば、`npm run dev`・`build`・`build:pdf` と `npx marp` のどれでも同じ見た目になる。
- 原稿の front matter に長い `style` を書かない。CSS を原稿ごとに複製せず、テーマを直す。
- 図は原稿内の HTML で描き、見た目のクラスだけをテーマに置く（[ADR 0002](decisions/0002-共通デザインをMarpのテーマファイルに置く.md)。[ADR 0001](decisions/0001-原稿内のHTMLで図を描く.md) の「front matter の style に置く」を置き換えた。理由は、別の原稿でも CSS を複製せずに同じデザインを使うため）。
- Issue #5 の見本 `slides/design-codex.md` は独自の style のまま、比較の記録として残している。テーマへは移さない。

## 色・書体・文字サイズ・余白・罫線

| 項目 | 値 | 使う場所 |
|---|---|---|
| 紙色 | `#F6F4EE` | 背景 |
| 本文 | `#26262E` | 本文・箇条書き |
| 藍 | `#1F2B47` | 見出し・項目名・工程・次の案内 |
| 罫線 | `#D7D2C4` | 3列の上端・まとめ表 |
| 補足 | `#62626C` | 参照先・ページ番号・矢印 |
| 金（文字） | `#6E5418` | 人間の3つの判断と「役割には数えない」だけ。紙色とのコントラスト比 6.48:1 |
| 金（罫線） | `#B8912F` | 3つの判断の罫線だけ。文字には使わない（2.68:1） |
| 見出しの書体 | `Yu Mincho` → `YuMincho` → `Noto Serif CJK JP` → `serif` | h1〜h3 |
| 本文の書体 | `Hiragino Sans` → `Noto Sans CJK JP` → `Noto Sans JP` → `sans-serif` | 本文 |

| 文字の階層 | サイズ |
|---|---|
| 表紙の題名 | 60px（副題 32px・28px） |
| ページ見出し h2 | 40px、行間 1.35 |
| 項目名 h3 | 34px |
| 要旨の一文 | 30px、行間 1.6 |
| 3つの判断 | 30px |
| 工程 | 28px 太字 |
| まとめ表・次の案内 | 26px |
| 本文 | 25px、行間 1.5 |
| 参照先・補足 | 22px |
| ページ番号 | 18px |

- 外周の余白は上下 56px・左右 72px。見出しの下は 38px。
- 情報を塗りの箱（カード）で囲わない。区切りは 1〜2px の罫線と余白で示す。
- 金色は人間の判断の強調だけに使い、他の強調や装飾に使わない。
- 外部 Web フォントは読み込まない。手元（游明朝・ヒラギノ）と CI（Noto Serif / Sans CJK JP）で字幅が違うので、両方で確かめる。

## ページ型

今回の導入6枚で使う型だけを用意している。新しい型が要るときは、まずこの表の型で書けないかを考え、足すときはテーマとこの表を一緒に直す。

| 型 | 書き方 | 使っているページ |
|---|---|---|
| 表紙 | `<!-- _class: cover -->` と `# 題名`、`<p class="keywords">`・`<p class="subtitle">` | 1 |
| 本文 | `## 見出し` に続けて本文。特別なクラスは不要 | 2〜6 |
| 要旨の一文 | `<p class="statement">` | 2 |
| 工程 | `<div class="flow">` の中に `<div class="step">` と `<div class="arrow">→</div>` を交互に置く | 2 |
| 3列 | `<div class="columns">` の中に `<div class="column">`（`<h3>`・`<ul>`・`<p class="meta">`）。順序を示すときだけ列の間に `<div class="arrow">→</div>` を置く。参照先 `.meta` は列の下端にそろう | 3（矢印あり） |
| 3列（役割の人物つき） | `<div class="columns roles">` にし、各列の `<h3>` を `<div class="role-head">` で包んで、その前に `<img class="role-figure">` を置く（下の「役割の人物」） | 4 |
| 左右 | `<div class="split">` の左に `<div class="person">`（`<h3>`・`<ul>`・`<p class="meta">`・`<img class="people">`）、`<div class="arrow">→</div>`、右に `<div class="judgements">` と `<div class="judgement">` | 5 |
| まとめ表と次の案内 | `<table class="recap">`（行ごとに `<th>` と `<td>`）と `<p class="next">` | 6 |

例（3列）:

```html
<div class="columns">
  <div class="column">
    <h3>Spec</h3>
    <ul>
      <li>作るもの全体の仕様</li>
    </ul>
    <p class="meta">docs/spec.md</p>
  </div>
  <div class="arrow">→</div>
  <div class="column">…</div>
</div>
```

3列の高さは 430px に固定している。項目が多くて参照先が下にはみ出すときは、項目を減らすか、そのページの列だけ文字を小さくし、理由を記録する（導入6枚では 25px のまま収まった）。

## 次のスライドを足す手順

1. `slides/index.md` の最後に `---` で区切ってページを足す。上の表の型から選び、HTML とクラスを書く。
2. 発表ノート（`<!-- 【話すこと】 … 【出典】 … -->`）を同じページに書く。画面の下部に1行のまとめを置かず、ノートへ書く。
3. `npm run dev` で見ながら整え、`npm run check` を通す。
4. `npx marp --no-stdin --allow-local-files --images png slides/index.md -o <一時ディレクトリ>/p.png` で 1280×720 の画像を作り、文字切れ・重なり・語の途中の改行を確かめる。CI の PDF（Noto）でも確かめる。

別の発表の原稿でも、front matter に次を書けば同じデザインになる。リポジトリ直下で `npx marp --no-stdin <原稿>.md -o <出力>.html`（PDF は `--pdf --allow-local-files` を足す）を実行する。

```yaml
---
marp: true
theme: paper
size: 16:9
paginate: true
---
```

## 日本語の改行

- テーマは `word-break: auto-phrase` を指定し、Chrome では文節で折り返す。対応しない環境では通常の折り返しになる。
- 見出しや列の項目で、折り返す位置が意味を左右するところは、文節の切れ目に `<br>` を書いて固定する（例: 5枚目の見出し「人間は3つの役割に含めず、<br>判断を担う」、3・4枚目の箇条書き）。
- `white-space: nowrap` で1行に押し込まない。フォントの字幅が違うと列からはみ出すため。
- `<br>` を足したら、手元の画像と CI の PDF の両方で「語の途中で切れていない」「列の外へ出ていない」ことを確かめる。

## 画像の置き方

- 画像は `slides/assets/` の下に置き、原稿から相対パス（例 `assets/issue-5-codex/human-decisions.png`）で参照する。`npm run build`・`build:pdf` が `slides/assets/` を `dist/assets/` へ複製するので、配布用の HTML でも欠けない。PDF は `--allow-local-files` で画像を読み込む。
- 縦横比を変えない。枠を決めて `object-fit: contain` で収める（`.people` は 300×210px の枠に 600×400px・3:2 の透過 PNG を置く）。
- 文字に重ねない。人物の絵だけで意味を伝えず、役割名や説明の文字と並べる。
- 人間はレナ・ヨナで表す（5枚目）。AI エージェントの3つの役割は、同じ画風の名前のない別の人物で表す（下の「役割の人物」）。同じ顔を両方に使わない。
- Overstrata の絵・キャラクター・画風の出典表記は不要（人間の判断）。保守のため、使用ファイルと生成・編集の区別は下の表に残す。

| 使用ファイル | 区別 |
|---|---|
| [human-decisions.png](../slides/assets/issue-5-codex/human-decisions.png) | Issue #5 で新規生成し縮小した透過 PNG（記録は [説明書](design-samples/issue-5-codex.md)）。Issue #8 では本編5枚目からそのまま再利用し、再生成・編集はしていない |
| [roles/po.png](../slides/assets/roles/po.png)・[team.png](../slides/assets/roles/team.png)・[developer-1.png](../slides/assets/roles/developer-1.png)・[developer-2.png](../slides/assets/roles/developer-2.png) | Issue #12 で新規生成した透過 PNG。生成は Codex CLI の組み込み画像生成（`codex exec` の `$imagegen`、2026-10-28）で、画風の参照に human-decisions.png、人物をそろえる参照に先に作った po.png（開発者2人目は developer-1.png も）を渡した。team.png は同じ生成の中で Codex が右手の位置を直している。編集は macOS の `sips -z 400 400` による 1254×1254 から 400×400 への縮小だけ（1:1 と透過を保持） |

## 役割の人物

AI エージェントの3つの役割を表す人物。Issue #12 で本編4枚目に置いた。次章などで役割を絵で示すときも、同じファイルと対応を使う。

| 役割 | 使用ファイル | 人物と姿 |
|---|---|---|
| PO | `assets/roles/po.png` | 黒髪の短い髪。立って、開いた冊子（仕様）を読む |
| 開発チーム | `assets/roles/team.png` | 栗色の一つ結び。板に付箋を左から順に貼る（進行の整理） |
| 開発者 | `assets/roles/developer-1.png`・`developer-2.png` | 明るい茶色の短髪（左向き）と、濃い色のおかっぱ（右向き）。それぞれ自分の机でノートパソコンを打つ。どちらが Claude Code・Codex かは決めていない |

- 4人とも名前を持たない。外見は Issue #12 の計画で提案して承認されたもので、Overstrata の正式設定・作中の役職との対応ではない。画風だけを #5 の挿絵（レナ・ヨナ）にそろえている。
- 全員が同じ藍灰色の上着と茶色の帯を着る。人間を表すレナ・ヨナ（防具・外套）との区別を助けるが、区別の主は見出し・役割名・本文に置く。
- 開発チームは「2枚の資料を見比べる」姿にしない。この構図は5枚目の人間の判断（PR を選ぶ）に使っている。
- 金色を役割の人物の近くに使わない（金色は人間の判断だけ）。
- スライド全体を1枚の画像にしない。人物1人を1ファイルにし、文字は原稿の HTML で書く。

置き方（3列の型。人物の箱は 120×120px、`object-fit: contain` で 1:1 を保つ）:

```html
<div class="columns roles">
  <div class="column">
    <div class="role-head">
      <img class="role-figure" src="assets/roles/po.png" alt="AI エージェントの PO を表す、開いた冊子を読むデフォルメした人物">
      <h3>PO</h3>
    </div>
    <ul>…</ul>
    <p class="meta">…</p>
  </div>
  …
</div>
```

- `.columns.roles` は列の高さを 430px から 500px にする（人物の行の分）。4枚目では最も行の多い PO 列で、参照先の下端が 660px（本文の下端の上限 664px）。項目が増えると収まらないので、足すときは手元の画像と CI の PDF で確かめる。
- 開発者のように2人並べるときは、`<img class="role-figure">` を続けて2つ書く（`gap` の 12px を `.role-figure + .role-figure` の `margin-left: -12px` で打ち消し、隙間なしで隣り合わせに並べる）。役割名が列からはみ出さないか確かめる。
- 3列以外の型（工程・左右など）に置くときは、新しいクラスをテーマに足し、この節と上の「ページ型」の表を一緒に直す。alt には「AI エージェントの◯◯を表す」と書く。

## 表示の確かめ方（Orca）

1. `.env` の `HOST_PORT` を確かめ、`npm run dev` を起動する（既定 5273）。
2. Orca のブラウザで `http://localhost:<HOST_PORT>/index.md` を開き、1280×720 にして `#1`〜`#6` を見る。右矢印キーでページを送れる。
3. 配布用の生成物は `npm run build`・`build:pdf` の後の `dist/index.html`・`dist/agent-dev-slide.pdf`。CI の artifact `slides` にも同じものが入る。
4. 確認が終わったら開発サーバーを止める。

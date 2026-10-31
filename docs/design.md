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

導入6枚と次章「Issue 1本の流れ」（7〜12枚目）で使う型だけを用意している。新しい型が要るときは、まずこの表の型で書けないかを考え、足すときはテーマとこの表を一緒に直す。

| 型 | 書き方 | 使っているページ |
|---|---|---|
| 表紙 | `<!-- _class: cover -->` と `# 題名`、`<p class="keywords">`・`<p class="subtitle">` | 1 |
| 本文 | `## 見出し` に続けて本文。特別なクラスは不要 | 2〜12 |
| 要旨の一文 | `<p class="statement">` | 2 |
| 工程 | `<div class="flow">` の中に `<div class="step">` と `<div class="arrow">→</div>` を交互に置く | 2 |
| 3列 | `<div class="columns">` の中に `<div class="column">`（`<h3>`・`<ul>`・`<p class="meta">`）。順序を示すときだけ列の間に `<div class="arrow">→</div>` を置く。参照先 `.meta` は列の下端にそろう | 3（矢印あり） |
| 3列（役割の人物つき） | `<div class="columns roles">` にし、各列の `<h3>` を `<div class="role-head">` で包んで、その前に `<img class="role-figure">` を置く（下の「役割の人物」） | 4 |
| 左右 | `<div class="split">` の左に `<div class="person">`（`<h3>`・`<ul>`・`<p class="meta">`・`<img class="people">`）、`<div class="arrow">→</div>`、右に `<div class="judgements">` と `<div class="judgement">` | 5 |
| まとめ表と次の案内 | `<table class="recap">`（行ごとに `<th>` と `<td>`）と `<p class="next">` | 6 |
| 工程のページ | 先頭に8ステップの帯 `<ol class="steps">`、続けて `## 見出し`、`<div class="stage">` の左に `<div class="general">`（`<p class="stage-label">このプロセスでは</p>` と `<table class="duty">`）、右に `<div class="example">`（`<h3>実例: …</h3>`・`<ul>`・`<p class="meta">`）。下の「工程のページ」 | 7〜12 |

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

## 工程のページ

次章「Issue 1本の流れ」の6枚（7〜12枚目）でそろえる型。Issue #9 で追加した。

- **8ステップの帯**: `<ol class="steps">` に `<li>` を8つ（①議論〜⑧ふりかえり）。そのページの段に `now` を付ける（藍の太字と藍の下線）。④⑥⑧は人間の判断なので常に `judge` を付け、金の文字で示す（人間が判断しないページでも金で出る）。`judge now` は金の太字と金の下線
- **左「このプロセスでは」**: 元テンプレートの一般的な手順。`<table class="duty">` の3行（担当・渡すもの・人間が決めること）。人間の3つの判断（計画承認・採用判断・改善の採否）の行だけ `<tr class="decide">` にし、文字と上下の罫線を金にする。判断がないページは「なし」と通常の色で書く
- **右「実例: …」**: 本プロジェクトの実例。左の罫線で一般の説明と分け、見出しに「実例」と書く。版や記録の節を `.meta` に書く
- **担当の人物**: `<div class="actors">` の中に `<div class="actor">`（`<img class="actor-figure">` 72×72px と `<span class="actor-name">`）。開発者は `actor-figure` を2つ続ける。人間（レナ・ヨナ）は `<img class="people-small">`（120×80px、3:2）。金色を役割の人物の行に使わないため、人間の挿絵は担当の行か判断の行（`decide`）に置き、役割の人物は判断の行に置かない
- **比較画像**: `<div class="shots">` に `<div class="shot">`（`<img>` と説明 `<p>`、版 `<p class="ver">`）。画像の中の文字は読ませず、違いを説明文で書く
- **往復の表**: 1ページに6行の表が要るときは `<table class="duty loop">`。高さに収めるため 22px・上下 9px の余白にしている（11枚目。本文の下端の上限 664px に対し、Orca のブラウザ 1280×720 で測ったページ内の下端は 608px）

8ステップの帯と見出しで約 190px を使うので、表と実例の列に使える高さは約 470px（7〜12枚目の下端の実測は 545〜608px）。項目を足したら手元の画像と CI の PDF で確かめる。

## 日本語の改行

- テーマは `word-break: auto-phrase` を指定し、Chrome では文節で折り返す。対応しない環境では通常の折り返しになる。
- 見出しや列の項目で、折り返す位置が意味を左右するところは、文節の切れ目に `<br>` を書いて固定する（例: 5枚目の見出し「人間は3つの役割に含めず、<br>判断を担う」、3・4枚目の箇条書き）。
- `white-space: nowrap` で1行に押し込まない。フォントの字幅が違うと列からはみ出すため。
- `<br>` を足したら、手元の画像と CI の PDF の両方で「語の途中で切れていない」「列の外へ出ていない」ことを確かめる。

## 画像の置き方

- 画像は `slides/assets/` の下に置き、原稿から相対パス（例 `assets/issue-5-codex/human-decisions.png`）で参照する。`npm run build`・`build:pdf` が `slides/assets/` を `dist/assets/` へ複製するので、配布用の HTML でも欠けない。PDF は `--allow-local-files` で画像を読み込む。
- 縦横比を変えない。枠を決めて `object-fit: contain` で収める（`.people` は 300×210px の枠に 600×400px・3:2 の透過 PNG を置く）。
- 文字に重ねない。人物の絵だけで意味を伝えず、役割名や説明の文字と並べる。
- 人間はレナ・ヨナで表す（5枚目と、次章で人間が議論・判断する7・9・12枚目）。AI エージェントの3つの役割は、同じ画風の名前のない別の人物で表す（下の「役割の人物」）。同じ顔を両方に使わない。
- Overstrata の絵・キャラクター・画風の出典表記は不要（人間の判断）。保守のため、使用ファイルと生成・編集の区別は下の表に残す。

| 使用ファイル | 区別 |
|---|---|
| [human-decisions.png](../slides/assets/issue-5-codex/human-decisions.png) | Issue #5 で新規生成し縮小した透過 PNG（記録は [説明書](design-samples/issue-5-codex.md)）。Issue #8 では本編5枚目からそのまま再利用し、Issue #9 では次章の7・9・12枚目に小さく（120×80px）再利用した。再生成・編集はしていない |
| [issue-5-compare/](../slides/assets/issue-5-compare/) の3枚 | Issue #9 で、次章の比較用に作った縮小画像。`pr6-c332c37-human.png`・`pr7-b3e0c3e-human.png` は、Issue #5 の各 PR の当時の版を `git archive` で取り出し、`npx marp --no-stdin --allow-local-files --images png` で元の5枚目（人間の判断のページ）を 1280×720 に描いた画像。`pr6-3480008-human.png` は採用修正版の記録 `docs/design-samples/issue-5-codex-preview/03-human.png`（同じ手順で 3480008 から描いた画像とバイト単位で一致）。どれも `sips -z 360 640` で 640×360 に縮小しただけ。ファイル名の SHA が版を示す |
| [roles/po.png](../slides/assets/roles/po.png)・[team.png](../slides/assets/roles/team.png)・[developer-1.png](../slides/assets/roles/developer-1.png)・[developer-2.png](../slides/assets/roles/developer-2.png) | Issue #12 で新規生成した透過 PNG。生成は Codex CLI の組み込み画像生成（`codex exec` の `$imagegen`、2026-10-28）で、画風の参照に human-decisions.png、人物をそろえる参照に先に作った po.png（開発者2人目は developer-1.png も）を渡した。team.png は同じ生成の中で Codex が右手の位置を直している。編集は macOS の `sips -z 400 400` による 1254×1254 から 400×400 への縮小だけ（1:1 と透過を保持） |

## 役割の人物

AI エージェントの3つの役割を表す人物。Issue #12 で本編4枚目に置き、Issue #9 で次章（7〜12枚目）の担当の行にも同じファイルで置いた。

| 役割 | 使用ファイル | 人物と姿 |
|---|---|---|
| PO | `assets/roles/po.png` | 黒髪の短い髪。立って、開いた冊子（仕様）を読む |
| 開発チーム | `assets/roles/team.png` | 栗色の一つ結び。板に付箋を左から順に貼る（進行の整理） |
| 開発者 | `assets/roles/developer-1.png`・`developer-2.png` | 明るい茶色の短髪（左向き）と、濃い色のおかっぱ（右向き）。それぞれ自分の机でノートパソコンを打つ。どちらが Claude Code・Codex かは決めていない（Issue #9 でも対応させず、製品名は PR の説明文で示した） |

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
- 3列以外の型に置くときは、新しいクラスをテーマに足し、この節と上の「ページ型」の表を一緒に直す（工程のページでは `actor-figure` を足した。上の「工程のページ」）。alt には「AI エージェントの◯◯を表す」と書く。

## 表示の確かめ方（Orca）

1. `.env` の `HOST_PORT` を確かめ、`npm run dev` を起動する（既定 5273）。
2. Orca のブラウザで `http://localhost:<HOST_PORT>/index.md` を開き、1280×720 にして `#1`〜`#12` を見る。右矢印キーでページを送れる。
3. 配布用の生成物は `npm run build`・`build:pdf` の後の `dist/index.html`・`dist/agent-dev-slide.pdf`。CI の artifact `slides` にも同じものが入る。
4. 確認が終わったら開発サーバーを止める。

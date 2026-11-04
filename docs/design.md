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
| 金（文字） | `#6E5418` | 人間と、人間が行う判断だけ（2・3枚目の人間、2枚目の3つの帯、4枚目の「人間が…」、次章の判断の行と段階の行）。紙色とのコントラスト比 6.48:1 |
| 金（罫線） | `#B8912F` | 人間の判断の罫線・下線だけ。文字には使わない（2.68:1） |
| 淡い金（塗り） | `#EDE2C5` | 2枚目の全体図で、人間が行う3つの作業の帯の塗りだけ（採用した見本の値） |
| 見出しの書体 | `Yu Mincho` → `YuMincho` → `Noto Serif CJK JP` → `serif` | h1〜h3 |
| 本文の書体 | `Hiragino Sans` → `Noto Sans CJK JP` → `Noto Sans JP` → `sans-serif` | 本文 |

| 文字の階層 | サイズ |
|---|---|
| 表紙の題名 | 60px（副題 32px・28px） |
| ページ見出し h2 | 40px、行間 1.35 |
| 項目名 h3 | 34px |
| 全体図（2枚目） | 採用した見本の値を基本にする（見出し 42px、意図の一文 23px、枠の名前 21〜28px、説明 18〜21px（PO の説明だけ 19px）、人間が行う作業の帯 20px 太字）。Issue #24 の変更は下の「全体図」 |
| 役割分担（3枚目） | 役割名 30px、説明 22px、下端の1行 24px |
| イベントの表（4枚目） | 23px（イベント名 24px、列名 20px）、上の一文 26px、下の注記 21px、末尾の次の案内 24px |
| まとめ表・次の案内（本編では未使用） | 26px |
| 本文 | 25px、行間 1.5 |
| 参照先・補足 | 22px |
| ページ番号 | 18px |

- 外周の余白は上下 56px・左右 72px。見出しの下は 38px。
- 説明文を並べるためのカードは多用せず、罫線と余白を基本にする。図では、役割・工程・まとまりを区別し、矢印の接続先を示す枠を使ってよい（2026-11-03 の人間の補足）。図の枠は 1〜2px の線を基本にし、影や強い塗りを必要以上に足さない。
- 金色は人間の判断の強調だけに使い、他の強調や装飾に使わない。
- 外部 Web フォントは読み込まない。手元（游明朝・ヒラギノ）と CI（Noto Serif / Sans CJK JP）で字幅が違うので、両方で確かめる。

## ページ型

導入4枚と次章「Issue 1本の流れ」（5〜12枚目。5・6枚目は題材の前提、7〜12枚目は工程）で使う型を用意している。Issue #24 で導入の「Spec・Issue・Orca の関係」（3列）と「共有し、確かめ、次へ反映する」（まとめ表）を削除したため、3列とまとめ表の型は本編では使っていないが、他の発表用にテーマに残している。新しい型が要るときは、まずこの表の型で書けないかを考え、足すときはテーマとこの表を一緒に直す。

| 型 | 書き方 | 使っているページ |
|---|---|---|
| 表紙 | `<!-- _class: cover -->` と `# 題名`、`<p class="subtitle">`。題名の下にキーワード行 `<p class="keywords">` も置けるが、本編では Issue #24 で外した | 1 |
| 本文 | `## 見出し` に続けて本文。特別なクラスは不要 | 3〜12 |
| 全体図 | `<!-- _class: overview -->` と `## 見出し`、続けて `<div class="ov">` の中に絶対位置の部品（`ov-` で始まるクラス）と線の `<svg class="ov-wires">`。下の「全体図」 | 2 |
| 3列 | `<div class="columns">` の中に `<div class="column">`（`<h3>`・`<ul>`・`<p class="meta">`）。順序を示すときだけ列の間に `<div class="arrow">→</div>` を置く。参照先 `.meta` は列の下端にそろう | なし（Issue #24 で削除。以前は3枚目） |
| 役割分担 | `<div class="role-map">` に `<div class="role-row">` を2つ（上段に人間・`<p class="role-dialogue">`・PO、下段に開発チーム・開発者）と `<p class="role-note">`。各役割は `<div class="role-box">`（人間は `role-box human`）に `<img class="role-portrait">` と、`<h3>`（AI の役割は `<span class="role-tag">AI</span>`）・`<p>` を包んだ `<div>`。下の「役割の人物」 | 3 |
| イベントの表 | `<p class="event-lead">`、`<table class="events">`（1行目は列名、各行は `<th>` にイベント名、`<td>` に行うこと・決めること。人間が行う部分だけ `<strong class="judge">`）、`<p class="event-note">`。実例へのつなぎは続けて `<p class="next">`（注記の直後では上の余白を詰める） | 4 |
| まとめ表と次の案内 | 必要なら `<p class="stage-label">` に表の説明、`<table class="recap">`（行ごとに `<th>` と `<td>`）と `<p class="next">` | なし（Issue #24 で削除。以前は6枚目） |
| 前提のページ | 上部の段階の行を付けず `## 見出し`、`<div class="stage">` の左に `<div class="general">`（`<p class="stage-label">`に抜粋元、`<table class="duty">` に前提の行）、右に `<div class="example">`（`<h3>`・画面や `<ul>`・`<p class="meta">`）。下の「前提のページ」 | 5・6 |
| 工程のページ | 先頭に8ステップの段階の行 `<ol class="steps">`、続けて `## 見出し`、`<div class="stage">` の左に `<div class="general">`（`<p class="stage-label">このプロセスでは</p>` と `<table class="duty">`）、右に `<div class="example">`（`<h3>実例: …</h3>`・`<ul>`・`<p class="meta">`）。下の「工程のページ」 | 7〜12 |

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

## 前提のページ

次章の工程に入る前に、題材の Issue から課題・したいこと・完成の条件を抜き出して示す2枚（5・6枚目。Issue #24 の前は7・8枚目）。Issue #17 で追加した。工程のページではないので、上部の段階の行（8ステップ）は付けない。

- **左**: `<p class="stage-label">` に抜粋元（例「Issue（今回作る範囲と完成条件）の目的から（要約）」。Issue #24 で、実例で初めて出る Issue の短い説明をここに置いた）、`<table class="duty">` に前提を1行ずつ。見出しの列は2行までの短い言葉にし、文節の切れ目に `<br>` を書く。条件の番号などの出典はノートに書き、本文に出さない
- **右**: `<div class="example">`。5枚目は画面（`shots phone short`）と言葉の短い説明、6枚目は前提から工程（2案）へのつなぎ。金色は使わない（人間の判断ではないため）。強調は `<b>`
- 下端の実測（Orca のブラウザ、720px 基準）: 5枚目 552px、6枚目 596px（Issue #17 時点）

## 工程のページ

次章「Issue 1本の流れ」の工程の6枚（7〜12枚目。Issue #24 の前は9〜14枚目）でそろえる型。Issue #9 で追加した。

- **上部の段階の行（8ステップ）**: `<ol class="steps">` に `<li>` を8つ（①議論〜⑧ふりかえり）。そのページの段に `now` を付ける（藍の太字と藍の下線）。④⑥⑧は人間の判断なので常に `judge` を付け、金の文字で示す（人間が判断しないページでも金で出る）。`judge now` は金の太字と金の下線
- **左「このプロセスでは」**: 元テンプレートの一般的な手順。`<table class="duty">` の3行（担当・渡すもの・人間が決めること）。人間の3つの判断（計画承認・採用判断・改善の採否）の行だけ `<tr class="decide">` にし、文字と上下の罫線を金にする。判断がないページは「なし」と通常の色で書く
- **右「実例: …」**: 別のプロジェクト（overstrata-board #37）の実例。左の罫線で一般の説明と分け、見出しに「実例」と書く。版や記録の節を `.meta` に書く
- **担当の人物**: `<div class="actors">` の中に `<div class="actor">`（`<img class="actor-figure">` 72×72px と `<span class="actor-name">`）。開発者は `actor-figure` を2つ続ける。人間（レナ・ヨナ）は `<img class="people-small">`（120×80px、3:2）。金色を役割の人物の行に使わないため、人間の挿絵は担当の行か判断の行（`decide`）に置き、役割の人物は判断の行に置かない
- **人物にしない仕組み**: 3つの役割に含めない仕組み（GitHub・Orca の起動係）は、担当の行に `<div class="actor-box">` の文字の枠で置く（1行目に名前、`<span>` に短い補足）。人物の絵やロゴは使わない（8枚目: PO → GitHub（Issue と「開発可」）→ Orca の起動係（定期実行で起動）→ 開発チーム。Issue #17 で追加）
- **用語の短い説明**: 導入で説明しない用語を実例で初めて使うときは、短い説明を添える（Issue #24 で追加）。Issue は5枚目の左のラベル、Spec は7枚目の「渡すもの」、Orca は8枚目の左の表の下に `<p class="term">`（20px、補足の色）で1行置く
- **比較画像**: `<div class="shots">` に `<div class="shot">`（`<img>` と説明 `<p>`、版 `<p class="ver">`）。画像の中の文字は読ませず、違いを説明文で書く
- **スマホ幅の画面**: 縦長の画面の切り抜きは `<div class="shots phone">` にする（16:9 の枠に押し込まず、縦横比のまま高さ 270px までで収める）。本文の下に小さく置くときは `shots phone short`（高さ 200px まで、説明を画像の右に並べる。説明と版は `<div>` で包む。5枚目）。比較画像を大きく見せるページだけ、右の列を `<div class="example wide">`（660px）にする。案ごとに「触る前 → 選んだ直後」を並べるときは `shots phone pair` にし、`.shot` の中に説明（`<div>` に案名 `<p class="name">`・PR 番号 `<p class="ver">`（版はノート）・違いの説明 `<p>`）、前の画像、`<span class="arrow">→</span>`、後の画像の順に書く（1案が1行。画像の高さは 165px にそろえる。10枚目: 1280×720 で右の列は幅690px、画像は駒の近く案 190×165px・操作パネル案 222×165px、左の表は幅410px、右の列の下端 590px）。Issue #17 で追加
- **往復の表**: 1ページに6行の表が要るときは `<table class="duty loop">`。高さに収めるため 22px・上下 9px の余白にしている（11枚目。本文の下端の上限 664px に対し、Orca のブラウザで測ったページ内の下端は 720px 基準で 636px。Issue #17 の前提追加後）

上部の段階の行と見出しで約 190px を使うので、表と実例の列に使える高さは約 470px（Issue #17 の前提追加後、現在の7〜12枚目の下端の実測は 555〜650px。下端が最も下にあるのは10枚目）。項目を足したら手元の画像と CI の PDF で確かめる。

## 日本語の改行

- テーマは `word-break: auto-phrase` を指定し、Chrome では文節で折り返す。対応しない環境では通常の折り返しになる。
- 見出しや列の項目で、折り返す位置が意味を左右するところは、文節の切れ目に `<br>` を書いて固定する（例: 4枚目のイベント名「スプリント<br>レトロスペクティブ」、3枚目の役割の説明）。
- `white-space: nowrap` で1行に押し込まない。フォントの字幅が違うと列からはみ出すため。
- `<br>` を足したら、手元の画像と CI の PDF の両方で「語の途中で切れていない」「列の外へ出ていない」ことを確かめる。

## 画像の置き方

- 画像は `slides/assets/` の下に置き、原稿から相対パス（例 `assets/issue-5-codex/human-decisions.png`）で参照する。`npm run build`・`build:pdf` が `slides/assets/` を `dist/assets/` へ複製するので、配布用の HTML でも欠けない。PDF は `--allow-local-files` で画像を読み込む。
- 縦横比を変えない。枠を決めて `object-fit: contain` で収める（3枚目の `.role-portrait` は 140×140px、レナの立ち姿は `.role-portrait.tall` で 100×150px）。全体図の AI の PO だけは、採用した見本どおり `object-fit: cover`（88×110px）で上下を少し切る。
- 文字に重ねない。人物の絵だけで意味を伝えず、役割名や説明の文字と並べる。
- 人間は、導入（2・3枚目）ではレナ1人の立ち姿、次章で人間が議論・判断する7・9・12枚目ではレナ・ヨナの2人組で表す（Issue #4 で導入だけ置き換えた。次章の差し替えは未実施）。AI エージェントの3つの役割は、同じ画風の名前のない別の人物で表す（下の「役割の人物」）。同じ顔を両方に使わない。
- Overstrata の絵・キャラクター・画風の出典表記は不要（人間の判断）。保守のため、使用ファイルと生成・編集の区別は下の表に残す。

| 使用ファイル | 区別 |
|---|---|
| [rena-standing.png](../slides/assets/human/rena-standing.png) | 全体図の見本のために制作したレナ1人の立ち姿（記録は [素材の記録](../slides/assets/human/README.md)）。Issue #4 で本編の2・4枚目（Issue #24 の後は2・3枚目）に、縮小せずそのまま使った（1024×1536） |
| [roles/po-distinct-v2.png](../slides/assets/roles/po-distinct-v2.png) | 人間と見分けるために作り直した AI の PO（記録は [生成指示](../slides/assets/roles/po-distinct-v2.md)）。Issue #4 で本編の2・4枚目（Issue #24 の後は2・3枚目）に、縮小せずそのまま使った（1254×1254）。次章の PO は `po.png` のまま |
| [human-decisions.png](../slides/assets/issue-5-codex/human-decisions.png) | Issue #5 で新規生成し縮小した透過 PNG（記録は [説明書](design-samples/issue-5-codex.md)）。Issue #8 では本編5枚目からそのまま再利用し（Issue #4 で5枚目を組み替えたため、導入では使っていない）、Issue #9 では次章の工程のページ（Issue #17 の前提追加後の9・11・14枚目。Issue #24 の後は7・9・12枚目）に小さく（120×80px）再利用した。再生成・編集はしていない |
| [issue-5-compare/](../slides/assets/issue-5-compare/) の3枚 | Issue #17 で次章の実例を差し替えたため、本編からは参照していない。#9 の比較記録として残す。Issue #9 で、次章の比較用に作った縮小画像。`pr6-c332c37-human.png`・`pr7-b3e0c3e-human.png` は、Issue #5 の各 PR の当時の版を `git archive` で取り出し、`npx marp --no-stdin --allow-local-files --images png` で元の5枚目（人間の判断のページ）を 1280×720 に描いた画像。`pr6-3480008-human.png` は採用修正版の記録 `docs/design-samples/issue-5-codex-preview/03-human.png`（同じ手順で 3480008 から描いた画像とバイト単位で一致）。どれも `sips -z 360 640` で 640×360 に縮小しただけ。ファイル名の SHA が版を示す |
| [issue-37-board/](../slides/assets/issue-37-board/) の5枚 | Issue #17 で、次章の実例（overstrata-board #37）用に撮影した画面。公開リポジトリを一時ディレクトリへ新たに clone し、各版を git worktree で取り出して `npm ci --ignore-scripts` → `npx vite --port 5290〜5292 --strictPort` で起動した（Docker と元プロジェクトの作業環境は使っていない。撮影後に停止）。Playwright（同リポジトリの `@playwright/test` 1.64.1）とインストール済みの Chrome で、表示幅 375×667・deviceScaleFactor 2 で撮影し、範囲を切り抜いた。`board-c276d11.png`: #37 着手前の main `c276d11` で味方2・敵2を用意し、味方1を (3,4)・味方2を (2,7)・敵1を (8,3)・敵2を (9,6) に置いて味方1を選んだ状態の盤面（CSS px で x0・y105・375×351）。`pr41-526f8f8.png`・`pr40-b1902c4.png`: 比較した版（PR #41 `526f8f8`／PR #40 `b1902c4`）で味方4・敵4を用意し、未配置の味方2を選んだ直後。設定欄と未配置ボタンの外接矩形に余白12px（#41 は x12・y693・351×305。#40 は x12・y641・351×305 で撮り、下の確定ボタンが写らないよう `sips -c 520 702 --cropOffset 0 0` で上から 351×260 に切った）。縮小・注記・色付けはしていない。`pr41-526f8f8-before.png`・`pr40-b1902c4-before.png`: 同じ版で味方4・敵4を用意した直後（まだ駒を選んでいない）。Issue #17 の実機確認で人間が「駒を触る前の画像もあるとわかりやすい」と伝えたため追加した。公開リポジトリを一時ディレクトリへ新たに clone し直し、同じ手順（`npm ci --ignore-scripts`、`npx vite --port 5290`・`5291 --strictPort`、同じ Playwright・Chrome・表示幅）で撮った。切り抜きは、#41 は選んだ直後と同じ矩形（x12・y693・351×305）。#40 は、選んだ直後と同じ矩形では上端で「未配置：8体」の見出しが半分切れたため、撮影時に保存した全ページ画像（fullPage）から、見出しの上に少し余白を取った x12・y654・351×260（CSS px。画素では x24・y1308・702×520）を `sips -c 520 702 --cropOffset 1308 24` で切り抜き直した（大きさは前と同じ。上端・下端で文字が途中で切れない。下の「準備をやり直す」ボタンは写らない）。このとき撮り直した選んだ直後の2枚は、既存の2枚と画素が一致したので、既存のファイルをそのまま使っている。採用版 `629709a` は `b1902c4` との差分が README だけなので、別に撮っていない。ファイル名の SHA が版を示す |
| [roles/po.png](../slides/assets/roles/po.png)・[team.png](../slides/assets/roles/team.png)・[developer-1.png](../slides/assets/roles/developer-1.png)・[developer-2.png](../slides/assets/roles/developer-2.png) | Issue #12 で新規生成した透過 PNG。生成は Codex CLI の組み込み画像生成（`codex exec` の `$imagegen`、2026-10-28）で、画風の参照に human-decisions.png、人物をそろえる参照に先に作った po.png（開発者2人目は developer-1.png も）を渡した。team.png は同じ生成の中で Codex が右手の位置を直している。編集は macOS の `sips -z 400 400` による 1254×1254 から 400×400 への縮小だけ（1:1 と透過を保持） |

## 役割の人物

AI エージェントの3つの役割を表す人物。Issue #12 で本編4枚目に置き、Issue #9 で次章の工程のページ（Issue #17 の前提追加後の9〜14枚目）の担当の行にも同じファイルで置いた。Issue #4 で、導入（2・4枚目）の PO だけを人間と見分けやすい `po-distinct-v2.png`（銀灰色の短髪・丸眼鏡・冊子を抱える姿）に替えた。Issue #24 で導入を4枚に絞った後の番号では、役割分担は3枚目、工程のページは7〜12枚目。

| 役割 | 使用ファイル | 人物と姿 |
|---|---|---|
| PO | `assets/roles/po.png`（次章）・`assets/roles/po-distinct-v2.png`（導入の2・3枚目） | 次章は黒髪の短い髪で、立って開いた冊子（仕様）を読む。導入は銀灰色の短髪・丸眼鏡・長い藍色の服で、閉じた冊子を抱える |
| 開発チーム | `assets/roles/team.png` | 栗色の一つ結び。板に付箋を左から順に貼る（進行の整理） |
| 開発者 | `assets/roles/developer-1.png`・`developer-2.png` | 明るい茶色の短髪（左向き）と、濃い色のおかっぱ（右向き）。それぞれ自分の机でノートパソコンを打つ。どちらが Claude Code・Codex かは決めていない（Issue #9・#17 でも対応させず、製品名は PR の説明文や発表ノートで示した） |

- 4人とも名前を持たない。外見は Issue #12 の計画で提案して承認されたもので、Overstrata の正式設定・作中の役職との対応ではない。画風だけを #5 の挿絵（レナ・ヨナ）にそろえている。
- 全員が同じ藍灰色の上着と茶色の帯を着る。人間を表すレナ・ヨナ（防具・外套）との区別を助けるが、区別の主は見出し・役割名・本文に置く。
- 開発チームは「2枚の資料を見比べる」姿にしない。この構図は人間（レナ・ヨナ）の判断の絵（次章7・9・12枚目）に使っている。
- 金色を役割の人物の近くに使わない（金色は人間の判断だけ）。
- スライド全体を1枚の画像にしない。人物1人を1ファイルにし、文字は原稿の HTML で書く。

置き方（3枚目の役割分担の型）:

```html
<div class="role-map">
  <div class="role-row">
    <div class="role-box human">
      <img class="role-portrait tall" src="assets/human/rena-standing.png" alt="人間を表す、計画を確認するレナ1人の立ち姿">
      <div><h3>人間</h3><p>…</p></div>
    </div>
    <p class="role-dialogue">⇄<br>対話して<br>具体化する</p>
    <div class="role-box">
      <img class="role-portrait" src="assets/roles/po-distinct-v2.png" alt="AI の PO を表す、銀灰色の髪と丸眼鏡で冊子を抱えた人物">
      <div><h3>PO<span class="role-tag">AI</span></h3><p>…</p></div>
    </div>
  </div>
  <div class="role-row">…開発チーム・開発者…</div>
  <p class="role-note">…</p>
</div>
```

- 役割の枠は高さ 172px。1行目は人間・対話・PO、2行目は開発チームと開発者を同じ幅で並べる。工程の矢印は描かない（順序は2枚目の全体図で見せる）。
- 開発者のように2人並べるときは、`<div class="role-pair">` に `<img class="role-portrait">` を2つ書く（110×140px、2人目を `margin-left: -26px` で寄せる）。
- 人間の枠（`role-box human`）だけ、名前と説明を金色の文字にする（全体図とそろえる）。役割の人物の枠には金色を使わない。
- alt には「AI の◯◯を表す」と書く。

## 全体図

2枚目。Issue #4 で、採用した[見本](../slides/samples/issue-4-overview/README.md)（`ae2f691`）を本編へ移した。見本の `index.html` と `npm run build:overview` は採用版の記録として残す。

- 見本の座標・文字・色を 1280×720 のまま移している。部品はすべて `position: absolute` で置き、線と矢印は1枚の `<svg class="ov-wires" viewBox="0 0 1280 720">` に描く。CSS は `themes/paper.css` の `section.overview` の中に限る。
- クラス名は `ov-` で始める。次章の `.stage`・`.actor` と名前が重なると、次章のページ型の CSS が全体図に効いてしまうため。
- 原稿の HTML の中に空行を入れない（Markdown の HTML ブロックが途中で切れる）。図の中に `<!-- -->` のコメントを書かない（Marp では発表ノートになる）。
- ページ番号は Marp の番号を使い、全体図だけ右下 35px・下 19px に寄せる（下段の開発チームと重ならないように）。
- 人間が行う3つの作業の帯（`.ov-human-action`）は、見本どおり1行に固定している（`white-space: nowrap`）。上の「日本語の改行」の例外。字幅の広い Noto でも枠に収まることを CI の PDF で確かめる。
- 見本との差（Issue #4 の確認時）: 見本の `overview.png` と本編2枚目の画像の画素の差は、3つの帯と「AI の PO が受け入れ確認」の行の約1pxの上下のずれと、ページ番号の書体の大きさ（見本 16px、本編 18px）だけ。
- Issue #24 の変更（担当の補足）: 構図・線の経路・中央の GitHub Issue・金色の3つの帯・人物は変えていない。
  - PO の説明を3行（人間と優先順位を検討／仕様・Issue に整理／成果の受け入れ確認）にした。枠（348×118px）は変えず、説明を 20px・行間 1.65 → 19px・行間 1.35、名前の行間を 1.4 → 1.25 に詰めた。
  - 開発者の説明を3行（2人が同じ Issue を／別々に計画・実装・検証／互いにレビュー）にした。枠を 280×90px（上端 529px）→ 340×102px（上端 524px）に広げ、説明の行間を 1.35 → 1.3 にした。計画・実装の枠から伸びる薄い線は、横線を y522 → 519、開発者の枠へ下りる縦線の端を 529 → 524 に合わせた。下端は 626px で、開発の流れを囲う枠（下端 634px）の内側。
  - 人間の説明「作る方向と判断を担う」を「方向・優先順位・採用を判断」にした（PO の「人間と優先順位を検討」と区別するため）。

## 表示の確かめ方（Orca）

1. `.env` の `HOST_PORT` を確かめ、`npm run dev` を起動する（既定 5273）。
2. Orca のブラウザで `http://localhost:<HOST_PORT>/index.md` を開き、1280×720 にして `#1`〜`#12` を見る。右矢印キーでページを送れる。
3. 配布用の生成物は `npm run build`・`build:pdf` の後の `dist/index.html`・`dist/agent-dev-slide.pdf`。CI の artifact `slides` にも同じものが入る。
4. 確認が終わったら開発サーバーを止める。

## 全体像の見本で追加した方針（2026-11-03）

- 人間を表す2人組の絵は、他の人物との違和感があるという人間の指摘を受けた。新しい図ではレナまたはヨナ1人を使い、他の役割と人物の大きさ・画風をそろえる。開発者2人は役割の説明として維持する。
- [全体像の見本](../slides/samples/issue-4-overview/README.md)では、[レナ1人の立ち姿](../slides/assets/human/rena-standing.png)を制作し、役割と工程の枠を試している。制作方法・参照素材・指示文は[素材の記録](../slides/assets/human/README.md)にある。Issue #4 で導入（2・4枚目。Issue #24 の後は2・3枚目）に適用した。次章（現在の7・9・12枚目）の2人組の絵は、まだ置き換えていない。
- 見本の HTML 形式は人間が確認済み。HTML で表示・修正し、PDF を配布する。Issue #4 では全体図だけを Marp の原稿内の HTML として本編に移した（上の「全体図」）。全編の原稿形式の移行はしていない。

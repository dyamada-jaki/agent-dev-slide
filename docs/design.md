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
| 人物つきの3列 | `<div class="columns roles">` の各 `.column` に `.role-heading`（役割名の `<h3>` と `<img class="role-portrait">`）、既存の本文と `.meta` を置く | 4 |
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

通常の3列の高さは 430px、人物つきの3列は 480px にしている。項目が多くて参照先が下にはみ出すときは、項目を減らすか、そのページの列だけ文字を小さくし、理由を記録する（導入6枚では 25px のまま収まった）。

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
- 文字に重ねない。人物は人間の判断にも、AI エージェントの役割を表す挿絵にも使える。役割名との近接と見出しで意味を示し、人物の姿・色・小道具だけで担当を読ませない。人間の判断の金色は AI の役割には使わない。
- Overstrata の絵・キャラクター・画風の出典表記は不要（人間の判断）。保守のため、使用ファイルと生成・編集の区別は下の表に残す。

| 使用ファイル | 区別 |
|---|---|
| [human-decisions.png](../slides/assets/issue-5-codex/human-decisions.png) | Issue #5 で新規生成し縮小した透過 PNG（記録は [説明書](design-samples/issue-5-codex.md)）。Issue #8 では本編5枚目からそのまま再利用し、再生成・編集はしていない |

## 役割を表す人物画（Issue #12）

本編4枚目では、見出し「3つの役割（どれも AI エージェント）」と役割名のすぐ横に人物を置く。5枚目は「人間」の説明と既存の2人の絵、金色の3つの判断を保つ。同じレナ・ヨナでもページごとに表す対象が違うため、4枚目の発表ノートと画像の alt に AI の役割を表す絵であることを書く。画面に説明の1行を追加しない。

人物の対応・外見・ポーズは Issue #12 の計画承認による今回の表現で、作品の正式設定や作品内の職業との対応を定めるものではない。

| 役割 | 人物と外見の根拠 | ポーズ・使用ファイル |
|---|---|---|
| PO | レナ。採用済みの `human-decisions.png` 左側の、茶色の短い直毛と茶系の服を参照 | 開いた仕様書の項目を追う。[po-lena.png](../slides/assets/issue-12-codex/po-lena.png) |
| 開発チーム | ヨナ。同画像右側の、茶色の巻き毛と暗い上着を参照。Issue #5 の人間の判断と採用画像に基づく扱い | 机上の資料を左右に整理する。[team-yona.png](../slides/assets/issue-12-codex/team-yona.png) |
| 開発者 | 名前のない追加人物1人。短い黒髪とくすんだ藍色の簡素な服は、今回の計画で提案し承認された外見 | ノートPCで制作する。[developer.png](../slides/assets/issue-12-codex/developer.png) |

### 生成・編集の区別

3画像とも Codex の組み込み imagegen で新規生成した透過 PNG。既存の挿絵は画風とレナ・ヨナの外見の参照に使い、既存画像自体は編集していない。共通の生成指定は、淡い水彩・柔らかい茶色の線・点の目・デフォルメした半身と机・単独の人物・文字なし・透明背景。人物ごとの外見とポーズは上の表のとおり。正式な設定は追加していない。

保存時に macOS の `sips -z 400 600` で各画像を1536×1024から600×400へ縮小し、縦横比3:2と透過を保持した。人物・ポーズの編集はしていない。紙色 `#F6F4EE` 上で縁の色にじみや背景の四角が目立たないことを確認する。Overstrata の出典表記を追加の必須条件にはしない。

### 次章で再利用する配置例

役割ごとに独立した画像なので、必要な人物だけを参照できる。スライド全体を1枚の画像にせず、役割名・本文は HTML の文字で書く。以下は同じ3列を使う場合の1列の例。次章への実際の配置と文章は Issue #9 で決める。

```html
<div class="columns roles">
  <div class="column">
    <div class="role-heading">
      <h3>PO</h3>
      <img class="role-portrait" src="assets/issue-12-codex/po-lena.png"
           alt="PO の AI エージェントの役割を表す、仕様書を確認するレナ">
    </div>
    <ul><li>そのページで説明する担当を書く</li></ul>
    <p class="meta">必要な補足</p>
  </div>
  <!-- 同じ形で、必要な役割の列を続ける -->
</div>
```

`.role-portrait` は 160×110px の枠に `object-fit: contain` で比率を保って収める。`.role-heading` は高さ110pxで役割名と横並びにし、本文との間に12px空ける。人物つきの3列だけ高さ480px・罫線下の余白12pxとし、本文25px・項目名34pxは共通テーマのまま。通常の3列・人間の判断・Issue #5 の見本にはこの指定を使わない。

## 表示の確かめ方（Orca）

1. `.env` の `HOST_PORT` を確かめ、`npm run dev` を起動する（既定 5273）。
2. Orca のブラウザで `http://localhost:<HOST_PORT>/index.md` を開き、1280×720 にして `#1`〜`#6` を見る。右矢印キーでページを送れる。
3. 配布用の生成物は `npm run build`・`build:pdf` の後の `dist/index.html`・`dist/agent-dev-slide.pdf`。CI の artifact `slides` にも同じものが入る。
4. 確認が終わったら開発サーバーを止める。

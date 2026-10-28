---
marp: true
theme: default
size: 16:9
paginate: false
title: 【見本・未採用】エージェント開発プロセス（Claude Code 案）
description: Issue #5 のデザイン比較用の見本。本編ではない
style: |
  section {
    font-family: "Hiragino Sans", "Noto Sans CJK JP", "Noto Sans JP", sans-serif;
    font-size: 26px;
    padding: 60px 80px;
    color: #26262e;
    background: #f6f4ee;
  }
  section h1,
  section h2,
  section h3,
  .gate {
    font-family: "Hiragino Mincho ProN", "Noto Serif CJK JP", serif;
    letter-spacing: 0.02em;
  }
  section h2 {
    position: relative;
    font-size: 40px;
    font-weight: 600;
    margin: 0 0 32px;
    padding-bottom: 14px;
    color: #1f2b47;
  }
  section h2::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 80px;
    height: 4px;
    /* 深度バー: PDF でも崩れないよう、グラデーションではなく単色の影を横に並べる */
    background: #3e7c6b;
    box-shadow: 80px 0 0 #8a6b4a, 160px 0 0 #3a2b52;
  }
  section footer {
    left: 80px;
    right: 80px;
    bottom: 22px;
    font-size: 15px;
    color: #6b6b73;
    text-align: right;
  }
  section.cover {
    padding-right: 48px;
  }
  .cover-body {
    display: flex;
    align-items: center;
    gap: 24px;
    height: 100%;
  }
  .cover-title {
    flex: 1;
    display: flex;
    align-items: stretch;
    gap: 36px;
  }
  .depth {
    flex: 0 0 6px;
    display: flex;
    flex-direction: column;
  }
  .depth i {
    flex: 1;
  }
  .depth i:nth-child(1) {
    background: #3e7c6b;
  }
  .depth i:nth-child(2) {
    background: #8a6b4a;
  }
  .depth i:nth-child(3) {
    background: #3a2b52;
  }
  .cover-text {
    padding: 8px 0;
  }
  .cover-title h1 {
    font-size: 54px;
    font-weight: 700;
    color: #1f2b47;
    margin: 0 0 24px;
    line-height: 1.3;
  }
  .cover-title p {
    font-size: 28px;
    line-height: 1.7;
    color: #6b6b73;
    margin: 0;
  }
  .cover-title .tagline {
    color: #1f2b47;
    font-weight: bold;
    letter-spacing: 0.06em;
  }
  .figure {
    flex: none;
    /* 絵の地（ほぼ白）を明るくして乗算し、背景の紙色に溶かす */
    filter: brightness(1.05);
    mix-blend-mode: multiply;
  }
  .row {
    display: flex;
    align-items: stretch;
    gap: 20px;
  }
  .arrow {
    flex: none;
    align-self: center;
    font-size: 30px;
    color: #1f2b47;
  }
  .card {
    flex: 1;
    background: #ece8de;
    border: 1px solid #d7d2c4;
    border-top: 3px solid #1f2b47;
    border-radius: 4px;
    padding: 20px 24px;
    font-size: 23px;
    line-height: 1.55;
  }
  .card h3 {
    font-size: 30px;
    font-weight: 600;
    margin: 0 0 10px;
    color: #1f2b47;
  }
  .card ul {
    margin: 0;
    padding-left: 1.1em;
  }
  .card .meta {
    margin: 12px 0 0;
    color: #6b6b73;
    font-size: 19px;
  }
  .human {
    flex: 0 0 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f5eedb;
    border-color: #e3d5ae;
    border-top-color: #b8912f;
    padding-top: 12px;
  }
  .human .figure {
    display: block;
    height: 200px;
    filter: brightness(1.09);
  }
  .human h3,
  .human ul,
  .human .meta {
    align-self: stretch;
  }
  .human h3 {
    color: #6e5418;
  }
  .gates {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }
  .gate {
    background: #f5eedb;
    border-left: 6px solid #b8912f;
    border-radius: 4px;
    padding: 16px 24px;
    font-size: 28px;
    font-weight: 600;
    color: #6e5418;
  }
  .note {
    margin: 26px 0 0;
    font-size: 24px;
    color: #6b6b73;
  }
---

<!-- _class: cover -->
<!-- _footer: デザイン見本（Claude Code 案）・未採用｜本編 1枚目「表紙」 -->

<div class="cover-body">
<div class="cover-title">
<div class="depth"><i></i><i></i><i></i></div>
<div class="cover-text">

# エージェント開発プロセス

<p class="tagline">Spec × Issue × Orca</p>
<p>agent-dev-template の全体像と役割</p>

</div>
</div>
<img class="figure" src="images/cover-rena-yona.jpg" width="380" height="380" alt="デフォルメしたレナとヨナが、1枚の紙を一緒にのぞき込んでいる">
</div>

<!--
【話すこと】
agent-dev-template というテンプレートが用意している開発プロセスの全体像を紹介します。
最初の数分で「何をするプロセスか」と「登場する役割」を押さえ、そのあと Issue 1本の流れに進みます。

【出典】
- README 冒頭（題名「エージェント開発テンプレート（Spec × Issue × Orca）」）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md
-->

---

<!-- _footer: デザイン見本（Claude Code 案）・未採用｜本編 3枚目「Spec・Issue・Orca の関係」 -->

## Spec・Issue・Orca の関係

<div class="row">
  <div class="card">
    <h3>Spec</h3>
    <ul>
      <li>作るもの全体の仕様</li>
      <li>「何を・なぜ・どこまで」を書く</li>
      <li>まだ作らない部分も書いてよい</li>
    </ul>
    <p class="meta">docs/spec.md</p>
  </div>
  <div class="arrow">→</div>
  <div class="card">
    <h3>Issue</h3>
    <ul>
      <li>仕様から今回作る部分だけを取り出した作業の単位</li>
      <li>目的・範囲・受け入れ条件を書く</li>
      <li>1〜3本ずつ出し、終わったら次を切る</li>
    </ul>
    <p class="meta">GitHub Issue</p>
  </div>
  <div class="arrow">→</div>
  <div class="card">
    <h3>Orca</h3>
    <ul>
      <li>複数の AI エージェントの端末と worktree をまとめて扱うアプリ</li>
      <li>Issue を1本ずつ実装する作業環境</li>
    </ul>
    <p class="meta">エージェントの作業場所</p>
  </div>
</div>

<p class="note">Spec から今回作る部分を Issue に切り出し、Orca で1本ずつ作る</p>

<!--
【話すこと】
Spec は、作るもの全体について「何を・なぜ・どこまで」作るかを書いた仕様で、まだ作らない部分も書いておけます。
Issue は、その仕様から今回作る部分だけを取り出した作業の単位です。今回実装する作業の目的・範囲（やらないこと）・受け入れ条件を書きます。1〜3本ずつ出して、終わったら次を切ります。
Orca は、複数の AI エージェントの端末と worktree をまとめて扱うアプリで、Issue を1本ずつ実装する作業環境になります。

【出典】
- workflow.md 冒頭（spec.md は作るもの全体の仕様、Issue はそこから今回作る部分だけを取り出したもの、Orca で1本ずつ実装）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md
- workflow.md ステップ2「Issueを切り出す」（Issue に書くこと: 目的、受け入れ条件、スコープ外）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md
- README 冒頭（Orca の説明）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md
-->

---

<!-- _footer: デザイン見本（Claude Code 案）・未採用｜本編 5枚目「人間は3つの役割に含めず、判断を担う」 -->

## 人間は3つの役割に含めず、判断を担う

<div class="row">
  <div class="card human">
    <img class="figure" src="images/judge-rena.jpg" width="132" height="200" alt="デフォルメしたレナが、紙に判を押そうとしている">
    <h3>人間</h3>
    <ul>
      <li>PO と議論する</li>
      <li>3つの判断をする</li>
    </ul>
    <p class="meta">役割には数えない</p>
  </div>
  <div class="arrow">→</div>
  <div class="gates">
    <div class="gate">1. 計画を承認する</div>
    <div class="gate">2. 採用する PR を決める</div>
    <div class="gate">3. 改善の採否を決める</div>
  </div>
</div>

<p class="note">3つの判断は人間が行う。それ以外はエージェントが進める</p>

<!--
【話すこと】
人間は3つの役割のどれにも含めません。
人間がすることは、PO との議論と、3つの判断です。実装前の計画を承認する、採用する PR を決める、ふりかえりで出た改善の採否を決める。
この3つの判断は人間が行い、それ以外の作業はエージェントが進めます。
それぞれの判断がどのタイミングで来るかは、次の「Issue 1本の流れ」で説明します。

【出典】
- README「Issue 1本の流れ」（「六角形が人間の判断です。それ以外はエージェントが進めます。」「人間がすることは、PO との議論と、④⑥⑧の3つの判断です。」）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md#issue-1本の流れ
- workflow.md の PO・開発チーム・開発者の担当を表にした節（人間が判断するのは3つの場面: ④計画承認、⑥採用の判断、⑧改善の採否）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md
-->

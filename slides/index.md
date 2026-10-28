---
marp: true
theme: default
size: 16:9
paginate: true
title: エージェント開発プロセス
description: agent-dev-template の開発プロセス
style: |
  section {
    font-family: "Hiragino Sans", "Noto Sans CJK JP", "Noto Sans JP", sans-serif;
    font-size: 28px;
    padding: 56px 72px;
    color: #1f2933;
  }
  section h2 {
    font-size: 44px;
    margin: 0 0 28px;
    color: #12355b;
    border-bottom: 4px solid #2f80c1;
    padding-bottom: 8px;
  }
  section.lead {
    justify-content: center;
    text-align: center;
  }
  section.lead h1 {
    font-size: 64px;
    color: #12355b;
    margin-bottom: 8px;
  }
  section.lead p {
    font-size: 30px;
    color: #52606d;
  }
  .keyword {
    font-size: 40px;
    font-weight: bold;
    color: #2f80c1;
    margin: 0 0 24px;
  }
  .statement {
    font-size: 32px;
    line-height: 1.6;
    margin: 0 0 32px;
  }
  .row {
    display: flex;
    align-items: stretch;
    gap: 16px;
  }
  .flow {
    align-items: center;
  }
  .step {
    flex: 1;
    background: #e8f1fa;
    border: 2px solid #2f80c1;
    border-radius: 12px;
    padding: 18px 8px;
    text-align: center;
    font-weight: bold;
    color: #12355b;
  }
  .arrow {
    flex: none;
    align-self: center;
    font-size: 32px;
    color: #2f80c1;
  }
  .card {
    flex: 1;
    background: #f5f7fa;
    border-top: 8px solid #2f80c1;
    border-radius: 8px;
    padding: 16px 20px;
    font-size: 23px;
    line-height: 1.5;
  }
  .card h3 {
    font-size: 30px;
    margin: 0 0 8px;
    color: #12355b;
  }
  .card ul {
    margin: 0;
    padding-left: 1.1em;
  }
  .card .meta {
    margin: 10px 0 0;
    color: #52606d;
    font-size: 20px;
  }
  .human {
    flex: 0 0 300px;
    background: #fff4e5;
    border-top-color: #e08a1e;
  }
  .human h3 {
    color: #8a4b00;
  }
  .note {
    margin: 24px 0 0;
    font-size: 24px;
    color: #52606d;
  }
  .gates {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .gate {
    background: #fff4e5;
    border-left: 8px solid #e08a1e;
    border-radius: 8px;
    padding: 14px 20px;
    font-size: 28px;
    font-weight: bold;
    color: #8a4b00;
  }
  table.recap {
    display: table;
    width: 100%;
    border-collapse: collapse;
    font-size: 26px;
  }
  table.recap th,
  table.recap td {
    border: none;
    border-bottom: 2px solid #d9e2ec;
    padding: 14px 16px;
    text-align: left;
    background: transparent;
  }
  table.recap th {
    width: 160px;
    color: #2f80c1;
  }
  .next {
    margin: 28px 0 0;
    padding: 14px 20px;
    background: #12355b;
    color: #ffffff;
    border-radius: 8px;
    font-size: 26px;
  }
---

<!-- _class: lead -->
<!-- _paginate: false -->

# エージェント開発プロセス

Spec × Issue × Orca
agent-dev-template の全体像と役割

<!--
【話すこと】
agent-dev-template というテンプレートが用意している開発プロセスの全体像を紹介します。
最初の数分で「何をするプロセスか」と「登場する役割」を押さえ、そのあと Issue 1本の流れに進みます。

【出典】
- README 冒頭（題名「エージェント開発テンプレート（Spec × Issue × Orca）」）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md
-->

---

## 何をするプロセスか

<p class="statement">人間が判断し、AI エージェント（Claude Code と Codex）が<br>仕様づくりから実装・レビュー・マージ・ふりかえりまでを進める</p>

<div class="row flow">
  <div class="step">仕様づくり</div>
  <div class="arrow">→</div>
  <div class="step">実装</div>
  <div class="arrow">→</div>
  <div class="step">レビュー</div>
  <div class="arrow">→</div>
  <div class="step">マージ</div>
  <div class="arrow">→</div>
  <div class="step">ふりかえり</div>
</div>

<p class="note">agent-dev-template は、このプロセスを一式そろえたテンプレート</p>

<!--
【話すこと】
一言でいうと、人間が判断し、AI エージェントが仕様づくりからふりかえりまでを進めるためのプロセスです。
エージェントは Claude Code と Codex の2種類を使います。
各工程の細かい手順は、このあと「Issue 1本の流れ」で説明します。ここでは「人間は判断、エージェントは作業」という分担だけ覚えてください。

【出典】
- README 冒頭「人間が判断し、AI エージェント（Claude Code と Codex）が仕様づくりから実装・レビュー・マージ・ふりかえりまでを進めるための、プロセス一式のテンプレートです。」: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md
-->

---

## Spec・Issue・Orca の関係

<div class="row">
  <div class="card">
    <h3>Spec</h3>
    <ul>
      <li>作るもの全体の地図</li>
      <li>「何を・なぜ・どこまで」を持つ</li>
      <li>まだ作らない部分も書いてよい</li>
    </ul>
    <p class="meta">docs/spec.md</p>
  </div>
  <div class="arrow">→</div>
  <div class="card">
    <h3>Issue</h3>
    <ul>
      <li>地図から今作る一片だけを切り出した作業票</li>
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

<p class="note">地図（Spec）から一片（Issue）を切り出し、Orca の上で1本ずつ作る</p>

<!--
【話すこと】
Spec は作るもの全体の地図で、まだ作らない部分も書いておけます。
Issue は、その地図から「今作る一片」だけを切り出した作業票です。1〜3本ずつ出して、終わったら次を切ります。
Orca は、複数の AI エージェントの端末と worktree をまとめて扱うアプリで、Issue を1本ずつ実装する作業環境になります。

【出典】
- workflow.md 冒頭（spec.md は地図、Issue は一片、Orca で1本ずつ実装）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md
- README 冒頭（Orca の説明）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md
-->

---

## 3つの席（どれも AI エージェント）

<div class="row">
  <div class="card">
    <h3>PO</h3>
    <ul>
      <li>人間と議論して spec.md と Issue を書く</li>
      <li>着手してよい Issue に「開発可」を付ける</li>
      <li>推された PR を受け入れ確認する（コードは見ない）</li>
    </ul>
    <p class="meta">長く使う</p>
  </div>
  <div class="card">
    <h3>開発チーム</h3>
    <ul>
      <li>Issue 1本を最後まで進める</li>
      <li>開発者2人の実装を比べ、採る PR を推す</li>
      <li>後片付けとふりかえり</li>
    </ul>
    <p class="meta">Issue ごとに開いて閉じる</p>
  </div>
  <div class="card">
    <h3>開発者</h3>
    <ul>
      <li>自分の worktree で計画・実装・PR・レビュー</li>
      <li>Claude Code と Codex が1人ずつ</li>
    </ul>
    <p class="meta">実装からマージまで</p>
  </div>
</div>

<p class="note">人間はこの3つの席に入らない（次のページ）</p>

<!--
【話すこと】
エージェントは役割の違う3つの席に分かれます。
PO は人間と議論して仕様と Issue を書き、開発チームが推す PR を受け入れ条件・仕様・使う人の目で確かめます。コードは見ません。
開発チームは Issue 1本を最後まで進めます。開発者2人に同じ Issue を別々に実装させ、互いにレビューさせて、どちらを採るかを推します。
開発者は自分の worktree で計画・実装・PR・レビューを行います。
PO と開発チームを分けているのは、1つの端末にまとめると文脈がすぐあふれ、開発中にプロダクトの検討を進めにくくなるためです。
（開発チームを自動で開く「起動係」という仕組みもありますが、席ではないので後のパートで扱います。）

【出典】
- workflow.md「3つの席」: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md#3つの席
- README「席と受け渡し」（席の表、PO と開発チームを分ける理由）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md#席と受け渡し
-->

---

## 人間は席の外で判断する

<div class="row">
  <div class="card human">
    <h3>人間</h3>
    <ul>
      <li>PO と議論する</li>
      <li>3つの判断をする</li>
    </ul>
    <p class="meta">席には数えない</p>
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
人間は3つの席のどれでもありません。
人間がすることは、PO との議論と、3つの判断です。実装前の計画を承認する、採用する PR を決める、ふりかえりで出た改善の採否を決める。
この3つの判断は人間が行い、それ以外の作業はエージェントが進めます。
それぞれの判断がどのタイミングで来るかは、次の「Issue 1本の流れ」で説明します。

【出典】
- README「Issue 1本の流れ」（「六角形が人間の判断です。それ以外はエージェントが進めます。」「人間がすることは、PO との議論と、④⑥⑧の3つの判断です。」）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md#issue-1本の流れ
- workflow.md「3つの席」（「人間の関所は3つ: ④計画承認、⑥採用の判断、⑧改善の採否」）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md#3つの席
-->

---

## ここまでのまとめ

<table class="recap">
  <tr><th>何を</th><td>人間が判断し、AI エージェントが仕様からふりかえりまで進める</td></tr>
  <tr><th>何で</th><td>Spec（地図）から Issue（一片）を切り出し、Orca の上で作る</td></tr>
  <tr><th>誰が</th><td>PO・開発チーム・開発者の3つの席と、席の外で判断する人間</td></tr>
</table>

<p class="next">次: Issue 1本の流れ ― 仕様から切り出した Issue が、どう進んでいくか</p>

<!--
【話すこと】
ここまでをまとめると、何をするか・何を使うか・誰が担うか、の3点です。
次は、Issue 1本が切り出されてから、計画・実装・レビュー・マージ・ふりかえりへ進む流れを見ていきます。

【出典】
- README 冒頭・「席と受け渡し」・「Issue 1本の流れ」: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md
- workflow.md 冒頭・「3つの席」: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md
-->

---
marp: true
theme: default
size: 16:9
paginate: false
title: 検討用・未採用 / Codex案：紙と藍の余白
description: Issue 5 の代表3枚。正式なテーマや本編への適用ではない見本。
style: |
  section {
    display: flex;
    background: #F6F4EE;
    color: #26262E;
    font-family: "Hiragino Sans", "Noto Sans CJK JP", "Noto Sans JP", sans-serif;
    font-size: 25px;
    line-height: 1.5;
    padding: 56px 72px;
    justify-content: flex-start;
  }
  header {
    top: 26px;
    left: 72px;
    right: 72px;
    color: #62626C;
    font-size: 16px;
    letter-spacing: .06em;
  }
  h1, h2, h3 {
    color: #1F2B47;
    font-family: "Yu Mincho", "YuMincho", "Noto Serif CJK JP", serif;
    font-weight: 700;
  }
  h2 {
    font-size: 40px;
    line-height: 1.35;
    margin: 24px 0 38px;
    border: 0;
    padding: 0;
  }
  h3 { font-size: 34px; margin: 0 0 24px; }
  p, ul { margin: 0; }
  ul { padding-left: 1.1em; }
  li + li { margin-top: 16px; }
  section.cover h1 {
    font-size: 60px;
    line-height: 1.35;
    margin: 130px 0 40px;
    letter-spacing: .04em;
  }
  section.cover .keywords { font-size: 32px; color: #1F2B47; }
  section.cover .subtitle { font-size: 28px; margin-top: 16px; }
  .definitions {
    display: flex;
    gap: 22px;
    height: 430px;
    margin-top: 12px;
  }
  .definition {
    flex: 1;
    min-width: 0;
    border-top: 2px solid #D7D2C4;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
  }
  .definition ul { font-size: 25px; }
  .definition li { white-space: nowrap; letter-spacing: -.04em; }
  .meta { font-size: 22px; color: #62626C; }
  .definition .meta { margin-top: auto; padding-top: 12px; }
  .arrow {
    color: #62626C;
    font-size: 30px;
    align-self: flex-start;
    padding-top: 22px;
  }
  section.human-page h2 { margin-bottom: 16px; }
  .decision-layout { display: flex; gap: 32px; align-items: flex-start; }
  .person { flex: 0 0 340px; }
  .person h3 { margin-bottom: 0; }
  .person li + li { margin-top: 4px; }
  .person .meta { margin-top: 0; color: #6E5418; }
  .people {
    display: block;
    width: 300px;
    height: 210px;
    object-fit: contain;
    margin: 0;
  }
  .decision-layout > .arrow { padding-top: 50px; }
  .judgements { flex: 1; padding-top: 12px; }
  .judgement {
    font-size: 30px;
    color: #6E5418;
    padding: 20px 0;
    border-bottom: 1px solid #B8912F;
  }
  .judgement:first-child { border-top: 2px solid #B8912F; }
---

<!-- _class: cover -->
<!-- _header: 検討用・未採用 / Codex案 / 元の1枚目 -->

# エージェント<br>開発プロセス

<p class="keywords">Spec × Issue × Orca</p>
<p class="subtitle">agent-dev-template の全体像と役割</p>

<!--
【話すこと】
agent-dev-template というテンプレートが用意している開発プロセスの全体像を紹介します。
最初の数分で「何をするプロセスか」と「登場する役割」を押さえ、そのあと Issue 1本の流れに進みます。

【出典】
- README 冒頭（題名「エージェント開発テンプレート（Spec × Issue × Orca）」）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md
-->

---

<!-- _class: relation -->
<!-- _header: 検討用・未採用 / Codex案 / 元の3枚目 -->

## Spec・Issue・Orca の関係

<div class="definitions">
  <div class="definition">
    <h3>Spec</h3>
    <ul>
      <li>作るもの全体の仕様</li>
      <li>「何を・なぜ・どこまで」<br>を書く</li>
      <li>まだ作らない部分も<br>書いてよい</li>
    </ul>
    <p class="meta">docs/spec.md</p>
  </div>
  <div class="arrow">→</div>
  <div class="definition">
    <h3>Issue</h3>
    <ul>
      <li>仕様から今回作る部分<br>だけを取り出した<br>作業の単位</li>
      <li>目的・範囲・<br>受け入れ条件を書く</li>
      <li>1〜3本ずつ出し、<br>終わったら次を切る</li>
    </ul>
    <p class="meta">GitHub Issue</p>
  </div>
  <div class="arrow">→</div>
  <div class="definition">
    <h3>Orca</h3>
    <ul>
      <li>複数の AI エージェントの<br>端末と worktree を<br>まとめて扱うアプリ</li>
      <li>Issue を1本ずつ<br>実装する作業環境</li>
    </ul>
    <p class="meta">エージェントの作業場所</p>
  </div>
</div>

<!--
【話すこと】
Spec から今回作る部分を Issue に切り出し、Orca で1本ずつ作る
Spec は、作るもの全体について「何を・なぜ・どこまで」作るかを書いた仕様で、まだ作らない部分も書いておけます。
Issue は、その仕様から今回作る部分だけを取り出した作業の単位です。今回実装する作業の目的・範囲（やらないこと）・受け入れ条件を書きます。1〜3本ずつ出して、終わったら次を切ります。
Orca は、複数の AI エージェントの端末と worktree をまとめて扱うアプリで、Issue を1本ずつ実装する作業環境になります。

【出典】
- workflow.md 冒頭（spec.md は作るもの全体の仕様、Issue はそこから今回作る部分だけを取り出したもの、Orca で1本ずつ実装）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md
- workflow.md ステップ2「Issueを切り出す」（Issue に書くこと: 目的、受け入れ条件、スコープ外）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md
- README 冒頭（Orca の説明）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md
-->

---

<!-- _class: human-page -->
<!-- _header: 検討用・未採用 / Codex案 / 元の5枚目 -->

## 人間は3つの役割に含めず、<br>判断を担う

<div class="decision-layout">
  <div class="person">
    <h3>人間</h3>
    <ul>
      <li>PO と議論する</li>
      <li>3つの判断をする</li>
    </ul>
    <p class="meta">役割には数えない</p>
    <img class="people" src="assets/issue-5-codex/human-decisions.png" alt="人間の判断を表す、資料を見比べるデフォルメしたレナとヨナ">
  </div>
  <div class="arrow">→</div>
  <div class="judgements">
    <div class="judgement">1. 計画を承認する</div>
    <div class="judgement">2. 採用する PR を決める</div>
    <div class="judgement">3. 改善の採否を決める</div>
  </div>
</div>

<!--
【話すこと】
3つの判断は人間が行う。それ以外はエージェントが進める
人間は3つの役割のどれにも含めません。
人間がすることは、PO との議論と、3つの判断です。実装前の計画を承認する、採用する PR を決める、ふりかえりで出た改善の採否を決める。
この3つの判断は人間が行い、それ以外の作業はエージェントが進めます。
それぞれの判断がどのタイミングで来るかは、次の「Issue 1本の流れ」で説明します。

【出典】
- README「Issue 1本の流れ」（「六角形が人間の判断です。それ以外はエージェントが進めます。」「人間がすることは、PO との議論と、④⑥⑧の3つの判断です。」）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md#issue-1本の流れ
- workflow.md の PO・開発チーム・開発者の担当を表にした節（人間が判断するのは3つの場面: ④計画承認、⑥採用の判断、⑧改善の採否）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md
-->

---
marp: true
theme: paper-ink
size: 16:9
paginate: true
title: エージェント開発プロセス
description: agent-dev-template の開発プロセス
---

<!-- _class: cover -->
<!-- _paginate: false -->

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

## 何をするプロセスか

<p class="statement">人間が判断し、AI エージェント（Claude Code と Codex）が<br>仕様づくりから実装・レビュー・マージ・ふりかえりまでを進める</p>

<div class="process">
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

<!--
【話すこと】
agent-dev-template は、このプロセスを一式そろえたテンプレート
一言でいうと、人間が判断し、AI エージェントが仕様づくりからふりかえりまでを進めるためのプロセスです。
エージェントは Claude Code と Codex の2種類を使います。
各工程の細かい手順は、このあと「Issue 1本の流れ」で説明します。ここでは「人間は判断、エージェントは作業」という分担だけ覚えてください。

【出典】
- README 冒頭「人間が判断し、AI エージェント（Claude Code と Codex）が仕様づくりから実装・レビュー・マージ・ふりかえりまでを進めるための、プロセス一式のテンプレートです。」: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md
-->

---

<!-- _class: relation -->

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

<!-- _class: roles -->

## 3つの役割<br>（どれも AI エージェント）

<div class="definitions">
  <div class="definition">
    <h3>PO</h3>
    <ul>
      <li>人間と議論して<br>spec.md と Issue を書く</li>
      <li>着手してよい Issue に<br>「開発可」を付ける</li>
      <li>推薦された PR を<br>受け入れ確認する<br>（コードは見ない）</li>
    </ul>
    <p class="meta">長く使う</p>
  </div>
  <div class="definition">
    <h3>開発チーム</h3>
    <ul>
      <li>Issue 1本を最後まで進める</li>
      <li>開発者2人の実装を比べ、<br>採る PR を推薦する</li>
      <li>後片付けとふりかえり</li>
    </ul>
    <p class="meta">Issue ごとに開いて閉じる</p>
  </div>
  <div class="definition">
    <h3>開発者</h3>
    <ul>
      <li>自分の worktree で<br>計画・実装・PR・レビュー</li>
      <li>Claude Code と Codex が<br>1人ずつ</li>
    </ul>
    <p class="meta">実装からマージまで</p>
  </div>
</div>

<!--
【話すこと】
人間はこの3つの役割に含めない（次のページ）
エージェントは3つの役割に分かれます。
PO は人間と議論して仕様と Issue を書き、開発チームが推薦する PR を受け入れ条件・仕様・使う人の目で確かめます。コードは見ません。
開発チームは Issue 1本を最後まで進めます。開発者2人に同じ Issue を別々に実装させ、互いにレビューさせて、どちらを採るかを推薦します。
開発者は自分の worktree で計画・実装・PR・レビューを行います。
PO と開発チームを分けているのは、1つの端末にまとめると文脈がすぐあふれ、開発中にプロダクトの検討を進めにくくなるためです。
（開発チームを自動で開く「起動係」という仕組みもありますが、3つの役割には含めないので後のパートで扱います。）

【出典】
- workflow.md の PO・開発チーム・開発者の担当を表にした節: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md
- README の PO・開発チーム・開発者の役割と受け渡しを説明した節（役割の表、PO と開発チームを分ける理由）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md
-->

---

<!-- _class: human-page -->

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

---

## ここまでのまとめ

<table class="recap">
  <tr><th>何を</th><td>人間が判断し、AI エージェントが仕様からふりかえりまで進める</td></tr>
  <tr><th>何で</th><td>Spec から今回作る部分を Issue に切り出し、Orca で作る</td></tr>
  <tr><th>誰が</th><td>PO・開発チーム・開発者の3つの役割と、判断を担う人間</td></tr>
</table>

<p class="next">次: Issue 1本の流れ<br>― 仕様から切り出した Issue が、どう進んでいくか</p>

<!--
【話すこと】
ここまでをまとめると、何をするか・何を使うか・誰が担うか、の3点です。
次は、Issue 1本が切り出されてから、計画・実装・レビュー・マージ・ふりかえりへ進む流れを見ていきます。

【出典】
- README 冒頭・役割と受け渡しの節・「Issue 1本の流れ」: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md
- workflow.md 冒頭・3つの役割の節: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md
-->

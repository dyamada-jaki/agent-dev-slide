---
marp: true
theme: paper
size: 16:9
paginate: true
title: エージェント開発プロセス
description: agent-dev-template の開発プロセス
---

<!-- _class: cover -->
<!-- _paginate: false -->

# エージェント<br>開発プロセス

<p class="subtitle">agent-dev-template の全体像と役割</p>

---

<!-- _class: overview -->

## 人間と AI で進める開発の全体像

<div class="ov" role="figure" aria-label="開発プロセスの全体像。人間と AI の PO が対話し、PO は対話の結果を GitHub Issue にして作成・更新する。人間は方向・優先順位・採用を判断する。開発可になった Issue をもとに開発チームが着手し、計画から実装、成果の確認、ふりかえりへ進む。開発者は2人で、それぞれ1つずつ案を作り、開発者どうしでレビューする。計画は開発者から開発チームを経て人間が承認。成果は AI の PO が受け入れ確認し、その後に人間が確認して採用を判断する。ふりかえりは開発チームが改善案を示し、人間が採否を判断する。結果を AI の PO へ申し送り、次の仕様・Issue へ反映する。開発チームは枠で囲まれた開発の流れ全体を管理し、人間と AI の PO が上から関わる。">
<p class="ov-intent">スクラムを実践できるよう、<span>役割とイベント</span>を取り入れる</p>
<div class="ov-scope"></div>
<svg class="ov-wires" viewBox="0 0 1280 720" aria-hidden="true">
<defs><marker id="ov-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 1 1 L 8 5 L 1 9" fill="none" stroke="#1F2B47" stroke-width="1.5"/></marker><marker id="ov-soft-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 1 1 L 8 5 L 1 9" fill="none" stroke="#62626C" stroke-width="1.5"/></marker></defs>
<path d="M 382 262 V 286 H 1030 V 262 M 382 286 H 52 V 384" fill="none" stroke="#1F2B47" stroke-width="1.8"/>
<path d="M 536 222 H 856" fill="none" stroke="#62626C" stroke-width="1.5" marker-start="url(#ov-soft-arrow)" marker-end="url(#ov-soft-arrow)"/>
<g fill="none" stroke="#1F2B47" stroke-width="1.8" marker-end="url(#ov-arrow)"><path d="M 1130 262 V 336 H 764"/><path d="M 516 336 H 200 V 392"/></g>
<g fill="none" stroke="#1F2B47" stroke-width="2" marker-end="url(#ov-arrow)"><path d="M 324 443 H 366"/><path d="M 614 443 H 656"/><path d="M 904 443 H 946"/><path d="M 1070 515 V 544 H 1000 V 565"/><path d="M 1078 586 H 1250 V 370 H 740 V 357"/></g>
<path d="M 200 515 V 519 H 490 V 515 M 216 519 V 524" fill="none" stroke="#D7D2C4" stroke-width="2"/>
</svg>
<div class="ov-actor ov-human"><img src="assets/human/rena-standing.png" alt="人間を表す、計画を確認するレナ1人の立ち姿"><div><h3>人間</h3><p>方向・優先順位・採用を判断</p></div></div>
<p class="ov-dialogue">対話して具体化する</p>
<p class="ov-issue">GitHub Issue</p>
<p class="ov-issue-write">作成・更新</p>
<p class="ov-issue-start">開発可で着手</p>
<div class="ov-actor ov-po"><img src="assets/roles/po-distinct-v2.png" alt="AI の PO を表す、銀灰色の髪と丸眼鏡で冊子を抱えた人物"><div><h3>PO<span class="ov-tag">AI</span></h3><p>対話の結果を<br>Issue にする</p></div></div>
<div class="ov-stage ov-s1"><h3>計画</h3><p>開発者 → 開発チーム<br><strong class="ov-human-action">人間が承認</strong></p></div>
<div class="ov-stage ov-s2"><h3>実装・検証</h3><p>作って、確かめる<br>開発者どうしでレビュー</p></div>
<div class="ov-stage ov-s3"><h3>成果の確認</h3><p class="ov-sequence">AI の PO が受け入れ確認<br><span class="ov-down">↓</span><br><strong class="ov-human-action">人間が確認・採用判断</strong></p></div>
<div class="ov-stage ov-s4"><h3>ふりかえり</h3><p>開発チームが改善案<br><strong class="ov-human-action">人間が採否を判断</strong></p></div>
<div class="ov-actor ov-developers"><div class="ov-portraits"><img src="assets/roles/developer-1.png" alt="開発者1"><img src="assets/roles/developer-2.png" alt="開発者2"></div><div><h3>開発者<span class="ov-tag">AI</span></h3><p>2人が1つずつ<br>案を作る</p></div></div>
<div class="ov-actor ov-team"><img src="assets/roles/team.png" alt="開発チームを表す人物"><div><h3>開発チーム<span class="ov-tag">AI</span></h3><p>この流れ全体を管理</p></div></div>
<p class="ov-handoff">結果を<br>申し送り</p><p class="ov-return">AI の PO：結果を受け取り、次の仕様・Issue へ反映</p>
</div>

---

## 人間と AI の役割分担

<div class="role-map">
  <div class="role-row">
    <div class="role-box human">
      <img class="role-portrait tall" src="assets/human/rena-standing.png" alt="人間を表す、計画を確認するレナ1人の立ち姿">
      <div>
        <h3>人間<span class="role-tag">ステークホルダー・PO</span></h3>
        <ul class="role-points"><li>作る方向と優先順位を<br>PO と相談して決める</li><li>計画・成果・改善案を<br>確かめて判断する</li></ul>
      </div>
    </div>
    <p class="role-dialogue">⇄<br>対話して<br>具体化する</p>
    <div class="role-box">
      <img class="role-portrait" src="assets/roles/po-distinct-v2.png" alt="AI の PO を表す、銀灰色の髪と丸眼鏡で冊子を抱えた人物">
      <div>
        <h3>PO<span class="role-tag">AI</span></h3>
        <ul class="role-points"><li>人間と優先順位を検討し、<br>仕様・Issue に整理する</li><li>成果を受け入れ条件と<br>照らして確認する</li></ul>
      </div>
    </div>
  </div>
  <div class="role-row">
    <div class="role-box">
      <img class="role-portrait" src="assets/roles/team.png" alt="AI の開発チームを表す、板に付箋を順に貼るデフォルメした人物">
      <div>
        <h3>開発チーム<span class="role-tag">AI</span></h3>
        <ul class="role-points"><li>Issue ごとの進行を管理し、<br>2つの実装案を比べる</li><li>採用後にマージ・後片付け・<br>ふりかえりを行う</li></ul>
      </div>
    </div>
    <div class="role-box">
      <div class="role-pair">
        <img class="role-portrait" src="assets/roles/developer-1.png" alt="AI の開発者を表す、ノートパソコンで作業するデフォルメした人物（1人目）">
        <img class="role-portrait" src="assets/roles/developer-2.png" alt="AI の開発者を表す、ノートパソコンで作業するデフォルメした人物（2人目）">
      </div>
      <div>
        <h3>開発者<span class="role-tag">AI</span></h3>
        <ul class="role-points"><li>同じ Issue を2人が別々に<br>計画・実装・検証する</li><li>互いの PR を<br>レビューする</li></ul>
      </div>
    </div>
  </div>
  <p class="role-note">AI は PO・開発チーム・開発者の3つの役割。独立したスクラムマスターは置いていない</p>
</div>

---

<ol class="acts" aria-label="スクラムのイベントと関連する5つの活動。このページはリファインメント"><li class="acts-label">スクラムのイベントと関連する活動</li><li class="now">リファインメント</li><li>プランニング</li><li>開発</li><li>レビュー</li><li>ふりかえり</li></ol>

## リファインメント：やりたいことを仕様と Issue にする

<div class="act-flow" role="figure" aria-label="リファインメントの流れ。人間はやりたいことを AI の PO と相談し、方向と優先順位を決める。人間と PO は対話して具体化する。PO は相談の結果を仕様に書き、今回作る範囲を Issue に切り出す。Issue はスクラムのプロダクトバックログアイテム（PBI）の代わりで、目的・範囲・受け入れ条件を書く。PO が開発可のラベルを付けると開発チームが起動し、プランニングへ進む。">
  <div class="act-box human">
    <div class="act-who"><img class="tall" src="assets/human/rena-standing.png" alt="人間を表す、計画を確認するレナ1人の立ち姿"><h3>人間</h3></div>
    <p>やりたいことを<br>PO と相談し、<br><strong class="act-judge">方向と優先順位を決める</strong></p>
  </div>
  <p class="act-link">対話して<br>具体化<span class="act-arrow">⇄</span></p>
  <div class="act-box">
    <div class="act-who"><img src="assets/roles/po-distinct-v2.png" alt="AI の PO を表す、銀灰色の髪と丸眼鏡で冊子を抱えた人物"><h3>PO<span class="role-tag">AI</span></h3></div>
    <p>相談の結果を<br>仕様（spec.md）に書き、<br>今回作る範囲を<br>Issue に切り出す</p>
  </div>
  <p class="act-link">書く<span class="act-arrow">→</span></p>
  <div class="act-box thing">
    <h3>Issue（PBI）</h3>
    <p>スクラムのプロダクト<br>バックログアイテム<br>（PBI）の代わり。<br>目的・範囲・<br>受け入れ条件を書く</p>
  </div>
</div>

<p class="act-next">PO が着手順を決めて「開発可」ラベルを付けると、開発チームが起動し、プランニングへ</p>

<p class="act-note">スクラムでは開発者もリファインメントに加わるが、<br>このプロセスでは人間と AI の PO が中心で、開発者はプランニングから加わる</p>

---

<ol class="acts" aria-label="スクラムのイベントと関連する5つの活動。このページはプランニング"><li class="acts-label">スクラムのイベントと関連する活動</li><li>リファインメント</li><li class="now">プランニング</li><li>開発</li><li>レビュー</li><li>ふりかえり</li></ol>

## プランニング：何をどう作るかを合意する

<p class="act-lead">スプリント期間は設けず、Issue ごとにスプリントの流れを踏襲する</p>

<div class="act-flow" role="figure" aria-label="プランニングの流れ。開発者は Claude Code と Codex の2人で、別々の枠で示す。2人は同じ Issue を読み、それぞれ別々に計画を立てる。2つの計画を開発チームが受け取り、確認したいことと合わせて人間に示す。人間は作りたいものと照らして確認・調整し、承認する。仕様の穴が見つかったら PO に戻して決め直す。人間が承認すると、開発者2人がその計画でそれぞれ実装・検証に進み、開発へ。">
  <div class="act-pair">
    <div class="act-box solo">
      <img src="assets/roles/developer-1.png" alt="AI の開発者を表す、ノートパソコンで作業するデフォルメした人物（1人目）">
      <div><h3>開発者<span class="role-tag">AI</span></h3><p class="act-dev">Claude Code</p><p>同じ Issue を読み、<br>自分の計画を立てる</p></div>
    </div>
    <div class="act-box solo">
      <img src="assets/roles/developer-2.png" alt="AI の開発者を表す、ノートパソコンで作業するデフォルメした人物（2人目）">
      <div><h3>開発者<span class="role-tag">AI</span></h3><p class="act-dev">Codex</p><p>同じ Issue を読み、<br>自分の計画を立てる</p></div>
    </div>
  </div>
  <p class="act-link">計画<br>（2つ）<span class="act-arrow">→</span></p>
  <div class="act-box">
    <div class="act-who"><img src="assets/roles/team.png" alt="AI の開発チームを表す、板に付箋を順に貼るデフォルメした人物"><h3>開発チーム<span class="role-tag">AI</span></h3></div>
    <p>2つの計画と<br>確認したいことを、<br>人間に示す</p>
  </div>
  <p class="act-link">計画<span class="act-arrow">→</span></p>
  <div class="act-box human">
    <div class="act-who"><img class="tall" src="assets/human/rena-standing.png" alt="人間を表す、計画を確認するレナ1人の立ち姿"><h3>人間</h3></div>
    <p>作りたいものと照らして<br><strong class="act-judge">確認・調整し、承認する</strong></p>
    <p class="act-alt">↩ 仕様の穴が見つかったら、<br>PO に戻して決め直す</p>
  </div>
</div>

<p class="act-next">人間が承認すると、開発者2人がその計画でそれぞれ実装・検証に進む（開発へ）</p>

<p class="act-note">デイリースクラムは取り入れていない</p>

---

<ol class="acts" aria-label="スクラムのイベントと関連する5つの活動。このページは開発"><li class="acts-label">スクラムのイベントと関連する活動</li><li>リファインメント</li><li>プランニング</li><li class="now">開発</li><li>レビュー</li><li>ふりかえり</li></ol>

## 開発：2人がそれぞれ作り、互いにレビューする

<p class="act-lead">人間が承認した計画で、同じ Issue から2つの案を作る</p>

<div class="act-flow" role="figure" aria-label="開発の流れ。開発者の Claude Code と Codex の2人が、人間が承認したそれぞれの計画で、別々に実装・検証し、PR を出す。2人は互いの PR をレビューする。開発チームは2つの PR とレビューの結果を受け取って比べる。開発チームが推薦する PR を選び、PO と人間とのレビューへ進む。この開発に人間の作業はなく、AI が進める。">
  <div class="act-box">
    <div class="act-who"><img src="assets/roles/developer-1.png" alt="AI の開発者を表す、ノートパソコンで作業するデフォルメした人物（1人目）"><div><h3>開発者<span class="role-tag">AI</span></h3><p class="act-dev">Claude Code</p></div></div>
    <p>自分の計画で<br>実装・検証し、<br>PR（案1）を出す</p>
  </div>
  <p class="act-link">互いの<br>PR を<br>レビュー<span class="act-arrow">⇄</span></p>
  <div class="act-box">
    <div class="act-who"><img src="assets/roles/developer-2.png" alt="AI の開発者を表す、ノートパソコンで作業するデフォルメした人物（2人目）"><div><h3>開発者<span class="role-tag">AI</span></h3><p class="act-dev">Codex</p></div></div>
    <p>自分の計画で<br>実装・検証し、<br>PR（案2）を出す</p>
  </div>
  <p class="act-link">PR（2つ）と<br>レビューの<br>結果<span class="act-arrow">→</span></p>
  <div class="act-box">
    <div class="act-who"><img src="assets/roles/team.png" alt="AI の開発チームを表す、板に付箋を順に貼るデフォルメした人物"><h3>開発チーム<span class="role-tag">AI</span></h3></div>
    <p>2つの案と<br>レビューの結果を<br>受け取り、比べる</p>
  </div>
</div>

<p class="act-next">比べた結果から、開発チームが推薦する PR を選び、POと人間とのレビューへ</p>

<p class="act-note">承認された計画に沿う開発に人間の作業はなく、AI が実装・検証・相互レビューを進める</p>

---

<ol class="acts" aria-label="スクラムのイベントと関連する5つの活動。このページはレビュー"><li class="acts-label">スクラムのイベントと関連する活動</li><li>リファインメント</li><li>プランニング</li><li>開発</li><li class="now">レビュー</li><li>ふりかえり</li></ol>

## レビュー：成果を確かめ、採用を決める

<p class="act-lead">開発者どうしのレビューを終えた成果を、AI の PO → 人間の順に確かめる</p>

<div class="act-flow" role="figure" aria-label="レビューの流れ。開発チームが2つの案とレビューの結果を比べ、推薦する PR を選ぶ。推薦を受けた AI の PO が、受け入れ条件・仕様と照らして受け入れ確認する。コードは見ない。差し戻しなら開発チームが直して再確認する。確認の結果を受けて、人間が実物を確かめ、採用するか、修正や条件の見直しが必要かを決める。条件を見直すときは PO と仕様・Issue を直す。採用が決まると、開発チームがマージと後片付けをして、ふりかえりへ進む。">
  <div class="act-box">
    <div class="act-who"><img src="assets/roles/team.png" alt="AI の開発チームを表す、板に付箋を順に貼るデフォルメした人物"><h3>開発チーム<span class="role-tag">AI</span></h3></div>
    <p>2つの案と<br>レビューの結果を比べ、<br>推薦する PR を選ぶ</p>
  </div>
  <p class="act-link">推薦<span class="act-arrow">→</span></p>
  <div class="act-box">
    <div class="act-who"><img src="assets/roles/po-distinct-v2.png" alt="AI の PO を表す、銀灰色の髪と丸眼鏡で冊子を抱えた人物"><h3>PO<span class="role-tag">AI</span></h3></div>
    <p>受け入れ条件・仕様と<br>照らして受け入れ確認<br>（コードは見ない）</p>
    <p class="act-alt">↩ 差し戻しなら、<br>開発チームが直して再確認</p>
  </div>
  <p class="act-link">確認の<br>結果<span class="act-arrow">→</span></p>
  <div class="act-box human">
    <div class="act-who"><img class="tall" src="assets/human/rena-standing.png" alt="人間を表す、計画を確認するレナ1人の立ち姿"><h3>人間</h3></div>
    <p>実物を確かめ、<br><strong class="act-judge">採用か、修正か、<br>条件の見直しかを決める</strong></p>
    <p class="act-alt">↩ 条件を見直すときは、<br>PO と仕様・Issue を直す</p>
  </div>
</div>

<p class="act-next">採用が決まると、開発チームがマージと後片付けをして、ふりかえりへ</p>

---

<ol class="acts" aria-label="スクラムのイベントと関連する5つの活動。このページはふりかえり"><li class="acts-label">スクラムのイベントと関連する活動</li><li>リファインメント</li><li>プランニング</li><li>開発</li><li>レビュー</li><li class="now">ふりかえり</li></ol>

## ふりかえり：進め方を改善し、次へつなぐ

<p class="act-lead">採用した成果を取り込んだあと、Issue 1本の進め方をふりかえる</p>

<div class="act-flow" role="figure" aria-label="ふりかえりの流れ。開発チームが検証・レビューの記録からふりかえり、根拠のある改善案を示す。人間が改善案ごとに採否を判断する。開発チームは採用した改善を手順・文書へ反映し、仕様についての発見を PO へ申し送る。申し送りを受けた AI の PO が、人間と次の仕様・Issue を検討し、リファインメントへつながる。">
  <div class="act-box">
    <div class="act-who"><img src="assets/roles/team.png" alt="AI の開発チームを表す、板に付箋を順に貼るデフォルメした人物"><h3>開発チーム<span class="role-tag">AI</span></h3></div>
    <p>検証・レビューの<br>記録からふりかえり、<br>根拠のある改善案を示す</p>
  </div>
  <p class="act-link">改善案<span class="act-arrow">→</span></p>
  <div class="act-box human">
    <div class="act-who"><img class="tall" src="assets/human/rena-standing.png" alt="人間を表す、計画を確認するレナ1人の立ち姿"><h3>人間</h3></div>
    <p>改善案ごとに<br><strong class="act-judge">採否を判断する</strong></p>
  </div>
  <p class="act-link">採用した<br>改善<span class="act-arrow">→</span></p>
  <div class="act-box">
    <div class="act-who"><img src="assets/roles/team.png" alt="AI の開発チームを表す、板に付箋を順に貼るデフォルメした人物"><h3>開発チーム<span class="role-tag">AI</span></h3></div>
    <p>採用した改善を<br>手順・文書へ反映し、<br>仕様についての発見を<br>PO へ申し送る</p>
  </div>
</div>

<p class="act-next">申し送りを受けた AI の PO が、人間と次の仕様・Issue を検討する（リファインメントへ）</p>

<p class="act-note">反映した改善の効果は、次の Issue で確かめる。採用・反映・効果の確認は別のこと</p>

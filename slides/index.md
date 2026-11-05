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

<!--
【話すこと】
agent-dev-template というテンプレートが用意している、人間と AI エージェントで進める開発プロセスを紹介します。
この開発プロセスでは、スクラムを実践できるように、役割とイベントを可能な限り取り入れています。
全体像と役割、スクラムのイベントと関連する活動への対応を押さえ、そのあと実際の Issue 1本の流れに進みます。
まず全体像を見てください。

【時間】#30 より前の構成での参考値: 約20秒（見積もり）。新構成では未見積もり・未実測。

【出典】
固定版の手順:
- README 冒頭（テンプレートの題名と概要）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md
設計者の意図:
- 「スクラムを実践できるように、役割とイベントを可能な限り取り入れている」は、このテンプレートを作った人間が説明した設計意図（本プロジェクトの docs/spec.md 2.3「再計画で合意した説明の軸」）。元テンプレートの文書には書かれていない。
-->

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

<!--
【話すこと】
画面のすべての文字や線は読み上げず、上段 → Issue → 4つの工程 → 金色 → 次への反映の順で案内します。
このページでは、誰と誰が関わり、何が渡り、どこで人間が判断するかの流れだけを見ます。それぞれの担当の詳しい違いは、次のページで説明します。
まず上段です。人間が、AI の PO と何を作るかを対話します。PO はプロダクトオーナーの略です。対話の結果を、PO が中央の GitHub Issue にします。
Issue には、今回作る範囲と完成の条件をまとめます。着手できる状態（「開発可」）になったら、下の開発の流れが始まります。
下の流れ全体は開発チームが管理します。左下の開発者は2人で、1人1つずつ案を作ります。流れは、計画、実装・検証、成果の確認、ふりかえりの順です。成果の確認では、AI の PO が先に確かめ、そのあと人間が確かめます。
この開発の流れで人間が判断するのが、金色の3か所です。計画を承認する。実物を確認して採用を決める。そして、ふりかえりで改善案を採るか決める。
最後に、結果を AI の PO に申し送り、次の仕様や Issue に反映します。作って終わりにせず、次の開発につなげます。
Issue の中身と、AI が作業する環境は、このあと実例で見ます。次のページでは、誰が何を担うかを詳しく見ます。

話し方の注意: 「人間は3回クリックするだけ」「人間の関与はこの3か所だけ」とは説明しない。上段の相談や、必要な修正の判断もある。図は通常の流れをまとめたもので、採用・マージの実行内容の承認などの詳細は後の実例で示す。

補足（聞かれたら）:
- 計画の承認を通常 AI の PO に依頼する手順はない。仕様の不足が見つかった場合は PO に戻して人間と決め直す。承認した計画と確認事項の決着は記録に残り、PO が成果の受け入れ確認のときに読む。
- PO の受け入れ確認で差し戻しとなった場合は、修正・レビューを経て再確認する。図は通常の進行だけを示す。
- 通常は「開発可」の Issue を、Orca の定期実行（起動係）が見つけて開発チームを起動する。Issue を作っただけで、未確定の課題まで実装が始まるわけではない。
- ふりかえりの全結果を PO が事前に承認するわけではない。改善の採否は人間が判断し、仕様や Issue の案を PO に申し送る。
- 元テンプレートでは、同じ Issue を2人で作る進め方（二重実装）は任意。1本だけ実装する方法もある。このプロセスの説明と後の実例は2人で作る進め方。

【時間】#30 より前の構成での参考値: 約85秒（見積もり。#27 で各役割の担当の詳しい説明を次のページへ移し、95秒から減らした）。新構成では未見積もり・未実測。

【出典】
固定版の手順:
- workflow.md の PO・開発チーム・開発者の担当を表にした節（PO は Issue を切って「開発可」を付け、推薦を受け入れ確認する。開発チームは実装・レビューをさせ、PO の確認を経て人間に報告し、ふりかえりを行う。人間が判断するのは④計画承認・⑥PO の受け入れ確認のあとの採用判断・⑧改善の採否）、ステップ4・6・8: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md
- dual-implement の計画提示と PO への受け入れ依頼: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/.claude/skills/dual-implement/SKILL.md
- accept-review（PO の受け入れ確認と判定の返信）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/.claude/skills/accept-review/SKILL.md
- finish-issue（ふりかえり、改善の採否、PO への申し送り）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/.claude/skills/finish-issue/SKILL.md
- workflow.md ステップ6「レビュー」（任意: 2つのエージェントで作らせて比べる。開発者どうしの相互レビュー）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md#L206-L227
設計者の意図と当てはめ（解釈）:
- 上の一文と、人間がステークホルダーと PO の役割を担うという説明は、本プロジェクトの docs/spec.md 2.3（人間の説明と合意）による。図の構成は本プロジェクトの見本 slides/samples/issue-4-overview（採用版 ae2f691）。
- PO の優先順位の検討と、開発者2人が同じ Issue を別々に作ることは、本プロジェクトの docs/spec.md 2.3「導入4枚への絞り込みと担当の補足」（人間の原文「POのやっていることとして、優先順位の検討を追加したい。また、開発者は同じものを別々に作っている事がわかる表現にしたいな。」）による。元テンプレートの workflow.md の担当の表では、PO は「人間と議論する、spec.md を書く、Issue を切って順番を決め「開発可」を付ける」担当（Issue の着手の順番は PO が決める）。何を作るかの優先順位を人間と検討し、人間が判断するという書き方は、本プロジェクトの説明（当てはめ）。
- 2枚目では役割の箱の説明を短くし、流れの中の位置だけを示す。各担当の詳しい説明は3枚目に置く。これは docs/spec.md 2.3「役割説明の分担と実例への中表紙」（人間の原文「２ページ目と３ページ目の各役割の箱に入っている説明がほぼ一緒なので、繰り返す意味はないかも。３枚目の役割の内容をもっと濃くするか、２枚目の役割の説明をもう少し軽くした方がいいかも。」）による。
-->

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

<!--
【話すこと】
全体図の登場人物を、誰が何を担うかで詳しく見ます。流れは前のページで見たので、ここでは担当の違いだけを見ます。
上段は人間と AI の PO です。人間はステークホルダーとして成果を確かめ、PO の役割も担います。作る方向と、何から作るか（優先順位）を PO と相談して決め、計画・成果・改善案を確かめて判断します。前のページの金色の3か所が、この判断です。
AI の PO は、優先順位を人間と検討し、仕様と Issue に整理します。優先順位を判断するのは人間で、PO が単独で決めるわけではありません。PO は、開発チームが推薦した成果を、受け入れ条件・仕様・使う人の目で確認します。コードは見ません。
下段は開発を進める AI です。開発チームは Issue 1本を最後まで進め、開発者2人の実装案を比べます。人間が採用を決めたあとは、マージ・後片付け・ふりかえりまでの完了処理を行います。
開発者は2人で、同じ Issue をそれぞれ自分の worktree で別々に計画・実装・検証し、互いの PR をレビューします。作業を分け合ったり、1つの実装を2人で書いたりするのではなく、同じ Issue から2つの案を作ります。Claude Code と Codex が1人ずつです。
AI は PO・開発チーム・開発者の3つの役割に分かれます。PO と開発チームを分けているのは、1つの端末にまとめると文脈がすぐあふれ、開発中にプロダクトの検討を進めにくくなるためです。
スクラムには進め方を支えるスクラムマスターという役割がありますが、このプロセスには独立した役割として置いていません。
では、この役割が各活動でどう関わり、何を確かめるのかを、ここから4枚の図で見ます。

補足（聞かれたら）: 設計者の認識では、開発チームは進行を主導する性格が強いため、スクラムマスターとは別の役割として「開発チーム」と名付けた。強いて言えば、開発チームの働きにスクラムマスターの要素も含まれる、という程度の関係で、開発チームとスクラムマスターを同じ役割としては扱わない。
（開発チームを自動で開く「起動係」という仕組みもありますが、3つの役割には含めない仕組みなので後のパートで扱います。）
補足（聞かれたら）: 元テンプレートでは、同じ Issue を2人で作る進め方（二重実装）は任意。1本だけ実装する方法もある。

【時間】#30 より前の構成での参考値: 約75秒（見積もり。#27 で2枚目から各担当の詳しい説明を移し、65秒から増やした）。新構成では未見積もり・未実測。

【出典】
固定版の手順:
- workflow.md の PO・開発チーム・開発者の担当を表にした節: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md
- README の PO・開発チーム・開発者の役割と受け渡しを説明した節（役割の表、PO と開発チームを分ける理由）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md
- 人間の判断（④計画承認・⑥採用判断・⑧改善の採否）と、開発チームの完了処理（人間の承認後のマージ・後片付け、ふりかえり）: workflow.md ステップ4・6〜8 https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md ・finish-issue https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/.claude/skills/finish-issue/SKILL.md
- PO の受け入れ確認（受け入れ条件・仕様・使う人の目で確認し、コードは見ない）: accept-review https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/.claude/skills/accept-review/SKILL.md
スクラムの定義:
- スクラムガイド2020年11月版 日本語訳「スクラムチーム」（スクラムマスター・プロダクトオーナー・開発者の説明責任）: https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Japanese.pdf
設計者の意図と当てはめ（解釈）:
- 人間がステークホルダーと PO の役割を担うこと、独立したスクラムマスターを置いていないこと、開発チームとスクラムマスターの関係は、本プロジェクトの docs/spec.md 2.3（人間の説明と合意）による。元テンプレートが明記した対応ではない。
- PO の「人間と優先順位を検討し」と、開発者の「同じ Issue を2人が別々に計画・実装・検証する」「互いの PR をレビューする」は、docs/spec.md 2.3「導入4枚への絞り込みと担当の補足」（人間の原文は前のページのノート）による。
- 2枚目は流れ、このページは担当の違いを説明する分担は、docs/spec.md 2.3「役割説明の分担と実例への中表紙」による。人間の「作る方向と優先順位を PO と相談して決める」「計画・成果・改善案を確かめて判断する」の2点は、Issue #27 の計画で人間が選んだ書き方（人間の関与をこの2点の3か所だけとは説明しない）。元テンプレートの担当の表では、PO は「Issue を切って順番を決め「開発可」を付ける」担当。二重実装の出典は workflow.md ステップ6「任意: 2つのエージェントで作らせて比べる」: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md#L206-L227
-->

---

<!-- _class: activity -->

## リファインメント

<p class="activity-lead">作る内容と優先順位を相談し、仕様と Issue に具体化する</p>

<div class="activity-diagram" role="figure" aria-label="人間と AI の PO がやりたいことと優先順位を相談し、PO が仕様と Issue を具体化する。Issue は PBI の作業項目を代替する。PO が開発可ラベルを付けると起動係が開発チームを起動する。リファインメントは正式イベントではない継続的な活動で、本図は人間と AI の PO を中心に示す。">
<div class="activity-flow">
<div class="activity-node human"><div class="activity-portraits"><img src="assets/human/rena-standing.png" alt="人間を表すレナ1人の立ち姿"></div><h3>人間</h3><p>やりたいことを伝える<br>優先順位を相談して決める</p></div>
<div class="activity-edge"><span>相談・具体化</span><span class="activity-arrow" aria-hidden="true">⇄</span></div>
<div class="activity-node"><div class="activity-portraits"><img src="assets/roles/po-distinct-v2.png" alt="AI の PO を表す銀灰色の髪と丸眼鏡の人物"></div><h3>PO <small>AI</small></h3><p>作るもの全体の仕様と<br>今回作る範囲を整理する</p></div>
<div class="activity-edge"><span>作成・更新</span><span class="activity-arrow" aria-hidden="true">→</span></div>
<div class="activity-node artifact"><h3>GitHub Issue<br>（PBI）</h3><p>目的・範囲・受け入れ条件<br>着手できる状態にする</p></div>
</div>
<p class="activity-route">PO が「開発可」を付ける <span class="activity-inline-arrow" aria-hidden="true">→</span> 起動係が開発チームを起動</p>
<p class="activity-note">リファインメントは正式イベントではない継続的な活動。スクラムでは PO と開発者も関わる。<br>この図は本プロセスの人間と AI の PO を中心に示す。PBI はプロダクトバックログアイテム。</p>
</div>

<!--
【話すこと】
最初は、何を作るかを具体化するリファインメントです。人間は AI の PO とやりたいことや優先順位を相談します。PO がその結果を、作るもの全体の仕様と、今回作る範囲・完成条件を持つ Issue に整理します。
PBI はプロダクトバックログアイテムの略で、プロダクトに必要な作業項目です。このプロセスでは、Issue に書かれる作業項目が PBI を代替します。仕様全体と Issue を同じものとしたり、Issue 1本をスプリントとしたりする説明ではありません。
PO が着手できる条件をそろえた Issue に「開発可」のラベルを付けると、起動係が開発チームを起動します。起動係は Orca の定期実行で、Issue を作っただけで直ちに起動するわけではありません。実際の着手条件と起動の詳細は後の実例で説明します。
スクラムガイドでは、リファインメントは作業項目を分割・詳細化する継続的な活動で、正式イベントではありません。作業の規模の評価には開発者が責任を持ち、PO が開発者を支援します。本プロセスの図は、人間と AI の PO を中心とする担当の説明です。
最初に一度だけ行うものではなく、レビューで条件を見直す場合も、仕様と Issue の具体化に戻ります。人間の関与を計画・成果・改善の3か所だけに限定しません。

【時間】未見積もり・未実測。#30 では内容を優先し、全体の時間調整は後段へ回す。

【出典】
固定版の手順:
- workflow.md ステップ1・2（人間との議論、仕様・Issue、PO の着手順と「開発可」）とステップ3（起動係による開発チーム起動）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md
- スクラムの用語を使った説明は設計者との当てはめであり、固定版がリファインメントや PBI の代替を明記しているわけではない。
スクラムの定義:
- スクラムガイド2020年11月版 日本語訳（定義とこのプロセスへの当てはめを区別する）: https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Japanese.pdf
設計者の意図と当てはめ（解釈）:
- 本プロジェクト docs/spec.md 2.3「導入の活動別図示への再構成」「全体像に示す AI の PO の関与」。固定版の手順を、スクラムのイベントと関連する活動に対応づけて説明するもの。
- #30 の計画への人間の回答: 「Q1, スプリントにはなってないので、リファインメント、プランニング、レビュー、ふりかえりの４つでいいかな。」「Q2, 開発可というラベルを付けることで、開発チームが起動されることを明記したいね。そして、Issueに書かれるのがPBIを代替していることを書いてほしい。Issue(PBI)くらいの表現でもＯＫ」「Q3, とりあえずそれでOK。見てみる。」。Q3 はデイリースクラムの注記をプランニングに置く案への回答。
-->

---

<!-- _class: activity -->

## プランニング

<p class="activity-lead">スプリント期間は設けず、Issue ごとにスプリントの流れを踏襲する</p>

<div class="activity-diagram" role="figure" aria-label="開発者2人が同じ Issue から別々に計画を立て、開発チームが計画と確認点を整理して人間に示す。人間が確認、調整、承認し、実装と検証へ進む。通常の計画に AI の PO の承認は加えない。デイリースクラムは取り入れていない。">
<div class="activity-flow">
<div class="activity-node"><div class="activity-portraits"><img src="assets/roles/developer-1.png" alt="AI の開発者1"><img src="assets/roles/developer-2.png" alt="AI の開発者2"></div><h3>開発者 <small>AI・2人</small></h3><p>同じ Issue から<br>それぞれ計画を立てる</p></div>
<div class="activity-edge"><span>計画・<br>確認点</span><span class="activity-arrow" aria-hidden="true">→</span></div>
<div class="activity-node"><div class="activity-portraits"><img src="assets/roles/team.png" alt="AI の開発チームを表す人物"></div><h3>開発チーム <small>AI</small></h3><p>各案を整理して<br>人間に計画を示す</p></div>
<div class="activity-edge"><span>計画を<br>提示</span><span class="activity-arrow" aria-hidden="true">→</span></div>
<div class="activity-node human"><div class="activity-portraits"><img src="assets/human/rena-standing.png" alt="人間を表すレナ1人の立ち姿"></div><h3>人間</h3><p>目的と照らして<br>確認・調整・承認する</p></div>
</div>
<p class="activity-route">人間が承認した計画 <span class="activity-inline-arrow" aria-hidden="true">→</span> 開発者が実装・検証へ進む</p>
<p class="activity-note">通常の計画に AI の PO の承認は加えない。仕様の不足が見つかれば PO に戻す。<br>デイリースクラムは取り入れていない。</p>
</div>

<!--
【話すこと】
プランニングでは、何をどう作り、どう確かめるかを合意します。開発者2人は同じ Issue に対して、それぞれ計画を立てます。開発チームが計画と確認点を整理し、人間に示します。
人間は作りたいもの・受け入れ条件・範囲と照らして確認し、必要な調整をして承認します。承認してから開発者が実装・検証へ進みます。通常の計画を AI の PO が承認する工程はありません。仕様の不足なら PO に戻し、仕様・Issue を決め直します。
承認された計画と確認事項の決着は記録に残し、PO は後の成果の受け入れ確認で読みます。二重実装は元テンプレートでは任意で、この説明と後の実例では2人が作る進め方を扱います。
スクラムガイドのスプリントプランニングはスプリントで行う作業の計画を作るイベントです。このプロセスではスプリント期間は設けず、Issue ごとにスプリントの流れを踏襲する設計意図として説明します。正式イベントと同じ定義だとは扱いません。デイリースクラムは取り入れていません。独立したスクラムマスターを置かない点は3枚目の説明のとおりです。

【時間】未見積もり・未実測。#30 では内容を優先し、全体の時間調整は後段へ回す。

【出典】
固定版の手順:
- workflow.md ステップ4（人間の計画確認と承認、仕様の不足は PO へ）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md
- dual-implement 手順4（開発チームが両計画を人間に示す）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/.claude/skills/dual-implement/SKILL.md
スクラムの定義:
- スクラムガイド2020年11月版 日本語訳（定義とこのプロセスへの当てはめを区別する）: https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Japanese.pdf
設計者の意図と当てはめ（解釈）:
- 本プロジェクト docs/spec.md 2.3「導入の活動別図示への再構成」「全体像に示す AI の PO の関与」。固定版の手順を、スクラムのイベントと関連する活動に対応づけて説明するもの。
- #30 の計画への人間の回答: 「Q1, スプリントにはなってないので、リファインメント、プランニング、レビュー、ふりかえりの４つでいいかな。」「Q2, 開発可というラベルを付けることで、開発チームが起動されることを明記したいね。そして、Issueに書かれるのがPBIを代替していることを書いてほしい。Issue(PBI)くらいの表現でもＯＫ」「Q3, とりあえずそれでOK。見てみる。」。Q3 はデイリースクラムの注記をプランニングに置く案への回答。
-->

---

<!-- _class: activity -->

## レビュー

<p class="activity-lead">成果を確かめ、目的に合うかと、次に必要な作業を判断する</p>

<div class="activity-diagram" role="figure" aria-label="開発チームが推薦した成果を AI の PO が仕様と受け入れ条件で確認し、その後に人間が実物を確認して採用、修正、条件見直しを判断する。条件の見直しが必要なら PO が仕様と Issue を更新し、開発者の修正、再レビュー、PO の再確認、人間の再確認へ戻る。開発者間のコードレビューとは区別する。">
<div class="activity-flow">
<div class="activity-node"><div class="activity-portraits"><img src="assets/roles/team.png" alt="AI の開発チームを表す人物"></div><h3>開発チーム <small>AI</small></h3><p>実装案を比べて<br>採用する案を推薦する</p></div>
<div class="activity-edge"><span>成果・<br>推薦</span><span class="activity-arrow" aria-hidden="true">→</span></div>
<div class="activity-node"><div class="activity-portraits"><img src="assets/roles/po-distinct-v2.png" alt="AI の PO を表す銀灰色の髪と丸眼鏡の人物"></div><h3>PO <small>AI</small></h3><p>仕様・受け入れ条件と<br>照らして受け入れ確認</p></div>
<div class="activity-edge"><span>判定・<br>確認依頼</span><span class="activity-arrow" aria-hidden="true">→</span></div>
<div class="activity-node human"><div class="activity-portraits"><img src="assets/human/rena-standing.png" alt="人間を表すレナ1人の立ち姿"></div><h3>人間</h3><p>実物が目的に合うか確認<br>採用か修正かを判断する<br>必要なら条件を見直す</p></div>
</div>
<div class="activity-revisit"><p>条件を見直すとき</p><p>PO が仕様・Issue を更新 <span class="activity-inline-arrow" aria-hidden="true">→</span> 開発者が修正 <span class="activity-inline-arrow" aria-hidden="true">→</span> 再レビュー・PO 再確認・人間の確認</p></div>
<p class="activity-note">開発者どうしのコードレビューは実装・検証の作業。ここで扱う成果確認とは区別する。</p>
</div>

<!--
【話すこと】
レビューでは、開発チームの推薦から PO の受け入れ確認を経て、人間の成果確認へ進みます。PO がまず仕様や受け入れ条件との適合を確かめ、その後に人間が実物を使い、目的に合うかを判断します。PO の受け入れは人間の採用判断そのものではありません。
問題があれば修正して再確認します。人間の判断により条件を見直す必要が出たときは、PO が仕様・Issue を更新し、開発者が修正、再レビュー・PO の受け入れ確認を経て、人間が再確認します。条件を変えた事実を残し、当初からの条件に書き換えません。後の実例では、受け入れ条件の見直しと2案の選択が実際に起きています。
開発者間のコードレビューは、ここへ来る前の実装・検証の作業です。成果を人間が確認する活動、PO の受け入れ確認、コードレビューを1つの作業にはまとめません。
スクラムガイドのスプリントレビューは成果を検査して今後の適応を決める場で、単なる採用承認や発表会ではありません。ここでは、成果と目的を照らして次の作業・条件を考える活動にその意図を取り入れたと説明します。元テンプレートの PR 採用手順と正式イベントを同じ定義にはしません。

【時間】未見積もり・未実測。#30 では内容を優先し、全体の時間調整は後段へ回す。

【出典】
固定版の手順:
- workflow.md ステップ6（レビュー・推薦・PO 受け入れ確認後の人間への報告）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md
- dual-implement の推薦・PO への確認依頼・人間への報告: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/.claude/skills/dual-implement/SKILL.md
- accept-review（受け入れ条件・仕様・使う人の観点で一次判断。コードレビューとは別）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/.claude/skills/accept-review/SKILL.md
スクラムの定義:
- スクラムガイド2020年11月版 日本語訳（定義とこのプロセスへの当てはめを区別する）: https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Japanese.pdf
設計者の意図と当てはめ（解釈）:
- 本プロジェクト docs/spec.md 2.3「導入の活動別図示への再構成」「全体像に示す AI の PO の関与」。固定版の手順を、スクラムのイベントと関連する活動に対応づけて説明するもの。
- #30 の計画への人間の回答: 「Q1, スプリントにはなってないので、リファインメント、プランニング、レビュー、ふりかえりの４つでいいかな。」「Q2, 開発可というラベルを付けることで、開発チームが起動されることを明記したいね。そして、Issueに書かれるのがPBIを代替していることを書いてほしい。Issue(PBI)くらいの表現でもＯＫ」「Q3, とりあえずそれでOK。見てみる。」。Q3 はデイリースクラムの注記をプランニングに置く案への回答。
-->

---

<!-- _class: activity -->

## ふりかえり

<p class="activity-lead">採用・マージ後に進め方を見直し、次の作業へつなぐ</p>

<div class="activity-diagram" role="figure" aria-label="採用とマージを経て開発チームが改善を提案し、人間が採否を判断する。開発チームが承認された改善を手順に反映し、結果、仕様の発見、後続課題を PO に申し送る。PO が人間と相談し次の仕様と Issue に反映する。改善の採用、反映、次の対象作業での効果確認を区別する。">
<div class="activity-flow four">
<div class="activity-node"><div class="activity-portraits"><img src="assets/roles/team.png" alt="AI の開発チームを表す人物"></div><h3>開発チーム <small>AI</small></h3><p>進め方をふりかえり<br>改善案を提案する</p></div>
<div class="activity-edge"><span>改善案</span><span class="activity-arrow" aria-hidden="true">→</span></div>
<div class="activity-node human"><div class="activity-portraits"><img src="assets/human/rena-standing.png" alt="人間を表すレナ1人の立ち姿"></div><h3>人間</h3><p>根拠と変更内容を確かめ<br>改善案の採否を決める</p></div>
<div class="activity-edge"><span>採否・<br>承認内容</span><span class="activity-arrow" aria-hidden="true">→</span></div>
<div class="activity-node"><div class="activity-portraits"><img src="assets/roles/team.png" alt="AI の開発チームを表す人物"></div><h3>開発チーム <small>AI</small></h3><p>承認された改善を<br>手順へ反映する</p></div>
<div class="activity-edge"><span>結果・発見を<br>申し送り</span><span class="activity-arrow" aria-hidden="true">→</span></div>
<div class="activity-node"><div class="activity-portraits"><img src="assets/roles/po-distinct-v2.png" alt="AI の PO を表す銀灰色の髪と丸眼鏡の人物"></div><h3>PO <small>AI</small></h3><p>人間と相談して<br>次の仕様・Issue へ</p></div>
</div>
<p class="activity-route">改善の効果は、次の対象作業で確かめる</p>
<p class="activity-note">採用したこと、手順へ反映したこと、効果を確認したことを区別して記録する。</p>
</div>

<!--
【話すこと】
採用とマージ・後片付けを経て、開発チームは検証やレビューの記録から進め方をふりかえります。続けること・改善したいこと・まだ判断できないことを分け、改善案の根拠と具体的な変更内容を人間に示します。
人間が改善案の採否を決めます。開発チームは承認された範囲を手順へ反映し、結果、仕様について分かったこと、後続課題などを PO に申し送ります。手順の改善を採用する判断と、次に何を作るかの具体化は分けて扱います。
PO は受け取った結果を人間と相談して、次の仕様・Issue・優先順位に反映します。既存の Issue を毎回再開するのではなく、次に取り組む内容へつなぐ経路です。
改善案を採用しても、手順を直しても、その時点で効果を確認できたとは限りません。次の対象作業で試す担当と確認時点を残し、効果を観測したか、問題が再発したか、対象場面がなく未確認かを記録します。
スクラムガイドのスプリントレトロスペクティブは、品質と効果を高める方法を計画するイベントです。本図は、その進め方を見直す意図と、本プロセスでの改善提案・人間の採否・反映・申し送りの分担を示します。次の中表紙からは、これらの活動が実際の Issue 1本でどう動いたかを見ます。

【時間】未見積もり・未実測。#30 では内容を優先し、全体の時間調整は後段へ回す。

【出典】
固定版の手順:
- workflow.md ステップ7・8（マージ後のふりかえり、承認した改善の反映、PO への申し送り）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md
- finish-issue（改善案の根拠・具体案、人間の採否、反映、効果確認の引き継ぎ）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/.claude/skills/finish-issue/SKILL.md
スクラムの定義:
- スクラムガイド2020年11月版 日本語訳（定義とこのプロセスへの当てはめを区別する）: https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Japanese.pdf
設計者の意図と当てはめ（解釈）:
- 本プロジェクト docs/spec.md 2.3「導入の活動別図示への再構成」「全体像に示す AI の PO の関与」。固定版の手順を、スクラムのイベントと関連する活動に対応づけて説明するもの。
- #30 の計画への人間の回答: 「Q1, スプリントにはなってないので、リファインメント、プランニング、レビュー、ふりかえりの４つでいいかな。」「Q2, 開発可というラベルを付けることで、開発チームが起動されることを明記したいね。そして、Issueに書かれるのがPBIを代替していることを書いてほしい。Issue(PBI)くらいの表現でもＯＫ」「Q3, とりあえずそれでOK。見てみる。」。Q3 はデイリースクラムの注記をプランニングに置く案への回答。
-->

---

<!-- _class: chapter -->

<p class="chapter-label">ここから実例</p>

# 実例：1つの Issue が進むまで

<p class="subtitle">別の開発プロジェクト overstrata-board の Issue #37 を、ここまでの流れに沿って追う</p>

<!--
【話すこと】
ここからは、プロセス全体の説明から実例に切り替えます。
例にするのは、別の開発プロジェクト overstrata-board の Issue #37 です。まず、この Issue で何を作りたかったか（課題）と、何を満たせば完成か（完成条件）を見てから、8つの段階を順に追います。

【時間】#30 より前の構成での参考値: 約15秒（見積もり。#27 で追加）。新構成では未見積もり・未実測。

【出典】
- 中表紙を置くことと見出し「実例：1つの Issue が進むまで」は、本プロジェクトの docs/spec.md 2.3「役割説明の分担と実例への中表紙」（人間の原文「中表紙があるといいのかな。突然話が変わるのは確かに気になるかも」、PO の提案に人間が「いいね、そうしましょう。」と回答）による。
- 題材の出典は次のページ以降のノートに記す。
-->

---

## この章の題材: overstrata-board #37

<div class="stage">
  <div class="general">
    <p class="stage-label">Issue（今回作る範囲と完成条件）の目的から（要約）</p>
    <table class="duty">
      <tr><th>何の<br>アプリか</th><td>マス目の盤面に駒を並べ、各駒が<br>動ける範囲の目安を表示するアプリ<br>（スマホ）。使うのはゲームの進行役</td></tr>
      <tr><th>今の<br>課題</th><td>用意した駒の移動力は、すべて<br>5マス固定。駒ごとに変えられない</td></tr>
      <tr><th>したい<br>こと</th><td>準備中に駒ごとの移動力を設定し、<br>その値で範囲の目安を出したい</td></tr>
    </table>
  </div>
  <div class="example">
    <h3>画面と言葉</h3>
    <div class="shots phone short">
      <div class="shot">
        <img src="assets/issue-37-board/board-c276d11.png" alt="overstrata-board の10×10の盤面。青と赤の丸い駒が置かれ、選んだ青の駒が動ける範囲の目安が薄い青で示されている">
        <div>
          <p>選んだ駒の<br>範囲の目安<br>（薄い青）</p>
          <p class="ver">#37 を作る前の画面<br>（全駒5マス）</p>
        </div>
      </div>
    </div>
    <ul>
      <li><b>移動力</b>: 1回に動けるマス数</li>
      <li><b>準備中</b>: 駒を並べ、「確定」を押すまで</li>
      <li><b>範囲の目安</b>: 選んだ駒の周りの薄い色。<br>範囲の外へも動かせる</li>
    </ul>
  </div>
</div>

<!--
【話すこと】
題材の overstrata-board #37 です。Issue は、今回作る範囲と完成の条件を書いた GitHub の Issue で、全体図の中央にあったものです。工程に入る前に、この Issue で何を作りたかったのかを、Issue の目的から抜き出して紹介します（左の表は要約です）。
overstrata-board は、マス目の盤面に駒を並べて、選んだ駒が動ける範囲の目安を表示するスマホ向けのアプリです。使うのはゲームの進行役です。ゲームの種類やルールの話はしません。
右の画面のように、駒を選ぶと周りのマスが薄い色になります。これが「範囲の目安」で、アプリは移動を禁止しません。範囲の外へも動かせます。
この時点の課題は、用意した駒の移動力（1回に動けるマス数）がすべて5マスに固定されていたことです。
したいことは、駒を並べて「確定」を押すまでの準備中に、駒ごとの移動力を設定し、その値で範囲の目安を出すことです。

【元の言葉】
board の仕様・Issue では、このアプリは TRPG「Overstrata」のプレイ中に使う戦闘ボードで、進行役は GM と書かれています。本文では、ゲームそのものの説明に入らないよう、人間の判断で「ゲームの進行役」と言い換えました。

画像: overstrata-board の c276d11（#32 を取り込んだ main、#37 の着手前）を手元で起動し、スマホ幅 375×667（2倍の解像度）で、味方2・敵2を用意して盤面に置き、味方1を選んだ状態の盤面部分を切り抜いたもの。

【時間】#30 より前の構成での参考値: 約60秒（見積もり。#27 で章の導入を前の中表紙へ移し、65秒から減らした）。新構成では未見積もり・未実測。

【出典】
一般的な手順（Issue の説明）:
- workflow.md 冒頭（Issue は spec.md から今回作る部分だけを取り出したもの）・ステップ2「Issueを切り出す」（Issue に書くこと: 目的、受け入れ条件、スコープ外）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md
overstrata-board の実例（本文は以下からの要約）:
- Issue #37 の「目的」（GM が準備中に移動力を設定する、全駒5マス固定から駒ごとの値を移動範囲の目安へ反映する）・「前提・着手条件」・「#32からの引き継ぎ」・受け入れ条件1・2・6・8（範囲の外へも動かせ、移動力で移動を禁止しない）: https://github.com/dyamada-jaki/overstrata-board/issues/37
- 条件変更の直前の仕様 d6b5d01 の1章（TRPG のプレイ中に使う戦闘ボード、ルールを強制せず範囲を見せるだけ）: https://github.com/dyamada-jaki/overstrata-board/blob/d6b5d015f79b8324d1a776882c7e1089e2ff1ecc/docs/spec.md#L11-L25
- 同じ版の2.2（#32 は全駒5マス固定で範囲は目安、#37 で GM が準備中に0〜9・初期値5で設定）: https://github.com/dyamada-jaki/overstrata-board/blob/d6b5d015f79b8324d1a776882c7e1089e2ff1ecc/docs/spec.md#L115-L117
- 画像の版（#37 着手前の main、PR #38）: https://github.com/dyamada-jaki/overstrata-board/tree/c276d11e5da42c7664ffa41693d5c9cb762ac7d0
-->

---

## 何を満たせば完成か（受け入れ条件の抜粋）

<div class="stage">
  <div class="general">
    <p class="stage-label">board #37 の受け入れ条件（10項目）から（要約）</p>
    <table class="duty">
      <tr><th>設定の<br>範囲</th><td>準備中に選んだ駒を、0〜9マス<br>（初期値5）で設定する</td></tr>
      <tr><th>操作</th><td>数値は表示だけ。<br>「−」「＋」で1ずつ変える</td></tr>
      <tr><th>反映</th><td>対象の駒と、範囲の目安へ<br>すぐ反映する</td></tr>
      <tr><th>置き場所<br>（当初）</th><td>設定欄は<b>対象の駒の近く</b>に出す。<br>どの駒か分かり、対象だけ変わる</td></tr>
    </table>
  </div>
  <div class="example">
    <h3>この条件への2つの解決案</h3>
    <ul>
      <li>開発者2人が、同じ課題と条件から<br>別々に作った</li>
      <li>分かれたのは設定欄の置き場所:<br><b>駒の近く案</b>と<b>操作パネル案</b></li>
      <li>置き場所の条件は、2案を比べた後に<br>人間の判断で変わる（⑥で説明）</li>
    </ul>
    <p class="meta">置き場所は、条件を変更する前の版</p>
  </div>
</div>

<!--
【話すこと】
では、何ができれば完成なのか。Issue の受け入れ条件は10項目ありますが、代表的なものだけ抜き出しました。
準備中に選んだ駒の移動力を0〜9マス、初期値5マスで設定できること。数値は表示だけで、「−」「＋」で1ずつ変えること。変えた値が、その駒と範囲の目安にすぐ反映されること。
そして、最後の行が2案を比べる基準になります。当初の条件では、設定欄は「対象の駒の近く」に出し、どの駒の値を変えているか分かり、変更はその駒だけに反映する、となっていました。
このあと、開発者2人が同じ課題と条件から別々に作り、設定欄の置き場所が「駒の近く案」と「操作パネル案」に分かれます。
なお、現在の Issue のこの条件は「操作パネルに1つ表示する」に変わっています。これは2案を触り比べた後の人間の判断によるもので、最初からの条件ではありません。経緯は⑥のページで説明します。

【抜き出した条件】
- 設定の範囲: 受け入れ条件1（0〜9マスの整数、初期値5マス）・2（未配置・配置済みとも「確定」まで変更できる）
- 操作: 受け入れ条件4（数値は「−」「＋」の間に表示し、直接入力・削除はできない）・5（1ずつ増減、0の「−」と9の「＋」は押せない）
- 反映: 受け入れ条件6（その駒の移動力へすぐ反映）・7（移動範囲の目安にも反映）
- 置き場所（当初）: 変更前の受け入れ条件3「設定欄は対象の駒の近くに表示し、どの駒の値を変更しているか分かる。変更は対象の駒だけに反映する。」
- 抜き出していない条件: 8（範囲外へも移動できる。前のページで紹介）・9（確定後は値を引き継ぎ、変更操作はない）・10（やり直しで値も消える）

【時間】#30 より前の構成での参考値: 約60秒（見積もり）。新構成では未見積もり・未実測。

【出典】
overstrata-board の実例:
- Issue #37 の受け入れ条件（現在の本文。条件3は人間の判断の後に変更された版）: https://github.com/dyamada-jaki/overstrata-board/issues/37
- 変更前の条件3は、Issue の編集履歴の 2026-10-23 08:30:40 UTC の版（21:41 JST の条件変更の直前）で確認した。固定版では、条件変更の直前の仕様 d6b5d01 の2.2（設定欄は対象の駒の近くに表示し、どの駒か分かり、対象だけに反映）: https://github.com/dyamada-jaki/overstrata-board/blob/d6b5d015f79b8324d1a776882c7e1089e2ff1ecc/docs/spec.md#L127
- 条件変更のコメント（「従来の『対象の駒の近くに表示する』という条件を置き換えました」「受け入れ条件1・2・4〜10は変更していません」）: https://github.com/dyamada-jaki/overstrata-board/issues/37#issuecomment-6365106903
-->

---

<ol class="steps">
  <li class="now">①議論</li>
  <li>②切り出し</li>
  <li>③着手</li>
  <li class="judge">④計画承認</li>
  <li>⑤実装</li>
  <li class="judge">⑥レビュー・採用</li>
  <li>⑦マージ</li>
  <li class="judge">⑧ふりかえり</li>
</ol>

## ① 人間と PO が、作りたいものを仕様にする

<div class="stage">
  <div class="general">
    <p class="stage-label">このプロセスでは</p>
    <table class="duty">
      <tr><th>担当</th><td><div class="actors">
        <div class="actor"><img class="actor-figure" src="assets/roles/po.png" alt="AI エージェントの PO を表す、開いた冊子を読むデフォルメした人物"><span class="actor-name">PO</span></div>
        <div class="actor"><img class="people-small" src="assets/issue-5-codex/human-decisions.png" alt="人間を表す、資料を見比べるデフォルメしたレナとヨナ"><span class="actor-name">人間</span></div>
      </div></td></tr>
      <tr><th>渡すもの</th><td>spec.md：作るもの全体の仕様<br>（何を・なぜ・どこまで作るか）</td></tr>
      <tr><th>人間が<br>決めること</th><td>作りたいものを PO と議論する<br>（3つの判断の前の段階）</td></tr>
    </table>
  </div>
  <div class="example">
    <h3>実例: overstrata-board #37</h3>
    <ul>
      <li>前の Issue #32 から、移動力の<br>設定を別の Issue（#37）に分けると、<br>人間と PO が合意した</li>
      <li>PO が spec.md に記録: 0〜9マス・<br>初期値5・設定欄は駒の近く</li>
    </ul>
    <p class="meta">spec.md 2.2・6章、#37 レポート 2章</p>
  </div>
</div>

<!--
【話すこと】
ここから、題材の Issue #37 が8つの段階をどう進んだかを見ていきます。
上部の段階の行は元テンプレートの8ステップで、金色の④⑥⑧が人間の判断です。各ページの左が一般的な手順、右が実例です。
① 議論では、PO が人間と議論して、作るもの全体の仕様 spec.md を書きます。何を・なぜ・どこまで作るかを書き、まだ作らない部分も書いておけます。会話は消えますが、spec.md は残ります。
ここで人間がするのは議論で、3つの判断はまだ来ません。

【実例】
前提のページで紹介した課題（全駒5マス固定）と、したいこと（準備中に駒ごとに設定）は、この段階で人間（利用者）と PO が議論し、spec.md に書いたものです。
前の Issue #32（駒の準備・配置）から移動力の設定を #37 に分けることを決め、PO が spec.md に記録しました。0〜9マス・初期値5マス、設定欄は「駒の近く」に出す、という合意もこのとき引き継いでいます。

【時間】#30 より前の構成での参考値: 約40秒（見積もり。#24 で Spec の短い説明を足し、35秒から増やした）。新構成では未見積もり・未実測。

【出典】
一般的な手順:
- workflow.md 冒頭（spec.md は作るもの全体の仕様）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md
- README「Issue 1本の流れ」の流れ図（①〜⑧、六角形が人間の判断）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md#L49-L71
- workflow.md ステップ1「議論する」: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md#L132-L143
overstrata-board の実例:
- Issue #37 レポート 2章（全駒5マス固定から、準備中に駒ごとに0〜9マスへ）: https://github.com/dyamada-jaki/overstrata-board/blob/346606809993990ddf3cdb0244b0db9a59e42a7d/docs/issue-reports/issue-37.md
- spec.md 2.2（#32 は全駒5マス固定、駒ごとの設定は #37）と6章の決定の記録（2026-10-23、#32 から #37 へ分離、駒の近くの入力欄などの合意を引き継ぐ）: https://github.com/dyamada-jaki/overstrata-board/blob/346606809993990ddf3cdb0244b0db9a59e42a7d/docs/spec.md#L117-L119 ・ https://github.com/dyamada-jaki/overstrata-board/blob/346606809993990ddf3cdb0244b0db9a59e42a7d/docs/spec.md#L532
-->

---

<ol class="steps">
  <li>①議論</li>
  <li class="now">②切り出し</li>
  <li class="now">③着手</li>
  <li class="judge">④計画承認</li>
  <li>⑤実装</li>
  <li class="judge">⑥レビュー・採用</li>
  <li>⑦マージ</li>
  <li class="judge">⑧ふりかえり</li>
</ol>

## ②③ 今回作る範囲を Issue にし、着手する

<div class="stage">
  <div class="general">
    <p class="stage-label">このプロセスでは</p>
    <table class="duty tight">
      <tr><th>担当</th><td><div class="actors">
        <div class="actor"><img class="actor-figure" src="assets/roles/po.png" alt="AI エージェントの PO を表す、開いた冊子を読むデフォルメした人物"><span class="actor-name">PO</span></div>
        <span class="arrow">→</span>
        <div class="actor-box">GitHub<span>Issue と「開発可」</span></div>
        <span class="arrow">→</span>
        <div class="actor-box">Orca の起動係<span>定期実行で起動</span></div>
        <span class="arrow">→</span>
        <div class="actor"><img class="actor-figure" src="assets/roles/team.png" alt="AI エージェントの開発チームを表す、板に付箋を順に貼るデフォルメした人物"><span class="actor-name">開発チーム</span></div>
      </div></td></tr>
      <tr><th>渡すもの</th><td>Issue（目的・受け入れ条件・<br>スコープ外）と「開発可」</td></tr>
      <tr><th>人間が<br>決めること</th><td>この工程で追加の判断はなし<span class="sub">人間と相談して決めた優先順位を、<br>PO が Issue の着手順に具体化する</span></td></tr>
    </table>
    <p class="term">Orca: AI の端末と worktree を扱う作業環境</p>
  </div>
  <div class="example">
    <h3>実例: overstrata-board #37</h3>
    <ul>
      <li>範囲: 前提で示した条件を含む<br>受け入れ条件10項目</li>
      <li>スコープ外: 戦闘途中の駒の増減、<br>倒れた駒の表示（別の Issue）</li>
      <li>#32 の完了後に「開発可」。<br>Orca の起動係が開発チームを<br>起動し、19:45 に着手した</li>
    </ul>
    <p class="meta">#37 レポート 2・3章</p>
  </div>
</div>

<!--
【話すこと】
② 切り出しでは、PO が spec.md から今すぐ作る部分を Issue にします。目的・受け入れ条件・スコープ外を書き、PR 1本で終わる大きさにします。
PO は GitHub に Issue を書き、着手してよい Issue に「開発可」のラベルを付けます。担当の行の真ん中の GitHub の枠がこれです。
すると ③ 着手です。Orca は、AI エージェントの端末と worktree（作業用のフォルダ）をまとめて扱うアプリで、開発はその上で進みます。Orca の定期実行の「起動係」が、「開発可」の Issue があり、動いている開発チームがいないときだけ、開発チームを起動します。担当の行の「Orca の起動係」の枠がこれです。GitHub と起動係は3つの役割に含めない仕組みなので、人物の絵ではなく文字の枠で示しています。
役割分担のページで、何から作るか（優先順位）は人間が PO と相談して決める、と話しました。この段階では、人間と相談して決めた優先順位を、AI の PO が Issue の着手の順番に具体化し、「開発可」を付けます。
表の「人間が決めること」を「この工程で追加の判断はなし」としたのは、着手のこの工程で人間が新しく判断することはない、という意味です。優先順位の検討に人間が関わらない、という意味ではありません。

【実例】
#37 の範囲は、前提のページで抜き出した条件を含む、受け入れ条件10項目です。
戦闘の途中で駒を増やしたり減らしたりする機能（#33）や、倒れた駒の表示（#34）はスコープ外として別の Issue に分けています。
前提の #32 が取り込まれた後、PO が GitHub の #37 に「開発可」を付けました。Orca の起動係が「着手中」にして開発チームを起動し、2026-10-23 の 19:45 に着手しています。

【時間】#30 より前の構成での参考値: 約55秒（見積もり。#24 で Orca の短い説明と、優先順位と着手順の関係を足し、40秒から増やした）。新構成では未見積もり・未実測。

【出典】
一般的な手順:
- README 冒頭（Orca は複数の AI エージェントの端末と worktree をまとめて扱うアプリ）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md
- workflow.md ステップ2「Issueを切り出す」（Issue に書くこと、着手の合図）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md#L145-L169
- workflow.md ステップ3「着手する」: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md#L171-L175
- README の役割の表（起動係は「開発可」の Issue があり、動いている開発チームがいないときだけ開発チームを開く）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md#L40-L45
優先順位と着手順の関係（元テンプレートの固定版にある PO の担当）:
- workflow.md の担当の表（PO は「人間と議論する、spec.md を書く、Issue を切って順番を決め「開発可」を付ける」）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md#L16
- workflow.md ステップ2 の着手の合図（「順番を決めるのは PO で、起動係は番号の小さいものから拾う」）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md#L161
- 元テンプレートは、Issue の着手の順番を PO が決めるとだけ書いている。優先順位を人間と相談して決めることは書いていない。
優先順位と着手順の関係（この発表で合意した人間の関与。元テンプレートが明記した手順ではない）:
- 2枚目の人間の枠の「方向・優先順位・採用を判断」と、3枚目の人間の「作る方向と優先順位を PO と相談して決める」・PO の「人間と優先順位を検討し」は、本プロジェクトの docs/spec.md 2.3「導入4枚への絞り込みと担当の補足」による（人間の原文は2枚目のノートの出典）。
- 「人間と相談して決めた優先順位を、AI の PO が Issue の着手順に具体化する」は、PR #25 の初回の受け入れ一次判断で PO が出した提案に、人間が原文「補足して。」と回答して決めた。docs/spec.md 2.3「PR #25 の受け入れ確認で合意した補足」: https://github.com/dyamada-jaki/agent-dev-slide/blob/d2f79415c2fd33b0bae8977bdeabdf23669c427c/docs/spec.md#L300 ・初回の受け入れ一次判断: https://github.com/dyamada-jaki/agent-dev-slide/pull/25#issuecomment-6631456304
- 新しい承認の工程は加えていない。着手の合図（「開発可」）と起動係の動きは元テンプレートのまま。
overstrata-board の実例:
- Issue #37 レポート 2章（目的と範囲・前提・スコープ外）・3章（19:45 の着手、起動係による「着手中」）: https://github.com/dyamada-jaki/overstrata-board/blob/346606809993990ddf3cdb0244b0db9a59e42a7d/docs/issue-reports/issue-37.md
- Issue #37: https://github.com/dyamada-jaki/overstrata-board/issues/37
-->

---

<ol class="steps">
  <li>①議論</li>
  <li>②切り出し</li>
  <li>③着手</li>
  <li class="judge now">④計画承認</li>
  <li>⑤実装</li>
  <li class="judge">⑥レビュー・採用</li>
  <li>⑦マージ</li>
  <li class="judge">⑧ふりかえり</li>
</ol>

## ④ 開発者が計画を出し、人間が承認する

<div class="stage">
  <div class="general">
    <p class="stage-label">このプロセスでは</p>
    <table class="duty">
      <tr><th>担当</th><td><div class="actors">
        <div class="actor"><img class="actor-figure" src="assets/roles/developer-1.png" alt="AI エージェントの開発者を表す、ノートパソコンで作業するデフォルメした人物（1人目）"><img class="actor-figure" src="assets/roles/developer-2.png" alt="AI エージェントの開発者を表す、ノートパソコンで作業するデフォルメした人物（2人目）"><span class="actor-name">開発者</span></div>
        <div class="actor"><img class="actor-figure" src="assets/roles/team.png" alt="AI エージェントの開発チームを表す、板に付箋を順に貼るデフォルメした人物"><span class="actor-name">開発チーム</span></div>
      </div></td></tr>
      <tr><th>渡すもの</th><td>計画（受け入れ条件ごとの<br>作り方・確かめ方・確認したいこと）</td></tr>
      <tr class="decide"><th>人間が<br>決めること</th><td><div class="actors"><img class="people-small" src="assets/issue-5-codex/human-decisions.png" alt="人間の判断を表す、資料を見比べるデフォルメしたレナとヨナ"><span>計画を承認する</span></div></td></tr>
    </table>
  </div>
  <div class="example">
    <h3>実例: overstrata-board #37</h3>
    <ul>
      <li>2人の計画で、設定欄の置き場所が<br>分かれた: <b>駒の近く案</b>と<br><b>操作パネル案</b></li>
      <li>人間は「それぞれの案のまま作り、<br>画面で見比べる」と承認</li>
      <li>操作パネル案は「駒の近く」を<br>満たさないおそれ → 距離を測らせる</li>
    </ul>
    <p class="meta">#37 レポート 3章</p>
  </div>
</div>

<!--
【話すこと】
④ 計画承認は、人間の1つ目の判断です。開発者はすぐにはコードを書かず、受け入れ条件ごとにどう作り、どう確かめるかの計画を出します。開発チームがそれを人間に見せます。
人間は Issue と見比べて、受け入れ条件を全部カバーしているか、スコープ外のことをしようとしていないかを確かめます。仕様に穴が見つかったら、実装を止めて PO に戻します。
Issue の曖昧さは計画に表れるので、コードになる前に見つけるのがいちばん安い、という考え方です。

【実例】
#37 では、同じ Issue を開発者2人が別々に作る進め方をとりました。2人の計画で、移動力の設定欄をどこに出すかが分かれました。
- 駒の近く案（Codex の計画）: 未配置の一覧では選んだ駒のすぐ下、盤面に置いた駒では選んだマスの上か下に重ねて出す
- 操作パネル案（Claude Code の計画）: 盤面の下の操作パネルに1つだけ出す
仕様では設定欄の細かい位置を「作った画面を見ながら調整する」としていたので、人間は 20:01 に「それぞれの案のまま作り、画面で見比べる」と承認しました。
このとき、操作パネル案は「対象の駒の近くに表示する」という受け入れ条件に届かないおそれがありました。そこで、選んだ駒と欄の距離を実際に測って PR に書くよう指示しています。駒の近く案には、重ねた欄で隠れるマスの扱いを書くよう指示しました。
ここで「どちらが優れているか」は決めていません。決めたのは、両方を作って比べる、ということです。

【時間】#30 より前の構成での参考値: 約50秒（見積もり）。新構成では未見積もり・未実測。

【出典】
一般的な手順:
- workflow.md ステップ4「計画を承認する」（人間が確かめる点と分岐）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md#L177-L195
- README「Issue 1本の流れ」（開発者2人がそれぞれ計画を立て、人間が④で承認）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md#L49-L71
overstrata-board の実例:
- Issue #37 レポート 3章「計画と承認」（20:01 の人間の承認、設定欄の位置、各案への追加指示）: https://github.com/dyamada-jaki/overstrata-board/blob/346606809993990ddf3cdb0244b0db9a59e42a7d/docs/issue-reports/issue-37.md
-->

---

<ol class="steps">
  <li>①議論</li>
  <li>②切り出し</li>
  <li>③着手</li>
  <li class="judge">④計画承認</li>
  <li class="now">⑤実装</li>
  <li class="judge now">⑥レビュー・採用</li>
  <li>⑦マージ</li>
  <li class="judge">⑧ふりかえり</li>
</ol>

## ⑤⑥ 開発者が実装・検証し、互いにレビューする

<div class="stage">
  <div class="general">
    <p class="stage-label">このプロセスでは</p>
    <table class="duty">
      <tr><th>担当</th><td><div class="actors">
        <div class="actor"><img class="actor-figure" src="assets/roles/developer-1.png" alt="AI エージェントの開発者を表す、ノートパソコンで作業するデフォルメした人物（1人目）"><img class="actor-figure" src="assets/roles/developer-2.png" alt="AI エージェントの開発者を表す、ノートパソコンで作業するデフォルメした人物（2人目）"><span class="actor-name">開発者2人<br>（それぞれの<br>worktree）</span></div>
      </div></td></tr>
      <tr><th>渡すもの</th><td>PR（何をしたか・<br>確認結果）と、相手の<br>PR へのレビュー</td></tr>
      <tr><th>人間が<br>決めること</th><td>なし（この間は待つ）</td></tr>
    </table>
  </div>
  <div class="example wide">
    <h3>実例: 触る前 → 味方2を選んだ直後</h3>
    <div class="shots phone pair">
      <div class="shot">
        <div>
          <p class="name">駒の近く案</p>
          <p class="ver">PR #41</p>
          <p>欄が一覧の中に<br>入り、並びが<br>組み替わる</p>
        </div>
        <img src="assets/issue-37-board/pr41-526f8f8-before.png" alt="駒の近く案の、駒を選ぶ前の画面。未配置の駒が味方4つ・敵4つの2行に並んでいる">
        <span class="arrow">→</span>
        <img src="assets/issue-37-board/pr41-526f8f8.png" alt="駒の近く案の、味方2を選んだ直後の画面。一覧の中に移動力の設定欄が入り、味方4が次の行へ押し出されている">
      </div>
      <div class="shot">
        <div>
          <p class="name">操作パネル案</p>
          <p class="ver">PR #40</p>
          <p>一覧の上に欄が<br>1つ出る。並びは<br>2行のまま</p>
        </div>
        <img src="assets/issue-37-board/pr40-b1902c4-before.png" alt="操作パネル案の、駒を選ぶ前の画面。未配置の駒が味方4つ・敵4つの2行に並んでいる">
        <span class="arrow">→</span>
        <img src="assets/issue-37-board/pr40-b1902c4.png" alt="操作パネル案の、味方2を選んだ直後の画面。一覧の上に移動力の設定欄が1つ出て、未配置の駒の並びは2行のまま変わらない">
      </div>
    </div>
  </div>
</div>

<!--
【話すこと】
⑤ 実装では、開発者が自分の worktree で計画どおりに作り、確認コマンドを通して PR を出します。GitHub Actions でも同じ確認が回ります。この間、人間は待っています。
⑥ レビューでは、開発者2人が互いの PR を、受け入れ条件・仕様・回帰の観点でレビューします。
今回は同じ Issue を2人が別々に作る「二重実装」で進めました。元テンプレートでは任意の進め方で、1本だけ実装する方法もあります。
右は、2つの PR で同じ操作をした前後の画面です。上の行が駒の近く案、下の行が操作パネル案で、それぞれ左が駒を触る前、右が未配置の一覧で「味方2」を選んだ直後です。触る前は、どちらも味方4つ・敵4つが2行に並んでいます。画像の中の文字は読まなくて大丈夫です。
駒の近く案では、選ぶと設定欄が一覧の中に入るので、駒の並びが組み替わり、味方4が次の行へ押し出されます。操作パネル案では、欄は一覧の上に1つ出て、一覧は全体が下へずれますが、4つずつ2行の並びは変わりません。その代わり、盤面に置いた駒からは離れます。

【実例】
- PR #41（駒の近く案、Codex）は head 526f8f8、PR #40（操作パネル案、Claude Code）は head b1902c4。どちらも確認コマンド・E2E・CI が成功した
- 相互レビュー（20:49〜21:03）の結果、このときの受け入れ条件3（更新前の「対象の駒の近くに表示する」）について:
  - PR #40 は満たさない（必須の指摘）。スマホ幅 375×667 で、盤面の上の方の駒と欄が約488px離れ、同時に見えない
  - PR #41 は満たす。ただし、一覧の並びが組み替わって誤タップにつながる点と、盤面では欄が周りの18マスを覆う点が、推奨の指摘になった
- この画像は比べた時点の版で、採用後の版ではありません。製品名は担当を示すだけで、モデルの優劣を比べたものではありません

画像: overstrata-board の各版（PR #41 は 526f8f8、PR #40 は b1902c4）を手元で起動し、スマホ幅 375×667（2倍の解像度）で撮影。各案2枚で、「触る前」は味方4・敵4を用意した直後（まだ駒を選んでいない）、「選んだ直後」はそこから未配置の味方2を選んだ直後。切り抜く範囲は、選んだ直後の設定欄と未配置一覧を囲む範囲（横351 CSS px、縦は PR #41 が305・PR #40 が260）。駒の近く案の触る前も同じ範囲で切り抜いた。操作パネル案の触る前は、同じ範囲だと一覧が上にある分、上端で「未配置：8体」の見出しが半分切れるため、同じ大きさ（351×260）のまま、見出しの上に少し余白を取る位置（全ページ画像の y654）で切り抜き直した。下に確定ボタンと説明文が写る。切り抜いただけで、注記や色付けはしていない。触る前の2枚は Issue #17 の実機確認（人間の「駒を触る前の画像もあるとわかりやすい」）を受けて追加した。

【時間】#30 より前の構成での参考値: 約75秒（見積もり。触る前の画像の説明で60秒から増やした）。新構成では未見積もり・未実測。

【出典】
一般的な手順:
- workflow.md ステップ5「実装」: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md#L197-L204
- workflow.md ステップ6「レビュー」（任意: 2つのエージェントで作らせて比べる、相互レビューの担当）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md#L206-L227
overstrata-board の実例:
- Issue #37 レポート 4章（実装の比較）・5章（受け入れ条件と検証、更新前の条件3）・6章（レビューと指摘の裏付け）: https://github.com/dyamada-jaki/overstrata-board/blob/346606809993990ddf3cdb0244b0db9a59e42a7d/docs/issue-reports/issue-37.md
- PR #41 の比較した版（526f8f8）: https://github.com/dyamada-jaki/overstrata-board/tree/526f8f8340fe64b065ee8d618fc8852c237d8c64
- PR #40 の比較した版（b1902c4）: https://github.com/dyamada-jaki/overstrata-board/tree/b1902c451de34eb2725c9da48dc3435bd7cbfa64
- 相互レビュー（PR #40）: https://github.com/dyamada-jaki/overstrata-board/pull/40#issuecomment-6364370949 、（PR #41）: https://github.com/dyamada-jaki/overstrata-board/pull/41#issuecomment-6364435883
-->

---

<ol class="steps">
  <li>①議論</li>
  <li>②切り出し</li>
  <li>③着手</li>
  <li class="judge">④計画承認</li>
  <li>⑤実装</li>
  <li class="judge now">⑥レビュー・採用</li>
  <li>⑦マージ</li>
  <li class="judge">⑧ふりかえり</li>
</ol>

## ⑥ 推薦・PO の受け入れ確認と、人間の採用判断

<div class="stage">
  <div class="general">
    <p class="stage-label">実例: #37 の往復（担当とすること）</p>
    <table class="duty loop">
      <tr><th>開発チーム</th><td><b>推薦</b>: PR #41（駒の近く案）</td></tr>
      <tr><th>PO</th><td><b>受け入れ確認</b>: #41 を受け入れ</td></tr>
      <tr class="decide"><th>人間</th><td><b>採用判断</b>: 触り比べて #40 を選ぶ</td></tr>
      <tr><th>PO・開発者</th><td>置き場所の条件を更新／並行して README を修正</td></tr>
      <tr><th>開発者・<br>開発チーム</th><td>更新後の条件で再レビュー、推薦を #40 へ</td></tr>
      <tr><th>PO</th><td><b>受け入れ</b>（#40）→ 人間の承認後に⑦へ</td></tr>
    </table>
  </div>
  <div class="example">
    <h3>置き場所の条件の変更</h3>
    <ul>
      <li>変更前: 設定欄は、<br>対象の駒の近くに表示する</li>
      <li>変更後: 操作パネルに1つ表示し、<br>駒名・陣営色の丸・番号で<br>対象を示す</li>
      <li>画面は作り直していない。<br>#40 の追加の修正は README の1行</li>
    </ul>
    <p class="meta">#37 レポート 6・7章</p>
  </div>
</div>

<!--
【話すこと】
⑥ の後半は、3つの確認を分けて進みます。開発チームの推薦、PO の受け入れ確認、そして人間の採用判断です。
推薦は、開発チームがレビューを踏まえて「どちらを採るか」を推すことです。PO はコードを見ず、受け入れ条件・仕様・使う人の目で確かめます。採用する PR を決めるのは、2つ目の判断として人間です。
#37 は一直線には進みませんでした。開発チームは、当時の受け入れ条件をすべて満たす #41 を推薦し、PO も #41 を受け入れました。ところが人間がスマホで両方を触り比べ、#40 を選びました。
選ばれた #40 は「駒の近く」という条件を満たしていません。そこで、作りを直すのではなく、PO が受け入れ条件3を、目的に照らして「操作パネルに1つ出し、駒名・陣営色・番号で対象を示す」に更新しました。開発者はそれと並行して、レビューで指摘されていた README の1行を直しました。画面そのものは作り直していません。
更新後の条件で再レビューし、推薦を #40 に変え、PO がもう一度確認しています。PO の受け入れは採用の決定ではなく、最後に採用を決めるのは人間です。

【実例】
時刻は #37 レポートの記録（JST）に従う。
- 21:06 まで: 開発チームが #41 を推薦（当時の条件1〜10を満たし、必須の指摘なし）。21:10: PO が #41 を受け入れ（1回目）。PO は、一覧の並びが組み替わる点などを、人間に実機で確かめてほしいこととして渡した
- 〜21:35: 人間がスマホ実機で両 PR を触り比べた。原文:「駒の近くには無いですが、逆に #41 は駒の近くにあるために、駒の位置がズレるのが UI 的に使いにくく感じました。私は今の #40 の UI の方が使いやすいです」
- 21:36〜21:52（並行）: PO が Issue #37 の受け入れ条件3と spec.md を更新（3bac3e9）。開発者が README の「移動力は全駒5マス」を直した（629709a）。#40 の b1902c4 から 629709a への差分は README の1行だけ
- 21:52〜21:56: 相互レビュー担当が 629709a を更新後の条件で再確認。21:56 に開発チームが推薦を #40 に変更
- 21:57〜22:02: PO が #40（629709a）を受け入れ（#40 には初回）
これは PO の差し戻しではなく（差し戻しは0回）、人間が使い勝手を見て判断した変更です。どちらのモデルが優れているかの判断でもありません。

【時間】#30 より前の構成での参考値: 約75秒（見積もり）。新構成では未見積もり・未実測。

【出典】
一般的な手順:
- README「Issue 1本の流れ」（相互レビュー → 開発チームが推す PR を選ぶ → PO の受け入れ確認 → ⑥ 採用する PR を決める）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md#L49-L71
- workflow.md ステップ6（推薦後に PO が受け入れの一次判断をする）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md#L206-L227
- workflow.md ステップ4の分岐（仕様の穴は PO に戻し、spec.md・Issue を直してから進める）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md#L177-L195
overstrata-board の実例:
- Issue #37 レポート 6章（最初の推薦と PO の受け入れ確認）・7章（人間の判断、条件更新、README の修正、再確認、推薦の変更、PO の受け入れ2回目）・9章（README の修正と仕様更新は並行、21:36→21:52）: https://github.com/dyamada-jaki/overstrata-board/blob/346606809993990ddf3cdb0244b0db9a59e42a7d/docs/issue-reports/issue-37.md
- 最初の PO の受け入れ（#41）: https://github.com/dyamada-jaki/overstrata-board/pull/41#issuecomment-6364548520
- 人間の判断と条件3の変更前後（Issue のコメント）: https://github.com/dyamada-jaki/overstrata-board/issues/37#issuecomment-6365106903
- 仕様の更新（spec.md 2.2 の変更前後）: https://github.com/dyamada-jaki/overstrata-board/commit/3bac3e9ed1b884765a3519157b634c1bb128e2e3
- 採用版 629709a（b1902c4 との差分は README）: https://github.com/dyamada-jaki/overstrata-board/tree/629709a1f9825a8974f8e4d20cf6208eb6f5c463
- 再レビュー: https://github.com/dyamada-jaki/overstrata-board/pull/40#issuecomment-6365375650 、推薦の変更: https://github.com/dyamada-jaki/overstrata-board/pull/40#issuecomment-6365395577 、変更後の PO の受け入れ: https://github.com/dyamada-jaki/overstrata-board/pull/40#issuecomment-6365485501
- 人間の実機確認の記録（開発チームの代筆）: https://github.com/dyamada-jaki/overstrata-board/pull/40#issuecomment-6365962809
-->

---

<ol class="steps">
  <li>①議論</li>
  <li>②切り出し</li>
  <li>③着手</li>
  <li class="judge">④計画承認</li>
  <li>⑤実装</li>
  <li class="judge">⑥レビュー・採用</li>
  <li class="now">⑦マージ</li>
  <li class="judge now">⑧ふりかえり</li>
</ol>

## ⑦⑧ 採用した成果を取り込み、改善を次へ渡す

<div class="stage">
  <div class="general">
    <p class="stage-label">このプロセスでは</p>
    <table class="duty">
      <tr><th>担当</th><td><div class="actors">
        <div class="actor"><img class="actor-figure" src="assets/roles/team.png" alt="AI エージェントの開発チームを表す、板に付箋を順に貼るデフォルメした人物"><span class="actor-name">開発チーム: 承認の後に<br>マージ・後片付け・ふりかえり</span></div>
      </div></td></tr>
      <tr><th>渡すもの</th><td>改善案（根拠・反映先）と、<br>PO への申し送り</td></tr>
      <tr class="decide"><th>人間が<br>決めること</th><td><div class="actors"><img class="people-small" src="assets/issue-5-codex/human-decisions.png" alt="人間の判断を表す、資料を見比べるデフォルメしたレナとヨナ"><ul class="decisions"><li>マージの実行内容を<br>承認する</li><li>改善の採否を決める</li></ul></div></td></tr>
    </table>
  </div>
  <div class="example">
    <h3>実例: overstrata-board #37</h3>
    <ul>
      <li>人間の承認後、開発チームが<br>#40 をマージ。<br>#41 はブランチを残して閉じた</li>
      <li>改善 F: 実機確認の結果は会話で<br>聞き、開発チームが PR に代筆する</li>
      <li>改善 G: 条件と合わない作りが<br>選ばれたら、PO に仕様の更新を頼む</li>
      <li>人間が F・G を採用し、手順書に反映</li>
    </ul>
    <p class="meta">#37 レポート 8〜10章</p>
  </div>
</div>

<!--
【話すこと】
⑦ マージは、人間が採用する PR とマージ・後片付けの実行内容を承認し、そのあと開発チームがマージと後片付けを行います。人間が自分でマージボタンを押すのではありません。
⑧ ふりかえりは、開発チームが記録から「続けること・改善すること」を整理し、改善案ごとに根拠と反映先を示します。採るかどうかを決めるのが、人間の3つ目の判断です。仕様についての発見は PO に申し送り、次の ① 議論につながります。
採用した改善と、その効果を確かめたことは分けて扱います。

【実例】
- 22:22: 人間が実機確認の結果を会話で伝え、開発チームが PR #40 に代筆した。端末・ブラウザ・接続経路・項目ごとの結果は「記載なし」と書いている
- 22:26: 開発チームが PR #40（head 629709a、CI 成功を直前に再確認）を squash でマージし、main e3311d4。PR #41 は「人間がスマホ実機で見比べ、駒の位置がずれない #40 の UI を選んだため」としてクローズし、ブランチは残した。worktree・コンテナなどを片付けた
- ふりかえりの改善案2件を、人間が 22:40 に採用した
  - 改善 F: #32 と #37 の2回続けて、人間は実機確認の結果を会話で伝え、開発チームが代筆した。そこで、会話で聞いて開発チームが代筆する形を標準にする（伝えられた内容だけを書き、未記載の項目は「記載なし」と書く）
  - 改善 G: 人間が受け入れ条件に合わない作りを選んだとき、人間の判断を原文のまま PO に送り、Issue と spec.md の更新を頼む。修正はそれと並行してよい。再確認と PO の確認は更新後の条件で行う（当時の overstrata-board の手順書への反映内容）
- F・G は overstrata-board の dual-implement スキルに反映した（9b7eae7）。効果は次の Issue で確かめることにしており、ここでは効果を確認済みとは扱わない
- PO への申し送り: 後続の候補2つ（使われなくなったサンプルの整理、設定欄の陣営色の自動確認）を1つの Issue にまとめられるよう整理する

【時間】#30 より前の構成での参考値: 約60秒（見積もり）。新構成では未見積もり・未実測。

【出典】
一般的な手順:
- README「Issue 1本の流れ」（⑦ 開発チームがマージし、後片付けする、⑧ 改善の採否を決める）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md#L49-L71
- workflow.md ステップ7「マージ」・ステップ8「ふりかえりと還流」: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md#L229-L266
- finish-issue 手順3（マージ・後片付けの実行内容を人間に確認する）・手順4（マージする）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/.claude/skills/finish-issue/SKILL.md#L46-L60
- 記載の不一致: 同じ版の workflow.md ステップ6（225行目）には「マージ（⑦）は人間がする」とある。README の流れ図・ステップ7・finish-issue は、人間の承認後に開発チームがマージする構成で、このスライドは後者で説明する（参照版・元資料は変更していない）: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md#L225
overstrata-board の実例:
- Issue #37 レポート 8章（完了処理）・9章（ふりかえりと改善案、人間の判断）・10章（PO への申し送り）: https://github.com/dyamada-jaki/overstrata-board/blob/346606809993990ddf3cdb0244b0db9a59e42a7d/docs/issue-reports/issue-37.md
- 採用のコミット（main e3311d4）: https://github.com/dyamada-jaki/overstrata-board/commit/e3311d43c6f125adec76eafe0d683e6d62fa74bb
- 改善 F・G の反映（9b7eae7）: https://github.com/dyamada-jaki/overstrata-board/commit/9b7eae763cfc199080f09653f65c31a1cf01e072
- 完了と申し送り: https://github.com/dyamada-jaki/overstrata-board/issues/37#issuecomment-6366665330
-->

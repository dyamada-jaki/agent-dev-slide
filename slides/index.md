---
marp: true
theme: default
size: 16:9
paginate: true
title: エージェント開発プロセス
description: agent-dev-template の開発プロセス
style: |
  section {
    background: #f8faf9;
    color: #172c3d;
    font-family: "Noto Sans CJK JP", "Hiragino Sans", sans-serif;
    font-size: 32px;
    line-height: 1.6;
    padding: 64px 80px;
  }
  h1 { color: #172c3d; font-size: 46px; line-height: 1.35; }
  strong { color: #087f80; }
  section::after { color: #60717b; font-size: 20px; }
  table { font-size: 29px; width: 100%; }
  th, td { padding: 18px 22px; border-color: #cfdbd9; }
  table tr { background: transparent; }
  table tr:nth-child(2n) { background: transparent; }
  th { color: #087f80; background: #edf3f1; }
  section.cover h1 { font-size: 54px; }
  section.cover p { color: #087f80; }
---

<!-- _class: cover -->

# エージェント開発プロセス

agent-dev-template

Spec × Issue × Orca

<!--
AI を使った開発に関心がある開発者へ、agent-dev-template の開発プロセスを紹介します。
まず、何をするプロセスなのか、仕様と作業の関係、担当する役割を見ていきます。
出典: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md
-->

---

# 人間と AI で進める開発

**人間が判断し**、AI エージェントが開発を進める。

仕様づくりから、実装・レビューへ。
マージ・ふりかえりまでを含むプロセス。

<!--
agent-dev-template は、開発プロセス一式をまとめたテンプレートです。
AI に実装だけを頼む場面に限らず、仕様づくりからふりかえりまでを扱います。
人間は PO と議論し、計画や採用する PR、改善の採否を判断します。
この導入では全体像を押さえ、個々の手順は後で説明します。
出典: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md
-->

---

# Spec・Issue・Orca の関係

| 名前 | 役割 |
| --- | --- |
| **Spec（仕様）** | 作るもの全体の「何を・なぜ・どこまで」を書いた仕様 |
| **Issue** | 仕様から今回作る部分だけを切り出した作業の単位 |
| **Orca** | エージェントの端末と worktree を扱う作業環境 |

仕様から今回作る部分を選び、Orca で Issue を1本ずつ進める。

<!--
仕様は docs/spec.md に置き、まだ作らない部分も含む全体像を持ちます。
Issue は仕様から今回作る部分だけを切り出したもので、今回の作業範囲を示します。
Orca は複数のエージェントの端末と worktree をまとめて扱うアプリです。
worktree は、同じリポジトリで作業場所を分けるためのディレクトリです。
出典: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md
出典: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md
-->

---

# エージェントの3つの役割

| 役割 | 担当すること |
| --- | --- |
| **PO** | 仕様・Issue を書く。受け入れを確認する |
| **開発チーム** | Issue の進行、実装の比較、完了処理を担う |
| **開発者** | 自分の worktree で実装・PR 作成・レビューを行う |

<!--
PO はプロダクトオーナー。人間と議論して仕様と Issue を書きます。
開発チームは1つの Issue の進行を担い、開発者に実装と相互レビューを頼み、採用する PR を推薦します。
PO はその推薦を、受け入れ条件・仕様・使う人の視点で確かめ、受け入れの一次判断をします。
開発者には Claude Code と Codex がいて、それぞれ自分の worktree で作業します。
この3つはエージェントの役割の分け方で、人間の判断は次のページで説明します。
出典: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md
出典: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md
-->

---

# 人間が判断すること

PO と議論して、作るものを決める。

- **計画を承認する**
- **採用する PR を決める**
- **改善の採否を決める**

人間は、エージェントの3つの役割には含めない。

<!--
人間は PO と仕様を議論し、開発の途中にある3つの判断を担います。
PO の受け入れ確認を経たうえで、採用する PR を決めるのは人間です。
計画を承認すること、採用する PR を決めること、ふりかえりで出た改善の採否を決めることを、自動処理として扱いません。
次は、これらの役割が Issue 1本をどのように進めるかを見ていきます。
出典: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/README.md
出典: https://github.com/dyamada-jaki/agent-dev-template/blob/78c72e2a824ef1056e8ecbcae141818acf28ec71/docs/workflow.md
-->

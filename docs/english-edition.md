# 本編の英語版

日本語版8枚を基に、英語で読んだときに担当・判断・次の工程がつながるように書き直した。[原稿](../slides/index-en.md)と [仕様2.8](spec.md)で管理する。日本語版の参照元は [sources.md](sources.md)を引き継ぐ。

## 訳語と意図

| 日本語の説明 | 英語版での表現・扱い |
|---|---|
| AI との開発にスクラムを取り入れる | Bringing Scrum to Development with AI。役割とイベントを開発の中に取り入れる意図を表す |
| 人間 | Human。ステークホルダーとして成果を見て、PO とともに方向・優先順位も判断する |
| AI の PO | Product Owner / PO。判断を仕様・Issue に具体化し、成果を受け入れ条件と照合する |
| 開発チーム | Coordinator。進行管理・比較・完了処理を担う役割。3枚目でテンプレートの development team との対応を示す。スクラムマスターとは対応づけない |
| 開発者 | Developers。Claude Code と Codex が同じ Issue から別々の計画・成果を作る |
| 採用 | 成果は adopt / choose、改善は choose / adopt。AI の受け入れ確認だけで決まるとは書かない |
| 開発可 | marks an issue ready。ラベルの意味を英語で伝える。実際のラベル名や起動条件は変更しない |
| ふりかえり | Retrospective。改善提案・人間の採否判断・適用・次の Issue での効果確認を分ける |

短くするために判断者や戻り先を省略しない。固定の Sprint timebox がないこと、Daily Scrum を含めないこと、リファインメントの担当の違いを本文で示す。表紙の副題・発表ノートは追加しない。

## ページごとの対応と確認観点

| ページ | 維持する意味 |
|---|---|
| 1 表紙 | 紙色・人物3人の絵・主題のみ |
| 2 全体像 | 人間と PO の対話、Issue 作成、計画からふりかえりの循環、PO への申し送り、全体を管理する Coordinator |
| 3 役割 | 人間のステークホルダー・PO の働き、AI の3役、独立した Scrum Master の不在 |
| 4 Refinement | 人間が方向・優先順位を決め、PO が仕様と Issue を書く。Issue は PBI の役割。開発可による起動 |
| 5 Planning | 2人が独立して計画、人間が確認・調整・承認。仕様の穴は PO と解決。固定期間・Daily Scrum の扱い |
| 6 Development | 承認された計画に沿って2案を作り相互レビュー。開発中の人間の作業は不要。Coordinator が比較・推薦 |
| 7 Review | Coordinator の推薦 → PO の受け入れ確認 → 人間の実物確認・採用判断。差し戻しと条件見直しの経路 |
| 8 Retrospective | 記録に基づく改善、人間の判断、手順への適用、仕様についての申し送りと次の効果確認 |

## 生成

`npm run build` と `npm run build:pdf` で、日本語版と英語版を生成する。英語版は `dist/index-en.html`・`dist/agent-dev-slide-en.pdf`。`--lang en` を指定し、本文と画像の説明文も英語にする。

テーマは `paper-en` が `paper` を継承し、英語の書体・サイズ・改行に必要な部分だけを調整する。日本語の原稿・テーマ・素材を変更しない。

共有 PDF の生成元と表示確認は [PDF の記録](pdf/README.md)を参照する。人間による英文の採用判断・発表時の実機確認・時間実測は未実施。

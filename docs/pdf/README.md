# 共有用 PDF

[agent-dev-slide.pdf](agent-dev-slide.pdf) が、現在のスライドを GitHub で開くための PDF です。

- 原稿の版: `f5fad716013965d39486bcb19fedc536f4808613`（紙色の新表紙「AI との開発にスクラムを取り入れる」を採用。本編8枚、発表ノートなし）
- 生成元: [GitHub Actions run 42457141765](https://github.com/dyamada-jaki/agent-dev-slide/actions/runs/42457141765) の `slides` artifact 内の `agent-dev-slide.pdf`
- フォント: CI の Noto CJK
- 確認: 全8枚を幅1280pxで目視し、文字切れ・重なり・画像欠け・日本語の欠字がないことを確認。HTML 全8枚と Orca プレビューの表紙から次ページへの移動・復帰も確認済み。
- この PDF を置いたコミットでは、原稿・テーマ・画像・生成設定を変更していません。

スライドを変更した PR では、表示確認した PDF でこのファイルを更新し、上の原稿の版・生成元も更新します。PR 本文と最終報告には、その PR のコミットを指す PDF のリンクを載せます。更新方法と確認条件は [testing.md](../testing.md) を参照してください。

GitHub の PDF 表示に時間がかかる場合は、ファイル画面のダウンロード操作で取得できます。PDF の表示は [GitHub の公式案内](https://docs.github.com/en/repositories/working-with-files/using-files/working-with-non-code-files#rendering-pdf-documents)を参照してください。

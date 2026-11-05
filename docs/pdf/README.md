# 共有用 PDF

[agent-dev-slide.pdf](agent-dev-slide.pdf) が、現在のスライドを GitHub で開くための PDF です。

- 原稿の版: `d05c32e84bb6a4d84be7f61c0a23fc5e2675b262`（PR #33、全16枚）
- 生成元: [GitHub Actions run 42017685420](https://github.com/dyamada-jaki/agent-dev-slide/actions/runs/42017685420) の `slides` artifact 内の `agent-dev-slide.pdf`
- フォント: CI の Noto CJK
- CI の成功と、実際の PDF の全16ページを1280×720基準で表示確認済みです。日本語の文字切れ・重なり・画像欠けはありません。
- この PDF を置いたコミットでは、原稿・テーマ・画像・生成設定を変更していません。生成元からの差分は、この PDF とその記録・確認記録だけです。
- [確認記録・変更4枚のプレビュー](../preview/issue-30-codex/README.md)

スライドを変更した PR では、表示確認した PDF でこのファイルを更新し、上の原稿の版・生成元も更新します。PR 本文と最終報告には、その PR のコミットを指す PDF のリンクを載せます。更新方法と確認条件は [testing.md](../testing.md) を参照してください。

GitHub の PDF 表示に時間がかかる場合は、ファイル画面のダウンロード操作で取得できます。PDF の表示は [GitHub の公式案内](https://docs.github.com/en/repositories/working-with-files/using-files/working-with-non-code-files#rendering-pdf-documents)を参照してください。

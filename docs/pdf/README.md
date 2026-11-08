# 共有用 PDF

[日本語版](agent-dev-slide.pdf)と [English edition](agent-dev-slide-en.pdf) を GitHub で開けます。

## 日本語版

- 原稿の版: `f5fad716013965d39486bcb19fedc536f4808613`（紙色の新表紙「AI との開発にスクラムを取り入れる」を採用。本編8枚、発表ノートなし）
- 生成元: [GitHub Actions run 42457141765](https://github.com/dyamada-jaki/agent-dev-slide/actions/runs/42457141765) の `slides` artifact 内の `agent-dev-slide.pdf`
- フォント: CI の Noto CJK
- 確認: 全8枚を幅1280pxで目視し、文字切れ・重なり・画像欠け・日本語の欠字がないことを確認。HTML 全8枚と Orca プレビューの表紙から次ページへの移動・復帰も確認済み。
- この PDF を置いたコミットでは、原稿・テーマ・画像・生成設定を変更していません。

スライドを変更した PR では、表示確認した PDF でこのファイルを更新し、上の原稿の版・生成元も更新します。PR 本文と最終報告には、その PR のコミットを指す PDF のリンクを載せます。更新方法と確認条件は [testing.md](../testing.md) を参照してください。

GitHub の PDF 表示に時間がかかる場合は、ファイル画面のダウンロード操作で取得できます。PDF の表示は [GitHub の公式案内](https://docs.github.com/en/repositories/working-with-files/using-files/working-with-non-code-files#rendering-pdf-documents)を参照してください。

## English edition

- タイトル: Bringing Scrum to Development with AI
- 原稿の版: `2b123e3abb69b85db0a4fc0af8fe9353c42bb671`（英語版8枚。意図に合わせた英文・英語用の配置を追加。日本語版は維持）
- 生成元: [GitHub Actions run 42457721958](https://github.com/dyamada-jaki/agent-dev-slide/actions/runs/42457721958) の `slides` artifact 内の `agent-dev-slide-en.pdf`
- フォント: CI の Noto CJK。PDF は8ページ・16:9。
- 確認: HTML・CI PDF 全8枚を幅1280pxで目視し、文字切れ・重なり・画像欠けなし。HTML の言語は英語、画像の読み込み失敗・文字の横方向のはみ出しなし。headless Chrome 1280×720 と Orca でページ送り・復帰を確認。
- 日本語版の回帰確認: 同じローカル環境で生成した8枚の画像が、英語版追加前の画像とすべて一致。
- この PDF を置いたコミットでは、原稿・テーマ・画像・生成設定を変更していない。人間による英文の確認・採用判断は未実施。
- 訳語と意味の対応: [英語版の記録](../english-edition.md)。

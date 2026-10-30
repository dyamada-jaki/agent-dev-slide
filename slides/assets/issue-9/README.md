# Issue #5 の実例画像

Issue #9 の10・11枚目で使う。すべて実際の成果物であり、新しいデザイン案ではない。元の5枚目（人間の判断）を同じ対象として比較する。小さな画像内の文を読ませず、画像外の本文に比較点を書く。

| ファイル | 状態・版 | 作り方・比較点 |
| --- | --- | --- |
| [initial-6-c332c37.png](initial-6-c332c37.png) | 初回 PR #6（Codex）、`c332c3760316c7509452b0cc6be39d138d712368` | 固定版の原稿と画像を Git から展開し Marp 4.5.1 と Chrome で生成した3ページ目。罫線と余白、判断の文字は藍色 |
| [initial-7-b3e0c3e.png](initial-7-b3e0c3e.png) | 初回 PR #7（Claude Code）、`b3e0c3e8964a764a424a131f004625d5f4b6697d` | 同様に固定版から生成した3ページ目。金色の箱で判断を強調 |
| [revised-6-3480008.png](revised-6-3480008.png) | 採用修正版 PR #6、`3480008867440677afcb0b29e8a0b8aa06a08c00` | 同版の `docs/design-samples/issue-5-codex-preview/03-human.png` を無変更で複製。罫線を保ち、判断は金色、下部2文はノートへ移動 |

初回2案の生成コマンド（固定版を展開したディレクトリで実行）:

```sh
npx marp --no-stdin --allow-local-files --images png <固定版の原稿> -o <一時ディレクトリ>/p.png
```

どの画像も1280×720。操作バーなし。トリミング・文字の描き替え・再生成による人物の変更は行っていない。採用修正版の画像内に「検討用・未採用」とあるのは制作時の見出しであり、採用状態は上の記録を示す。

固定版の参照先:

- [PR #6 初回原稿](https://github.com/dyamada-jaki/agent-dev-slide/blob/c332c3760316c7509452b0cc6be39d138d712368/slides/design-codex.md)
- [PR #7 初回原稿](https://github.com/dyamada-jaki/agent-dev-slide/blob/b3e0c3e8964a764a424a131f004625d5f4b6697d/slides/samples/issue-5-claude/index.md)
- [PR #6 採用修正版の画像](https://github.com/dyamada-jaki/agent-dev-slide/blob/3480008867440677afcb0b29e8a0b8aa06a08c00/docs/design-samples/issue-5-codex-preview/03-human.png)
- [Issue #5 レポート](https://github.com/dyamada-jaki/agent-dev-slide/blob/4c79405a64f13ec4359e6ceb57d1c871ba84b35f/docs/issue-reports/issue-5.md) 4・8〜11章

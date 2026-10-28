# 導入6枚のプレビュー

Issue #8 の Codex 実装。[原稿](../../../slides/index.md) と [共通デザイン](../../design.md) を確認できる。以下は Marp の `--images png` で生成した1280×720の画像で、操作バーを含まない。

| ページ | 画像 |
|---|---|
| 1 表紙 | [全体表示](01-cover.png) |
| 2 プロセスの全体像 | [全体表示](02-process.png) |
| 3 Spec・Issue・Orca | [全体表示](03-relation.png) |
| 4 AI エージェントの3つの役割 | [全体表示](04-roles.png) |
| 5 人間の判断 | [全体表示](05-human.png) |
| 6 まとめ | [全体表示](06-recap.png) |

## Orca で表示・ページ送りを確かめる

1. このブランチを用意し `npm ci` を実行する。
2. `.env` の `HOST_PORT` を確認し `npm run dev` を起動する。Codex 作業用は5282。使用中の別サーバーを止めず、担当のポートを使う。
3. Orca のブラウザで `http://localhost:5282/index.md#1` を開く。CLI では `orca tab create --url http://localhost:5282/index.md#1 --json`。以後のコマンドには返された `browserPageId` を `--page` で指定する。
4. `orca exec --page <ID> --command "set viewport 1280 720" --json` を実行し、`orca eval --page <ID> --expression "({width: innerWidth, height: innerHeight})" --json` で実寸を確かめる。
5. 右矢印で1→6、左矢印で6→1へ送る。各ページは `/index.md#1` 〜 `#6` でも開ける。文字切れ・重なり・日本語・画像・金色を確認する。
6. 確認を終えたら `Ctrl+C` で自分のサーバーを停止する。配布物は `npm run check` で生成し、`dist/index.html` と `dist/assets/` を一緒に開くか、`dist/agent-dev-slide.pdf` を開く。

Orca の撮影やキー入力が使えない場合は、[検証方針の代替手順](../../testing.md) に従い、Orca で未確認の項目と代わりに確認した環境を分けて記す。以下で操作バーなしの PNG を再生成できる。出力は `page.001.png` 〜 `page.006.png` となるので、上表の名前で置き換える。

```sh
npx marp --no-stdin --allow-local-files --images png slides/index.md -o dist/page.png
```

エージェントの確認対象 SHA・手元の書体・実際の CI 成果物の Noto・操作結果・制約は、この変更の PR 本文に記録する。これらの画像は手元の游明朝・ヒラギノで生成したものであり、CI の PDF の代用ではない。
実機での読みやすさ・説明のしやすさ・金色の見え方は未確認。担当は人間、確認時点はこの6枚のレビュー時、記録先は対象版を添えた Issue #8 または PR。Issue #5 の持ち越し確認もここでまとめて行う。

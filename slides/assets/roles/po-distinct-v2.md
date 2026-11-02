# AI の PO を人間と見分けるための人物案

- 制作日: 2026-11-03。
- ファイル: `po-distinct-v2.png`。全体像の見本に使用。既存本編の `po.png` は保持する。
- 人間の指摘: 「人間とPOが似過ぎているので、どちらかを少し変えたいね」。
- 変更案: レナはそのままにし、AI の PO の髪型・眼鏡・衣装の輪郭・持ち物を変える。銀灰色の短髪、丸眼鏡、長い藍色の服、閉じた冊子を抱える姿。外見は見分けやすさのための案であり、役割の年齢・性別・作品設定を定義しない。
- 制作方法: 組み込み `image_gen` で既存の `po.png` を編集。`../human/rena-standing.png` を違いの確認用に参照。CLI は使用せず、生成した透過 PNG をそのまま保存。
- 確認: HTML・PDF の実際の配置で人物の大きさ、見分けやすさ、周囲との収まりを確認する。人間による採用判断は未確認。

生成指示:

```text
Use case: precise-object-edit. Asset type: transparent single character cutout for a Japanese development-process slide. Edit target: first reference, existing unnamed AI PO character. Second reference is the human Rena; use ONLY as a contrast check, DO NOT copy her face, brown bob, armor or pointing-at-paper pose. Revise the AI PO enough to be unmistakably different from Rena at 110px tall, while matching the established delicate watercolor / pencil storybook chibi family. AI PO: a friendly adult-presenting character with short swept-back silver-gray hair leaving the forehead exposed, clearly visible round dark spectacles, a long simple muted indigo-blue robe with straight silhouette, plain dark shoes. Hold two closed cream notebooks together against the chest with one arm; the other hand rests calmly at the side. No open paper and no pointing pose. Small dark eyes, gentle smile, approximately 2.5-head proportions, full body standing at slight angle toward the LEFT (toward the human in the slide). Exactly one person, centered, head and feet entirely visible, little transparent margin. Preserve soft textured watercolor, restrained palette, warm hand drawn outlines, no photorealism or 3D. No gold accents, text, logos, extra people, scenery, background glow or cast shadow. Genuine transparent alpha background; clean isolated silhouette, not a painted background.
```

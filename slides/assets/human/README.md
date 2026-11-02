# 人間を表す人物素材

## rena-standing.png

- 制作日: 2026-11-03。
- 用途: 構成検討中の全体像に置く人間1人の絵。人間から、既存の2人組が他の役割の絵と比べて違和感があるとの指摘を受けて制作。
- 内容: 既存の人間の絵の左側にいるレナを、紙を確認する1人の立ち姿にした。キャラクターの新しい正式設定を定義するものではない。
- 方法: 組み込みの `image_gen`（CLI は使用していない）。背景透過を指定し、生成された PNG のアルファを保ったまま複製。プログラムによる画像の編集・切り抜きはしていない。
- 参照: 人物の外見は `../issue-5-codex/human-decisions.png` の左側。立ち姿・デフォルメの比率・水彩の仕上げは `../roles/po.png`。AI の PO の顔・衣装は人間へ流用しない。
- 確認: 背景の透過と、HTML・PDF に配置したときの見え方を確認。人物の採用判断は修正版の見本で行う。

生成時の指示文:

```text
Use case: identity-preserve. Asset type: transparent character cutout for an existing Japanese presentation diagram. Edit target: first reference, the brown straight-haired character on the LEFT (Rena). Supporting reference: second image is ONLY the standing pose scale, chibi proportions and illustration finish to match; do not copy that second character's identity or blue outfit. Create ONE standing full-body Rena, preserving the first reference's left character's chestnut side-parted bob hair, small dot eyes, warm tan/brown outfit, soft hand-painted watercolor and pencil texture, gentle expression and approximate 2.5-head chibi proportions. Rena stands at a slight angle toward the right, holding a small plain sheet in one hand and gently indicating it with the other, as a person considering a plan. Preserve recognizable face, brown hair and warm brown clothing. Remove the second character, desk, chairs and all background. Exactly one person, no extra people, no text, no logos, no frame or scenery. Match the other existing standing character in a cohesive watercolor illustration family, with restrained muted colors and simple readable silhouette at 120px height. Entire body and boots visible, centered, minimal transparent margin. Actual transparent background with alpha, no solid or checkerboard backdrop.
```

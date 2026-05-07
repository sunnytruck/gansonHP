# 画像の配置ガイド

サイトは画像がなくても表示できます。配置すると自動で差し替わります。

## 必須ファイル名
- `assets/ganson-front-divine.png`（TOPヒーロー・GALLERYで共用）
- `assets/ganson-3view.png`（GALLERYの3面図）

## 追加ギャラリーを増やす方法
1. `assets/` に画像を追加（例: `ganson-live01.png`）。
2. `index.html` の `#gallery` セクションへ `<figure class="visual-card image-shell">...</figure>` を複製。
3. `img src` と `figcaption` を変更。

推奨: 横1200px以上 / PNG or JPG。

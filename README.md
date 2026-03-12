# Japmap-Interaction
SVG画像内の各種オブジェクトをグループ（`g`）ごとに分割し、それぞれにインタラクション（ページ内ジャンプ）を付けたUIです。  
デモとして日本地図を設定しています。

## 技術構成
- @eslint/js@9.39.4
- @tailwindcss/vite@4.2.1
- @types/node@25.4.0
- @types/react-dom@19.2.3
- @types/react@19.2.14
- @vitejs/plugin-react@5.1.4
- eslint-plugin-react-hooks@7.0.1
- eslint-plugin-react-refresh@0.5.2
- eslint@9.39.4
- globals@17.4.0
- react-dom@19.2.4
- react@19.2.4
- tailwindcss@4.2.1
- typescript-eslint@8.57.0
- typescript@5.9.3
- vite@7.3.1

## Todo
### インタラクション生成プロンプトの準備
対象マップデータ（`SVG`）を用意してAIに区分け（エリア分け）を伝えさえすれば、インタラクションを付与した対象マップUIが生成されるようにしたい。そのためのプロンプトを準備する予定。

> [!NOTE]
> - 処理対象とするオブジェクト（マップSVG）は人間側で用意・調整する必要がある
> 現状のAIでは **どうしてもマップSVGを視覚的に認識して自律的に区分け（エリア分け）するのは難しい**  ので、  
> Adobe Illustrator など専用ソフトを使って各種エリアレイヤー名を明示的に指定・調整（例：pref-osaka, pref-kyoto, pref-wakayama など）した後に、SVG画像をエクスポート（抽出）する必要がある。

## デプロイ： 既存ページにコンテンツとして部分的に埋め込む場合
- [既存ページにコンテンツとして部分的に埋め込みたい](https://zenn.dev/benjuwan/articles/ad7b6e77717822#2.-%E6%97%A2%E5%AD%98%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%AB%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%81%A8%E3%81%97%E3%81%A6%E9%83%A8%E5%88%86%E7%9A%84%E3%81%AB%E5%9F%8B%E3%82%81%E8%BE%BC%E3%81%BF%E3%81%9F%E3%81%84)

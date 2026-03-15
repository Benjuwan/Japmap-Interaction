# Japmap-Interaction
SVG画像内の各種オブジェクトをグループ（`g`）ごとに分割し、それぞれにインタラクション（ページ内ジャンプ）を付けたUIです。  
デモとして日本地図を設定しています。

## 技術構成
- @eslint/js@9.39.4
- @tailwindcss/vite@4.2.1
- @types/node@25.5.0
- @types/react-dom@19.2.3
- @types/react@19.2.14
- @vitejs/plugin-react@5.2.0
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

- プロンプトたたき台：  
```bash
## タスク： マップ画像（SVGファイル）のエリア分け
ユーザーから渡されたマップ画像（SVGファイル）を確認し、ユーザー期待するエリア分けを行ってください。

### 前提・背景情報
ユーザーは「用意したマップ画像の当該エリアをクリックして、当該エリア情報を記載したセクションにページ内ジャンプまたは別途処理を実行するインタラクションUIを実装」しようとしています。  
そのためにはインタラクション関数を実行できるDOM要素（`svg`要素）が必要です。インタラクション関数やスタイル指定は用意されているので **ユーザーから渡されたマップ画像を確認してエリア分け（svgデータの編集）を実施** してください。

### タスク実施にかかわる参照情報および設定事項
具体的には後述のコード例（コード全文は`TargetSvgElm.tsx`）を参照に、対象SVGファイルの`<g>`タグ（区分け・エリア要素）に以下を実施。    

- `data-target`属性を付与。命名規則は `area-` > `pref-` > `city-` > `unit-` をプレフィックスした形にすること。
- `onClick={(e) => clickInteractionArea(e)}`インタラクション関数を付与
- `class`属性（”cursor-pointer duration-250 hover:opacity-[.5]”）を付与

---

- コード例（日本地図）
"""html
<g id="grandParent">
    <g>
        <g id="map-area-kyushu" data-target="area-kyushu">
        <!-- kyushu地方 - fukuoka -->
        <g id="map-pref-fukuoka" data-target="pref-fukuoka" onClick={(e) => clickInteractionArea(e)} className="cursor-pointer duration-250 hover:opacity-[.5]">
            <path className="cls-5" style={{ stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '4px', fill: 'none' }} d="M292.73,2527.83h3.76l2.42-.73v-1.45l-1.45-2.79-1.33-2.91v-1.33l1.09-.97,1.7-.61,1.33-.48,1.21-1.09v-1.21l1.45-1.09h3........
"""

## 制約
- 指定する`class`属性について、 Tailwind CSS を使用していない場合は適宜置き換える
- ユーザーから渡されたマップ画像がSVGファイルでない場合は、SVGファイルでないと対応できない旨と変換方法を合わせて伝えること
- 不明点や疑問点、懸念点、不足している情報や素材などがある場合は作業を停止してユーザーに尋ねること
- ユーザーから渡されたマップ画像（SVGファイル）が複雑な構成・構造の場合
    - A： ユーザー側で調整したものを用意  
    現状のAIでは **どうしてもマップSVGを視覚的に認識して自律的に区分け（エリア分け）するのは難しい** ので、Adobe Illustrator など専用ソフトを使って各種エリアレイヤー名を明示的に指定・調整（例：pref-osaka, pref-kyoto, pref-wakayama など）した後に、SVG画像をエクスポート（抽出）する必要がある。この旨をユーザーに伝えて、調整作業に必要な情報及び手順を提示すること
    - B： シンプルなグリッド区切りを実施（2分割、4分割、8分割）
    ゲーム内でのマップや知名度の低い地域のマップを細かく分割するリクエストを受けた場合は難度の程度で細分化と管理保守の現実的限界を伝える。ただし同時に、対象マップを2分割、4分割、8分割などして、各分割エリア内のセクションを設け、そのセクション内でエリア内情報を記載する代替案を提案する。
```

## デプロイ： 既存ページにコンテンツとして部分的に埋め込む場合
- [既存ページにコンテンツとして部分的に埋め込みたい](https://zenn.dev/benjuwan/articles/ad7b6e77717822#2.-%E6%97%A2%E5%AD%98%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%AB%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%81%A8%E3%81%97%E3%81%A6%E9%83%A8%E5%88%86%E7%9A%84%E3%81%AB%E5%9F%8B%E3%82%81%E8%BE%BC%E3%81%BF%E3%81%9F%E3%81%84)

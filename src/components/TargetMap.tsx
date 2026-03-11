import { memo, type SyntheticEvent } from "react";
import { JumpAreaEls } from "./JumpAreaEls";

// マップのSVGデータコンポーネント
const TargetSvgElm = ({ clickInteractionArea }: { clickInteractionArea: (targetElm: SyntheticEvent<SVGGElement>) => void }) => {
    return (
        <svg id="parentWrapper" data-name="parentWrapper" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352.02 271.23">
            <g id="mapAreaWrapper" data-name="mapAreaWrapper">
                <g>
                    {/* 関東 (.cls-1) */}
                    <g onClick={(e) => clickInteractionArea(e)} id="map-kanto" className="cursor-pointer duration-250 hover:opacity-[.5]" data-target="area-kanto">
                        <polygon className="cls-1" style={{ 'fill': '#3786c7' }} points="220.94 184.51 220.94 195.79 238.41 195.79 238.41 179.52 225.17 179.52 220.94 184.51" />
                        <polygon className="cls-1" style={{ 'fill': '#3786c7' }} points="230.25 167.37 211.29 167.37 211.29 174.96 225.17 174.96 225.17 179.52 238.41 179.52 238.41 169.97 245.79 163.03 245.79 150.21 230.25 167.37" />
                        <rect className="cls-1" style={{ 'fill': '#3786c7' }} x="238.41" y="179.52" width="16.71" height="16.28" />
                        <rect className="cls-1" style={{ 'fill': '#3786c7' }} x="220.94" y="195.79" width="17.47" height="9.33" />
                        <polygon className="cls-1" style={{ 'fill': '#3786c7' }} points="255.12 195.79 238.41 195.79 238.41 205.13 248.83 205.13 252.91 214.31 270.83 179.52 255.12 179.52 255.12 195.79" />
                        <g>
                            <polygon className="cls-1" style={{ 'fill': '#3786c7' }} points="220.94 205.13 220.94 212.5 235.28 212.5 238.41 208.49 238.41 205.13 220.94 205.13" />
                            <polygon className="cls-1" style={{ 'fill': '#3786c7' }} points="248.83 205.13 238.41 205.13 238.41 208.49 238.41 216.14 233.15 224.6 233.15 228.56 245.57 228.56 252.91 214.31 248.83 205.13" />
                        </g>
                        <polygon className="cls-1" style={{ 'fill': '#3786c7' }} points="220.94 220.21 232.34 220.21 232.34 215.97 235.28 212.5 220.94 212.5 220.94 220.21" />
                        <polygon className="cls-1" style={{ 'fill': '#3786c7' }} points="233.8 146.15 227.13 148.11 227.13 158.85 233.8 153.64 233.8 146.15" />
                    </g>
                    {/* 沖縄 離島パーツ (.cls-2) */}
                    <g onClick={(e) => clickInteractionArea(e)} id="map-okinawa-island" className="cursor-pointer duration-250 hover:opacity-[.5]" data-target="area-okinawa">
                        <polygon className="cls-2" style={{ 'fill': '#ea6172', 'stroke': '#fff', 'strokeWidth': '.5px', 'strokeLinecap': 'round', 'strokeLinejoin': 'round' }} points=".41 265.78 .25 269.85 2.85 270.98 18.8 255.36 18.8 252.11 15.22 251.13 .41 265.78" />
                    </g>
                    {/* 中国 (.cls-3) */}
                    <g onClick={(e) => clickInteractionArea(e)} id="map-chugoku" className="cursor-pointer duration-250 hover:opacity-[.5]" data-target="area-chugoku">
                        <polygon className="cls-3" style={{ 'fill': '#69bd83' }} points="102.78 199.21 102.78 199.21 108.16 193.84 113.36 193.84 119.06 188.14 127.69 188.14 130.29 184.73 130.29 177.24 109.95 177.24 98.83 187.49 98.66 187.49 98.66 199.21 102.78 199.21" />
                        <polygon className="cls-3" style={{ 'fill': '#69bd83' }} points="130.29 177.24 130.29 184.73 127.69 188.14 127.69 192.05 148.84 192.05 148.84 177.24 130.29 177.24" />
                        <polygon className="cls-3" style={{ 'fill': '#69bd83' }} points="102.78 199.21 98.66 199.21 98.66 187.49 85.86 187.49 83.58 191.72 83.58 202.14 85.86 206.7 93.02 206.7 97.58 212.23 102.78 212.23 105.55 208.32 102.78 205.23 102.78 199.21" />
                        <polygon className="cls-3" style={{ 'fill': '#69bd83' }} points="127.69 188.14 119.06 188.14 113.36 193.84 108.16 193.84 102.78 199.21 102.78 199.21 102.78 205.23 105.55 208.32 127.69 208.32 127.69 192.05 127.69 188.14" />
                        <polygon className="cls-3" style={{ 'fill': '#69bd83' }} points="148.84 196.12 148.84 192.05 127.69 192.05 127.69 208.32 142.01 208.32 142.01 200.84 148.84 196.12" />
                    </g>
                    {/* 北海道 (.cls-4) */}
                    <g onClick={(e) => clickInteractionArea(e)} id="map-hokkaido" className="cursor-pointer duration-250 hover:opacity-[.5]" data-target="area-hokkaido">
                        <polygon className="cls-4" style={{ 'fill': '#00b4ed' }} points="343.73 53.65 343.77 47.19 349.36 43.72 349.36 35.85 343.82 39.29 343.82 39.22 335.01 39.22 310.29 0 289.95 0 289.95 25.25 283.28 32.71 283.28 44.59 264.24 44.59 264.24 53.63 254.8 62.33 254.8 86.42 267.82 86.42 267.82 80.08 274.16 80.08 274.16 72.59 267.82 72.59 267.82 63.96 276.17 63.96 276.17 71.67 284.52 63.96 286.38 63.96 302.32 84.31 318.26 63.96 343.66 63.96 352.02 58.43 352.02 53.65 343.73 53.65" />
                    </g>
                    {/* 東海 (.cls-5) */}
                    <g onClick={(e) => clickInteractionArea(e)} id="map-toukai" className="cursor-pointer duration-250 hover:opacity-[.5]" data-target="area-toukai">
                        <polygon className="cls-5" style={{ 'fill': '#f7b249' }} points="211.29 174.96 211.29 182.93 211.34 182.93 211.29 182.93 211.29 185.81 199.14 199.05 199.14 208.81 204.34 208.81 214.76 195.79 220.94 195.79 220.94 184.51 225.17 179.52 225.17 174.96 211.29 174.96" />
                        <polygon className="cls-5" style={{ 'fill': '#f7b249' }} points="193.11 182.93 193.11 184.56 189.61 188.06 185.14 188.06 185.14 195.31 179.6 195.31 179.6 205.56 182.05 205.56 187.42 205.56 191 208.81 199.14 208.81 199.14 199.05 211.29 185.81 211.29 182.93 193.11 182.93" />
                        <polygon className="cls-5" style={{ 'fill': '#f7b249' }} points="214.76 195.79 209.55 202.3 209.55 212.5 220.94 212.5 220.94 205.13 220.94 195.79 214.76 195.79" />
                        <polygon className="cls-5" style={{ 'fill': '#f7b249' }} points="199.14 208.81 191 208.81 187.42 205.56 182.05 205.56 182.05 212.72 182.05 218.9 184.81 218.9 184.81 215.65 187.42 215.65 187.42 221.02 183.02 221.02 183.02 224.27 191.97 224.27 204.34 208.81 199.14 208.81" />
                        <polygon className="cls-5" style={{ 'fill': '#f7b249' }} points="209.55 212.5 209.55 202.3 204.34 208.81 191.97 224.27 209.71 224.19 211.93 218.41 211.99 218.25 214.27 218.25 214.27 229.48 217.85 229.48 220.94 226.72 220.94 220.21 220.94 212.5 209.55 212.5" />
                    </g>
                    {/* 九州 (.cls-6) */}
                    <g onClick={(e) => clickInteractionArea(e)} id="map-kyushu" className="cursor-pointer duration-250 hover:opacity-[.5]" data-target="area-kyushu">
                        <polygon className="cls-6" style={{ 'fill': '#ea5532' }} points="59 207.4 53.2 207.4 50.38 212.61 50.49 214.67 52.22 214.67 54.29 211.63 54.29 216.84 52.55 218.14 52.55 228.67 54.18 228.67 56.24 225.09 58.95 225.09 56.24 228.02 56.24 232.47 60.36 232.47 63.18 229.54 63.18 223.41 59 219.07 59 207.4" />
                        <path className="cls-6" style={{ 'fill': '#ea5532' }} d="M70.72,213.53h-3.58l-3.74-2.93s.05-1.67.07-3.2h-4.46v11.67l4.18,4.34v-4.18h2.28l5.26-4.07v-1.63Z" />
                        <g>
                            <polygon className="cls-6" style={{ 'fill': '#ea5532' }} points="65.46 231.27 59.13 239.08 64.7 239.08 66.94 246.46 78.05 232.09 74.14 224.93 65.46 224.93 65.46 231.27" />
                            <path className="cls-6" style={{ 'fill': '#ea5532' }} d="M82.06,212.44v-8.72h-8.03l-3.21,3.69h-7.35c-.02,1.54-.07,3.2-.07,3.2l3.74,2.93h3.58v1.63l-5.26,4.07v5.7h8.68l.16-6.51,7.76-5.98Z" />
                        </g>
                        <polygon className="cls-6" style={{ 'fill': '#ea5532' }} points="66.94 246.46 64.7 239.08 59.13 239.08 53.85 245.6 53.85 262.41 57.87 262.41 57.87 255.25 59.82 255.25 59.82 268.92 63.07 268.92 70.8 259.15 66.94 246.46" />
                        <polygon className="cls-6" style={{ 'fill': '#ea5532' }} points="89.12 214.13 82.06 214.13 82.06 212.44 74.3 218.42 74.14 224.93 78.05 232.09 91.72 232.09 91.83 216.19 89.12 214.13" />
                        <polygon className="cls-6" style={{ 'fill': '#ea5532' }} points="66.94 246.46 70.8 259.15 91.72 232.68 91.72 232.09 78.05 232.09 66.94 246.46" />
                    </g>
                    {/* 四国 (.cls-7) */}
                    <g onClick={(e) => clickInteractionArea(e)} id="map-shikoku" className="cursor-pointer duration-250 hover:opacity-[.5]" data-target="area-shikoku">
                        <polygon className="cls-7" style={{ 'fill': '#036eb8' }} points="110.38 220.97 101.48 234.77 101.48 240.39 109.13 240.39 113.83 232.9 125 232.9 127.36 237.46 131.48 233.96 123.51 220.97 110.38 220.97" />
                        <polygon className="cls-7" style={{ 'fill': '#036eb8' }} points="123.51 220.97 123.51 215.49 116.29 215.49 116.29 213.7 106.04 213.7 99.69 222.81 99.69 232.9 101.48 232.9 101.48 234.77 110.38 220.97 123.51 220.97" />
                        <polygon className="cls-7" style={{ 'fill': '#036eb8' }} points="139.73 212.39 126.38 212.39 126.38 215.49 123.51 215.49 123.51 220.97 142.66 220.97 142.66 220.37 139.73 212.39" />
                        <polygon className="cls-7" style={{ 'fill': '#036eb8' }} points="131.48 233.96 136.95 229.32 140.38 229.32 142.66 226.06 142.66 220.97 123.51 220.97 131.48 233.96" />
                    </g>
                    {/* 関西 (.cls-8) */}
                    <g onClick={(e) => clickInteractionArea(e)} id="map-kansai" className="cursor-pointer duration-250 hover:opacity-[.5]" data-target="area-kansai">
                        <polygon className="cls-8" style={{ 'fill': '#f18e1d' }} points="160.24 219.43 160.24 224.76 156.66 227.53 156.66 231.44 158.85 233.63 160.72 233.06 169.68 224.27 169.68 215.65 164.14 215.65 160.24 219.43" />
                        <polygon className="cls-8" style={{ 'fill': '#f18e1d' }} points="160.24 219.43 160.24 220.58 160.24 219.43 163.98 215.81 163.98 202.95 156.98 196.13 156.98 211.91 151.16 220.53 159.1 220.53 160.24 219.43" />
                        <polygon className="cls-8" style={{ 'fill': '#f18e1d' }} points="148.84 177.24 148.84 192.05 148.84 196.12 142.01 200.84 142.01 208.32 147.87 208.32 151.45 211.91 156.98 211.91 156.98 196.13 156.98 177.24 148.84 177.24" />
                        <polygon className="cls-8" style={{ 'fill': '#f18e1d' }} points="158.85 233.63 156.66 231.44 156.66 227.53 160.24 224.76 160.24 219.43 159.1 220.53 151.16 220.53 147.54 225.9 147.54 235.51 153.89 241.2 157.47 241.2 160.72 237.9 160.72 233.06 158.85 233.63" />
                        <polygon className="cls-8" style={{ 'fill': '#f18e1d' }} points="179.6 205.56 178.14 205.56 169.68 215.65 169.68 224.27 160.72 233.06 160.72 237.9 169.35 229.16 180.58 229.16 180.58 222.65 176.51 222.65 176.51 217.44 182.05 212.72 182.05 205.56 179.6 205.56" />
                        <polygon className="cls-8" style={{ 'fill': '#f18e1d' }} points="150.55 218.58 152.18 213.78 149.09 213.78 148.45 215.65 144.86 215.65 144.86 218.58 147.46 218.58 148.92 218.58 150.55 218.58" />
                    </g>
                    {/* 東北 (.cls-9) */}
                    <g onClick={(e) => clickInteractionArea(e)} id="map-tohoku" className="cursor-pointer duration-250 hover:opacity-[.5]" data-target="area-tohoku">
                        <polygon className="cls-9" style={{ 'fill': '#b0d25e' }} points="286.37 112.03 286.37 86.86 271.18 86.86 271.18 93.8 280.73 93.8 280.73 96.84 267.06 96.84 267.06 90.55 259.89 90.55 259.89 96.84 254.25 96.84 254.25 112.03 270.75 112.03 286.37 112.03" />
                        <rect className="cls-9" style={{ 'fill': '#b0d25e' }} x="254.25" y="112.03" width="16.49" height="29.08" />
                        <polygon className="cls-9" style={{ 'fill': '#b0d25e' }} points="260.91 163.03 270.75 141.11 254.25 141.11 254.04 141.11 245.79 150.21 245.79 163.03 260.91 163.03" />
                        <polygon className="cls-9" style={{ 'fill': '#b0d25e' }} points="286.37 112.03 270.75 112.03 270.75 141.11 291.58 141.11 291.58 112.03 286.37 112.03" />
                        <polygon className="cls-9" style={{ 'fill': '#b0d25e' }} points="260.91 163.03 245.79 163.03 238.41 169.97 238.41 179.52 255.12 179.52 270.83 179.52 271.61 178 279.72 163.03 260.91 163.03" />
                        <polygon className="cls-9" style={{ 'fill': '#b0d25e' }} points="260.91 163.03 279.72 163.03 291.58 141.11 270.75 141.11 260.91 163.03" />
                    </g>
                    {/* 北陸 (.cls-10) */}
                    <g onClick={(e) => clickInteractionArea(e)} id="map-hokuriku" className="cursor-pointer duration-250 hover:opacity-[.5]" data-target="area-hokuriku">
                        <polyline className="cls-10" style={{ 'fill': '#ea609e' }} points="169.68 190.1 179.6 187.49 179.6 195.31 185.14 195.31 185.14 177.56 176.02 177.56 176.02 182.77 165.28 182.77 165.28 189.12 169.68 190.1" />
                        <polygon className="cls-10" style={{ 'fill': '#ea609e' }} points="193.06 154.78 193.06 161.51 187.14 177.56 185.14 177.56 185.14 188.06 189.61 188.06 193.11 184.56 193.11 182.93 193.11 180.01 201.48 167.37 201.52 161.51 210.64 161.51 210.64 154.78 193.06 154.78" />
                        <polygon className="cls-10" style={{ 'fill': '#ea609e' }} points="201.48 167.37 193.11 180.01 193.11 182.93 211.29 182.93 211.29 167.37 201.48 167.37" />
                    </g>
                    {/* 京滋 (.cls-11) */}
                    <g onClick={(e) => clickInteractionArea(e)} id="map-keiji" className="cursor-pointer duration-250 hover:opacity-[.5]" data-target="area-keiji">
                        <polygon className="cls-11" style={{ 'fill': '#009d85' }} points="163.98 202.95 163.98 215.81 164.14 215.65 169.68 215.65 169.68 190.1 165.28 189.12 165.28 182.77 165.28 177.24 156.98 177.24 156.98 196.13 163.98 202.95" />
                        <polygon className="cls-11" style={{ 'fill': '#009d85' }} points="179.6 187.49 169.68 190.1 169.68 215.65 178.14 205.56 179.6 205.56 179.6 195.31 179.6 187.49" />
                    </g>
                </g>
            </g>
        </svg>
    );
}

export const TargetMap = memo(() => {
    const clickInteractionArea = (targetElm: SyntheticEvent<SVGGElement>): void => {
        if (!targetElm.currentTarget.hasAttribute('data-target')) {
            console.error("選択したエリア要素には `data-target`属性が存在しません。");
            return;
        }

        // SVG（日本地図画像）の各エリア要素（`g`）に指定されたカスタムデータ属性値（`data-target`）： ページ内ジャンプ先の地域セクション要素の`id`属性値とリンクした文字列を取得
        const toJumpElIdAttrStr: string | null = targetElm.currentTarget.getAttribute('data-target');

        // ページ内ジャンプ先の地域セクション要素を取得
        const toJumpAreaEl: HTMLElement | null = document.querySelector(`#${toJumpElIdAttrStr}`);

        if (!toJumpAreaEl) {
            alert(`#${toJumpElIdAttrStr} HTML要素が存在しません。`);
            return;
        }

        if (toJumpAreaEl) {
            toJumpAreaEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            alert(`現在「${toJumpElIdAttrStr}」地方には加盟企業が存在しません。`);
        }
    }

    return (
        <div className="max-w-160 m-auto py-[5em] px-4">
            <div className="mb-[5em] p-4 bg-[#f1f1f1] rounded">
                <h1 className="mb-4">対象エリアをクリックして移動（ページ内ジャンプ）するUIデモ</h1>
                <p className="text-sm">SVG画像内の各種オブジェクトをグループ（`g`）ごとに分割し、それぞれにインタラクション（ページ内ジャンプ）を付けたUIです。</p>
            </div>
            <section className="mb-[5em]">
                <TargetSvgElm clickInteractionArea={clickInteractionArea} />
            </section>
            <JumpAreaEls />
        </div>
    );
});

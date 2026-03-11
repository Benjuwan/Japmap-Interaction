import { memo } from "react";

export const JumpAreaEls = memo(() => {
    return (
        <section className="md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {/* 北海道エリア */}
            <div className="mb-[2.5em] bg-[#00b4ed] rounded p-4 h-[360px]" id="area-hokkaido">
                <h3 className="font-bold">北海道エリア</h3>
            </div>

            {/* 東北エリア */}
            <div className="mb-[2.5em] bg-[#b0d25e] rounded p-4 h-[360px]" id="area-tohoku">
                <h3 className="font-bold">東北エリア</h3>
            </div>

            {/* 関東エリア */}
            <div className="mb-[2.5em] bg-[#3785c7] rounded p-4 h-[360px]" id="area-kanto">
                <h3 className="font-bold">関東エリア</h3>
            </div>

            {/* 北陸エリア */}
            <div className="mb-[2.5em] bg-[#ea609e] rounded p-4 h-[360px]" id="area-hokuriku">
                <h3 className="font-bold">北陸エリア</h3>
            </div>

            {/* 京滋エリア */}
            <div className="mb-[2.5em] bg-[#009d85] rounded p-4 h-[360px]" id="area-keiji">
                <h3 className="font-bold">京滋エリア</h3>
            </div>

            {/* 関西エリア */}
            <div className="mb-[2.5em] bg-[#f18e1d] rounded p-4 h-[360px]" id="area-kansai">
                <h3 className="font-bold">関西エリア</h3>
            </div>

            {/* 中国エリア */}
            <div className="mb-[2.5em] bg-[#6abd83] rounded p-4 h-[360px]" id="area-chugoku">
                <h3 className="font-bold">中国エリア</h3>
            </div>

            {/* 四国エリア */}
            <div className="mb-[2.5em] bg-[#3786c7] rounded p-4 h-[360px]" id="area-shikoku">
                <h3 className="font-bold">四国エリア</h3>
            </div>

            {/* 九州エリア */}
            <div className="mb-[2.5em] bg-[#ea5632] rounded p-4 h-[360px]" id="area-kyushu">
                <h3 className="font-bold">九州エリア</h3>
            </div>

            {/* 沖縄エリア */}
            <div className="mb-[2.5em] bg-[#ea6172] rounded p-4 h-[360px]" id="area-okinawa">
                <h3 className="font-bold">沖縄エリア</h3>
            </div>
        </section>
    );
});

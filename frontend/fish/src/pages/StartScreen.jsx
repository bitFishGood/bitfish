import React from "react";
import OceanBackground from "../components/OceanBackground";
import Fish from "../components/Fish";
import Coral from "../components/Coral";
import KakaoLogin from "../api/KakaoLogin";

export default function StartScreen() {
    return (
        <div className="relative w-[1000px] h-[700px] overflow-hidden font-sans mx-auto my-auto shadow-2xl rounded-xl bg-transparent">
            {/* 배경 이미지 */}
            <OceanBackground />

            {/* 콘텐츠 레이어 */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <h1 className="text-6xl font-extrabold text-indigo-700 tracking-wider drop-shadow-lg mb-6">
                    BIT FISH
                </h1>

                <button className="bg-yellow-400 text-black font-bold text-lg py-3 px-6 rounded-full shadow-md hover:bg-yellow-500 transition">
                    시작하러가기
                </button>
            </div>

            {/* 카카오 로그인 */}
            <KakaoLogin />

            {/* 물고기 */}
            <Fish position={{ top: "100px", left: "30px" }} delay={0} type="left" />
            <Fish position={{ top: "180px", left: "120px" }} delay={400} type="right" />
            <Fish position={{ top: "260px", left: "220px" }} delay={800} type="left" />

            {/* 바닥 장식 */}
            <Coral />
        </div>
    );
}

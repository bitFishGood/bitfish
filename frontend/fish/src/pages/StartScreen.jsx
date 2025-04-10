import React from "react";
import OceanBackground from "../components/OceanBackground";
import Fish from "../components/Fish";
import Coral from "../components/Coral";
import KakaoLogin from "../api/KakaoLogin";

export default function StartScreen() {
    return (
        <div className="relative w-screen h-screen overflow-hidden font-sans">
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
            <KakaoLogin></KakaoLogin>

            {/* 물고기 */}
            <Fish position={{ bottom: "6rem", left: "2rem" }} delay={0} />
            <Fish position={{ bottom: "8rem", left: "6rem" }} delay={150} />
            <Fish position={{ bottom: "10rem", left: "10rem" }} delay={300} />

            {/* 바닥 장식 */}
            <Coral />
        </div>
    );
}
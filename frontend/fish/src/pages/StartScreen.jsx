import React from "react";
import OceanBackground from "../components/OceanBackground";
import Fish from "../components/Fish";
import Coral from "../components/Coral";

export default function StartScreen() {
    return (
        <div className="w-full h-screen relative overflow-hidden font-sans">
            <OceanBackground />

            <h1 className="text-5xl font-bold text-center pt-24 text-indigo-700 tracking-widest z-10 relative">
                BIT FISH
            </h1>

            <div className="flex justify-center mt-20 z-10 relative">
                <button className="bg-blue-300 text-white text-lg py-3 px-6 rounded-full shadow-md hover:bg-blue-400 transition">
                    시작하러가기
                </button>
            </div>

            {/* 물고기들 */}
            <Fish position={{ bottom: "6rem", left: "2rem" }} delay="0" />
            <Fish position={{ bottom: "7rem", left: "5rem" }} delay="100" />
            <Fish position={{ bottom: "8rem", left: "8rem" }} delay="200" />
            <Fish position={{ bottom: "9rem", right: "3rem" }} delay="300" type="right" />

            {/* 바닥 장식 */}
            <Coral />
        </div>
    );
}

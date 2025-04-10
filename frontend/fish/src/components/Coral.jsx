import React from "react";
import 바위 from '../assets/images/부속품/바위.png';

export default function Coral() {
    return (
        <div className="absolute bottom-0 w-full flex justify-between items-end px-4 pb-4 z-10">
            <img src={바위} alt="바위" className="w-20" />

        </div>
    );
}

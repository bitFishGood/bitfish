import React from 'react';
import yellowFish from '../assets/images/기본물고기/yellow.png';

export default function Fish({ position = {}, delay = 0, type = 'left' }) {
    const style = {
        ...position,
        animationDelay: `${delay}ms`,
    };

    const direction = type === 'left' ? '' : 'scale-x-[-1]';

    return (
        <div className={`absolute animate-swim ${direction} z-10`} style={style}>
            <img src={yellowFish} alt="fish" className="w-12 h-auto" />
        </div>
    );
}

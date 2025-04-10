// tailwind.config.js
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            keyframes: {
                swim: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '50%': { transform: 'translateX(20px)' },
                },
            },
            animation: {
                swim: 'swim 3s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};

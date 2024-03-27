/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            backgroundImage: {
                lines: 'url("assets/lines.png")',
            },
            keyframes: {
                float : {
                    '0%, 100%': { transform : 'translateY(0)' },
                    '50%': { transform : 'translateY(-10px)' }
                },
                fadeIn : {
                    'from': {opacity : '0'},
                    'to': {opacity : '1'},
                }
            },
            animation: {
                float: 'float 3s ease-in-out infinite',
                fadeIn: 'fadeIn 1s ease-in-out'
            },
        },
    },
    plugins: [],
};


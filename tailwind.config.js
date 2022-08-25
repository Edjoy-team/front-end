/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            roboto: ['Roboto Mono', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: '#4adede',
                accent: '#4c70ff',
            },
        },
    },
    plugins: [],
};

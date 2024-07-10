/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
        "./public/index.html",
    ],
    darkMode: "class",
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'solid': '4px 4px 0px 0px rgba(0,0,0,1)'
      },
      fontFamily: {
        Noto_Sans_Mono: ["Noto Sans Mono", "monospace"],
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'solid': '2px 2px 0px 0px rgba(0,0,0,1)'
      }
    },
  },
  plugins: [],
}
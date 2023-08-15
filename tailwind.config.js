/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      "md": "770px",
      "sm": "420px"
    },
    fontFamily: {
      'zen': ['Zen Dots', 'cursive'],
      'body': ['Secular One', 'sans-serif'],
      'nav': ['Michroma', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
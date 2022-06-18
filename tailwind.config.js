/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require("daisyui")
  ],
  darkMode: 'class',
  daisyui: {
    themes: ["light", "dark", "winter"]
  },
}

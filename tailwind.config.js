/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/img/background.jpg')",
      },
      colors: {
        primary: "#DEDED0",
        dark: "#290952"
      }
    },
  },
  plugins: [],
};
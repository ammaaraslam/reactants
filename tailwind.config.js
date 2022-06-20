/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#ff364e",
      secondary: "#ffde00",
      tertiary: "#4c57c5",
      background: "#f7f7f6",
      text: "#02001d",
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      colors: {
        primary: "#4285f4",
        secondary: "#06d6a0",
        tertiary: "#E73668",
        background: "#FFFFFF",
        darkBackground: "#000000",
        text: "#FFFFFF",
        darkText: "#000000",
        textSecondary: "#333333",
        transparent: "transparent",
        styledComponents: "#d57aba",
        tailwind: "#38bdf8",
        react: "#61dafb",
        css: "#2862e9",
      },
    },
    fontFamily: {
      display: ["Bebas Neue", "cursive"],
      roboto: ["Roboto Slab", "serif"],
    },
  },
  plugins: [],
};

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
        text: "#0A0A0A",
        textSecondary: "#333333",
        transparent: "transparent",
      },
    },
    fontFamily: {
      display: ["Bebas Neue", "cursive"],
      roboto: ["Roboto Slab", "serif"],
    },
  },
  plugins: [],
};

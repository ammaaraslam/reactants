/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        canvas: "30px 30px",
      },
      backgroundImage: {
        lightCanvas:
          "linear-gradient(to right, rgba(33, 39, 56, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(33, 39, 56, 0.06) 1px, transparent 1px)",
        darkCanvas:
          "linear-gradient(to right, rgba(244, 246, 255, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(244, 246, 255, 0.06) 1px, transparent 1px)",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      boxShadow: {
        primaryShadow: "-10px 10px #002c6e",
        secondaryShadow: "-10px 10px #a90f06",
      },
      colors: {
        primary: "#5271ff",
        primaryDark: "#",
        secondary: "#f97068",
        secondaryDark: "#a90f06",
        tertiary: "#E73668",
        background: "#F4F6FF",
        darkBackground: "#212738",
        text: "#FFFFFF",
        darkText: "#000000",
        greyText: "#6b6b6b",
        textSecondary: "#333333",
        transparent: "transparent",
        styledComponents: "#d57aba",
        tailwind: "#38bdf8",
        react: "#61dafb",
        css: "#2862e9",
      },
    },
    fontFamily: {
      display: ["Clash Display", "sans-serif"],
      roboto: ["SF UI Display", "sans-serif"],
    },
  },
  plugins: [],
};

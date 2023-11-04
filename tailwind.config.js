import { MaterialTailwindTheme } from "@material-tailwind/react";
import { transformWithEsbuild } from "vite";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('./carousel1.jpg')",
        service: "url('./carousel2.jpg')",
      },

      transitionProperty: {
        display: "display",
      },
      colors: {
        "primary-blue": "#1181e7",
        "secondary-blue": "#78aed8",
        "primary-gray": "#eff3f6",
        "secondary-gray": "#b4b6b9",
        "primary-orange": "#fa9b14",
        "hover-blue": "#2563EB",
        "hover-green": "#16A34A",
        "hover-red": "#DC2626",
        "hover-yellow": "#CA8A04",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};

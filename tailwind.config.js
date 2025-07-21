/** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar";
import lineClamp from "@tailwindcss/line-clamp";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1700px",
      },
    },
  },
  plugins: [scrollbar, lineClamp],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      colors: {
        gold: "#E6B31E",
        dark: "#1B1B1B",
        charcoal: "#2A2A2A",
        cream: "#F6F1E6",
      },
    },
  },
  plugins: [],
};

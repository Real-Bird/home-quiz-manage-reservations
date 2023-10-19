/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,svg}"],
  theme: {
    extend: {
      colors: {
        default: "#f5f5f4",
        common: "#57534E",
        highlight: "#EC551F",
      },
      boxShadow: {
        custom: "0 2px 10px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};

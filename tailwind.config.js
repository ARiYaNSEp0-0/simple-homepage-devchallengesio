/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#f2f9fe",
          700: "#2a4dd0",
          900: "#223344",
          950: "#111729",
        },
        green: {
          500: "#4ca154",
        },
        stone: {
          400: "#909193",
        },
      },
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "dark-cyan": "#0E8784",
      "dark-grey-blue": "#333D4B",
      "pale-orange": "#FDD6BA",
      "light-cream": "#FEFCF7",
      "grey": "#83888F"
    },
    fontFamily: {
      barlow: ['Barlow', 'sans-serif'],
      Fraunces: ['Fraunces', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};

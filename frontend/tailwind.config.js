/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#41004c",
        secondary: "#e6a930",
        accent: "#fcdb5b",
      },
      fontFamily: {
        cinzel: ["'Cinzel Decorative'", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

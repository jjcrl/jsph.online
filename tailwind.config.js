/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neoolive: "#1e3002",
        pinkflame: "#ff005d",
        yellowgreen: "#ffea00",
        ink: "#07020d",
        boyblue: "#2d6bfb",
      },
    },
  },
  plugins: [],
};

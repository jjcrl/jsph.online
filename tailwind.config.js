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
        pale: "#f4f0f2",
        road: "#5e4d5d",
        peachpuff: "#FFDAB9",
        whitesmoke: "#cfcbd9",
        blurple: "#412cff",
        cod: "#181315",
        watermelon: "#fe4b72",
      },
    },
  },
  plugins: [],
  variants: {
    textColor: ["odd", "even"],
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 20s linear infinite",
        marquee2: "marquee2 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },

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
        mustard: "#D4C951",
      },
      letterSpacing: {
        superwide: "0.35em",
      },
    },
  },
  plugins: [],
  variants: {
    textColor: ["odd", "even"],
  },
};

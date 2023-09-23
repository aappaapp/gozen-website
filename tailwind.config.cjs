const Color = require("color");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: {
          100: "#C84BFB",
          200: "#B83BFB",
          300: "#A82BEB",
          400: "#981BDB",
          500: "#880BCB",
          600: "#780BBB",
          700: "#680BAB",
          800: "#580B9B",
          900: "#480B8B",
        },
        clear: "#000000",
        background: "#232323",
        secondary: "#353535",
        primary: "#595959",
        text: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

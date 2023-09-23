const Color = require("color");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: "#880BCB",
        "accent-light": "#981BDB",
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

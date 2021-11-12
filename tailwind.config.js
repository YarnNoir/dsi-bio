const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? "build" : "watch";

module.exports = {
  prefix: "",
  mode: "jit",
  purge: {
    content: ["./src/**/*.{html,ts,css,scss,sass,less,styl}"],
  },
  darkMode: "class",
  // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "trans-white": "rgba(255, 255, 255, 0.2)",
        "trans-black": "rgba(10, 10, 10, 0.2)",
        "ripple-white": `rgba(255, 255, 255, 0.1)`,
        "ripple-black": `rgba(0, 0, 0, 0.1)`,
        "discord-blurple": "#5865F2",
        "trakteer-red": "#BF202F",
        "saweria-yellow": "#EFA02E",
      },
      boxShadow: {
        dark: "0 4px 6px -1px rgba(255, 255, 255, 0.3), 0 2px 4px -1px rgba(255, 255, 255, 0.4)",
      },
      dropShadow: {
        dark: "0 4px 3px rgba(255, 255, 255, 0.4)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};

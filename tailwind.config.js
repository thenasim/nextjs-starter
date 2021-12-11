const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: [...fontFamily.sans],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "var(--color-white)",
        black: "var(--color-black)",
        neutral: colors.neutral,

        body: {
          main: "var(--body-main)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

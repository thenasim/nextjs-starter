const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue) {
      return `hsla(var(${variableName}), ${opacityValue})`;
    }
    return `hsl(var(${variableName}))`;
  };
}

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: [...fontFamily.sans],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: withOpacity("--color-white"),
      black: withOpacity("--color-black"),

      gray: {
        50: withOpacity("--color-gray-50"),
        100: withOpacity("--color-gray-100"),
        200: withOpacity("--color-gray-200"),
        300: withOpacity("--color-gray-300"),
        400: withOpacity("--color-gray-400"),
        500: withOpacity("--color-gray-500"),
        600: withOpacity("--color-gray-600"),
        700: withOpacity("--color-gray-700"),
        800: withOpacity("--color-gray-800"),
        900: withOpacity("--color-gray-900"),
      },

      body: {
        primary: withOpacity("--body-primary"),
        "primary-2": withOpacity("--body-primary-2"),
        "primary-3": withOpacity("--body-primary-3"),

        "primary-inverse": withOpacity("--body-primary-inverse"),
        "primary-inverse-2": withOpacity("--body-primary-inverse-2"),
        "primary-inverse-3": withOpacity("--body-primary-inverse-3"),
      },

      txt: {
        primary: withOpacity("--txt-primary"),
        "primary-2": withOpacity("--txt-primary-2"),
        "primary-3": withOpacity("--txt-primary-3"),
      },

      // Tailwind colors
      blue: colors.blue,
      cyan: colors.cyan,
      sky: colors.sky,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

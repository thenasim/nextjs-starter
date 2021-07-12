function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`;
    }
    return `hsl(var(${variableName}))`;
  };
}

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      // ? Text
      textColor: {},

      // ? Background
      backgroundColor: {
        body: {
          light: withOpacity("--bg-body-light"),
          dark: withOpacity("--bg-body-dark"),
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

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
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        body: withOpacity("--body"),
      },
      textColor: {},
      backgroundColor: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

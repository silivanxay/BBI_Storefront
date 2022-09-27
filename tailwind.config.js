const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    // This is not present inside the default configuration
    // but it's good to build your production application
    // Read more about this here: https://tailwindcss.com/docs/installation#building-your-css
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./elements/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@vechaiui/core")({
      colors: ["orange"],
      cssBase: true,
    }),
  ],
};

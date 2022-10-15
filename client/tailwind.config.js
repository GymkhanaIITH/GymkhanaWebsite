const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#190D57",
        "custom-red": "#FF3B43",
        "custom-green": "#07CEBB",
      },
      screens: {
        ...defaultTheme.screens,
        xs: "540px",
      },
    },
  },
  plugins: [],
};

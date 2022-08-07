const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        ...defaultTheme.screens,
        'xs':'540px',
      },
    },
  },
  plugins: [],
};

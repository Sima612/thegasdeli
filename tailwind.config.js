/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "640",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [require("@tailwindcss/forms")],
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        "sm-xs": { max: "499px" },
      },
    },
  },
  plugins: [],
};

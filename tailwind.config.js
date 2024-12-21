/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-red": "#eb5058",
        "custom-gray": "#9e9e9e",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        OpenSans: ["Open Sans", "system-ui"],
        Yesteryear: ["Yesteryear", "cursive"],
        "opensans-condensed": ['"OpenSans Condensed"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

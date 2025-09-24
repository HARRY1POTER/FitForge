/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
      },
      colors: {
        blackChocolate: "#1f1f1f",
        orangeWeb: "#FFA500",
        blueGreen10: "#e0f7f5", // example
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          turquoise: "#5ACCCC",
          white: "#FFFFFF",
          "steel-blue": "#335C6E",
          yellow: "#FABD33",
        },
        secondary: {
          "turquoise-light": "#CFFAFA",
          "orange-red": "#F76434",
          teal: "#4AA088",
          "yellow-dark": "#FAAD00",
          "turquoise-dark-1": "#53C2C2",
          "turquoise-dark-2": "#28B8B8",
          "orange-pastel": "#FFE6DC",
        },
      },
    },
  },
  plugins: [],
};

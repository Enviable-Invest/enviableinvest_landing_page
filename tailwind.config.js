/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: "#0057FF",
        mainLight: "#F0F5FF",
        mainDark: "#2C2643",
      },
    },
    screens: {
      sm: "480px",

      md: "768px",

      lg: "992px",
      xl: "1200px",
    },
  },
  plugins: [],
};

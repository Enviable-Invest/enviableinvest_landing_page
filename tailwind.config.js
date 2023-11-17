/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: "#124EC5",
        mainLight: "#F0F5FF",
        mainDark: "#001A52",
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

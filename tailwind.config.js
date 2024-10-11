/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7a5ae1",
        secondary: "#959494",
        white: "#fff",
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', "sans-serif"],
      },
      lineHeight: {
        normal: "65px",
        subheading: "30px",
      },
    },
  },
  plugins: [],
};

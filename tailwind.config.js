/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          start: "#1168B5",
          end: "#4ED5E2",
        },
        secondary: "#38404A",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(to right, #1168B5, #4ED5E2)",
      },
    },
  },
  plugins: [],
};

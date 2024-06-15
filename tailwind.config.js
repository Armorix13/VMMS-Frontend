/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "350px", max: "767px" },
    },
    extend: {},
  },
  plugins: [],
};

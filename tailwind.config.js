/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],

  theme: {
    extend: {
      colors: {
        Dark_cyan: "hsl(158,36%,37%)",
        hover_Dark_cyan: "hsl(158,36%,20%)",
        Cream: "hsl(30,38%,92%)",
        Very_dark_blue: "hsl(212,21%,14%)",
        Dark_grayish_blue: "hsl(228,12%,48%)",
        White: "hsl(0,0%,100%)",
      },
    },
  },
  plugins: [],
};

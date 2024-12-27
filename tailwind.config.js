/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        Playfair: ["Playfair", "sans-serif"],
      },
      colors: {
        primary: {
          red: "#DB4444",
        },
      },
    },
  },
  plugins: [],
};

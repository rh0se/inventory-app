/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Inter","sans-serif"]
      },
      colors:{
        navBg: "#F2F4F7",
        offwhite: "#F5F7FA",
        navfont: "#0A1853",
        heroBg: "#2E3A6E",
        dialogbg: "#576378"
      }
    },
  },
  plugins: [],
};



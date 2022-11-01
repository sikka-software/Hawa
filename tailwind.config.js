/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      plex: ["IBM Plex Sans Arabic"]
    },
    extend: {
      colors: {
        primary: {
          200: "#C4DEFD",
          300: "#9CC7FC",
          400: "#74B1FB",
          500: "#3d93f9",
          600: "#065CC6",
          700: "#065CC6",
          800: "#054A9E",
          900: "#043777"
        }
      }
    }
  },
  plugins: []
};

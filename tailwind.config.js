/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      plex: ["IBM Plex Sans Arabic"]
    },
    extend: {
      transitionProperty: {
        height: "height"
      },
      keyframes: {
        collapse: {
          "0%,100%": { transform: "scaleY(0)" },
          "10%": { transform: "scaleY(0)" },
          "20%": { transform: "scaleY(0)" },
          "30%": { transform: "scaleY(0)" },
          "40%": { transform: "scaleY(0)" },
          "50%": { transform: "scaleY(0)" },
          "60%": { transform: "scaleY(0)" },
          // "100%": { transform: "scaleY(1)" },
        }
      },
      animation: {
        collapsing: "collapse"
      },
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

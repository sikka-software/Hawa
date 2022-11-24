/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      plex: ["IBM Plex Sans Arabic"]
    },
    extend: {
      screens: {
        xs: "440px"
      },
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
          "60%": { transform: "scaleY(0)" }
          // "100%": { transform: "scaleY(1)" },
        },
        expandDown: {
          "0%": {
            // opacity: 0,
            "max-height": 0,
            height: 0
          },
          "100%": {
            // opacity: 1,
            "max-height": 100
          }
        },
        expandUp: {
          "0%": {
            // opacity: 1,
            maxHeight: 100
          },
          "100%": {
            // opacity: 0,
            maxHeight: 0,
            height: 0
          }
        }
      },

      animation: {
        collapse: "collapse",
        expandDown: "expandDown 100ms linear",
        expandUp: "expandUp 100ms linear"
      },
      colors: {
        primary: {
          default: "#1279F8",
          200: "#C4DEFD",
          300: "#9CC7FC",
          400: "#74B1FB",
          500: "#3d93f9",
          600: "#065CC6",
          700: "#065CC6",
          800: "#054A9E",
          900: "#043777"
        },
        secondary: {
          default: "#A3D039",
          200: "#E0EFBD",
          300: "#D1E89C",
          400: "#C2E07B",
          500: "#ABD449",
          600: "#99C62F",
          700: "#66841F",
          800: "#59741B",
          900: "#405313"
        }
      }
    }
  },
  plugins: []
};

/** @type {import('tailwindcss').Config} */
// const Color = require("color");

// const themeColors = {
//   buttonPrimar
// }
// const alpha = (clr, val) => Color(clr).alpha(val).rgb().string();
// const lighten = (clr, val) => Color(clr).lighten(val).rgb().string();
// const darken = (clr, val) => Color(clr).darken(val).rgb().string();
const BUTTON_PRIMARY = "#C62E65";
const LAYOUT_PRIMARY = "#EEF7FC";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      plex: ["IBM Plex Sans Arabic"]
    },
    // colors: {
    //   buttonPrimary: "--button-primary",
    //   buttonSecondary: "rgb(var(--button-secondary) / <alpha-value>)"
    // },

    extend: {
      boxShadow: {
        neobrutalism: "10px 10px 0px 0px rgba(0,0,0,1);"
      },
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
            // maxHeight: 0,
            height: "0px"
          },
          "100%": {
            // opacity: 1,
            // maxHeight: 100,
            height: "15rem"
          }
        },
        expandUp: {
          "0%": {
            // opacity: 1,
            // maxHeight: 100,
            height: "15rem"
          },
          "100%": {
            // opacity: 0,
            // maxHeight: 0,
            height: "0rem"
          }
        }
      },

      animation: {
        collapse: "collapse",
        expandDown: "expandDown 500ms ease-in-out",
        expandUp: "expandUp 100ms ease-in-out"
      },
      colors: {
        buttonPrimary: {
          lighter: "#edebfd",
          default: "var(--button-primary)",
          darker: "#3929b0",
          1000: "#C4DEFD"

          // #f6f5fe
          // #edebfd lighter
          // #d2cdfa
          // #b7aff7
          // #8273f1
          // #4c37eb default
          // #4432d4
          // #3929b0 700 (darker)
          // #2e218d
          // #251b73
        },
        layoutPrimary: {
          // default: "#d2cdfa",
          default: "var(--layout-primary)",
          darker: "#b7aff7",
          dark: "#251b73",
          1000: "#C4DEFD"
        },
        inputPrimary: {
          default: "#EEF7FC",
          1000: "#C4DEFD"
        },

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
        layout: {
          default: "#9ECDEE",
          100: "#4896DA",
          200: "#58A4E0",
          300: "#65ACE4",
          400: "#74B4E6",
          500: "#81BCE8",
          600: "#90C3EB",
          700: "#9ECDEE",
          800: "#AFD6F1",
          900: "#BEDEF3",
          1000: "#CFE6F6",
          1100: "#DFEDFA",
          1200: "#EEF7FC"
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

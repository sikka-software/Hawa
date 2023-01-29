/** @type {import('tailwindcss').Config} */
// const Color = require("color");
// TODO: figure out why adding the same variable and adding !important in global.css not working for buttons but working for layout
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
      maxWidth: {
        "2xs": "250px"
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
      borderRadius: {
        DEFAULT: "var(--border-radius)"
      },
      colors: {
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
        buttonPrimary: {
          lighter: "#edebfd",
          500: "var(--button-primary-500)",
          700: "var(--button-primary-700)",
          1000: "#C4DEFD"
        },
        buttonSecondary: {
          default: "var(--button-secondary)",
          darker: "var(--button-secondary-darker)",
          dark: "#251b73"
          // 1000: "#C4DEFD"
        },
        layoutPrimary: {
          300: "var(--layout-primary-300)",
          500: "var(--layout-primary-500)",
          darker: "#b7aff7",
          dark: "#251b73",
          1000: "#C4DEFD"
        },
        inputPrimary: {
          default: "#EEF7FC",
          1000: "#C4DEFD"
        }
      }
    }
  },
  plugins: []
};

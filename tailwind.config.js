/** @type {import('tailwindcss').Config} */

const BUTTON_PRIMARY = "#C62E65";
const LAYOUT_PRIMARY = "#EEF7FC";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    fontFamily: {
      plex: ["IBM Plex Sans Arabic"]
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      boxShadow: {
        neobrutalism: "5px 5px 0px 0px rgba(0,0,0,1);",
        dark: "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)"
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
        },
        blink: {
          "0%": {
            opacity: "0.2"
          },
          "50%": {
            opacity: "1"
          },
          "100%": {
            opacity: " 0.2"
          }
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: "translateY(-2px)" },
          to: { opacity: 1, transform: "translateY(0)" }
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: "translateX(2px)" },
          to: { opacity: 1, transform: "translateX(0)" }
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: "translateY(2px)" },
          to: { opacity: 1, transform: "translateY(0)" }
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: "translateX(-2px)" },
          to: { opacity: 1, transform: "translateX(0)" }
        }
      },
      animation: {
        blink: "blink 2s infinite ease-in-out",

        collapse: "collapse",
        expandDown: "expandDown 500ms ease-in-out",
        expandUp: "expandUp 100ms ease-in-out",
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)"
      },
      // borderRadius: {
      //   DEFAULT: "var(--border-radius)",
      //   inner: "var(--border-radius-inner)"
      // },
      borderRadius: {
        inner: "var(--radius-inner)",
        DEFAULT: "var(--radius)",
        xl: `calc(var(--radius) + 4px)`,
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)"
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },

        blackA: {
          1: "hsla(0, 0%, 0%, 0.012)",
          2: "hsla(0, 0%, 0%, 0.024)",
          3: "hsla(0, 0%, 0%, 0.055)",
          4: "hsla(0, 0%, 0%, 0.078)",
          5: "hsla(0, 0%, 0%, 0.106)",
          6: "hsla(0, 0%, 0%, 0.133)",
          7: "hsla(0, 0%, 0%, 0.169)",
          8: "hsla(0, 0%, 0%, 0.267)",
          9: "hsla(0, 0%, 0%, 0.447)",
          10: "hsla(0, 0%, 0%, 0.498)",
          11: "hsla(0, 0%, 0%, 0.608)",
          12: "hsla(0, 0%, 0%, 0.875)"
        },
        mauve: {
          1: "hsl(300, 26.0%, 99.0%)",
          2: "hsl(270, 20.0%, 98.0%)",
          3: "hsl(267, 13.8%, 95.3%)",
          4: "hsl(265, 12.2%, 92.7%)",
          5: "hsl(263, 11.6%, 90.3%)",
          6: "hsl(261, 11.1%, 87.7%)",
          7: "hsl(257, 10.8%, 84.3%)",
          8: "hsl(249, 10.4%, 75.5%)",
          9: "hsl(252, 6.0%, 57.3%)",
          10: "hsl(250, 5.0%, 52.3%)",
          11: "hsl(252, 5.0%, 40.7%)",
          12: "hsl(260, 10.0%, 13.5%)"
        },
        violet: {
          1: "hsl(255, 65.0%, 99.4%)",
          2: "hsl(252, 100%, 99.0%)",
          3: "hsl(252, 96.9%, 97.4%)",
          4: "hsl(252, 91.5%, 95.5%)",
          5: "hsl(252, 85.1%, 93.0%)",
          6: "hsl(252, 77.8%, 89.4%)",
          7: "hsl(252, 71.0%, 83.7%)",
          8: "hsl(252, 68.6%, 76.3%)",
          9: "hsl(252, 56.0%, 57.5%)",
          10: "hsl(251, 48.1%, 53.5%)",
          11: "hsl(250, 43.0%, 48.0%)",
          12: "hsl(250, 43.0%, 26.0%)"
        },

        buttonPrimary: {
          300: "hsl(var(--button-primary-300))",
          500: "hsl(var(--button-primary-500))",
          700: "hsl(var(--button-primary-700))"
        },
        buttonSecondary: {
          300: "var(--button-secondary-300)",
          500: "var(--button-secondary-500)",
          700: "var(--button-secondary-700)"
        },
        layoutPrimary: {
          300: "var(--layout-primary-300)",
          500: "var(--layout-primary-500)",
          600: "var(--layout-primary-600)",
          700: "var(--layout-primary-700)",
          // 700: "#b7aff7",
          dark: "#251b73",
          1000: "#C4DEFD"
        },
        inputPrimary: {
          500: "#EEF7FC",
          1000: "#C4DEFD"
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

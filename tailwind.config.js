/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],

  theme: {
    fontFamily: {
  
      'plex': ["IBM Plex Sans Arabic"],
    },
    extend: {}
  },
  plugins: [require("flowbite/plugin")]
};

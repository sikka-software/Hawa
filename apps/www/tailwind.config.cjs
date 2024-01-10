const baseConfig = require("../../packages/components/tailwind.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseConfig,
  prefix: null,
  content: [
    ...baseConfig.content,
    "../../packages/components/**/*.{js,ts,jsx,tsx,mdx}",
    "content/**/*.mdx",
    "registry/**/*.{ts,tsx}"
  ]
};

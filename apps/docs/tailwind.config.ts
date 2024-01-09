import type { Config } from "tailwindcss";

const baseConfig = require("../../packages/components/tailwind.config");

const config: Config = {
  ...baseConfig,
  content: [
    ...baseConfig.content,
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ]
};
export default config;

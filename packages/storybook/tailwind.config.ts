import type { Config } from "tailwindcss";

const baseConfig = require("../components/tailwind.config");

const config: Config = {
  ...baseConfig,
  content: [
    ...baseConfig.content,
    "../components/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/*.{js,ts,jsx,tsx,mdx}",
  ],
};
export default config;

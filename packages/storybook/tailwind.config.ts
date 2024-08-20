import type { Config } from "tailwindcss";

const baseConfig = require("../components/tailwind.config");

const config: Config = {
  ...baseConfig,
  content: [
    ...baseConfig.content,
    "../components/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/*.{js,ts,jsx,tsx,mdx}",
    "!./node_modules/**/*", // Exclude node_modules
    "!../components/node_modules/**/*", // Exclude node_modules
  ],
};
export default config;

const hawaConfig = require('../../packages/components/tailwind.config.ts')

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...hawaConfig,
  prefix: null,
  content: [
    ...hawaConfig.content,
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "content/**/*.mdx",
    "registry/**/*.{ts,tsx}",
  ],
}
/** @type {import('next').NextConfig} */

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx"
});
module.exports = withNextra({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sikka-images.s3.ap-southeast-1.amazonaws.com"
      }
    ]
  }
});

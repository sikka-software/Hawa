/** @type {import('next').NextConfig} */

async function loadConfig() {
  const nextraModule = await import("nextra");
  const withNextra = nextraModule.default({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.tsx"
  });

  return withNextra({
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
}

module.exports = loadConfig();

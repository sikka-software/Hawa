import { createContentlayerPlugin } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      {
        protocol: "https",
        hostname: "sikka-images.s3.ap-southeast-1.amazonaws.com"
      }
    ]
  },
  redirects() {
    return [
      {
        source: "/components",
        destination: "/docs/components/accordion",
        permanent: true
      },
      {
        source: "/docs/components",
        destination: "/docs/components/accordion",
        permanent: true
      },
      {
        source: "/examples",
        destination: "/examples/mail",
        permanent: false
      },
      {
        source: "/docs/primitives/:path*",
        destination: "/docs/components/:path*",
        permanent: true
      },

      {
        source: "/docs/forms",
        destination: "/docs/components/form",
        permanent: false
      },
      {
        source: "/docs/forms/react-hook-form",
        destination: "/docs/components/form",
        permanent: false
      }
    ];
  }
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

export default withContentlayer(nextConfig);

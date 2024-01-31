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
        source: "/elements",
        destination: "/docs/elements/accordion",
        permanent: true
      },
      {
        source: "/docs/elements",
        destination: "/docs/elements/accordion",
        permanent: true
      },
      {
        source: "/blocks",
        destination: "/docs/blocks/login-form",
        permanent: true
      },
      {
        source: "/docs/blocks",
        destination: "/docs/blocks/login-form",
        permanent: true
      },
      {
        source: "/layout",
        destination: "/docs/layout/app-layout",
        permanent: true
      },
      {
        source: "/docs/layout",
        destination: "/docs/layout/app-layout",
        permanent: true
      },
      {
        source: "/hooks",
        destination: "/docs/hooks/use-toast",
        permanent: true
      },
      {
        source: "/docs/hooks",
        destination: "/docs/hooks/use-toast",
        permanent: true
      },
      {
        source: "/examples",
        destination: "/examples/mail",
        permanent: false
      },
      {
        source: "/docs/primitives/:path*",
        destination: "/docs/elements/:path*",
        permanent: true
      },

      {
        source: "/docs/forms",
        destination: "/docs/elements/form",
        permanent: false
      },
      {
        source: "/docs/forms/react-hook-form",
        destination: "/docs/elements/form",
        permanent: false
      }
    ];
  }
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

export default withContentlayer(nextConfig);

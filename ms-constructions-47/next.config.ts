import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/apple-touch-icon.png',
        destination: '/Logo%20Ms%20Constructions.png',
        permanent: true,
      },
      {
        source: '/apple-touch-icon-precomposed.png',
        destination: '/Logo%20Ms%20Constructions.png',
        permanent: true,
      },
    ]
  },
  async headers() {
    // Strong cache for static assets (images, fonts). HTML caching control is handled via middleware in development.
    return [
      {
        // Cache common image types aggressively
        source: "/:all*(png|jpg|jpeg|gif|webp|avif|svg)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Cache fonts aggressively
        source: "/:all*(woff|woff2|ttf|otf|eot)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ]
  },
};

export default nextConfig;

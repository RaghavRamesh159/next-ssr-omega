import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "**.unsplash.com" }],
  },
};

export default nextConfig;

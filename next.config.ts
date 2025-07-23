import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-7ddfd5cf9541446c8d9caa4c53b1cbb5.r2.dev"
      },
      {
        protocol: "https",
        hostname: "cdn.hashnode.com"
      }
    ]
  }
};

export default nextConfig;

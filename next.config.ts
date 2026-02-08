import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/llms-full.txt",
        destination: "/llms.txt",
      },
    ];
  },
};

export default nextConfig;

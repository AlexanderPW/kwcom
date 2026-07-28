import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i0.wp.com",
        pathname: "/kelseywaldrop.com/**",
      },
      {
        protocol: "https",
        hostname: "kelseywaldrop.com",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      remotePatterns: [new URL('https://www.superherodb.com/**')],
    },
 
};

export default nextConfig;

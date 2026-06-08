import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true, // GitHub Pages doesn't support the Next.js optimization server
  },
};

export default nextConfig;

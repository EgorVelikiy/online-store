import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/online-store',
  devIndicators: false,

  typedRoutes: true,

  images: {
    unoptimized: true,
    remotePatterns: [
    ],
  },
};

export default nextConfig;

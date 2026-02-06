import type { NextConfig } from "next";
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Add empty turbopack config to silence the warning
  turbopack: {},
  // Keep webpack config for compatibility
  webpack(config: Configuration) {
    config.module = config.module || { rules: [] };
    config.module.rules = config.module.rules || [];
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
}

export default nextConfig;
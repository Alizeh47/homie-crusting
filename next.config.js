/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable swcMinify for better performance
  swcMinify: true,
  // Keep type checking but enable build-time optimizations
  typescript: {
    // Don't ignore build errors
    ignoreBuildErrors: false,
  },
  eslint: {
    // Don't ignore eslint errors during build
    ignoreDuringBuilds: false,
  },
  // Enable webpack caching for faster builds
  webpack: (config) => {
    // Enable caching
    config.cache = true;
    return config;
  },
  // Directory configuration
  distDir: '.next',
  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig; 
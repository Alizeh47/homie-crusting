/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
    typedRoutes: true,
  },
  // TypeScript and ESLint configurations
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer, dev }) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };

    // Optimize module resolution
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@': require('path').resolve(__dirname, './src'),
      },
      fallback: {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
      },
    };

    return config;
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimize caching for production
  onDemandEntries: {
    maxInactiveAge: process.env.NODE_ENV === 'production' ? 60 * 60 * 1000 : 60 * 1000,
    pagesBufferLength: process.env.NODE_ENV === 'production' ? 5 : 2,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
};

module.exports = nextConfig; 
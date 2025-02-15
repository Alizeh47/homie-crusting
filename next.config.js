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
    optimizeCss: false,
    typedRoutes: false,
  },
  // TypeScript and ESLint configurations
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer, dev }) => {
    // Add support for importing markdown files
    config.module = {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.md$/,
          use: 'raw-loader',
        },
      ],
    };

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
    maxInactiveAge: 60 * 60 * 1000, // 1 hour
    pagesBufferLength: 5,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  distDir: '.next',
  cleanDistDir: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  trailingSlash: false,
  output: 'standalone',
};

module.exports = nextConfig; 
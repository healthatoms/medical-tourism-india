const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  
  // Force HTTPS redirect
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http'
          }
        ],
        destination: 'https://lightgreen-snail-6883o3.hostingersite.com/:path*',
        permanent: true,
      }
    ]
  },

  // Image optimization
  images: {
    domains: ['img.youtube.com', 'youtube.com', 'yourdomain.com'],
    formats: ['image/avif', 'image/webp'],
  },

  // Compression
  compress: true,
  swcMinify: true,

  // Production optimizations
  productionBrowserSourceMaps: false,
};

module.exports = withNextIntl(nextConfig);

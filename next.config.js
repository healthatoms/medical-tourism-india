const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  
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

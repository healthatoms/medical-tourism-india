const withNextIntl = require('next-intl/config');

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
  
  // Headers for performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ];
  },

  // i18n
  i18n: {
    locales: [
      'en', 'es', 'fr', 'de', 'hi', 'ta', 'te', 'kn', 'ml',
      'ha', 'yo', 'ig', 'ff', 'sw', 'ki', 'lu', 'lo',
      'am', 'om', 'ti', 'so', 'lg', 'nyn', 'ach',
      'ak', 'ee', 'gaa', 'dag', 'zu', 'xh', 'af',
      'nso', 'tn', 'st', 'ts', 'ss', 've', 'nr', 'ar', 'nu'
    ],
    defaultLocale: 'en',
  },
};

module.exports = withNextIntl()(nextConfig);
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

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
        destination: 'https://antiquewhite-cat-424285.hostingersite.com/:path*',
        permanent: true,
      }
    ]
  },

  // Image optimization
  images: {
    domains: ['img.youtube.com', 'youtube.com', 'yourdomain.com'],
    formats: ['image/avif', 'image/webp'],
  },

  compress: true,
  swcMinify: true,

  productionBrowserSourceMaps: false,
};

module.exports = withNextIntl(nextConfig);

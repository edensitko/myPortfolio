/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['cdn.jsdelivr.net', 'firebasestorage.googleapis.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  trailingSlash: true,
  // Remove assetPrefix for Firebase hosting
  assetPrefix: '',
};

module.exports = nextConfig;

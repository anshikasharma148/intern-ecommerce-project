/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  experimental: {
    nextScriptWorkers: true,
  },
  images: {
    deviceSizes: [320, 450, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [
      16, 32, 48, 64, 96, 128, 196, 256, 300, 392, 512, 640, 750, 828, 1080,
    ],
    domains: ['d3fnp5f2rq7t40.cloudfront.net'], // Add your allowed domains here
  },
};

module.exports = nextConfig;

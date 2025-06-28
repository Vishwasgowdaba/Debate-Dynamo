/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['code.responsivevoice.org'],
  },
  // Enable React Strict Mode
  reactStrictMode: true,
};

module.exports = nextConfig;
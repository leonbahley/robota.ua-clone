/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["company-logo-frankfurt.rabota.ua", "images.cf-rabota.com.ua"],
  },
};

module.exports = nextConfig;

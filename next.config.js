/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.clerk.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

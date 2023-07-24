/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s3.amazonaws.com', 'punks2023.s3.amazonaws.com'],
  }
}

module.exports = nextConfig

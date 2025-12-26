/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Entangle',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // If your repository name is not 'username.github.io', uncomment and set the basePath
  // basePath: '/your-repo-name',
  // trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure basePath is properly set for GitHub Pages
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // Ensure assetPrefix is properly set for GitHub Pages
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // This is needed to make the build work properly with GitHub Pages
  reactStrictMode: true,
}

module.exports = nextConfig

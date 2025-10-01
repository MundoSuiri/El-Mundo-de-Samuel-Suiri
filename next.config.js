/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['samuelsuiri.info'],
  },
  async rewrites() {
    return [
      {
        source: '/wp-content/:path*',
        destination: 'https://samuelsuiri.info/wp-content/:path*',
      },
    ];
  },
}

module.exports = nextConfig

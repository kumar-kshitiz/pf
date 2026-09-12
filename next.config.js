/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{
      source: '/:path*',
      has: [{ type: 'host', value: 'www.kshitizkumar.in' }],
      destination: 'https://kshitizkumar.in/:path*',
      permanent: true,
    }]
  },
  async headers() {
    return [{
      source: '/api/:path*',
      headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
    }]
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
}

module.exports = nextConfig

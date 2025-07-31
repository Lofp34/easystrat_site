/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'easystrat.com'],
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
  
  // SEO redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 
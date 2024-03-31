/** @type {import('next').NextConfig} */
// http://books.google.com/books/content
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hips.hearstapps.com',
        port: '',
        pathname: '/vader-prod.s3.amazonaws.com/**',
      },
      {
        protocol: 'https',
        hostname: 'books.google.com',
        port: '',
        pathname: '/books',
      }
    ],
  },
};

export default nextConfig;

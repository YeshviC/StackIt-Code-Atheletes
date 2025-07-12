/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fra.cloud.appwrite.io', // ✅ Appwrite's file CDN
        pathname: '/v1/storage/**',
      },
    ],
  }
};

export default nextConfig;

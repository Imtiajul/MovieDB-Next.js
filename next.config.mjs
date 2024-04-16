/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: 'http://localhost:3000',
  },
   images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'image.tmdb.org',
          port: '',
        },
      ],
    },
};

export default nextConfig;

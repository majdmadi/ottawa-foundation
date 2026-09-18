/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // All imagery is local for now. Add remote hosts here if the client
    // later serves photos from a CDN.
    remotePatterns: [],
  },
};

export default nextConfig;

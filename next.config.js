/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "www.svgrepo.com", "res.cloudinary.com"],
  },
  outDir: 'out'
};

module.exports = nextConfig;

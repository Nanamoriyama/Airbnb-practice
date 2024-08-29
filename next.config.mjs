/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "virmjpqxaajeqwjohjll.supabase.co",
      },
      {
        protocol: "https",
        hostname: "rwlxagwpzfrixtwzflfg.supabase.co", // Add this line
      },
    ],
  },
};

export default nextConfig;

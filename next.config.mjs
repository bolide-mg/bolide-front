/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "aajtbtajgvmlllzfncdp.supabase.co",
      },
    ],
  },
};

export default nextConfig;

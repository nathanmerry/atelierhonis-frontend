/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  settings: {
    cors: {
      enabled: true,
      origin: "*",
    },
  },
  images: {
    domains: ["localhost", "127.0.0.1"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;

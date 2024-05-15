/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  distDir: "docs",
  assetPrefix: isProd ? "https://saeed-pourmohammadi.github.io/resume" : "/",
};

export default nextConfig;

/** @type {import('next').NextConfig} */

const env = process.env.NODE_ENV;

const nextConfig = {
  basePath: "/resume",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
};

if (env == "development") {
  nextConfig.basePath = "";
}

export default nextConfig;

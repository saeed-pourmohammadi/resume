/** @type {import('next').NextConfig} */

const env = process.env.NODE_ENV;

const nextConfig = {
  basePath: env === 'development' ? '' : '/resume',
  output: 'export',
  reactStrictMode: true
};

export default nextConfig;

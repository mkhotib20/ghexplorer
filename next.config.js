const withGraphQL = require("next-plugin-graphql");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["antd"],
};

module.exports = withGraphQL(nextConfig);

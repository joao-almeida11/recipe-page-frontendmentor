import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/recipe-page-frontendmentor" : "",
  assetPrefix: isProd ? "/recipe-page-frontendmentor/" : "",
};

export default nextConfig;

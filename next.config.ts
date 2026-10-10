import type { NextConfig } from "next";

const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
};

export default config;

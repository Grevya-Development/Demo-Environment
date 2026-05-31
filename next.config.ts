import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Next doesn't pick up a stray
  // lockfile higher up the tree.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

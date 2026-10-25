import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build to plain HTML/CSS/JS in ./out — no Node process needed at runtime.
  // Served by Cloudflare Pages. Client-side JS and animations are unaffected.
  output: "export",

  // next/image optimisation needs a server; static export can't do it.
  images: { unoptimized: true },

  // Serve /about as /about/index.html so static hosts resolve clean URLs.
  trailingSlash: true,

  experimental: {
    // Animated page-to-page navigation via React's <ViewTransition>
    viewTransition: true,
  },
};

export default nextConfig;

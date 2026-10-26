/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // CraftiMe was renamed MakeMories; older app builds still link to /craftime/.
    return [
      { source: "/craftime/terms", destination: "/makemories/terms", statusCode: 301 },
      { source: "/craftime/privacy", destination: "/makemories/privacy", statusCode: 301 },
    ];
  },
  async rewrites() {
    // Standalone research pages live in public/ as self-contained HTML; serve them at their folder path.
    return [
      { source: "/research/numpy-to-rust-eval", destination: "/research/numpy-to-rust-eval/index.html" },
    ];
  },
};

export default nextConfig;

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
};

export default nextConfig;

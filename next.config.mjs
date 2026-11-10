/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // CraftiMe was renamed MakeMories; older app builds still link to /craftime/.
    return [
      { source: "/craftime/terms", destination: "/makemories/terms", statusCode: 301 },
      { source: "/craftime/privacy", destination: "/makemories/privacy", statusCode: 301 },
      // The talk directory first shipped under a broader name; keep the old links working.
      { source: "/writing/aaif-talk-directory", destination: "/writing/agntcon-mcpcon-na-2026-talks", statusCode: 301 },
      { source: "/writing/aaif-talk-directory.md", destination: "/writing/agntcon-mcpcon-na-2026-talks.md", statusCode: 301 },
      { source: "/writing/aaif-talk-directory-full.md", destination: "/writing/agntcon-mcpcon-na-2026-talks-full.md", statusCode: 301 },
    ];
  },
  async rewrites() {
    // Standalone research pages live in public/ as self-contained HTML; serve them at their folder path.
    return [
      { source: "/research/numpy-to-rust-eval", destination: "/research/numpy-to-rust-eval/index.html" },
      // Branded URL for the LearnAboutAlpha MCP server (Streamable HTTP), proxied to Cloud Run.
      { source: "/LearnAboutAlpha/mcp", destination: "https://learningfocused-mcp-bfkatxntfq-uw.a.run.app/mcp" },
    ];
  },
};

export default nextConfig;

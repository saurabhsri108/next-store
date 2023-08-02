/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    nextScriptWorkers: true,
  },
  async rewrites() {
    return [
      {
        source: "/party-proxy",
        destination: `https://www.googletagmanager.com/debug/bootstrap?id=GTM-NC987FC`,
      },
    ]
  },
}

module.exports = nextConfig

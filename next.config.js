/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // domain: ["picsum.photos"],
        hostname: "**",
      },
    ],
  },
  env: {
    REACT_APP_API_TOKEN: process.env.REACT_APP_API_TOKEN,
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
    REACT_APP_UPLOAD_URL: process.env.REACT_APP_UPLOAD_URL,
  },
  async rewrites() {
    return [
      {
        source: "/products/clothes",
        destination: "/products/1",
      },
      {
        source: "/products/accessories",
        destination: "/products/2",
      },
    ];
  }
};

module.exports = nextConfig;

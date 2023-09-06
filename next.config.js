// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "store.storeimages.cdn-apple.com",
        port: "",
        pathname: "/4982/as-images.apple.com/is/military-landing-202209",
      },
      {
        protocol: "https",
        hostname: "m-cdn.phonearena.com",
        port: "",
        pathname:
          "/images/hub/216-wide-two_1200/iPhone-15-release-date-predictions-price-specs-and-must-know-features.webp",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "applemagazine.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;

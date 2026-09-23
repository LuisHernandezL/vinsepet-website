import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    // Required because the app has multiple root layouts (`app/[lang]` and
    // `app/(redirect)`), so there is no single layout to render a 404 inside.
    globalNotFound: true,
  },
};

export default nextConfig;

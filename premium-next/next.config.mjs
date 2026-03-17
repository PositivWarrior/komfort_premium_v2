/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes are handled correctly for static hosting if needed,
  // typically 'export' handles index.html fine, but sometimes trailingSlash: true helps.
  // We'll stick to defaults first unless issues arise.
};

export default nextConfig;

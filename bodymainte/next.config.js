/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",              // ★必須（SSG）
    images: {
      unoptimized: true,            // ★GitHub Pages対策
    },
    basePath: "/Bodymainte",      // ★必須
  };
  
  module.exports = nextConfig;
  
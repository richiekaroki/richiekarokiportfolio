/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {},
    experimental: {
        optimizePackageImports: ['lucide-react', 'react-icons', 'framer-motion'],
    },
}

module.exports = nextConfig

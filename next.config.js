/** @type {import('next').NextConfig} */
const nextConfig = {
    serverExternalPackages: [
        '@react-email/render',
    ],
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.cache = {
                type: 'filesystem',
                maxMemoryGenerations: 1,
            };
        }
        return config;
    },
}

module.exports = nextConfig

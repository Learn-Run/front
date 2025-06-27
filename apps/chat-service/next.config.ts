import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    basePath: '/chat',
    assetPrefix: '/chat',
    images: {
        remotePatterns: [new URL('https://picsum.photos/**')],
    },
};

export default nextConfig;

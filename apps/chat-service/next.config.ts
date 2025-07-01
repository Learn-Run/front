import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    basePath: '/chat',
    assetPrefix: '/chat',
    images: {
        remotePatterns: [
            new URL('https://picsum.photos/**'),
            new URL('https://randomuser.me/**'),
        ],
    },
};

export default nextConfig;

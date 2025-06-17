import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            new URL('https://picsum.photos/**'),
            new URL('https://cdn.pixabay.com/**'),
            new URL('https://pick-learn.s3.ap-northeast-2.amazonaws.com/**'),
        ],
    },
};

export default nextConfig;

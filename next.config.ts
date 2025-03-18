import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.classbon.com',
            },
            {
                protocol: 'https',
                hostname: 'classbon-blog.s3.ir-thr-at1.arvanstorage.com',
            },
            {
                protocol: 'https',
                hostname: 'classbon-blog.s3.ir-thr-at1.arvanstorage.ir',
            },
        ],
    },
};

export default nextConfig;


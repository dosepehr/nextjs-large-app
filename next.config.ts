import { withNextVideo } from "next-video/process";
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
            {
                protocol: 'https',
                hostname: 'img.daisyui.com',
            },
        ],
    },
};

export default withNextVideo(nextConfig);
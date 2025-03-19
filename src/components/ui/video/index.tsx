'use client';
import React from 'react';
import Player from 'next-video/player';
const Video = ({ src }: { src: string }) => {
    return (
        <div dir='ltr'>
            <Player src={src} poster={'/images/blog.webp'} />
        </div>
    );
};

export default Video;

import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            verify
            <Link href={'/signin'}>signin</Link>
        </div>
    );
};

export default page;

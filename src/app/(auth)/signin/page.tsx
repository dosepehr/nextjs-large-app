import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            sign in
            <Link href={'/verify'} >verify</Link>
        </div>
    );
};

export default page;

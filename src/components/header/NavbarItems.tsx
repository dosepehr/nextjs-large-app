'use client';
import { navigationMenuItems } from '@/utils/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavbarItems = () => {
    const pathname = usePathname();
    return (
        <ul className='flex gap-x-8 mr-12'>
            {navigationMenuItems.map((item, i) => (
                <Link
                    href={item.href}
                    key={i}
                    className={`hover:text-primary pb-2 transition-colors ${
                        pathname == item.href &&
                        'border-b-2 dark:text-primary dark:border-primary/30'
                    }`}
                >
                    {item.title}
                </Link>
            ))}
        </ul>
    );
};

export default NavbarItems;

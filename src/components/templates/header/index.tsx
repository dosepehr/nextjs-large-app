import Image from 'next/image';
import React, { FC } from 'react';
import NavbarItems from './NavbarItems';
import Link from 'next/link';

const Header: FC = () => {
    return (
        <header className='border-b dark:border-base-content'>
            <div className='container flex items-center justify-between'>
                <Link href={'/'}>
                    <Image
                        src={'/icons/logo.svg'}
                        width={100}
                        height={36}
                        alt='classbon'
                    />
                </Link>
                <NavbarItems />
                <div className='mr-auto'>auth</div>
            </div>
        </header>
    );
};

export default Header;

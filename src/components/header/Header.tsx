import Image from 'next/image';
import React, { FC } from 'react';

const Header: FC = () => {
    return (
        <header className='border-b dark:border-base-content'>
            <div className='container flex items-center justify-between lg:bg-red-500'>
                <Image
                    src={'/icons/logo.svg'}
                    width={100}
                    height={36}
                    alt='classbon'
                />
            </div>
        </header>
    );
};

export default Header;

'use client';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import React from 'react';

const Page = () => {
    return (
        <div>
            <h5 className='text-2xl'>ورود | ثبت نام</h5>
            <p className='mt-2'>
                دنیای شگفت انگیز برنامه نویسی در انتظار شماست!
            </p>
            <form className='flex flex-col gap-6 mt-16'>
                <Input theme='primary' placeholder='شماره موبایل' />
                <Button type='submit' theme='primary'>
                    تایید و دریافت کد
                </Button>
            </form>
        </div>
    );
};

export default Page;

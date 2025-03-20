'use client';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import React from 'react';
import { useForm } from 'react-hook-form';
import { SignIn } from './_types/signin.type';

const Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignIn>();

    const onSubmit = (data: SignIn) => {
        console.log(data);
    };

    return (
        <div>
            <h5 className='text-2xl'>ورود | ثبت نام</h5>
            <p className='mt-2'>
                دنیای شگفت انگیز برنامه نویسی در انتظار شماست!
            </p>
            <form
                className='flex flex-col gap-6 mt-16'
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input<SignIn>
                    {...register('mobile', {
                        required: 'شماره موبایل الزامی است',
                        maxLength: {
                            value: 11,
                            message: 'شماره موبایل باید ۱۱ رقم باشد',
                        },
                        minLength: {
                            value: 11,
                            message: 'شماره موبایل باید ۱۱ رقم باشد',
                        },
                    })}
                    theme='primary'
                    placeholder='شماره موبایل'
                    errors={errors}
                    name='mobile'
                />
                <Button type='submit' theme='primary'>
                    تایید و دریافت کد
                </Button>
            </form>
        </div>
    );
};

export default Page;

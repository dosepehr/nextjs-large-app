'use client';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { useCustomMutation } from '@/utils/api/hooks/useCustomMutation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { SignIn } from './_types/signin.type';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm<SignIn>();

    const { mutate, isPending } = useCustomMutation<SignIn>({
        mutationKey: ['signin'],
        url: '/signin',
        method: 'POST',
        onSuccess() {
            router.push(`/verify?mobile=${getValues('mobile')}`);
        },
    });

    const onSubmit = (data: SignIn) => {
        mutate(data);
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
                <Button type='submit' theme='primary' isLoading={isPending}>
                    تایید و دریافت کد
                </Button>
            </form>
        </div>
    );
};

export default Page;

'use client';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { useCustomMutation } from '@/utils/api/hooks/useCustomMutation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Verify } from './_types/verify.type';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm<Verify>();

    const { mutate, isPending } = useCustomMutation<Verify>({
        mutationKey: ['Verify'],
        url: '/verify',
        method: 'POST',
        onSuccess() {
            router.push(`/Verifyrify?mobile=${getValues('mobile')}`);
        },
    });

    const onSubmit = (data: Verify) => {
        console.log(data);
        // mutate(data);
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
                <Input<Verify>
                    {...register('code', {
                        required: 'کد تایید الزامی است',
                        maxLength: {
                            value: 5,
                            message: 'کد تایید باید 5 رقم باشد',
                        },
                        minLength: {
                            value: 5,
                            message: 'کد تایید باید 5 رقم باشد',
                        },
                    })}
                    theme='primary'
                    placeholder='کد تایید'
                    errors={errors}
                    name='code'
                    type='number'
                />
                <Button type='submit' theme='primary' isLoading={isPending}>
                    تایید و دریافت کد
                </Button>
            </form>
        </div>
    );
};

export default Page;

import { CourseSummary } from '@/utils/types/DTOs/course-summary.interface';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import Badge from '../ui/badge';

type CourseCardProps = CourseSummary;

const CourseCard: FC<CourseCardProps> = ({
    coverImageId,
    title,
    subTitle,
    level,
    recordStatus,
    basePrice,
    duration,
    slug,
}) => {
    return (
        <div className='flex flex-col rounded-lg dark:bg-base-50  overflow-hidden'>
            <Image
                src={`https://api.classbon.com/api/picture/${coverImageId!}`}
                alt={title}
                width={550}
                height={327}
            />
            <div className='mt-2 flex gap-2 font-semibold dark:text-info px-3 py-2 p-3 text-sm leading-6'>
                <Badge theme='info' variant='soft'>
                    {recordStatus}
                </Badge>
                <Badge theme='accent' variant='soft'>
                    {level}
                </Badge>
            </div>
            <div className='px-3 pb-2'>
                <Link
                    href={`/course/${slug}`}
                    className='text-lg font-bold text-white/75 hover:text-white transition-colors'
                >
                    {title}
                </Link>
                <p className='my-4 leading-6'>{subTitle}</p>
                <div className='flex items-center justify-between'>
                    <Badge theme='warning' variant='soft'>
                        {duration}
                    </Badge>
                    <Badge theme='success' variant='soft'>
                        {basePrice || 'رایگان'}
                    </Badge>
                </div>
            </div>

            <Link
                className='justify-center p-3 mt-auto font-bold  flex items-center gap-2 py-4 text-current border-t dark:border-base-content dark:border-opacity-10'
                href={`/course/${slug}`}
            >
                مشاهده جزئیات دوره
            </Link>
        </div>
    );
};

export default CourseCard;

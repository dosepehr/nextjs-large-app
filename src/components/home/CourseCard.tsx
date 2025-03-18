import { CourseSummary } from '@/utils/types/DTOs/course-summary.interface';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

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
            <div className='mt-2 flex gap-2 font-semibold dark:text-info px-3 py-2 p-3 flex-col text-sm leading-6'>
                {recordStatus}
                {level}
            </div>
            <div className=''>
                <Link
                    href={`/course/${slug}`}
                    className='text-lg font-bold text-white/75 hover:text-white transition-colors'
                >
                    {title}
                </Link>
                <p>{subTitle}</p>
                <div className='flex items-center justify-between'>
                    {duration}

                    {basePrice}
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

import { BlogSummary } from '@/utils/types/DTOs/blog-summary.interface';
import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Badge from '../ui/badge';
import {
    IconCalendar,
    IconClock,
    IconComment,
    IconEye,
    IconUserProfile,
} from '../icons';

type BlogCardProps = BlogSummary;
const BlogCard: FC<BlogCardProps> = ({
    title,
    slug,
    author,
    postDate,
    numberOfViews,
    numberOfComments,
    studyTime,
}) => {
    return (
        <div className='flex flex-col rounded-lg dark:bg-base-50  overflow-hidden'>
            <Image
                src={`/images/blog.webp`}
                alt={title}
                width={550}
                height={327}
            />
            <div className='px-3 py-2 '>
                <Link
                    href={`/blog/${slug}`}
                    className='font-bold text-white/75 hover:text-white transition-colors'
                >
                    {title}
                </Link>
            </div>
            <div className='flex items-center justify-between mt-auto px-3 py-2 '>
                <Badge theme='info'>
                    <IconUserProfile width={16} height={16} />
                    {author}
                </Badge>
                <Badge theme='neutral' variant='default'>
                    <IconCalendar width={16} height={16} />
                    {postDate}
                </Badge>
            </div>
            <div className='duration-300 justify-between transition-all p-2 font-bold  flex items-center gap-2 py-4 text-current border-t dark:border-base-content dark:border-opacity-10'>
                <div className='flex gap-x-1'>
                    <Badge theme='warning'>
                        <IconEye width={16} height={16} />
                        {numberOfViews}
                    </Badge>
                    <Badge theme='accent'>
                        <IconComment width={16} height={16} />
                        {numberOfComments}
                    </Badge>
                </div>
                <span className='flex items-center gap-1 text-xs'>
                    <IconClock width={16} height={16} />
                    زمان مطالعه : {studyTime} دقیقه
                </span>
            </div>
        </div>
    );
};

export default BlogCard;

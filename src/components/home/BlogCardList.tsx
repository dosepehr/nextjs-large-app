import { BlogSummary } from '@/utils/types/DTOs/blog-summary.interface';
import React, { FC } from 'react';
import BlogCard from './BlogCard';

type BlogCardListProps = {
    blogs: BlogSummary[];
};

const BlogCardList: FC<BlogCardListProps> = ({ blogs }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 container gap-6 mt-10'>
            {blogs.map((blog) => (
                <BlogCard {...blog} key={blog.slug} />
            ))}
        </div>
    );
};

export default BlogCardList;

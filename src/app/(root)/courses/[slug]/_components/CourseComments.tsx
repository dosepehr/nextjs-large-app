'use client';
import { useGet } from '@/utils/api/hooks/useGet';
import React from 'react';
import { CourseCommentList } from '../_types/course-comment.interface';
import Loading from '@/components/ui/loading';
import { useParams } from 'next/navigation';
import Comment from '@/components/ui/comment';

const CourseComments = () => {
    const { slug } = useParams();
    const { data: comments, isLoading } = useGet<CourseCommentList>({
        queryKey: ['courseComments'],
        url: `/courses/${slug}/comments?page=1`,
    });
    if (isLoading) {
        return <Loading />;
    }
    return (
        <div>
            {comments?.data.map((comment) => (
                <Comment {...comment} key={comment.id} />
            ))}
        </div>
    );
};

export default CourseComments;

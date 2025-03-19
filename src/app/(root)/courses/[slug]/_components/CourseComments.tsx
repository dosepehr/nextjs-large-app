'use client';
import React, { Fragment, useEffect } from 'react';
import { CourseCommentList } from '../_types/course-comment.interface';
import Loading from '@/components/ui/loading';
import { useParams } from 'next/navigation';
import Comment from '@/components/ui/comment';
import { useInfinite } from '@/utils/api/hooks/useInfinite';
import { useInView } from 'react-intersection-observer';

const CourseComments = () => {
    const { ref, inView } = useInView({});
    const { slug } = useParams();
    const {
        data: comments,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = useInfinite<CourseCommentList>({
        queryKey: ['courseComments', slug],
        url: `/courses/${slug}/comments`,
    });
    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);
    return (
        <div>
            {comments?.pages.map((currentPage) => (
                <Fragment key={`comment-page-${currentPage.nextPage}`}>
                    {currentPage?.data.map((comment) => (
                        <Comment {...comment} key={comment.id} />
                    ))}
                </Fragment>
            ))}
            {(isFetchingNextPage || hasNextPage) && (
                <div ref={ref}>
                    <Loading />
                </div>
            )}
        </div>
    );
};

export default CourseComments;

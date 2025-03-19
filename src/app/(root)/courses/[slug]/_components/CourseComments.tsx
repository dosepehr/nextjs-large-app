'use client';
import React, { Fragment, useEffect } from 'react';
import { CourseCommentList } from '../_types/course-comment.interface';
import Loading from '@/components/ui/loading';
import { useParams } from 'next/navigation';
import Comment from '@/components/ui/comment';
import { useInfinite } from '@/utils/api/hooks/useInfinite';
import { useInView } from 'react-intersection-observer';
import Button from '@/components/ui/button';
import { IconRefresh } from '@/components/icons';
import Alert from '@/components/ui/alert';

const CourseComments = () => {
    const { ref, inView } = useInView({});
    const { slug } = useParams();
    const {
        data: comments,
        hasNextPage,
        fetchNextPage,
        error,
        refetch,
        isFetching,
    } = useInfinite<CourseCommentList>({
        queryKey: ['courseComments', slug],
        url: `/courses/${slug}/comments`,
    });
    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);
    if (error) {
        return (
            <>
                <Alert hasIcon variant='dash' >
                    خطا در برقراری ارتباط با سرور
                </Alert>
                <div className='text-center mt-3'>
                    <Button
                        theme='success'
                        className='font-semibold'
                        variant='soft'
                        shape='wide'
                        onClick={() => refetch()}
                    >
                        <IconRefresh />
                        تلاش مجدد
                    </Button>
                </div>
            </>
        );
    }
    return (
        <div>
            {comments?.pages.map((currentPage) => (
                <Fragment key={`comment-page-${currentPage.nextPage}`}>
                    {currentPage?.data.map((comment) => (
                        <Comment {...comment} key={comment.id} />
                    ))}
                </Fragment>
            ))}
            {(isFetching || hasNextPage) && (
                <div ref={ref}>
                    <Loading />
                </div>
            )}
        </div>
    );
};

export default CourseComments;

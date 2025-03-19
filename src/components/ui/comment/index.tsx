import React, { FC } from 'react';
import { CommentProps } from './comment.type';
import Avatar from '../avatar';
import { API_URL } from '@/utils/constants';

const Comment: FC<CommentProps> = ({
    commentText,
    date,
    fullName,
    isResponse,
    userId,
}) => {
    const imagePath = userId ? API_URL + '/picture/' + userId : undefined;
    return (
        <div
            className={`flex items-end gap-x-2 justify-start my-4 ${
                isResponse && 'flex-row-reverse'
            }`}
        >
            <Avatar
                src={imagePath}
                size='sm'
                theme={isResponse ? 'info' : 'neutral'}
            />
            <div className='flex flex-col gap-y-1'>
                <div className='flex'>
                    <p>{date}</p>
                    <p>{fullName}</p>
                </div>
                <div
                    className={`chat ${isResponse ? 'chat-end' : 'chat-start'}`}
                >
                    <div
                        className={`chat-bubble ${
                            isResponse && 'chat-bubble-info'
                        }`}
                    >
                        {commentText}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;

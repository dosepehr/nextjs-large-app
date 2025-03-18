import React, { FC } from 'react';
import { RatingProps } from './rating.type';
import { Size } from '@/utils/types/components/size.type';

const sizeClasses: Record<Size, string> = {
    xs: 'rating-xs',
    sm: 'rating-sm',
    md: 'rating-md',
    lg: 'rating-lg',
    xl: 'rating-xl',
};
const Rating: FC<RatingProps> = ({ rate, size = 'md' }) => {
    return (
        <div className={`rating ${sizeClasses[size]}`}>
            <input
                type='radio'
                name='rating-2'
                className='mask mask-star-2 bg-orange-400'
                aria-label='1 star'
                defaultChecked={rate == 1}
            />
            <input
                type='radio'
                name='rating-2'
                className='mask mask-star-2 bg-orange-400'
                aria-label='2 star'
                defaultChecked={rate == 2}
            />
            <input
                type='radio'
                name='rating-2'
                className='mask mask-star-2 bg-orange-400'
                aria-label='3 star'
                defaultChecked={rate == 3}
            />
            <input
                type='radio'
                name='rating-2'
                className='mask mask-star-2 bg-orange-400'
                aria-label='4 star'
                defaultChecked={rate == 4}
            />
            <input
                type='radio'
                name='rating-2'
                className='mask mask-star-2 bg-orange-400'
                aria-label='5 star'
                defaultChecked={rate == 5}
            />
        </div>
    );
};

export default Rating;

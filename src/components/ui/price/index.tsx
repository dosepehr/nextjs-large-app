import React, { FC } from 'react';
import { PriceProps } from './price.type';
import { IconToman } from '@/components/icons';
import Badge from '../badge';
import { Size } from '@/utils/types/components/size.type';

const sizeClasses: Record<Size, { textSize: string; svgSize: number }> = {
    xs: { textSize: 'text-md', svgSize: 14 },
    sm: { textSize: 'text-sm', svgSize: 16 },
    md: { textSize: 'text-md', svgSize: 18 },
    xl: { textSize: 'text-xl', svgSize: 20 },
    lg: { textSize: 'text-lg', svgSize: 22 },
};

const Price: FC<PriceProps> = ({ classname, price, size = 'md' }) => {
    return (
        <>
            {price != null && price > 0 ? (
                <span
                    className={`flex items-center font-bold gap-1 text-white/90 ${sizeClasses[size].textSize} ${classname}`}
                >
                    {price.toLocaleString()}
                    <IconToman
                        strokeWidth={1}
                        viewBox='0 0 16 16'
                        width={sizeClasses[size].svgSize}
                        height={sizeClasses[size].svgSize}
                    />
                </span>
            ) : (
                <Badge theme='success' variant='soft' size='sm'>
                    {'رایگان'}
                </Badge>
            )}
        </>
    );
};

export default Price;

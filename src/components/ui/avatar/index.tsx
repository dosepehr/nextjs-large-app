'use client';
import React, { FC } from 'react';
import { AvatarProps } from './avatar.type';
import { Size } from '@/utils/types/components/size.type';
import classNames from 'classnames';
import Image from 'next/image';
import { Theme } from '@/utils/types/components/theme.type';
import { IconUserProfile } from '@/components/icons';

const sizeClasses: Record<Size, string> = {
    xs: 'w-4',
    sm: 'w-8',
    md: 'w-16',
    lg: 'w-20',
    xl: 'w-24',
};
const ringClasses: Record<Theme, string> = {
    accent: 'ring-accent',
    error: 'ring-error',
    ghost: 'ring-ghost',
    info: 'ring-info',
    neutral: 'ring-neutral',
    primary: 'ring-primary',
    secondary: 'ring-secondary',
    success: 'ring-success',
    warning: 'ring-warning',
    default: '',
};
const sizeForImage = {
    xs: 16,
    sm: 32,
    md: 64,
    lg: 80,
    xl: 96,
};
const Avatar: FC<AvatarProps> = ({
    alt = '',
    classname,
    size = 'md',
    src,
    theme = 'primary',
}) => {
    const classes = classNames('avatar', classname, {
        [`${sizeClasses[size]}`]: size,
        [`${ringClasses[theme]}`]: theme,
    });
    return (
        <div className='avatar'>
            <div
                className={`ring-offset-base-100 rounded-full ring ring-offset-2 ${classes}`}
            >
                {src ? (
                    <Image
                        width={sizeForImage[size]}
                        height={sizeForImage[size]}
                        alt={alt}
                        src={src}
                    />
                ) : (
                    <IconUserProfile
                        width={sizeForImage[size]}
                        height={sizeForImage[size]}
                    />
                )}
            </div>
        </div>
    );
};

export default Avatar;

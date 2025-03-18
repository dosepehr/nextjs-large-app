import { Size } from '@/utils/types/components/size.type';
import { Theme } from '@/utils/types/components/theme.type';
import classNames from 'classnames';
import React, { FC } from 'react';
import { BadgeProps, BadgeVariant } from './badge.types';

const sizeClasses: Record<Size, string> = {
    xs: 'badge-xs',
    sm: 'badge-sm',
    md: 'badge-md',
    lg: 'badge-lg',
    xl: 'badge-xl',
};
const themeClasses: Record<Theme, string> = {
    accent: 'badge-accent',
    error: 'badge-error',
    ghost: 'badge-ghost',
    info: 'badge-info',
    neutral: 'badge-neutral',
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    success: 'badge-success',
    warning: 'badge-warning',
    default: '',
};
const variantClasses: Record<BadgeVariant, string> = {
    default: '',
    dash: 'badge-dash',
    outline: 'badge-outline',
    soft: 'badge-soft',
};
const Badge: FC<BadgeProps> = ({
    children,
    classname,
    size = 'md',
    theme = 'default',
    variant = 'soft',
}) => {
    const classes = classNames(
        'badge',
        classname,
        {
            [`${sizeClasses[size]}`]: size,
        },
        {
            [`${themeClasses[theme]}`]: theme,
        },
        {
            [`${variantClasses[variant]}`]: variant,
        }
    );
    return <div className={classes}>{children}</div>;
};

export default Badge;

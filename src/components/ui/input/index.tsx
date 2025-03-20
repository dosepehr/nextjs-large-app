import React, { FC } from 'react';
import { InputProps } from './input.type';
import { Size } from '@/utils/types/components/size.type';
import { Theme } from '@/utils/types/components/theme.type';
import classNames from 'classnames';

const sizeClasses: Record<Size, string> = {
    xs: 'input-xs',
    sm: 'input-sm',
    md: 'input-md',
    lg: 'input-lg',
    xl: 'input-xl',
};
const themeClasses: Record<Theme, string> = {
    accent: 'input-accent',
    error: 'input-error',
    ghost: 'input-ghost',
    info: 'input-info',
    neutral: 'input-neutral',
    primary: 'input-primary',
    secondary: 'input-secondary',
    success: 'input-success',
    warning: 'input-warning',
    default: '',
};
const Input: FC<InputProps> = ({
    className,
    type = 'text',
    theme = 'ghost',
    size = 'md',
    ...rest
}) => {
    const classes = classNames(
        'input',
        'w-full',
        {
            [`${themeClasses[theme]}`]: theme,
        },
        {
            [`${sizeClasses[size]}`]: size,
        },
        className
    );
    return <input type={type} className={classes} {...rest} />;
};

export default Input;

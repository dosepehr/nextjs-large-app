import React, { FC } from 'react';
import { ButtonShape, ButtonProps, ButtonVariant } from './button.types';
import classNames from 'classnames';
import { Theme } from '@/utils/types/components/theme.type';
import { Size } from '@/utils/types/components/size.type';
import Loading from '../loading';

export const variantClasses: Record<ButtonVariant, string> = {
    default: '',
    active: 'btn-active',
    dash: 'btn-dash',
    outline: 'btn-outline',
    soft: 'btn-soft',
};
export const themeClasses: Record<Theme, string> = {
    accent: 'btn-accent',
    error: 'btn-error',
    ghost: 'btn-ghost',
    info: 'btn-info',
    neutral: 'btn-neutral',
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    success: 'btn-success',
    warning: 'btn-warning',
    default: '',
};
export const sizeClasses: Record<Size, string> = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
    xl: 'btn-xl',
};
export const shapeClasses: Record<ButtonShape, string> = {
    default: '',
    block: 'btn-block',
    circle: 'btn-circle',
    square: 'btn-square',
    wide: 'btn-wide',
};
const Button: FC<ButtonProps> = ({
    theme = 'default',
    variant = 'default',
    size = 'md',
    isDisabled = false,
    shape = 'default',
    isLoading = false,
    loadingType = 'spinner',
    loadingText = 'در حال ارسال درخواست',
    type = 'button',
    isLink = false,
    children,
    className,
    ...rest
}) => {
    const classes = classNames(
        'btn',
        className,
        {
            'pointer-events-none opacity-80': isLoading,
        },
        { 'btn-disabled': isDisabled },
        { [`btn-link`]: isLink },
        { [`${variantClasses[variant]}`]: variant },
        { [`${themeClasses[theme]}`]: theme },
        { [`${sizeClasses[size]}`]: size },
        { [`${shapeClasses[shape]}`]: shape }
    );
    return (
        <button type={type} className={classes} {...rest}>
            {isLoading ? (
                <>
                    {loadingText}
                    <Loading size={size} type={loadingType} />
                </>
            ) : (
                children
            )}
        </button>
    );
};

export default Button;


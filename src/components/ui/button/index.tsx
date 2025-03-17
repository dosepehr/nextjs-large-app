import React, { FC } from 'react';
import { ButtonShape, ButtonTypes, ButtonVariant } from './button.types';
import classNames from 'classnames';
import { Theme } from '@/utils/types/theme.type';
import { Size } from '@/utils/types/size.type';
import { LoadingType } from '@/utils/types/loading-behavior.type';

const variantClasses: Record<ButtonVariant, string> = {
    default: '',
    active: 'btn-active',
    dash: 'btn-dash',
    outline: 'btn-outline',
    soft: 'btn-soft',
};
const themeClasses: Record<Theme, string> = {
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
const sizeClasses: Record<Size, string> = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
    xl: 'btn-xl',
};
const shapeClasses: Record<ButtonShape, string> = {
    default: '',
    block: 'btn-block',
    circle: 'btn-circle',
    square: 'btn-square',
    wide: 'btn-wide',
};
const loadingClasses: Record<LoadingType, string> = {
    ball: 'loading-ball',
    bars: 'loading-bars',
    dots: 'loading-dots',
    infinity: 'loading-infinity',
    ring: 'loading-ring',
    spinner: 'loading-spinner',
};
const Button: FC<ButtonTypes> = ({
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
        { [`btn-${isLink}`]: isLink },
        { [`${variantClasses[variant]}`]: variant },
        { [`${themeClasses[theme]}`]: theme },
        { [`${sizeClasses[size]}`]: size },
        { [`${shapeClasses[shape]}`]: shape }
    );
    const loadingClassNames = classNames(
        'loading',

        { [`${loadingClasses[loadingType]}`]: loadingType }
    );
    return (
        <button type={type} className={classes} {...rest}>
            {isLoading ? (
                <>
                    {loadingText}
                    <span className={loadingClassNames}></span>
                </>
            ) : (
                children
            )}
        </button>
    );
};

export default Button;

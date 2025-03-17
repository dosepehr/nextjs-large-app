import React, { FC } from 'react';
import { ButtonTypes } from './button.types';
import classNames from 'classnames';
const Button: FC<ButtonTypes> = ({
    theme,
    variant,
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
        { [`btn-${variant}`]: variant },
        { [`btn-${theme}`]: theme },
        { [`btn-${size}`]: size },
        { [`btn-${shape}`]: shape },
    );
    return (
        <button type={type} className={classes} {...rest}>
            {isLoading ? (
                <>
                    {loadingText}
                    <span className={`loading loading-${loadingType}`}></span>
                </>
            ) : (
                children
            )}
        </button>
    );
};

export default Button;

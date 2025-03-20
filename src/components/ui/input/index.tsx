import React, { forwardRef } from 'react';
import { InputProps } from './input.type';
import { Size } from '@/utils/types/components/size.type';
import { Theme } from '@/utils/types/components/theme.type';
import classNames from 'classnames';
import { FieldValues } from 'react-hook-form';

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

function InputComponent<T extends FieldValues>(
    props: InputProps<T>,
    ref: React.Ref<HTMLInputElement>
) {
    const {
        className,
        type = 'text',
        theme = 'ghost',
        size = 'md',
        errors,
        name,
        ...rest
    } = props;

    const fieldError = name && errors ? errors[name] : null;
    const classes = classNames(
        'input',
        'w-full',
        {
            [`${themeClasses[theme]}`]: theme,
        },
        {
            '!input-error': fieldError,
        },
        {
            [`${sizeClasses[size]}`]: size,
        },
        className
    );

    return (
        <div className='flex flex-col'>
            <input
                type={type}
                className={classes}
                {...rest}
                ref={ref}
                name={name as string}
            />
            {fieldError && (
                <span className='text-red-500 text-sm mt-1'>
                    {fieldError.message as string}
                </span>
            )}
        </div>
    );
}

const Input = forwardRef(InputComponent) as unknown as (<T extends FieldValues>(
    props: InputProps<T> & { ref?: React.Ref<HTMLInputElement> }
) => React.ReactElement) & { displayName?: string };

export default Input;

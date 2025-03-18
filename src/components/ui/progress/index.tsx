import React, { FC } from 'react';
import { ProgressProps } from './progress.type';
import { Theme } from '@/utils/types/components/theme.type';
import classNames from 'classnames';
import { Size } from '@/utils/types/components/size.type';

const themeClasses: Record<Theme, string> = {
    accent: 'progress-accent',
    error: 'progress-error',
    ghost: 'progress-ghost',
    info: 'progress-info',
    neutral: 'progress-neutral',
    primary: 'progress-primary',
    secondary: 'progress-secondary',
    success: 'progress-success',
    warning: 'progress-warning',
    default: '',
};
const sizeClasses: Record<Size, string> = {
    xs: 'w-8',
    sm: 'w-16',
    md: 'w-32',
    lg: 'w-40',
    xl: 'w-56',
};
const Progress: FC<ProgressProps> = ({
    classname,
    size = 'md',
    theme = 'primary',
    value,
}) => {
    const classes = classNames('progress', classname, {
        [`${themeClasses[theme]}`]: theme,
        [`${sizeClasses[size]}`]: size,
    });
    return (
        <div>
            <progress className={classes} value={value} max='100'></progress>
        </div>
    );
};

export default Progress;

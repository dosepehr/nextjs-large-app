import React, { FC, JSX } from 'react';
import { AlertProps, AlertVariants, ExtractedTheme } from './alert.type';
import {
    IconErrorAlert,
    IconInfoAlert,
    IconSuccessAlert,
    IconWarningAlert,
} from '@/components/icons/icons';
import classNames from 'classnames';

const alertClasses: Record<ExtractedTheme, string> = {
    error: 'alert-error',
    info: 'alert-info',
    success: 'alert-success',
    warning: 'alert-warning',
};
const variantClasses: Record<AlertVariants, string> = {
    dash: 'alert-dash',
    outline: 'alert-outline',
    soft: 'alert-soft',
    default: '',
};
const Alert: FC<AlertProps> = ({
    hasIcon,
    children,
    classname,
    theme = 'error',
    variant = 'soft',
}) => {
    const icons: Record<ExtractedTheme, JSX.Element> = {
        error: <IconErrorAlert />,
        info: <IconInfoAlert />,
        warning: <IconWarningAlert />,
        success: <IconSuccessAlert />,
    };
    const classes = classNames(
        'alert',
        classname,
        {
            [`${alertClasses[theme]}`]: theme,
        },
        { [`${variantClasses[variant]}`]: variant }
    );
    return (
        <div role='alert' className={classes}>
            {hasIcon && icons[theme]}
            <span>{children}</span>
        </div>
    );
};

export default Alert;

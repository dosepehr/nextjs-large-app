import { ComponentBase } from '@/utils/types/component-base.type';
import { LoadingBehavior } from '@/utils/types/loading-behavior.type';
import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    LoadingBehavior &
    ComponentBase & {
        variant?: ButtonVariant;
        shape?: ButtonShape;
        isLink?: boolean;
    };

export type ButtonVariant = 'default' | 'soft' | 'outline' | 'dash' | 'active';
export type ButtonShape = 'default' | 'wide' | 'circle' | 'square' | 'block';

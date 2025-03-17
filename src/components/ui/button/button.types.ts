import { ComponentBase } from '@/utils/types/component-base.type';
import { LoadingBehavior } from '@/utils/types/loading-behavior.type';
import { ButtonHTMLAttributes } from 'react';

export type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement> &
    LoadingBehavior &
    ComponentBase & {
        variant?: ButtonVariant;
        shape?: ButtonShape;
        isLink?: boolean;
    };

export type ButtonVariant = 'soft' | 'outline' | 'dash' | 'active';
export type ButtonShape = 'default' | 'wide' | 'circle' | 'square' | 'block';

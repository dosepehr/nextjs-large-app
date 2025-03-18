import { ReactNode } from 'react';
import { ComponentBase } from '@/utils/types/components/component-base.type';

export type BadgeProps = Omit<ComponentBase, 'isDisabled'> & {
    children?: ReactNode;
    variant?: BadgeVariant;
};

export type BadgeVariant = 'default' | 'soft' | 'outline' | 'dash';

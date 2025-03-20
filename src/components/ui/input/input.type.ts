import { ComponentBase } from '@/utils/types/components/component-base.type';
import { InputHTMLAttributes } from 'react';

export type InputType = 'text' | 'number' | 'password';

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
    ComponentBase & {
        type?: InputType;
    };

import { ComponentBase } from '@/utils/types/components/component-base.type';
import { InputHTMLAttributes } from 'react';
import { FieldValues, FieldErrors } from 'react-hook-form';
import { Size } from '@/utils/types/components/size.type';
import { Theme } from '@/utils/types/components/theme.type';

export interface InputProps<T extends FieldValues>
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'size'>,
        ComponentBase {
    theme?: Theme;
    size?: Size;
    errors?: FieldErrors<T>;
    name?: keyof T;
}

import { ComponentBase } from '@/utils/types/components/component-base.type';

export type ProgressProps = Omit<ComponentBase, 'isDisabled'> & {
    value: number;
};

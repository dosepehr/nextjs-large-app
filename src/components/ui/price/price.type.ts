import { ComponentBase } from '@/utils/types/components/component-base.type';

export type PriceProps = Omit<ComponentBase, 'isDisabled' | 'theme'> & {
    price?: number;
};

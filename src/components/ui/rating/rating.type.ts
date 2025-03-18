
import { ComponentBase } from '@/utils/types/components/component-base.type';

export type RatingProps = Omit<ComponentBase, 'isDisabled' | 'classname'> & {
    rate: number;
};

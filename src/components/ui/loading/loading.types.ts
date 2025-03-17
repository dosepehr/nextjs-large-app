import { ComponentBase } from '@/utils/types/component-base.type';
import { LoadingType } from '@/utils/types/loading-behavior.type';

export type LoadingProps = Omit<ComponentBase, 'isDisabled'> & {
    type?: LoadingType;
};

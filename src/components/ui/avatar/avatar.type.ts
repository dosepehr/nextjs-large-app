import { ComponentBase } from '@/utils/types/components/component-base.type';

export type AvatarProps = Omit<ComponentBase, 'isDisabled'> & {
    src?: string;
    alt?: string;
};

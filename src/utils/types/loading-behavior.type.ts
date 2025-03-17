import { ComponentBase } from './component-base.type';

export type LoadingBehavior = ComponentBase & {
    isLoading?: boolean;
    loadingText?: string;
    loadingType?: 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity ';
};

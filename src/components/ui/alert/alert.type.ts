import { ComponentBase } from '@/utils/types/components/component-base.type';
import { Theme } from '@/utils/types/components/theme.type';

export type AlertProps = Omit<
    ComponentBase,
    'isDisabled' | 'size' | 'theme'
> & {
    hasIcon: boolean;
    theme?: ExtractedTheme;
    variant?: AlertVariants;
    children: React.ReactNode;
};

export type AlertVariants = 'default' | 'outline' | 'soft' | 'dash';
export type ExtractedTheme = Extract<
    Theme,
    'info' | 'success' | 'warning' | 'error'
>;

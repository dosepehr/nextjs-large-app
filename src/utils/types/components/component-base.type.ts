import { Size } from './size.type';
import { Theme } from './theme.type';
export type ComponentBase = {
    isDisabled?: boolean;
    classname?: string;
    theme?: Theme;
    size?: Size;
};

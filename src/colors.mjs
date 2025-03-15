import { colord, extend } from 'colord';
import mixPlugin from 'colord/plugins/mix';

extend([mixPlugin]);

export function generateDarkenColorFrom(input, percentage = 0.07) {
    return colord(input).darken(percentage).toHex();
}

export function generateForegroundColorFrom(input, percentage = 0.8) {
    return colord(input)
        .mix(colord(input).isDark() ? 'white' : 'black', percentage)
        .toHex();
}
console.log(generateForegroundColorFrom('#f87272'));
export const tailwindColors = {
    white: '#F9F9F9',
    primary: '#007BEC',
    'primary-content': '#FFFFFF',
    'primary-focus': '#0068c8',
    secondary: '#6c5ce7',
    'secondary-content': '#FFFFFF',
    'secondary-focus': '#503de2',
    accent: '#1FB2A5',
    'accent-content': '#FFFFFF',
    'accent-focus': '#1a9489',
    neutral: '#2a323c',
    'neutral-content': '#303030',
    'neutral-focus': '#242a33',
    'base-25': '#353d47',
    'base-50': '#2a323c',
    'base-75': '#20272e',
    'base-100': '#1d232a',
    'base-200': '#191e24',
    'base-300': '#15191e',
    'base-content': '#A6ADBB',
    info: '#3abff8',
    'info-content': '#18272f',
    success: '#36d399',
    'success-content': '#162a21',
    warning: '#fbbd23',
    'warning-content': '#312612',
    error: '#f87272',
    'error-content':'#311c1b',
    'gradient-first': '#34eaa0',
    'gradient-second': '#0fa2e9',
};

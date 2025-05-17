import type { Preview } from '@storybook/react';
import '../src/app/globals.css';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: 'light',
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: ['light', 'dark'],
                dynamicTitle: true,
            },
        },
    },
    decorators: [
        (StoryFn, context) => {
            const theme = context.globals.theme;

            if (typeof document !== 'undefined') {
                document.documentElement.classList.remove('light', 'dark');
                document.documentElement.classList.add(theme);
            }

            return StoryFn();
        },
    ],
};

export default preview;


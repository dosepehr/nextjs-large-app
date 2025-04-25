import { Meta, StoryObj } from '@storybook/react';
import Loading from '.';
const meta: Meta<typeof Loading> = {
    component: Loading,
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            document.documentElement.classList.add('dark');
            return <Story />;
        },
    ],
};
type Story = StoryObj<typeof Loading>;

export const LoadingTypes: Story = {
    render: () => (
        <>
            <Loading type='ball' />
            <Loading type='bars' />
            <Loading type='dots' />
            <Loading type='infinity' />
            <Loading type='ring' />
            <Loading type='spinner' />
        </>
    ),
};
export default meta;


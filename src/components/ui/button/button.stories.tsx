import { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
    component: Button,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const BrandColors: Story = {
    render: () => (
        <>
            <Button>default</Button>
        </>
    ),
};
export const StateColors: Story = {
    render: () => (
        <>
            <Button theme='info'>info</Button>
        </>
    ),
};

import { Meta, StoryObj } from '@storybook/react';
import Button, {
    shapeClasses,
    sizeClasses,
    themeClasses,
    variantClasses,
} from '.';

const variantOptions = Object.keys(variantClasses);
const themeOptions = Object.keys(themeClasses);
const sizeOptions = Object.keys(sizeClasses);
const shapeOptions = Object.keys(shapeClasses);
const meta: Meta<typeof Button> = {
    component: Button,
    title: 'components/Button',
    parameters: {
        layout: 'center',
    },
    argTypes: {
        variant: {
            children: {
                name: 'Label',
                control: 'text',
                description: 'Text to display on the button',
            },
            options: variantOptions,
            description: 'variant options',
            control: { type: 'select' },
        },
        theme: {
            options: themeOptions,
            control: { type: 'select' },
        },
        size: {
            options: sizeOptions,
            control: { type: 'select' },
        },
        shape: {
            options: shapeOptions,
            control: { type: 'select' },
        },
    },

    // tags: ['autodocs'],
    decorators: [
        (Story) => {
            // document.documentElement.classList.add('dark');
            return <Story />;
        },
    ],
};

type Story = StoryObj<typeof Button>;

export const Main: Story = {
    args: {
        children: 'button',
        theme: 'error',
    },
};

export const BrandColors: Story = {
    render: () => (
        <>
            <Button>default</Button>
            <Button theme='accent'>accent</Button>
            <Button theme='error'>error</Button>
            <Button theme='ghost'>ghost</Button>
            <Button theme='info'>info</Button>
            <Button theme='secondary'>secondary</Button>
            <Button theme='primary'>primary</Button>
            <Button theme='neutral'>neutral</Button>
            <Button theme='success'>success</Button>
        </>
    ),
};
export const buttonSize: Story = {
    render: () => (
        <>
            <Button size='xs'>xs</Button>
            <Button size='sm'>sm</Button>
            <Button size='md'>md</Button>
            <Button size='lg'>lg</Button>
            <Button size='xl'>xl</Button>
        </>
    ),
};
export const variantButtons: Story = {
    render: () => (
        <>
            <Button variant='default'>default</Button>
            <Button variant='active'>active</Button>
            <Button variant='dash'>dash</Button>
            <Button variant='outline'>outline</Button>
            <Button variant='soft'>soft</Button>
        </>
    ),
};
export const shapeButtons: Story = {
    render: () => (
        <>
            <Button shape='default'>default</Button>
            <Button shape='circle'>circle</Button>
            <Button shape='square'>square</Button>
            <Button shape='wide'>wide</Button>
            <div className='max-w-20'>
                <Button shape='block'>block</Button>
            </div>
        </>
    ),
};
export const statusButtons: Story = {
    render: () => (
        <>
            <Button isDisabled>disabled</Button>
            <Button isLink>link</Button>
            <Button isLoading>loading</Button>
        </>
    ),
};

export default meta;


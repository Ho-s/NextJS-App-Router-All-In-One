import type { Meta, StoryObj } from '@storybook/react';

import HomePage from './page';

const meta: Meta<typeof HomePage> = {
  title: 'page',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  component: HomePage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

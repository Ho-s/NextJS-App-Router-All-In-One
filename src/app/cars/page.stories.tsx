import type { Meta, StoryObj } from '@storybook/react';

import CarsPage from './page';

const meta: Meta<typeof CarsPage> = {
  title: 'cars/detail/page',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},

  loaders: [async ({ args }) => ({ Component: await CarsPage({ ...args }) })],
  render: (_, { loaded: { Component } }) => {
    return Component;
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { a: 1 },
};

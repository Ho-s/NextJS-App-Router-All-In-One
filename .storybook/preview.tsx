import type { Preview } from '@storybook/react';
import React from 'react';

import { CustomWrapper } from '../src/libs/CustomWrapper';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [Story => CustomWrapper({ children: <Story /> })],
};

export default preview;

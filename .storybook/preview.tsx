import type { Decorator, Preview } from '@storybook/react';
import React from 'react';

import { ThemeProvider } from 'styled-components';

import { InitGlobalStyled } from '../src/styles/init';
import { notoSans, theme } from '../src/styles/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators: Decorator[] = [
  Story => (
    <div className={notoSans.className}>
      <ThemeProvider theme={theme}>
        <InitGlobalStyled />
        <Story />
      </ThemeProvider>
    </div>
  ),
];

export default preview;

import { JSXElementConstructor, ReactElement } from 'react';

import { ThemeProvider } from 'styled-components';

import { InitGlobalStyled } from '~/styles/init';
import { notoSans, theme } from '~/styles/theme';

type RenderChildren = ReactElement<unknown, string | JSXElementConstructor<unknown>>;

export const CustomWrapper = ({ children }: { children: RenderChildren }) => (
  <div className={notoSans.className}>
    <ThemeProvider theme={theme}>
      <InitGlobalStyled />
      {children}
    </ThemeProvider>
  </div>
);

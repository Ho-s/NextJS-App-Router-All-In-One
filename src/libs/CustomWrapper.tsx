import { JSXElementConstructor, ReactElement, ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import { InitGlobalStyled } from '~/styles/init';
import { notoSans, theme } from '~/styles/theme';

type RenderChildren = ReactElement<unknown, string | JSXElementConstructor<unknown>> | ReactNode;

export const ThemeProviderContent = ({ children }: { children: RenderChildren }) => (
  <ThemeProvider theme={theme}>
    <InitGlobalStyled />
    {children}
  </ThemeProvider>
);

export const CustomWrapper = ({ children }: { children: RenderChildren }) => (
  <div className={notoSans.className}>
    <ThemeProviderContent>{children}</ThemeProviderContent>
  </div>
);

'use client';

import { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';
import CustomStyledComponent from '~/libs/customStyledComponent';
import { InitGlobalStyled } from '~/styles/init';
import { theme } from '~/styles/theme';

export default function CustomThemeProvider({ children }: { children: ReactNode }) {
  return (
    <CustomStyledComponent>
      <ThemeProvider theme={theme}>
        <InitGlobalStyled />
        {children}
      </ThemeProvider>
    </CustomStyledComponent>
  );
}

'use client';

import { ReactNode } from 'react';

import CustomStyledComponent from '~/libs/CustomStyledComponent';
import { ThemeProviderContent } from '~/libs/CustomWrapper';

export default function CustomThemeProvider({ children }: { children: ReactNode }) {
  return (
    <CustomStyledComponent>
      <ThemeProviderContent>{children}</ThemeProviderContent>
    </CustomStyledComponent>
  );
}

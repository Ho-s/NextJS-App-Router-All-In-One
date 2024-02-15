'use client';

import { ReactNode } from 'react';

import { CartTemplateStyled } from './styled';

export default function CarsTemplate({ children }: { children: ReactNode }) {
  return <CartTemplateStyled>{children}</CartTemplateStyled>;
}

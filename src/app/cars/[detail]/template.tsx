'use client';

import { ReactNode } from 'react';

import { CarsDetailTemplateStyled } from './styled';

export default function CarsDetailTemplate({ children }: { children: ReactNode }) {
  return <CarsDetailTemplateStyled>{children}</CarsDetailTemplateStyled>;
}

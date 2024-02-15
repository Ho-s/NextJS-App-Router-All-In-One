'use client';

import { ReactNode } from 'react';

import { CarsTemplateStyled } from './styled';

export default function CarsTemplate({ children }: { children: ReactNode }) {
  return <CarsTemplateStyled>{children}</CarsTemplateStyled>;
}

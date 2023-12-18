'use client';

import { ReactNode } from 'react';

import { CarsLayoutStyled } from './styled';

export default function CarsLayout({ children }: { children: ReactNode }) {
  return (
    <CarsLayoutStyled>
      <header>HEADER</header>
      <nav>NAV</nav>
      <aside>ASIDE</aside>
      {children}
      <footer>FOOTER</footer>
    </CarsLayoutStyled>
  );
}

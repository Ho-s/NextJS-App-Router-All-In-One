'use client';

import { ReactNode } from 'react';

import { RootTemplateStyled } from './styled';

export default function RootTemplate({ children }: { children: ReactNode }) {
  return (
    <RootTemplateStyled>
      <header>HEADER</header>
      <nav>NAV</nav>
      <aside>ASIDE</aside>
      <main>{children}</main>
      <footer>FOOTER</footer>
    </RootTemplateStyled>
  );
}

'use client';

import Link from 'next/link';

import Button from '~/components/atoms/Button';

import { RootPageStyled } from './styled';

export default function Home() {
  return (
    <RootPageStyled>
      <Link href={'/cars'}>
        <Button>Go to cars page</Button>
      </Link>
    </RootPageStyled>
  );
}

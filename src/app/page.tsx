'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import Button from '~/components/Button';

import { RootPageStyled } from './styled';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sessionLogin = sessionStorage.getItem('isLoggedIn');

    if (sessionLogin !== 'true') return;

    setIsLoggedIn(true);
  }, []);

  return (
    <RootPageStyled>
      {isLoggedIn ? (
        <>
          <Link href={'/cars'}>
            <Button>Go to cars page</Button>
          </Link>
          <Button
            onClick={() => {
              sessionStorage.setItem('isLoggedIn', 'false');
              setIsLoggedIn(false);
            }}
          >
            Sign Out
          </Button>
        </>
      ) : (
        <Link href={'/sign/in'}>
          <Button>Sign in needed</Button>
        </Link>
      )}
    </RootPageStyled>
  );
}

'use client';

import { useEffect, useState } from 'react';

import { deleteCookie, getCookie } from 'cookies-next/client';
import Link from 'next/link';

import Button from '~/components/Button';

import { RootPageStyled } from './styled';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const token = getCookie('token');

    if (!token) return;

    setIsLoggedIn(true);
  }, []);

  return (
    <RootPageStyled>
      {isLoggedIn ? (
        <>
          <Link href={'/cars'}>
            <Button>Go to cars page(REST-API)</Button>
          </Link>
          <Link href={'/post'}>
            <Button>Go to post page(GRAPHQL)</Button>
          </Link>
          <Button
            onClick={() => {
              deleteCookie('token');
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

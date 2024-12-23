'use client';

import { FormEvent, useState } from 'react';

import { setCookie } from 'cookies-next/client';
import { useRouter } from 'next/navigation';

import SignInPageUI from './page-ui';

const SignInpage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !password) {
      return alert('Please fill in all fields');
    }

    setCookie('token', 'some-token');
    router.push('/');
  };

  return (
    <SignInPageUI
      onSubmit={onSubmit}
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
    />
  );
};

export default SignInpage;

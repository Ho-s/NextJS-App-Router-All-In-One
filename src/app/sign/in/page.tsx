'use client';

import { FormEvent, useState } from 'react';

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

    sessionStorage.setItem('isLoggedIn', 'true');
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

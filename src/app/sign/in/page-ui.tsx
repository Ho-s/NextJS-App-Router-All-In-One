'use client';

import { FormEvent } from 'react';

import { SignInpageStyled } from './styled';

interface SignInPageUIProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  username: string;
  password: string;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
}

const SignInPageUI = ({
  onSubmit,
  username,
  password,
  setUsername,
  setPassword,
}: SignInPageUIProps) => {
  return (
    <SignInpageStyled>
      <form onSubmit={onSubmit}>
        <input
          type="username"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>Sign In</button>
      </form>
    </SignInpageStyled>
  );
};

export default SignInPageUI;

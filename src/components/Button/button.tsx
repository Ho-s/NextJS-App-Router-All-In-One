'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonStyled } from './styled';


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

export default Button;

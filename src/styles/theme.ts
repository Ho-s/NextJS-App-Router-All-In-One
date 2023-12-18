import { DefaultTheme } from 'styled-components';

export const colors = {
  primary: '#FAFAFA',
  secondary: '#FFC80A',
  tertiary: '#303030',
  background: '#ffffff',
  text: '#000000',
  primaryTextColor: '#594F43',
  secondaryTextColor: '#777777',
  inputPlaceholder: '#C7C7C7',
  darkGrayText: '#303030',
  darkText: '#1A1A1A',
  black: '#000000',
  white: '#ffffff',
  dark: '',
  medium: '',
  light: '',
  danger: '',
  success: '#66A15A',
} as const;

export const sizes = {
  maxPcWidth: '1280px',
  maxMobileWidth: '375px',
  navHeight: '96px',
  mobileHeaderHeight: '52px',
} as const;

export const theme: DefaultTheme = {
  colors,
  sizes,
};

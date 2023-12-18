import { Fragment } from 'react';

import styled from 'styled-components';

export const CarsLayoutStyled = styled.div`
  > header {
    width: 100vw;
    max-width: 100%;
    height: ${props => props.theme.sizes.headerHeight};
    background-color: ${props => props.theme.colors.secondary};
    color: white;
  }

  > nav {
    width: 100vw;
    max-width: 100%;
    height: ${props => props.theme.sizes.navHeight};
    background-color: ${props => props.theme.colors.secondary};
    color: white;
  }

  > aside {
    position: fixed;
    right: 0;
    top: 0;
    width: ${props => props.theme.sizes.asideWidth};
    height: 100%;
    color: white;
    background-color: ${props => props.theme.colors.secondary};
  }

  > footer {
    width: 100vw;
    max-width: 100%;
    height: ${props => props.theme.sizes.footerHeight};
    background-color: ${props => props.theme.colors.secondary};
    color: white;
  }
`;

export const CartLoadingStyled = styled.main`
  font-size: 32px;
  font-weight: 600;
  color: ${props => props.theme.colors.primaryTextColor};
`;

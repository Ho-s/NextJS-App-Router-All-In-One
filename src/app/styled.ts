import styled from 'styled-components';

export const RootPageStyled = styled.main`
  button {
    font-size: 32px;
    padding: 12px 24px;
    font-weight: 600;
    border: 1px solid ${props => props.theme.colors.darkGrayText};
    border-radius: 4px;
    cursor: pointer;
  }
`;

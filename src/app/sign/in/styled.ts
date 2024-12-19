import styled from 'styled-components';

export const SignInpageStyled = styled.div`
  width: 100dvw;
  height: 100dvh;
  form {
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    input {
      border: 1px solid rgba(10, 10, 10, 0.6);
      border-radius: 4px;
    }

    button {
      background-color: #f8f8f8;
      border: 1px solid rgba(10, 10, 10, 0.6);
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;

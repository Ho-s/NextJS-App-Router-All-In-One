import { fireEvent, render, screen } from '@testing-library/react';

import SignInPageUI from './page-ui';

describe('SignInPageUI', () => {
  const mockOnSubmit = jest.fn();
  const mockSetUsername = jest.fn();
  const mockSetPassword = jest.fn();

  beforeAll(() => {
    render(
      <SignInPageUI
        onSubmit={mockOnSubmit}
        username=""
        password=""
        setUsername={mockSetUsername}
        setPassword={mockSetPassword}
      />,
    );
  });

  it('Should render the SignInPageUI component', () => {
    expect(document.querySelector('form')).toBeInTheDocument();
    expect(document.querySelector('input[type="username"]')).toBeInTheDocument();
    expect(document.querySelector('input[type="password"]')).toBeInTheDocument();
    expect(document.querySelector('button')).toBeInTheDocument();
  });

  it('Should call setUsername when the username input changes', () => {
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');

    fireEvent.change(usernameInput, { target: { value: 'testUser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(mockSetUsername).toHaveBeenCalledWith('testUser');
    expect(mockSetPassword).toHaveBeenCalledWith('password123');
  });

  it('Should call onSubmit when the form is submitted', async () => {
    fireEvent.submit(document.querySelector('form') as HTMLFormElement);

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});

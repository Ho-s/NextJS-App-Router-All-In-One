import { fireEvent, render, screen } from '@testing-library/react';

import { useRouter } from 'next/navigation';

import SignInpage from './page';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('SignInPage', () => {
  beforeAll(() => {
    render(<SignInpage />);
  });

  it('Should store user data in sessionStorate and redirect to home on valid sign-in', () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });

    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'test' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'test' } });
    fireEvent.click(screen.getByRole('button'));

    expect(sessionStorage.getItem('isLoggedIn')).toBe('true');

    expect(mockPush).toHaveBeenCalledWith('/');
  });

  it('Should show alert on invalid sign-in', () => {
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation();

    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: '' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button'));

    expect(mockAlert).toHaveBeenCalledWith('Please fill in all fields');
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../pages/Login';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Login tests', () => {
  it('has username and password inputs', () => {
    render(<Login />);

    const username = screen.getByLabelText('username');
    const password = screen.getByLabelText('password');

    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  it('welcomes me back', () => {
    render(<Login />);

    const welcome = screen.getByText('Welcome back!');

    expect(welcome).toBeInTheDocument();
    expect(welcome.tagName).toBe('H1');
  });
});

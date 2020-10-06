import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../pages/Login';

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

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import NotFound from '../pages/NotFound';

describe('Not Found tests', () => {
  it('shows a not found image', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const notFoundImage = screen.getByAltText('page not found');

    expect(notFoundImage).toBeInTheDocument();
    expect(notFoundImage.getAttribute('src')).toBe('404.gif');
  });

  it('has a link to home', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const homeLink = screen.getByText('home');

    expect(homeLink).toBeInTheDocument();
  });
});

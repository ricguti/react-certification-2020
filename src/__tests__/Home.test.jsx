import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Home from '../pages/Home';

describe('home tests', () => {
  it('shows Search a video', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const searchAVideo = screen.getByText('Search a video');

    expect(searchAVideo).toBeInTheDocument();
    expect(searchAVideo.tagName).toBe('H1');
  });
});

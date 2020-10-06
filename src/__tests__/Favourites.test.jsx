import React from 'react';
import { MemoryRouter } from 'react-router';
import { render, screen } from '@testing-library/react';
import Favourites from '../pages/Favourites';

describe('Favourites tests', () => {
  it('tells me that these are my favourite videos', () => {
    render(
      <MemoryRouter>
        <Favourites />
      </MemoryRouter>
    );

    const heading = screen.getByText('These are your favourite videos');

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });
});

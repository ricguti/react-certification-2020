import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar';

describe('favourites tests', () => {
  it('renders the search box when specified', () => {
    render(
      <MemoryRouter>
        <NavBar search="search" />
      </MemoryRouter>
    );

    const searchBox = screen.queryByPlaceholderText('Search a video...');

    expect(searchBox).toBeInTheDocument();
  });

  it('does not render the search box when not specified', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const searchBox = screen.queryByPlaceholderText('Search a video...');

    expect(searchBox).not.toBeInTheDocument();
  });
});

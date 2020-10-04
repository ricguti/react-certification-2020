import React from 'react';
import { render, screen } from '@testing-library/react';
import { Simulate } from 'react-dom/test-utils';
import Search from '../components/Search';

describe('Search tests', () => {
  it('it should have a placeholder text', () => {
    const submitFunction = jest.fn();
    render(<Search setVideos={submitFunction} />);

    const searchInput = screen.getByPlaceholderText('Search a video...');

    expect(searchInput).toBeInTheDocument();
  });

  it('sets the search value on change', () => {
    const submitFunction = jest.fn();
    render(<Search setVideos={submitFunction} />);

    const searchInput = screen.getByPlaceholderText('Search a video...');

    Simulate.change(searchInput, {
      target: {
        value: 'I want to see this video',
      },
    });

    expect(searchInput.value).toBe('I want to see this video');
  });
});

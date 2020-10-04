import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoInfo from '../components/VideoInfo';

describe('Video Info component', () => {
  it('shows the title in bold', () => {
    render(<VideoInfo title="The title of the video" />);

    const title = screen.getByText('The title of the video');

    expect(title.tagName).toBe('B');
  });

  it('shows the description', () => {
    render(<VideoInfo description="The description of the video" />);

    const title = screen.getByText('The description of the video');

    expect(title.tagName).toBe('P');
  });
});

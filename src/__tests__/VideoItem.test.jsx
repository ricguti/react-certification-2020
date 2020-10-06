import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoItem from '../components/VideoItem';

describe('Video item tests', () => {
  it('renders an image with the url and title that were passed to it', () => {
    render(
      <VideoItem
        id="W7h-Yho8EB0"
        image="https://i.ytimg.com/vi/W7h-Yho8EB0/default.jpg"
        title="GoPro: Top 10 Surf Moments"
        description="Celebrate International Surf Day with GoPro's Top 10 Surf Moments. Shot 100% on GoPro: http://bit.ly/2wUMwfI Get stoked and subscribe: http://goo.gl/HgVXpQ ..."
      />
    );

    const image = screen.getByAltText('GoPro: Top 10 Surf Moments');

    expect(image).toBeInTheDocument();
    expect(image.getAttribute('alt')).toBe('GoPro: Top 10 Surf Moments');
  });
});

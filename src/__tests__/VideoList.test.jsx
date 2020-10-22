import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoList from '../components/VideoList';

const videos = [
  {
    id: {
      videoId: 'hwLo7aU1Aas',
    },
    snippet: {
      title: 'The Best Surfing Clips of 2019',
      description: '',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/hwLo7aU1Aas/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/hwLo7aU1Aas/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/hwLo7aU1Aas/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
    },
  },
  {
    id: {
      videoId: 'W7h-Yho8EB0',
    },
    snippet: {
      title: 'GoPro: Top 10 Surf Moments',
      description:
        "Celebrate International Surf Day with GoPro's Top 10 Surf Moments. Shot 100% on GoPro: http://bit.ly/2wUMwfI Get stoked and subscribe: http://goo.gl/HgVXpQ ...",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/W7h-Yho8EB0/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/W7h-Yho8EB0/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/W7h-Yho8EB0/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
    },
  },
  {
    id: {
      videoId: 'rj7xMBxd5iY',
    },
    snippet: {
      title: 'BIG WAVE SURFING COMPILATION 2017',
      description:
        'BIG WAVE SURFING COMPILATION 2017 ** REVISED **AMAZING FOOTAGE ** WITH 60-100FT- HUGE SURF Please Subscribe if You Would like to see More ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/rj7xMBxd5iY/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/rj7xMBxd5iY/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/rj7xMBxd5iY/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
    },
  },
];

describe('video list', () => {
  it('renders the videos images', () => {
    render(<VideoList videos={videos} />);

    const renderedVideosImages = screen.getAllByRole('img');

    expect(renderedVideosImages.length).toBe(videos.length);
  });

  it('displays all videos', () => {
    render(<VideoList videos={videos} />);

    const renderedVideos = screen.getAllByTestId('video-item');

    expect(renderedVideos.length).toBe(videos.length);
  });

  it('displays default image when showing related videos', () => {
    render(<VideoList videos={videos} related="related" />);

    const image = screen.getByAltText('GoPro: Top 10 Surf Moments');

    expect(image.getAttribute('src')).toBe(
      'https://i.ytimg.com/vi/W7h-Yho8EB0/default.jpg'
    );
  });

  it('displays medium image', () => {
    render(<VideoList videos={videos} />);

    const image = screen.getByAltText('GoPro: Top 10 Surf Moments');

    expect(image.getAttribute('src')).toBe(
      'https://i.ytimg.com/vi/W7h-Yho8EB0/mqdefault.jpg'
    );
  });
});

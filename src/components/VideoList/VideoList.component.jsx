import React from 'react';
import VideoItem from '../VideoItem';

const VideoList = ({ videos, related }) => {
  return videos.map(({ id, snippet }) => {
    return (
      <VideoItem
        id={id.videoId}
        image={related ? snippet.thumbnails.default.url : snippet.thumbnails.medium.url}
        title={snippet.title}
        description={
          related
            ? snippet.description.substring(0, 50).concat('...')
            : snippet.description
        }
      />
    );
  });
};

export default VideoList;

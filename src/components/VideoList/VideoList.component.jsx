import React from 'react';
import VideoItem from '../VideoItem';

const VideoList = ({ videos, related }) => {
  return videos.map(({ id, snippet }) => {
    return (
      <VideoItem
        key={id.videoId}
        id={id.videoId}
        image={related ? snippet.thumbnails.default.url : snippet.thumbnails.medium.url}
        title={snippet.title}
        description={snippet.description}
        related={related}
      />
    );
  });
};

export default VideoList;

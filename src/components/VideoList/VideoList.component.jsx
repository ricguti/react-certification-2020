import React from 'react';
import VideoItem from '../VideoItem';

const VideoList = ({ videos }) => {
  return videos.map(({ id, snippet }) => {
    return (
      <VideoItem
        id={id}
        image={snippet.thumbnails.medium.url}
        title={snippet.title}
        description={snippet.description}
      />
    );
  });
};

export default VideoList;

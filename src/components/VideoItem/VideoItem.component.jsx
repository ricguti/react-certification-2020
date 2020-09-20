import React from 'react';

const VideoItem = (props) => {
  return (
    <div id={props.id}>
      <img src={props.image} alt="a video" />
      <p>{props.title}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default VideoItem;

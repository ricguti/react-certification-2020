import React from 'react';

const YouTubePlayer = (props) => {
  return (
    <div>
      <iframe
        key={props.id}
        width={props.width}
        height={props.height}
        allowFullScreen
        frameBorder="0"
        title={props.title}
        src={`https://www.youtube.com/embed/${props.id}?controls=0&autoplay=${
          props.autoplay ? 1 : 0
        }`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
};

export default YouTubePlayer;

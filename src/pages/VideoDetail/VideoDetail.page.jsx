import React, { useContext } from 'react';
import SelectedVideoContext from '../../providers/SelectedVideo/SelectedVideoContext';

const VideoDetail = () => {
  // eslint-disable-next-line
  const [selectedId, _] = useContext(SelectedVideoContext);

  return <h1>Video Detail Page {selectedId}</h1>;
};

export default VideoDetail;

import React, { useContext } from 'react';
import SelectedVideoContext from '../../providers/SelectedVideo/SelectedVideoContext';
import Layout from '../../components/Layout';

const VideoDetail = () => {
  // eslint-disable-next-line
  const [selectedId, _] = useContext(SelectedVideoContext);

  return (
    <Layout>
      <iframe
        width="800"
        height="450"
        allowFullScreen
        frameBorder="0"
        title={selectedId}
        src={`https://www.youtube.com/embed/${selectedId}?controls=0&autoplay=1`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
    </Layout>
  );
};

export default VideoDetail;

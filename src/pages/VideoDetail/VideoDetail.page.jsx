import React, { useContext } from 'react';
import SelectedVideoContext from '../../providers/SelectedVideo/SelectedVideoContext';
import Layout from '../../components/Layout';

const VideoDetail = () => {
  // eslint-disable-next-line
  const [selectedVideo, _] = useContext(SelectedVideoContext);

  return (
    <Layout>
      <iframe
        width="800"
        height="450"
        allowFullScreen
        frameBorder="0"
        title={selectedVideo.title}
        src={`https://www.youtube.com/embed/${selectedVideo.id}?controls=0&autoplay=1`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
      <div>
        <h4>
          <b>{selectedVideo.title}</b>
        </h4>
        <p>{selectedVideo.description}</p>
      </div>
    </Layout>
  );
};

export default VideoDetail;

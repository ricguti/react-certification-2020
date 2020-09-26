import React, { useContext } from 'react';
import styled from 'styled-components';
import SelectedVideoContext from '../../providers/SelectedVideo/SelectedVideoContext';
import Layout from '../../components/Layout';
import VideoInfo from '../../components/VideoInfo';

const Container = styled.div`
  max-width: 800px;
`;

const VideoDetail = () => {
  // eslint-disable-next-line
  const [selectedVideo, _] = useContext(SelectedVideoContext);

  return (
    <Layout>
      <Container>
        <iframe
          width="800"
          height="450"
          allowFullScreen
          frameBorder="0"
          title={selectedVideo.title}
          src={`https://www.youtube.com/embed/${selectedVideo.id}?controls=0&autoplay=1`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
        <VideoInfo title={selectedVideo.title} description={selectedVideo.description} />
      </Container>
    </Layout>
  );
};

export default VideoDetail;

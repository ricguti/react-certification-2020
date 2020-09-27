import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import SelectedVideoContext from '../../providers/SelectedVideo/SelectedVideoContext';
import Layout from '../../components/Layout';
import VideoInfo from '../../components/VideoInfo';
import VideoList from '../../components/VideoList';
import NavBar from '../../components/NavBar/NavBar.component';
import { useYouTube } from '../../utils/hooks/useYouTube';
import { useAuth } from '../../providers/Auth';
import { storage } from '../../utils/storage';

const Flex = styled.div`
  display: flex;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0px 15px;
`;

const Column = styled.div`
  flex: 50%;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  color: black;
  padding: 1px 25px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  border-radius: 25px;
`;

const VideoDetail = () => {
  // eslint-disable-next-line
  const [selectedVideo, _] = useContext(SelectedVideoContext);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { youTube } = useYouTube();
  const { authenticated } = useAuth();

  useEffect(() => {
    youTube(
      {
        part: 'snippet',
        relatedToVideoId: selectedVideo.id,
        type: 'video',
      },
      setRelatedVideos
    );
  }, [selectedVideo.id]);

  const addToFavorites = () => {
    storage.addFavourite(selectedVideo.id);
  };

  return (
    <div>
      <NavBar />
      <Layout>
        <Flex>
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

            <VideoInfo
              title={selectedVideo.title}
              description={selectedVideo.description}
            />

            {authenticated && (
              <Button type="button" onClick={addToFavorites}>
                Favourite
              </Button>
            )}
          </Container>
          <Column>
            <VideoList videos={relatedVideos} related="related" />
          </Column>
        </Flex>
      </Layout>
    </div>
  );
};

export default VideoDetail;

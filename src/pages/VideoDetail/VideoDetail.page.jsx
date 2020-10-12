import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelectedVideo } from '../../providers/SelectedVideo';
import Layout from '../../components/Layout';
import VideoInfo from '../../components/VideoInfo';
import VideoList from '../../components/VideoList';
import NavBar from '../../components/NavBar/NavBar.component';
import YouTubePlayer from '../../components/YouTubePlayer';
import youTube from '../../api/youtube';
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
  const [selectedVideo, _] = useSelectedVideo();
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { authenticated } = useAuth();

  useEffect(() => {
    youTube({
      part: 'snippet',
      relatedToVideoId: selectedVideo.id,
      type: 'video',
    }).then(setRelatedVideos);
  }, [selectedVideo, youTube]);

  const addToFavorites = () => {
    storage.addFavourite(selectedVideo.id);
  };

  return (
    <div>
      <NavBar />
      <Layout>
        <Flex>
          <Container>
            <YouTubePlayer
              id={selectedVideo.id}
              title={selectedVideo.title}
              width="800"
              height="450"
              autoplay="autoplay"
            />
            <VideoInfo
              title={selectedVideo.title}
              description={selectedVideo.description}
              related="related"
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

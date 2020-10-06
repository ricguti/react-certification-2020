import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import SelectedVideoContext from '../../providers/SelectedVideo/SelectedVideoContext';
import VideoInfo from '../VideoInfo';

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  display: flex;
  margin: 10px;
  background-color: white;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  & img {
    border-radius: 5px 5px 0 0;
  }
`;

const VideoItem = (props) => {
  // eslint-disable-next-line
  const [_, setSelectedVideo] = useContext(SelectedVideoContext);
  const history = useHistory();

  const navigateToVideo = (event) => {
    event.preventDefault();
    setSelectedVideo({
      id: props.id,
      title: props.title,
      description: props.description,
    });
    history.push('/video');
  };

  return (
    <div data-testid="video-item">
      <Card id={props.id} onClick={navigateToVideo}>
        <img src={props.image} alt={props.title} />
        <VideoInfo title={props.title} description={props.description} />
      </Card>
    </div>
  );
};

export default VideoItem;

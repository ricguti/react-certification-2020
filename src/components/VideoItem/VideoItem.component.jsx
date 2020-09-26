import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import SelectedVideoContext from '../../providers/SelectedVideo/SelectedVideoContext';

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  display: flex;
  margin: 10px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  & img {
    border-radius: 5px 5px 0 0;
  }
`;

const Container = styled.div`
  padding: 2px 16px;
  background-color: white;
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
    <Card id={props.id} onClick={navigateToVideo}>
      <img src={props.image} alt="a video" />
      <Container>
        <h4>
          <b>{props.title}</b>
        </h4>
        <p>{props.description}</p>
      </Container>
    </Card>
  );
};

export default VideoItem;

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2px 16px;
  background-color: white;
`;

const Description = styled.p`
  ${(props) =>
    props.related
      ? `white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 500px;`
      : ''}
`;

const VideoInfo = (props) => {
  return (
    <Container>
      <h4>
        <b>{props.title}</b>
      </h4>
      <Description related={props.related} data-testid="video-description">
        {props.description}
      </Description>
    </Container>
  );
};

export default VideoInfo;

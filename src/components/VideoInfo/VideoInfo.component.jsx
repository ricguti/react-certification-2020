import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2px 16px;
  background-color: white;
`;

const VideoInfo = (props) => {
  return (
    <Container>
      <h4>
        <b>{props.title}</b>
      </h4>
      <p>{props.description}</p>
    </Container>
  );
};

export default VideoInfo;

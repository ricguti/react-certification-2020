import React, { useRef, useState } from 'react';
import NavBar from '../../components/NavBar';
import Layout from '../../components/Layout';
import VideoList from '../../components/VideoList';

import youtube from '../../api/youtube';

import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);

  const [videos, setVideos] = useState([]);

  const searchVideos = (searchValue) => {
    youtube
      .get('/search', {
        params: {
          part: 'snippet',
          maxResults: 10,
          q: searchValue,
        },
      })
      .then((response) => {
        setVideos(response.data.items);
      });
  };

  return (
    <section className="homepage" ref={sectionRef}>
      <NavBar searchVideos={searchVideos} search="search" />

      {videos.length ? (
        <VideoList videos={videos} />
      ) : (
        <Layout>
          <h1>Search a video</h1>
        </Layout>
      )}
    </section>
  );
}

export default HomePage;

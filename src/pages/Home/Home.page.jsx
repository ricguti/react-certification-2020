import React, { useRef, useState } from 'react';
import NavBar from '../../components/NavBar';
import Layout from '../../components/Layout';
import VideoList from '../../components/VideoList';

import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);

  const [videos, setVideos] = useState([]);

  return (
    <section className="homepage" ref={sectionRef}>
      <NavBar setVideos={setVideos} search="search" />

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

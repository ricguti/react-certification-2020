import React, { useRef, useState } from 'react';
import NavBar from '../../components/NavBar';
import Layout from '../../components/Layout';
import VideoList from '../../components/VideoList';
import youTube from '../../api/youtube';

import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);

  const [videos, setVideos] = useState([]);

  const fetchVideos = (searchValue) => {
    youTube({
      part: 'snippet',
      maxResults: 10,
      q: searchValue,
    }).then(setVideos);
  };

  return (
    <section className="homepage" ref={sectionRef}>
      <NavBar setVideos={setVideos} search="search" onSearchChange={fetchVideos} />

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

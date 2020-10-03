import React, { useLayoutEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import SelectedVideoContext from '../../providers/SelectedVideo/SelectedVideoContext';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import VideoDetail from '../../pages/VideoDetail';
import Favourites from '../../pages/Favourites';
import { random } from '../../utils/fns';

function App() {
  const selectedVideo = useState({
    id: 'dQw4w9WgXcQ',
    title: 'rick roll',
    description: 'rick roll',
  });

  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <SelectedVideoContext.Provider value={selectedVideo}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/video">
              <VideoDetail />
            </Route>
            <Route exact path="/favourites">
              <Favourites />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </SelectedVideoContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

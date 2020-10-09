import React, { useState } from 'react';
import SelectedVideoContext from './SelectedVideoContext';

const SelectedVideoProvider = ({ children }) => {
  const selectedVideo = useState({
    id: 'dQw4w9WgXcQ',
    title: 'rick roll',
    description: 'rick roll',
  });

  return (
    <SelectedVideoContext.Provider value={selectedVideo}>
      {children}
    </SelectedVideoContext.Provider>
  );
};

export default SelectedVideoProvider;

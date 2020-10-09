import React, { useState, useContext } from 'react';
import SelectedVideoContext from './SelectedVideoContext';

const useSelectedVideo = () => {
  const context = useContext(SelectedVideoContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
};

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

export { useSelectedVideo };
export default SelectedVideoProvider;

import { createContext } from 'react';

const SelectedVideoContext = createContext([
  { id: '', title: '', description: '' },
  () => {},
]);

export default SelectedVideoContext;

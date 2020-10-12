import axios from 'axios';

const youTube = async (params) => {
  const instance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
      key: process.env.REACT_APP_API_KEY,
    },
  });

  const response = await instance.get('/search', {
    params,
  });

  return response.data.items;
};

export default youTube;

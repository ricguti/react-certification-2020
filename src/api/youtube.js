import axios from 'axios';
import { API_KEY } from '../key/apiKey';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    key: API_KEY,
  },
});

import axios from 'axios';

export const baseURL = 'https://app.dajournalgirl.com';

const AxiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: 'application/json',
    'X-API-TOKEN': 'dgWpK93qKPPAqG8dVD4xreteLMfjjr',
  },
});

export default AxiosInstance;

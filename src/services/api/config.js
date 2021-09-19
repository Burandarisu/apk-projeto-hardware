import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.12:8080',
  timeout: 3000,
  headers: {
    ContentType: 'application/json',
    Accept: 'application/json',
  },
});

export default api;

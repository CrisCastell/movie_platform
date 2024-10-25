import axios from 'axios';

export const themoviedbApi = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
});


themoviedbApi.interceptors.request.use((config) => {
  const authToken = localStorage.getItem('authToken') || localStorage.getItem('guestToken');
  if (authToken) {
    config.params['session_id'] = authToken;  // Agrega el token de sesión o de guest como parámetro
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
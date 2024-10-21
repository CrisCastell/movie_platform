import axios from "axios";

export const themoviedbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '53e6e3165493f598289039440dbbc832',
  },
});
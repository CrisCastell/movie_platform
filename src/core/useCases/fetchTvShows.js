import { themoviedbApi } from '../../adapters/api/themoviedbApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleErrors } from '../../adapters/api/handleErrors';
import { transformTvShows } from '../../adapters/api/transformTvShows';
import { API_BASE_URL, API_KEY } from '../../config';


export const fetchTvShows = createAsyncThunk(
  'tvShows/fetchTvShows',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/discover/tv?language=es-ar`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
      });

      handleErrors(response);

      const data = await response.json();

      return transformTvShows(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


// export async function fetchTvShows() {
//   const response = await themoviedbApi.get('/discover/tv');
//   return response.data.map(movie => new TvShow(movie.id, movie.title, movie.overview, movie.releaseDate, movie.posterPath));
// }
import { themoviedbApi } from '../../adapters/api/themoviedbApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleErrors } from '../../adapters/api/handleErrors';
import { transformPeliculas } from '../../adapters/api/transformPeliculas';
import { API_BASE_URL, API_KEY } from '../../config';


export const fetchPeliculas = createAsyncThunk(
  'peliculas/fetchPeliculas',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/discover/movie?language=es-ar`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
      });

      // Manejar posibles errores en la respuesta
      handleErrors(response);

      const data = await response.json();

      // Transformar los datos a instancias de Pelicula
      return transformPeliculas(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);







// export async function fetchPeliculas() {
//   console.log(themoviedbApi)
//   const response = await themoviedbApi.get('/discover/movies');
//   console.log(response)
//   return response.data.map(pelicula => new Pelicula(pelicula.id, pelicula.title, pelicula.overview, pelicula.releaseDate, pelicula.posterPath));
// }

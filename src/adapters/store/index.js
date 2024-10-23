import { configureStore } from '@reduxjs/toolkit';
import peliculasReducer from './slices/pelicula/peliculasSlice';
import tvShowsReducer from './slices/tvShow/tvShowsSlice';

const store = configureStore({
  reducer: {
    peliculas: peliculasReducer,
    tvShows: tvShowsReducer,
  },
});

export default store;
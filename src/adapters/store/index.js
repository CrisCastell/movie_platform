import { configureStore } from '@reduxjs/toolkit';
import peliculasReducer from './slices/peliculasSlice';
import tvShowsReducer from './slices/tvShowsSlice';

const store = configureStore({
  reducer: {
    peliculas: peliculasReducer,
    tvShows: tvShowsReducer,
  },
});

export default store;
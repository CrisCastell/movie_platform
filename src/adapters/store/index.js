import { configureStore } from '@reduxjs/toolkit';
import peliculasReducer from './slices/pelicula/peliculasSlice';
import tvShowsReducer from './slices/tvShow/tvShowsSlice';
import detailReducer from './slices/common/detailSlice'
import favoritosReducer from './slices/favorito/favoritosSlice'

const store = configureStore({
  reducer: {
    peliculas: peliculasReducer,
    tvShows: tvShowsReducer,
    detail: detailReducer,
    favoritos: favoritosReducer
  },
});

export default store;
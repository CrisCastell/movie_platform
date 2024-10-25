import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFavoritosUseCase, removeFromFavoritosUseCase } from '../../../../core/useCases/favoritos/fetchFavoritos';

export const fetchFavoritos = createAsyncThunk(
  'favorites/fetchFavoritos',
  async ({ type }, { rejectWithValue }) => {
    try {
      const sessionId = localStorage.getItem('authToken');
      const accountId = localStorage.getItem('accountId');

      
      if (!sessionId || !accountId) {
        throw new Error('Usuario no autenticado');
      }

      const data = await getFavoritosUseCase(type, accountId, sessionId);
      
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



export const removeFavorito = createAsyncThunk(
  'favoritos/removeFavorito',
  async ({ type, mediaId,  }, { rejectWithValue }) => {
  try {
  
      const sessionId = localStorage.getItem('authToken');
      const accountId = localStorage.getItem('accountId');
      const response = await removeFromFavoritosUseCase({ type, accountId, sessionId, mediaId });
      return mediaId;
  } catch (error) {
      return rejectWithValue(error.message);
  }
}
);


const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    totalPages: 10
  },
  reducers: {},
  extraReducers: (builder) => {

    builder
      .addCase(fetchFavoritos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFavoritos.fulfilled, (state, action) => {
        state.items = action.payload.lista;
        state.totalPages = action.payload.totalPages < 10 ? action.payload.totalPages : 10;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(fetchFavoritos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });

    // Extra reducer para removeFavorite (eliminar favorito)
    builder
      .addCase(removeFavorito.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeFavorito.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);  // Elimina el elemento del estado
        state.status = 'succeeded';
      })
      .addCase(removeFavorito.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default favoritosSlice.reducer;

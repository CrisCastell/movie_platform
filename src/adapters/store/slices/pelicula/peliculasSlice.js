import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPeliculasUseCase } from '../../../../core/useCases/pelicula/fetchPeliculas';


export const fetchPeliculas = createAsyncThunk(
  'peliculas/fetchPeliculas',
  async (params, { rejectWithValue }) => {
    try {
      const data = await fetchPeliculasUseCase(params);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



const peliculasSlice = createSlice({
  name: 'peliculas',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    currentPage: 1,
    totalPages:10,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeliculas.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPeliculas.fulfilled, (state, action) => {
        state.items = action.payload.lista;
        state.totalPages = action.payload.totalPages < 10 ? action.payload.totalPages : 10;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(fetchPeliculas.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});
export const { setPage } = peliculasSlice.actions;
export default peliculasSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPeliculasUseCase } from '../../../../core/useCases/pelicula/fetchPeliculas';


export const fetchPeliculas = createAsyncThunk(
  'peliculas/fetchPeliculas',
  async (_, { rejectWithValue }) => {
    try {
      const peliculas = await fetchPeliculasUseCase();
      return peliculas;
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
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeliculas.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPeliculas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(fetchPeliculas.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default peliculasSlice.reducer;
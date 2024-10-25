import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTvShowsUseCase } from '../../../../core/useCases/tvShow/fetchTvShows';



export const fetchTvShows = createAsyncThunk(
    'tvShows/fetchTvShows',
    async (params, { rejectWithValue }) => {
        try {
            const tvShows = await fetchTvShowsUseCase(params);
            return tvShows;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);




const tvShowsSlice = createSlice({
  name: 'tvShows',
  initialState: { 
    items: [], 
    status: 'idle',
    error: null,
    currentPage: 1,
    totalPages: 10
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTvShows.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTvShows.fulfilled, (state, action) => {
        state.items = action.payload.lista;
        state.totalPages = action.payload.totalPages < 10 ? action.payload.totalPages : 10;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(fetchTvShows.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setPage } = tvShowsSlice.actions;
export default tvShowsSlice.reducer;
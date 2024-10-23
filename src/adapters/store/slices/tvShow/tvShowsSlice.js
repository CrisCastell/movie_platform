import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTvShowsUseCase } from '../../../../core/useCases/tvShow/fetchTvShows';



export const fetchTvShows = createAsyncThunk(
    'tvShows/fetchTvShows',
    async (_, { rejectWithValue }) => {
        try {
            const tvShows = await fetchTvShowsUseCase();
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
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTvShows.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTvShows.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(fetchTvShows.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default tvShowsSlice.reducer;
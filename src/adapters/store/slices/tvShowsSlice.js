import { createSlice } from '@reduxjs/toolkit';
import { fetchTvShows } from '../../../core/useCases/fetchTvShows';

const tvShowsSlice = createSlice({
  name: 'tvShows',
  initialState: { items: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTvShows.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTvShows.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchTvShows.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default tvShowsSlice.reducer;
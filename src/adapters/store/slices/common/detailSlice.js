import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDetailUseCase } from '../../../../core/useCases/common/fetchDetail';
import { detailAdapter } from '../../../mappers/detailAdapter';

export const fetchDetail = createAsyncThunk(
  'detail/fetchDetail',
  async ({ id, type, params }, { rejectWithValue }) => {
    try {
      const data = await fetchDetailUseCase(id, type, params);
      const adaptedData = detailAdapter(data, type);
      return adaptedData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    details: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDetail.fulfilled, (state, action) => {
        state.details = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(fetchDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default detailSlice.reducer;

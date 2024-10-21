import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPeliculas } from '../../../core/useCases/fetchPeliculas';


const peliculasSlice = createSlice({
  name: 'peliculas',
  initialState: {
    items: [],
    status: 'idle',
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
      })
      .addCase(fetchPeliculas.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default peliculasSlice.reducer;



// import { createSlice } from '@reduxjs/toolkit';
// import { fetchPeliculas } from '../../../core/useCases/fetchPeliculas';

// const peliculasSlice = createSlice({
//   name: 'peliculas',
//   initialState: { items: [], status: 'idle' },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPeliculas.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchPeliculas.fulfilled, (state, action) => {
//         state.items = action.payload;
//         state.status = 'succeeded';
//       })
//       .addCase(fetchPeliculas.rejected, (state) => {
//         state.status = 'failed';
//       });
//   },
// });

// export default peliculasSlice.reducer;
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const getMotorcycles = createAsyncThunk('getMotorcycles', async (authorization, { getState }) => {
  try {
    const myToken = getState().user.currentUser.token;
    const result = await axios.get('http://localhost:3000/api/v1/motorcycles', {
      headers: {
        Authorization: `Bearer ${myToken}`,
        ...authorization,
      },
    });
    return result.data;
  } catch (error) {
    return error.response.data;
  }
});

const motorcycleSlice = createSlice({
  name: 'motorcycle',
  initialState: {
    motorcycles: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMotorcycles.fulfilled, (state, action) => {
        const { message, motorcycles } = action.payload;
        state.motorcycles = motorcycles;
      });
  },
});

export default motorcycleSlice.reducer;
export { getMotorcycles };

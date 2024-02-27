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

const deleteMotorcycle = createAsyncThunk('deleteMotorcycle', async (motorcycleId, { getState }) => {
  try {
    const myToken = getState().user.currentUser.token;
    await axios.delete(`http://localhost:3000/api/v1/motorcycles/${motorcycleId}`, {
      headers: {
        Authorization: `Bearer ${myToken}`,
      },
    });
    return motorcycleId;
  } catch (error) {
    return error.response.data;
  }
});

const addMotorcycle = createAsyncThunk('create motorcycle', async (motorcycleData, { getState }) => {
  try {
    const myToken = getState().user.currentUser.token;
    const result = await axios.post('http://localhost:3000/api/v1/motorcycles', motorcycleData,
      {
        headers: {
          Authorization: `Bearer ${myToken}`,
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
    builder.addCase(getMotorcycles.fulfilled, (state, action) => {
      const { motorcycles } = action.payload;
      state.motorcycles = motorcycles;
    });

    builder.addCase(deleteMotorcycle.fulfilled, (state, action) => {
      state.motorcycles = state.motorcycles.filter((m) => m.id !== action.payload);
    });

    builder.addCase(addMotorcycle.fulfilled,(state, action) => {
     state.motorcycles = action.payload.data;
    });
  },
});

export default motorcycleSlice.reducer;
export { getMotorcycles, deleteMotorcycle, addMotorcycle };
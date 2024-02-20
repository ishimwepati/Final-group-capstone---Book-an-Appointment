import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const login = createAsyncThunk('login', async (userData) => {
  try {
    const result = await axios.post('http://localhost:3000/api/v1/login', { user: { ...userData } });
    return result.data;
  } catch (error) {
    return error.response.data;
  }
});

const signup = createAsyncThunk('signupUser', async (newUserData) => {
  try {
    const result = await axios.post('http://localhost:3000/api/v1/signup', { user: { ...newUserData } });
    return result.data;
  } catch (error) {
    return error.response.data;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.information = 'Created Your Account';
        if (action.payload?.error) {
          state.error = true;
          state.success = false;
        } else {
          state.success = true;
          state.error = false;
        }
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log(action.payload.token);
        state.message = action.payload.message;
        state.isLoading = false;
        if (action.payload?.error) {
          state.error = true;
        } else {
          state.success = true;
          state.currentUser = action.payload;
          state.message = action.payload.message;
          state.requestHeader = { headers: { Authorization: `Bearer ${action.payload.token}`, 'Content-Type': 'application/json' } };
        }
      });
  },
});

export default userSlice.reducer;
export { login, signup };

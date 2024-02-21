import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import motorcycleReducer from './motorcycleSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    motorcycle: motorcycleReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import motorcycleReducer from './motorcycleSlice';
import reserveReducer from './reserveSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    motorcycle: motorcycleReducer,
    reserve: reserveReducer,
  },
});

export default store;

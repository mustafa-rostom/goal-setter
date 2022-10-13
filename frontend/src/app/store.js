import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../featuers/auth/authSlice'

export const store = configureStore({
  reducer: {
    auth : authReducer
  },
});

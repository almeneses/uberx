import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices/navSlice';

const rootReducer = { nav: navReducer };

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

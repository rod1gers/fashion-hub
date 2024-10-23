import { configureStore } from '@reduxjs/toolkit'
import screenSizeReducer from '../slices/screenSizeSlice';

export const store = configureStore({
  reducer: {
    screenSize: screenSizeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
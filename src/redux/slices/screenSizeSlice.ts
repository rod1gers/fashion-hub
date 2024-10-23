import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store';

interface ScreenSizeState {
  isMobile: boolean;
}

const initialState: ScreenSizeState = {
  isMobile: false,
}

export const screenSizeSlice = createSlice({
  name: 'screenSize',
  initialState,
  reducers: {
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload
    },
  },
})

export const { setIsMobile } = screenSizeSlice.actions

// Selectors
export const checkIsMobile = (state: RootState) => state.screenSize.isMobile;

export default screenSizeSlice.reducer
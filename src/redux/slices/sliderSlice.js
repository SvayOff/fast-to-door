import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeHistory: 0,
}

const sliderSlice = createSlice({
  name: 'sliderSlice',
  initialState,
  reducers: {
    setActiveHistory: (state, action) => {
      state.activeHistory = action.payload;
    }
  }
});

export const { setActiveHistory } = sliderSlice.actions;

export default sliderSlice.reducer;
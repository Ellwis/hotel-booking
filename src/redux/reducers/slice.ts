import { createSlice } from '@reduxjs/toolkit';

const stepSlice = createSlice({
  name: 'step',
  initialState: { currentStep: 0 },
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    clearStep: (state) => {
      state.currentStep = 0; 
    },
  },
});
 

export const { nextStep, clearStep } = stepSlice.actions;
export default stepSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const calculatorDataSlice = createSlice({
  name: 'calculatorData',
  initialState: {
    calculatorData: null,
  },
  reducers: {
    storeCalculatorData: (state, action) => {
      state.calculatorData = action.payload;
    },
  },
});

export const { storeCalculatorData } = calculatorDataSlice.actions;
export const storeCalcDataReducer = calculatorDataSlice.reducer;

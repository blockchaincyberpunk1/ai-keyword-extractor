import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  text: '',
};

// Create the slice using createSlice
const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
  },
});

// Export the actions
export const { setText } = inputSlice.actions;

// Export the reducer
export default inputSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  keywords: '',
  loading: false,
  isOpen: false,
};

// Create the slice using createSlice
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setKeywords: (state, action) => {
      state.keywords = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

// Export the actions
export const { setKeywords, setLoading, setIsOpen } = modalSlice.actions;

// Export the reducer
export default modalSlice.reducer;

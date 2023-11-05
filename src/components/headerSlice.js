// headerSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  title: 'AI Keyword Extractor',
  description: 'The AI Keyword Extractor is a web application designed to assist users in extracting keywords from a given text. The application leverages the power of OpenAIs text-davinci-003 model to analyze and process the input text. Users can simply paste their desired text into the input field, and upon clicking the "Extract Keywords" button, the application sends a request to the OpenAI API.',
};

// Create the slice using createSlice
const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {},
});

// Export the reducer
export default headerSlice.reducer;

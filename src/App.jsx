// Importing hooks and components from React and Chakra UI libraries.
import { useState } from 'react';
import { Container, Box } from '@chakra-ui/react';
// Importing Redux Toolkit's store configuration function.
import { configureStore } from '@reduxjs/toolkit';
// Importing the Provider component from React Redux to connect the Redux store with React.
import { Provider } from 'react-redux';
// Importing components that make up the different parts of the app's UI.
import Header from './components/Header';
import Footer from './components/Footer';
import TextInput from './components/TextInput';
import KeywordsModal from './components/KeywordsModal';

// Importing slice reducers for different features of the application.
import headerReducer from './components/headerSlice';
import modalReducer from './components/modalSlice';
import inputReducer from './components/inputSlice';

// Configuring the Redux store with the slice reducers.
const store = configureStore({
  reducer: {
    header: headerReducer,
    modal: modalReducer,
    input: inputReducer,
    // other reducers can be added here as needed.
  },
});

// Main App component.
const App = () => {
  // State hooks to manage the keywords array, modal open state, and loading state.
  const [keywords, setKeywords] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Asynchronous function to extract keywords using an API call.
  const extractKeywords = async (text) => {
    setLoading(true); // Begin loading state.
    setIsOpen(true); // Open the modal to display either loading indicator or results.

    // Configuration for the API request.
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization header with the API key stored in environment variables for security.
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003', // The OpenAI model to use.
        prompt: `Extract keywords from this text. Make the first letter of every word uppercase and separate with commas:\n\n${text}`,
        // Additional parameters to influence the behavior of the API call.
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.8,
        presence_penalty: 0.0,
      }),
    };

    try {
      // Perform the API request.
      const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options);
      // Check if the response is successful.
      if (!response.ok) {
        throw new Error('API request failed');
      }
      const json = await response.json();
      // Log and set the keywords state with the result.
      console.log(json.choices[0].text.trim());
      setKeywords(json.choices[0].text.trim());
    } catch (error) {
      // Handle errors such as network issues or API failures.
      console.error(error);
      // Display a toast message to the user (assuming a toast function is available).
    } finally {
      // Ensure the loading state is turned off after the API call is completed.
      setLoading(false);
    }
  };

  // Function to close the keywords modal.
  const closeModal = () => {
    setIsOpen(false);
  };

  // The JSX returned by the App component.
  return (
    // Providing the Redux store to the React application.
    <Provider store={store}>
      {/* Main application container with styling. */}
      <Box bg='background' color='white' height='100vh' paddingTop={130}>
        {/* Centered container for the application's content. */}
        <Container maxW='3xl' centerContent>
          <Header />
          <TextInput extractKeywords={extractKeywords} />
          <Footer />
        </Container>
        {/* Modal for displaying keywords or loading state. */}
        <KeywordsModal
          keywords={keywords}
          loading={loading}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      </Box>
    </Provider>
  );
};

// Exporting the App component to be used as the root of the application.
export default App;

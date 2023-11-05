import { useState } from 'react';
import { Button, Textarea } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { setText } from './inputSlice';

const TextInput = ({ extractKeywords }) => {
  const dispatch = useDispatch();
  const { text } = useSelector((state) => state.input);
  const toast = useToast();

  const submitText = () => {
    if (text === '') {
      // Display an error toast if the text input is empty
      toast({
        title: 'Text field is empty.',
        description: 'Please enter some text to extract keywords.',
        status: 'error',
        duration: 5000,
        isClosable: false,
      });
      return;
    }

    // Call the extractKeywords function passed from the parent component
    extractKeywords(text);
  };

  return (
    <>
      {/* Textarea for user input */}
      <Textarea
        bg='textInput'
        padding={4}
        marginTop={6}
        height={200}
        color='button'
        value={text}
        onChange={(e) => dispatch(setText(e.target.value))}
      />

      {/* Button to trigger keyword extraction */}
      <Button
        bg='button'
        color='white'
        marginTop={4}
        width='100%'
        _hover={{ bg: 'blue.700' }}
        onClick={submitText}
      >
        Extract Keywords
      </Button>
    </>
  );
};

export default TextInput;

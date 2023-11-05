// Import necessary dependencies
import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  CircularProgress,
} from '@chakra-ui/react';

import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch hooks
import { setKeywords, setLoading, setIsOpen } from './modalSlice'; // Import actions from modalSlice


// KeywordsModal component to display extracted keywords in a modal
const KeywordsModal = () => {
  // Access the keywords, loading, and isOpen from the Redux state
  const keywords = useSelector((state) => state.modal.keywords);
  const loading = useSelector((state) => state.modal.loading);
  const isOpen = useSelector((state) => state.modal.isOpen);

  // Get the dispatch function from Redux
  const dispatch = useDispatch();

  // Function to close the modal
  const closeModal = () => {
    dispatch(setIsOpen(false));
  };

  return (
    <>
      {/* Modal component */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          {/* Modal header */}
          <ModalHeader>Keywords</ModalHeader>
          <ModalCloseButton />

          {/* Modal body */}
          <ModalBody display='flex' alignItems='center' justifyContent='center'>
            {/* Display CircularProgress if loading is true */}
            {loading ? (
              <CircularProgress isIndeterminate color='blue.300' />
            ) : (
              /* Display keywords if loading is false */
              <Text>{keywords}</Text>
            )}
          </ModalBody>

          {/* Modal footer */}
          <ModalFooter>
            <Button colorScheme='button' mr={3} onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default KeywordsModal;

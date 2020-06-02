import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  Modal,
  Box
} from '@chakra-ui/core';
import DragAndDrop from './DragAndDrop';

const ImgUploadModal = ({ isOpen, onClose }) => {
  const [dragging, setDragging] = React.useState(false);
  const [message, setMessage] = React.useState('Drag and drop file here');
  const handleDrop = (file) => {
    console.log(file[0].name);
  };
  let dragCounter = 0;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload new profile picture</ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign="center">
            <form action="">
              <DragAndDrop
                dragCounter={dragCounter}
                dragging={dragging}
                setDragging={setDragging}
                setMessage={setMessage}
                handleDrop={handleDrop}
              >
                {
                  <Box my="2rem" py="2rem" border="1px dashed gray">
                    {message}
                  </Box>
                }
                <Button variantColor="blue" mr={3} onClick={() => setDragging(false)}>
                  Or Select Select file
                </Button>
              </DragAndDrop>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} variant="ghost">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

ImgUploadModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
};

export default ImgUploadModal;

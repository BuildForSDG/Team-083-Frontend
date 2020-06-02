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
  Box,
  Flex
} from '@chakra-ui/core';
import DragAndDrop from './DragAndDrop';
import uploadPhoto from '../../http/upload_photo';

const ImgUploadModal = ({ isOpen, onClose }) => {
  const [message, setMessage] = React.useState('Drag and drop file here');
  const [file, setFile] = React.useState();

  const uploadImg = () => {
    const data = new FormData();
    data.append('profilePhoto', this.state.selectedFile);
    uploadPhoto(data);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload new profile picture</ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign="center">
            <form onSubmit={uploadImg}>
              <DragAndDrop setMessage={setMessage} setFile={setFile}>
                {
                  <Box my="2rem" py="2rem" border="1px dashed gray">
                    {message}
                  </Box>
                }
              </DragAndDrop>
              <Flex justify="center" alignItems="center">
                <label>
                  <p>Or Select directly</p>
                  <input onChange={(e) => setFile(e.target.files[0])} type="file" />
                </label>
              </Flex>

              <Button
                isloading="false"
                loadingText="Uploading"
                mt="2rem"
                variantColor="blue"
                isDisabled={file === undefined}
              >
                Upload
              </Button>
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

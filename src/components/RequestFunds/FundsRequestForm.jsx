import React from 'react';
import { Formik, Field } from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  Grid,
  useTheme
} from '@chakra-ui/core';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSelector } from 'react-redux';
import requestForFunds from '../../http/request_for_funds';

const FundsRequestForm = () => {
  const validateDescription = (value) => {
    if (!value) {
      return 'Description is required';
      // eslint-disable-next-line no-else-return
    } else if (value.length > 30) {
      return 'Description is too long';
    }
  };
  const validateAmount = (value) => {
    if (!value) {
      return 'Amount is required';
    }
  };
  const validateMilestone = (value) => {
    if (!value) {
      return 'Milestone is required';
    }
  };

  const { width, bp1 } = useSelector((state) => state.resize);
  const theme = useTheme();

  const {
    colors: { primary }
  } = theme;

  return (
    <>
      <Formik
        initialValues={{ milestone: '', description: '', amount: '' }}
        onSubmit={async (values, actions) => {
          const response = await requestForFunds(JSON.stringify(values, null, 2));
          if (response.status === 'success') {
            actions.setSubmitting(false);
            actions.resetForm({ milestone: '', description: '', amount: '' });
            toast.success('Successfully sent fund request');
          } else {
            actions.setSubmitting(false);
            toast.error(response);
          }
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <Grid
              p="2rem"
              bg="white"
              pt="40.5px"
              borderTop="none"
              shadow="md"
              borderWidth="1px"
              flex="1"
              rounded="md"
              w={width >= bp1 ? `${width - 550}px` : '100%'}
              rowGap="2rem"
              mt="1rem"
            >
              <Field name="milestone" validate={validateMilestone}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.milestone && form.touched.milestone}>
                    <FormLabel htmlFor="milestone">Milestone</FormLabel>
                    <Input {...field} id="milestone" type="text" placeholder="Set up modern workspace" />
                    <FormErrorMessage>{form.errors.milestone}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="description" validate={validateDescription}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.description && form.touched.description}>
                    <FormLabel htmlFor="description">Description</FormLabel>
                    <Input {...field} id="description" placeholder="Monthly cable subscription" />
                    <FormErrorMessage>{form.errors.description}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="amount" validate={validateAmount}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.amount && form.touched.amount}>
                    <FormLabel htmlFor="name">Amount</FormLabel>
                    <InputGroup>
                      <InputLeftElement color="gray.300" fontSize="1.2em">
                        {'$'}
                      </InputLeftElement>
                      <Input type="number" {...field} id="amount" placeholder="2000" />
                    </InputGroup>
                    <FormErrorMessage>{form.errors.amount}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button width="100px" mt={4} backgroundColor={primary} color="white" isLoading={props.isSubmitting} type="submit">
                Request
              </Button>
            </Grid>
          </form>
        )}
      </Formik>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default FundsRequestForm;

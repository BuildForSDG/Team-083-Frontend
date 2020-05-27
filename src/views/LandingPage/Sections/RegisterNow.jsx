import React from 'react';
import { Box } from '@material-ui/core';
import Button from 'components/CustomButtons/Button';

const RegisterNow = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Button size="lg" color="danger">
        Register Now!
      </Button>
    </Box>
  );
};

export default RegisterNow;

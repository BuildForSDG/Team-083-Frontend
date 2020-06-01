import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import axios from 'axios';
import './css/auth.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from '@reach/router';
import { Box } from '@chakra-ui/core';
import { useDispatch } from 'react-redux';

const logUserIn = async (details) => {
  const client = axios.create();

  client.interceptors.response.use(
    (res) => res,
    (err) => {
      throw new Error(err.response.data.message);
    }
  );

  let response;
  try {
    const options = {
      method: 'post',
      url: 'https://smefundapi.herokuapp.com/api/v1/login',
      timeout: 30000,
      data: details,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    };
    response = await client(options);
  } catch (error) {
    response = error.message;
  }
  return response;
};

const validate = (values) => {
  const errors = {};
  const check = (fields) => {
    Object.keys(fields).forEach((x) => {
      if (!x || !values[x]) {
        errors[x] = 'Required';
      }
    });
  };
  check(values);

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const MainForm = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
  return (
    <div className="signup-form-cont">
      <form onSubmit={handleSubmit} className="signup-form" action="">
        <header className="form-header">
          <h3>Welcome back</h3>
        </header>
        <div className="row gtr-uniform">
          <div className="col-6 col-12-xsmall">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              type="email"
              name="email"
              id="email"
              placeholder="john@doe.com"
            />
            <p className="error-message">{errors.email && touched.email && errors.email}</p>
          </div>
          <div className="col-6 col-12-xsmall">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              type="password"
              name="password"
              id="password"
              placeholder="correct horse battery staple"
            />
            <p className="error-message">{errors.password && touched.password && errors.password}</p>
          </div>
        </div>

        <div className="col-12 mt-6">
          <button disabled={isSubmitting} type="submit" className="primary">
            Log in
          </button>
        </div>
        <Box my="1rem" textAlign="center">
          <span>Need an account?</span>{' '}
          <span>
            <Link to="/register">register now!</Link>
          </span>
        </Box>
        <Box my="1rem" textAlign="center">
          <span>Forgot password?</span>{' '}
          <span>
            <Link to="/reset-password">reset here</Link>
          </span>
        </Box>
      </form>
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
    </div>
  );
};

MainForm.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
};

const initialValues = { email: '', password: '' };

// const onsubmit = async (values, { setSubmitting, dispatch }) => {
//   const response = await logUserIn(values);
//   if (response) {
//     setSubmitting(false);
//     if (typeof response === 'object') {
//       toast.success('Successful');
//       dispatch({ type: 'AUTHENTICATE_USER' });
//     } else {
//       toast.error(`Error: ${response}`);
//     }
//   }
// };

const Login = () => {
  const dispatch = useDispatch();

  const onsubmit = async (values, { setSubmitting }) => {
    const response = await logUserIn(values);
    if (response) {
      setSubmitting(false);
      if (typeof response === 'object') {
        toast.success('Successful');
        dispatch({ type: 'AUTHENTICATE_USER' });
      } else {
        toast.error(`Error: ${response}`);
      }
    }
  };

  return (
    <Formik initialValues={initialValues} validate={validate} onSubmit={onsubmit}>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <MainForm
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      )}
    </Formik>
  );
};

export default Login;

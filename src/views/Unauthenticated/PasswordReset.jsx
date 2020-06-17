import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import axios from 'axios';
import { Box } from '@chakra-ui/core';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import PasswordValidator from 'password-validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/auth.css';
import { Link } from '@reach/router';

const registerUser = async (details) => {
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
      url: 'https://smefundapi.herokuapp.com/api/v1/signup',
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
  const schema = new PasswordValidator();
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

  schema
    .is()
    .min(8)
    .is()
    .max(100)
    .has()
    .uppercase()
    .has()
    .lowercase()
    .has()
    .symbols()
    .has()
    .digits()
    .is()
    .not()
    .oneOf(['Passw0rd', 'Password123', 'correct horse battery staple', 'password']);

  const validityFails = schema.validate(values.password, { list: true });
  const validityMsg = [];

  validityFails.forEach((x) => {
    if (x === 'min') {
      validityMsg.push('Password is less than 8 characters.');
    } else if (x === 'uppercase') {
      validityMsg.push('Password has no uppercase.');
    } else if (x === 'lowercase') {
      validityMsg.push('Password has no lowercase.');
    } else if (x === 'symbols') {
      validityMsg.push('Password has no special character.');
    } else if (x === 'digits') {
      validityMsg.push('Password has no digits.');
    } else if (x === 'oneOf') {
      validityMsg.push('Password is too weak.');
    }
  });
  if (validityMsg.length > 0) {
    errors.password = validityMsg.join(' ');
  }
  return errors;
};

const MainForm = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);
  return (
    <div className="signup-form-cont">
      <form onSubmit={handleSubmit} className="signup-form" action="">
        <header className="form-header">
          <h3>Register as</h3>
          <div className="register-as">
            <div className="row">
              <input
                id="sme-user-type"
                value="sme"
                checked={values.userType === 'sme'}
                name="userType"
                type="radio"
                onChange={handleChange}
              />
              <label htmlFor="sme-user-type">SME</label>
            </div>

            <div className="row">
              <input
                id="investor-user-type"
                value="investor"
                name="userType"
                checked={values.userType === 'investor'}
                onChange={handleChange}
                type="radio"
              />
              <label htmlFor="investor-user-type">Investor</label>
            </div>
            <div className="primary"></div>
          </div>
        </header>
        <div className="row gtr-uniform">
          <div className="col-6 col-12-xsmall">
            <label htmlFor="firstname">First name</label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstname}
              type="text"
              name="firstname"
              id="firstname"
              placeholder="John"
            />
            <p className="error-message">{errors.firstname && touched.firstname && errors.firstname}</p>
          </div>
          <div className="col-6 col-12-xsmall">
            <label htmlFor="lastname">Last name</label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastname}
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Doe"
            />
            <p className="error-message">{errors.lastname && touched.lastname && errors.lastname}</p>
          </div>
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
          <div className="col-6 col-12-xsmall password-box">
            <label htmlFor="password">Password</label>
            <div className="input-icon-cont">
              <input
                className="password-input"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                type={passwordVisibility ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="correct horse battery staple"
              />
              <Box
                width="20px"
                height="20px"
                onClick={() => setPasswordVisibility(!passwordVisibility)}
                as={passwordVisibility ? FaEye : FaEyeSlash}
              />
            </div>
            <p className="error-message">{errors.password && touched.password && errors.password}</p>
          </div>
        </div>

        <div className="col-12 mt-6">
          <button disabled={isSubmitting} type="submit" className="primary">
            Register
          </button>
        </div>
        <Box my = "1rem" textAlign = "center">
          <span>Already have an account?</span>
          {" "}
          <span>
            <Link to="/login">Log in here</Link>
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

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  userType: ''
};

const onsubmit = async (values, { setSubmitting }) => {
  const details = {
    name: `${values.firstname} ${values.lastname}`,
    email: values.email,
    password: values.password,
    userType: values.userType
  };
  const response = await registerUser(details);
  if (response) {
    setSubmitting(false);
    if (typeof response === 'object') {
      toast.success('Successful');
    } else {
      toast.error(`Error: ${response}`);
    }
  }
};

const PasswordReset = () => {
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

export default PasswordReset;

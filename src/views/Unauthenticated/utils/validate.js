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

export default validate;

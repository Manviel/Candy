const REQUIRED = "Required";

export const authValidator = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = REQUIRED;
  }

  if (!values.password) {
    errors.password = REQUIRED;
  }

  return errors;
};

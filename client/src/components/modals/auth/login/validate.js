export default (values, { fields }) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Обязательное поле';
  }

  if (!values.password) {
    errors.password = 'Обязательное поле';
  }

  return errors;
};

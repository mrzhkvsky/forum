/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";

const AuthField = ({ input, meta, ...rest }) => (
  <div className="form-group">
    <input {...input} {...rest} className="form-control" autoComplete="off" />
    <small className="form-text text-light">{meta.touched && !meta.active && meta.error}</small>
  </div>
);

AuthField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  input: PropTypes.shape({}).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    active: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
};

export default AuthField;
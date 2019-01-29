import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const InputField = ({ placeholder }) => (
  <TextField
    id="filled-name"
    label="Username"
    margin="normal"
    variant="filled"
  />
);

InputField.propTypes = {
  placeholder: PropTypes.string,
};

export default InputField;

import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

InputField.propTypes = {
  placeholder: PropTypes.string
};

const InputField = ({ placeholder }) => (
  <TextField
    id="filled-name"
    label="Username"
    value={placeholder}
    margin="normal"
    variant="filled"
  />
);

export default InputField;

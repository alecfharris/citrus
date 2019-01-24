import React from "react";
import StyledInput from "./style.js";
import PropTypes from "prop-types";

InputField.propTypes = {
  placeholder: PropTypes.string
};

const InputField = ({ placeholder }) => (
  <StyledInput placeholder={placeholder} />
);

export default InputField;

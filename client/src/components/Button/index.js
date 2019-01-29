import React from "react";
import Buttons from "@material-ui/core/Button";
import PropTypes from "prop-types";

const StyledButton = {
  backgroundColor: "#0097A7",
  margin: "8px"
};

const Button = ({ text }) => (
  <Buttons
    variant="contained"
    color="primary"
    size="large"
    style={StyledButton}
  >
    {text}
  </Buttons>
);

Button.propTypes = {
  text: PropTypes.string
};

export default Button;
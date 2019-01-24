import React from "react";
import Buttons from "@material-ui/core/Button";

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

export default Button;

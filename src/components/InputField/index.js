import React from "react";
import TextField from "@material-ui/core/TextField";

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

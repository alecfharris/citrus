import React from 'react';
import TextField from '@material-ui/core/TextField';

const PasswordField = () => (
  <TextField
    id="filled-password-input"
    label="Password"
    type="password"
    autoComplete="current-password"
    margin="normal"
    variant="filled"
  />
);

export default PasswordField;

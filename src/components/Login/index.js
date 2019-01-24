import React from "react";
import StyledHome from "./style.js";
import InputField from "../InputField";
import Logo from "../Logo";
import Button from "../Button";
import HeaderText from "../HeaderText";
import PropTypes from "prop-types";

Login.propTypes = {
  text: PropTypes.string
};

const Login = ({ text }) => (
  <StyledHome>
    <HeaderText text="CREATE AN ACCOUNT" />
    <Logo />
    <Button text="LOG IN" />
    <Button text="CREATE ACCOUNT" />
    {text}
  </StyledHome>
);

export default Login;

import React from "react";
import PropTypes from "prop-types";
import StyledHome from "./style.js";
import InputField from "../InputField";
import Logo from "../Logo";
import Button from "../Button";
import HeaderText from "../HeaderText";

const Login = ({ text }) => (
  <StyledHome>
    <HeaderText text="CREATE AN ACCOUNT" />
    <Logo />
    <Button text="LOG IN" />
    <Button text="CREATE ACCOUNT" />
    {text}
  </StyledHome>
);

Login.propTypes = {
  text: PropTypes.string
};

export default Login;

import React from "react";
import StyledHome from "./style.js";
import Logo from "../Logo";
import Button from "../Button";
import HeaderText from "../HeaderText";
import PropTypes from "prop-types";

const Home = ({ text }) => (
  <StyledHome>
    <HeaderText text="CREATE AN ACCOUNT" />
    <Logo />
    <Button text="LOG IN" />
    <Button text="CREATE ACCOUNT" />
    {text}
  </StyledHome>
);

Home.propTypes = {
  text: PropTypes.string
};

export default Home;

import React from "react";
import StyledHome from "./style.js";
import InputField from "../InputField";
import Logo from "../Logo";
import Button from "../Button";
import HeaderText from "../HeaderText";
import PasswordField from "../PasswordField";
import FridgeList from "../FridgeList";

const Home = () => (
  <StyledHome>
    <HeaderText text="CREATE AN ACCOUNT" />
    <Logo />
    <InputField />
    <PasswordField placeholder="Password" />
    <Button text="LOG IN" />
    <Button text="CREATE ACCOUNT" />
    <FridgeList />
  </StyledHome>
);

export default Home;
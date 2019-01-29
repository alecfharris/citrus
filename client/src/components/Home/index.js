import React from "react";
import StyledHome from "./style.js";
import InputField from "../InputField";
import Logo from "../Logo";
import Button from "../Button";
import HeaderText from "../HeaderText";
import PasswordField from "../PasswordField";
import FridgeList from "../FridgeList";
import GoogleSignIn from "../GoogleSignIn";
import FacebookLogin from "../FacebookLogin";

const Home = () => (
  <StyledHome>
    <HeaderText text="CREATE AN ACCOUNT" />
    <Logo />
    <InputField />
    <PasswordField placeholder="Password" />
    <Button text="LOG IN" />
    <Button text="CREATE ACCOUNT" />
    <GoogleSignIn />
    <FacebookLogin />
    <FridgeList />
  </StyledHome>
);

export default Home;

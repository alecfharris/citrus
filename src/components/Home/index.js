import React from "react";
import StyledHome from "./style.js";
import InputField from "../InputField";
import Logo from "../Logo";
import Button from "../Button";
import HeaderText from "../HeaderText";
import PasswordField from "../PasswordField";
import FridgeList from "../FridgeList";
import HeadNav from "../HeadNav/index.js";

const Home = () => (
  <StyledHome>
    <HeadNav pageTitle="The Pantry Project" />
    <HeaderText text="CREATE AN ACCOUNT" />
    <Logo />
    <InputField placeholder="Username" />
    <PasswordField placeholder="Password" />
    <Button text="LOG IN" />
    <Button text="CREATE ACCOUNT" />
    <FridgeList />
  </StyledHome>
);

export default Home;

import React from "react";
import StyledHome from "./style.js";
import InputField from "../InputField";
import Logo from "../Logo";
import Button from "../Button";
import HeaderText from "../HeaderText";
import PasswordField from "../PasswordField";
import RecipeCard from "../RecipeCard";

const HomeView = () => (
  <StyledHome>
    <HeaderText text="CREATE AN ACCOUNT" />
    <Logo />
    <InputField placeholder="Username" />
    <PasswordField placeholder="Password" />
    <Button text="LOG IN" />
    <Button text="CREATE ACCOUNT" />
    <RecipeCard
      imgsrc="https://picsum.photos/300/200/?random"
      title="This is a recipe title"
      description="This is a recipe description."
    />
  </StyledHome>
);

export default HomeView;

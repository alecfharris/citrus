import React from 'react';
import { Link } from 'react-router-dom';
import StyledWelcome from './style';
import Button from '../Button';
import Logo from '../Logo';
import WelcomeText from '../WelcomeText';

const Welcome = () => (
  <StyledWelcome>
    <Logo />
    {/* TODO: This needs to take first name of user from user db! */}
    <WelcomeText text="Paul" />
    <Link style={{ textDecoration: 'none' }} to="fridgelist">
      <Button text="My Fridge" />
    </Link>
    <Link style={{ textDecoration: 'none' }} to="browse">
      <Button text="My Recipes" />
    </Link>
  </StyledWelcome>
);

export default Welcome;

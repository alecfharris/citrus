import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import StyledHome from './style';
import Button from '../Button';

const Home = () => (
  <StyledHome>
    <Logo />
    {/* TODO: This needs to take first name of user from user db! */}
    <Link style={{ textDecoration: 'none' }} to="login">
      <Button text="Log In" />
    </Link>
  </StyledHome>
);

export default Home;

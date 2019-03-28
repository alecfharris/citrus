import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import WelcomeText from '../WelcomeText/WelcomeText';
import Logo from '../../shared_components/Logo/Logo';
import Button from '../../shared_components/Button/Button';
import { WelcomeContainer } from './Welcome.styles';

const Welcome = () => (
  <Layout>
    <WelcomeContainer>
      <Logo />
      <WelcomeText text="Alec" />
      <Link style={{ textDecoration: 'none' }} to="fridge">
        <Button text="My Fridge" />
      </Link>
      <Link style={{ textDecoration: 'none' }} to="recipes">
        <Button text="My Recipes" />
      </Link>
    </WelcomeContainer>
  </Layout>
);

export default Welcome;

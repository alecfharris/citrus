import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import WelcomeText from '../components/WelcomeText';
import Logo from '../components/Logo';
import Button from '../components/Button';

const Welcome = () => (
  <Layout>
    <Logo />
    <WelcomeText text="Paul" />
    <Link style={{ textDecoration: 'none' }} to="fridge">
      <Button text="My Fridge" />
    </Link>
    <Link style={{ textDecoration: 'none' }} to="browse">
      <Button text="My Recipes" />
    </Link>
  </Layout>
);

export default Welcome;

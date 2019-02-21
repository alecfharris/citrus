import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import WelcomeText from '../WelcomeText/WelcomeText';
import Logo from '../../shared_components/Logo/Logo';
import Button from '../../shared_components/Button/Button';

const Welcome = () => (
  <Layout>
    <div>
      <Logo />
      <WelcomeText text="Paul" />
      <Link style={{ textDecoration: 'none' }} to="fridge">
        <Button text="My Fridge" />
      </Link>
      <Link style={{ textDecoration: 'none' }} to="browse">
        <Button text="My Recipes" />
      </Link>
    </div>
  </Layout>
);

export default Welcome;

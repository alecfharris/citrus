import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

const Home = () => (
  <Layout>
    <Logo />
    <Link style={{ textDecoration: 'none' }} to="login">
      <Button text="Log In" />
    </Link>
  </Layout>
);

export default Home;

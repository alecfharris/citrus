import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Logo from '../components/Logo';
import Button from '../components/Button';

const Home = () => (
  <Layout>
    <Logo />
    <Link style={{ textDecoration: 'none' }} to="login">
      <Button text="Log In" />
    </Link>
  </Layout>
);

export default Home;

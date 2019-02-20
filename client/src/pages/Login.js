import React from 'react';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import GoogleSignIn from '../components/Login/GoogleSignIn';
import FacebookLogin from '../components/Login/FacebookLogin';

const Login = () => (
  <Layout>
    <Logo />
    <div
      style={{
        margin: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ margin: '8px 8px 8px 8px' }}>
        <FacebookLogin />
      </div>
      <div style={{ margin: '8px' }}>
        <GoogleSignIn />
      </div>
    </div>
  </Layout>
);

export default Login;

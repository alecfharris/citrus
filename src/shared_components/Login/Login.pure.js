import React from 'react';
import Layout from '../Layout/Layout';
import Logo from '../StatusIcon/StatusIcon';
import GoogleSignIn from './GoogleSignIn';
import FacebookLogin from './FacebookLogin';

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

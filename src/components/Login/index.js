import React from 'react';
import StyledHome from './style.js';
import Logo from '../Logo';
import GoogleSignIn from '../GoogleSignIn';
import FacebookLogin from '../FacebookLogin';
import NavBar from '../NavBar';

const Login = () => (
  <div>
    <NavBar title="Citrus" />
    <StyledHome>
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
    </StyledHome>
  </div>
);

export default Login;

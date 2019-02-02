import React from 'react';
// import PropTypes from 'prop-types';
import StyledHome from './style.js';
import Logo from '../Logo';
import HeaderText from '../HeaderText';
import GoogleSignIn from '../GoogleSignIn';
import FacebookLogin from '../FacebookLogin';

const Login = () => (
  <StyledHome>
    <HeaderText text="The Pantry Project" />
    <Logo alt="citrus" />
    {/* <InputField placeholder="Username" />
    <PasswordField placeholder="Password" /> */}
    <div
      style={{
        margin: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* <Button text="LOG IN" />
      <Button text="CREATE ACCOUNT" /> */}
      <div style={{ margin: '150px 8px 8px 8px' }}>
        <FacebookLogin />
      </div>
      <div style={{ margin: '8px' }}>
        <GoogleSignIn />
      </div>
    </div>
    {/* <RecipeCard
      imgsrc="https://picsum.photos/300/200/?random"
      title="This is a recipe title"
      description="This is a recipe description."
    /> */}
  </StyledHome>
);

// Login.propTypes = {
//   text: PropTypes.string,
// };

export default Login;

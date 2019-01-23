import React from 'react';
import StyledHome from './style.js';
import InputField from '../InputField'
import Logo from '../Logo';
import Button from '../Button';
import HeaderText from '../HeaderText'
const Home = () => (
    <StyledHome>
        <HeaderText text="CREATE AN ACCOUNT" />
        <Logo />
        <InputField placeholder="Full Name" />
        <Button text="LOG IN" />
        <Button text="CREATE ACCOUNT" />
    </StyledHome>
);

export default Home;
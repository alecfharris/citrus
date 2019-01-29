import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Creation from '../Creation';
import Login from '../Login';

const Home = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    {/* <Route path="/create" component={Creation} /> */}
  </Switch>
);

export default Home;

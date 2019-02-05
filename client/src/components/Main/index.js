import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import FridgeList from '../FridgeList';
import Browse from '../Browse';
import Welcome from '../Welcome';
import Login from '../Login';
import Home from '../Home';

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/welcome" component={Welcome} />
      <Route exact path="/fridgelist" component={FridgeList} />
      <Route exact path="/browse" component={Browse} />
      <Route exact path="/login" component={Login} />
      <Route path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Main;

import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import FridgeList from '../FridgeList';
import Browse from '../Browse';
import Welcome from '../Welcome';
import Login from '../Login';
import Home from '../Home';
import EnterRecipe from '../EnterRecipe';

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/welcome" component={Welcome} />
      <Route exact path="/fridgelist" component={FridgeList} />
      <Route exact path="/browse" component={Browse} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/enterrecipe" component={EnterRecipe} />
      <Route path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Main;

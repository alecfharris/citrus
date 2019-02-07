import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Fridge from '../Fridge';
import Browse from '../Browse';
import Welcome from '../Welcome';
import Login from '../Login';
import Home from '../Home';
import RecipePage from '../RecipePage';

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/welcome" component={Welcome} />
      <Route exact path="/fridge" component={Fridge} />
      <Route exact path="/browse" component={Browse} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/recipe" component={RecipePage} />
      <Route path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Main;

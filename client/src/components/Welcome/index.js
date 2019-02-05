import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Recipe from '../Recipe';
import FridgeList from '../FridgeList';
import Browse from '../Browse';

const Welcome = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/fridgelist" component={FridgeList} />
      <Route path="/recipe" component={Recipe} />
      <Route path="/browse" component={Browse} />
    </Switch>
  </BrowserRouter>
);

export default Welcome;

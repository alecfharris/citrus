import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Creation from '../Creation';
import Login from '../Login';
import FridgeInfo from '../FridgeInfo';
import FridgeList from '../FridgeList';
import Welcome from '../Welcome';
// import RecipeBrowse from '../RecipeBrowse';

const Home = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/fridgeinfo" component={FridgeInfo} />
    <Route exact path="/fridgelist" component={FridgeList} />
    <Route exact path="/welcome" component={Welcome} />
    {/* <Route exact path="/recipes" component={RecipeBrowse} /> */}
  </Switch>
);

export default Home;

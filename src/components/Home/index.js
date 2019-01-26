import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Login";
import Creation from "../Creation";

const Home = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route path="/create/" component={Creation} />
  </Switch>
);

export default Home;

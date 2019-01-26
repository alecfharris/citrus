import React from "react";
import Recipe from "../Recipe";
import FridgeList from "../FridgeList";
import { Switch, Route } from "react-router-dom";

const Welcome = () => {
  <Switch>
    <Route exact path="/fridgelist" component={FridgeList} />
    <Route path="/recipe" component={Recipe} />
  </Switch>;
};

export default Welcome;

import React from "react";
import Recipe from "../Recipe";
import FridgeList from "../FridgeList";
import { Switch, Route } from "react-router-dom";
import Browse from "../Browse";

const Welcome = () => {
  <Switch>
    <Route exact path="/fridgelist" component={FridgeList} />
    <Route path="/recipe" component={Recipe} />
    <Route path="/browse" component={Browse} />
  </Switch>;
};

export default Welcome;

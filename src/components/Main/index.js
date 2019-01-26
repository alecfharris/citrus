import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Recipe from "./Recipe";
import FridgeInfo from "./FridgeInfo";
import FridgeList from "./FridgeList";
import Browse from "./Browse";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/recipe" component={Recipe} />
      <Route path="/fridgelist" component={FridgeList} />
      <Route path="/browse" component={Browse} />
    </Switch>
  </main>
);

export default Main;

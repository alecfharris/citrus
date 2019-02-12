import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Fridge from '../Fridge';
import Browse from '../Browse';
import Welcome from '../Welcome';
import Login from '../Login';
import Home from '../Home';
import EnterRecipe from '../EnterRecipe';
import RecipePage from '../RecipePage';
import SearchByIngredient from '../SearchByIngredient';

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/welcome" component={Welcome} />
      <Route exact path="/fridge" component={Fridge} />
      <Route exact path="/browse" component={Browse} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/enterrecipe" component={EnterRecipe} />
      <Route exact path="/searchbyingredient" component={SearchByIngredient} />
      <Route exact path="/recipe/:id" component={RecipePage} />
      <Route path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Main;

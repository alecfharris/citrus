import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Fridge from './components/Fridge';
import Browse from './components/Browse';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Home from './components/Home';
import EnterRecipe from './components/EnterRecipe';
import RecipePage from './components/RecipePage';
import SearchByIngredient from './components/SearchByIngredient';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/fridge" component={Fridge} />
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/enterrecipe" component={EnterRecipe} />
          <Route
            exact
            path="/searchbyingredient"
            component={SearchByIngredient}
          />
          <Route exact path="/recipe/:id" component={RecipePage} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;

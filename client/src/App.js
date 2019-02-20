import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Fridge from './pages/Fridge';
import Browse from './components/Browse';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Home from './pages/Home';
import EnterRecipe from './pages/EnterRecipe';
import Recipe from './pages/Recipe';
import SearchByIngredient from './pages/SearchByIngredient';

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
          <Route exact path="/recipe/:id" component={Recipe} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FridgePure from './components/Fridge/Fridge.pure';
import BrowsePure from './components/Browse/Browse.pure';
import WelcomePure from './components/Welcome/Welcome.pure';
import LoginPure from './components/Login/Login.pure';
import HomePure from './components/Home/Home.pure';
import EnterRecipePure from './components/EnterRecipe/EnterRecipe.pure';
import Recipe from './components/Recipe/Recipe.pure';
import SearchByIngredient from './components/SearchByIngredient/SearchByIngredient.pure';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomePure} />
          <Route exact path="/welcome" component={WelcomePure} />
          <Route exact path="/fridge" component={FridgePure} />
          <Route exact path="/browse" component={BrowsePure} />
          <Route exact path="/login" component={LoginPure} />
          <Route exact path="/enterrecipe" component={EnterRecipePure} />
          <Route
            exact
            path="/searchbyingredient"
            component={SearchByIngredient}
          />
          <Route exact path="/recipe/:id" component={Recipe} />
          <Route path="/home" component={HomePure} />
        </Switch>
      </Router>
    );
  }
}

export default App;

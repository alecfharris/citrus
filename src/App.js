import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Fridge from './components/Fridge/Fridge';
import BrowseView from './components/Browse/Browse.pure';
import WelcomePure from './components/Welcome/Welcome.pure';
import LoginPure from './components/Login/Login.pure';
import HomePure from './components/Home/Home.pure';
import EnterRecipePure from './components/EnterRecipe/EnterRecipe.pure';
import RecipePageView from './components/RecipePage/RecipePage.pure';
import UserRecipePageView from './components/UserRecipePage/UserRecipePage.pure';
import SearchByIngredient from './components/SearchByIngredient/SearchByIngredient.pure';

export default class App extends Component {
  render() {
    // eslint-disable-next-line
    const App = () => (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={WelcomePure} />
          <Route exact path="/welcome" component={WelcomePure} />
          <Route exact path="/fridge" component={Fridge} />
          <Route exact path="/browse" component={BrowseView} />
          <Route exact path="/login" component={LoginPure} />
          <Route exact path="/enterrecipe" component={EnterRecipePure} />
          <Route
            exact
            path="/searchbyingredient"
            component={SearchByIngredient}
          />
          <Route exact path="/recipe/:id" component={RecipePageView} />
          <Route exact path="/recipes/" component={UserRecipePageView} />
          <Route path="/home" component={HomePure} />
        </Switch>
      </BrowserRouter>
    );

    return <App />;
  }
}

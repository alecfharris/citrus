import React, { Component } from 'react';
import RecipeTitle from './RecipeTitle';
import RecipeForm from './RecipeForm';
import API from '../../utils/API';

class IngredientInput extends Component {
  state = {
    ingredientDivs: [
      {
        name: ``,
        quantity: ``,
      },
    ],
    instructions: ``,
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  // Database Queries go here
  saveRecipe = props => {
    const { ingredientDivs } = this.state;
    ingredientDivs.map((currElement, index) => {
      // This will update the state array with whatever text is currently in the values of the inputs so that they are saved
      ingredientDivs[index].name = document.getElementById(
        `ingredientName${index}`
      ).value;
      ingredientDivs[index].quantity = document.getElementById(
        `ingredientQuantity${index}`
      ).value;
      return ingredientDivs;
    });
    this.setState({ ingredientDivs }, () => {
      API.saveRecipe({
        title: props.title,
        ingredients: props.ingredients,
        instructions: props.instructions,
        // TODO change accountId to real value once possible
        accountId: 't0d0r3m0v3l8rt3st64',
      });
    });
  };

  onGenNewInput = () => {
    const { ingredientDivs } = this.state;
    ingredientDivs.map((currElement, index) => {
      // This will update the state array with whatever text is currently in the values of the inputs so that they are saved
      ingredientDivs[index].name = document.getElementById(
        `ingredientName${index}`
      ).value;
      ingredientDivs[index].quantity = document.getElementById(
        `ingredientQuantity${index}`
      ).value;
      return ingredientDivs;
    });
    ingredientDivs.push({
      name: ``,
      quantity: ``,
    });
    this.setState({ ingredientDivs });
  };

  handleChange(event) {
    this.setState({ instructions: event.target.value });
  }

  render() {
    const { ingredientDivs } = this.state;
    const { instructions } = this.state;
    return (
      <div>
        <RecipeTitle />
        <div>
          {ingredientDivs.map((currElement, index) => (
            <React.Fragment>
              <div>
                <div>
                  Name:
                  <input
                    type="text"
                    name="ingredient-name"
                    id={`ingredientName${index}`}
                    defaultValue={currElement.name}
                  />
                </div>
                <div
                  style={{
                    margin: '5px',
                  }}
                >
                  Quantity:
                  <input
                    type="text"
                    name="ingredient-quantity"
                    id={`ingredientQuantity${index}`}
                    defaultValue={currElement.quantity}
                  />
                </div>
              </div>
            </React.Fragment>
          ))}
          <button
            type="submit"
            onClick={() => {
              this.onGenNewInput();
            }}
          >
            Add Another Ingredient
          </button>
        </div>
        <form>
          <div
            style={{
              margin: '5px',
            }}
          >
            <div>
              Instructions:
              <textarea
                rows="8"
                cols="50"
                name="instructions"
                onChange={this.handleChange}
                id="recipe-instructions"
              />
            </div>
          </div>
          <RecipeForm
            title={
              document.getElementById(`recipe-title`)
                ? document.getElementById('recipe-title').value
                : null
            }
            ingredients={ingredientDivs}
            instructions={instructions}
            saveRecipe={this.saveRecipe}
          />
        </form>
      </div>
    );
  }
}

export default IngredientInput;

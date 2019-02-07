import React, { Component } from 'react';
import RecipeTitle from '../RecipeTitle';
import RecipeForm from '../RecipeForm';
import API from '../../utils/API';

class IngredientInput extends Component {
    // TODO map array to render input for each item in array
    // TODO create array
    // TODO increase length of array for each time add ingredient button is pressed
    // TODO save items to array each time ingredient button is pressed so that they can be in the textbox when new element is generated

    state = {
        ingredientDivs: [{
            name: ``,
            quantity: ``
        }],
        instructions: ``
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
      }

    // Database Queries go here
    saveRecipe = (props) => {
        console.log();
        const ingredientDivs = this.state.ingredientDivs;
        ingredientDivs.map((currElement, index) => {
            // This will update the state array with whatever text is currently in the values of the inputs so that they are saved
            ingredientDivs[index].name = document.getElementById(`ingredientName${index}`).value;
            ingredientDivs[index].quantity = document.getElementById(`ingredientQuantity${index}`).value;
        })
        this.setState({ ingredientDivs }, () => {
            API.saveRecipe({
                title: props.title,
                ingredients: props.ingredients,
                instructions: props.instructions,
                // TODO change accountId to real value once possible
                accountId: 't0d0r3m0v3l8rt3st64'
            })
        });


    }

    onGenNewInput = () => {
        const ingredientDivs = this.state.ingredientDivs;
        ingredientDivs.map((currElement, index) => {
            // This will update the state array with whatever text is currently in the values of the inputs so that they are saved
            ingredientDivs[index].name = document.getElementById(`ingredientName${index}`).value;
            ingredientDivs[index].quantity = document.getElementById(`ingredientQuantity${index}`).value;
        })
        ingredientDivs.push({
            name: ``,
            quantity: ``
        })
        this.setState({ ingredientDivs });
    }

    handleChange(event) {
        this.setState({ instructions: event.target.value })
    }


    render() {
        return (
            <div>
                <RecipeTitle />
                <div>
                    {this.state.ingredientDivs.map((currElement, index) => {
                        return (
                            <React.Fragment>
                                <div>
                                    <label>
                                        Name:
            <input type="text" name="ingredient-name" id={`ingredientName${index}`} defaultValue={currElement.name} />
                                    </label>
                                    <label style={{
                                        margin: "5px"
                                    }} >
                                        Quantity:
                <input type="text" name="ingredient-quantity" id={`ingredientQuantity${index}`} defaultValue={currElement.quantity} />
                                    </label>
                                </div>
                            </React.Fragment>
                        )
                    })}
                    <button type="submit" onClick={() => {this.onGenNewInput()}}>Add Another Ingredient</button>
                </div>
                <form>
                <div
            style={{
                margin: '5px'
            }}>
            <label>
                Instructions:
    <textarea rows="8" cols="50" name="instructions" onChange={this.handleChange} id='recipe-instructions'/>
            </label>
        </div>
                <RecipeForm
                    title={document.getElementById(`recipe-title`) ? document.getElementById('recipe-title').value : null}
                    ingredients={this.state.ingredientDivs}
                    instructions={ this.state.instructions /*document.getElementById(`recipe-instructions`) ? document.getElementById('recipe-instructions').value : null */}
                    saveRecipe={this.saveRecipe} />
                </form>
            </div>
        )
    }


}

export default IngredientInput;
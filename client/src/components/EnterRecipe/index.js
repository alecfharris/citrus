import React from 'react';
import { Component } from 'react';
import API from '../../utils/API';
import IngredientInput from '../IngredientInput';

// Database Queries go here
// const saveRecipe = (props) => {
//     API.saveRecipe({
//         title: props.title,
//         ingredients: props.ingredients,
//         instructions: props.instructions,
//         // TODO change accountId to real value once possible
//         accountId: 't0d0r3m0v3l8rt3st64'
//       })
// }

// Event.target

class EnterRecipe extends Component {
    
    render() {
        return (
            <div
        style={{
            margin: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
            <IngredientInput />
    </div>
// Form Views go here (from a separate file)
        )
        }
}

export default EnterRecipe;
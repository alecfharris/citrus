import React, { Component } from 'react';
import IngredientInput from '../IngredientInput';

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
    );
  }
}

export default EnterRecipe;

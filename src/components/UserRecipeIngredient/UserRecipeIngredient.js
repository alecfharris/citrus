import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, Icon } from './UserRecipeIngredient.style';

function UserRecipeIngredient({ status, title, secondary, quantity, unit }) {
  const ingredientString = `${quantity} ${unit} ${title}`;
  return (
    <ListItem>
      <Icon status={status} />
      <ListItemText primary={ingredientString} secondary={secondary} />
    </ListItem>
  );
}

UserRecipeIngredient.propTypes = {
  status: PropTypes.string,
  title: PropTypes.string,
  quantity: PropTypes.string,
  unit: PropTypes.string,
  secondary: PropTypes.string,
};

export default UserRecipeIngredient;

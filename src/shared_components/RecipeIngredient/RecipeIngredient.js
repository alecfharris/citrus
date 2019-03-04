import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, Icon } from './RecipeIngredient.style';

function RecipeIngredient({ status, title, secondary }) {
  return (
    <ListItem>
      <Icon status={status} />
      <ListItemText primary={title} secondary={secondary} />
    </ListItem>
  );
}

RecipeIngredient.propTypes = {
  status: PropTypes.string,
  title: PropTypes.string,
  secondary: PropTypes.string,
};

export default RecipeIngredient;

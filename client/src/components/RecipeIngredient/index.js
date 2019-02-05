import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '../StatusIcon';

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

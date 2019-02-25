import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '../StatusIcon';

function FridgeItem({ status, title, quantity, unit }) {
  const quantityArray = Object.values({ quantity });
  const quantityString = JSON.stringify(quantityArray[0]);
  const unitArray = Object.values({ unit });
  const unitString = unitArray[0];
  const combined = `${quantityString} ${unitString}`;
  const description = unitString ? combined : quantityString;
  return (
    <ListItem>
      <Icon status={status} />
      <ListItemText primary={title} secondary={description} />
    </ListItem>
  );
}

FridgeItem.propTypes = {
  title: PropTypes.string,
  unit: PropTypes.string,
  quantity: PropTypes.number,
  status: PropTypes.string,
};

export default FridgeItem;

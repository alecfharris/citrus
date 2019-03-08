import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, Icon } from './FridgeItem.styles';

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

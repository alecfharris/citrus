import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import Avatar from '@material-ui/core/Avatar';
import Icon from '../StatusIcon';

function FridgeItem({ status, title, description }) {
  return (
    <ListItem>
      <Icon status={status} />
      <ListItemText primary={title} secondary={description} />
    </ListItem>
  );
}

FridgeItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.string,
};

export default FridgeItem;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Inventory from './inventory';
import FridgeInfo from '../FridgeInfo';

const styles = () => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    maxHeight: '600px',
    background: '#FFF',
    overflowY: 'scroll',
  },
});

function FridgeList(props) {
  const inventory = Inventory.fridge;
  const { classes } = props;
  return (
    <List className={classes.root}>
      {inventory.map(item => (
        <FridgeInfo
          status={item.status}
          title={item.name}
          quantity={item.quantity}
          unit={item.unit}
        />
      ))}
    </List>
  );
}

FridgeList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FridgeList);

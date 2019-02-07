import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Inventory from './inventory';
import FridgeInfo from '../FridgeInfo';

const styles = () => ({
  root: {
    width: '100%',
    maxWidth: '660px',
    maxHeight: '600px',
    background: '#FFF',
    overflowY: 'scroll',
  },
});

// Alphabetize inventory by name
function compare(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

function FridgeList(props) {
  const inventory = Inventory.fridge;
  const { classes } = props;
  inventory.sort(compare);
  return (
    <List className={classes.root}>
      {inventory.map(item => (
        <FridgeInfo
          status={item.status}
          title={item.name}
          quantity={item.quantity}
          unit={item.unit}
          purchaseDate={item.purchaseDate}
        />
      ))}
    </List>
  );
}

FridgeList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FridgeList);
